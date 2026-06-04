import bpy
import math
import os
import random

def build_final_station():
    print("Building Final Iteration 12 Station (Textures & Greebles)...")
    
    # 1. Clean Scene
    bpy.ops.object.select_all(action='DESELECT')
    for obj in list(bpy.data.objects):
        if obj.type == 'MESH':
            bpy.data.objects.remove(obj, do_unlink=True)
            
    if "FinalStation" in bpy.data.collections:
        col = bpy.data.collections["FinalStation"]
        for obj in list(col.objects):
            bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(col)

    station_collection = bpy.data.collections.new("FinalStation")
    bpy.context.scene.collection.children.link(station_collection)
    created_objects = []

    def link_obj(obj):
        if obj.name not in station_collection.objects:
            station_collection.objects.link(obj)
        for c in list(obj.users_collection):
            if c != station_collection:
                c.objects.unlink(obj)
        created_objects.append(obj)

    # 2. Materials (Iteration 12: Textures & Tones)
    mats = {}
    
    mat_hull = bpy.data.materials.new(name="Mat_Hull_Paneling")
    mat_hull.use_nodes = True
    bsdf = mat_hull.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.18, 0.18, 0.20, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.85
    bsdf.inputs['Roughness'].default_value = 0.4
    # Simple procedural paneling via Voronoi bump
    voronoi = mat_hull.node_tree.nodes.new(type="ShaderNodeTexVoronoi")
    voronoi.inputs['Scale'].default_value = 15.0
    bump = mat_hull.node_tree.nodes.new(type="ShaderNodeBump")
    bump.inputs['Strength'].default_value = 0.2
    mat_hull.node_tree.links.new(voronoi.outputs['Distance'], bump.inputs['Height'])
    mat_hull.node_tree.links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
    mats["Hull"] = mat_hull

    mat_dark = bpy.data.materials.new(name="Mat_Dark_Metal")
    mat_dark.use_nodes = True
    bsdf = mat_dark.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.05, 0.05, 0.05, 1.0)
    bsdf.inputs['Metallic'].default_value = 0.95
    bsdf.inputs['Roughness'].default_value = 0.6
    mats["Dark"] = mat_dark

    mat_bronze = bpy.data.materials.new(name="Mat_Bronze")
    mat_bronze.use_nodes = True
    bsdf = mat_bronze.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0.7, 0.4, 0.15, 1.0)
    bsdf.inputs['Metallic'].default_value = 1.0
    bsdf.inputs['Roughness'].default_value = 0.3
    mats["Bronze"] = mat_bronze

    mat_cyan = bpy.data.materials.new(name="Mat_Cyan_Glow")
    mat_cyan.use_nodes = True
    bsdf = mat_cyan.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs['Base Color'].default_value = (0, 0, 0, 1)
    if 'Emission Color' in bsdf.inputs:
        bsdf.inputs['Emission Color'].default_value = (0.0, 0.8, 1.0, 1.0)
        bsdf.inputs['Emission Strength'].default_value = 15.0
    mats["Cyan"] = mat_cyan

    # --- CENTRAL HUB ---
    bpy.ops.mesh.primitive_uv_sphere_add(radius=10.0, location=(0, 0, 0), segments=128, ring_count=64)
    hub = bpy.context.active_object
    hub.scale.z = 0.85
    hub.data.materials.append(mats["Hull"])
    link_obj(hub)

    bpy.ops.mesh.primitive_cylinder_add(radius=10.5, depth=4.0, location=(0, 0, 0))
    collar1 = bpy.context.active_object
    collar1.data.materials.append(mats["Dark"])
    link_obj(collar1)
    
    # --- ARMS (West, North, South) ---
    arm_data = [
        ((-17.0, 0.0, 0.0), (0, math.pi/2, 0)),
        ((0.0, 17.0, 0.0), (math.pi/2, 0, 0)),
        ((0.0, -17.0, 0.0), (math.pi/2, 0, 0)),
    ]
    
    for loc, rot in arm_data:
        bpy.ops.mesh.primitive_cylinder_add(radius=5.0, depth=24.0, location=loc, rotation=rot)
        arm = bpy.context.active_object
        arm.data.materials.append(mats["Hull"])
        link_obj(arm)
        
        # Ribs & Greebles
        is_west = (loc[0] != 0)
        offsets = [-10.0, -15.0, -20.0, -25.0] if is_west else [10.0, 15.0, 20.0, 25.0]
        dy_sign = 1 if loc[1] >= 0 else -1
        
        for d in offsets:
            rloc = (d, 0, 0) if is_west else (0, d * dy_sign, 0)
            bpy.ops.mesh.primitive_torus_add(major_radius=5.5, minor_radius=0.6, location=rloc, rotation=rot)
            ring = bpy.context.active_object
            ring.data.materials.append(mats["Bronze"])
            link_obj(ring)
            
            # Greeble boxes on rings
            for ang in range(0, 360, 45):
                rad = math.radians(ang)
                if is_west:
                    gx, gy, gz = d, math.cos(rad)*5.5, math.sin(rad)*5.5
                else:
                    gx, gy, gz = math.cos(rad)*5.5, d * dy_sign, math.sin(rad)*5.5
                bpy.ops.mesh.primitive_cube_add(scale=(0.5, 0.5, 0.5), location=(gx, gy, gz))
                g = bpy.context.active_object
                g.data.materials.append(mats["Dark"])
                link_obj(g)

    # --- EAST CONNECTOR ---
    bpy.ops.mesh.primitive_cylinder_add(radius=5.0, depth=14.0, location=(17.0, 0.0, 0.0), rotation=(0, math.pi/2, 0))
    east_arm = bpy.context.active_object
    east_arm.data.materials.append(mats["Hull"])
    link_obj(east_arm)

    # --- HABITAT MODULE ---
    hab_x, hab_y, hab_z = 31.0, 0.0, 0.0
    bpy.ops.mesh.primitive_cube_add(scale=(18.0, 20.0, 16.0), location=(hab_x, hab_y, hab_z))
    hab = bpy.context.active_object
    hab.data.materials.append(mats["Hull"])
    bevel = hab.modifiers.new("Bevel", 'BEVEL')
    bevel.width = 2.0
    bevel.segments = 6
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bevel.name)
    link_obj(hab)

    # Cyan Observation Window
    bpy.ops.mesh.primitive_cube_add(scale=(12.0, 2.0, 6.0), location=(hab_x, hab_y - 9.5, hab_z))
    cutter = bpy.context.active_object
    bm = hab.modifiers.new("Cut_Window", 'BOOLEAN')
    bm.object = cutter
    bm.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bm.name)
    bpy.data.objects.remove(cutter, do_unlink=True)

    bpy.ops.mesh.primitive_cube_add(scale=(11.5, 0.2, 5.5), location=(hab_x, hab_y - 9.5, hab_z))
    window = bpy.context.active_object
    window.data.materials.append(mats["Cyan"])
    link_obj(window)

    # --- LAUNCH PAD ---
    pad_x = hab_x
    pad_y = hab_y - 24.0
    pad_z = -8.0
    for i, r in enumerate([10.0, 8.0, 6.0, 4.0]):
        bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=0.8, location=(pad_x, pad_y, pad_z + (i * 0.8)))
        pad_ring = bpy.context.active_object
        pad_ring.data.materials.append(mats["Dark"])
        link_obj(pad_ring)

    # --- ROCKET ---
    rocket_z = pad_z + 3.0
    bpy.ops.mesh.primitive_cone_add(radius1=3.5, radius2=2.0, depth=4.0, location=(pad_x, pad_y, rocket_z))
    bell = bpy.context.active_object
    bell.data.materials.append(mats["Bronze"])
    link_obj(bell)
    bpy.ops.mesh.primitive_cylinder_add(radius=2.2, depth=14.0, location=(pad_x, pad_y, rocket_z + 9.0))
    s1 = bpy.context.active_object
    s1.data.materials.append(mats["Hull"])
    link_obj(s1)
    bpy.ops.mesh.primitive_cylinder_add(radius=1.8, depth=8.0, location=(pad_x, pad_y, rocket_z + 20.0))
    s2 = bpy.context.active_object
    s2.data.materials.append(mats["Hull"])
    link_obj(s2)
    bpy.ops.mesh.primitive_cone_add(radius1=1.8, radius2=0.0, depth=6.0, location=(pad_x, pad_y, rocket_z + 27.0))
    nose = bpy.context.active_object
    nose.data.materials.append(mats["Bronze"])
    link_obj(nose)

    # Fins
    for rot_z in [0, math.pi/2, math.pi, 3*math.pi/2]:
        bpy.ops.mesh.primitive_cube_add(scale=(0.4, 6.0, 5.0), location=(pad_x, pad_y, rocket_z + 3.0))
        fin = bpy.context.active_object
        fin.rotation_euler = (0.2, 0, rot_z)
        fin.location.x += math.cos(rot_z) * 3.5
        fin.location.y += math.sin(rot_z) * 3.5
        fin.data.materials.append(mats["Dark"])
        link_obj(fin)

    # --- GANTRY ---
    gantry_x = pad_x + 9.0
    gantry_y = pad_y
    gantry_z = pad_z + 14.0
    for dx, dy in [(2.0, 2.0), (2.0, -2.0), (-2.0, 2.0), (-2.0, -2.0)]:
        bpy.ops.mesh.primitive_cylinder_add(radius=0.4, depth=32.0, location=(gantry_x + dx, gantry_y + dy, gantry_z))
        pillar = bpy.context.active_object
        pillar.data.materials.append(mats["Dark"])
        link_obj(pillar)
    for z in range(int(pad_z + 2), int(gantry_z + 14), 4):
        bpy.ops.mesh.primitive_cube_add(scale=(4.8, 4.8, 0.4), location=(gantry_x, gantry_y, z))
        beam = bpy.context.active_object
        beam.data.materials.append(mats["Bronze"])
        link_obj(beam)
        for face_dy in [-2.0, 2.0]:
            bpy.ops.mesh.primitive_cylinder_add(radius=0.2, depth=6.0, location=(gantry_x, gantry_y + face_dy, z + 2.0), rotation=(0, math.pi/4, 0))
            b1 = bpy.context.active_object
            b1.data.materials.append(mats["Hull"])
            link_obj(b1)
            bpy.ops.mesh.primitive_cylinder_add(radius=0.2, depth=6.0, location=(gantry_x, gantry_y + face_dy, z + 2.0), rotation=(0, -math.pi/4, 0))
            b2 = bpy.context.active_object
            b2.data.materials.append(mats["Hull"])
            link_obj(b2)

    # --- GLB EXPORT ---
    print("Exporting Final Iteration 12 Station GLB...")
    assets_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/assets"
    os.makedirs(assets_dir, exist_ok=True)
    glb_path = os.path.join(assets_dir, "Unified_Station_Iteration12.glb")
    
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
    build_final_station()
