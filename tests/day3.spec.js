//day-3

//alert box...

import { test, expect } from "@playwright/test";

test("validate alert box", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.on("dialog",(dialog) => dialog.accept())
    await page.locator("#confirmbtn").click()
    await page.pause();
})

// new tab opening...

test("validate new tab", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const [newpage] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("fieldset #opentab").click()
    ])
      await newpage.waitForLoadState()
      console.log(await newpage.title())
      await newpage.locator('[class="navbar-nav ml-auto"] li a[href="about.html"]').click()
      await newpage.pause();    
})

// page navigation...

test("page navigation", async({page}) =>{
    await page.goto("https://www.google.co.uk/");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goBack();
    await page.goForward();
    await page.pause();
})

// hidding a box...

test("hidden box", async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#alertbtn").isVisible();
    await page.locator("#alertbtn").click();
    await page.locator("#confirmbtn").isHidden();
    await page.pause();
})

// Mouse Hover...

test("mouse hover", async ({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#mousehover").hover();
    await page.getByText("Top").click();
    await page.pause();
})

// web table...

test("validate web table", async({page}) =>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const keyword = "Jenkins"
    const rows = await page.$$ ("table tr")
    for(let row of rows){
        const tds = await row.$$("td")
        if(tds.length >2){
            const secondTd = await tds[1].innerText();
            if(secondTd.includes(keyword)){
             const completeCourseName = await tds[1].textContent()
             console.log(completeCourseName)
             const price = await tds[2].textContent()
             expect(Number(price)).toEqual(20)
             await page.pause();
            }
        }
    }
})

// // alternative method for web table.....

// test ("validate web tables1", async ({ page }) => {
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const keyword = "Jenkins";

//     const row = await page.locator("table tr").filter({ hasText: keyword }).first();

//     if (await row.count() > 0) {
//         const courseName = await row.locator("td:nth-child(2)").textContent();
//         const price = await row.locator("td:nth-child(3)").textContent();
        
//         console.log(courseName);
//         expect(Number(price)).toBe(20);
        
//         await page.pause();
//     }
// });


// test("validate web table3", async ({page}) => {
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     const keyword = "postman"

//     const row = await page.locator("table tr").filter({ hasText : keyword})

//     if( await row.count() > 0){
//         const coursename = await row.locator("td:nth-child(2)").textContent()
//         const amount = await row.locator("td:nth-child(4)").textContent()
//         const postion = await row.locator("td:nth-child(1)").textContent()
//         const city = await row.locator("td:nth-child(3)").textContent()

//         console.log(postion);
//         console.log(coursename);
//         console.log(city);
//         console.log(amount);
//         expect(Number(amount)).toBe(46)
//         expect()
//     }
//     await page.pause();
// });








