import { Page, Locator, expect } from '@playwright/test';

export class EndToEndPage 
{
    readonly page: Page;
    // Products and cart
    readonly firstProductButton: Locator;
    readonly secondProductButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly cartTitle: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartBadge: Locator;
    // Checkout information
    readonly checkoutButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    // Checkout overview and confirmation
    readonly checkoutOverview: Locator;
    readonly finishButton: Locator;
    readonly confirmationMessage: Locator;
    readonly backHomeButton: Locator;
    // Navigation and logout
    readonly menuButton: Locator;
    readonly logoutButton: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) 
    {
        this.page = page;
        // Products and cart
        this.firstProductButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.secondProductButton = page.getByTestId('add-to-cart-sauce-labs-bike-light');
        this.shoppingCartButton = page.getByTestId('shopping-cart-link');
        this.cartTitle = page.getByText('Your Cart');
        this.continueShoppingButton = page.getByTestId('continue-shopping');
        this.cartBadge = page.getByTestId('shopping-cart-badge');
        // Checkout information
        this.checkoutButton = page.getByTestId('checkout');
        this.firstNameInput = page.getByTestId('firstName');
        this.lastNameInput = page.getByTestId('lastName');
        this.postalCodeInput = page.getByTestId('postalCode');
        this.continueButton = page.getByTestId('continue');
        // Checkout overview and confirmation
        this.checkoutOverview = page.getByText('Checkout: Overview');
        this.finishButton = page.getByTestId('finish');
        this.confirmationMessage = page.getByTestId('complete-header');
        this.backHomeButton = page.getByTestId('back-to-products');
        // Navigation and logout
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
        this.loginButton = page.getByTestId('login-button');
    }
    async verifyProductsPage() {await expect(this.page.getByText('Products')).toBeVisible();}

    async addFirstProductToCart() {await this.firstProductButton.click();}

    async openShoppingCart()
    {
        await this.shoppingCartButton.click();
        await expect(this.cartTitle).toBeVisible();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async addSecondProductToCart() {await this.secondProductButton.click();}

    async verifyCartContainsTwoProducts() 
    {
        await this.openShoppingCart();
        await expect(this.cartBadge).toHaveText('2');
    }

    async proceedToCheckout() {await this.checkoutButton.click();}

    async enterCheckoutInformation(firstName: string,lastName: string,postalCode: string) 
    {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueToCheckoutOverview() 
    {
        await this.continueButton.click();
        await expect(this.checkoutOverview).toBeVisible();
    }

    async finishOrder() {await this.finishButton.click();}

    async verifyOrderConfirmation() {await expect(this.confirmationMessage).toHaveText('Thank you for your order!');}

    async returnHome() 
    {
        await this.backHomeButton.click();
        await this.verifyProductsPage();
    }

    async openMenu() {await this.menuButton.click();}

    async logout() {await this.logoutButton.click();}

    async verifyLoginPage() 
    {
        await expect(this.loginButton).toBeVisible();
        await expect(this.page.locator('.login_logo')).toHaveText('Swag Labs');
    }
}