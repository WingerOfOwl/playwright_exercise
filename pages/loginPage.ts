import { Page, Locator, expect } from '@playwright/test';
const inputUsername = "#user-name"
const inputPassword = "#password"
const btnLogin = "#login-button"   
// const vldLogin = '//*[@id="item_4_title_link"]/div'
const baseURL = "https://www.saucedemo.com/"
// const cartAdd = "#add-to-cart"
// const cartButton = "#shopping_cart_container > a > span"
// const vldCart = "#header_container > div.header_secondary_container > span"
// const checkoutBtn = "#checkout"
// const firstName = "#first-name"
// const lastName = "#last-name"
// const postalCode = "#postal-code"
// const ctnBtn = "#continue"

export class LoginPage {
  private page: Page;
  private username_tb: Locator;
  private password_tb: Locator;
  private login_btn: Locator;
  // private vldLogin: Locator;
  // private baseURL: String;
  // private cartAdd: Locator;
  // private cartButton: Locator;
  // private vldCart: Locator;
  // private checkoutBtn: Locator;
  // private firstName: Locator;
  // private lastName: Locator;
  // private postalCode: Locator;
  // private ctnBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username_tb = page.locator(inputUsername);
    this.password_tb = page.locator(inputPassword);
    this.login_btn = page.locator(btnLogin);
    // this.vld_Login = page.locator(vldLogin);
    // this.base_URL = page.locator(baseURL);
    // this.cart_Add = page.locator(cartAdd);
    // this.cart_Button = page.locator(cartButton);
    // this.vld_Cart = page.locator(vldCart);
    // this.checkout_Btn = page.locator(checkoutBtn);
    // this.first_Name = page.locator(firstName);
    // this.last_Name = page.locator(lastName);
    // this.postal_Code = page.locator(postalCode);
    // this.ctn_Btn = page.locator(ctnBtn)


  }

  async login(username: string, password: string) {
    await this.username_tb.fill(username);
    await this.password_tb.fill(password);
    await this.login_btn.click();
  }

  async purchase(username:string, BASE_URL: string, FIRST_NAME: string, LAST_NAM: string, POSTAL_CODE: number
  ){
    await 
    await this.username_tb.fill(username);
    await expect(this.page.locator(inputUsername)).toHaveValue("standard_user");
    
    await this.page.fill(inputPassword, "secret_sauce");
    await expect(this.page.locator(inputPassword)).toHaveValue("secret_sauce");
    
  }


  
}
