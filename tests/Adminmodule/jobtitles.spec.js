import { test, expect } from "@playwright/test"
import { jobtitles } from "../../pageObjects/Adminmodule/jobtitles.po.js"
import { loginPage } from "../../pageObjects/login.po.js"
import jobtitlesdata from "../../testdata/jobtitledata.json"
let page;
let login;
let jobtitle;

test.describe("verify job titles page", async () => {

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage()
        login = new loginPage(page)
        jobtitle = new jobtitles(page)
        await login.launchurl()
        await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
        await login.loginsuccessMSG()
        await jobtitle.navigatetoadmin()
        await jobtitle.navigatetojob()
        await jobtitle.navigatetojobtitlebtn()
        await jobtitle.clickonaddbtn()
    })
    test("verify job titles page", async () => {

        await jobtitle.enterjobtitle(jobtitlesdata.jobtitle, jobtitlesdata.jobdescription)
        await jobtitle.verifyjobtitle()
    })
    test(" negitive test job titles", async () => {
        await jobtitle.savebtn.click()
        await jobtitle.verifyjobtitleerror()

    })
})