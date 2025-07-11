import { test, expect } from "@playwright/test"

test("get api test", async ({ request }) => {

    const getAllUsers = await request.get("https://reqres.in/api/users?page=2", {
        headers: {
            "x-api-key": "reqres-free-v1"
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
            "x-api-key": "reqres-free-v1"
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

test('DELETE API', async ({ request }) => {

    const deleteuser = await request.delete(`https://reqres.in/api/users/2`,
        {
            headers: { "x-api-key": "reqres-free-v1" }
        }
    );
    expect(deleteuser.ok()).toBeTruthy();
    expect(deleteuser.status()).toBe(204);

});

test("orange HRM api test", async ({ request }) => {

    const subunit = await request.get("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits", {
        headers: {
            "cookie": process.env.COOKIEVAL
        },

    })
    expect(subunit.ok()).toBeTruthy()
    expect(subunit.status()).toBe(200)
    console.log(await subunit.json())

})

// test("orange HRM api test post", async ({ request }) => {
//     const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
//     const headerspart = {
//         "cookie": process.env.COOKIEVAL
//     }
//     const payload = {

//         "empNumber": 172,
//         "lastName": "sri",
//         "firstName": "deepu",
//         "middleName": "",
//         "employeeId": "048678",
//         "terminationId": null
//     }

//   const createemp=await request.post(url,{
//     headers:headerspart,
//     data:payload
//   })

// //   expect(createemp.ok()).toBeTruthy()
//   expect(createemp.status()).toBe(200)
//   console.log(await createemp.json())

// })

test("orange HRM api test post", async ({ request }) => {
    const url = "https://reqres.in/api/users";



    const createemp = await request.post(url, {
        headers: {
            "x-api-key": "reqres-free-v1",
        },
        data: {

            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"

        }
    });

    expect(createemp.status()).toBe(201);
    console.log(await createemp.json());
});


