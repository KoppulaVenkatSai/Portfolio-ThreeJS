import * as THREE from "three";

export const CONFIG = {
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
    
    // New sequence phases
    snapBackStart: 16.8, // Earth silhouette reveal start
    snapBackDuration: 3.0,
    
    earthGrowStart: 16.8, // Earth grow and light sweep
    earthGrowDuration: 7.0,
    
    rocketFlyPastStart: 28.8, // Rocket fly past (shifted by +5.0s for Earth illumination)
    rocketFlyPastDuration: 2.0,
    
    reentryStart: 30.8, // Reentry burn (shifted by +5.0s)
    reentryDuration: 4.0,
    
    // Beat 3: Cloud Piercer
    stormStart: 34.8, // Shifted by +5.0s
    stormDuration: 6.0,
    
    // Beat 4: Monolith reveal & landing
    landingStart: 40.8, // Shifted by +5.0s
    touchdownTime: 48.6, // Shifted by +5.0s
    manualControlTime: 49.6 // Shifted by +5.0s
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
      pos: new THREE.Vector3(0.0, -4.0, -6.5),
      look: new THREE.Vector3(0.0, 10.0, 15.0)
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
      offsetPos: new THREE.Vector3(0.0, 8.0, 15.0),
      offsetLook: new THREE.Vector3(0.0, 2.5, -45.0)
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
