import { test, expect } from '@playwright/test';

const employeedata = {
    employee1: { firstname: "shiva", middlename: "kumar", lastname: "T" },
    employee2: { firstname: "babu", middlename: "prasad", lastname: "R" },
    employee3: { firstname: "tulasi", middlename: "ram", lastname: "A" },
    employee4: { firstname: "raju", middlename: "sir", lastname: "t" },
    employee5: { firstname: "maruthi", middlename: "varaprasad", lastname: "N" },
};
for (let key in employeedata) {

    test(`Add employee: ${key}`, async ({ page }) => {
        await page.goto("/web/index.php/auth/login")
        await page.locator('input[placeholder="Username"]').fill(process.env.ORG_USERNAME)
        await page.locator('input[name="password"]').fill(process.env.ORG_PASSWORD)
        await page.locator('button[type="submit"]').click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]').click()
        await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
        await page.locator('input[placeholder="First Name"]').fill(employeedata[key].firstname)
        await page.locator('input[placeholder="Middle Name"]').fill(employeedata[key].middlename)
        await page.locator('input[placeholder="Last Name"]').fill(employeedata[key].lastname)
        await page.locator('button[type="submit"]').click()
        await expect(page.locator('(//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"])[1]')).toBeVisible()
    })
}

