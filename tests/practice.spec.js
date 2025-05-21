// // new tab

// import { test, expect } from "@playwright/test";

// test("validate new tab", async ({page}) =>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//    const [newpage] = await Promise.all([
//     page.waitForEvent("popup"),
//     page.locator("fieldset #opentab").click()
//    ])

//    await newpage.waitForLoadState();
//    await newpage.locator("[class ='navbar-nav ml-auto'] li a[href='/']").click()
//    await newpage.pause();
// })

// // table web page 

