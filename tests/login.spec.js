import { test, expect } from '@playwright/test';

test.describe("verify login functionality",async()=>{
test("verify login functionality", async ({ page }) => {
   await page.goto("https://www.saucedemo.com/v1/");
   await page.locator('input[type="text"]').fill("standard_user")
   await page.locator('input[type="password"]').fill("secret_sauce")
   await page.locator('input[type="submit"]').click()
   await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
   await expect(page.locator('div[class="product_label"]')).toBeVisible()
   await page.locator('(//button[@class="btn_primary btn_inventory"])[1]').click()
   await page.locator('span[class="fa-layers-counter shopping_cart_badge"]').click()
   await page.locator('a[class="btn_action checkout_button"]').click()
   await expect(page.locator('div[class="subheader"]')).toBeVisible()
   await page.locator('input[id="first-name"]').fill("Shiva")
   await page.locator('input[id="last-name"]').fill("kumar")
   await page.locator('input[id="postal-code"]').fill("515303")
   await page.locator('input[type="submit"]').click()
   await expect(page.locator('(//div[@class="summary_info_label"])[1]')).toBeVisible()
   await page.locator('a[class="btn_action cart_button"]').click()
   await expect(page.locator('h2[class="complete-header"]')).toBeVisible()
})

test("verify login functionality with valid username and invalid password", async ({ page }) => {
   await page.goto("https://www.saucedemo.com/v1/");
   await page.locator('input[type="text"]').fill("standard_user")
   await page.locator('input[type="password"]').fill("secret_sauceeee")
   await page.locator('input[type="submit"]').click()
   //    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
   await expect(page.locator('button[class="error-button"]')).toBeVisible()
})
test.only("verify login functionality with invalid username and valid password", async ({ page }) => {
   await page.goto("https://www.saucedemo.com/v1/");
   await page.locator('input[type="text"]').fill("standard_userrr")
   await page.locator('input[type="password"]').fill("secret_sauce")
   await page.locator('input[type="submit"]').click()
   //    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
   await expect(page.locator('button[class="error-button"]')).toBeVisible()
})
test("verify login functionality with invalid username and invalid password", async ({ page }) => {
   await page.goto("https://www.saucedemo.com/v1/");
   await page.locator('input[type="text"]').fill("standard_userrr")
   await page.locator('input[type="password"]').fill("secret_sauceee")
   await page.locator('input[type="submit"]').click()
   //    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")
   await expect(page.locator('button[class="error-button"]')).toBeVisible()
})


})
