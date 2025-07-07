import { test, expect } from "@playwright/test"

test("tab example", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator('input[name="q"]').fill("iphone")
    await page.locator('input[name="q"]').press("Enter")

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//div[text()="Apple iPhone 16 (Teal, 256 GB)"]').click()
    ])
    await expect(newTab).toHaveURL(/apple-iphone-16-teal-256-gb/)
})
