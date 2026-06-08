export const ENGINE_STATE = {
  currentScene: "INITIAL", // INITIAL, WARP, SNAP_BACK, REENTRY, STORM, LANDING, MANUAL
  globalTime: 0.0,
  warpProgress: 0.0,
  cameraShakeAmp: 0.0,
  globalFogDensity: 0.0,
  atmosphereFriction: 0.0,
  thrusterIntensity: 0.0,
  lightningIntensity: 0.0,
  monolithPulse: 1.0,
  
  // Transition hooks
  setScene(sceneName) {
    console.log(`[STATE] Scene transition: ${this.currentScene} -> ${sceneName}`);
    this.currentScene = sceneName;
  }
};
