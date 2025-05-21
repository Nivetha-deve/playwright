// // positive user and pasword check

 import { test, expect } from "@playwright/test";

 test(' test', async ({ page }) => {
   await page.goto('https://practicetestautomation.com/practice-test-login/');
   await page.locator("input[id='username']").fill("student");
   await page.locator("input#password").fill("Password123");
   await page.locator("button[id='submit']").click();
   //await expect(page).toHaveURL("practicetestautomation.com/logged-in-successfully/");
   await expect(page.locator('p strong')).toHaveText("Congratulation Student your successfully logged in!")
   await expect(page.locator('[class*="wp-block-button___link"]')).toBevisible();
 });

// // day-2 class notes........
// negative username check

// import { test, expect } from "@playwright/test";

//  test('Negative test', async ({ page }) => {
//    await page.goto('https://practicetestautomation.com/practice-test-login/');
//    await page.locator("input[id='username']").fill("incorrectUser");
//    await page.locator("input#password").fill("Password123");
//    await page.locator("button[id='submit']").click();
//    await expect(page.locator("div#error")).toBeVisible();
//    await expect(page.locator("div#error")).toHaveText("Your username is invalid!");

// });

// day-2
// negative password


// import { test, expect } from "@playwright/test";

//  test('Negative test', async ({ page }) => {
//    await page.goto('https://practicetestautomation.com/practice-test-login/');
//    await page.locator("input[id='username']").fill("student");
//    await page.locator("input#password").fill("incorrectPassword");
//    await page.locator("button[id='submit']").click();
//    await expect(page.locator("div#error")).toBeVisible();
//    await expect(page.locator("div#error")).toHaveText("Your password is invalid!");

// });

// task..............................................................
//amazon task....

// import { test, expect } from '@playwright/test';

// test('amazon test', async ({ page }) => {
//     await page.goto('http://www.amazon.in/ref=nav_login');
//      await page.locator("input#twotabsearchtextbox").fill("iphone 16 pro max");
//     // await page.locator("[type='submit']").click();
//     // await page.locator("input#add-to-cart-button").click();
//     await page.locator('input#nav-search-submit-button').click();
//     await page.locator('button#a-autoid-2-announce').click();
//     await page.waitForTimeout(2000);
//     await page.locator('div#nav-cart-text-container').click();
//     await page.waitForTimeout(2000);
//     await expect(page.locator(".a-truncate-cut")).toBeVisible();
// });