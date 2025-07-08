
const { test, expect } = require('@playwright/test');
test('Working with Shadow DOM', async ({ page }) => {

    await page.goto('http://watir.com/examples/shadow_dom.html')

    await page.locator('input[type="text"]').fill("shiva")
    await page.waitForTimeout(5000)

})

test('Working with Shadow DOM2', async ({ page }) => {

    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('maths')

    await page.keyboard.press('Enter')

     await expect(page).toHaveURL("https://books-pwakit.appspot.com/explore?q=maths")

     await page.waitForTimeout(5000)

     //How to refresh the Page 

    //   await page.reload()

      //or 

     //await page.keyboard.press('F5')

    //  await page.goBack()

    //  await page.goForward()

})