import { test, expect } from '@playwright/test';

test('Verify clicking on Hidden element ', async ({ page }) => {

    await page.goto("https://playwright.dev/")

    await page.locator('a[href="/dotnet/"]').click({ force: true })


    await expect(page.locator('a[href="/java/"]')).toBeAttached()


})