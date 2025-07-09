import { test, expect } from '@playwright/test';
import { workshifts } from '../../pageObjects/Adminmodule/workshifts.po.js';
import { loginPage } from '../../pageObjects/login.po.js';
import { jobtitles } from '../../pageObjects/Adminmodule/jobtitles.po.js';


let page;
let login;
let jobtitle;
let workshift;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    login = new loginPage(page);
    jobtitle = new jobtitles(page);
    workshift = new workshifts(page)

    await login.launchurl()
    await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    await login.loginsuccessMSG()
    await jobtitle.navigatetoadmin()
    await jobtitle.navigatetojob()
    await workshift.navigatetoworkshifts()
})

test.describe("verifying workshifts",{tag:"@sanity"}, async () => {
    test("add workshifts", async () => {

        await workshift.addshift("TestShift")
        await workshift.verifysuccessmsg()
    })

    test("negitive test jobcatagoriess", async () => {
        await workshift.savebtn.click()
        await workshift.errorrmsg()
    })
})