import { test, expect } from '@playwright/test';

import { jobcatagories } from '../../pageObjects/Adminmodule/jobcatagories.po.js';
import { loginPage } from '../../pageObjects/login.po.js';
import { jobtitles } from '../../pageObjects/Adminmodule/jobtitles.po.js';


let page;
let login;
let jobtitle;
let jobcatagoriess;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    login = new loginPage(page);
    jobtitle = new jobtitles(page);

    jobcatagoriess = new jobcatagories(page)
    await login.launchurl()
    await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    await login.loginsuccessMSG()
    await jobtitle.navigatetoadmin()
    await jobtitle.navigatetojob()
    await jobcatagoriess.navigatetojobcatagories()

})

test.describe("verifying jobcatagoriess", async () => {
    test("add jobcatagoriess", async () => {

        await jobcatagoriess.addjobcatagories("testjobcatagories")
        await jobcatagoriess.verifysuccessmsg()
    })

    test("negitive test jobcatagoriess", async () => {
        await jobcatagoriess.savebtn.click()
        await jobcatagoriess.errorrmsg()
    })
})