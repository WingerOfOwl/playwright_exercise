import { test, expect } from '@playwright/test';
// import { beforeEach, describe } from 'node:test';
import { LoginPage } from '../pages/loginPage';
import { DashboardP } from '../pages/dashboardpage';
import { basePage } from '../pages/basePage';


const inputUsername = "#user-name"
const inputPassword = "#password"
const btnLogin = "#login-button"   
const vldLogin = '//*[@id="item_4_title_link"]/div'
const baseURL = "https://www.saucedemo.com/"
const cartAdd = "#add-to-cart"
const cartButton = "#shopping_cart_container > a > span"
const vldCart = "#header_container > div.header_secondary_container > span"
const checkoutBtn = "#checkout"
const firstName = "#first-name"
const lastName = "#last-name"
const postalCode = "#postal-code"
const ctnBtn = "#continue"


test.describe("as a user can visit the website", () => {
test.beforeEach(async ({ page }) => {
    await page.goto(baseURL);
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  })

test.afterEach(async ({ page }) => {
    await page.close()
  })
  
test('Try POM', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const dashboardPage = new DashboardP(page);
  const BasePage = new basePage(page)
  await  BasePage.openURL("https://www.saucedemo.com/");
  await loginpage.login('standard_user', 'secret_sauce');
  await dashboardPage.verifyDashboardVisible()
    // await expect(page).toHaveValue("standard_user");
    // await expect(page).toHaveValue("secret_sauce");
      
});

// test('User can do Purchase', async ({ page }) => {
//   await page.fill(inputUsername, "standard_user");
//   await expect(page.locator(inputUsername)).toHaveValue("standard_user");

//   await page.fill(inputPassword, "secret_sauce");
//   await expect(page.locator(inputPassword)).toHaveValue("secret_sauce");

//   await page.click(btnLogin);
//   await expect(page.locator(vldLogin)).toBeVisible();

//   await page.click(vldLogin);
//   await expect(page.locator(cartAdd)).toBeVisible();
//   await page.click(cartAdd);
//   await page.click(cartButton);
//   await expect(page.locator(vldCart)).toBeVisible();
//   await page.click(checkoutBtn);
  
//   await page.fill(firstName, "Oris");
//   await expect(page.locator(firstName)).toHaveValue("Oris");
//   await page.fill(lastName, "Pratama");
//   await expect(page.locator(lastName)).toHaveValue("Pratama");
//   await page.fill(postalCode, "1111");
//   await expect(page.locator(postalCode)).toHaveValue("1111");
//   await page.click(ctnBtn);
// });
// test('try Codegen', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('problem_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
//   await page.getByText('carry.allTheThings() with the').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.getByRole('button', { name: 'Open Menu' }).click();
//   await page.locator('[data-test="about-sidebar-link"]').click();
//   await page.goto('https://saucelabs.com/error/404');
// });


});