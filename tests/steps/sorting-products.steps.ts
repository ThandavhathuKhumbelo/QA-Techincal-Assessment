
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login';
import { ProductsPage } from '../pages/sorting-products';

const { Given, When, Then } = createBdd();

Given('I am logged in and viewing the products page', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await loginPage.verifySuccessfulLogin();
});

When('I sort products by {string}', async ({ page }, sortingOption: string) => {
  const productsPage = new ProductsPage(page);

  await productsPage.sortProducts(sortingOption);
});

Then(
  'all products should be sorted by {string}',
  async ({ page }, sortingOption: string) => {
    const productsPage = new ProductsPage(page);

    await productsPage.verifyProductsSorted(sortingOption);
  }
);
