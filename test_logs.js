const { chromium } = require('playwright');
(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    page.on('console', msg => {
      console.log('CONSOLE LOG [' + msg.type() + ']:', msg.text());
    });
    page.on('pageerror', err => {
      console.log('PAGE ERROR:', err.stack || err.message);
    });
    await page.goto('http://localhost:5173/Tests/EarthLandingPOC/index.html');
    await new Promise(r => setTimeout(r, 3000));
    await browser.close();
  } catch (e) {
    console.error('Script failed:', e);
  }
})();
