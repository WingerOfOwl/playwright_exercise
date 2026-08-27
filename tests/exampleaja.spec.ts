import test from "playwright/test";
import { Login1 } from "../pages/pagecoba";
require("dotenv").config();
// const baseURL = "https://www.saucedemo.com/"

test.describe("as an user, i can do fill username on Login Page", () => {
test.beforeEach(async ({ page }) => {
    const login = new Login1(page)
    await login.visit()
})
// test.afterEach("as an user, i can close the browser", async ({page}) => {
//     await page.close()
// }); 

test('Test aja ini mah', async ({page}) => {
    const loginaja = new Login1(page)
    await loginaja.fillLogin1(
      process.env.TRUE_USERNAME ?? '',
      process.env.TRUE_PASSWORD ?? ''
    );
    
})
test('Test lengkap cuy', async ({page}) => {
    const loginaja = new Login1(page)
    await loginaja.fillLogin1(
      process.env.TRUE_USERNAME ?? '',
      process.env.TRUE_PASSWORD ?? ''
    );

    await loginaja.purchase(
        process.env.CEK_FIRSTNAME ?? '',
        process.env.CEK_LASTNAME ?? '',
        Number(process.env.CEK_POSTALCODE ?? '')
    );
    });

test('Ini buat uji coba if else', async ({page}) => {
    const loginaja1 = new Login1(page)
    await loginaja1.verifiedButton(
        process.env.TRUE_USERNAME ?? '',
        process.env.TRUE_PASSWORD ?? ''

    
    );


    });


    


});