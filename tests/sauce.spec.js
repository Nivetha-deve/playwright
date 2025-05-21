// import { test, expect } from "@playwright/test";
// import Loginsauce from "./POM/login.js";
// import addProduct from "./POM/product.js";
// import cart from "./POM/cart.js";
// import  details from "./POM/detail.js";

// test ("validate sauce website login", async({page}) =>{
//     await page.goto("https://www.saucedemo.com/v1/index.html");
//     let loginPage = new Loginsauce(page);
//     let cartpage = new addProduct(page);
//     let checkoutpage = new cart(page);
//     let cudetails = new details(page);
//     await loginPage.saucusername("standard_user")
//     await loginPage.saucpassword("secret_sauce")
//     await loginPage.saucsubmit();
//     await cartpage.saucadditem1();
//     await cartpage.saucadditem2();
//     await cartpage.sauccartlogo(); 
//     await checkoutpage.sauccheckout();
//     await cudetails.saucfirstname("nivetha");
//     await cudetails.sauclastname("shree");
//     await cudetails.saucpostalcode("641017");
//     await cudetails.saucbutton();
//     await cudetails.saucfinish();
//     await cudetails.saucword("THANK YOU FOR YOUR ORDER");
// })

//      //await expect(page.locator("h2.complete-header")).toBeVisible(); 
//      await expect(page.locator('h2.complete-header')).toHaveText("THANK YOU FOR YOUR ORDER");
//      await page.pause();