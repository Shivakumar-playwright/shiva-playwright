import { expect } from "@playwright/test"

exports.employeeStatus = class employeeStatus {

    constructor(page) {
        this.page = page;
        this.employeestatusbtn = page.locator("//a[text()='Employment Status']")
        this.addbtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.nameInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.savebtn = page.locator('(//button[@data-v-10d463b7])[2]')
        this.successMsg = page.locator("//h6[text()='Employment Status']")
        this.nameInputerror = page.locator('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')

    }
    async navigatetoemployestatus() {
        await this.employeestatusbtn.click()
        await this.addbtn.click()
    }
    async addemployestatus(name) {
        let r = (Math.random() + 1).toString(36).substring(7);
        await this.nameInput.fill(name+r)
        await this.savebtn.click()
    }
    async verifysuccessmsg() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus")
    }
    async errorrmsg() {
        await expect(this.nameInputerror).toBeVisible()
    }
}