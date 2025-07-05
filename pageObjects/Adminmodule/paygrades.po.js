import { expect } from "@playwright/test"

exports.paygrades = class paygrades {

    constructor(page) {
        this.page = page;
        this.paygradebtn = page.locator("//a[text()='Pay Grades']")
        this.addbtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.nameInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.savebtn = page.locator('(//button[@data-v-10d463b7])[2]')
        this.successMsg = page.locator("//h6[text()='Edit Pay Grade']")
        this.nameInputerror = page.locator('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')

    }
    async navigatetopaygrade() {
        await this.paygradebtn.click()
        await this.addbtn.click()
    }
    async addpaygrade(name) {
        let r = (Math.random() + 1).toString(36).substring(7);
        await this.nameInput.fill(name + r)
        await this.savebtn.click()
    }
    async verifysuccessmsg() {
        await expect(this.successMsg).toBeVisible()
    }
    async errormsg() {
        await expect(this.nameInputerror).toBeVisible()
    }
}