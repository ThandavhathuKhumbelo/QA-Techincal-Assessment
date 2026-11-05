
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { ProductsPage } from '../pages/sorting-products';


const { Given, When, Then } = createBdd(test);

Given('I am logged in and viewing the products page', async ({ loggedIn }) => 
{
    await loggedIn.verifySuccessfulLogin();
});

When('I sort products by {string}', async ({ page }, sortingOption: string) =>
{
    const productsPage = new ProductsPage(page);
    await productsPage.sortProducts(sortingOption);
});

Then('all products should be sorted by {string}',async ({ page }, sortingOption: string) => 
{
    const productsPage = new ProductsPage(page);
    await productsPage.verifyProductsSorted(sortingOption);
});
