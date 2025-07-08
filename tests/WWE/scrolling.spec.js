const { test, expect } = require('@playwright/test');

test('scroll to specific element', async ({ page }) => {

    await page.goto("https://www.imdb.com/chart/top/");

    await page.locator("//h3[text()='100. Reservoir Dogs']").scrollIntoViewIfNeeded()

    await page.locator("//h3[text()='100. Reservoir Dogs']").click()

    expect(await page.locator('h1 span').textContent()).toEqual('Reservoir Dogs')
    await page.goBack();
    await page.goForward()
    await page.waitForTimeout(5000)
    await page.reload()
});