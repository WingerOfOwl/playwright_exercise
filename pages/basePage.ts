import { Page, Locator, expect } from '@playwright/test';
 

export class basePage {
    readonly page : Page;
    readonly basePage : string;

constructor(page: Page){
this.page = page;
this.basePage = "https://www.saucedemo.com/";
}

async openURL (url:string){
await this.page.goto(url);
}
}