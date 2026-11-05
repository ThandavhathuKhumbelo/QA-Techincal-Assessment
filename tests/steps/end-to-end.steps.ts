
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { CartPage } from '../pages/cart-count';
import { CheckoutPage } from '../pages/check-out';
import { NavigationPage } from '../pages/navigation';

import checkoutData from '../data/check-out.data.json';

const { Given, When, Then } = createBdd(test);

const validCheckoutData = checkoutData[0]!.input;

// Given: Customer is logged in and has products in the cart
Given('I am logged in and have added products to my cart', async ({ page, loggedIn }) => 
{
    await loggedIn.verifySuccessfulLogin();
    const cartPage = new CartPage(page);
    await cartPage.addBackpackAndBikeLight();
});

// When: Customer completes checkout
When('I complete checkout using valid information', async ({ page }) => 
{
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await cartPage.openCart();
    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillCheckoutInformation( validCheckoutData.firstName, validCheckoutData.lastName, validCheckoutData.postalCode);
    await checkoutPage.continueCheckout();
    await checkoutPage.verifyCheckoutOverview();
    await checkoutPage.finishOrder();
});

// Then: Verify successful checkout
Then('I should see the successful order confirmation', async ({ page }) => 
{
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifyFinishPage();
});

Then('the success title should be displayed', async ({ page }) => 
{
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifySuccessTitle();
});

Then('the success description should be displayed', async ({ page }) => 
{
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifySuccessDescription();
});

// Then: Verify cart badge is empty
Then('the cart badge should not display a number', async ({ page }) => 
{
    const cartPage = new CartPage(page);
    await cartPage.verifyCartBadgeIsEmpty();
});

// When: Open burger menu
When('I open the burger menu', async ({ page }) =>
{
    const navigationPage = new NavigationPage(page);
    await navigationPage.openMenu();
});

// When: Navigate to All Items
When('I navigate to All Items', async ({ page }) =>
{
    const navigationPage = new NavigationPage(page);
    await navigationPage.navigateToAllItems();
});

// Then: Verify Products page
Then('the Products page should be displayed', async ({ page }) => 
{
    const navigationPage = new NavigationPage(page);
    await navigationPage.verifyProductsPage();
});

// When: Open shopping cart
When('I open the shopping cart', async ({ page }) => 
{
    const cartPage = new CartPage(page);
    await cartPage.openCart();
});

// Then: Verify cart is empty
Then('the cart should be empty', async ({ page }) =>
{
    const cartPage = new CartPage(page);
    await cartPage.verifyCartIsEmpty();
});

// When: Logout
When('I logout', async ({ page }) => 
{
    const navigationPage = new NavigationPage(page);
    await navigationPage.logout();
});

// Then: Verify Login page
Then('I should be redirected to the Login page', async ({ page }) => 
{
    const navigationPage = new NavigationPage(page);
    await navigationPage.verifyLoginPage();
});
