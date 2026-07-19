import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TIME_SCALE = 4.0; // Set this to match CONFIG.timeScale in config.js

(async () => {
  console.log("Starting Playwright cinematic V3 test...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Print all console logs
  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] [${msg.type().toUpperCase()}]:`, msg.text());
  });

  // Print all page errors
  page.on('pageerror', err => {
    console.error('PAGE ERROR:', err.stack || err.message);
  });

  // Print all failed requests
  page.on('requestfailed', request => {
    console.error(`REQUEST FAILED: ${request.url()} - ${request.failure() ? request.failure().errorText : 'unknown error'}`);
  });

  // Print non-2xx responses
  page.on('response', response => {
    if (response.status() >= 400) {
      console.error(`HTTP ERROR ${response.status()}: ${response.url()}`);
    }
  });

  try {
    // 1. Navigate to the local server
    await page.goto('http://localhost:5174/Tests/EarthLandingPOCV3/index.html');
    console.log("Navigated to page. Waiting for assets loader...");

    // Wait for the loader to hide (button becomes enabled)
    const button = page.locator('#ignition-trigger');
    await button.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check if it's disabled
    const isDisabled = await button.isDisabled();
    if (isDisabled) {
      console.log("Button is disabled. Waiting for loading manager to finish...");
      await page.waitForFunction(() => {
        const btn = document.getElementById('ignition-trigger');
        return btn && !btn.disabled;
      }, { timeout: 15000 });
    }
    
    console.log("Initialization completed! Clicking INITIATE DESCENT button...");
    await button.click();

    // 2. Warp phase screenshot (at 6.0 seconds)
    await page.waitForTimeout(6000 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_warp.png') });
    console.log("Captured warp phase screenshot.");

    // 3. Snap back / Earth silhouette phase screenshot (at 15.0 seconds)
    await page.waitForTimeout(9000 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_snapback.png') });
    console.log("Captured snapback silhouette phase screenshot.");

    // 3b. Earth grow / light sweep phase screenshot (at 19.0 seconds)
    await page.waitForTimeout(4000 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_reentry.png') });
    console.log("Captured Earth grow sunrise sweep phase screenshot.");

    // 4. Earth illumination phase screenshot (at 25.0 seconds)
    await page.waitForTimeout(6000 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_illumination.png') });
    console.log("Captured Earth illumination phase screenshot.");

    // Wait until pause point (30.8s) has been reached, then resume the timeline
    await page.waitForTimeout(6000 / TIME_SCALE); // reaches 31.0s total elapsed time (after 30.8s pause)
    console.log("Resuming cinematic timeline past the pause point...");
    await page.evaluate(() => {
      if (window.cinematicTimeline) {
        window.cinematicTimeline.resume();
      } else {
        console.error("cinematicTimeline not found on window object!");
      }
    });

    // 5. Rocket Fly-to-Earth Arc (at 33.8s total elapsed time, 3.0s after resume)
    await page.waitForTimeout(3000 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_reentry_burn.png') });
    console.log("Captured rocket fly-to-Earth arc screenshot.");
 
    // 5b. Camera Chase Plunge (at 39.8s total elapsed time, 9.0s after resume)
    await page.waitForTimeout(6000 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_chase.png') });
    console.log("Captured camera chase plunge screenshot.");
 
    // 6. Cloudbreak Whiteout (at 44.3s total elapsed time, 13.5s after resume)
    await page.waitForTimeout(4500 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_storm.png') });
    console.log("Captured cloudbreak whiteout screenshot.");
 
    // 7. Paused Ocean Descent (at 46.8s total elapsed time, 16.0s after resume)
    await page.waitForTimeout(2500 / TIME_SCALE);
    await page.screenshot({ path: path.join(__dirname, 'phase_landing.png') });
    console.log("Captured paused ocean scene screenshot.");
 
    console.log("Cinematic sequence complete!");
  } catch (error) {
    console.error("Test execution failed:", error);
  } finally {
    await browser.close();
    console.log("Browser closed.");
  }
})();
