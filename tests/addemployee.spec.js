import { test, expect } from '@playwright/test';
import employeedata from "../testdata/addemployeedata.json"

test("verify login functionality and adding employee data", async ({ page }) => {
    await page.goto("/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill(process.env.ORG_USERNAME)
    await page.locator('input[name="password"]').fill(process.env.ORG_PASSWORD)
    await page.locator('button[type="submit"]').click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]').click()
    await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
    await page.locator('input[placeholder="First Name"]').fill(employeedata.firstname)
    await page.locator('input[placeholder="Last Name"]').fill(employeedata.lastname)
    await page.locator('button[type="submit"]').click()
    await expect(page.locator('(//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"])[1]')).toBeVisible()
})