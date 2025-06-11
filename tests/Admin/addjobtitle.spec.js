import { test, expect } from '@playwright/test';

import data from "../../testdata/jobtitledata.json"
test("verify login functionality and adding job title ", async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill(process.env.ORG_USERNAME)
    await page.locator('input[name="password"]').fill(process.env.ORG_PASSWORD)
    await page.locator('button[type="submit"]').click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
    //    await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
    await page.locator('(//li[@class="oxd-topbar-body-nav-tab --parent"])[1]').click()
    await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]').click()
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    let r = (Math.random() + 1).toString(36).substring(7);  //generate random 5 charecters
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(data.jobtitle+r)
    await page.locator('textarea[placeholder="Type description here"]').fill(data['job description']+r)
    await page.locator('textarea[placeholder="Add note"]').fill(data['add note'])
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
    await page.close()
})