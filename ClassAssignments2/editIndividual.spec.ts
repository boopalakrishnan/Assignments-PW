import { expect, test } from "@playwright/test";
// Test Steps: 
// 1. Login to https://login.salesforce.com 
// 2. Click on the toggle menu button from the left corner 
// 3. Click View All and click Individuals from App Launcher  
// 4. Click on the Individuals tab  
// 5. Search the Individuals last name 
// 6. Click on the Dropdown icon and Select Edit 
// 7. Select Salutation as 'Mr' 
// 8. Now enter the first name 
// 9. Click on Save and Verify the first name 

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
    await page.getByRole("searchbox",{name:"Search this list..."}).fill('BalaLast');
     page.getByRole("searchbox", { name: "Search this list..." }).press('Enter');
    await page.getByRole('link', { name: 'BalaLast' }).nth(1).click();
    await page.waitForTimeout(2000);
    await page.getByRole(`button`,{name:`Edit`,exact: true }).click();
    await page.getByRole(`combobox`,{name:`Salutation`,exact: true }).click();
    await page.locator(`//a[contains(text(),'Mr.')]`).click();
    await page.getByRole("textbox",{name:"First Name"}).fill("Balafirst");
    await page.getByRole(`button`,{name:`Save`,exact: true }).click();
    await expect(page.locator(`div.forceVisualMessageQueue+div`)).toBeVisible();
    const successmsg= await page.locator(`div.forceVisualMessageQueue+div`).innerText();
    console.log(`Invidual creation Message : `+successmsg);

})