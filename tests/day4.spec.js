// adding 2 or more products in a cart...

import { test, expect } from "@playwright/test";
const cred = require("./data.json");

test("add 2 product", async({page}) =>{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator('[id="user-name"]').fill(cred.username)
    await page.locator('[id="password"]').fill(cred.password)
    await page.locator('[id="login-button"]').click()
    //let data = ["Sauce Labs Backpack","Sauce Labs Fleece Jacket","Test.allTheThings() T-Shirt (Red)","Sauce Labs Onesie"]
    let data = cred.dataname
    for(let data1 of data){
        let allProducts = await page.locator(".inventory_item")
        let Counts = await allProducts.count()
        for(let i=0; i<Counts;i++){
            let productNames = await allProducts.nth(i).locator(".inventory_item_name").textContent()
            if(productNames === data1){
                await allProducts.nth(i).locator("button").click()
                break;
            }
        }
    }
    await page.locator('[data-icon ="shopping-cart"]').click()
    expect (await page.locator(".cart_item").count()).toBeLessThanOrEqual(4)
    data.forEach((cartItems) =>{
        let checking = page.locator(`.inventory_item_name:has-text("${cartItems}")`)
        
        expect(checking).toBeTruthy()
        console.log(`your add item: "${cartItems}" is in cart now`)
    })
    await page.pause();
 })