import { createBdd } from 'playwright-bdd';
import { CartPage } from '../pages/cart-count';
import { test } from '../fixtures/login.fixture';

const { Given, When, Then } = createBdd(test);

Given('I am On the sauceDemo home page', async ({authenticatedPage}) =>
{
    // Authentocation by the fixtixture
});

When('I attempt to add products to cart', async ({ authenticatedPage}) =>
{
    const cartPage = new CartPage(authenticatedPage);
    await cartPage.addProductToCart();
    await cartPage.openShoppingCart();
});

Then('I should be able to see items total in the cart', async ({authenticatedPage}) =>
{
    const cartPage = new CartPage(authenticatedPage);
    await cartPage.verifyCartItems(1); 
});