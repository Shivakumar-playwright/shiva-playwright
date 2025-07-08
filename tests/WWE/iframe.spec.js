const {  test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

    test('Working with Iframes', async ({ page }) => {

        await page.goto('https://jqueryui.com/checkboxradio/')
         await page.frameLocator('iframe[src="/resources/demos/checkboxradio/default.html"]').locator('label[for="radio-2"]').check()

        //await checkbox.click()
        await page.waitForTimeout(5000)

    })


})