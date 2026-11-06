import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { EndToEndPage } from '../pages/navigation';

const { Given, When, Then } = createBdd(test);

Given('I am on the login web user page', async ({ authenticatedPage }) => 
{
    const endToEndPage = new EndToEndPage(authenticatedPage);
    await endToEndPage.verifyProductsPage();
});

When('I attempt to complete a full user journey', async ({ authenticatedPage }) => 
    {
    const endToEndPage = new EndToEndPage(authenticatedPage);
    // Add first product
    await endToEndPage.addFirstProductToCart();
    // Open cart and continue shopping
    await endToEndPage.openShoppingCart();
    await endToEndPage.continueShopping();
    // Add second product
    await endToEndPage.addSecondProductToCart();
    // Verify both products are in the cart
    await endToEndPage.verifyCartContainsTwoProducts();
    // Checkout
    await endToEndPage.proceedToCheckout();
    // Enter checkout information
    await endToEndPage.enterCheckoutInformation('Khumbelo','Thandavhathu','8863');
    // Verify checkout overview
    await endToEndPage.continueToCheckoutOverview();
    // Finish order
    await endToEndPage.finishOrder();
    await endToEndPage.verifyOrderConfirmation();
    // Return home and logout
    await endToEndPage.returnHome();
    await endToEndPage.openMenu();
    await endToEndPage.logout();
});

Then('I should redirected to the login page', async ({ authenticatedPage }) => 
{
    const endToEndPage = new EndToEndPage(authenticatedPage);
    await endToEndPage.verifyLoginPage();
});