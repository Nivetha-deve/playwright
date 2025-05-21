// day-5..................
// page object model.................

import { test, expect } from "@playwright/test";
import Login from "./POM/login";

 test(' test', async ({ page }) => {
   await page.goto('https://practicetestautomation.com/practice-test-login/');
   let loginPage = new Login(page);
   await loginPage.enterusername("student");
   await loginPage.enterpassword("Password123");
   await loginPage.submitClick();
})

