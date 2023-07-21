const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://www.example.com');

  // Take a screenshot of the page
  await page.screenshot({ path: 'example.png' });

  // Close the browser
  await browser.close();
})();
