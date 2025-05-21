//day8
// amzon.............

import { test, expect } from "@playwright/test";
import data from "../tests/utiles/amz.json";

test("print mobiles name and price", async({page}) =>{
    await page.goto("http://www.amazon.in")
    await page.locator('[id=twotabsearchtextbox]').fill(data.searchitem);
    //await page.locator('[id="nav-search-submit-button"]').click();
    await page.keyboard.press('Enter')
    //await page.locator(`[aria-label*="${data.brand}"] input`).check({force:true})
    await page.locator(`[aria-label*="${data.brand}"] input`).check({force:true})
    let cards = await page.locator('[role="listitem"]')
    
    for(let i=0; i< await cards.count(); i++){
        let proName = await cards.nth(i).locator("h2 span").textContent();
        let proPrice = await cards.nth(i).locator(".a-price-whole").textContent();
    console.log(`${i+1} ${proName}`)
    console.log(`${proPrice}`);
    console.log('.......................')
    }
});

// // task.....
 
// import * as XLSX from 'xlsx';

// const workbook = XLSX.readFile("F:/playwright/tests/utiles/Book1.xlsx");
// const sheetName = workbook.SheetNames[0];
// const sheet = workbook.Sheets[sheetName];
// const  excelData = XLSX.utils.sheet_to_json(sheet);
// const { username, password } = excelData[0];

// test("Login test using excel data", async({page}) =>{
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator("input#username").fill(username);
//     await page.locator("input#password").fill(password);
//     await page.locator("button#submit").click();
//     await expect(page.locator(".post-title")).toBeVisible();
//     await expect(page.locator(".post-title")).toHaveText("Logged In Successfully");
// });