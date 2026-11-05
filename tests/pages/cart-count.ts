
import { expect, Page } from '@playwright/test';

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


}
