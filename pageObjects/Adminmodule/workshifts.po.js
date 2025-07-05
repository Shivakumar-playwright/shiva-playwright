import { expect } from "@playwright/test"

exports.workshifts = class workshifts {

    constructor(page) {
        this.page = page;
        this.workshifts = page.locator("//a[text()='Work Shifts']")
        this.addbtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.shiftnameInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.savebtn = page.locator('(//button[@data-v-10d463b7])[2]')
        this.successMsg = page.locator("//h6[text()='Work Shifts']")
        this.nameInputerror = page.locator('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')

    }
    async navigatetoworkshifts() {
        await this.workshifts.click()
        await this.addbtn.click()
    }
    async addshift(name) {
        let r = (Math.random() + 1).toString(36).substring(7);
        await this.shiftnameInput.fill(name + r)
        await this.savebtn.click()
    }
    async verifysuccessmsg() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift")
    }
    async errorrmsg() {
        await expect(this.nameInputerror).toBeVisible()
    }
}