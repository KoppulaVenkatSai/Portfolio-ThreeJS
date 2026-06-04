import bpy
import subprocess
import os
import sys
import threading

def run_hunyuan_and_import():
    # Paths
    project_root = "/Users/venkat/Desktop/Other/Projects/ThreeJS/ThreeTest/Portfolio-ThreeJS"
    hunyuan_dir = os.path.join(project_root, "AiModelTests", "Hunyuan3D-MLX-main")
    image_path = os.path.join(project_root, "assets", "Images", "space-station-front-top-left.png")
    output_dir = os.path.join(project_root, "AiModelTests", "SpaceStationOut")
    glb_path = os.path.join(output_dir, "paint.glb")
    
    print("Starting local Hunyuan3D-MLX generation...")
    print(f"Using image: {image_path}")
    
    # We must run this from the Hunyuan directory using uv
    cmd = [
        "uv", "run", "python", "main.py", "full", 
        "--image", image_path,
        "--output-dir", output_dir,
        "--paint-diffusion-backend", "mlx" # Use MLX for texture generation to save RAM
    ]
    
    # Execute the command
    env = os.environ.copy()
    env["HF_TOKEN"] = "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"
    
    try:
        process = subprocess.Popen(cmd, cwd=hunyuan_dir, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        for line in process.stdout:
            print(f"[Hunyuan3D] {line.strip()}")
        process.wait()
        
        if process.returncode != 0:
            print(f"Generation failed with return code {process.returncode}")
            return
            
        print("Generation complete! Importing into Blender...")
        
        # Clear existing scene
        bpy.ops.object.select_all(action='SELECT')
        bpy.ops.object.delete()
        
        # Import the generated GLB
        if os.path.exists(glb_path):
            bpy.ops.import_scene.gltf(filepath=glb_path)
            print("Import successful!")
            
            # Scale it up slightly as generated models are usually small
            for obj in bpy.context.selected_objects:
                obj.scale = (5.0, 5.0, 5.0)
                
            # Frame the camera
            for area in bpy.context.screen.areas:
                if area.type == 'VIEW_3D':
                    for region in area.regions:
                        if region.type == 'WINDOW':
                            override = {'area': area, 'region': region}
                            bpy.ops.view3d.view_all(override)
        else:
            print(f"Error: Could not find generated file at {glb_path}")
            
    except Exception as e:
        print(f"Failed to run generation: {e}")

# Run in a background thread so we don't freeze Blender UI while generating
thread = threading.Thread(target=run_hunyuan_and_import)
thread.start()
