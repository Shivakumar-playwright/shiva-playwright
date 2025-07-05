import { expect } from "@playwright/test"

exports.jobcatagories = class jobcatagories {

    constructor(page) {
        this.page = page;
        this.jobcatagories = page.locator("//a[text()='Job Categories']")
        this.addbtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.nameInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.savebtn = page.locator('(//button[@data-v-10d463b7])[2]')
        this.successMsg = page.locator("//h6[text()='Job Categories']")
        this.nameInputerror = page.locator('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')

    }
    async navigatetojobcatagories() {
        await this.jobcatagories.click()
        await this.addbtn.click()
    }
    async addjobcatagories(name) {
        let r = (Math.random() + 1).toString(36).substring(7);
        await this.nameInput.fill(name + r)
        await this.savebtn.click()
    }
    async verifysuccessmsg() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory")
    }
    async errorrmsg() {
        await expect(this.nameInputerror).toBeVisible()
    }
}