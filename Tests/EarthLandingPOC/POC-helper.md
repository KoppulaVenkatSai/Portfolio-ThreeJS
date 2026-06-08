# HIGH-FIDELITY WEBGL ENGINE CONFIGURATION ENGINE PROTOCOL

**TARGET PLATFORM:** Antigravity / Three.js / Custom GLSL Shader Pipeline

**SCENE REFERENCES:** Scene X (The Data Warp) & Scene 3 (The Planetary Entry Complex)

---

## SECTION 1: SYSTEM GLOBAL STRUCTS & INITIAL STATE LOGIC

```javascript
// Global State Machine Engine Variables for Antigravity Initialization
const ENGINE_STATE = {
  currentScene: "SCENE_X", // Initial state loop
  globalTime: 0.0,         // Uniform float passed directly to all fragment shaders
  warpVelocity: 0.0,       // Interpolation float variable (0.0 to 1000.0)
  cameraShakeAmp: 0.0,     // Real-time matrix translation offset multi-plier
  globalFogDensity: 0.0,   // Exponential squared parameter for WebGL fog core
  atmosphereFriction: 0.0  // Burn-state scalar determining plasma shader alpha channels
};

// Strict Material Definitions to Prevent Generic Standard Fallbacks
const MATERIALS = {
  rocketHull: new THREE.ShaderMaterial({
    uniforms: {
      tCubeEnv: { value: null }, // Fed dynamically via a dual-pass Vector3 CubeCamera
      uTime: { value: 0.0 },
      uFrictionGlow: { value: 0.0 },
      uHeatShimmer: { value: 0.0 }
    },
    vertexShader: VERTEX_SHADER_MIRROR_HULL,
    fragmentShader: FRAGMENT_SHADER_MIRROR_HULL,
    transparent: false,
    roughness: 0.0, // Hardcoded behavior override
    metalness: 1.0  // Hardcoded behavior override
  }),
  obsidianMonolith: new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.05,
    metalness: 0.95,
    emissive: 0x00FFFF,
    emissiveIntensity: 0.0 // Modified dynamically via sine uniform wave state loops
  })
};

```

---

## SECTION 2: SCENE X – THE DATA WARP TUNNEL (COMPREHENSIVE FRAME DATA)

### FRAME X-01 TO X-30: THE ENGINE PRE-FIRE & SYSTEM COLD-STATE

#### 1. Exact Screen Layout & Spatial Boundaries

* **The Viewport Split Geometry:** Mathematically allocate the screen array index parameters. The absolute pixel bounds from $X = 0$ to $X = \text{Screen Width} \times 0.5$ must map exclusively to the background rendering layers. The bounds from $X = \text{Screen Width} \times 0.5$ to $X = \text{Screen Width}$ are dominated by the right structural quadrant of the rocket geometry.
* **Rocket Mesh Anchor Position:** The rocket model's origin transform vector is offset to `Vector3(1.4, -3.5, 2.0)` with a strict rotation matrix of `Euler(0, -Math.PI / 4, 0)` to guarantee its reflective cylindrical hull occupies the exact vertical right-hand hemisphere of the screen space.
* **Left Screen Deep Space Layout:** The left 50% coordinate frame displays a clean, non-moving particle array representing a sparse background star field. Particle density is restricted to precisely 400 independent vector points rendered via a standard `THREE.PointsMaterial` set to a hard size of `1.5px` and a hexadecimal color of `0xFFFFFF`.

#### 2. Material Shader & Texture Execution

* **Hull State:** The rocket material is completely cold, behaving as a dark obsidian mirror with zero emission maps active. It reflects nothing but the unmoving, distant background stars with zero warping or distortion variables applied to the reflection vectors.
* **Thruster Matrix:** The rocket engine bells located at the lower right quadrant are completely dark, mapping an unlit dark titanium texture map with zero color variance or vertex emission values.

#### 3. Camera Matrix & Motion Vectors

* **Position Vector:** Fixed at a low perspective base index of `Vector3(0.0, -4.0, -6.5)`.
* **LookAt Target Vector:** Directed straight along the spine of the craft pointing at `Vector3(0.0, 10.0, 15.0)`, forcing a dramatic, low-angle perspective looking up toward the sharp tapered nose cone.
* **Velocity Scalar:** Explicitly hardcoded to `0.0`. Camera vibration scalar is set to an absolute state of `0.0`.

---

### FRAME X-31 TO X-90: VORTEX COALESCENCE (THE WARP INITIATION LOOP)

#### 1. Exact Screen Layout & Spatial Boundaries

* **Left Screen Velocity Transformation:** The static star field on the left 50% boundary box begins a radical geometric transformation. The linear vector positions are reassigned via an internal computation loop inside the vertex shader, forcing them to spin around the central Z-axis of the camera's viewport view tracking.
* **Right Screen Reflection Deformation:** The right 50% boundary displaying the rocket hull mirrors the spinning transformation instantly. The light streaks hitting the edge profile bounding line of the cylinder are visually squashed and compressed into tight, elliptical curves along the surface topology map of the rocket.

#### 2. Material Shader & Texture Execution

* **Logarithmic Vortex Code Injection:** The stars are passed into a custom GLSL vertex shader that processes a logarithmic spiral function:

$$r = a \cdot e^{b \cdot \theta}$$



where $a = 0.1$ and $b = 0.23$, forcing the particle coordinate arrays to lengthen along their trajectory vector paths and compress into a high-density tunnel vortex in the direct deep center of the left-hand screen coordinates.
* **The Reflection Vector Equation:** The reflection on the cylinder mesh must follow the exact physical coordinate alignment loop:

$$\vec{R} = \vec{I} - 2(\vec{I} \cdot \vec{N})$$



The incoming light rays ($\vec{I}$) from the vortex are calculated relative to the surface normal vectors ($\vec{N}$) of the high-poly rocket geometry, forcing the reflection to dynamically stretch out into curved lines.

#### 3. Camera Matrix & Motion Vectors

* **Position Vector:** Stays locked at `Vector3(0.0, -4.0, -6.5)`.
* **Velocity Variable Interpolation:** The global velocity variable linearly interpolates from `0.0` up to `350.0` units.
* **Camera Shake Modulation:** Introduce a low-amplitude fractional noise loop utilizing a standard Math.random function array applied directly to the camera matrix position index:
```javascript
camera.position.x += Math.sin(ENGINE_STATE.globalTime * 50.0) * 0.015;
camera.position.y += Math.cos(ENGINE_STATE.globalTime * 50.0) * 0.015;

```



---

### FRAME X-91 TO X-300: STEADY-STATE HYPER-DRIVE (THE DATA INTERACTION STEADY-LOOP)

#### 1. Exact Screen Layout & Spatial Boundaries

* **Left Screen Full Warp Canvas:** The left 50% of the screen is a solid, hyper-dense wall of blinding motion streaks. The visual architecture completely eliminates any empty space, replacing it with solid channels of continuous light that flow into the infinite vanishing point of the warp tunnel core.
* **Right Screen Mirror Saturation:** The right 50% of the screen is a highly reactive surface mapping the continuous light channels across the liquid chrome geometry. The reflections look perfectly fused with the world space, matching the velocity vectors seamlessly at the physical boundary line of the rocket hull.

#### 2. Material Shader & Texture Execution

* **Data Packet Shader Stream:** The fragment shader of the particle tunnel introduces a timing step condition that injects high-intensity glowing neon cyan (`#00FFFF`) and digital gold (`#FFD700`) data packet segments into the motion streaks. This mimics high-speed digital code streams transferring across an optical array link.
* **Post-Processing Vector Pass:** Instantiate an UnrealBloomPass with an initial threshold value of `0.25`, a strength coefficient of `2.1`, and a blurring radius parameter of `1.0`. Link this with a radial velocity blur shader that stretches the color data outward from the central pixel node of the tunnel vortex to create an intense motion blur.

#### 3. Camera Matrix & Motion Vectors

* **Position Vector:** Maintained at `Vector3(0.0, -4.0, -6.5)`.
* **Velocity Maxima:** The speed variable sits consistently at its absolute highest peak of `1000.0`.
* **Vibration State Loop:** The micro-vibration frequency spikes to `120.0Hz`, causing a persistent, high-velocity buzz animation across all coordinates of the rendering pipeline.

---

## SECTION 3: SCENE 3 – THE PLANETARY ENTRY SEQUENCE (BEAT-BY-BEAT PRODUCTION CODE)

### BEAT 1 [FRAME 3-01 TO 3-60]: THE HYPERSPACE SNAP-BACK

#### 1. Exact Screen Layout & Spatial Boundaries

* **The Sudden State Erasure:** In a single frame transition, the entire particle system, the motion streaks, the data packets, and the bloom passes from Scene X are set to an alpha value of `0.0` or destroyed out of active memory loops.
* **Left Screen Global Space Setup:** The left 50% view space is populated by a gigantic sphere mesh representing the target planet. The sphere fills 85% of the left vertical viewing frame, exposing a sweeping curve of a planetary horizon.
* **Right Screen Reflection Setup:** The right 50% rocket hull area switches from reflecting the light streaks of the warp tunnel to acting as a dark, pristine curved mirror capturing the blue horizon texture of the planet sphere mesh below it.

#### 2. Material Shader & Texture Execution

* **Planet Surface Mapping:** The planet sphere is loaded with a high-fidelity texture array containing a diffuse layer mapping deep turquoise blue oceans and high-altitude swirling white cloud patterns. A secondary specularity map regulates the ocean gloss values, while a strict lighting calculation handles a hard terminator boundary transition that dips the reverse side of the planet mesh into pitch blackness.
* **Atmospheric Rim Shader:** Implement a secondary custom gas-glowing Fresnel shader on an outer, slightly scaled sphere mesh (`Radius = 502`) to generate a thin, glowing, neon-blue atmospheric halo border tracing along the curve of the planet's exosphere edge.

#### 3. Camera Matrix & Motion Vectors

* **Position Vector Location:** The camera maintain its low position tracking at `Vector3(0.0, -4.0, -6.5)`.
* **Motion Vector:** The rocket coordinates are translated linearly down a downward path pointing towards the atmospheric boundary layer at an extreme velocity rate.
* **Vibration State:** Dropped instantly from its high-frequency state down to an absolute value of `0.0`, creating a brief, eerie silence frame loop.

---

### BEAT 2 [FRAME 3-61 TO 3-150]: THE FRICTION THRESHOLD (THE PLASMA BURN)

#### 1. Exact Screen Layout & Spatial Boundaries

* **Left Screen Combustion:** The left 50% space canvas begins to mutate. The dark exosphere view is swallowed by a creeping, superheated gaseous cloud structure that initiates at the top of the frame near the rocket nose cone and expands down across the screen.
* **Right Screen Thermal Reflection:** The right 50% rocket hull area shifts into an active thermal tracking mirror. The liquid chrome metal texture maps and bounces the fiery plasma graphics, displaying distorted trails of amber fire wrapping around its cylindrical frame coordinates.

#### 2. Material Shader & Texture Execution

* **Procedural Plasma Shader (GLSL Fragment):** Implement a 3D Simplex Noise function within the world background shader pipeline. The noise passes use an evolutionary parameter driven by the current uniform time variable to simulate turbulent, licking tongues of plasma fire cycling through deep bruised purple, crimson red (`#DC143C`), and brilliant hot orange (`#FF4500`).
* **Heat Shimmer Screen Space Distortion:** Inside the rocket hull's shader routine, introduce a coordinate phase displacement calculation into the screen-space UV coordinates:
```glsl
vec2 shimmerUV = incomingUV;
shimmerUV.x += sin(incomingUV.y * 25.0 + uGlobalTime * 35.0) * 0.007;
vec4 plasmaReflection = texture2D(tCubeEnv, shimmerUV);

```


This creates a high-intensity thermal rippling distortion, making the metallic structure of the craft look as if it is vibrating behind a wall of superheated air.

#### 3. Camera Matrix & Motion Vectors

* **Position Vector Tracking:** `Vector3(0.0, -4.0, -6.5)`.
* **Aerodynamic Turbulence Modeling:** Initiate a low-frequency, massive-amplitude camera rattling mechanism to simulate dense atmospheric compression forces:
```javascript
camera.position.x += (Math.random() - 0.5) * 0.08;
camera.position.y += (Math.random() - 0.5) * 0.08;

```



---

### BEAT 3 [FRAME 3-151 TO 3-240]: THE CLOUD PIERCER (THE GRAY-OUT PHASE)

#### 1. Exact Screen Layout & Spatial Boundaries

* **Global Visibility Collapse:** The 50/50 screen separation rule is obscured by a thick environmental system wrapper. The entire rendering canvas is engulfed by a heavy, dense cloud layer.
* **Rocket Silhouette Preservation:** The rocket hull on the right half of the screen is reduced to a dark, hazy metallic charcoal silhouette outline, barely slicing through the encompassing environmental fog volume.

#### 2. Material Shader & Texture Execution

* **Exponential WebGL Fog Array:** Enforce a strict global fog activation routine within the primary Three.js scene architecture:
```javascript
scene.background = new THREE.Color(0x3A3A3C);
scene.fog = new THREE.FogExp2(0x3A3A3C, 0.12);

```


* **Lightning Emission Flash Engine:** Program an execution clock that triggers random light bursts lasting exactly `0.04` seconds. These bursts alter the scene's ambient lighting parameters from gray to electric cyan (`#00FFFF`) or dark violet (`#8A2BE2`), illuminating complex volumetric storm cloud shapes around the craft.

#### 3. Camera Matrix & Motion Vectors

* **Position Vector Matrix:** `Vector3(0.0, -4.0, -6.5)`.
* **Maximized Structural Vibration:** The camera shake amplitude parameters hit their maximum structural tracking limits, generating violent linear displacements to simulate the stress of fighting heavy weather wind resistance.

---

### BEAT 4 [FRAME 3-241 TO 3-360]: THE REVEAL OF THE KNOWLEDGE MONOLITH

#### 1. Exact Screen Layout & Spatial Boundaries

* **The Atmospheric Breakthrough:** The dense fog variables drop down to near-zero values in a smooth linear interpolation sequence over 20 frames, clearing the sky window.
* **Top 20% Screen Frame Canvas:** Retained as a flat, lowering ceiling of dark charcoal storm clouds.
* **Lower 80% Screen Frame Canvas:** Opens into a wide-angle, flat view of an ink-black ocean reflecting a dim twilight sky gradient.
* **Center Left Frame Canvas Focus:** The target structure—The Knowledge Monolith—occupies a commanding position rising out of the water.

#### 2. Material Shader & Texture Execution

* **Ocean Surface Profiling:** The ocean is built as an infinite plane mesh running a custom water shader with low roughness (`0.08`) and high metalness properties, generating sharp mirror reflections of the dark environment.
* **The Monolith Obsidian Mesh:** The Monolith is rendered as a clean, sharp-edged vertical block structure styled in black obsidian. An emissive mapping layer cuts thin digital line paths across its faces, pulsing slowly in cyan and gold via a sine function uniform loop:

$$\text{Intensity} = \text{Base} \times (0.5 + 0.5 \cdot \sin(\text{uTime} \cdot 1.8))$$


* **Thruster Flame Particles:** A high-velocity conical particle engine ignites at the base of the rocket's thruster bells, projecting a bright blue and white exhaust stream downward toward the ocean plane.

#### 3. Camera Matrix & Motion Vectors

* **The Landing Deceleration Vector:** The violent camera rattling dropping down to `0.0`. The translation vector tracking controls transition from a rapid descent into a smooth, heavily dampened deceleration arc, easing the rocket toward a stable hover state as its landing gear systems deploy.

---

## SECTION 4: INDUSTRIAL SPECS FOR CODE ENGINES

Ensure the code engine strictly maps these coordinate systems without adding procedural stars, space junk, or standard debris outside of these defined vectors. The system must process the transition between states using a linear step framework to prevent asset pop-in during render execution.