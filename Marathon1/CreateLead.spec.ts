import { expect, test } from "@playwright/test";


test(`Create Lead`,async ({page}) => {
        
    await page.goto(`https://login.salesforce.com/?locale=in`);
    await page.getByLabel("Username").fill("boopalakrishnan05@testleaf.com");
    await page.getByRole("textbox",{name:"Password"}).fill("Bala@123");
    await page.getByRole("button",{name:"Log In"}).click();
    await page.getByTitle("App Launcher",{exact:true}).click()
    await page.waitForTimeout(3000);
    await page.locator(`//button[text()='View All']`).click();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Marketing");
    await page.locator(`//mark[contains(text(),'Marketing')]`).click();
    await page.waitForTimeout(2000);
    await page.getByRole("link",{name:"Leads"}).click();
    await page.waitForTimeout(2000);
    await page.getByRole("button",{name:"New"}).click();
    await page.waitForTimeout(2000);
    await page.locator(`//button[@name="salutation"]`).click();
    await page.locator(`//span[contains(text(),'Mr.')]`).click();
    await page.getByPlaceholder("Last Name",{exact:true}).fill(`BalaLastName`);
    await page.getByRole("textbox",{name:"Company"}).fill("BalaCompany");
    await page.locator(`//button[@name="SaveEdit"]`).click();
    await expect(page.locator(`div.forceVisualMessageQueue`)).toBeVisible();
    const SuccessMessage =await page.locator(`div.forceVisualMessageQueue`).textContent();
    console.log(`the lead creation message is ${SuccessMessage }`);
    await page.getByRole("button",{name:"Show more actions"}).click();
    await page.locator(`//span[text()='Convert']`).click()
    await page.locator(`//span[contains(text(),' Create New Opportunity')]`).click();
    await page.getByRole("textbox",{name:"Opportunity Name *"}).clear();
    await page.getByRole("textbox",{name:"Opportunity Name *"}).fill(`BalaOpportunity`);
    await page.getByRole("button",{name:"Convert"}).click();
    const Covertmsg = page.locator(`//div[@class='title']/h2`);
    await expect(Covertmsg).toContainText("Your lead has been converted");
    await page.getByRole("button",{name:"Go to Leads"}).click();
    await page.getByRole("searchbox",{name:"Search this list..."}).fill('BalaLastName');
    page.getByRole("searchbox", { name: "Search this list..." }).press('Enter');
    const msg=await page.locator(`//h3[text()='Nothing to see here']`).innerText();
    console.log(msg);
    await page.getByRole("link",{name:"Opportunities"}).click();
    await page.getByRole("searchbox",{name:"Search this list..."}).fill('BalaOpportunity');
    page.getByRole("searchbox", { name: "Search this list..." }).press('Enter');
    const opportunity= page.getByRole('link', { name: 'BalaOpportunity' }).nth(1)
    await expect(page.locator(`th[role='rowheader']`).nth(0)).toContainText("BalaOpportunity");

})