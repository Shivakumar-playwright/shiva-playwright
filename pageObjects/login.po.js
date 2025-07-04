
import { expect } from '@playwright/test'

exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page
        this.usernameInput = page.locator('input[placeholder="Username"]')
        this.passwordInput = page.locator('input[placeholder="Password"]')
        this.loginButton = page.locator('button[type="submit"]')
        this.errorMessage = page.locator("//p[text()='Invalid credentials']")

    }
    async launchurl() {
        await this.page.goto('/web/index.php/auth/login')
    }
    async logingwithcreds(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()

    }
    async loginsuccessMSG() {
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
    async errormessage() {
        await expect(this.errorMessage).toBeVisible()
    }
}