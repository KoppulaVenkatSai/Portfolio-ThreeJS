import bpy
import math
import mathutils

def create_station_blockout():
    print("Generating Space Station: Iterations 16-18 Micro-Detailed Model...")
    # 1. Clear existing mesh objects from the scene
    bpy.ops.object.select_all(action='DESELECT')
    for obj in list(bpy.data.objects):
        if obj.type == 'MESH':
            bpy.data.objects.remove(obj, do_unlink=True)
            
    # Remove old collection if it exists
    col_name = "SpaceStation"
    if col_name in bpy.data.collections:
        col = bpy.data.collections[col_name]
        for obj in list(col.objects):
            bpy.data.objects.remove(obj, do_unlink=True)
        bpy.data.collections.remove(col)

    # Clear existing materials of our custom names to start fresh
    for mat_name in ["Hull_Dark", "Hull_Light", "Gantry_Copper", "Rocket_Silver", "Cabin_Red", "Window_Glass", "Glow_Cyan", "Glow_Orange", "Glow_Green"]:
        if mat_name in bpy.data.materials:
            bpy.data.materials.remove(bpy.data.materials[mat_name], do_unlink=True)

    # 2. Create the SpaceStation collection
    station_collection = bpy.data.collections.new(col_name)
    bpy.context.scene.collection.children.link(station_collection)
    
    # Track created objects
    created_objects = []

    def link_to_collection(obj, target_col):
        if obj.name not in target_col.objects:
            target_col.objects.link(obj)
        for col in list(obj.users_collection):
            if col != target_col:
                col.objects.unlink(obj)

    def assign_material(obj, mat_name, color, metallic=0.9, roughness=0.4, emission=None):
        if mat_name in bpy.data.materials:
            mat = bpy.data.materials[mat_name]
        else:
            mat = bpy.data.materials.new(name=mat_name)
            mat.use_nodes = True
            nodes = mat.node_tree.nodes
            links = mat.node_tree.links
            
            # Clear default nodes
            nodes.clear()
            
            # Add Output & Principled BSDF
            output = nodes.new(type='ShaderNodeOutputMaterial')
            output.location = (400, 0)
            principled = nodes.new(type='ShaderNodeBsdfPrincipled')
            principled.location = (100, 0)
            links.new(principled.outputs['BSDF'], output.inputs['Surface'])
            
            if mat_name in ("Hull_Dark", "Hull_Light"):
                # Matte dark or light metal with noise-based bump texture
                principled.inputs['Base Color'].default_value = color
                principled.inputs['Metallic'].default_value = 0.85
                
                # Noise texture for roughness variation and bump
                noise = nodes.new(type='ShaderNodeTexNoise')
                noise.inputs['Scale'].default_value = 120.0
                noise.inputs['Detail'].default_value = 6.0
                noise.inputs['Roughness'].default_value = 0.7
                
                # Bump node
                bump = nodes.new(type='ShaderNodeBump')
                bump.inputs['Distance'].default_value = 0.002
                bump.inputs['Strength'].default_value = 0.005
                links.new(noise.outputs['Fac'], bump.inputs['Height'])
                links.new(bump.outputs['Normal'], principled.inputs['Normal'])
                
                # Map noise to roughness: noise * 0.2 + 0.35 (Dark) or 0.25 (Light)
                math = nodes.new(type='ShaderNodeMath')
                math.operation = 'MULTIPLY_ADD'
                math.inputs[1].default_value = 0.2
                math.inputs[2].default_value = 0.35 if mat_name == "Hull_Dark" else 0.25
                links.new(noise.outputs['Fac'], math.inputs[0])
                links.new(math.outputs['Value'], principled.inputs['Roughness'])
                
            elif mat_name == "Rocket_Silver":
                # Polished chrome/steel with vertical micro-scratches
                principled.inputs['Base Color'].default_value = color
                principled.inputs['Metallic'].default_value = 1.0
                principled.inputs['Roughness'].default_value = 0.06
                
                # Texture Coordinate -> Mapping -> Noise -> Bump
                tex_coord = nodes.new(type='ShaderNodeTexCoord')
                mapping = nodes.new(type='ShaderNodeMapping')
                # Stretch along Z to create vertical scratches
                mapping.inputs['Scale'].default_value = (1.0, 1.0, 150.0)
                
                noise = nodes.new(type='ShaderNodeTexNoise')
                noise.inputs['Scale'].default_value = 15.0
                noise.inputs['Detail'].default_value = 4.0
                
                bump = nodes.new(type='ShaderNodeBump')
                bump.inputs['Distance'].default_value = 0.001
                bump.inputs['Strength'].default_value = 0.002 # Extremely subtle scratch
                
                links.new(tex_coord.outputs['Object'], mapping.inputs['Vector'])
                links.new(mapping.outputs['Vector'], noise.inputs['Vector'])
                links.new(noise.outputs['Fac'], bump.inputs['Height'])
                links.new(bump.outputs['Normal'], principled.inputs['Normal'])
                
            elif mat_name == "Gantry_Copper":
                # Brushed copper
                principled.inputs['Base Color'].default_value = color
                principled.inputs['Metallic'].default_value = 1.0
                
                noise = nodes.new(type='ShaderNodeTexNoise')
                noise.inputs['Scale'].default_value = 80.0
                noise.inputs['Detail'].default_value = 4.0
                
                bump = nodes.new(type='ShaderNodeBump')
                bump.inputs['Distance'].default_value = 0.002
                bump.inputs['Strength'].default_value = 0.005
                links.new(noise.outputs['Fac'], bump.inputs['Height'])
                links.new(bump.outputs['Normal'], principled.inputs['Normal'])
                
                math = nodes.new(type='ShaderNodeMath')
                math.operation = 'MULTIPLY_ADD'
                math.inputs[1].default_value = 0.15
                math.inputs[2].default_value = 0.2
                links.new(noise.outputs['Fac'], math.inputs[0])
                links.new(math.outputs['Value'], principled.inputs['Roughness'])
                
            elif mat_name == "Cabin_Red":
                # Translucent glowing red push button plastic
                principled.inputs['Base Color'].default_value = color
                principled.inputs['Roughness'].default_value = 0.08
                principled.inputs['Metallic'].default_value = 0.0
                principled.inputs['Transmission Weight'].default_value = 0.85
                principled.inputs['IOR'].default_value = 1.45
                principled.inputs['Emission Color'].default_value = color
                principled.inputs['Emission Strength'].default_value = 3.0
                
            elif mat_name == "Window_Glass":
                # Highly reflective clear glass
                principled.inputs['Base Color'].default_value = (0.85, 0.95, 1.0, 1.0)
                principled.inputs['Roughness'].default_value = 0.01
                principled.inputs['Metallic'].default_value = 0.0
                principled.inputs['Transmission Weight'].default_value = 0.98
                principled.inputs['IOR'].default_value = 1.52
                principled.inputs['Coat Weight'].default_value = 1.0
                principled.inputs['Coat Roughness'].default_value = 0.01
                
            elif mat_name == "Glow_Cyan":
                # Procedural concentric radar rings + coordinate grid lines
                principled.inputs['Base Color'].default_value = (0.01, 0.02, 0.04, 1.0)
                principled.inputs['Emission Color'].default_value = color
                principled.inputs['Roughness'].default_value = 0.1
                principled.inputs['Metallic'].default_value = 0.0
                
                tex_coord = nodes.new(type='ShaderNodeTexCoord')
                
                # Rings mask
                vec_math = nodes.new(type='ShaderNodeVectorMath')
                vec_math.operation = 'LENGTH'
                links.new(tex_coord.outputs['Object'], vec_math.inputs[0])
                
                mul_rad = nodes.new(type='ShaderNodeMath')
                mul_rad.operation = 'MULTIPLY'
                mul_rad.inputs[1].default_value = 4.0
                links.new(vec_math.outputs['Value'], mul_rad.inputs[0])
                
                frac_rad = nodes.new(type='ShaderNodeMath')
                frac_rad.operation = 'FRACT'
                links.new(mul_rad.outputs['Value'], frac_rad.inputs[0])
                
                sub_rad = nodes.new(type='ShaderNodeMath')
                sub_rad.operation = 'SUBTRACT'
                sub_rad.inputs[1].default_value = 0.5
                links.new(frac_rad.outputs['Value'], sub_rad.inputs[0])
                
                abs_rad = nodes.new(type='ShaderNodeMath')
                abs_rad.operation = 'ABSOLUTE'
                links.new(sub_rad.outputs['Value'], abs_rad.inputs[0])
                
                less_rad = nodes.new(type='ShaderNodeMath')
                less_rad.operation = 'LESS_THAN'
                less_rad.inputs[1].default_value = 0.06
                links.new(abs_rad.outputs['Value'], less_rad.inputs[0])
                
                # Grid mask
                sep = nodes.new(type='ShaderNodeSeparateXYZ')
                links.new(tex_coord.outputs['Object'], sep.inputs['Vector'])
                
                # X lines
                mul_x = nodes.new(type='ShaderNodeMath')
                mul_x.operation = 'MULTIPLY'
                mul_x.inputs[1].default_value = 3.0
                links.new(sep.outputs['X'], mul_x.inputs[0])
                
                frac_x = nodes.new(type='ShaderNodeMath')
                frac_x.operation = 'FRACT'
                links.new(mul_x.outputs['Value'], frac_x.inputs[0])
                
                sub_x = nodes.new(type='ShaderNodeMath')
                sub_x.operation = 'SUBTRACT'
                sub_x.inputs[1].default_value = 0.5
                links.new(frac_x.outputs['Value'], sub_x.inputs[0])
                
                abs_x = nodes.new(type='ShaderNodeMath')
                abs_x.operation = 'ABSOLUTE'
                links.new(sub_x.outputs['Value'], abs_x.inputs[0])
                
                less_x = nodes.new(type='ShaderNodeMath')
                less_x.operation = 'LESS_THAN'
                less_x.inputs[1].default_value = 0.04
                links.new(abs_x.outputs['Value'], less_x.inputs[0])
                
                # Y lines
                mul_y = nodes.new(type='ShaderNodeMath')
                mul_y.operation = 'MULTIPLY'
                mul_y.inputs[1].default_value = 3.0
                links.new(sep.outputs['Y'], mul_y.inputs[0])
                
                frac_y = nodes.new(type='ShaderNodeMath')
                frac_y.operation = 'FRACT'
                links.new(mul_y.outputs['Value'], frac_y.inputs[0])
                
                sub_y = nodes.new(type='ShaderNodeMath')
                sub_y.operation = 'SUBTRACT'
                sub_y.inputs[1].default_value = 0.5
                links.new(frac_y.outputs['Value'], sub_y.inputs[0])
                
                abs_y = nodes.new(type='ShaderNodeMath')
                abs_y.operation = 'ABSOLUTE'
                links.new(sub_y.outputs['Value'], abs_y.inputs[0])
                
                less_y = nodes.new(type='ShaderNodeMath')
                less_y.operation = 'LESS_THAN'
                less_y.inputs[1].default_value = 0.04
                links.new(abs_y.outputs['Value'], less_y.inputs[0])
                
                # Combine
                max_grid = nodes.new(type='ShaderNodeMath')
                max_grid.operation = 'MAXIMUM'
                links.new(less_x.outputs['Value'], max_grid.inputs[0])
                links.new(less_y.outputs['Value'], max_grid.inputs[1])
                
                max_all = nodes.new(type='ShaderNodeMath')
                max_all.operation = 'MAXIMUM'
                links.new(max_grid.outputs['Value'], max_all.inputs[0])
                links.new(less_rad.outputs['Value'], max_all.inputs[1])
                
                mul_add = nodes.new(type='ShaderNodeMath')
                mul_add.operation = 'MULTIPLY_ADD'
                mul_add.inputs[1].default_value = 11.5
                mul_add.inputs[2].default_value = 0.5
                links.new(max_all.outputs['Value'], mul_add.inputs[0])
                links.new(mul_add.outputs['Value'], principled.inputs['Emission Strength'])
                
            elif emission:
                # Emissive shader (indicator lights or custom glows)
                principled.inputs['Base Color'].default_value = (0.01, 0.01, 0.01, 1.0)
                principled.inputs['Emission Color'].default_value = color
                principled.inputs['Emission Strength'].default_value = 8.0
                principled.inputs['Roughness'].default_value = 0.2
                
            else:
                # Default fallback BSDF
                principled.inputs['Base Color'].default_value = color
                principled.inputs['Roughness'].default_value = roughness
                principled.inputs['Metallic'].default_value = metallic
                
        if obj.data.materials:
            obj.data.materials[0] = mat
        else:
            obj.data.materials.append(mat)

    # Material colors
    color_dark = (0.08, 0.08, 0.1, 1.0)
    color_light = (0.4, 0.4, 0.45, 1.0)
    color_silver = (0.85, 0.85, 0.9, 1.0)
    color_copper = (0.7, 0.4, 0.2, 1.0)
    color_cyan_glow = (0.0, 0.8, 1.0, 1.0)
    color_red = (0.6, 0.1, 0.1, 1.0)
    color_orange_glow = (1.0, 0.4, 0.0, 1.0)

    # --- 2.5x SCALED STATION GEOMETRY ---
    
    # 1. Central Spherical Hub (Radius 15.0)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=128, ring_count=64, radius=15.0, location=(0, 0, 0))
    hub = bpy.context.active_object
    hub.name = "Central_Hub"
    link_to_collection(hub, station_collection)
    assign_material(hub, "Hull_Dark", color_dark)
    created_objects.append(hub)

    # Hub Seams (3 intersecting toruses representing panel weld seams - Radius 15.05, minor 0.1)
    bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=15.05, minor_radius=0.1, rotation=(0, 0, 0), location=(0, 0, 0))
    seam_z = bpy.context.active_object
    seam_z.name = "Hub_Seam_Z"
    link_to_collection(seam_z, station_collection)
    assign_material(seam_z, "Hull_Light", color_light)
    created_objects.append(seam_z)

    bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=15.05, minor_radius=0.1, rotation=(math.pi/2, 0, 0), location=(0, 0, 0))
    seam_x = bpy.context.active_object
    seam_x.name = "Hub_Seam_X"
    link_to_collection(seam_x, station_collection)
    assign_material(seam_x, "Hull_Light", color_light)
    created_objects.append(seam_x)

    bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=15.05, minor_radius=0.1, rotation=(0, math.pi/2, 0), location=(0, 0, 0))
    seam_y = bpy.context.active_object
    seam_y.name = "Hub_Seam_Y"
    link_to_collection(seam_y, station_collection)
    created_objects.append(seam_y)

    # 2. Front/Back Arms (aligned on Y-axis, radius 8.75)
    # Back Arm (+Y, North) - Solid section: depth 20.0, centered at 32.5
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=8.75, depth=20.0, rotation=(math.pi/2, 0, 0), location=(0, 32.5, 0))
    arm_y_back = bpy.context.active_object
    arm_y_back.name = "Arm_Y_Axis_Back"
    link_to_collection(arm_y_back, station_collection)
    assign_material(arm_y_back, "Hull_Dark", color_dark)
    created_objects.append(arm_y_back)

    # North open truss lattice section: Y from 7.5 to 22.5 (depth 15.0, centered at 15.0)
    # 4 longitudinal poles
    pole_offsets = [
        (8.6 * math.cos(math.pi/4), 8.6 * math.sin(math.pi/4)),
        (8.6 * math.cos(3*math.pi/4), 8.6 * math.sin(3*math.pi/4)),
        (8.6 * math.cos(5*math.pi/4), 8.6 * math.sin(5*math.pi/4)),
        (8.6 * math.cos(7*math.pi/4), 8.6 * math.sin(7*math.pi/4))
    ]
    def add_beam(p1, p2, radius, name, mat_name, mat_color):
        p1_vec = mathutils.Vector(p1)
        p2_vec = mathutils.Vector(p2)
        dir_vec = p2_vec - p1_vec
        length = dir_vec.length
        mid = (p1_vec + p2_vec) / 2.0
        
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=radius, depth=length, location=mid)
        beam = bpy.context.active_object
        beam.name = name
        link_to_collection(beam, station_collection)
        assign_material(beam, mat_name, mat_color)
        
        # Orient cylinder
        rot_quat = dir_vec.to_track_quat('Z', 'Y')
        beam.rotation_euler = rot_quat.to_euler()
        created_objects.append(beam)
        return beam

    for idx, (px, pz) in enumerate(pole_offsets):
        add_beam((px, 7.5, pz), (px, 22.5, pz), 0.25, f"Arm_Truss_North_Pole_{idx+1}", "Hull_Dark", color_dark)

    # Central core connection cylinder (connects hub to arm)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=3.0, depth=15.0, rotation=(math.pi/2, 0, 0), location=(0, 15.0, 0))
    core_north = bpy.context.active_object
    core_north.name = "Arm_Truss_North_Core"
    link_to_collection(core_north, station_collection)
    assign_material(core_north, "Hull_Light", color_light)
    created_objects.append(core_north)

    # 3 transverse rings (using thin cylinders or toruses)
    for idx, ry in enumerate([11.25, 15.0, 18.75]):
        bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=8.6, minor_radius=0.25, rotation=(math.pi/2, 0, 0), location=(0, ry, 0))
        ring = bpy.context.active_object
        ring.name = f"Arm_Truss_North_Ring_{idx+1}"
        link_to_collection(ring, station_collection)
        assign_material(ring, "Hull_Light", color_light)
        created_objects.append(ring)

    # 8 diagonal bracing cylinders
    # Face 1 (Right): Pole 1 to Pole 4
    add_beam((pole_offsets[0][0], 7.5, pole_offsets[0][1]), (pole_offsets[3][0], 22.5, pole_offsets[3][1]), 0.08, "Arm_Truss_North_Brace_1A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[0][0], 22.5, pole_offsets[0][1]), (pole_offsets[3][0], 7.5, pole_offsets[3][1]), 0.08, "Arm_Truss_North_Brace_1B", "Hull_Dark", color_dark)
    # Face 2 (Left): Pole 2 to Pole 3
    add_beam((pole_offsets[1][0], 7.5, pole_offsets[1][1]), (pole_offsets[2][0], 22.5, pole_offsets[2][1]), 0.08, "Arm_Truss_North_Brace_2A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[1][0], 22.5, pole_offsets[1][1]), (pole_offsets[2][0], 7.5, pole_offsets[2][1]), 0.08, "Arm_Truss_North_Brace_2B", "Hull_Dark", color_dark)
    # Face 3 (Top): Pole 1 to Pole 2
    add_beam((pole_offsets[0][0], 7.5, pole_offsets[0][1]), (pole_offsets[1][0], 22.5, pole_offsets[1][1]), 0.08, "Arm_Truss_North_Brace_3A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[0][0], 22.5, pole_offsets[0][1]), (pole_offsets[1][0], 7.5, pole_offsets[1][1]), 0.08, "Arm_Truss_North_Brace_3B", "Hull_Dark", color_dark)
    # Face 4 (Bottom): Pole 4 to Pole 3
    add_beam((pole_offsets[3][0], 7.5, pole_offsets[3][1]), (pole_offsets[2][0], 22.5, pole_offsets[2][1]), 0.08, "Arm_Truss_North_Brace_4A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[3][0], 22.5, pole_offsets[3][1]), (pole_offsets[2][0], 7.5, pole_offsets[2][1]), 0.08, "Arm_Truss_North_Brace_4B", "Hull_Dark", color_dark)

    # Front Arm (-Y, South) - Solid section: depth 20.0, centered at -32.5
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=8.75, depth=20.0, rotation=(math.pi/2, 0, 0), location=(0, -32.5, 0))
    arm_y_front = bpy.context.active_object
    arm_y_front.name = "Arm_Y_Axis_Front"
    link_to_collection(arm_y_front, station_collection)
    assign_material(arm_y_front, "Hull_Dark", color_dark)
    created_objects.append(arm_y_front)

    # South open truss lattice section: Y from -7.5 to -22.5 (depth 15.0, centered at -15.0)
    # 4 longitudinal poles
    for idx, (px, pz) in enumerate(pole_offsets):
        add_beam((px, -7.5, pz), (px, -22.5, pz), 0.25, f"Arm_Truss_South_Pole_{idx+1}", "Hull_Dark", color_dark)

    # Central core connection cylinder (connects hub to arm)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=3.0, depth=15.0, rotation=(math.pi/2, 0, 0), location=(0, -15.0, 0))
    core_south = bpy.context.active_object
    core_south.name = "Arm_Truss_South_Core"
    link_to_collection(core_south, station_collection)
    assign_material(core_south, "Hull_Light", color_light)
    created_objects.append(core_south)

    # 3 transverse rings
    for idx, ry in enumerate([-11.25, -15.0, -18.75]):
        bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=8.6, minor_radius=0.25, rotation=(math.pi/2, 0, 0), location=(0, ry, 0))
        ring = bpy.context.active_object
        ring.name = f"Arm_Truss_South_Ring_{idx+1}"
        link_to_collection(ring, station_collection)
        assign_material(ring, "Hull_Light", color_light)
        created_objects.append(ring)

    # 8 diagonal bracing cylinders
    # Face 1 (Right): Pole 1 to Pole 4
    add_beam((pole_offsets[0][0], -7.5, pole_offsets[0][1]), (pole_offsets[3][0], -22.5, pole_offsets[3][1]), 0.08, "Arm_Truss_South_Brace_1A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[0][0], -22.5, pole_offsets[0][1]), (pole_offsets[3][0], -7.5, pole_offsets[3][1]), 0.08, "Arm_Truss_South_Brace_1B", "Hull_Dark", color_dark)
    # Face 2 (Left): Pole 2 to Pole 3
    add_beam((pole_offsets[1][0], -7.5, pole_offsets[1][1]), (pole_offsets[2][0], -22.5, pole_offsets[2][1]), 0.08, "Arm_Truss_South_Brace_2A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[1][0], -22.5, pole_offsets[1][1]), (pole_offsets[2][0], -7.5, pole_offsets[2][1]), 0.08, "Arm_Truss_South_Brace_2B", "Hull_Dark", color_dark)
    # Face 3 (Top): Pole 1 to Pole 2
    add_beam((pole_offsets[0][0], -7.5, pole_offsets[0][1]), (pole_offsets[1][0], -22.5, pole_offsets[1][1]), 0.08, "Arm_Truss_South_Brace_3A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[0][0], -22.5, pole_offsets[0][1]), (pole_offsets[1][0], -7.5, pole_offsets[1][1]), 0.08, "Arm_Truss_South_Brace_3B", "Hull_Dark", color_dark)
    # Face 4 (Bottom): Pole 4 to Pole 3
    add_beam((pole_offsets[3][0], -7.5, pole_offsets[3][1]), (pole_offsets[2][0], -22.5, pole_offsets[2][1]), 0.08, "Arm_Truss_South_Brace_4A", "Hull_Dark", color_dark)
    add_beam((pole_offsets[3][0], -22.5, pole_offsets[3][1]), (pole_offsets[2][0], -7.5, pole_offsets[2][1]), 0.08, "Arm_Truss_South_Brace_4B", "Hull_Dark", color_dark)

    # 3. Left Horizontal Arm (West, -X, radius 8.75, depth 40.0, location -25.0)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=8.75, depth=40.0, rotation=(0, math.pi/2, 0), location=(-25.0, 0, 0))
    arm_x_left = bpy.context.active_object
    arm_x_left.name = "Arm_X_Axis_Left"
    link_to_collection(arm_x_left, station_collection)
    assign_material(arm_x_left, "Hull_Dark", color_dark)
    created_objects.append(arm_x_left)

    # 4. Right Horizontal Arm (Connector, East, +X, radius 6.25, depth 20.0, location 15.0)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=6.25, depth=20.0, rotation=(0, math.pi/2, 0), location=(15.0, 0, 0))
    arm_x_right = bpy.context.active_object
    arm_x_right.name = "Arm_X_Axis_Right"
    link_to_collection(arm_x_right, station_collection)
    assign_material(arm_x_right, "Hull_Light", color_light)
    created_objects.append(arm_x_right)

    # 5. Habitat Block (scale (30, 20, 20), location 37.5) - Rounded Capsule Profile along X-axis (Iteration 27)
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(30.0, 20.0, 20.0), location=(37.5, 0, 0))
    hab = bpy.context.active_object
    hab.name = "Habitat_Block_Main"
    link_to_collection(hab, station_collection)
    assign_material(hab, "Hull_Light", color_light)
    
    # Helper to bevel horizontal X-axis edges using BMesh
    def bevel_x_edges(obj, width, segments):
        import bmesh
        mesh = obj.data
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.mode_set(mode='OBJECT')
        
        bm = bmesh.new()
        bm.from_mesh(mesh)
        bw_layer = bm.edges.layers.float.get("bevel_weight_edge") or bm.edges.layers.float.new("bevel_weight_edge")
        
        for edge in bm.edges:
            v1 = obj.matrix_world @ edge.verts[0].co
            v2 = obj.matrix_world @ edge.verts[1].co
            diff = v2 - v1
            diff.normalize()
            if abs(diff.x) > 0.9:
                edge[bw_layer] = 1.0
            else:
                edge[bw_layer] = 0.0
                
        bm.to_mesh(mesh)
        bm.free()
        
        bev = obj.modifiers.new(name="XEdgeBevel", type='BEVEL')
        bev.limit_method = 'WEIGHT'
        bev.width = width
        bev.segments = max(6, segments * 2)
        bpy.ops.object.modifier_apply(modifier=bev.name)

    bevel_x_edges(hab, 6.0, 12)
    
    # --- HOLLOW OUT HABITAT INTERIOR ---
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(28.0, 18.0, 18.0), location=(37.5, 0, 0))
    interior_cutter = bpy.context.active_object
    bevel_x_edges(interior_cutter, 5.0, 12)
    
    bool_hollow = hab.modifiers.new(name="HollowCut", type='BOOLEAN')
    bool_hollow.object = interior_cutter
    bool_hollow.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bool_hollow.name)
    bpy.data.objects.remove(interior_cutter, do_unlink=True)
    created_objects.append(hab)

    # --- TOP & BOTTOM EXTERIOR HOUSINGS (ITERATION 28) ---
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(26.0, 12.0, 2.0), location=(37.5, 0.0, 9.5))
    top_housing = bpy.context.active_object
    top_housing.name = "Exterior_Top_Housing"
    link_to_collection(top_housing, station_collection)
    assign_material(top_housing, "Hull_Dark", color_dark)
    
    # Bevel top housing
    th_bev = top_housing.modifiers.new(name="Bevel", type='BEVEL')
    th_bev.width = 0.5
    th_bev.segments = 6
    bpy.context.view_layer.objects.active = top_housing
    bpy.ops.object.modifier_apply(modifier=th_bev.name)
    created_objects.append(top_housing)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(26.0, 12.0, 2.0), location=(37.5, 0.0, -9.5))
    bot_housing = bpy.context.active_object
    bot_housing.name = "Exterior_Bottom_Housing"
    link_to_collection(bot_housing, station_collection)
    assign_material(bot_housing, "Hull_Dark", color_dark)
    
    # Bevel bottom housing
    bh_bev = bot_housing.modifiers.new(name="Bevel", type='BEVEL')
    bh_bev.width = 0.5
    bh_bev.segments = 6
    bpy.context.view_layer.objects.active = bot_housing
    bpy.ops.object.modifier_apply(modifier=bh_bev.name)
    created_objects.append(bot_housing)

    # --- FRONT PANEL PLATES (ITERATION 29) ---
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(22.0, 0.5, 3.0), location=(37.5, -9.0, 6.0))
    front_plate_top = bpy.context.active_object
    front_plate_top.name = "Exterior_Front_Plate_Top"
    link_to_collection(front_plate_top, station_collection)
    assign_material(front_plate_top, "Hull_Dark", color_dark)
    
    # Bevel front plate top
    fpt_bev = front_plate_top.modifiers.new(name="Bevel", type='BEVEL')
    fpt_bev.width = 0.2
    fpt_bev.segments = 6
    bpy.context.view_layer.objects.active = front_plate_top
    bpy.ops.object.modifier_apply(modifier=fpt_bev.name)
    created_objects.append(front_plate_top)
    
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(22.0, 0.5, 3.0), location=(37.5, -9.0, -6.0))
    front_plate_bot = bpy.context.active_object
    front_plate_bot.name = "Exterior_Front_Plate_Bottom"
    link_to_collection(front_plate_bot, station_collection)
    assign_material(front_plate_bot, "Hull_Dark", color_dark)
    
    # Bevel front plate bottom
    fpb_bev = front_plate_bot.modifiers.new(name="Bevel", type='BEVEL')
    fpb_bev.width = 0.2
    fpb_bev.segments = 6
    bpy.context.view_layer.objects.active = front_plate_bot
    bpy.ops.object.modifier_apply(modifier=fpb_bev.name)
    created_objects.append(front_plate_bot)

    # --- BEAMS & PIPES PLACEMENT HELPER ---
    # (add_beam helper is defined at the top of the function)

    # --- STADIUM-SHAPED VIEWPORT GEOMETRY HELPER ---
    def create_stadium_prism(name, width_x, depth_y, height_z, radius_r, loc):
        import bmesh
        # Create a cube
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(width_x, depth_y, height_z), location=loc)
        obj = bpy.context.active_object
        obj.name = name
        
        # Select local Y-axis edges and set bevel weights using BMesh
        mesh = obj.data
        bpy.ops.object.mode_set(mode='OBJECT')
        
        bm = bmesh.new()
        bm.from_mesh(mesh)
        bw_layer = bm.edges.layers.float.get("bevel_weight") or bm.edges.layers.float.new("bevel_weight")
        
        for edge in bm.edges:
            v1 = obj.matrix_world @ edge.verts[0].co
            v2 = obj.matrix_world @ edge.verts[1].co
            diff = v2 - v1
            diff.normalize()
            if abs(diff.y) > 0.9:
                edge[bw_layer] = 1.0
            else:
                edge[bw_layer] = 0.0
                
        bm.to_mesh(mesh)
        bm.free()
        
        # Add bevel modifier
        bev = obj.modifiers.new(name="CornerBevel", type='BEVEL')
        bev.limit_method = 'WEIGHT'
        bev.width = radius_r
        bev.segments = 16
        
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=bev.name)
        return obj

    # --- VIEWPORT CUTOUT & STADIUM WINDOW (ITER 11) ---
    # Cutter stadium: Width=20.0, Depth=7.5, Height=10.0, Corner Radius=5.0
    cutter = create_stadium_prism("Window_Cutter", 20.0, 7.5, 10.0, 5.0, (37.5, -10.0, 0.0))
    
    # Apply Boolean Difference to habitat
    bool_win = hab.modifiers.new(name="WinCut", type='BOOLEAN')
    bool_win.object = cutter
    bool_win.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = hab
    bpy.ops.object.modifier_apply(modifier=bool_win.name)
    bpy.data.objects.remove(cutter, do_unlink=True)

    # Window Glass (Width 19.0, Depth 0.25, Height 9.5, Radius 4.75, loc Y=-9.75)
    win_glass = create_stadium_prism("Window_Glass", 19.0, 0.25, 9.5, 4.75, (37.5, -9.75, 0.0))
    link_to_collection(win_glass, station_collection)
    
    # Set up Glass material
    mat_glass_name = "Window_Glass_Mat"
    if mat_glass_name in bpy.data.materials:
        mat_glass = bpy.data.materials[mat_glass_name]
    else:
        mat_glass = bpy.data.materials.new(name=mat_glass_name)
        mat_glass.use_nodes = True
        mat_glass.blend_method = 'BLEND'
        principled = mat_glass.node_tree.nodes.get("Principled BSDF")
        if principled:
            principled.inputs['Base Color'].default_value = (0.8, 0.9, 1.0, 1.0)
            principled.inputs['Roughness'].default_value = 0.0
            
            # Index of Refraction (IOR = 1.0 for flat transparency without scuffs/refraction distortion)
            ior_input = principled.inputs.get('IOR')
            if ior_input:
                ior_input.default_value = 1.0
                
            # Transmission and Alpha inputs
            trans_input = principled.inputs.get('Transmission Weight') or principled.inputs.get('Transmission')
            if trans_input:
                trans_input.default_value = 0.95
                
            alpha_input = principled.inputs.get('Alpha')
            if alpha_input:
                alpha_input.default_value = 0.05
    
    if win_glass.data.materials:
        win_glass.data.materials[0] = mat_glass
    else:
        win_glass.data.materials.append(mat_glass)
        
    created_objects.append(win_glass)

    # Window Outer Frame (Width 21.0, Depth 1.0, Height 10.5, Radius 5.25, loc Y=-10.25)
    win_frame = create_stadium_prism("Window_Frame", 21.0, 1.0, 10.5, 5.25, (37.5, -10.25, 0.0))
    link_to_collection(win_frame, station_collection)
    assign_material(win_frame, "Hull_Dark", color_dark)
    
    # Cut out center of frame
    frame_cutter = create_stadium_prism("Frame_Inner_Cutter", 19.0, 4.0, 9.5, 4.75, (37.5, -10.25, 0.0))
    bool_frame = win_frame.modifiers.new(name="FrameCut", type='BOOLEAN')
    bool_frame.object = frame_cutter
    bool_frame.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = win_frame
    bpy.ops.object.modifier_apply(modifier=bool_frame.name)
    bpy.data.objects.remove(frame_cutter, do_unlink=True)
    
    # Polish frame with a thicker, more rounded bevel profile (Iteration 30)
    wf_bev = win_frame.modifiers.new(name="FrameBevel", type='BEVEL')
    wf_bev.width = 0.2
    wf_bev.segments = 6
    bpy.ops.object.modifier_apply(modifier=wf_bev.name)
    
    created_objects.append(win_frame)

    # Window Inner Accent Frame (Copper metallic bezel trim inside the dark frame)
    # Width 19.5, Depth 1.2, Height 9.75, Radius 4.875, loc Y=-10.15
    win_inner_frame = create_stadium_prism("Window_Inner_Frame", 19.5, 1.2, 9.75, 4.875, (37.5, -10.15, 0.0))
    link_to_collection(win_inner_frame, station_collection)
    assign_material(win_inner_frame, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    
    # Cut out center of inner frame (slightly smaller than glass cutout)
    inner_frame_cutter = create_stadium_prism("Inner_Frame_Inner_Cutter", 17.5, 4.0, 8.75, 4.375, (37.5, -10.15, 0.0))
    bool_inner = win_inner_frame.modifiers.new(name="InnerFrameCut", type='BOOLEAN')
    bool_inner.object = inner_frame_cutter
    bool_inner.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = win_inner_frame
    bpy.ops.object.modifier_apply(modifier=bool_inner.name)
    bpy.data.objects.remove(inner_frame_cutter, do_unlink=True)
    
    # Bevel inner frame
    wif_bev = win_inner_frame.modifiers.new(name="InnerFrameBevel", type='BEVEL')
    wif_bev.width = 0.15
    wif_bev.segments = 6
    bpy.ops.object.modifier_apply(modifier=wif_bev.name)
    
    created_objects.append(win_inner_frame)

    # --- CABIN INTERIOR DETAILED GEOMETRY (ITER 11) (Ribs removed in Iteration 35) ---
    # 5 Bulkheads / Arched Ribs
    # for idx, rx in enumerate([-10.0, -5.0, 0.0, 5.0, 10.0]):
    #     # Outer ring
    #     bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.8, 17.5, 17.5), location=(37.5 + rx, 0.0, 0.0))
    #     rib = bpy.context.active_object
    #     rib.name = f"Cabin_Rib_{idx+1}"
    #     
    #     # Inner cutter
    #     bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.9, 16.0, 16.0), location=(37.5 + rx, 0.0, 0.0))
    #     rcut = bpy.context.active_object
    #     bool_rib = rib.modifiers.new(name="RibCut", type='BOOLEAN')
    #     bool_rib.object = rcut
    #     bool_rib.operation = 'DIFFERENCE'
    #     bpy.context.view_layer.objects.active = rib
    #     bpy.ops.object.modifier_apply(modifier=bool_rib.name)
    #     bpy.data.objects.remove(rcut, do_unlink=True)
    #     
    #     link_to_collection(rib, station_collection)
    #     assign_material(rib, "Hull_Light", color_light)
    #     created_objects.append(rib)

    # 3 Crew Seats & Angled Emissive Consoles (Removed in Iterations 31 & 36)
    # seat_xs = [-5.0, 0.0, 5.0]
    # for idx, sx in enumerate(seat_xs):
        # Chair Seat & Back (Removed in Iteration 31)
        # bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.0, 2.0, 1.5), location=(37.5 + sx, -3.75, -5.5))
        # seat_base = bpy.context.active_object
        # seat_base.name = f"Cabin_Seat_{idx+1}"
        # link_to_collection(seat_base, station_collection)
        # assign_material(seat_base, "Cabin_Red", color_red, metallic=0.0, roughness=0.8)
        # created_objects.append(seat_base)

        # bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.0, 0.4, 2.5), location=(37.5 + sx, -2.75, -3.8))
        # seat_back = bpy.context.active_object
        # seat_back.name = f"Cabin_Seat_Back_{idx+1}"
        # seat_back.rotation_euler = (math.radians(10), 0, 0)
        # link_to_collection(seat_back, station_collection)
        # assign_material(seat_back, "Cabin_Red", color_red, metallic=0.0, roughness=0.8)
        # created_objects.append(seat_back)

        # Angled Console Base (Removed in Iteration 36)
        # bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.5, 2.0, 1.5), location=(37.5 + sx, -7.0, -3.5))
        # console = bpy.context.active_object
        # console.name = f"Cabin_Console_{idx+1}"
        # link_to_collection(console, station_collection)
        # assign_material(console, "Hull_Dark", color_dark)
        # created_objects.append(console)

        # Angled Emissive Screen (Removed in Iteration 36)
        # bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.0, 0.1, 1.2), location=(37.5 + sx, -7.8, -3.0))
        # screen = bpy.context.active_object
        # screen.name = f"Cabin_Screen_{idx+1}"
        # screen.rotation_euler = (math.radians(-30), 0, 0)
        # link_to_collection(screen, station_collection)
        # assign_material(screen, "Glow_Cyan", color_cyan_glow, emission=color_cyan_glow)
        # created_objects.append(screen)

    # --- HUB RADIAL DETAILS (SCALED 2.5x, cap_y = -42.5) ---
    cap_y = -42.5
    
    # Central Dome/Cap (Radius 2.5)
    bpy.ops.mesh.primitive_uv_sphere_add(segments=128, ring_count=64, radius=2.5, location=(0, cap_y - 0.5, 0))
    dome = bpy.context.active_object
    dome.name = "Hub_Front_Dome"
    dome.scale.y = 0.5
    link_to_collection(dome, station_collection)
    assign_material(dome, "Hull_Light", color_light)
    created_objects.append(dome)

    # Outer ring (Radius 5.5, minor 0.5)
    bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=5.5, minor_radius=0.5, rotation=(math.pi/2, 0, 0), location=(0, cap_y, 0))
    ring1 = bpy.context.active_object
    ring1.name = "Hub_Front_Ring_1"
    link_to_collection(ring1, station_collection)
    assign_material(ring1, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(ring1)

    # Wide perimeter ring (Radius 8.25, minor 0.625)
    bpy.ops.mesh.primitive_torus_add(major_segments=128, minor_segments=32, major_radius=8.25, minor_radius=0.625, rotation=(math.pi/2, 0, 0), location=(0, cap_y, 0))
    ring2 = bpy.context.active_object
    ring2.name = "Hub_Front_Ring_2"
    link_to_collection(ring2, station_collection)
    assign_material(ring2, "Hull_Light", color_light)
    created_objects.append(ring2)

    # 8 Spokes (depth 7.5, radius 0.375)
    for idx in range(8):
        angle = idx * (math.pi / 4)
        sx = 4.0 * math.cos(angle)
        sz = 4.0 * math.sin(angle)
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.375, depth=7.5, rotation=(angle, math.pi/2, 0), location=(sx, cap_y, sz))
        spoke = bpy.context.active_object
        spoke.name = f"Hub_Front_Spoke_{idx+1}"
        link_to_collection(spoke, station_collection)
        assign_material(spoke, "Hull_Dark", color_dark)
        created_objects.append(spoke)

    # --- REINFORCING COLLARS (SCALED 2.5x) ---
    # West collar: radius 9.5, depth 3.0, loc -35.0
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=9.5, depth=3.0, rotation=(0, math.pi/2, 0), location=(-35.0, 0, 0))
    col_w = bpy.context.active_object
    col_w.name = "Arm_Collar_West"
    link_to_collection(col_w, station_collection)
    assign_material(col_w, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(col_w)

    # West Collar Bolts (12 bolts around West collar perimeter - Nitpick 3)
    for idx in range(12):
        angle = idx * (math.pi / 6)
        cy = 9.6 * math.cos(angle)
        cz = 9.6 * math.sin(angle)
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.1, depth=0.25, rotation=(angle, math.pi/2, 0), location=(-35.0, cy, cz))
        bolt = bpy.context.active_object
        bolt.name = f"Arm_Collar_West_Bolt_{idx+1}"
        link_to_collection(bolt, station_collection)
        assign_material(bolt, "Hull_Light", color_light)
        created_objects.append(bolt)

    # North collar: radius 9.5, depth 3.0, loc Y=35
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=9.5, depth=3.0, rotation=(math.pi/2, 0, 0), location=(0, 35.0, 0))
    col_n = bpy.context.active_object
    col_n.name = "Arm_Collar_North"
    link_to_collection(col_n, station_collection)
    assign_material(col_n, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(col_n)

    # North Collar Bolts (12 bolts around North collar perimeter - Nitpick 3)
    for idx in range(12):
        angle = idx * (math.pi / 6)
        cx = 9.6 * math.cos(angle)
        cz = 9.6 * math.sin(angle)
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.1, depth=0.25, rotation=(math.pi/2, 0, angle), location=(cx, 35.0, cz))
        bolt = bpy.context.active_object
        bolt.name = f"Arm_Collar_North_Bolt_{idx+1}"
        link_to_collection(bolt, station_collection)
        assign_material(bolt, "Hull_Light", color_light)
        created_objects.append(bolt)

    # South collar: radius 9.5, depth 3.0, loc Y=-25
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=9.5, depth=3.0, rotation=(math.pi/2, 0, 0), location=(0, -25.0, 0))
    col_s = bpy.context.active_object
    col_s.name = "Arm_Collar_South"
    link_to_collection(col_s, station_collection)
    assign_material(col_s, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(col_s)

    # South Collar Bolts (12 bolts around South collar perimeter - Nitpick 3)
    for idx in range(12):
        angle = idx * (math.pi / 6)
        cx = 9.6 * math.cos(angle)
        cz = 9.6 * math.sin(angle)
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.1, depth=0.25, rotation=(math.pi/2, 0, angle), location=(cx, -25.0, cz))
        bolt = bpy.context.active_object
        bolt.name = f"Arm_Collar_South_Bolt_{idx+1}"
        link_to_collection(bolt, station_collection)
        assign_material(bolt, "Hull_Light", color_light)
        created_objects.append(bolt)

    # --- DOCKING PLATFORM & THRUSTERS (SCALED 2.5x) ---
    # Neck: radius 1.8 (less radius), depth 20.0, loc (49.5, -20.0, -7.5) - moved to the right (X=49.5) and catches the gantry
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.8, depth=20.0, rotation=(math.pi/2, 0, 0), location=(49.5, -20.0, -7.5))
    neck = bpy.context.active_object
    neck.name = "Docking_Platform_Neck"
    link_to_collection(neck, station_collection)
    assign_material(neck, "Hull_Light", color_light)
    created_objects.append(neck)

    rocket_x = 42.0
    rocket_y = -30.0

    # Docking Platform (Launch Pad): radius 9.5 (slightly smaller), depth 2.5, loc (rocket_x, rocket_y, -7.5) - fully covers Neck
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=9.5, depth=2.5, location=(rocket_x, rocket_y, -7.5))
    pad = bpy.context.active_object
    pad.name = "Docking_Platform"
    link_to_collection(pad, station_collection)
    assign_material(pad, "Hull_Dark", color_dark)

    # Cut out center hole for engine exhaust (hollow / bigger hole radius 5.0)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=5.0, depth=3.0, location=(rocket_x, rocket_y, -7.5))
    pad_cutter = bpy.context.active_object
    pad_cutter.name = "Docking_Platform_Cutter"
    
    bool_pad = pad.modifiers.new(name="ExhaustHole", type='BOOLEAN')
    bool_pad.object = pad_cutter
    bool_pad.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = pad
    bpy.ops.object.modifier_apply(modifier=bool_pad.name)
    bpy.data.objects.remove(pad_cutter, do_unlink=True)
    created_objects.append(pad)

    # --- UN-SCALED ROCKET SHIP WITH HIGH-FIDELITY DETAILS (X=42.0, Y=-30.0, Z_base=-6.25) ---
    rocket_z_base = -6.25

    # Rocket Stage 1 (radius 1.4, depth 8.0)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.4, depth=8.0, location=(rocket_x, rocket_y, rocket_z_base + 4.0))
    r_stage1 = bpy.context.active_object
    r_stage1.name = "Rocket_Stage_1"
    link_to_collection(r_stage1, station_collection)
    assign_material(r_stage1, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.15)
    created_objects.append(r_stage1)

    # Rocket Stage 2 (radius 1.1, depth 6.0)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.1, depth=6.0, location=(rocket_x, rocket_y, rocket_z_base + 11.0))
    r_stage2 = bpy.context.active_object
    r_stage2.name = "Rocket_Stage_2"
    link_to_collection(r_stage2, station_collection)
    assign_material(r_stage2, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.15)
    created_objects.append(r_stage2)

    # Rocket Nose Cone
    bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=1.1, radius2=0.0, depth=2.5, location=(rocket_x, rocket_y, rocket_z_base + 15.25))
    r_nose = bpy.context.active_object
    r_nose.name = "Rocket_Nose_Cone"
    link_to_collection(r_nose, station_collection)
    assign_material(r_nose, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.15)
    created_objects.append(r_nose)

    # Rocket Needle Tip
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.1, depth=1.5, location=(rocket_x, rocket_y, rocket_z_base + 17.25))
    r_needle = bpy.context.active_object
    r_needle.name = "Rocket_Needle_Tip"
    link_to_collection(r_needle, station_collection)
    assign_material(r_needle, "Hull_Dark", color_dark)
    created_objects.append(r_needle)

    # Rocket Engine Nozzle Main (Iteration 17)
    bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=0.8, radius2=1.2, depth=1.2, location=(rocket_x, rocket_y, rocket_z_base - 0.6))
    r_nozzle = bpy.context.active_object
    r_nozzle.name = "Rocket_Nozzle_Main"
    link_to_collection(r_nozzle, station_collection)
    assign_material(r_nozzle, "Hull_Dark", color_dark)
    created_objects.append(r_nozzle)

    # 4 Gimbal Thrusters around main engine bell (Iteration 17)
    gimbal_offsets = [(0.8, 0.8), (0.8, -0.8), (-0.8, 0.8), (-0.8, -0.8)]
    for idx, (gx, gy) in enumerate(gimbal_offsets):
        bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=0.2, radius2=0.3, depth=0.5, location=(rocket_x + gx, rocket_y + gy, rocket_z_base - 0.25))
        gimbal = bpy.context.active_object
        gimbal.name = f"Rocket_Nozzle_Gimbal_{idx+1}"
        link_to_collection(gimbal, station_collection)
        assign_material(gimbal, "Hull_Dark", color_dark)
        created_objects.append(gimbal)

    # 4 Auxiliary Boosters
    booster_offsets = [(2.0, 0.0), (-2.0, 0.0), (0.0, 2.0), (0.0, -2.0)]
    for idx, (dx, dy) in enumerate(booster_offsets):
        bx = rocket_x + dx
        by = rocket_y + dy
        
        # Booster Body
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.48, depth=4.0, location=(bx, by, rocket_z_base + 2.0))
        booster = bpy.context.active_object
        booster.name = f"Rocket_Booster_{idx+1}"
        link_to_collection(booster, station_collection)
        assign_material(booster, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.15)
        created_objects.append(booster)

        # Booster Tip
        bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=0.48, radius2=0.0, depth=1.0, location=(bx, by, rocket_z_base + 4.5))
        booster_tip = bpy.context.active_object
        booster_tip.name = f"Rocket_Booster_Tip_{idx+1}"
        link_to_collection(booster_tip, station_collection)
        assign_material(booster_tip, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.15)
        created_objects.append(booster_tip)

        # Booster Fuel Feed Line plumbing
        outer_factor = 1.48
        px = rocket_x + dx * outer_factor
        py = rocket_y + dy * outer_factor
        add_beam((px, py, rocket_z_base), (px, py, rocket_z_base + 4.0), 0.03, f"Rocket_Booster_Pipe_{idx+1}", "Hull_Dark", color_dark)

        # Booster Nozzle (thruster-like exhaust bell) - Requirement 3
        bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=0.3, radius2=0.45, depth=0.5, location=(bx, by, rocket_z_base - 0.25))
        booster_nozzle = bpy.context.active_object
        booster_nozzle.name = f"Rocket_Booster_Nozzle_{idx+1}"
        link_to_collection(booster_nozzle, station_collection)
        assign_material(booster_nozzle, "Hull_Dark", color_dark)
        created_objects.append(booster_nozzle)

    # 4 Fins
    for idx, angle in enumerate([0, math.pi/2, math.pi, 3*math.pi/2]):
        fx = rocket_x + 1.8 * math.cos(angle)
        fy = rocket_y + 1.8 * math.sin(angle)
        
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.15, 1.2, 2.0), location=(fx, fy, rocket_z_base + 1.0))
        fin = bpy.context.active_object
        fin.name = f"Rocket_Fin_{idx+1}"
        fin.rotation_euler = (0, 0, angle)
        link_to_collection(fin, station_collection)
        assign_material(fin, "Hull_Dark", color_dark)
        created_objects.append(fin)

    # --- MASSIVE ROCKET VISUAL IMPROVEMENTS (ITERATION 37+) ---
    # 1. Dark Interstage Adaptor Ring between Stage 1 & 2
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.3, depth=0.6, location=(rocket_x, rocket_y, rocket_z_base + 8.0))
    interstage = bpy.context.active_object
    interstage.name = "Rocket_Interstage_Ring"
    link_to_collection(interstage, station_collection)
    assign_material(interstage, "Hull_Dark", color_dark, metallic=0.9, roughness=0.5)
    created_objects.append(interstage)

    # 2. Cable Raceways / Conduit Tunnels (2 vertical conduits running down Stage 1 and 2)
    # Conduit 1 (East, facing right)
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.1, 0.2, 13.0), location=(rocket_x + 1.35, rocket_y, rocket_z_base + 7.5))
    raceway1 = bpy.context.active_object
    raceway1.name = "Rocket_Raceway_East"
    link_to_collection(raceway1, station_collection)
    assign_material(raceway1, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(raceway1)

    # Conduit 2 (West, facing left)
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.1, 0.2, 13.0), location=(rocket_x - 1.35, rocket_y, rocket_z_base + 7.5))
    raceway2 = bpy.context.active_object
    raceway2.name = "Rocket_Raceway_West"
    link_to_collection(raceway2, station_collection)
    assign_material(raceway2, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(raceway2)

    # 3. 4 Reaction Control System (RCS) thruster pod blocks on Stage 2
    for idx, angle in enumerate([math.pi/4, 3*math.pi/4, 5*math.pi/4, 7*math.pi/4]):
        rx = rocket_x + 1.05 * math.cos(angle)
        ry = rocket_y + 1.05 * math.sin(angle)
        rz = rocket_z_base + 13.0
        
        # Tiny block pod
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.25, 0.25, 0.25), location=(rx, ry, rz))
        pod = bpy.context.active_object
        pod.name = f"Rocket_RCS_Block_{idx+1}"
        pod.rotation_euler = (0, 0, angle)
        link_to_collection(pod, station_collection)
        assign_material(pod, "Hull_Dark", color_dark)
        created_objects.append(pod)
        
        # Two tiny nozzle cones on each pod (facing outward and sideways)
        for n_idx, n_angle in enumerate([0, math.pi/2]):
            total_angle = angle + n_angle
            nx = rx + 0.15 * math.cos(total_angle)
            ny = ry + 0.15 * math.sin(total_angle)
            
            bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=0.03, radius2=0.07, depth=0.15, location=(nx, ny, rz))
            nozzle = bpy.context.active_object
            nozzle.name = f"Rocket_RCS_Nozzle_{idx+1}_{n_idx+1}"
            nozzle.rotation_euler = (0, math.pi/2, total_angle)
            link_to_collection(nozzle, station_collection)
            assign_material(nozzle, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.2)
            created_objects.append(nozzle)

    # 4. Engine Nozzle Actuator Pistons (4 pistons connecting the base plate to the main nozzle bell)
    for idx, angle in enumerate([math.pi/4, 3*math.pi/4, 5*math.pi/4, 7*math.pi/4]):
        px = rocket_x + 0.7 * math.cos(angle)
        py = rocket_y + 0.7 * math.sin(angle)
        # Cylinder piston
        add_beam((px, py, rocket_z_base), (px * 0.9 + rocket_x * 0.1, py * 0.9 + rocket_y * 0.1, rocket_z_base - 0.5), 
                 0.04, f"Rocket_Engine_Piston_{idx+1}", "Rocket_Silver", color_silver)

    # 5. booster clamp bands holding boosters to main stage (4 bands)
    for idx, (dx, dy) in enumerate(booster_offsets):
        bx = rocket_x + dx * 0.7
        by = rocket_y + dy * 0.7
        
        # Horizontal clamp band
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.3, 0.3, 0.12), location=(bx, by, rocket_z_base + 3.0))
        clamp = bpy.context.active_object
        clamp.name = f"Rocket_Booster_Clamp_{idx+1}"
        link_to_collection(clamp, station_collection)
        assign_material(clamp, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
        created_objects.append(clamp)

    # 6. Fin actuator root pods (4 pods at the root of each fin)
    for idx, angle in enumerate([0, math.pi/2, math.pi, 3*math.pi/2]):
        fx = rocket_x + 1.45 * math.cos(angle)
        fy = rocket_y + 1.45 * math.sin(angle)
        
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.3, 0.4, 0.6), location=(fx, fy, rocket_z_base + 0.8))
        root_pod = bpy.context.active_object
        root_pod.name = f"Rocket_Fin_Pod_{idx+1}"
        root_pod.rotation_euler = (0, 0, angle)
        link_to_collection(root_pod, station_collection)
        assign_material(root_pod, "Hull_Dark", color_dark)
        created_objects.append(root_pod)

    # 7. Decorative colored metal bands on the nose cone & Stage 1
    # Copper band on Stage 1
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.41, depth=0.15, location=(rocket_x, rocket_y, rocket_z_base + 2.0))
    band1 = bpy.context.active_object
    band1.name = "Rocket_Band_Stage1"
    link_to_collection(band1, station_collection)
    assign_material(band1, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(band1)

    # Copper band on Stage 2
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.11, depth=0.15, location=(rocket_x, rocket_y, rocket_z_base + 12.5))
    band2 = bpy.context.active_object
    band2.name = "Rocket_Band_Stage2"
    link_to_collection(band2, station_collection)
    assign_material(band2, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(band2)

    # 8. 4 upper steering grid fins on Stage 2 - Requirement 4
    for idx, angle in enumerate([0, math.pi/2, math.pi, 3*math.pi/2]):
        fx = rocket_x + 1.2 * math.cos(angle)
        fy = rocket_y + 1.2 * math.sin(angle)
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.06, 0.4, 0.4), location=(fx, fy, rocket_z_base + 13.5))
        grid_fin = bpy.context.active_object
        grid_fin.name = f"Rocket_Steering_Fin_{idx+1}"
        grid_fin.rotation_euler = (0, 0, angle)
        link_to_collection(grid_fin, station_collection)
        assign_material(grid_fin, "Hull_Dark", color_dark)
        created_objects.append(grid_fin)

    # 9. Nose cone clamp band - Requirement 4
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=1.11, depth=0.1, location=(rocket_x, rocket_y, rocket_z_base + 14.0))
    nose_band = bpy.context.active_object
    nose_band.name = "Rocket_Nose_Band"
    link_to_collection(nose_band, station_collection)
    assign_material(nose_band, "Hull_Dark", color_dark, metallic=0.9, roughness=0.5)
    created_objects.append(nose_band)

    # 10. Large main external fuel pipe running vertically along the side - Requirement 4
    add_beam((rocket_x, rocket_y - 1.25, rocket_z_base + 1.0), (rocket_x, rocket_y - 1.25, rocket_z_base + 14.0), 
             0.08, "Rocket_Main_Pipe", "Gantry_Copper", color_copper)

    # 11. Turbopump exhaust pipe at the base - Requirement 4
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.06, depth=0.8, location=(rocket_x + 0.6, rocket_y + 0.6, rocket_z_base - 0.4))
    turbo_exh = bpy.context.active_object
    turbo_exh.name = "Rocket_Turbopump_Exhaust"
    turbo_exh.rotation_euler = (math.radians(15), math.radians(15), 0)
    link_to_collection(turbo_exh, station_collection)
    assign_material(turbo_exh, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.2)
    created_objects.append(turbo_exh)

    # 12. 4 telemetry sensor boxes on Stage 1 - Requirement 4
    for idx, angle in enumerate([math.pi/4, 3*math.pi/4, 5*math.pi/4, 7*math.pi/4]):
        bx = rocket_x + 1.42 * math.cos(angle)
        by = rocket_y + 1.42 * math.sin(angle)
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.12, 0.25, 0.4), location=(bx, by, rocket_z_base + 5.0))
        box = bpy.context.active_object
        box.name = f"Rocket_Sensor_Box_{idx+1}"
        box.rotation_euler = (0, 0, angle)
        link_to_collection(box, station_collection)
        assign_material(box, "Hull_Dark", color_dark)
        created_objects.append(box)

    # --- UN-SCALED GANTRY TOWER WITH DENSE OUTER TRUSS LATTICE (ITER 12) ---
    gantry_x = 49.5
    gantry_y = -30.0
    gantry_z_base = -7.5
    gantry_height = 24.0
    truss_radius = 0.05  # Thinner truss elements

    # 4 Gantry Vertical Poles
    pole_offsets = [(1.2, 1.2), (1.2, -1.2), (-1.2, 1.2), (-1.2, -1.2)]
    poles = []
    for idx, (dx, dy) in enumerate(pole_offsets):
        px = gantry_x + dx
        py = gantry_y + dy
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.25, depth=gantry_height, location=(px, py, gantry_z_base + gantry_height/2))
        pole = bpy.context.active_object
        pole.name = f"Gantry_Pole_{idx+1}"
        link_to_collection(pole, station_collection)
        assign_material(pole, "Hull_Dark", color_dark)
        created_objects.append(pole)
        poles.append((px, py))

    # Horizontal Level Rings & Outer Face X-Bracing
    for level in range(5):
        lz = gantry_z_base + 1.0 + level * 5.0
        # Perimeter beam plate
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.6, 2.6, 0.3), location=(gantry_x, gantry_y, lz))
        ring_beam = bpy.context.active_object
        ring_beam.name = f"Gantry_Level_Ring_{level+1}"
        link_to_collection(ring_beam, station_collection)
        assign_material(ring_beam, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
        created_objects.append(ring_beam)

        # Center Cross Brace (Original braces, now thinned to 0.05 - Nitpick 1)
        add_beam((gantry_x - 1.2, gantry_y - 1.2, lz), (gantry_x + 1.2, gantry_y + 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Brace_A_{level+1}", "Hull_Dark", color_dark)
        add_beam((gantry_x - 1.2, gantry_y + 1.2, lz), (gantry_x + 1.2, gantry_y - 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Brace_B_{level+1}", "Hull_Dark", color_dark)

        # Outer Face Diagonal X-Braces (Dense Perimeter Lattice - Iter 12)
        # Side 1: East Face (between Pole 1 and Pole 2)
        add_beam((gantry_x + 1.2, gantry_y - 1.2, lz), (gantry_x + 1.2, gantry_y + 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_East_A_{level+1}", "Hull_Dark", color_dark)
        add_beam((gantry_x + 1.2, gantry_y + 1.2, lz), (gantry_x + 1.2, gantry_y - 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_East_B_{level+1}", "Hull_Dark", color_dark)

        # Side 2: West Face (between Pole 3 and Pole 4)
        add_beam((gantry_x - 1.2, gantry_y - 1.2, lz), (gantry_x - 1.2, gantry_y + 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_West_A_{level+1}", "Hull_Dark", color_dark)
        add_beam((gantry_x - 1.2, gantry_y + 1.2, lz), (gantry_x - 1.2, gantry_y - 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_West_B_{level+1}", "Hull_Dark", color_dark)

        # Side 3: North Face (between Pole 1 and Pole 3)
        add_beam((gantry_x - 1.2, gantry_y + 1.2, lz), (gantry_x + 1.2, gantry_y + 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_North_A_{level+1}", "Hull_Dark", color_dark)
        add_beam((gantry_x + 1.2, gantry_y + 1.2, lz), (gantry_x - 1.2, gantry_y + 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_North_B_{level+1}", "Hull_Dark", color_dark)

        # Side 4: South Face (between Pole 2 and Pole 4)
        add_beam((gantry_x - 1.2, gantry_y - 1.2, lz), (gantry_x + 1.2, gantry_y - 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_South_A_{level+1}", "Hull_Dark", color_dark)
        add_beam((gantry_x + 1.2, gantry_y - 1.2, lz), (gantry_x - 1.2, gantry_y - 1.2, lz + 5.0), 
                 truss_radius, f"Gantry_Outer_South_B_{level+1}", "Hull_Dark", color_dark)

    # --- DETAILED UMBILICAL BRIDGES WITH HANDRAILS & STRUTS (ITER 13) ---
    def create_bridge_walkway(prefix, z_level):
        # Walkway Platform
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(7.5, 0.8, 0.2), location=(45.75, -30.0, z_level))
        walkway = bpy.context.active_object
        walkway.name = prefix
        link_to_collection(walkway, station_collection)
        assign_material(walkway, "Hull_Dark", color_dark)
        created_objects.append(walkway)

        # Handrail Rails (Front and Back)
        rail_radius = 0.03
        post_radius = 0.03
        
        # Front Railings (Y = -29.6)
        add_beam((43.0, -29.6, z_level + 1.0), (48.5, -29.6, z_level + 1.0), rail_radius, f"{prefix}_Rail_Front", "Gantry_Copper", color_copper)
        # Back Railings (Y = -30.4)
        add_beam((43.0, -30.4, z_level + 1.0), (48.5, -30.4, z_level + 1.0), rail_radius, f"{prefix}_Rail_Back", "Gantry_Copper", color_copper)

        # Posts
        for idx, px in enumerate([43.0, 44.83, 46.67, 48.5]):
            add_beam((px, -29.6, z_level), (px, -29.6, z_level + 1.0), post_radius, f"{prefix}_Post_Front_{idx+1}", "Hull_Dark", color_dark)
            add_beam((px, -30.4, z_level), (px, -30.4, z_level + 1.0), post_radius, f"{prefix}_Post_Back_{idx+1}", "Hull_Dark", color_dark)

        # Diagonal Under-Support Struts (spans from walkway corners back to gantry and rocket)
        add_beam((48.5, -30.0, z_level), (49.5, -30.0, z_level - 1.5), 0.08, f"{prefix}_Strut_Gantry", "Hull_Dark", color_dark)
        add_beam((43.0, -30.0, z_level), (42.0, -30.0, z_level - 1.5), 0.08, f"{prefix}_Strut_Rocket", "Hull_Dark", color_dark)

    create_bridge_walkway("Gantry_Bridge_Lower", rocket_z_base + 4.0)
    create_bridge_walkway("Gantry_Bridge_Upper", rocket_z_base + 11.0)

    # --- CYLINDRICAL ARMS GREEBLE PANELING & STRIPS (ITER 14) ---
    # West Arm (-X) Greebles
    for idx, sx in enumerate([-12.5, -20.0, -30.0]):
        width = 4.0 if idx == 0 else (6.0 if idx == 1 else 5.0)
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=8.85, depth=width, rotation=(0, math.pi/2, 0), location=(sx, 0, 0))
        panel = bpy.context.active_object
        panel.name = f"Arm_West_Panel_{idx+1}"
        link_to_collection(panel, station_collection)
        assign_material(panel, "Hull_Light", color_light)
        created_objects.append(panel)

    # West Arm Longitudinal Stringers (4 strips around the cylinder)
    for idx, angle in enumerate([0, math.pi/2, math.pi, 3*math.pi/2]):
        ay = 8.85 * math.cos(angle)
        az = 8.85 * math.sin(angle)
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(30.0, 0.4, 0.4), location=(-25.0, ay, az))
        stringer = bpy.context.active_object
        stringer.name = f"Arm_West_Stringer_{idx+1}"
        stringer.rotation_euler = (angle, 0, 0)
        link_to_collection(stringer, station_collection)
        assign_material(stringer, "Hull_Dark", color_dark)
        created_objects.append(stringer)

    # North Arm (+Y) Greebles (Shifted outwards to solid section [22.5, 42.5])
    for idx, sy in enumerate([27.5, 37.5]):
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=8.85, depth=4.0, rotation=(math.pi/2, 0, 0), location=(0, sy, 0))
        panel = bpy.context.active_object
        panel.name = f"Arm_North_Panel_{idx+1}"
        link_to_collection(panel, station_collection)
        assign_material(panel, "Hull_Light", color_light)
        created_objects.append(panel)

    # North Arm Longitudinal Stringers
    for idx, angle in enumerate([0, math.pi/2, math.pi, 3*math.pi/2]):
        ax = 8.85 * math.cos(angle)
        az = 8.85 * math.sin(angle)
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.4, 20.0, 0.4), location=(ax, 32.5, az))
        stringer = bpy.context.active_object
        stringer.name = f"Arm_North_Stringer_{idx+1}"
        stringer.rotation_euler = (0, angle, 0)
        link_to_collection(stringer, station_collection)
        assign_material(stringer, "Hull_Dark", color_dark)
        created_objects.append(stringer)

    # South Arm (-Y) Greebles (Shifted outwards to solid section [-22.5, -42.5])
    for idx, sy in enumerate([-27.5, -37.5]):
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=8.85, depth=4.0, rotation=(math.pi/2, 0, 0), location=(0, sy, 0))
        panel = bpy.context.active_object
        panel.name = f"Arm_South_Panel_{idx+1}"
        link_to_collection(panel, station_collection)
        assign_material(panel, "Hull_Light", color_light)
        created_objects.append(panel)

    # South Arm Longitudinal Stringers
    for idx, angle in enumerate([0, math.pi/2, math.pi, 3*math.pi/2]):
        ax = 8.85 * math.cos(angle)
        az = 8.85 * math.sin(angle)
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.4, 20.0, 0.4), location=(ax, -32.5, az))
        stringer = bpy.context.active_object
        stringer.name = f"Arm_South_Stringer_{idx+1}"
        stringer.rotation_euler = (0, angle, 0)
        link_to_collection(stringer, station_collection)
        assign_material(stringer, "Hull_Dark", color_dark)
        created_objects.append(stringer)

    # --- PIPING / CONDUITS & SURFACE UTILITY BOXES (ITER 15) ---
    pipe_radius = 0.2
    
    # 5 Surface Pipes on Habitat Block
    # Pipe 1: Horizontal Front Top
    add_beam((23.5, -9.5, 9.5), (51.5, -9.5, 9.5), pipe_radius, "Exterior_Pipe_1", "Gantry_Copper", color_copper)
    # Pipe 2: Horizontal Front Bottom
    add_beam((23.5, -9.5, -9.5), (51.5, -9.5, -9.5), pipe_radius, "Exterior_Pipe_2", "Gantry_Copper", color_copper)
    # Pipe 3: Vertical Front Left edge
    add_beam((23.5, -9.5, -9.5), (23.5, -9.5, 9.5), pipe_radius, "Exterior_Pipe_3", "Gantry_Copper", color_copper)
    # Pipe 4 & 5: U-conduits crossing top face
    add_beam((30.0, -9.5, 9.5), (30.0, 9.5, 9.5), pipe_radius, "Exterior_Pipe_4", "Hull_Dark", color_dark)
    add_beam((45.0, -9.5, 9.5), (45.0, 9.5, 9.5), pipe_radius, "Exterior_Pipe_5", "Hull_Dark", color_dark)

    # 9 Surface Utility / Junction Boxes
    utility_box_configs = [
        # (Location, Scale, Name)
        ((25.0, -10.1, 5.0), (1.5, 0.4, 2.0), "Utility_Box_Front_1"),
        ((48.0, -10.1, -5.0), (2.0, 0.4, 1.5), "Utility_Box_Front_2"),
        ((30.0, 10.1, 2.0), (1.2, 0.4, 1.2), "Utility_Box_Back_1"),
        ((40.0, 10.1, -4.0), (1.8, 0.4, 2.2), "Utility_Box_Back_2"),
        ((23.4, -5.0, 8.0), (0.4, 2.0, 1.5), "Utility_Box_Left_1"),
        ((51.6, 5.0, -6.0), (0.4, 1.5, 2.0), "Utility_Box_Right_1"),
        ((-20.0, 8.8, 0.0), (2.0, 0.4, 1.5), "Utility_Box_Arm_West"),
        ((0.0, 20.0, 8.8), (1.5, 2.0, 0.4), "Utility_Box_Arm_North"),
        ((0.0, -20.0, -8.8), (1.5, 2.0, 0.4), "Utility_Box_Arm_South")
    ]

    for idx, (loc, sc, bname) in enumerate(utility_box_configs):
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=sc, location=loc)
        box = bpy.context.active_object
        box.name = bname
        link_to_collection(box, station_collection)
        assign_material(box, "Hull_Dark", color_dark)
        
        # Add slight bevel modifier to utility box edges
        box_bev = box.modifiers.new(name="BoxBevel", type='BEVEL')
        box_bev.width = 0.1
        box_bev.segments = 6
        bpy.context.view_layer.objects.active = box
        bpy.ops.object.modifier_apply(modifier=box_bev.name)
        
        created_objects.append(box)

    # --- ANTENNAE, COMM DISH, & BEACON LIGHTS (ITER 16) ---
    # Hub Antenna Mast
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.15, depth=10.0, location=(0, 0, 18.0))
    mast = bpy.context.active_object
    mast.name = "Hub_Antenna_Mast"
    link_to_collection(mast, station_collection)
    assign_material(mast, "Hull_Dark", color_dark)
    created_objects.append(mast)

    # Angled Antenna spurs
    add_beam((0, 0, 18.0), (2.0, 0, 22.0), 0.05, "Hub_Antenna_Spur_1", "Gantry_Copper", color_copper)
    add_beam((0, 0, 18.0), (-2.0, 0, 22.0), 0.05, "Hub_Antenna_Spur_2", "Gantry_Copper", color_copper)

    # West Arm Comm Dish
    bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=4.0, radius2=0.0, depth=1.0, location=(-45.5, 0, 0), rotation=(0, -math.pi/2, 0))
    dish = bpy.context.active_object
    dish.name = "Arm_West_Comm_Dish"
    link_to_collection(dish, station_collection)
    assign_material(dish, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(dish)

    # Dish feedhorn
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.1, depth=2.0, location=(-47.0, 0, 0), rotation=(0, math.pi/2, 0))
    feedhorn = bpy.context.active_object
    feedhorn.name = "Arm_West_Comm_Dish_Feed"
    link_to_collection(feedhorn, station_collection)
    assign_material(feedhorn, "Hull_Dark", color_dark)
    created_objects.append(feedhorn)

    # 6 Warning Light Beacons (Housing + Emissive Bulb)
    beacon_locations = [
        ((23.5, -9.8, 8.0), "Front_Top_Left"),
        ((51.5, -9.8, 8.0), "Front_Top_Right"),
        ((23.5, -9.8, -8.0), "Front_Bottom_Left"),
        ((51.5, -9.8, -8.0), "Front_Bottom_Right"),
        ((0, 0, 23.0), "Mast_Top"),
        ((-47.5, 0, 1.5), "Dish_Top")
    ]
    for idx, (loc, label) in enumerate(beacon_locations):
        # Housing
        bpy.ops.mesh.primitive_cube_add(size=0.5, location=loc)
        box = bpy.context.active_object
        box.name = f"Warning_Light_Box_{label}"
        link_to_collection(box, station_collection)
        assign_material(box, "Hull_Dark", color_dark)
        created_objects.append(box)

        # Emissive Orange Bulb (Z/Y offset to look placed on housing)
        by_offset = -0.25 if loc[1] < 0 else (0.25 if loc[1] > 0 else 0)
        bz_offset = 0.25 if loc[2] == 23.0 or loc[2] == 1.5 else 0
        bpy.ops.mesh.primitive_uv_sphere_add(segments=128, ring_count=64, radius=0.2, location=(loc[0], loc[1] + by_offset, loc[2] + bz_offset))
        bulb = bpy.context.active_object
        bulb.name = f"Warning_Light_Bulb_{label}"
        link_to_collection(bulb, station_collection)
        assign_material(bulb, "Glow_Orange", color_orange_glow, emission=color_orange_glow)
        created_objects.append(bulb)

    # --- DUAL SOLAR PANEL ARRAYS REMOVED BY USER REQUEST ---

    # --- CENTRAL HUB DOCKING/MAINTENANCE HATCHES (ITERATION 20) ---
    # 4 hatches at 45, 135, 225, 315 degrees in X-Z plane
    for h_idx, angle_deg in enumerate([45, 135, 225, 315]):
        angle = math.radians(angle_deg)
        x = 15.0 * math.cos(angle)
        z = 15.0 * math.sin(angle)
        
        # 1. Outer collar ring
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=2.0, depth=0.4, location=(x, 0.0, z))
        ring = bpy.context.active_object
        ring.name = f"Hub_Hatch_Ring_{h_idx+1}"
        ring.rotation_euler = (0.0, -angle + math.pi/2, 0.0)
        link_to_collection(ring, station_collection)
        assign_material(ring, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
        created_objects.append(ring)

        # 2. Central hatch dome
        dx = 15.15 * math.cos(angle)
        dz = 15.15 * math.sin(angle)
        bpy.ops.mesh.primitive_uv_sphere_add(segments=128, ring_count=64, radius=1.0, location=(dx, 0.0, dz))
        dome = bpy.context.active_object
        dome.name = f"Hub_Hatch_Dome_{h_idx+1}"
        dome.scale = (1.0, 1.0, 0.4)
        dome.rotation_euler = (0.0, -angle + math.pi/2, 0.0)
        link_to_collection(dome, station_collection)
        assign_material(dome, "Hull_Light", color_light)
        created_objects.append(dome)

        # 3. 4 structural spokes connecting dome to outer ring
        for s_idx in range(4):
            spoke_angle = s_idx * (math.pi / 2)
            bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.08, depth=1.8)
            spoke = bpy.context.active_object
            spoke.name = f"Hub_Hatch_{h_idx+1}_Spoke_{s_idx+1}"
            link_to_collection(spoke, station_collection)
            assign_material(spoke, "Hull_Dark", color_dark)
            
            # Local offset inside hatch ring
            local_offset = mathutils.Vector((0.9 * math.cos(spoke_angle), 0.9 * math.sin(spoke_angle), 0.0))
            rot_mat = mathutils.Euler((0.0, -angle + math.pi/2, 0.0)).to_matrix()
            world_offset = rot_mat @ local_offset
            
            spoke.location = mathutils.Vector((x, 0.0, z)) + world_offset
            local_dir = mathutils.Vector((math.cos(spoke_angle), math.sin(spoke_angle), 0.0))
            world_dir = rot_mat @ local_dir
            rot_quat = world_dir.to_track_quat('Z', 'Y')
            spoke.rotation_euler = rot_quat.to_euler()
            created_objects.append(spoke)

    # --- CONTROL CONSOLE & BLAST OFF BUTTON (ITERATION 22 & 37) ---
    # Console Table: Heavy-duty border frame with rounded corners
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(12.0, 4.0, 0.6), location=(37.5, -6.5, -4.5))
    console_table = bpy.context.active_object
    console_table.name = "Console_Table"
    
    # Add bevel modifier to round the table borders
    table_bev = console_table.modifiers.new(name="TableBevel", type='BEVEL')
    table_bev.width = 0.15
    table_bev.segments = 6
    bpy.context.view_layer.objects.active = console_table
    bpy.ops.object.modifier_apply(modifier=table_bev.name)
    
    # Cut out center recess for the interface console tray
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(11.0, 3.2, 0.3), location=(37.5, -6.5, -4.2))
    table_cutter = bpy.context.active_object
    table_cutter.name = "Console_Table_Cutter"
    
    bool_table = console_table.modifiers.new(name="TableCut", type='BOOLEAN')
    bool_table.object = table_cutter
    bool_table.operation = 'DIFFERENCE'
    bpy.context.view_layer.objects.active = console_table
    bpy.ops.object.modifier_apply(modifier=bool_table.name)
    bpy.data.objects.remove(table_cutter, do_unlink=True)
    
    link_to_collection(console_table, station_collection)
    assign_material(console_table, "Hull_Dark", color_dark)
    created_objects.append(console_table)
    
    # Recessed control panel screen inside the console tray
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(10.8, 3.0, 0.05), location=(37.5, -6.5, -4.35))
    console_screen = bpy.context.active_object
    console_screen.name = "Console_Screen"
    link_to_collection(console_screen, station_collection)
    assign_material(console_screen, "Glow_Cyan", color_cyan_glow, emission=color_cyan_glow)
    created_objects.append(console_screen)
    
    # Left and Right cylindrical legs
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.15, depth=4.0, location=(32.5, -6.5, -6.5))
    leg_left = bpy.context.active_object
    leg_left.name = "Console_Leg_Left"
    link_to_collection(leg_left, station_collection)
    assign_material(leg_left, "Hull_Dark", color_dark)
    created_objects.append(leg_left)
    
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.15, depth=4.0, location=(42.5, -6.5, -6.5))
    leg_right = bpy.context.active_object
    leg_right.name = "Console_Leg_Right"
    link_to_collection(leg_right, station_collection)
    assign_material(leg_right, "Hull_Dark", color_dark)
    created_objects.append(leg_right)
    
    # BLAST OFF Button Assembly: Scaled-up Tapered Industrial Push Button Box (Iteration 37)
    # 1. Button Base Housing: tapered industrial metal box with rounded beveled edges, scaled up 1.5x
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.7, 2.1, 0.75), location=(37.5, -6.5, -4.0))
    btn_base = bpy.context.active_object
    btn_base.name = "Button_Base"
    
    # Use BMesh to select top vertices and scale them down to create a tapered pyramidal frustum
    import bmesh
    bpy.context.view_layer.objects.active = btn_base
    bpy.ops.object.mode_set(mode='EDIT')
    bm = bmesh.from_edit_mesh(btn_base.data)
    for v in bm.verts:
        if v.co.z > 0.4:
            v.co.x *= 0.7
            v.co.y *= 0.7
    bmesh.update_edit_mesh(btn_base.data)
    bpy.ops.object.mode_set(mode='OBJECT')
    
    # Bevel the base box
    base_bev = btn_base.modifiers.new(name="BaseBevel", type='BEVEL')
    base_bev.width = 0.12
    base_bev.segments = 6
    bpy.context.view_layer.objects.active = btn_base
    bpy.ops.object.modifier_apply(modifier=base_bev.name)
    
    link_to_collection(btn_base, station_collection)
    assign_material(btn_base, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(btn_base)
    
    # 2. Three small status indicator lights on the front face of the box (facing interior)
    ind_colors = [
        ("Button_Indicator_1", (0.1, 0.6, 0.1, 1.0), "Glow_Green", 36.9), # Green (Ready)
        ("Button_Indicator_2", (0.6, 0.4, 0.1, 1.0), "Glow_Orange", 37.5), # Orange (Armed)
        ("Button_Indicator_3", (0.6, 0.1, 0.1, 1.0), "Cabin_Red", 38.1) # Red (Active)
    ]
    for name, col, mat_lbl, ix in ind_colors:
        bpy.ops.mesh.primitive_uv_sphere_add(segments=128, ring_count=64, radius=0.06, location=(ix, -5.43, -4.0))
        ind = bpy.context.active_object
        ind.name = name
        ind.scale.y = 0.5 # Flatten slightly to form dome lens
        link_to_collection(ind, station_collection)
        if mat_lbl == "Glow_Green" or mat_lbl == "Glow_Orange":
            assign_material(ind, mat_lbl, col, emission=col)
        else:
            assign_material(ind, mat_lbl, col)
        created_objects.append(ind)

    # 2.2. Add 4 corner mounting screws on the housing plate
    screw_offsets = [
        (1.05, 0.75), (1.05, -0.75), (-1.05, 0.75), (-1.05, -0.75)
    ]
    for s_idx, (sx, sy) in enumerate(screw_offsets):
        bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.09, depth=0.12, location=(37.5 + sx, -6.5 + sy, -3.6))
        screw = bpy.context.active_object
        screw.name = f"Button_Screw_{s_idx+1}"
        link_to_collection(screw, station_collection)
        assign_material(screw, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.2)
        created_objects.append(screw)

    # 3. Smooth metallic circular bezel ring around the button (vertices=128 for roundness)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.825, depth=0.225, location=(37.5, -6.5, -3.5))
    btn_bezel = bpy.context.active_object
    btn_bezel.name = "Button_Bezel"
    link_to_collection(btn_bezel, station_collection)
    assign_material(btn_bezel, "Hull_Dark", color_dark, metallic=0.9, roughness=0.5)
    
    # Bevel bezel
    bezel_bev = btn_bezel.modifiers.new(name="BezelBevel", type='BEVEL')
    bezel_bev.width = 0.06
    bezel_bev.segments = 6
    bpy.context.view_layer.objects.active = btn_bezel
    bpy.ops.object.modifier_apply(modifier=bezel_bev.name)
    created_objects.append(btn_bezel)
    
    # 4. Perfectly smooth mushroom button (vertices=128, stem + cap)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.63, depth=0.45, location=(37.5, -6.5, -3.3))
    btn_cyl = bpy.context.active_object
    btn_cyl.name = "Button_Cylinder"
    link_to_collection(btn_cyl, station_collection)
    assign_material(btn_cyl, "Cabin_Red", color_red, metallic=0.0, roughness=0.6)
    
    # Bevel top circular edge of the button to give it a realistic rounded mushroom shape
    cyl_bev = btn_cyl.modifiers.new(name="MushroomBevel", type='BEVEL')
    cyl_bev.width = 0.18
    cyl_bev.segments = 8
    bpy.context.view_layer.objects.active = btn_cyl
    bpy.ops.object.modifier_apply(modifier=cyl_bev.name)
    created_objects.append(btn_cyl)
    
    # 5. Protective Lid Guard: curved copper framing hinge at front (window-side), standing vertically (0 deg rotation)
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.85, 0.225, 1.8), location=(37.5, -7.5, -2.6))
    btn_lid = bpy.context.active_object
    btn_lid.name = "Button_Lid"
    btn_lid.rotation_euler = (0.0, 0.0, 0.0)
    
    # Bevel the cover lid to create curved protective borders
    lid_bev = btn_lid.modifiers.new(name="LidBevel", type='BEVEL')
    lid_bev.width = 0.08
    lid_bev.segments = 6
    bpy.context.view_layer.objects.active = btn_lid
    bpy.ops.object.modifier_apply(modifier=lid_bev.name)
    
    link_to_collection(btn_lid, station_collection)
    assign_material(btn_lid, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(btn_lid)
    
    # 5.5. Button Lid Screen: built-in display panel on the underside of the vertical lid (facing the interior)
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(2.4, 0.04, 1.4), location=(37.5, -7.37, -2.6))
    lid_screen = bpy.context.active_object
    lid_screen.name = "Button_Lid_Screen"
    lid_screen.rotation_euler = (0.0, 0.0, 0.0)
    link_to_collection(lid_screen, station_collection)
    assign_material(lid_screen, "Glow_Cyan", color_cyan_glow, emission=color_cyan_glow)
    created_objects.append(lid_screen)
    
    # 6. Protective Lid Hinge bracket at the front of the base box (window-side)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.15, depth=2.4, rotation=(0, math.pi/2, 0), location=(37.5, -7.5, -3.5))
    btn_hinge = bpy.context.active_object
    btn_hinge.name = "Button_Hinge"
    link_to_collection(btn_hinge, station_collection)
    assign_material(btn_hinge, "Hull_Dark", color_dark, metallic=0.9, roughness=0.4)
    created_objects.append(btn_hinge)
    
    # 7. Engraved Label plate ("BLAST OFF") on top of the lid (vertical, facing window)
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.95, 0.12, 0.6), location=(37.5, -7.67, -2.45))
    btn_label = bpy.context.active_object
    btn_label.name = "Button_Label"
    btn_label.rotation_euler = (0.0, 0.0, 0.0)
    link_to_collection(btn_label, station_collection)
    assign_material(btn_label, "Hull_Dark", color_dark)
    created_objects.append(btn_label)
    
    # 8. Realistic conduit elbow pipe connecting bottom of button housing to console desk (now on interior side)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.12, depth=0.6, location=(37.5, -5.5, -4.2))
    btn_conduit = bpy.context.active_object
    btn_conduit.name = "Button_Conduit"
    link_to_collection(btn_conduit, station_collection)
    assign_material(btn_conduit, "Rocket_Silver", color_silver, metallic=1.0, roughness=0.2)
    created_objects.append(btn_conduit)
    
    # Distribute 12 keys (Removed in Iteration 34)
    # key_xs = [33.0, 34.5, 36.0, 39.0, 40.5, 42.0]
    # key_ys = [-5.5, -7.0]
    # key_idx = 1
    # for kx in key_xs:
    #     for ky in key_ys:
    #         # Alternate colors: cyan and red
    #         mat_name = "Glow_Cyan" if key_idx % 2 == 1 else "Cabin_Red"
    #         mat_color = color_cyan_glow if key_idx % 2 == 1 else color_red
    #         emission = color_cyan_glow if key_idx % 2 == 1 else None
    #         
    #         bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.3, 0.3, 0.15), location=(kx, ky, -4.25))
    #         key_obj = bpy.context.active_object
    #         key_obj.name = f"Console_Key_{key_idx}"
    #         link_to_collection(key_obj, station_collection)
    #         assign_material(key_obj, mat_name, mat_color, metallic=0.2, roughness=0.5, emission=emission)
    #         created_objects.append(key_obj)
    #         key_idx += 1

    # --- INTERIOR STRUCTURAL PILLARS & GRATES (ITERATION 23) ---
    # Pillars
    pillar_locs = [
        (23.7, -6.0, 0.0),
        (23.7, 6.0, 0.0),
        (51.3, -6.0, 0.0),
        (51.3, 6.0, 0.0)
    ]
    for idx, (px, py, pz) in enumerate(pillar_locs):
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(0.4, 0.8, 17.5), location=(px, py, pz))
        pillar = bpy.context.active_object
        pillar.name = f"Cabin_Pillar_{idx+1}"
        link_to_collection(pillar, station_collection)
        assign_material(pillar, "Hull_Light", color_light)
        created_objects.append(pillar)
        
    # Floor Grates/Plates
    floor_xs = [31.5, 37.5, 43.5]
    for idx, fx in enumerate(floor_xs):
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(5.0, 16.0, 0.1), location=(fx, 0.0, -8.9))
        plate = bpy.context.active_object
        plate.name = f"Cabin_Floor_Plate_{idx+1}"
        link_to_collection(plate, station_collection)
        assign_material(plate, "Hull_Light", color_light)
        created_objects.append(plate)
        
    # Orange Emissive Lights along floor corners
    light_strip_configs = [
        ((30.0, -8.8, -8.8), "Cabin_Light_Strip_1"),
        ((45.0, -8.8, -8.8), "Cabin_Light_Strip_2"),
        ((30.0, 8.8, -8.8), "Cabin_Light_Strip_3"),
        ((45.0, 8.8, -8.8), "Cabin_Light_Strip_4")
    ]
    for loc, sname in light_strip_configs:
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(10.0, 0.2, 0.2), location=loc)
        strip = bpy.context.active_object
        strip.name = sname
        link_to_collection(strip, station_collection)
        assign_material(strip, "Glow_Orange", color_orange_glow, emission=color_orange_glow)
        created_objects.append(strip)
        
    # 2 wall-mounted cylinders + brackets (Removed in Iteration 32)
    # tank_configs = [
    #     ((25.0, 7.8, -2.0), "Cabin_Tank_1"),
    #     ((50.0, 7.8, -2.0), "Cabin_Tank_2")
    # ]
    # for idx, (loc, tname) in enumerate(tank_configs):
    #     bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.6, depth=5.0, rotation=(0, 0, 0), location=loc)
    #     tank = bpy.context.active_object
    #     tank.name = tname
    #     link_to_collection(tank, station_collection)
    #     assign_material(tank, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    #     created_objects.append(tank)
    #     
    #     # Bracket
    #     bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.4, 0.4, 0.2), location=(loc[0], loc[1]+0.5, loc[2]))
    #     bracket = bpy.context.active_object
    #     assign_material(bracket, "Hull_Dark", color_dark)
    #     created_objects.append(bracket)
        
    # 4 Ceiling/Wall Pipes (Removed in Iteration 35)
    # pipe_configs = [
    #     ((37.5, -8.0, 8.2), (math.pi/2, 0, 0), 26.0, "Cabin_Pipe_1"),
    #     ((37.5, 8.0, 8.2), (math.pi/2, 0, 0), 26.0, "Cabin_Pipe_2"),
    #     ((25.0, 0.0, 8.4), (0, math.pi/2, 0), 16.0, "Cabin_Pipe_3"),
    #     ((50.0, 0.0, 8.4), (0, math.pi/2, 0), 16.0, "Cabin_Pipe_4")
    # ]
    # for loc, rot, depth, pname in pipe_configs:
    #     bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.15, depth=depth, rotation=rot, location=loc)
    #     pipe = bpy.context.active_object
    #     pipe.name = pname
    #     link_to_collection(pipe, station_collection)
    #     assign_material(pipe, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    #     created_objects.append(pipe)

    # Two actual Point Lights inside the cabin to illuminate the interior table and console (Boosted in Iter 37)
    light1_data = bpy.data.lights.new(name="Cabin_Light_1_Data", type='POINT')
    light1_data.energy = 2500.0
    light1_data.color = (1.0, 0.95, 0.85)
    light1_obj = bpy.data.objects.new(name="Cabin_Interior_Light_1", object_data=light1_data)
    link_to_collection(light1_obj, station_collection)
    light1_obj.location = (31.5, -3.0, 2.0)
    
    light2_data = bpy.data.lights.new(name="Cabin_Light_2_Data", type='POINT')
    light2_data.energy = 2500.0
    light2_data.color = (1.0, 0.95, 0.85)
    light2_obj = bpy.data.objects.new(name="Cabin_Interior_Light_2", object_data=light2_data)
    link_to_collection(light2_obj, station_collection)
    light2_obj.location = (43.5, -3.0, 2.0)

    # --- EXTERIOR GENERATOR PODS & COLLARS (ITERATION 24) (Removed in Iteration 33) ---
    # Pod Left & Right
    # bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=3.5, depth=16.0, rotation=(0, math.pi/2, 0), location=(37.5, 12.0, 0.0))
    # pod_l = bpy.context.active_object
    # pod_l.name = "Exterior_Pod_Left"
    # link_to_collection(pod_l, station_collection)
    # assign_material(pod_l, "Hull_Dark", color_dark)
    # created_objects.append(pod_l)
    # 
    # bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=3.5, depth=16.0, rotation=(0, math.pi/2, 0), location=(37.5, -12.0, 0.0))
    # pod_r = bpy.context.active_object
    # pod_r.name = "Exterior_Pod_Right"
    # link_to_collection(pod_r, station_collection)
    # assign_material(pod_r, "Hull_Dark", color_dark)
    # created_objects.append(pod_r)
    # 
    # # 4 Pod Collars
    # collar_configs = [
    #     ((31.0, 12.0, 0.0), "Exterior_Pod_Left_Collar_1"),
    #     ((44.0, 12.0, 0.0), "Exterior_Pod_Left_Collar_2"),
    #     ((31.0, -12.0, 0.0), "Exterior_Pod_Right_Collar_1"),
    #     ((44.0, -12.0, 0.0), "Exterior_Pod_Right_Collar_2")
    # ]
    # for loc, cname in collar_configs:
    #     bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=3.7, depth=0.8, rotation=(0, math.pi/2, 0), location=loc)
    #     collar = bpy.context.active_object
    #     collar.name = cname
    #     link_to_collection(collar, station_collection)
    #     assign_material(collar, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    #     created_objects.append(collar)
    #     
    # # 4 Connector Pipes
    # ext_pipe_configs = [
    #     ((31.0, 11.0, 0.0), "Exterior_Pod_Left_Pipe_1"),
    #     ((44.0, 11.0, 0.0), "Exterior_Pod_Left_Pipe_2"),
    #     ((31.0, -11.0, 0.0), "Exterior_Pod_Right_Pipe_1"),
    #     ((44.0, -11.0, 0.0), "Exterior_Pod_Right_Pipe_2")
    # ]
    # for loc, pname in ext_pipe_configs:
    #     bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.3, depth=2.0, rotation=(math.pi/2, 0, 0), location=loc)
    #     pipe = bpy.context.active_object
    #     pipe.name = pname
    #     link_to_collection(pipe, station_collection)
    #     assign_material(pipe, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    #     created_objects.append(pipe)
    # 
    # # --- POD SUPPORT STRUTS (ITERATION 30) (Removed in Iteration 33) ---
    # bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.5, 1.5, 2.0), location=(37.5, 10.0, 3.0))
    # pod_l_strut = bpy.context.active_object
    # pod_l_strut.name = "Exterior_Pod_Left_Strut"
    # link_to_collection(pod_l_strut, station_collection)
    # assign_material(pod_l_strut, "Hull_Dark", color_dark)
    # 
    # # Bevel left strut
    # pls_bev = pod_l_strut.modifiers.new(name="Bevel", type='BEVEL')
    # pls_bev.width = 0.15
    # pls_bev.segments = 2
    # bpy.context.view_layer.objects.active = pod_l_strut
    # bpy.ops.object.modifier_apply(modifier=pls_bev.name)
    # created_objects.append(pod_l_strut)
    # 
    # bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.5, 1.5, 2.0), location=(37.5, -10.0, -3.0))
    # pod_r_strut = bpy.context.active_object
    # pod_r_strut.name = "Exterior_Pod_Right_Strut"
    # link_to_collection(pod_r_strut, station_collection)
    # assign_material(pod_r_strut, "Hull_Dark", color_dark)
    # 
    # # Bevel right strut
    # prs_bev = pod_r_strut.modifiers.new(name="Bevel", type='BEVEL')
    # prs_bev.width = 0.15
    # prs_bev.segments = 2
    # bpy.context.view_layer.objects.active = pod_r_strut
    # bpy.ops.object.modifier_apply(modifier=prs_bev.name)
    # created_objects.append(pod_r_strut)
        
    # Back Cap
    bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.5, 14.0, 14.0), location=(53.0, 0.0, 0.0))
    back_cap = bpy.context.active_object
    back_cap.name = "Exterior_Back_Cap"
    link_to_collection(back_cap, station_collection)
    assign_material(back_cap, "Hull_Light", color_light)
    created_objects.append(back_cap)
    
    # Docking Collar
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=5.0, depth=1.5, rotation=(0, math.pi/2, 0), location=(54.0, 0.0, 0.0))
    dock_collar = bpy.context.active_object
    dock_collar.name = "Exterior_Docking_Collar"
    link_to_collection(dock_collar, station_collection)
    assign_material(dock_collar, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(dock_collar)
    
    # Guide Fins
    fin_configs = [
        ((54.0, 0.0, 5.5), (0.0, 0.0, 0.0), (1.0, 0.2, 2.0), "Exterior_Docking_Fin_1"),
        ((54.0, -4.8, -2.8), (0.0, 0.0, math.radians(120)), (1.0, 0.2, 2.0), "Exterior_Docking_Fin_2"),
        ((54.0, 4.8, -2.8), (0.0, 0.0, math.radians(-120)), (1.0, 0.2, 2.0), "Exterior_Docking_Fin_3")
    ]
    for loc, rot, sc, fname in fin_configs:
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=sc, location=loc)
        fin = bpy.context.active_object
        fin.name = fname
        fin.rotation_euler = rot
        link_to_collection(fin, station_collection)
        assign_material(fin, "Hull_Dark", color_dark)
        created_objects.append(fin)

    # --- ROOM EXTERIOR RIBS, RADIATORS, & DISH (ITERATION 25) ---
    # Rib 1 & 3 wrapping the block (X = 26.0, 49.0) - Middle Rib 2 removed to keep window completely clear
    for idx, rx in enumerate([26.0, 49.0]):
        rib_num = 1 if rx == 26.0 else 3
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.0, 21.0, 21.0), location=(rx, 0.0, 0.0))
        rib = bpy.context.active_object
        rib.name = f"Exterior_Rib_{rib_num}"
        
        # Cut inner section to wrap the 20x20 hull
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(1.2, 19.5, 19.5), location=(rx, 0.0, 0.0))
        rcut = bpy.context.active_object
        
        bool_rib = rib.modifiers.new(name="ExtRibCut", type='BOOLEAN')
        bool_rib.object = rcut
        bool_rib.operation = 'DIFFERENCE'
        bpy.context.view_layer.objects.active = rib
        bpy.ops.object.modifier_apply(modifier=bool_rib.name)
        bpy.data.objects.remove(rcut, do_unlink=True)
        
        link_to_collection(rib, station_collection)
        assign_material(rib, "Hull_Dark", color_dark)
        created_objects.append(rib)
        
    # Radiator Fins (4 fins)
    fin_locs = [
        ((32.0, 0.0, 10.4), "Exterior_Radiator_Fin_1"),
        ((43.0, 0.0, 10.4), "Exterior_Radiator_Fin_2"),
        ((32.0, 0.0, -10.4), "Exterior_Radiator_Fin_3"),
        ((43.0, 0.0, -10.4), "Exterior_Radiator_Fin_4")
    ]
    for loc, fname in fin_locs:
        bpy.ops.mesh.primitive_cube_add(size=1.0, scale=(6.0, 18.0, 0.1), location=loc)
        fin = bpy.context.active_object
        fin.name = fname
        link_to_collection(fin, station_collection)
        assign_material(fin, "Hull_Light", color_light)
        created_objects.append(fin)
        
    # Radiator Mounts (2 mounts: top and bottom)
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.2, depth=0.8, rotation=(0, 0, 0), location=(37.5, 0.0, 10.1))
    mount_top = bpy.context.active_object
    mount_top.name = "Exterior_Radiator_Mount_1"
    link_to_collection(mount_top, station_collection)
    assign_material(mount_top, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(mount_top)
    
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.2, depth=0.8, rotation=(0, 0, 0), location=(37.5, 0.0, -10.1))
    mount_bot = bpy.context.active_object
    mount_bot.name = "Exterior_Radiator_Mount_2"
    link_to_collection(mount_bot, station_collection)
    assign_material(mount_bot, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(mount_bot)
    
    # Comm Dish Mast
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.15, depth=3.0, location=(37.5, 0.0, 11.5))
    comm_mast = bpy.context.active_object
    comm_mast.name = "Exterior_Comm_Mast"
    link_to_collection(comm_mast, station_collection)
    assign_material(comm_mast, "Hull_Dark", color_dark)
    created_objects.append(comm_mast)
    
    # Comm Dish (pointing upwards, rotation around Y)
    bpy.ops.mesh.primitive_cone_add(vertices=128, radius1=2.0, radius2=0.0, depth=0.8, location=(37.5, 0.0, 13.0), rotation=(0, 0, 0))
    comm_dish = bpy.context.active_object
    comm_dish.name = "Exterior_Comm_Dish"
    link_to_collection(comm_dish, station_collection)
    assign_material(comm_dish, "Gantry_Copper", color_copper, metallic=1.0, roughness=0.3)
    created_objects.append(comm_dish)
    
    # Comm Feedhorn
    bpy.ops.mesh.primitive_cylinder_add(vertices=128, radius=0.08, depth=1.0, location=(37.5, 0.0, 13.8))
    comm_feed = bpy.context.active_object
    comm_feed.name = "Exterior_Comm_Feed"
    link_to_collection(comm_feed, station_collection)
    assign_material(comm_feed, "Hull_Dark", color_dark)
    created_objects.append(comm_feed)

    # --- MODIFIER CLEANUP & BEVEL APPLICATION (ITER 18) ---
    for name in ["Arm_Collar_West", "Arm_Collar_North", "Arm_Collar_South", "Hub_Front_Ring_1", "Hub_Front_Ring_2"]:
        obj = bpy.data.objects.get(name)
        if obj:
            bpy.context.view_layer.objects.active = obj
            bev_mod = obj.modifiers.new(name="AutoBevel", type='BEVEL')
            bev_mod.width = 0.2
            bev_mod.segments = 6
            bpy.ops.object.modifier_apply(modifier=bev_mod.name)

    # --- HIGH-POLY MODIFIER & SMOOTH SHADING UPGRADES ---
    # 2. Upgrade all Bevel modifiers to high-poly segment counts
    for obj in created_objects:
        for mod in list(obj.modifiers):
            if mod.type == 'BEVEL':
                mod.segments = max(6, mod.segments * 2)

    # 3. Apply Shade Auto Smooth to all created mesh objects
    bpy.ops.object.select_all(action='DESELECT')
    for obj in created_objects:
        if obj.type == 'MESH':
            obj.select_set(True)
            bpy.context.view_layer.objects.active = obj
            try:
                bpy.ops.object.shade_auto_smooth()
            except Exception:
                pass
            obj.select_set(False)

    print(f"Space station visual blockout successfully created with {len(created_objects)} objects.")
    return len(created_objects)

if __name__ == "__main__":
    create_station_blockout()
