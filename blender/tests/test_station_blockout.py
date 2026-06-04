import bpy
import math
import os
import sys
import mathutils

# Add scripts directory to path to import generate_station_blockout
scripts_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/blender/scripts"
if sys.path[0] != scripts_dir:
    sys.path.insert(0, scripts_dir)

import importlib
import generate_station_blockout
importlib.reload(generate_station_blockout)

def setup_camera_and_lighting():
    print("Setting up camera and lights...")
    
    # Remove existing cameras and lights
    for obj in list(bpy.data.objects):
        if obj.type in ('CAMERA', 'LIGHT'):
            bpy.data.objects.remove(obj, do_unlink=True)
            
    # 1. Create a Sun Light
    sun_data = bpy.data.lights.new(name="Sun_Light_Data", type='SUN')
    sun_data.energy = 6.0
    sun_data.color = (1.0, 0.98, 0.95)
    sun_obj = bpy.data.objects.new(name="Sun_Light", object_data=sun_data)
    bpy.context.scene.collection.objects.link(sun_obj)
    sun_obj.location = (40.0, -50.0, 60.0)
    
    # Point at center (5.0, -5.0, 2.0)
    sun_obj.rotation_euler = (0.837, 0.261, -0.61)

    # 2. Create a Soft Blue Ambient Fill Point Light
    point_data = bpy.data.lights.new(name="Blue_Fill_Data", type='POINT')
    point_data.energy = 50000.0
    point_data.color = (0.3, 0.6, 1.0)
    point_obj = bpy.data.objects.new(name="Blue_Fill_Light", object_data=point_data)
    bpy.context.scene.collection.objects.link(point_obj)
    point_obj.location = (-30.0, 30.0, -15.0)

    # Setup background world ambient light
    if bpy.context.scene.world:
        bpy.context.scene.world.use_nodes = True
        bg_node = bpy.context.scene.world.node_tree.nodes.get("Background")
        if bg_node:
            bg_node.inputs['Color'].default_value = (0.05, 0.07, 0.12, 1.0)
            bg_node.inputs['Strength'].default_value = 1.5

    # Helper function to create a camera pointing at a target
    def create_cam(name, loc, target_point):
        cam_data = bpy.data.cameras.new(name=f"{name}_Data")
        cam_data.clip_end = 500.0
        cam_obj = bpy.data.objects.new(name=name, object_data=cam_data)
        bpy.context.scene.collection.objects.link(cam_obj)
        cam_obj.location = loc
        
        direction = target_point - cam_obj.location
        rot_quat = direction.to_track_quat('-Z', 'Y')
        cam_obj.rotation_euler = rot_quat.to_euler()
        return cam_obj

    # Create the 5 cameras
    cam_ftl = create_cam("Test_Camera", (22.0, -75.0, 28.0), mathutils.Vector((25.0, -5.0, 2.0)))
    cam_front = create_cam("Test_Camera_Front", (37.5, -60.0, 0.0), mathutils.Vector((37.5, 0.0, 0.0)))
    cam_top = create_cam("Test_Camera_Top", (37.5, 0.0, 60.0), mathutils.Vector((37.5, 0.0, 0.0)))
    cam_bottom = create_cam("Test_Camera_Bottom", (37.5, 0.0, -60.0), mathutils.Vector((37.5, 0.0, 0.0)))
    cam_interior = create_cam("Test_Camera_Interior", (25.0, -2.0, -3.0), mathutils.Vector((37.5, -6.5, -4.5)))

    return cam_ftl, cam_front, cam_top, cam_bottom, cam_interior

def run_test():
    print("Executing Visual Blockout Generation Test for Iterations 19-21...")
    
    # Run the generator
    object_count = generate_station_blockout.create_station_blockout()
    
    # Assertions
    assert object_count == 374, f"Expected exactly 374 objects, got {object_count}"
    assert "SpaceStation" in bpy.data.collections, "Collection 'SpaceStation' was not created!"
    
    # Verify key structural elements exist
    expected_core_names = [
        "Central_Hub",
        "Hub_Seam_Z",
        "Arm_Y_Axis_Back",
        "Arm_Y_Axis_Front",
        "Arm_X_Axis_Left",
        "Arm_X_Axis_Right",
        "Habitat_Block_Main",
        "Window_Glass",
        "Window_Frame",
        "Window_Inner_Frame",
        "Hub_Front_Dome",
        "Hub_Front_Ring_1",
        "Hub_Front_Ring_2",
        "Hub_Front_Spoke_1",
        "Arm_Collar_West",
        "Arm_Collar_West_Bolt_1",
        "Arm_Collar_North",
        "Arm_Collar_South",
        "Docking_Platform_Neck",
        "Docking_Platform",
        "Rocket_Stage_1",
        "Rocket_Stage_2",
        "Rocket_Nose_Cone",
        "Rocket_Needle_Tip",
        "Rocket_Nozzle_Main",
        "Rocket_Nozzle_Gimbal_1",
        "Rocket_Booster_1",
        "Rocket_Booster_Pipe_1",
        "Rocket_Fin_1",
        "Rocket_Interstage_Ring",
        "Rocket_RCS_Block_1",
        "Rocket_Booster_Clamp_1",
        "Rocket_Booster_Nozzle_1",
        "Rocket_Steering_Fin_1",
        "Rocket_Main_Pipe",
        "Rocket_Turbopump_Exhaust",
        "Rocket_Sensor_Box_1",
        "Gantry_Pole_1",
        "Gantry_Level_Ring_1",
        "Gantry_Brace_A_1",
        "Gantry_Outer_East_A_1",
        "Gantry_Bridge_Lower",
        "Gantry_Bridge_Upper",
        "Gantry_Bridge_Lower_Rail_Front",
        "Arm_West_Panel_1",
        "Arm_West_Stringer_1",
        "Arm_West_Comm_Dish",
        "Hub_Antenna_Mast",
        "Exterior_Pipe_1",
        "Utility_Box_Front_1",
        "Warning_Light_Box_Front_Top_Left",
        "Warning_Light_Bulb_Front_Top_Left",
        "Arm_Truss_North_Core",
        "Arm_Truss_South_Core",
        "Hub_Hatch_Ring_1",
        "Hub_Hatch_Dome_1",
        "Hub_Hatch_1_Spoke_1",
        "Arm_Truss_North_Pole_1",
        "Arm_Truss_North_Ring_1",
        "Arm_Truss_North_Brace_1A",
        "Arm_Truss_South_Pole_1",
        "Arm_Truss_South_Ring_1",
        "Arm_Truss_South_Brace_1A",
        # Iteration 22: Control Console
        "Console_Table",
        "Console_Screen",
        "Console_Leg_Left",
        "Console_Leg_Right",
        "Button_Base",
        "Button_Cylinder",
        "Button_Lid",
        "Button_Lid_Screen",
        "Button_Label",
        # Iteration 23: Cabin Wall Structures
        "Cabin_Pillar_1",
        "Cabin_Floor_Plate_1",
        "Cabin_Light_Strip_1",
        # Iteration 24: Exterior Modules (Pods removed in Iteration 33)
        "Exterior_Back_Cap",
        "Exterior_Docking_Collar",
        "Exterior_Docking_Fin_1",
        # Iteration 25: Exterior Ribs & Radiators
        "Exterior_Rib_1",
        "Exterior_Radiator_Fin_1",
        "Exterior_Radiator_Mount_1",
        "Exterior_Comm_Mast",
        "Exterior_Comm_Dish",
        "Exterior_Comm_Feed",
        # Iteration 28: Top & Bottom Housings
        "Exterior_Top_Housing",
        "Exterior_Bottom_Housing",
        # Iteration 29: Front Panel Plates
        "Exterior_Front_Plate_Top",
        "Exterior_Front_Plate_Bottom"
    ]
    
    col = bpy.data.collections["SpaceStation"]
    col_objects = [obj.name for obj in col.objects]
    
    for name in expected_core_names:
        assert name in col_objects, f"Core structure object '{name}' was not found in 'SpaceStation' collection!"
        
    # Setup camera and lights
    cam1, cam_front, cam_top, cam_bottom, cam2 = setup_camera_and_lighting()
    
    # Configure Render Engine to Cycles for headless execution compatibility
    bpy.context.scene.render.engine = 'CYCLES'
    if hasattr(bpy.context.scene, "cycles"):
        bpy.context.scene.cycles.device = 'CPU'
        bpy.context.scene.cycles.samples = 8  # Low samples for speed
    
    # Make sure we have outputs folder
    output_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/blender/outputs"
    os.makedirs(output_dir, exist_ok=True)
    
    # Save the blend file
    blend_path = os.path.join(output_dir, "SpaceStation_Blockout.blend")
    bpy.ops.wm.save_as_mainfile(filepath=blend_path)
    print(f"Saved .blend file to {blend_path}")
 
    # Set 3D Viewport shading to Rendered / Material Preview
    for area in bpy.context.screen.areas:
        if area.type == 'VIEW_3D':
            for space in area.spaces:
                if space.type == 'VIEW_3D':
                    space.shading.type = 'MATERIAL'
                    space.shading.use_scene_lights = True
                    space.shading.use_scene_world = True
                    
    # Render the 5 camera views
    camera_views = [
        (cam1, "blockout_preview.png", "Wide Front-Top-Left view"),
        (cam_front, "blockout_preview_front.png", "Front view"),
        (cam_top, "blockout_preview_top.png", "Top view"),
        (cam_bottom, "blockout_preview_bottom.png", "Bottom view"),
        (cam2, "blockout_preview_interior.png", "Cabin Interior view")
    ]
    
    bpy.context.scene.render.image_settings.file_format = 'PNG'
    for cam, fname, desc in camera_views:
        bpy.context.scene.camera = cam
        screenshot_path = os.path.join(output_dir, fname)
        bpy.context.scene.render.filepath = screenshot_path
        try:
            bpy.ops.render.render(write_still=True)
            print(f"{desc} saved to {screenshot_path}")
        except Exception as e:
            print(f"Render for {desc} failed: {e}")
            
    # Copy screenshots to brain directory
    import shutil
    brain_dir = "/Users/venkat/.gemini/antigravity-ide/brain/8f896d2d-4019-418b-8d25-baf9d3f0c695"
    if os.path.exists(brain_dir):
        for _, fname, _ in camera_views:
            src = os.path.join(output_dir, fname)
            dst = os.path.join(brain_dir, fname)
            try:
                shutil.copy(src, dst)
                print(f"Copied {fname} to brain directory.")
            except Exception as e:
                print(f"Failed to copy {fname}: {e}")
    
    print("TEST PASSED SUCCESSFULLY!")
 
if __name__ == "__main__":
    run_test()
