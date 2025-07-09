import { test, expect } from "@playwright/test"

test("get api test", async ({ request }) => {

    const getAllUsers = await request.get("https://reqres.in/api/users?page=2", {
        headers: {
            "x-api-key": "reqres-free-v1"         //optional in get
        }
    })
    expect(getAllUsers.ok()).toBeTruthy()
    expect(getAllUsers.status()).toBe(200)
    // console.log(await getAllUsers.json())
    const response = await getAllUsers.json()
    expect(response.page).toBe(2)
    expect(response.per_page).toBe(6)
    expect(response.total_pages).toBe(2)
    expect(response.data[0].email).toBe("michael.lawson@reqres.in")
    expect(response.data[5].id).toBe(12)
})

test("post api test", async ({ request }) => {

    const updateUser = await request.post("https://reqres.in/api/users/3", {
        headers: {
            "x-api-key": "reqres-free-v1"         //optional in get
        },
        data: {
            "name": "shiva",
            "last_name": "kumar",
            "email": "shiva@gmail.com"
        },
    })
    expect(updateUser.ok()).toBeTruthy()
    expect(updateUser.status()).toBe(201)
    console.log(await updateUser.json())
    
    const response = await updateUser.json()
    expect(response.name).toBe("shiva")
    expect(response.last_name).toBe("kumar")
    expect(response.email).toBe("shiva@gmail.com")
})

