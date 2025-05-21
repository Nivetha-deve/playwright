import { test, expect } from "@playwright/test";

test.beforeEach(async({page}) =>{
    await page.goto("https://tus.io/demo")
})

test("validate file upload", async({page}) =>{
    await page.locator('input#P0-0').click();
    await page.locator('input#P0-0').setInputFiles('F:/New Text Document.txt')
    await page.waitForTimeout(5000)
    console.log(await page.locator('p._heading_gq6c0_21').textContent())
    await expect(page.locator('p._heading_gq6c0_21')).toHaveText('The upload is complete!')
    await page.pause();
});