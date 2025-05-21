// day-3 class.............

//  1) radio button

 import { test, expect } from "@playwright/test";

test("validate radio button", async ({page}) =>{
 
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     await page.locator('input[value="radio1"]').check();
     await page.locator("input[value='radio3']").toBeCheck();
     await page.pause();
});

//  2) check box

test("validate check box", async ({page}) =>{
    
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     // await page.locator("input[id='checkBoxOption1']");
     // await page.locator("input[id='checkBoxOption3']");
     const valueToCheck =["option1","option3"]
     for(let value of valueToCheck){
          await page.check(`label [value='${value}']`) 
     }
     for(let value of valueToCheck){
          const ischecked = await page.isChecked(`label [value="${value}"]`);
          expect(ischecked).toBe(true)
     }
     await page.pause();
});

//  3) dropdown (static)

test("validate dropdown box", async({page}) =>{
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     const dropDownStatic = await page.locator("select[id='dropdown-class-example']");
     await dropDownStatic.selectOption("option3");
     await page.pause();
});

//  4) dropdown (dynamic)

test ("validate dropdown", async({page}) =>{
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     const input = await page.locator("input[id='autocomplete']");
     const dropdownOption = await page.locator(".ui-menu-item div");
     await input.fill("In")
     await dropdownOption.first().waitFor()
     let options = await dropdownOption.allTextContents();
     const countryToSelect = "India"
     for(let i=0; i<options.length;i++){
          if(options[i].trim == countryToSelect){
               await dropdownOption.nth(i).click()
               break;
          }
     }
     await page.pause();
});

//  5) iframe 

test ("iframe", async({page}) =>{
     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     const frame = await page.frame({name: 'iframe-name'})
     await frame.locator(['[class="navbar-collapse collapse clearfix"] ul li a[href="mentorship"]']).first().click();
     await page.pause();
});

//task.....................................................................

 test("swaglabs",async({page}) =>{
     await page.goto("https://www.saucedemo.com/v1/index.html");
     await page.locator("input#user-name").fill("standard_user");
     await page.locator("input#password").fill("secret_sauce");
     await page.locator("input[type='submit']").click();
     //await page.locator("[id='item_4_title_link']").click();
     //await page.locator("button[class='btn_primary btn_inventory']").first().click();
     await page.locator(".inventory_item:nth-child(5)  .btn_inventory").click();
     await page.locator(".inventory_item:nth-child(3)  .btn_inventory").click();
     await page.locator("svg[class*='svg-inline--fa']").click();
     await page.locator("a[class*='btn_action']").click();
     await page.locator("input#first-name").fill("nivetha");
     await page.locator("input#last-name").fill("shree");
     await page.locator("input#postal-code").fill("641017");
     await page.locator("[class*='btn_primary'][value='CONTINUE']").click();
     await page.locator("a[href='./checkout-complete.html']").click();
     //await expect(page.locator("h2.complete-header")).toBeVisible(); 
     await expect(page.locator('h2.complete-header')).toHaveText("THANK YOU FOR YOUR ORDER");
     await page.pause();
});