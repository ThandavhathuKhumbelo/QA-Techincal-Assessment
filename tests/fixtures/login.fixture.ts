
import { test as base } from 'playwright-bdd';
import { expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/login';

type LoginFixtures = {loginPage: LoginPage; authenticatedPage: Page;};

export const test = base.extend<LoginFixtures>({loginPage: async ({ page }, use) => 
{
     const loginPage = new LoginPage(page);
    await use(loginPage);
}, authenticatedPage: async ({ page, loginPage }, use) => 
{
    // Navigate to SauceDemo
    await page.goto('https://www.saucedemo.com/');
    // Enter valid credentials using POM locators
    await loginPage.usernameInput.fill('standard_user');
    await loginPage.passwordInput.fill('secret_sauce');
    await loginPage.clickLogin();
    // successfull login
    await expect(loginPage.appLogo).toHaveText('Swag Labs');
    await use(page);
    },
});
