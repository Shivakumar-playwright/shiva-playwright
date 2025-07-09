import { test, expect } from '@playwright/test';

import { paygrades } from '../../pageObjects/Adminmodule/paygrades.po.js';
import { loginPage } from '../../pageObjects/login.po.js';
import { jobtitles } from '../../pageObjects/Adminmodule/jobtitles.po.js';
let page;
let login;
let jobtitle;
let paygrade;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    login = new loginPage(page);
    jobtitle = new jobtitles(page);
    paygrade = new paygrades(page);

    await login.launchurl()
    await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    await login.loginsuccessMSG()
    await jobtitle.navigatetoadmin()
    await jobtitle.navigatetojob()
    await paygrade.navigatetopaygrade()


})

test.describe("verifying paygrades",{tag:"@sanity"}, async () => {
    test("add paygrades", async () => {
        await paygrade.addpaygrade("shhdk")
        await paygrade.verifysuccessmsg()
    })

    test("negitive test add paygrades", async () => {
        await paygrade.savebtn.click()
        await paygrade.errormsg()
    })
})