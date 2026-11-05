// Generated from: tests\features\check-out.feature
import { test } from "../../../tests/fixtures/login.fixture";

test.describe('Checkout information', () => {

  test('User fills checkout information successfully', async ({ Given, When, Then, And, loggedIn, page }) => { 
    await Given('the cart has products added', null, { loggedIn, page }); 
    await When('I attempt to checkout', null, { page }); 
    await And('I attempt to submit the check out form', null, { page }); 
    await Then('I should get to the finish page', null, { page }); 
  });

  test('Fail to check out without information', async ({ Given, When, Then, loggedIn, page }) => { 
    await Given('the cart has products added', null, { loggedIn, page }); 
    await When('I attempt to checkout without filling the form', null, { page }); 
    await Then('I should see a checkout error message', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\check-out.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the cart has products added","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I attempt to checkout","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And I attempt to submit the check out form","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then I should get to the finish page","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given the cart has products added","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I attempt to checkout without filling the form","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see a checkout error message","stepMatchArguments":[]}]},
]; // bdd-data-end