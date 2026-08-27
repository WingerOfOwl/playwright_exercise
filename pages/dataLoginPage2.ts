import { error, log } from "node:console";
import { Locator, Page } from "playwright";
import { expect } from "playwright/test";
import { users } from "../component/data/loginData2";

const baseURL = 'https://www.saucedemo.com/';
const inputUsername = '#user-name';
const inputPassword = '#password';
const ButtonLogin = "#login-button";
const vld_Login = '//*[@id="item_4_title_link"]/div';
const errorMessage = '[data-test="error"]';

export class IniDataLogin{
    readonly page: Page;
    private inputUsername: Locator;
    private inputPassword: Locator;
    readonly vldLogin: Locator;
    readonly btnLogin: Locator;
    readonly error_msg: Locator;
    

    constructor(page: Page){
        this.page = page;
        this.btnLogin = page.locator(ButtonLogin);
        this.inputPassword = page.locator(inputPassword);
        this.inputUsername = page.locator(inputUsername);
        this.vldLogin = page.locator(vld_Login);
        this.error_msg = page.locator(errorMessage)
    }
    async visit(){
        await this.page.goto(baseURL)
    }

    async login(username: string, password: string){
        await expect(this.btnLogin).toBeEnabled()
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.btnLogin.click();
        }

    async VLDButton(username: string, password: string){
        if(await this.btnLogin.isEnabled()){
            console.log("Button nya sudah aktif")
            await this.login(username, password)
        }

        else{
            console.log('Ini Button nya nggak nyala')
        }

    

    }

    async VLDDashboardVisible(){
        await expect(this.vldLogin).toBeVisible();
    }
    async VLDError(expectedError: string){
        await expect(this.error_msg).toHaveText(expectedError);
    }



    }

