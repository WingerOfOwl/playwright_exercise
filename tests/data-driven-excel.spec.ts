import { test } from '@playwright/test';
import { DataLoginPage } from '../pages/dataLoginPage';
import { readLoginDataFromExcel } from '../component/readExcel';
import { LoginData } from '../component/data/loginData';

// ============================================
// DATA DRIVEN dari file Excel
// Sama persis alurnya dengan data dari .ts,
// cuma sumber datanya dari .xlsx
// ============================================
const users: LoginData[] = readLoginDataFromExcel('component/data/loginData.xlsx');

for (const user of users) {
  test(`Login with ${user.username} (dari Excel)`, async ({ page }) => {
    const loginPage = new DataLoginPage(page);

    await loginPage.visit();
    await loginPage.loginWith(user.username, user.password);

    if (user.expectedError) {
      await loginPage.verifyErrorMessage(user.expectedError);
    } else {
      await loginPage.verifyDashboardVisible();
    }
  });
}
