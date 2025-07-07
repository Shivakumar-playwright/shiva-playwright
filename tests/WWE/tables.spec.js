import { test, expect } from "@playwright/test"

test("tables example", async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/tables") 
   await page.locator('table[id="table1"]>tbody>tr:nth-child(4)>td:nth-child(6)>a:nth-child(1)').click()
   await expect(page).toHaveURL(/#edit/)

   const textval=await page.locator('table[id="table1"]>tbody>tr:nth-child(4)>td:nth-child(2)').textContent()
      expect(textval).toBe("Tim")
})
