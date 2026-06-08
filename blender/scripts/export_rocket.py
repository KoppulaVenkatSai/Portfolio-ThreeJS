import bpy
import os

# Paths
blend_file = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/FinalBlenderModels/final_space_station_model_v1.blend"
output_glb = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS/Tests/EarthLandingPOC/assets/NewRocket.glb"

print(f"Loading blend file: {blend_file}")
bpy.ops.wm.open_mainfile(filepath=blend_file)

# Select all rocket objects
rocket_objs = []
for obj in bpy.data.objects:
    if "Rocket" in obj.name or "Booster" in obj.name or "Fin" in obj.name or "Engine" in obj.name or "Nozzle" in obj.name:
        rocket_objs.append(obj)

print(f"Found {len(rocket_objs)} rocket-related objects.")

# Delete everything except rocket objects
for obj in list(bpy.data.objects):
    if obj not in rocket_objs:
        bpy.data.objects.remove(obj, do_unlink=True)

# Select all remaining objects
for obj in bpy.data.objects:
    obj.select_set(True)

# Shift all objects to center at origin
# The rocket in the script is built at (42.0, -30.0, -6.25 base height)
dx = -42.0
dy = 30.0
dz = 6.25

print(f"Centering rocket objects by offset: ({dx}, {dy}, {dz})")
for obj in bpy.context.selected_objects:
    obj.location.x += dx
    obj.location.y += dy
    obj.location.z += dz

# Rotate rocket so it's pointing upright along Y or Z as expected
# By default in Blender, Z is up. In Three.js, Y is up.
# Let's keep the Blender orientation and we can adjust in Three.js, or rotate here.
# Let's keep Blender's Z-up as the main axis.

# Export as GLTF/GLB
print(f"Exporting to GLB: {output_glb}")
os.makedirs(os.path.dirname(output_glb), exist_ok=True)
bpy.ops.export_scene.gltf(
    filepath=output_glb,
    export_format='GLB',
    use_selection=False # Export whole scene (which is just the rocket now)
)

print("Export completed successfully!")
