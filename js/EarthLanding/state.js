export const ENGINE_STATE = {
  currentScene: "INITIAL", // INITIAL, WARP, SNAP_BACK, REENTRY, STORM, LANDING, MANUAL
  globalTime: 0.0,
  timelineTime: 0.0,
  warpProgress: 0.0,
  cameraShakeAmp: 0.0,
  globalFogDensity: 0.0,
  atmosphereFriction: 0.0,
  thrusterIntensity: 0.0,
  lightningIntensity: 0.0,
  monolithPulse: 1.0,
  starsOpacity: 1.0,
  timeScale: 1.0,
  ambientIntensity: 0.6,
  
  // V3 specific states
  rocketArcProgress: 0.0,
  cameraArcProgress: 0.0,
  whiteoutOpacity: 0.0,
  cameraDescentProgress: 0.0,
  landingFadeInProgress: 0.0,
  monolithRiseProgress: 0.0,
  
  // Transition hooks
  setScene(sceneName) {
    console.log(`[STATE] Scene transition: ${this.currentScene} -> ${sceneName}`);
    this.currentScene = sceneName;
  }
};
