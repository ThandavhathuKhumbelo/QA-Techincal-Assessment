import { Page, Locator, expect } from '@playwright/test';

export interface ICartPage { addToCartButton: Locator; shoppingCartButton: Locator; cartItems: Locator; }

export class CartPage implements ICartPage {
    readonly addToCartButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly cartItems: Locator;

    constructor(private page: Page) 
    {
        this.addToCartButton = page.getByTestId( 'add-to-cart-sauce-labs-backpack');
        this.shoppingCartButton = page.getByRole('button',{ name: /Cart/ });
        this.cartItems = page.locator('[data-test="inventory-item"]');
    }

    async addProductToCart() {await this.addToCartButton.click();}

    async openShoppingCart() {await this.shoppingCartButton.click(); }

    async verifyCartItems(expectedCount: number) {await expect(this.cartItems).toHaveCount(expectedCount);}
}