// Generated from: tests\features\cart-count.feature
import { test } from "../../../tests/fixtures/login.fixture";

test.describe('Add to cart and count feature', () => {

  test('View products in the cart successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('I am On the sauceDemo home page', null, { authenticatedPage }); 
    await When('I attempt to add products to cart', null, { authenticatedPage }); 
    await Then('I should be able to see items total in the cart', null, { authenticatedPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\cart-count.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am On the sauceDemo home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I attempt to add products to cart","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should be able to see items total in the cart","stepMatchArguments":[]}]},
]; // bdd-data-end