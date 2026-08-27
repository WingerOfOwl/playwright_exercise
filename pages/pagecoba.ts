
import { Page, Locator} from "playwright";
import { expect } from "playwright/test";

const username_locator = "#user-name"
const password_locator = "#password"
const baseURL = "https://www.saucedemo.com/"
const btnLogin1 = "#login-button"
const asrtLogin = '//*[@id="item_4_title_link"]/div'
const cartAdd = '[data-test="add-to-cart-sauce-labs-backpack"]'
const cartButton = "#shopping_cart_container > a > span"
const vldCart = "#header_container > div.header_secondary_container > span"
const checkoutBtn = "#checkout"
const firstName = "#first-name"
const lastName = "#last-name"
const postalCode = "#postal-code"
const ctnBtn = "#continue"

export class Login1 {
readonly page: Page;
private username: Locator;
private password: Locator;
// readonly btnLogin: Locator;
private asrtLogin1: Locator;
private asrtcart: Locator;
private firstName: Locator;
private lastName: Locator;
private postalcode: Locator;
// readonly ctnBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.username = page.locator(username_locator);
        this.password = page.locator(password_locator);
        // this.btnLogin = page.locator(btnLogin1);
        this.asrtLogin1 = page.locator(asrtLogin)
        this.firstName = page.locator(firstName)
        this.lastName = page.locator(lastName)
        this.postalcode = page.locator(postalCode)
        this.asrtcart = page.locator(vldCart)

    }


    async fillLogin1 (username:string, password:string){
        await this.username.fill(username)
        await this.password.fill(password)
        // Assert field keisi dengan benar sebelum klik login
        await expect(this.username).toHaveValue('standard_user')
        await expect(this.password).toHaveValue('secret_sauce')
        await this.page.click(btnLogin1)
        // Assert berhasil masuk ke dashboard
        await expect(this.asrtLogin1).toBeVisible();
    }

    async visit() {
        await this.page.goto(baseURL)
    }

    async purchase(firstname_fill: string, lastname_fill: string, postalcode_fill: number){
        await this.page.click(cartAdd)
        await this.page.click(cartButton)
        await expect(this.asrtcart).toBeVisible()
        await this.page.click(checkoutBtn)
        await this.firstName.fill(firstname_fill)
        await this.lastName.fill(lastname_fill)
        await this.postalcode.fill(postalcode_fill.toString())
        await this.page.click(ctnBtn)

    }
    async verifiedButton(username:string, password:string){
        
        if(await this.page.isEnabled(btnLogin1) ){
            console.log("Button Login Is Enabled")
            await this.fillLogin1(username, password) 
        }

        else if(await this.page.isDisabled(btnLogin1)){
            console.log("ini button nya disabled")
        }

        else{
            ("Error Ini bang")
        }
    }
}

    