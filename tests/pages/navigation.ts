
import { expect, Page } from '@playwright/test';
import { INavigationPage } from './types/navigation.types';

export class NavigationPage implements INavigationPage {

    constructor(private page: Page) {}

    // Locators
    private menuButton = this.page.locator('#react-burger-menu-btn');
    private allItemsLink = this.page.locator('#inventory_sidebar_link');
    private logoutLink = this.page.locator('#logout_sidebar_link');
    private pageTitle = this.page.locator('[data-test="title"]');
    private loginButton = this.page.locator('#login-button');

    // Open burger menu
    async openMenu(): Promise<void> { await this.menuButton.click();}

    // Navigate to All Items
    async navigateToAllItems(): Promise<void> 
    { 
        await expect(this.allItemsLink).toBeVisible(); 
        await this.allItemsLink.click();
    }

    // Verify Products page
    async verifyProductsPage(): Promise<void> 
    {
        await expect(this.page).toHaveURL(/inventory.html/);
        await expect(this.pageTitle).toHaveText('Products');
    }

    // Logout
    async logout(): Promise<void> 
    {
        await this.openMenu();
        await expect(this.logoutLink).toBeVisible();
        await this.logoutLink.click();
    }

    // Verify Login page
    async verifyLoginPage(): Promise<void> 
    {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/');
        await expect(this.loginButton).toBeVisible();
    }
}
