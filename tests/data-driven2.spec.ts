import { test } from '@playwright/test';
import { Page} from "playwright";
import {users} from '../component/data/loginData2';
import { DataLoginPage } from "../pages/dataLoginPage";
import { IniDataLogin } from "../pages/dataLoginPage2";
import { log } from "node:console";
import { afterEach } from 'node:test';
import { LoginPage } from '../pages/loginPage';


test.afterEach('tutup halaman', async ({page}) => {
        console.log("Ini udh nutup halamannya")
        await page.close();
    });

for(const user of users){
    
    test(`Test untuk ${user.username}`, async ({ page }) => {
        const logindatapage = new IniDataLogin(page);
        await logindatapage.visit();
        await logindatapage.VLDButton(user.username, user.password)

        if(user.expectedError){
        await logindatapage.VLDError(user.expectedError)
         }
         else{
            await logindatapage.VLDDashboardVisible();
         }
    });

    

    

}