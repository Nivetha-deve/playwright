import { test,expect } from "@playwright/test";

test("screenshot", async({page}) =>{
    await page.goto("https://playwright.dev/")
    // for taking screenshot whole page//await page.screenshot({path: 'screenshot.png', fullPage: true });
    // this is for a small portion of a page//await page.locator("[aria-label='Main']").screenshot({ path: 'screenshot.png' });
})