import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { CartPage } from '../pages/cart-count';
import { CheckoutPage } from '../pages/check-out';
import checkoutData from '../data/check-out.data.json';

const { Given, When, Then } = createBdd(test);

// Access test data
const validData = checkoutData[0]!.input;
const invalidData = checkoutData[1]!.input;
const expectedError = checkoutData[1]!.expectedError!;

// Given: Products are added to the cart
Given('the cart has products added', async ({ page, loggedIn }) => 
{
    await loggedIn.verifySuccessfulLogin();
    const cartPage = new CartPage(page);
    await cartPage.addBackpackAndBikeLight();
});

When('I attempt to checkout', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await cartPage.openCart();
    await checkoutPage.proceedToCheckout();
});

// When: Submit valid checkout information
When('I attempt to submit the check out form', async ({ page }) => 
{
     const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await cartPage.openCart();
    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillCheckoutInformation( validData.firstName, validData.lastName, validData.postalCode );
    await checkoutPage.continueCheckout();
});

// When: Attempt checkout with empty information
When('I attempt to checkout without filling the form', async ({ page }) => {
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    await cartPage.openCart();
    await checkoutPage.proceedToCheckout();
    await checkoutPage.fillCheckoutInformation( invalidData.firstName, invalidData.lastName, invalidData.postalCode );
    await checkoutPage.continueCheckout();
});

// Then: Finish the order
Then('I should get to the finish page', async ({ page }) => 
{
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifyCheckoutOverview();
    await checkoutPage.finishOrder();
    await checkoutPage.verifyFinishPage();
});

// Then: Verify checkout error
Then('I should see a checkout error message', async ({ page }) => 
{
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifyErrorMessage(expectedError);
});