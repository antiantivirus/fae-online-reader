// scripts/generate-pdf.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // Adjust URL to match your locally served Next.js app
  await page.goto('http://localhost:3000/briefing/fae5/pdf', { waitUntil: 'networkidle2' });

  // Optional: scroll to bottom to load lazy-loaded content
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // await page.evaluate(() => {
  //   getPagedNumbers();
  // });

  await page.pdf({
    path: 'Future Art Ecosystems 5 - R&D.pdf',
    format: 'A4',
    printBackground: true
  });

  await browser.close();
})();
