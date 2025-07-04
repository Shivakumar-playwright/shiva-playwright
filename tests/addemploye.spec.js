import { test } from '@playwright/test';
import { loginPage } from "../pageObjects/login.po.js";
import { addemployeepage } from "../pageObjects/addemployee.po.js";
import employeedata from "../testdata/addemployeedata.json";

test.describe("verify login functionality", async () => {

    let page;
    let login;
    let addemployee;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        login = new loginPage(page);
        addemployee = new addemployeepage(page);
        await login.launchurl();
        await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD);
        await login.loginsuccessMSG();
        await addemployee.navigateToPIM();
        await addemployee.navigateToaddemployee();
    })

    test("verify add employee with valid data", async () => {
        await addemployee.addEmployee(employeedata.firstname, employeedata.lastname);
        await addemployee.verifySuccessMsg();
    })

    test("verify add employee with invalid data", async () => {
        await addemployee.addEmployee("", "");
        await addemployee.verifyError();
    })

})