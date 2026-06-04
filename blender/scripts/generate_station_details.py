import bpy
import math
import os

def create_station_details():
    print("Generating Detailed Cyberpunk Station...")
    
    # 1. Clear existing mesh objects from the scene
    bpy.ops.object.select_all(action='DESELECT')
    for obj in list(bpy.data.objects):
        if obj.type == 'MESH':
            bpy.data.objects.remove(obj, do_unlink=True)
            
    if "SpaceStation" in bpy.data.collections:
        col = bpy.data.collections["SpaceStation"]
        for obj in list(col.objects):
            bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(col)

    station_collection = bpy.data.collections.new("SpaceStation")
    bpy.context.scene.collection.children.link(station_collection)
    created_objects = []

    def link_to_collection(obj, target_col):
        if obj.name not in target_col.objects:
            target_col.objects.link(obj)
        for col in list(obj.users_collection):
            if col != target_col:
                col.objects.unlink(obj)

    # --- ADVANCED PBR MATERIALS ---
    mats = {}

    # Dark Hull (Greebled/Noise)
    mat_hull = bpy.data.materials.new(name="Mat_Hull_Dark_PBR")
    mat_hull.use_nodes = True
    nodes = mat_hull.node_tree.nodes
    links = mat_hull.node_tree.links
    bsdf = nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.05, 0.05, 0.06, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.95
    bsdf.inputs['Roughness'].default_value = 0.5
    
    noise = nodes.new(type="ShaderNodeTexNoise")
    noise.inputs['Scale'].default_value = 40.0
    bump = nodes.new(type="ShaderNodeBump")
    bump.inputs['Strength'].default_value = 0.2
    links.new(noise.outputs['Color'], bump.inputs['Height'])
    links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    mats["Hull_Dark"] = mat_hull

    # Light Hull (Smooth Metal)
    mat_light = bpy.data.materials.new(name="Mat_Hull_Light_PBR")
    mat_light.use_nodes = True
    bsdf = mat_light.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.4, 0.4, 0.45, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.8
    bsdf.inputs['Roughness'].default_value = 0.3
    mats["Hull_Light"] = mat_light

    # Rocket Chrome
    mat_rocket = bpy.data.materials.new(name="Mat_Rocket_Chrome")
    mat_rocket.use_nodes = True
    bsdf = mat_rocket.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.8, 0.8, 0.85, 1.0)
    bsdf.inputs['Metallic'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = 0.15
    mats["Rocket_Chrome"] = mat_rocket

    # Neon Cyan
    mat_cyan = bpy.data.materials.new(name="Mat_Neon_Cyan")
    mat_cyan.use_nodes = True
    bsdf = mat_cyan.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0,0,0,1)
    if 'Emission Color' in bsdf.inputs:
        bsdf.inputs['Emission Color'].default_value = (0.0, 0.7, 1.0, 1.0)
        bsdf.inputs['Emission Strength'].default_value = 8.0
    mats["Neon_Cyan"] = mat_cyan

    # Neon Orange
    mat_orange = bpy.data.materials.new(name="Mat_Neon_Orange")
    mat_orange.use_nodes = True
    bsdf = mat_orange.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0,0,0,1)
    if 'Emission Color' in bsdf.inputs:
        bsdf.inputs['Emission Color'].default_value = (1.0, 0.3, 0.0, 1.0)
        bsdf.inputs['Emission Strength'].default_value = 10.0
    mats["Neon_Orange"] = mat_orange

    # --- GEOMETRY GENERATION ---
    
    # 1. ZONE 1: THE LEFT CROSS-HUB & SPHERE
    sphere_loc = (-36.0, 0.0, 0.0)
    sphere_radius = 12.0
    arm_radius = 9.6
    arm_length = 28.0

    bpy.ops.mesh.primitive_uv_sphere_add(radius=sphere_radius, location=sphere_loc, segments=64, ring_count=32)
    sphere = bpy.context.active_object
    sphere.data.materials.append(mats["Hull_Dark"])
    link_to_collection(sphere, station_collection)
    created_objects.append(sphere)

    # Equatorial Ring around Sphere (Greeble)
    bpy.ops.mesh.primitive_torus_add(major_radius=12.5, minor_radius=0.5, location=sphere_loc)
    eq_ring = bpy.context.active_object
    eq_ring.data.materials.append(mats["Neon_Cyan"])
    link_to_collection(eq_ring, station_collection)
    created_objects.append(eq_ring)

    # Arms
    arm_locs = [
        ((-50.0, 0.0, 0.0), (0, math.pi/2, 0)),
        ((-36.0, 14.0, 0.0), (math.pi/2, 0, 0)),
        ((-36.0, -14.0, 0.0), (math.pi/2, 0, 0))
    ]
    for loc, rot in arm_locs:
        bpy.ops.mesh.primitive_cylinder_add(radius=arm_radius, depth=arm_length, rotation=rot, location=loc)
        arm = bpy.context.active_object
        arm.data.materials.append(mats["Hull_Dark"])
        link_to_collection(arm, station_collection)
        created_objects.append(arm)

    # Right Connector Arm (Connecting Sphere to Hab Pod)
    bpy.ops.mesh.primitive_cylinder_add(radius=arm_radius * 0.8, depth=14.0, rotation=(0, math.pi/2, 0), location=(-18.0, 0.0, 0.0))
    arm_r = bpy.context.active_object
    arm_r.data.materials.append(mats["Hull_Light"])
    link_to_collection(arm_r, station_collection)
    created_objects.append(arm_r)

    # 2. ZONE 2: HABITATION POD & HEXAGONAL WINDOW
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(32.0, 20.0, 17.6), location=(4.0, 0.0, 0.0))
    hab = bpy.context.active_object
    hab.data.materials.append(mats["Hull_Light"])
    link_to_collection(hab, station_collection)
    created_objects.append(hab)

    bevel_mod = hab.modifiers.new(name="Bevel", type='BEVEL')
    bevel_mod.width = 1.2
    bevel_mod.segments = 4

    # Add Structural Paneling Rings around Hab Pod
    for x_offset in [-10, 0, 10]:
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.0, 20.4, 18.0), location=(4.0 + x_offset, 0.0, 0.0))
        ring = bpy.context.active_object
        ring.data.materials.append(mats["Hull_Dark"])
        link_to_collection(ring, station_collection)
        created_objects.append(ring)

    # Hexagonal Window Frame
    # Cut an octagon hole using a boolean cylinder with 8 vertices
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=7.0, depth=2.0, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -9.8, 0.0))
    win_hole = bpy.context.active_object
    
    # We apply boolean to the front panel ring, or we just put the frame right in front.
    # Instead of boolean, let's create a solid frame mesh
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=8.0, depth=0.8, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -10.08, 0.0))
    win_frame = bpy.context.active_object
    win_frame.data.materials.append(mats["Hull_Dark"])
    link_to_collection(win_frame, station_collection)
    
    bool_mod = win_frame.modifiers.new(name="WindowCut", type='BOOLEAN')
    bool_mod.object = win_hole
    bool_mod.operation = 'DIFFERENCE'
    # Apply modifier so we can delete the hole cutter later
    bpy.context.view_layer.objects.active = win_frame
    bpy.ops.object.modifier_apply(modifier=bool_mod.name)
    created_objects.append(win_frame)

    # Glowing Cyan Glass inside the frame
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=7.2, depth=0.2, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -10.24, 0.0))
    win_glass = bpy.context.active_object
    win_glass.data.materials.append(mats["Neon_Cyan"])
    link_to_collection(win_glass, station_collection)
    created_objects.append(win_glass)
    
    bpy.data.objects.remove(win_hole, do_unlink=True)

    # Interior Cyberpunk Console inside the Window
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(6.0, 3.0, 1.0), location=(4.0, -5.0, -3.0))
    console = bpy.context.active_object
    console.rotation_euler = (math.radians(-15), 0, 0)
    console.data.materials.append(mats["Hull_Dark"])
    link_to_collection(console, station_collection)
    created_objects.append(console)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(5.0, 2.0, 0.1), location=(4.0, -5.5, -2.5))
    screen = bpy.context.active_object
    screen.rotation_euler = (math.radians(-15), 0, 0)
    screen.data.materials.append(mats["Neon_Orange"])
    link_to_collection(screen, station_collection)
    created_objects.append(screen)

    # 3. ZONE 3: DOCKING BAY & ROCKET (OFFSET IN Y = -25.0)
    rocket_x = 12.0
    rocket_y = -25.0
    
    # Neck
    bpy.ops.mesh.primitive_cylinder_add(radius=1.5, depth=15.0, rotation=(math.pi/2, 0, 0), location=(rocket_x, -17.5, -2.0))
    pad_neck = bpy.context.active_object
    pad_neck.data.materials.append(mats["Hull_Light"])
    link_to_collection(pad_neck, station_collection)
    created_objects.append(pad_neck)

    # Landing Pad
    bpy.ops.mesh.primitive_cylinder_add(radius=8.0, depth=0.8, location=(rocket_x, rocket_y, -2.0))
    pad = bpy.context.active_object
    pad.data.materials.append(mats["Hull_Dark"])
    link_to_collection(pad, station_collection)
    created_objects.append(pad)

    # Rocket Core
    bpy.ops.mesh.primitive_cylinder_add(radius=1.4, depth=11.2, location=(rocket_x, rocket_y, 4.0))
    rocket_core = bpy.context.active_object
    rocket_core.data.materials.append(mats["Rocket_Chrome"])
    link_to_collection(rocket_core, station_collection)
    created_objects.append(rocket_core)

    # Rocket Nose
    bpy.ops.mesh.primitive_cone_add(radius1=1.4, radius2=0.0, depth=2.8, location=(rocket_x, rocket_y, 11.0))
    rocket_nose = bpy.context.active_object
    rocket_nose.data.materials.append(mats["Rocket_Chrome"])
    link_to_collection(rocket_nose, station_collection)
    created_objects.append(rocket_nose)

    # Rocket Boosters & Fins (Greebles)
    booster_offsets = [(2.0, 0.0), (-2.0, 0.0), (0.0, 2.0), (0.0, -2.0)]
    for dx, dy in booster_offsets:
        bx = rocket_x + dx
        by = rocket_y + dy
        bpy.ops.mesh.primitive_cylinder_add(radius=0.6, depth=4.8, location=(bx, by, 1.6))
        booster = bpy.context.active_object
        booster.data.materials.append(mats["Rocket_Chrome"])
        link_to_collection(booster, station_collection)
        created_objects.append(booster)
        
        # Engine Glow
        bpy.ops.mesh.primitive_cone_add(radius1=0.5, radius2=0.7, depth=1.5, location=(bx, by, -1.2))
        glow = bpy.context.active_object
        glow.data.materials.append(mats["Neon_Orange"])
        link_to_collection(glow, station_collection)
        created_objects.append(glow)

    # 4. ZONE 4: THE GANTRY TOWER
    gantry_x = 22.0
    gantry_y = -25.0
    
    pole_offsets = [(1.2, 1.2), (1.2, -1.2), (-1.2, 1.2), (-1.2, -1.2)]
    for dx, dy in pole_offsets:
        bpy.ops.mesh.primitive_cylinder_add(radius=0.3, depth=24.0, location=(gantry_x + dx, gantry_y + dy, 4.0))
        pole = bpy.context.active_object
        pole.data.materials.append(mats["Hull_Dark"])
        link_to_collection(pole, station_collection)
        created_objects.append(pole)

    # Gantry Bridge
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(10.0, 1.2, 0.8), location=(17.0, -25.0, 3.2))
    bridge_arm = bpy.context.active_object
    bridge_arm.data.materials.append(mats["Hull_Dark"])
    link_to_collection(bridge_arm, station_collection)
    created_objects.append(bridge_arm)

    # --- GLB EXPORT ---
    print("Exporting detailed GLB to assets folder...")
    assets_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/assets"
    os.makedirs(assets_dir, exist_ok=True)
    glb_path = os.path.join(assets_dir, "Unified_Station.glb")
    
    # Ensure all modifiers are applied in export by default
    bpy.ops.export_scene.gltf(
        filepath=glb_path,
        export_format='GLB',
        use_selection=False,
        export_apply=True
    )
    print(f"Exported successfully to {glb_path}")
    
    return len(created_objects)

if __name__ == "__main__":
    create_station_details()
