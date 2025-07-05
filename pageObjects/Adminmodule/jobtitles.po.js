
import { expect } from "@playwright/test"

exports.jobtitles = class jobtitles {

    constructor(page) {
        this.page = page;
        this.adminbtn = page.locator("//span[text()='Admin']")
        this.jobbtn = page.locator("//span[text()='Job ']")
        this.jobtitlesbtn = page.locator("//a[text()='Job Titles']")
        this.addbtn = page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
        this.jobtitleInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.jobdesInput = page.locator('textarea[placeholder="Type description here"]')
        this.savebtn = page.locator('(//button[@data-v-10d463b7])[2]')
        this.successmsg = page.locator("//h6[text()='Job Titles']")
        this.jontitleerror = page.locator("//span[text()='Required']")
    }
    async navigatetoadmin() {
        await this.adminbtn.click()
    }
    async navigatetojob() {
        await this.jobbtn.click()
    }
    async navigatetojobtitlebtn() {
        await this.jobtitlesbtn.click()
    }
    async clickonaddbtn() {
        await this.addbtn.click()
    }
    async enterjobtitle(jobtitleInput, jobdesInput) {
        let r = (Math.random() + 1).toString(36).substring(7);
        await this.jobtitleInput.fill(jobtitleInput+r)
        await this.jobdesInput.fill(jobdesInput+r)
        await this.savebtn.click()
    }
    async verifyjobtitle() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
    }
    async verifyjobtitleerror() {
        await expect(this.jontitleerror).toBeVisible()
    }

}