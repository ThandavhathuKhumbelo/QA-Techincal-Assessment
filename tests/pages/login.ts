import { Page, Locator } from '@playwright/test';

export interface ILoginPage 
{
    usernameInput: Locator;
    passwordInput: Locator;
    errorMessage: Locator;
    loginButton: Locator;
    appLogo: Locator;
}

export class LoginPage implements ILoginPage 
{
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly errorMessage: Locator;
    readonly appLogo: Locator;
    readonly loginButton: Locator

    constructor(private page: Page) 
    {
        this.usernameInput = page.getByLabel('Username');
        this.passwordInput = page.getByLabel('Password');
        this.errorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.appLogo = page.locator('.app_logo');
    }

    async clickLogin() {await this.loginButton.click();
}
}