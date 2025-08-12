import { expect, test } from "@playwright/test";

// Test Steps:
// 1. Login to https://login.salesforce.com
// 2. Click on the toggle menu button from the left corner
// 3. Click View All and click Individuals from App Launcher
// 4. Click on the Dropdown icon in the Individuals tab
// 5. Click on New Individual
// 6. Enter the Last Name
// 7. Click save and verify Individuals Name

test(`Create new Individual`,async ({page}) => {
        
    await page.goto(`https://login.salesforce.com/?locale=in`);
    await page.getByLabel("Username").fill("boopalakrishnan05@testleaf.com");
    await page.getByRole("textbox",{name:"Password"}).fill("Bala@123");
    await page.getByRole("button",{name:"Log In"}).click();
    await page.getByTitle("App Launcher",{exact:true}).click()
    await page.waitForTimeout(3000);
    await page.locator(`//button[text()='View All']`).click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Individuals");
    await page.locator(`//mark[text()='Individuals']`).click();
    await page.waitForTimeout(3000);
    await page.getByRole(`button`,{name:`New`}).click();
    await page.getByPlaceholder("Last Name",{exact:true}).fill("BalaLast");
    await page.getByRole(`button`,{name:`Save`,exact: true }).click();
    await expect(page.locator(`div.forceVisualMessageQueue+div`)).toBeVisible();
    const successmsg= await page.locator(`div.forceVisualMessageQueue+div`).innerText();
    console.log(`Invidual creation Message : `+successmsg);
    

})