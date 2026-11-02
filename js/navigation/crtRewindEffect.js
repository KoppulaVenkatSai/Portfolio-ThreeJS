/**
 * CRT Rewind Effect
 * Full-screen visual overlay that simulates high-speed 90s CRT / VHS tape rewind:
 *   - Rolling horizontal scanlines with sync-slip jitter
 *   - Multi-tier VHS tracking distortion bars sweeping up & down
 *   - Chromatic aberration shudder (RGB split pulse)
 *   - Heavy phosphor flicker and screen displacement
 *   - Barrel vignette curvature
 *
 * Note: Center text is omitted per design (status chip handles status).
 */

import gsap from 'gsap';

let overlayEl = null;
let scanLinesEl = null;
let trackingBarEl = null;
let trackingBar2El = null;
let vignetteEl = null;
let chromaticEl = null;
let noiseGrainEl = null;
let isInitialized = false;

function buildOverlay() {
  if (isInitialized) return;
  isInitialized = true;

  // Main container
  overlayEl = document.createElement('div');
  overlayEl.id = 'crt-rewind-overlay';
  overlayEl.className = 'crt-rewind-overlay crt-hidden';

  // Noise grain layer
  noiseGrainEl = document.createElement('div');
  noiseGrainEl.className = 'crt-noise-grain';
  overlayEl.appendChild(noiseGrainEl);

  // Scan lines with jitter
  scanLinesEl = document.createElement('div');
  scanLinesEl.className = 'crt-scanlines';
  overlayEl.appendChild(scanLinesEl);

  // Chromatic aberration layer
  chromaticEl = document.createElement('div');
  chromaticEl.className = 'crt-chromatic';
  overlayEl.appendChild(chromaticEl);

  // Primary VHS tracking bar (rolls upward like fast rewind)
  trackingBarEl = document.createElement('div');
  trackingBarEl.className = 'crt-tracking-bar bar-primary';
  overlayEl.appendChild(trackingBarEl);

  // Secondary tracking bar (fast jitter band)
  trackingBar2El = document.createElement('div');
  trackingBar2El.className = 'crt-tracking-bar bar-secondary';
  overlayEl.appendChild(trackingBar2El);

  // Vignette / barrel edges
  vignetteEl = document.createElement('div');
  vignetteEl.className = 'crt-vignette';
  overlayEl.appendChild(vignetteEl);

  document.body.appendChild(overlayEl);
}

/**
 * Fire the authentic CRT rewind effect for a given duration.
 * @param {number} duration - How long the effect plays (seconds). Default 0.9s
 * @returns {gsap.core.Timeline} - The GSAP timeline controlling the effect
 */
export function playCRTRewindEffect(duration = 0.9) {
  buildOverlay();

  const tl = gsap.timeline();

  // 1. Instantly activate overlay
  tl.add(() => {
    overlayEl.classList.remove('crt-hidden');
    overlayEl.classList.add('crt-active');
  }, 0);

  // 2. High-speed initial burst flash
  tl.fromTo(overlayEl,
    { opacity: 0 },
    { opacity: 1, duration: 0.05, ease: 'power3.in' },
    0
  );

  // 3. Fast rewind tracking bars sweeping upwards (reverse VHS motion)
  tl.fromTo(trackingBarEl,
    { top: '105%', transform: 'scaleY(1.2) skewX(2deg)' },
    {
      top: '-20%',
      transform: 'scaleY(0.8) skewX(-2deg)',
      duration: duration * 0.42,
      ease: 'none',
      repeat: 1
    },
    0.02
  );

  tl.fromTo(trackingBar2El,
    { top: '-15%', height: '14%' },
    {
      top: '110%',
      height: '6%',
      duration: duration * 0.35,
      ease: 'power1.in',
      repeat: 2
    },
    0.08
  );

  // 4. Chromatic aberration sync-slip pulse
  tl.fromTo(chromaticEl,
    { opacity: 0, transform: 'translateX(0px)' },
    {
      opacity: 0.95,
      transform: 'translateX(4px)',
      duration: 0.06,
      ease: 'rough({strength: 2, points: 10, template: power2.inOut, randomize: true})',
      yoyo: true,
      repeat: 4
    },
    0.04
  );

  tl.to(chromaticEl, {
    opacity: 0,
    transform: 'translateX(0px)',
    duration: 0.2,
    ease: 'power2.out'
  }, duration - 0.2);

  // 5. Fade out overlay cleanly
  tl.to(overlayEl, {
    opacity: 0,
    duration: 0.2,
    ease: 'power2.out'
  }, duration - 0.2);

  // 6. Cleanup
  tl.add(() => {
    overlayEl.classList.remove('crt-active');
    overlayEl.classList.add('crt-hidden');
    overlayEl.style.opacity = '';
  }, duration);

  return tl;
}
