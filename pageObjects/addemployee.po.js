import { expect } from '@playwright/test'

exports.addemployeepage = class addemployeepage {

    constructor(page) {
        this.page = page;
        this.PIMmodule = page.locator("//span[text()='PIM']")
        this.addemployee = page.locator("//a[text()='Add Employee']")
        this.firstname = page.locator('input[name="firstName"]')
        this.lastname = page.locator('input[name="lastName"]')
        this.saveBtn = page.locator('button[type="submit"]')
        this.successMsg = page.locator('//h6[text()="Personal Details"]')
        this.firstnameError = page.locator('(//span[text()="Required"])[1]')
        this.lastnameError = page.locator('(//span[text()="Required"])[2]')
    }
    async navigateToPIM() {
        await this.PIMmodule.click()

    }
    async navigateToaddemployee() {

        await this.addemployee.click()
    }
    async addEmployee(firstname, lastname) {
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.saveBtn.click()
    }
    async verifySuccessMsg() {
        await this.successMsg.isVisible()

    }
    async verifyError() {
        await this.saveBtn.click()
        await expect(this.firstnameError).toBeVisible()
        await expect(this.lastnameError).toBeVisible()
    }
}