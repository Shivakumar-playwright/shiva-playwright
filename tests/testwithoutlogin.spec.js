import { test, expect } from "@playwright/test"

test.describe("using setup", async () => {

    test("add employee test case using session storage", async ({ page }) => {

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
        let r = (Math.random() + 1).toString(36).substring(7);
        await page.locator('input[placeholder="First Name"]').fill("shiva" + r);
        await page.locator('input[placeholder="Last Name"]').fill("kumar" + r);
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('(//h6[@class="oxd-text oxd-text--h6 orangehrm-main-title"])[1]')).toBeVisible();


    });

    test("add job title using session storage", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle");
        let r = (Math.random() + 1).toString(36).substring(7);
        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill("SDET" + r);
        await page.locator('textarea[placeholder="Type description here"]').fill("test engineer" + r);
        await page.locator('textarea[placeholder="Add note"]').fill("QA engineer");
        await page.locator('button[type="submit"]').click();
        await expect(page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible();
    });

})