import bpy
import math
import os

def create_masterpiece():
    print("Generating Final Masterpiece Station...")
    
    # Clean scene
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

    def link_obj(obj):
        if obj.name not in station_collection.objects:
            station_collection.objects.link(obj)
        for c in list(obj.users_collection):
            if c != station_collection:
                c.objects.unlink(obj)
        created_objects.append(obj)

    # --- GLTF COMPLIANT MATERIALS ---
    # We use pure Principled BSDF values that translate 1:1 into GLTF
    mats = {}

    mat_hull_dark = bpy.data.materials.new(name="Mat_Hull_Dark")
    mat_hull_dark.use_nodes = True
    bsdf = mat_hull_dark.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.02, 0.02, 0.03, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.9
    bsdf.inputs['Roughness'].default_value = 0.6
    mats["Hull_Dark"] = mat_hull_dark

    mat_hull_light = bpy.data.materials.new(name="Mat_Hull_Light")
    mat_hull_light.use_nodes = True
    bsdf = mat_hull_light.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.3, 0.3, 0.35, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.85
    bsdf.inputs['Roughness'].default_value = 0.4
    mats["Hull_Light"] = mat_hull_light

    mat_rocket = bpy.data.materials.new(name="Mat_Rocket")
    mat_rocket.use_nodes = True
    bsdf = mat_rocket.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.8, 0.8, 0.85, 1.0)
    bsdf.inputs['Metallic'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = 0.1
    mats["Rocket"] = mat_rocket

    mat_neon_cyan = bpy.data.materials.new(name="Mat_Neon_Cyan")
    mat_neon_cyan.use_nodes = True
    bsdf = mat_neon_cyan.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0, 0, 0, 1)
    if 'Emission Color' in bsdf.inputs:
        bsdf.inputs['Emission Color'].default_value = (0.0, 0.8, 1.0, 1.0)
        bsdf.inputs['Emission Strength'].default_value = 15.0
    mats["Neon_Cyan"] = mat_neon_cyan

    mat_neon_orange = bpy.data.materials.new(name="Mat_Neon_Orange")
    mat_neon_orange.use_nodes = True
    bsdf = mat_neon_orange.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0, 0, 0, 1)
    if 'Emission Color' in bsdf.inputs:
        bsdf.inputs['Emission Color'].default_value = (1.0, 0.2, 0.0, 1.0)
        bsdf.inputs['Emission Strength'].default_value = 15.0
    mats["Neon_Orange"] = mat_neon_orange

    mat_holo_glass = bpy.data.materials.new(name="Mat_Holo_Glass")
    mat_holo_glass.use_nodes = True
    mat_holo_glass.blend_method = 'BLEND'
    bsdf = mat_holo_glass.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.0, 0.5, 1.0, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.5
    bsdf.inputs['Roughness'].default_value = 0.1
    bsdf.inputs['Alpha'].default_value = 0.3
    if 'Transmission Weight' in bsdf.inputs:
        bsdf.inputs['Transmission Weight'].default_value = 0.9 # Blender 4.0+
    elif 'Transmission' in bsdf.inputs:
        bsdf.inputs['Transmission'].default_value = 0.9
    mats["Holo_Glass"] = mat_holo_glass

    # --- GEOMETRY ---
    
    # 1. Main Sphere & Rings
    sphere_loc = (-36.0, 0.0, 0.0)
    bpy.ops.mesh.primitive_uv_sphere_add(radius=12.0, location=sphere_loc, segments=64, ring_count=32)
    sphere = bpy.context.active_object
    sphere.data.materials.append(mats["Hull_Dark"])
    link_obj(sphere)

    # Micro-greeble rings on sphere
    for z_off in [-8, -4, 0, 4, 8]:
        rad = 12.0 * math.cos(math.asin(z_off/12.0)) + 0.5
        bpy.ops.mesh.primitive_torus_add(major_radius=rad, minor_radius=0.3, location=(sphere_loc[0], sphere_loc[1], sphere_loc[2] + z_off))
        ring = bpy.context.active_object
        ring.data.materials.append(mats["Neon_Cyan"] if z_off == 0 else mats["Hull_Light"])
        link_obj(ring)

    # Arms
    arm_locs = [
        ((-50.0, 0.0, 0.0), (0, math.pi/2, 0)),
        ((-36.0, 14.0, 0.0), (math.pi/2, 0, 0)),
        ((-36.0, -14.0, 0.0), (math.pi/2, 0, 0)),
        ((-18.0, 0.0, 0.0), (0, math.pi/2, 0)) # Connector to Hab Pod
    ]
    for loc, rot in arm_locs:
        depth = 28.0 if loc[0] != -18.0 else 14.0
        bpy.ops.mesh.primitive_cylinder_add(radius=9.6, depth=depth, rotation=rot, location=loc)
        arm = bpy.context.active_object
        arm.data.materials.append(mats["Hull_Dark"])
        link_obj(arm)

    # 2. Habitation Pod & Window
    bpy.ops.mesh.primitive_cube_add(scale=(32.0, 20.0, 17.6), location=(4.0, 0.0, 0.0))
    hab = bpy.context.active_object
    hab.data.materials.append(mats["Hull_Light"])
    link_obj(hab)

    # Hexagonal Window Cut & Glass
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=7.0, depth=2.0, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -10.0, 0.0))
    hole = bpy.context.active_object
    
    bool_mod = hab.modifiers.new(name="WinCut", type='BOOLEAN')
    bool_mod.object = hole
    bool_mod.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bool_mod.name)
    bpy.data.objects.remove(hole, do_unlink=True)

    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=6.8, depth=0.2, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -9.9, 0.0))
    glass = bpy.context.active_object
    glass.data.materials.append(mats["Holo_Glass"])
    link_obj(glass)
    
    # Glowing Hex Rim
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=7.1, depth=0.1, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -10.05, 0.0))
    win_rim = bpy.context.active_object
    win_rim.data.materials.append(mats["Neon_Cyan"])
    link_obj(win_rim)
    # Boolean hole in rim to make it a ring
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=6.9, depth=2.0, rotation=(math.pi/2, math.pi/8, 0), location=(4.0, -10.05, 0.0))
    rim_hole = bpy.context.active_object
    bm = win_rim.modifiers.new(name="RimCut", type='BOOLEAN')
    bm.object = rim_hole
    bm.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = win_rim
    bpy.ops.object.modifier_apply(modifier=bm.name)
    bpy.data.objects.remove(rim_hole, do_unlink=True)

    # 3. INTERIOR HOLOGRAPHIC UI (SCENE 2 FOCUS)
    # Console Base
    bpy.ops.mesh.primitive_cube_add(scale=(6.0, 2.0, 1.0), location=(4.0, -6.0, -4.0))
    console = bpy.context.active_object
    console.rotation_euler = (math.radians(-10), 0, 0)
    console.data.materials.append(mats["Hull_Dark"])
    link_obj(console)
    
    # Holo Projector Pad
    bpy.ops.mesh.primitive_cylinder_add(radius=1.5, depth=0.2, location=(4.0, -5.5, -2.9))
    projector = bpy.context.active_object
    projector.rotation_euler = (math.radians(-10), 0, 0)
    projector.data.materials.append(mats["Hull_Light"])
    link_obj(projector)

    # Hologram Earth / System Sphere
    bpy.ops.mesh.primitive_uv_sphere_add(radius=1.2, location=(4.0, -5.5, -0.5), segments=32, ring_count=16)
    holo_sphere = bpy.context.active_object
    holo_sphere.data.materials.append(mats["Neon_Cyan"])
    link_obj(holo_sphere)

    # Hologram Data Rings
    for r, rot in [(1.5, (0.5, 0.2, 0.0)), (1.8, (-0.2, 0.8, 0.0))]:
        bpy.ops.mesh.primitive_torus_add(major_radius=r, minor_radius=0.02, location=(4.0, -5.5, -0.5))
        ring = bpy.context.active_object
        ring.rotation_euler = rot
        ring.data.materials.append(mats["Neon_Orange"])
        link_obj(ring)

    # Floating Glass Data Panels
    for x_off, z_rot in [(-2.5, 0.3), (2.5, -0.3)]:
        bpy.ops.mesh.primitive_cube_add(scale=(1.5, 0.05, 2.0), location=(4.0 + x_off, -5.0, -1.0))
        panel = bpy.context.active_object
        panel.rotation_euler = (math.radians(-10), 0, z_rot)
        panel.data.materials.append(mats["Holo_Glass"])
        link_obj(panel)
        # Panel Edge Glow
        bpy.ops.mesh.primitive_cube_add(scale=(1.6, 0.02, 2.1), location=(4.0 + x_off, -5.0, -1.0))
        edge = bpy.context.active_object
        edge.rotation_euler = (math.radians(-10), 0, z_rot)
        edge.data.materials.append(mats["Neon_Cyan"])
        # Cut the center out to make a frame
        bpy.ops.mesh.primitive_cube_add(scale=(1.55, 0.5, 2.05), location=(4.0 + x_off, -5.0, -1.0))
        hole = bpy.context.active_object
        hole.rotation_euler = (math.radians(-10), 0, z_rot)
        bm = edge.modifiers.new(name="EdgeCut", type='BOOLEAN')
        bm.object = hole
        bm.operation = 'DIFFERENCE'
        bpy.context.view_layer.objects.active = edge
        bpy.ops.object.modifier_apply(modifier=bm.name)
        bpy.data.objects.remove(hole, do_unlink=True)
        link_obj(edge)

    # 4. DOCKING BAY & ROCKET
    rocket_x, rocket_y = 12.0, -25.0
    
    # Neck & Pad
    bpy.ops.mesh.primitive_cylinder_add(radius=1.5, depth=15.0, rotation=(math.pi/2, 0, 0), location=(rocket_x, -17.5, -2.0))
    neck = bpy.context.active_object
    neck.data.materials.append(mats["Hull_Dark"])
    link_obj(neck)

    bpy.ops.mesh.primitive_cylinder_add(radius=8.0, depth=0.8, location=(rocket_x, rocket_y, -2.0))
    pad = bpy.context.active_object
    pad.data.materials.append(mats["Hull_Dark"])
    link_obj(pad)
    
    # Glowing Pad Ring
    bpy.ops.mesh.primitive_torus_add(major_radius=7.8, minor_radius=0.1, location=(rocket_x, rocket_y, -1.6))
    pad_ring = bpy.context.active_object
    pad_ring.data.materials.append(mats["Neon_Orange"])
    link_obj(pad_ring)

    # Rocket Core & Nose
    bpy.ops.mesh.primitive_cylinder_add(radius=1.4, depth=11.2, location=(rocket_x, rocket_y, 4.0))
    rocket = bpy.context.active_object
    rocket.data.materials.append(mats["Rocket"])
    link_obj(rocket)

    bpy.ops.mesh.primitive_cone_add(radius1=1.4, radius2=0.0, depth=2.8, location=(rocket_x, rocket_y, 11.0))
    nose = bpy.context.active_object
    nose.data.materials.append(mats["Rocket"])
    link_obj(nose)

    # Rocket Boosters
    for dx, dy in [(2.0, 0.0), (-2.0, 0.0), (0.0, 2.0), (0.0, -2.0)]:
        bx, by = rocket_x + dx, rocket_y + dy
        bpy.ops.mesh.primitive_cylinder_add(radius=0.6, depth=4.8, location=(bx, by, 1.6))
        b = bpy.context.active_object
        b.data.materials.append(mats["Rocket"])
        link_obj(b)
        
        bpy.ops.mesh.primitive_cone_add(radius1=0.5, radius2=0.7, depth=1.5, location=(bx, by, -1.2))
        glow = bpy.context.active_object
        glow.data.materials.append(mats["Neon_Cyan"])
        link_obj(glow)

    # 5. GANTRY TOWER
    gantry_x, gantry_y = 22.0, -25.0
    for dx, dy in [(1.2, 1.2), (1.2, -1.2), (-1.2, 1.2), (-1.2, -1.2)]:
        bpy.ops.mesh.primitive_cylinder_add(radius=0.3, depth=24.0, location=(gantry_x + dx, gantry_y + dy, 4.0))
        pole = bpy.context.active_object
        pole.data.materials.append(mats["Hull_Light"])
        link_obj(pole)

    bpy.ops.mesh.primitive_cube_add(scale=(10.0, 1.2, 0.8), location=(17.0, -25.0, 3.2))
    bridge = bpy.context.active_object
    bridge.data.materials.append(mats["Hull_Dark"])
    link_obj(bridge)

    # --- GLB EXPORT ---
    print("Exporting Masterpiece GLB...")
    assets_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/assets"
    os.makedirs(assets_dir, exist_ok=True)
    glb_path = os.path.join(assets_dir, "Unified_Station_Masterpiece.glb")
    
    bpy.ops.export_scene.gltf(
        filepath=glb_path,
        export_format='GLB',
        use_selection=False,
        export_apply=True,
        export_materials='EXPORT'
    )
    print(f"Exported successfully to {glb_path}")
    
    return len(created_objects)

if __name__ == "__main__":
    create_masterpiece()
