// Generated from: tests\features\end-to-end.feature
import { test } from "../../../tests/fixtures/login.fixture";

test.describe('End-to-end checkout journey', () => {

  test('Complete checkout, navigate back to products, and logout', async ({ Given, When, Then, And, loggedIn, page }) => { 
    await Given('I am logged in and have added products to my cart', null, { loggedIn, page }); 
    await When('I complete checkout using valid information', null, { page }); 
    await Then('I should see the successful order confirmation', null, { page }); 
    await And('the success title should be displayed', null, { page }); 
    await And('the success description should be displayed', null, { page }); 
    await And('the cart badge should not display a number', null, { page }); 
    await When('I open the burger menu', null, { page }); 
    await And('I navigate to All Items', null, { page }); 
    await Then('the Products page should be displayed', null, { page }); 
    await When('I open the shopping cart', null, { page }); 
    await Then('the cart should be empty', null, { page }); 
    await When('I logout', null, { page }); 
    await Then('I should be redirected to the Login page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\end-to-end.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am logged in and have added products to my cart","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I complete checkout using valid information","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the successful order confirmation","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And the success title should be displayed","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the success description should be displayed","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the cart badge should not display a number","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I open the burger menu","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I navigate to All Items","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the Products page should be displayed","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I open the shopping cart","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the cart should be empty","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I logout","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the Login page","stepMatchArguments":[]}]},
]; // bdd-data-end