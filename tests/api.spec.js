import {test,expect} from "@playwright/test";

// test("Get Api", async({request}) =>{
//    const response = await request.get("https://reqres.in/api/users/2");
//    expect(response.status()).toBe(200);
//    const responseBody = await response.json();
//    console.log(responseBody);
// })

// test("post api", async({request}) =>{
//     const response = await request.post("https://reqres.in/api/users/2",{
//     data :{"name":"nivetha",
//         "job":"tester"
//     }
// })
// expect(response.status()).toBe(201);
// const responseBody = await response.json();
// console.log(responseBody);
// expect(responseBody.name).toBe("nivetha");
// });

// test("put api", async({request}) =>{
//     const response = await request.put("https://reqres.in/api/users/2",{
//         data :{"name":"shree"}
//     })
//     expect(response.status()).toBe(200);
//     const responseBody = await response.json();
//     console.log(responseBody);
//     expect(responseBody.name).toBe("shree");
// })

// test("delete api", async({request}) =>{
//     const response = await request.delete("https://reqres.in/api/users/2")
//      expect(response.status()).toBe(204);
// })

test("mock api", async({page}) =>{
   await page.route("https://reqres.in/api/users?page=2", async(route) =>{
       await route.fulfill({
        status:500,
        body:JSON.stringify({error: 'Internal server error'})
       });
   });
   const response = await page.goto("https://reqres.in/api/users?page=2");
    console.log(await response.json());
    expect(response.status()).toBe(500);
});

