// Generated from: tests\features\cart-count.feature
import { test } from "../../../tests/fixtures/login.fixture";

test.describe('Adding products to the cart to verify the cart count', () => {

  test.describe('Add products to the cart to verify the cart count', () => {

    test('Example #1', async ({ Given, When, Then, loggedIn, page }) => { 
      await Given('I am on the home product page', null, { loggedIn }); 
      await When('I attempt to add "3" products to the cart', null, { page }); 
      await Then('the cart count should be updated to "3"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, loggedIn, page }) => { 
      await Given('I am on the home product page', null, { loggedIn }); 
      await When('I attempt to add "2" products to the cart', null, { page }); 
      await Then('the cart count should be updated to "2"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\cart-count.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the home product page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I attempt to add \"3\" products to the cart","stepMatchArguments":[{"group":{"start":17,"value":"\"3\"","children":[{"start":18,"value":"3","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the cart count should be updated to \"3\"","stepMatchArguments":[{"group":{"start":36,"value":"\"3\"","children":[{"start":37,"value":"3","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the home product page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I attempt to add \"2\" products to the cart","stepMatchArguments":[{"group":{"start":17,"value":"\"2\"","children":[{"start":18,"value":"2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the cart count should be updated to \"2\"","stepMatchArguments":[{"group":{"start":36,"value":"\"2\"","children":[{"start":37,"value":"2","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end