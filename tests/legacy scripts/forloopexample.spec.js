import { test, expect } from '@playwright/test'

test('checking some check boxes using for loop', async ({ page }) => {
    await page.goto("/web/index.php/auth/login")
    await page.locator('input[name="username"]').fill(process.env.ORG_USERNAME)
    await page.locator('input[name="password"]').fill(process.env.ORG_PASSWORD)
    await page.locator('button[type="submit"]').click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[2]').click()

    const arr = ['input[value="1"]', 'input[value="3"]', 'input[value="5"]']


    for (let i = 0; i < arr.length; i++) {
        await page.locator(arr[i]).check({ force: true })
    }
})