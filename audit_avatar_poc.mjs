import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function auditAvatarPOC() {
  console.log('[AVATAR POC AUDIT] Starting Playwright browser inspection...');
  const browser = await chromium.launch({ headless: true });

  const videoDir = path.resolve(process.cwd(), 'scratch_audit_videos');
  if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir, { recursive: true });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: videoDir, size: { width: 1280, height: 720 } }
  });

  const page = await context.newPage();
  
  page.on('console', msg => console.log('  [BROWSER CONSOLE]', msg.text()));
  page.on('pageerror', err => console.error('  [BROWSER ERROR]', err));

  console.log('Navigating to http://localhost:5173/Tests/AvatarPOC/index.html...');
  await page.goto('http://localhost:5173/Tests/AvatarPOC/index.html');

  await page.waitForTimeout(3000);
  const screenshotFull = path.resolve(videoDir, 'avatar_poc_fullbody.png');
  await page.screenshot({ path: screenshotFull });
  console.log(`Saved screenshot: ${screenshotFull}`);

  // Test Portrait Camera Preset
  console.log('Clicking Portrait preset button...');
  await page.click('#cam-portrait-btn');
  await page.waitForTimeout(2000);
  const screenshotPortrait = path.resolve(videoDir, 'avatar_poc_portrait.png');
  await page.screenshot({ path: screenshotPortrait });
  console.log(`Saved screenshot: ${screenshotPortrait}`);

  // Test Smartwatch Camera Preset
  console.log('Clicking Smartwatch preset button...');
  await page.click('#cam-watch-btn');
  await page.waitForTimeout(2000);
  const screenshotWatch = path.resolve(videoDir, 'avatar_poc_smartwatch.png');
  await page.screenshot({ path: screenshotWatch });
  console.log(`Saved screenshot: ${screenshotWatch}`);

  // Test Shoes Camera Preset
  console.log('Clicking Shoes preset button...');
  await page.click('#cam-shoes-btn');
  await page.waitForTimeout(2000);
  const screenshotShoes = path.resolve(videoDir, 'avatar_poc_shoes.png');
  await page.screenshot({ path: screenshotShoes });
  console.log(`Saved screenshot: ${screenshotShoes}`);

  await browser.close();
  console.log('[AVATAR POC AUDIT] Finished successfully!');
}

auditAvatarPOC().catch(err => {
  console.error('[AVATAR POC AUDIT FAILED]:', err);
  process.exit(1);
});
