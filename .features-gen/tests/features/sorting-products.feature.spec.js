// Generated from: tests\features\sorting-products.feature
import { test } from "../../../tests/fixtures/login.fixture.ts";

test.describe('sorting Products with different filters', () => {

  test('Sort products with name a to z successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('I am on the Sauce Demo home page', null, { authenticatedPage }); 
    await When('I attempt to sort products by name a to z', null, { authenticatedPage }); 
    await Then('all products should be filtered by selected sorting option', null, { authenticatedPage }); 
  });

  test('Sort products with name z to a successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('I am on the Sauce Demo home page', null, { authenticatedPage }); 
    await When('I attempt to sort products by name z to a', null, { authenticatedPage }); 
    await Then('all products should be filtered by selected sorting option', null, { authenticatedPage }); 
  });

  test('Sort products with price high successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('I am on the Sauce Demo home page', null, { authenticatedPage }); 
    await When('I attempt to sort products by price high to low', null, { authenticatedPage }); 
    await Then('all products should be filtered by selected sorting option', null, { authenticatedPage }); 
  });

  test('Sort products with price low to high successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('I am on the Sauce Demo home page', null, { authenticatedPage }); 
    await When('I attempt to sort products by price low to high', null, { authenticatedPage }); 
    await Then('all products should be filtered by selected sorting option', null, { authenticatedPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\sorting-products.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I attempt to sort products by name a to z","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then all products should be filtered by selected sorting option","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo home page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I attempt to sort products by name z to a","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then all products should be filtered by selected sorting option","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo home page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I attempt to sort products by price high to low","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then all products should be filtered by selected sorting option","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given I am on the Sauce Demo home page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When I attempt to sort products by price low to high","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then all products should be filtered by selected sorting option","stepMatchArguments":[]}]},
]; // bdd-data-end