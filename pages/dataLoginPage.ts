import { Page, Locator, expect } from '@playwright/test';

// ============================================
// POM untuk DATA DRIVEN - login saucedemo
// Method-nya menerima parameter dari data file,
// jadi data TIDAK di-hardcode di sini.
// ============================================
const baseURL = 'https://www.saucedemo.com/';
const inputUsername = '#user-name';
const inputPassword = '#password';
const btnLogin = '#login-button';
const vldLogin = '//*[@id="item_4_title_link"]/div';
const errorMessage = '[data-test="error"]';

export class DataLoginPage {
  readonly page: Page;
  readonly username_tb: Locator;
  readonly password_tb: Locator;
  readonly login_btn: Locator;
  readonly vld_Login: Locator;
  readonly error_msg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username_tb = page.locator(inputUsername);
    this.password_tb = page.locator(inputPassword);
    this.login_btn = page.locator(btnLogin);
    this.vld_Login = page.locator(vldLogin);
    this.error_msg = page.locator(errorMessage);
  }

  async visit() {
    await this.page.goto(baseURL);
  }

  // Satu method yang menerima data apa pun
  async loginWith(username: string, password: string) {
    await this.username_tb.fill(username);
    await this.password_tb.fill(password);
    await this.login_btn.click();
  }

  async verifyDashboardVisible() {
    await expect(this.vld_Login).toBeVisible();
  }

  async verifyErrorMessage(expectedMessage: string) {
    await expect(this.error_msg).toHaveText(expectedMessage);
  }
}
