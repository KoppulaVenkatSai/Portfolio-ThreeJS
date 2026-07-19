import * as THREE from "three";

export const CONFIG = {
  timeScale: 2.0, // Scale factor: set to 2.0 or 3.0 to make everything faster
  
  assets: {
    rocketModel: new URL("../assets/NewRocket.glb", import.meta.url).href,
    monolithScene: new URL("../assets/MonolithScene.glb", import.meta.url).href
  },
  
  // Temporal Sequence Duration (in seconds)
  timeline: {
    warpPreFire: 0.0,
    warpStart: 3.0,
    warpMaxSpeed: 8.0,
    warpEnd: 10.0,
    
    // Silhouette and Grow phase (Pauses at 30.8s)
    snapBackStart: 16.8,
    snapBackDuration: 3.0,
    earthGrowStart: 16.8,
    earthGrowDuration: 7.0,
    
    // V3 sequence phases (slower, more majestic timings)
    flyToEarthStart: 25.8,
    flyToEarthDuration: 11.0,
    
    cameraChaseStart: 36.8,
    cameraChaseDuration: 9.2,
    
    whiteoutStart: 44.2,
    whiteoutDuration: 3.0,
    
    landingStart: 47.2,
    rocketDescentStart: 56.4,
    touchdownTime: 66.4,
    manualControlTime: 68.4
  },

  // Color mappings
  colors: {
    bgSpace: 0x020205,
    bgStorm: 0x0a0c10,
    bgLanding: 0x020305,
    
    // Storm lightning
    lightningColors: [0xaadfff, 0xd0aaff, 0x88ffff],
    
    // Batman theme colors
    oceanDarkWater: 0x010307,
    oceanSpecular: 0x0c1a2d,
    oceanLight: 0x081525,
    moonColor: 0xcee7ff
  },

  // Camera coordinates relative to the rocket / world
  camera: {
    initial: {
      pos: new THREE.Vector3(9.36, 0.30, -2.60),
      look: new THREE.Vector3(9.52, 0.08, 0.22)
    },
    warp: {
      pos: new THREE.Vector3(0.0, -4.0, -6.5),
      look: new THREE.Vector3(0.0, 10.0, 15.0)
    },
    orbit: {
      offsetPos: new THREE.Vector3(0.0, 4.5, 9.0),
      offsetLook: new THREE.Vector3(0.0, -8.0, -12.0)
    },
    reentry: {
      offsetPos: new THREE.Vector3(1.5, 3.0, 2.5),
      offsetLook: new THREE.Vector3(-1.0, -12.0, -8.0)
    },
    storm: {
      // Continuous downwards view looking towards the ground where the rocket faces
      offsetPos: new THREE.Vector3(0.0, 15.0, 0.01), // looking straight down
      offsetLook: new THREE.Vector3(0.0, -25.0, 0.0)
    },
    landing: {
      // Camera placement matching 1774209118934.png (looking up slightly/level, wide framing of monolith & rocket hover)
      // Elevated by +4.5 units to match monolith/rocket base elevations
      offsetPos: new THREE.Vector3(-0.74, 18.95, -36.13),
      offsetLook: new THREE.Vector3(-0.74, 17.04, -74.29)
    }
  },

  // Noise & vibration factors
  shake: {
    warp: { freq: 35.0, amp: 0.0 },
    reentry: { freq: 30.0, amp: 0.0 },
    storm: { freq: 45.0, amp: 0.0 },
    landing: { freq: 15.0, amp: 0.0 },
    touchdown: { duration: 1.5, maxAmp: 0.0 }
  }
};
