
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { ProductsPage } from '../pages/sorting-products';

const { Given, When, Then } = createBdd(test);

Given('I am on the Sauce Demo home page', async ({ authenticatedPage }) => 
{
    // Already authenticated by the fixture.
});

When('I attempt to sort products by name a to z', async ({ authenticatedPage }) => 
{
    const productsPage = new ProductsPage(authenticatedPage);
    await productsPage.selectSortOption('Name (A to Z)');
});

When('I attempt to sort products by name z to a', async ({ authenticatedPage }) => 
{
    const productsPage = new ProductsPage(authenticatedPage);
    await productsPage.selectSortOption('Name (Z to A)');
});

When('I attempt to sort products by price high to low', async ({ authenticatedPage }) => 
{
    const productsPage = new ProductsPage(authenticatedPage);
    await productsPage.selectSortOption('Price (high to low)');
});

When('I attempt to sort products by price low to high', async ({ authenticatedPage }) => 
{
    const productsPage = new ProductsPage(authenticatedPage);
    await productsPage.selectSortOption('Price (low to high)');
});

Then('all products should be filtered by selected sorting option', async ({ authenticatedPage }) => 
{
    const productsPage = new ProductsPage(authenticatedPage);
    await productsPage.verifyProductsSorted();
});
