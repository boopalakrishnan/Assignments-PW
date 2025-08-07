import { test } from "@playwright/test";

// Assignment: 1 Create Lead 
// 1. Login to https://login.salesforce.com 
// 2. Click on toggle menu button from the left corner 
// 3. Click view All and click Sales from App Launcher 
// 4. Click on Leads tab  
// 5. Click on New button 
// 6. Select Salutation dropdown 
// 7. Enter the Last Name 
// 8. Enter the Company Name  
// 9. Click Save and Verify Leads name created 

test("Locators",async ({ page })=>{
    await page.goto(`https://login.salesforce.com/?locale=in`);
    await page.locator(`#username`).fill('ravindran.ramdas@testleaf.com');
    await page.locator('#password').fill('RaviSalesTest#1432');
    page.locator('#Login').click();
    await page.waitForTimeout(3000);
    await page.locator(`//span[text()='App Launcher']`).click();
    await page.locator(`//button[text()='View All']`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//p[text()='Sales']`).click();
    await page.locator(`//a[@title='Leads']`).click();
    await page.locator(`//a[@title='New']`).click();
    await page.locator(`//button[@name='salutation']`).click();
    await page.locator(`//span[@title='Mr.']`).click();
    await page.locator(`//input[@name='lastName']`).fill(`TestLastnamePW`);
    await page.locator(`//input[@name='Company']`).fill(`CompanyPW`);
    await page.locator(`//button[@name='SaveEdit']`).click();

});