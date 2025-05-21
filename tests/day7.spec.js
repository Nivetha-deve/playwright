import {test, expect } from "@playwright/test";

test("GET by locator", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    //await page.getByLabel("Name").fill("Nivetha")
   // await page.locator('input[name="name"]').fill("Nivetha");
    await page.locator('input[name="email"]').fill("nivetha@gmail.com")
    await page.getByPlaceholder('Password').fill("password123")
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel('Employed').check();
    await page.getByRole('link',{name:"shop"}).click();
    // await page.getByText("shop").click()
    await page.locator("app-card").filter({hasText:"Samsung Note 8"}).getByRole("button").click();
});


// // task.................

// test("amazon correct", async({page}) =>{
//     await page.goto("http://www.amazon.in/ref=nav_login")
//     await page.locator('input[id="twotabsearchtextbox"]').fill('mobile');
//     await page.locator('input[id="nav-search-submit-button"]').click();
//     //await page.locator('li[id="p_123/46655"]').waitFor();
//     await page.locator('li[id="p_123/46655"]').click();

//     await page.waitForSelector('[role="listitem"]');
//     const products = await page.$$('[role="listitem"][data-component-type="s-search-result"]');
    
    
//     //for (let i = 0; i < Math.min(10, products.length); i++) {
//     for(let i=0;i< products.length; i++){

//             const nameElement = await products[i].$('.a-text-normal')
//             const name = nameElement ? await nameElement.innerText() : "name not found"
        
//             const priceElement = await products[i].$('.a-price-whole')
//             const price = priceElement ? await priceElement.innerText() : "price not found"
            
//             console.log(` Name: ${name}`);
//             console.log(` Price: ₹${price}`);
//     }
// });

