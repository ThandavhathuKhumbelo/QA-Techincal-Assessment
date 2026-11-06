// Generated from: tests\features\check-out.feature
import { test } from "../../../tests/fixtures/login.fixture.ts";

test.describe('Checkout information', () => {

  test('User fills checkout information successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('the cart has products added', null, { authenticatedPage }); 
    await When('I attempt to checkout after filling valid check out information', null, { authenticatedPage }); 
    await Then('I should get to the finish page to see check out overview', null, { authenticatedPage }); 
  });

  test('Fail to check out without information', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('the cart has products added', null, { authenticatedPage }); 
    await When('I attempt to checkout without filling the checkout information', null, { authenticatedPage }); 
    await Then('I should see a checkout error message', null, { authenticatedPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\check-out.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the cart has products added","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I attempt to checkout after filling valid check out information","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should get to the finish page to see check out overview","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given the cart has products added","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I attempt to checkout without filling the checkout information","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should see a checkout error message","stepMatchArguments":[]}]},
]; // bdd-data-end