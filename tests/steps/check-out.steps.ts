import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { expect } from '@playwright/test';
import { CartPage } from '../pages/cart-count';
import { CheckoutPage } from '../pages/check-out';

const { Given, When, Then } = createBdd(test);

Given('the cart has products added', async ({ authenticatedPage }) => 
{
    const cartPage = new CartPage(authenticatedPage);
    await cartPage.addProductToCart();
    await cartPage.openShoppingCart();
});

When('I attempt to checkout after filling valid check out information', async ({ authenticatedPage }) => 
{
    const checkoutPage = new CheckoutPage(authenticatedPage);
    await checkoutPage.clickCheckout();
    await checkoutPage.enterFirstName('Khumbelo');
    await checkoutPage.enterLastName('Thandavhathu');
    await checkoutPage.enterPostalCode('8863');
    await checkoutPage.clickContinue();
});

When('I attempt to checkout without filling the checkout information', async ({ authenticatedPage }) => 
{
    const checkoutPage = new CheckoutPage(authenticatedPage);
    await checkoutPage.clickCheckout();
    await checkoutPage.clickContinue();
});

Then('I should get to the finish page to see check out overview', async ({ authenticatedPage }) => 
{
    const checkoutPage = new CheckoutPage(authenticatedPage);
    await checkoutPage.verifyCheckoutOverview();
});

Then('I should see a checkout error message', async ({ authenticatedPage }) => 
{
    const checkoutPage = new CheckoutPage(authenticatedPage);
    await checkoutPage.verifyCheckoutError('Error: First Name is required');
});