import bpy
import sys
import os
import math
import mathutils

scripts_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/blender/scripts"
if scripts_dir not in sys.path:
    sys.path.insert(0, scripts_dir)

import generate_station_blockout

# Setup logs & paths
outputs_dir = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/blender/outputs"
os.makedirs(outputs_dir, exist_ok=True)

# Clean scene
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)

# Generate final state (iteration 70)
print("Generating final station blockout...")
object_count = generate_station_blockout.create_station_blockout(iteration_level=70)
print(f"Generated station blockout successfully. Total objects: {object_count}")

# Camera Setup Helper
def setup_camera_and_lighting():
    for obj in list(bpy.data.objects):
        if obj.type in ('CAMERA', 'LIGHT'):
            bpy.data.objects.remove(obj, do_unlink=True)
            
    sun_data = bpy.data.lights.new(name="Sun_Light_Data", type='SUN')
    sun_data.energy = 6.0
    sun_data.color = (1.0, 0.98, 0.95)
    sun_obj = bpy.data.objects.new(name="Sun_Light", object_data=sun_data)
    bpy.context.scene.collection.objects.link(sun_obj)
    sun_obj.location = (40.0, -50.0, 60.0)
    sun_obj.rotation_euler = (0.837, 0.261, -0.61)
    
    point_data = bpy.data.lights.new(name="Blue_Fill_Data", type='POINT')
    point_data.energy = 50000.0
    point_data.color = (0.3, 0.6, 1.0)
    point_obj = bpy.data.objects.new(name="Blue_Fill_Light", object_data=point_data)
    bpy.context.scene.collection.objects.link(point_obj)
    point_obj.location = (-30.0, 30.0, -15.0)

    if bpy.context.scene.world:
        bpy.context.scene.world.use_nodes = True
        bg_node = bpy.context.scene.world.node_tree.nodes.get("Background")
        if bg_node:
            bg_node.inputs['Color'].default_value = (0.05, 0.07, 0.12, 1.0)
            bg_node.inputs['Strength'].default_value = 1.5

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

    cam_front = create_cam("Test_Camera_Front", (37.5, -60.0, 0.0), mathutils.Vector((37.5, 0.0, 0.0)))
    cam_interior = create_cam("Test_Camera_Interior", (25.0, -2.0, -3.0), mathutils.Vector((37.5, -6.5, -4.5)))
    cam_top = create_cam("Test_Camera_Top", (37.5, 0.0, 60.0), mathutils.Vector((37.5, 0.0, 0.0)))
    cam_bottom = create_cam("Test_Camera_Bottom", (37.5, 0.0, -60.0), mathutils.Vector((37.5, 0.0, 0.0)))
    cam_ftl = create_cam("Test_Camera", (22.0, -75.0, 28.0), mathutils.Vector((25.0, -5.0, 2.0)))

    return cam_front, cam_interior, cam_top, cam_bottom, cam_ftl

cam_front, cam_interior, cam_top, cam_bottom, cam_ftl = setup_camera_and_lighting()

# Render setup
bpy.context.scene.render.engine = 'CYCLES'
if hasattr(bpy.context.scene, "cycles"):
    bpy.context.scene.cycles.device = 'CPU'
    bpy.context.scene.cycles.samples = 8

views_to_render = [
    (cam_front, "blockout_preview_front.png", "Front View Final"),
    (cam_interior, "blockout_preview_interior.png", "Interior View Final"),
    (cam_top, "blockout_preview_top.png", "Top View"),
    (cam_bottom, "blockout_preview_bottom.png", "Bottom View"),
    (cam_ftl, "blockout_preview.png", "Wide FTL View")
]

bpy.context.scene.render.image_settings.file_format = 'PNG'
for cam, fname, desc in views_to_render:
    bpy.context.scene.camera = cam
    screenshot_path = os.path.join(outputs_dir, fname)
    bpy.context.scene.render.filepath = screenshot_path
    try:
        bpy.ops.render.render(write_still=True)
        print(f"Render {desc} saved to {fname}")
    except Exception as e:
        print(f"Render {desc} failed: {e}")

# Save final blend file
blend_path = os.path.join(outputs_dir, "SpaceStation_Blockout.blend")
bpy.ops.wm.save_as_mainfile(filepath=blend_path)
print(f"Saved final .blend file to {blend_path}")
