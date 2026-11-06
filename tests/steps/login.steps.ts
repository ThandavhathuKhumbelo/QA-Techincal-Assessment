import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

const { Given, When, Then } = createBdd();

let loginPage: LoginPage;

Given('I am on the login page', async ({ page }) => 
{
    loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
});

When('I attempt to login in to the web with valid credentials', async () => 
{
    await loginPage.usernameInput.fill('standard_user');
    await loginPage.passwordInput.fill('secret_sauce');
    await loginPage.clickLogin();
});

When('I attempt to login into the web with invalid credentials', async () => 
{
    await loginPage.usernameInput.fill('invalid_user');
    await loginPage.passwordInput.fill('invalid_password');
    await loginPage.clickLogin();
});

Then('the user should be redirected to the home page', async () => 
{
    await expect(loginPage.appLogo).toBeVisible();
    await expect(loginPage.appLogo).toHaveText('Swag Labs');
});

Then('The user should receive an error message', async () =>
{
    await expect(loginPage.errorMessage).toBeVisible();
});