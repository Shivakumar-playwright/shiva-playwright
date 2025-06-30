import { test, expect } from "@playwright/test"
let page;
test.beforeEach(async({browser}) => {
    page = await browser.newPage();
    console.log("before each test case")
})
test.describe("some group1 test cases", async () => {
    test("test case 1", async () => {
        console.log("test 1")
    })
    test("test case 2", async () => {
        console.log("test 2")
    })
    test("test case 3", async () => {
        console.log("test 3")
    })
})

test.describe("some group2 test cases", async () => {
    test("test case 4", async () => {
        console.log("test 4")
    })
    test("test case 5", async () => {
        console.log("test 5")
    })
    test("test case 6", async () => {
        console.log("test 6")
    })
})
