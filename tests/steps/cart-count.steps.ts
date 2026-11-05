import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { CartPage } from '../pages/cart-count';


const { Given, When, Then } = createBdd(test);

Given('I am on the home product page', async ({ loggedIn }) => 
{
    await loggedIn.verifySuccessfulLogin();
});

When('I attempt to add {string} products to the cart', async ({ page }, numberOfProducts: string) => 
    {
        const cartPage = new CartPage(page);
        await cartPage.addProductsToCart(Number(numberOfProducts));
    });

Then('the cart count should be updated to {string}',async ({ page }, expectedCartCount: string) => {
        const cartPage = new CartPage(page);
        await cartPage.verifyCartCount(Number(expectedCartCount));
    });