import { test, expect } from '@playwright/test';


import { loginPage } from '../../pageObjects/login.po.js';
import { jobtitles } from '../../pageObjects/Adminmodule/jobtitles.po.js';
import { employeeStatus } from '../../pageObjects/Adminmodule/employementstatus.po.js';

let page;
let login;
let jobtitle;
let employeeStatuss;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    login = new loginPage(page);
    jobtitle = new jobtitles(page);
    employeeStatuss = new employeeStatus(page)

    await login.launchurl()
    await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    await login.loginsuccessMSG()
    await jobtitle.navigatetoadmin()
    await jobtitle.navigatetojob()
    await employeeStatuss.navigatetoemployestatus()

})

test.describe("verifying employeestatus", async () => {
    test("add employeestatus", async () => {

        await employeeStatuss.addemployestatus("TestEmployeeStatus")
        await employeeStatuss.verifysuccessmsg()
    })

    test("negitive test add employeestatus", async () => {
        await employeeStatuss.savebtn.click()
        await employeeStatuss.errorrmsg()
    })
})