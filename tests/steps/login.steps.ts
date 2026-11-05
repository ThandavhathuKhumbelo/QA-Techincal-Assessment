
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login';

const { Given, When, Then } = createBdd();

Given('I am on the login page', async ({ page }) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});

When('I enter valid login credentials', async ({ page }) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
});

When('I enter invalid login credentials', async ({ page }) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.login('invalid_username', 'invalid_password');
});

Then('I should be logged in successfully', async ({ page }) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.verifySuccessfulLogin();
});

Then('I should see the login error', async ({ page }) => 
{
    const loginPage = new LoginPage(page);
    await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
});
