
import { expect, Page } from '@playwright/test';
import { ICartPage } from './types/cart.types';

export class CartPage {
    constructor(private page: Page) {}

    // Locators
    private addToCartButtons = this.page.locator(
        '.inventory_item button'
    );

    private shoppingCartLink = this.page.locator(
        '[data-test="shopping-cart-link"]'
    );

    private cartBadge = this.page.locator(
        '[data-test="shopping-cart-badge"]'
    );

    private cartItems = this.page.locator('.cart_item');

    // Add a specific number of products to the cart
    async addProductsToCart(numberOfProducts: number) 
    {
        const productCount = await this.addToCartButtons.count();

        if (numberOfProducts > productCount) 
        {
            throw new Error( `Requested ${numberOfProducts} products, but only ${productCount} are available.`);
        }

        for (let i = 0; i < numberOfProducts; i++) { await this.addToCartButtons.nth(i).click(); }
    }

    async addAllProductsToCart() 
    { 
        const productCount = await this.addToCartButtons.count();
        await this.addProductsToCart(productCount);
    }

    async openCart()
    {
        await this.shoppingCartLink.click();
    }

    async verifyCartCount(expectedCount: number) 
    {
        await expect(this.cartBadge).toHaveText( String(expectedCount));
    }

    async verifyCartItems(expectedCount: number) 
    {
        await expect(this.cartItems).toHaveCount(expectedCount);
    }

    async addBackpackAndBikeLight() 
    {
    await this.page.locator('#add-to-cart-sauce-labs-backpack').click();
    await this.page.locator('#add-to-cart-sauce-labs-bike-light').click();
    }

async verifyCartIsEmpty() { await expect(this.cartItems).toHaveCount(0);}

async verifyCartBadgeIsEmpty() {await expect(this.cartBadge).toHaveCount(0); }

}
