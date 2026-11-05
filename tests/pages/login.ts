
import { expect, Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly usernameTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(private readonly page: Page) {
    this.usernameTextbox = page.locator('#user-name');
    this.passwordTextbox = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameTextbox.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordTextbox.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async verifySuccessfulLogin(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async verifyErrorMessage(message: string): Promise<void> {
    await expect(this.errorMessage).toHaveText(message);
  }
}
