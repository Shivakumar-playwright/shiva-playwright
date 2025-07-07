import { test, expect } from "@playwright/test";
let page;
test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
})
test("check box example", async () => {
    await page.locator("#checkBoxOption1").check()
    await page.waitForTimeout(5000)
    await page.locator("#checkBoxOption1").uncheck()

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


test("link example",async({page})=>{
    await page.goto("https://trello.com/")
    await page.locator('a[class="Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr"]').click()
      await page.locator('#username-uid1').fill("shiva@gmail.com")
})


