import { test, expect } from "@playwright/test";
let page;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})
test("check box example", async () => {

    const ischecked = await page.locator('#checkBoxOption1').isChecked()
    console.log(ischecked)
    if (!ischecked) {
        await page.locator('#checkBoxOption1').check()
    }
    await expect(page.locator('#checkBoxOption1')).toBeChecked()
    await page.waitForTimeout(3000)
    await page.locator('#checkBoxOption1').uncheck()
    await expect(page.locator('#checkBoxOption1')).not.toBeChecked()
    await page.waitForTimeout(3000)
})

test("check box example-2", async () => {

    const checkboxes = ["#checkBoxOption1", "#checkBoxOption2", "#checkBoxOption3"]

    for (let checkbox of checkboxes) {
        await page.locator(checkbox).check()
        await page.waitForTimeout(3000)
    }
})

test("check box example-3", async () => {

    const checkboxess = await page.$$('input[type="checkbox"]') //common locator

    for (let checkbox of checkboxess) {
        const ischecked = await checkbox.isChecked()
        if (!ischecked) {
            await checkbox.check()
        }
    }
})


