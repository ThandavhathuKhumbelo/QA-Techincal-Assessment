
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';
import { ProductsPage } from '../pages/sorting-products';


const { Given, When, Then } = createBdd(test);


