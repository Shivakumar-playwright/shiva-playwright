import { test, expect } from "@playwright/test"

test("resreq api test", async ({ request }) => {

    const Adduser = await request.post("https://reqres.in/api/users", {
        headers: {

            "x-api-key": "reqres-free-v1",
        },
        data: {
            "name": "shiva",
            "job": "tester"
        },
    })

 console.log(await Adduser.json())

})