import { test, expect } from '@playwright/test';
import { DataLoginPage } from '../pages/dataLoginPage';
import { users, LoginData } from '../component/data/loginData';
// import loginData from '../component/data/loginData.json'; // <-- bisa juga pakai JSON

// ============================================
// CARA 1 - DATA DRIVEN dengan loop `for...of`
// Satu test dijalankan berulang untuk setiap data
// ============================================
for (const user of users) {
  test(`Login with ${user.username}`, async ({ page }) => {
    const loginPage = new DataLoginPage(page);

    await loginPage.visit();
    await loginPage.loginWith(user.username, user.password);

    if (user.expectedError) {
      // Data yang mengharapkan error
      await loginPage.verifyErrorMessage(user.expectedError);
    } else {
      // Data yang harus berhasil login
      await loginPage.verifyDashboardVisible();
    }
  });
}

// ============================================
// CARA 2 - test.describe per data (lebih rapi di report)
// ============================================
test.describe('Data-driven login dengan describe', () => {
  for (const user of users) {
    test.describe(`Scenario: ${user.username}`, () => {
      test('login', async ({ page }) => {
        const loginPage = new DataLoginPage(page);

        await loginPage.visit();
        await loginPage.loginWith(user.username, user.password);

        if (user.expectedError) {
          await loginPage.verifyErrorMessage(user.expectedError);
        } else {
          await loginPage.verifyDashboardVisible();
        }
      });
    });
  }
});

// ============================================
// CARA 3 - test.describe + test.use (satu skenario, semua browser)
// ============================================
for (const user of users) {
  test.describe(`Cara 3 - ${user.username}`, () => {
    test.use({ testIdAttribute: 'data-test' });

    test('login via test.use', async ({ page }) => {
      const loginPage = new DataLoginPage(page);

      await loginPage.visit();
      await loginPage.loginWith(user.username, user.password);

      if (user.expectedError) {
        await loginPage.verifyErrorMessage(user.expectedError);
      } else {
        await loginPage.verifyDashboardVisible();
      }
    });
  });
}

// ============================================
// CARA 4 - Data manual sebagai parameter (bukan dari file)
// ============================================
const loginCases: LoginData[] = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce', expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
];

for (const data of loginCases) {
  test(`Manual case: ${data.username}`, async ({ page }) => {
    const loginPage = new DataLoginPage(page);

    await loginPage.visit();
    await loginPage.loginWith(data.username, data.password);

    if (data.expectedError) {
      await loginPage.verifyErrorMessage(data.expectedError);
    } else {
      await loginPage.verifyDashboardVisible();
    }
  });
}
