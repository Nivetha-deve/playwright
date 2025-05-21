import { test, expect} from "@playwright/test";
const data= require("../tests/utiles/login.json");
test.beforeAll(() =>{
    console.log("test cases are ready to execute")
});
test.beforeEach(async({page}) =>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");
});
test.afterAll(() =>{
    console.log("All the three test cases has been execute successfully");
});
test("validate login with valid credentials", async({page}) =>{
    await page.locator('input#username').fill(data[0].username);
    await page.locator('input#password').fill(data[0].password);
    await page.locator('button#submit').click();
});
test('validate login with negative username', async({page}) =>{
    await page.locator('input#username').fill(data[1].username);
    await page.locator('input#password').fill(data[1].password);
    await page.locator('button#submit').click();
    const errorMsg = await page.locator('[id="error"]').textContent();
    await expect(page.locator('[id="error"]')).toHaveText(errorMsg);
});
test('validate login with negative password', async({page}) =>{
    await page.locator('input#username').fill(data[2].username);
    await page.locator('input#password').fill(data[2].password);
    await page.locator('button#submit').click();
    console.log(await page.locator('[id="error"]').textContent());
});