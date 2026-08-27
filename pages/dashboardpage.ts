import { Page, Locator, expect } from "@playwright/test";
const vldLogin = '//*[@id="item_4_title_link"]/div'

export class DashboardP{
    readonly page: Page;
    // readonly dashboardTitle:  Locator;
    readonly vld_Login: Locator;

    constructor(page:Page){
        this.page = page;
        this.vld_Login = page.locator(vldLogin);

    }
    async verifyDashboardVisible() {
        await expect(this.vld_Login).toBeVisible();
    }
    
}