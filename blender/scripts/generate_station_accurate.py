import bpy
import math
import os

def build_accurate_station():
    print("Building Accurate Station based on Images...")
    
    # 1. Clean Scene
    bpy.ops.object.select_all(action='DESELECT')
    for obj in list(bpy.data.objects):
        if obj.type == 'MESH':
            bpy.data.objects.remove(obj, do_unlink=True)
            
    if "AccurateStation" in bpy.data.collections:
        col = bpy.data.collections["AccurateStation"]
        for obj in list(col.objects):
            bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(col)

    station_collection = bpy.data.collections.new("AccurateStation")
    bpy.context.scene.collection.children.link(station_collection)
    created_objects = []

    def link_obj(obj):
        if obj.name not in station_collection.objects:
            station_collection.objects.link(obj)
        for c in list(obj.users_collection):
            if c != station_collection:
                c.objects.unlink(obj)
        created_objects.append(obj)

    # 2. Materials
    mats = {}
    
    mat_hull = bpy.data.materials.new(name="Mat_Hull")
    mat_hull.use_nodes = True
    bsdf = mat_hull.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.2, 0.2, 0.22, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.8
    bsdf.inputs['Roughness'].default_value = 0.5
    mats["Hull"] = mat_hull

    mat_dark = bpy.data.materials.new(name="Mat_Dark")
    mat_dark.use_nodes = True
    bsdf = mat_dark.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.05, 0.05, 0.05, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.9
    bsdf.inputs['Roughness'].default_value = 0.7
    mats["Dark"] = mat_dark

    mat_bronze = bpy.data.materials.new(name="Mat_Bronze")
    mat_bronze.use_nodes = True
    bsdf = mat_bronze.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.8, 0.5, 0.2, 1.0)
    bsdf.inputs['Metallic'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = 0.3
    mats["Bronze"] = mat_bronze

    mat_cyan = bpy.data.materials.new(name="Mat_Cyan_Glow")
    mat_cyan.use_nodes = True
    bsdf = mat_cyan.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0, 0, 0, 1)
    if 'Emission Color' in bsdf.inputs:
        bsdf.inputs['Emission Color'].default_value = (0.0, 0.8, 1.0, 1.0)
        bsdf.inputs['Emission Strength'].default_value = 10.0
    mats["Cyan"] = mat_cyan

    # D = 20 base unit scale
    hub_radius = 10.0
    
    # --- CENTRAL HUB ---
    # Flattened top/bottom sphere
    bpy.ops.mesh.primitive_uv_sphere_add(radius=hub_radius, location=(0, 0, 0), segments=64, ring_count=32)
    hub = bpy.context.active_object
    hub.scale.z = 0.8
    hub.data.materials.append(mats["Hull"])
    link_obj(hub)

    # Thick intersecting ring gear/structure
    bpy.ops.mesh.primitive_cylinder_add(radius=10.5, depth=3.0, location=(0, 0, 0))
    collar1 = bpy.context.active_object
    collar1.data.materials.append(mats["Dark"])
    link_obj(collar1)
    
    bpy.ops.mesh.primitive_cylinder_add(radius=10.8, depth=1.0, location=(0, 0, 0))
    collar2 = bpy.context.active_object
    collar2.data.materials.append(mats["Bronze"])
    link_obj(collar2)
    
    # Glow lights on the ring
    for i in range(12):
        angle = i * (math.pi / 6)
        x = math.cos(angle) * 10.7
        y = math.sin(angle) * 10.7
        bpy.ops.mesh.primitive_cube_add(scale=(0.4, 0.4, 0.4), location=(x, y, 0))
        light = bpy.context.active_object
        light.rotation_euler = (0, 0, angle)
        mat_orange = bpy.data.materials.new(name="Mat_Orange_Glow")
        mat_orange.use_nodes = True
        bsdf = mat_orange.node_tree.nodes.get("Principled BSDF")
        bsdf.inputs['Base Color'].default_value = (0, 0, 0, 1)
        if 'Emission Color' in bsdf.inputs:
            bsdf.inputs['Emission Color'].default_value = (1.0, 0.4, 0.0, 1.0)
            bsdf.inputs['Emission Strength'].default_value = 10.0
        light.data.materials.append(mat_orange)
        link_obj(light)

    # --- ARMS (West, North, South) ---
    arm_radius = 5.0 # Thicker radius
    arm_length = 24.0
    arm_data = [
        ((-17.0, 0.0, 0.0), (0, math.pi/2, 0)), # West (-X)
        ((0.0, 17.0, 0.0), (math.pi/2, 0, 0)), # North (+Y)
        ((0.0, -17.0, 0.0), (math.pi/2, 0, 0)), # South (-Y)
    ]
    
    for loc, rot in arm_data:
        bpy.ops.mesh.primitive_cylinder_add(radius=arm_radius, depth=arm_length, location=loc, rotation=rot)
        arm = bpy.context.active_object
        arm.data.materials.append(mats["Hull"])
        link_obj(arm)
        
        # Repeating segments with ribs
        if loc[0] != 0: # West arm
            for dx in [-10.0, -15.0, -20.0, -25.0]:
                bpy.ops.mesh.primitive_torus_add(major_radius=5.5, minor_radius=0.6, location=(dx, 0, 0), rotation=rot)
                ring = bpy.context.active_object
                ring.data.materials.append(mats["Bronze"])
                link_obj(ring)
            # End cap
            bpy.ops.mesh.primitive_cylinder_add(radius=4.5, depth=0.2, location=(-29.0, 0, 0), rotation=rot)
            cap = bpy.context.active_object
            cap.data.materials.append(mats["Cyan"])
            link_obj(cap)
        else: # North/South arms
            dy_sign = 1 if loc[1] > 0 else -1
            for dy in [10.0, 15.0, 20.0, 25.0]:
                bpy.ops.mesh.primitive_torus_add(major_radius=5.5, minor_radius=0.6, location=(0, dy * dy_sign, 0), rotation=rot)
                ring = bpy.context.active_object
                ring.data.materials.append(mats["Bronze"])
                link_obj(ring)
            # End cap
            bpy.ops.mesh.primitive_cylinder_add(radius=4.5, depth=0.2, location=(0, 29.0 * dy_sign, 0), rotation=rot)
            cap = bpy.context.active_object
            cap.data.materials.append(mats["Cyan"])
            link_obj(cap)
            
            # Open lattice cage on South arm
            if dy_sign == -1:
                for rot_z in [0, math.pi/4, math.pi/2, 3*math.pi/4, math.pi, 5*math.pi/4, 3*math.pi/2, 7*math.pi/4]:
                    bpy.ops.mesh.primitive_cylinder_add(radius=0.2, depth=24.0, location=(0, -17.0, 0), rotation=(math.pi/2, 0, rot_z))
                    bar = bpy.context.active_object
                    # Offset outward
                    bar.location.x += math.cos(rot_z) * 6.0
                    bar.location.z += math.sin(rot_z) * 6.0
                    bar.data.materials.append(mats["Dark"])
                    link_obj(bar)


    # --- EAST CONNECTOR ---
    bpy.ops.mesh.primitive_cylinder_add(radius=arm_radius, depth=14.0, location=(17.0, 0.0, 0.0), rotation=(0, math.pi/2, 0))
    east_arm = bpy.context.active_object
    east_arm.data.materials.append(mats["Hull"])
    link_obj(east_arm)

    # --- HABITAT MODULE ---
    hab_x, hab_y, hab_z = 31.0, 0.0, 0.0
    bpy.ops.mesh.primitive_cube_add(scale=(18.0, 20.0, 16.0), location=(hab_x, hab_y, hab_z))
    hab = bpy.context.active_object
    hab.data.materials.append(mats["Hull"])
    # Add bevel for heavily chamfered pill-like edges
    bevel = hab.modifiers.new("Bevel", 'BEVEL')
    bevel.width = 2.0
    bevel.segments = 4
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bevel.name)
    link_obj(hab)

    # 3 massive cylindrical ports on the +X face
    for dy in [-6.0, 0.0, 6.0]:
        bpy.ops.mesh.primitive_cylinder_add(radius=2.5, depth=4.0, location=(hab_x + 9.5, hab_y + dy, hab_z), rotation=(0, math.pi/2, 0))
        port = bpy.context.active_object
        port.data.materials.append(mats["Dark"])
        link_obj(port)

    # Cyan Observation Window Recess
    bpy.ops.mesh.primitive_cube_add(scale=(12.0, 3.0, 6.0), location=(hab_x, hab_y - 9.0, hab_z))
    cutter = bpy.context.active_object
    bm = hab.modifiers.new("Cut_Window", 'BOOLEAN')
    bm.object = cutter
    bm.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bm.name)
    bpy.data.objects.remove(cutter, do_unlink=True)

    # Glass Pane
    bpy.ops.mesh.primitive_cube_add(scale=(11.5, 0.2, 5.5), location=(hab_x, hab_y - 9.5, hab_z))
    window = bpy.context.active_object
    mat_glass = bpy.data.materials.new(name="Mat_Glass")
    mat_glass.use_nodes = True
    mat_glass.node_tree.nodes.get("Principled BSDF").inputs['Transmission'].default_value = 0.9
    mat_glass.node_tree.nodes.get("Principled BSDF").inputs['Roughness'].default_value = 0.1
    mat_glass.node_tree.nodes.get("Principled BSDF").inputs['Base Color'].default_value = (0, 0.8, 1, 1)
    window.data.materials.append(mat_glass)
    link_obj(window)

    # Interior Console / Chair
    bpy.ops.mesh.primitive_cube_add(scale=(2.0, 2.0, 1.0), location=(hab_x, hab_y - 8.0, hab_z - 2.0))
    console = bpy.context.active_object
    mat_red = bpy.data.materials.new(name="Mat_Red")
    mat_red.use_nodes = True
    mat_red.node_tree.nodes.get("Principled BSDF").inputs['Base Color'].default_value = (0.8, 0.1, 0.1, 1)
    console.data.materials.append(mat_red)
    link_obj(console)
    
    # Glowing Screens
    bpy.ops.mesh.primitive_cube_add(scale=(3.0, 0.2, 1.0), location=(hab_x, hab_y - 8.8, hab_z - 1.0))
    screen = bpy.context.active_object
    screen.data.materials.append(mats["Cyan"])
    screen.rotation_euler = (math.pi/8, 0, 0)
    link_obj(screen)

    # Top surface greebles
    for gx in [hab_x - 4, hab_x, hab_x + 4]:
        bpy.ops.mesh.primitive_cube_add(scale=(2.0, 4.0, 1.0), location=(gx, hab_y, hab_z + 8.2))
        greeble = bpy.context.active_object
        greeble.data.materials.append(mats["Dark"])
        link_obj(greeble)

    # --- LAUNCH PAD & ROCKET ---
    pad_x = hab_x
    pad_y = hab_y - 24.0
    pad_z = -8.0

    # Bridge with struts
    bpy.ops.mesh.primitive_cube_add(scale=(4.0, 14.0, 2.0), location=(pad_x, hab_y - 17.0, pad_z))
    bridge = bpy.context.active_object
    bridge.data.materials.append(mats["Dark"])
    link_obj(bridge)
    
    for dx in [-2.5, 2.5]:
        bpy.ops.mesh.primitive_cylinder_add(radius=0.4, depth=14.0, location=(pad_x + dx, hab_y - 17.0, pad_z + 1.5), rotation=(math.pi/2, 0, 0))
        strut = bpy.context.active_object
        strut.data.materials.append(mats["Bronze"])
        link_obj(strut)

    # Stepped Concentric Rings Pad
    for i, r in enumerate([10.0, 8.0, 6.0]):
        bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=1.0, location=(pad_x, pad_y, pad_z + (i * 1.0)))
        pad_ring = bpy.context.active_object
        pad_ring.data.materials.append(mats["Dark"])
        link_obj(pad_ring)

    # Rocket (Multi-stage)
    rocket_z = pad_z + 3.0
    
    # Engine Bell (Thicker base)
    bpy.ops.mesh.primitive_cone_add(radius1=3.5, radius2=2.0, depth=4.0, location=(pad_x, pad_y, rocket_z))
    bell = bpy.context.active_object
    bell.data.materials.append(mats["Bronze"])
    link_obj(bell)

    # Stage 1
    bpy.ops.mesh.primitive_cylinder_add(radius=2.2, depth=14.0, location=(pad_x, pad_y, rocket_z + 9.0))
    s1 = bpy.context.active_object
    s1.data.materials.append(mats["Hull"])
    link_obj(s1)

    # Stage 2
    bpy.ops.mesh.primitive_cylinder_add(radius=1.8, depth=8.0, location=(pad_x, pad_y, rocket_z + 20.0))
    s2 = bpy.context.active_object
    s2.data.materials.append(mats["Hull"])
    link_obj(s2)

    # Nose Cone
    bpy.ops.mesh.primitive_cone_add(radius1=1.8, radius2=0.0, depth=6.0, location=(pad_x, pad_y, rocket_z + 27.0))
    nose = bpy.context.active_object
    nose.data.materials.append(mats["Bronze"])
    link_obj(nose)

    # Swept Fins (4x)
    for rot_z in [0, math.pi/2, math.pi, 3*math.pi/2]:
        # Create a diamond-like fin by starting with a cube, rotating it, and scaling
        bpy.ops.mesh.primitive_cube_add(scale=(0.4, 6.0, 5.0), location=(pad_x, pad_y, rocket_z + 3.0))
        fin = bpy.context.active_object
        fin.rotation_euler = (0, 0, rot_z)
        fin.location.x += math.cos(rot_z) * 3.5
        fin.location.y += math.sin(rot_z) * 3.5
        # Sweep modifier by manipulating vertices would be better, but simple rotation gives diamond effect
        fin.rotation_euler[0] = 0.2 # Slight pitch sweep
        fin.data.materials.append(mats["Dark"])
        link_obj(fin)

    # --- GANTRY TOWER ---
    # Moved closer
    gantry_x = pad_x + 9.0
    gantry_y = pad_y
    gantry_z = pad_z + 14.0
    
    # Tower Pillars
    for dx, dy in [(2.0, 2.0), (2.0, -2.0), (-2.0, 2.0), (-2.0, -2.0)]:
        bpy.ops.mesh.primitive_cylinder_add(radius=0.4, depth=32.0, location=(gantry_x + dx, gantry_y + dy, gantry_z))
        pillar = bpy.context.active_object
        pillar.data.materials.append(mats["Dark"])
        link_obj(pillar)

    # Cross beams and X-braces
    for z in range(int(pad_z + 2), int(gantry_z + 14), 4):
        bpy.ops.mesh.primitive_cube_add(scale=(4.8, 4.8, 0.4), location=(gantry_x, gantry_y, z))
        beam = bpy.context.active_object
        beam.data.materials.append(mats["Bronze"])
        link_obj(beam)
        
        # X brace on Y faces
        for face_dy in [-2.0, 2.0]:
            bpy.ops.mesh.primitive_cylinder_add(radius=0.2, depth=6.0, location=(gantry_x, gantry_y + face_dy, z + 2.0), rotation=(0, math.pi/4, 0))
            brace = bpy.context.active_object
            brace.data.materials.append(mats["Hull"])
            link_obj(brace)
            
            bpy.ops.mesh.primitive_cylinder_add(radius=0.2, depth=6.0, location=(gantry_x, gantry_y + face_dy, z + 2.0), rotation=(0, -math.pi/4, 0))
            brace2 = bpy.context.active_object
            brace2.data.materials.append(mats["Hull"])
            link_obj(brace2)

    # Umbilical Arms to rocket
    for z in [rocket_z + 10.0, rocket_z + 20.0]:
        bpy.ops.mesh.primitive_cube_add(scale=(6.0, 0.8, 0.8), location=(gantry_x - 3.0, gantry_y, z))
        arm = bpy.context.active_object
        arm.data.materials.append(mats["Dark"])
        link_obj(arm)

    # --- GLB EXPORT ---
    print("Exporting Accurate Station GLB...")
    assets_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/assets"
    os.makedirs(assets_dir, exist_ok=True)
    glb_path = os.path.join(assets_dir, "Unified_Station_Accurate.glb")
    
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
    build_accurate_station()
