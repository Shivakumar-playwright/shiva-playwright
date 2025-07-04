import { test } from '@playwright/test';
import { loginPage } from "../pageObjects/login.po.js";
import logindata from "../testData/logindata.json" assert { type: "json" };
let page;
let login;
test.describe("verify login functionality", async () => {
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    login = new loginPage(page)
    await login.launchurl()
  })
  test("verify valid creds", async () => {
    await login.logingwithcreds(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    await login.loginsuccessMSG()
  })
  test("verify invalid username and valid password", async () => {
    await login.logingwithcreds(logindata.wrongusername, logindata.password)
    await login.errormessage()
  })
  test("verify valid username and invalid password", async () => {
    await login.logingwithcreds(logindata.username, logindata.wrongpassword)
    await login.errormessage()
  })
  test("verify invalid username and invalid password", async () => {
    await login.logingwithcreds(logindata.wrongusername, logindata.wrongpassword)
    await login.errormessage()
  })
})