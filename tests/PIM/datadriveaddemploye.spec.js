import { test, expect } from '@playwright/test';

const employeedata = {
    employee1: { firstname: "shiva", lastname: "kumar" },
    employee2: { firstname: "babu", lastname: "r" },
    employee3: { firstname: "tulasi", lastname: "ram" },
    employee4: { firstname: "raju", lastname: "t" },
    employee5: { firstname: "maruthi", lastname: "n" },
};
for (let key in employeedata) {

    test(`Add employee: ${employeedata[key].firstname} ${employeedata[key].lastname}`, async ({ page }) => {
        await page.goto("/web/index.php/auth/login")
        await page.locator('input[placeholder="Username"]').fill(process.env.ORG_USERNAME)
        await page.locator('input[name="password"]').fill(process.env.ORG_PASSWORD)
        await page.locator('button[type="submit"]').click()
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]').click()
        await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
        await page.locator('input[placeholder="First Name"]').fill(employeedata[key].firstname)
        await page.locator('input[placeholder="Last Name"]').fill(employeedata[key].lastname)
        await page.locator('button[type="submit"]').click()
        await expect(page.locator('(//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"])[1]')).toBeVisible()
    })
}

