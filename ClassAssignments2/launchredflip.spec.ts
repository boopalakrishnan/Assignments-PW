import {test,chromium,firefox } from "@playwright/test";

test(`launch Redbus bus with chrome`, async () => {
const browserInstance = await chromium.launch({ headless: false,
channel: "chrome" });
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();
await page.goto('https://www.redbus.in/');
console.log(await page.title());
console.log(page.url()); 
});
test(`launch flipkart bus with Firefox`, async () => {
const browserInstance = await firefox.launch({ headless: false,
channel: "firefox" });
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();
await page.goto('https://www.flipkart.com/');
console.log(await page.title());
console.log(page.url()); 
});