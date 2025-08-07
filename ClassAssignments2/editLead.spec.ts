import { test } from "@playwright/test";


test(`Learn to Handle DropDown`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();
     await page.locator(`//a[contains(text(),'CRM')]`).click();
     await page.getByRole('link',{ name:'Leads'}).click();
     await page.getByRole('link',{ name:'Create Lead'}).click();
     await page.locator(`//input[@id='createLeadForm_companyName']`).fill('CompanyPlayWright');
     await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`FirstPlaywright`);
     await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`LastPlaywright`);
     await page.getByRole('button',{ name:'Create Lead'}).click();
     await page.getByRole('link',{ name:'Edit'}).click();//updateLeadForm_companyName
      await page.locator(`//input[@id='updateLeadForm_companyName']`).fill('Company12345');
      await page.getByRole('button',{ name:'Update'}).click();
})