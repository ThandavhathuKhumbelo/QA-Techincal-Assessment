// Generated from: tests\features\end-to-end.feature
import { test } from "../../../tests/fixtures/login.fixture.ts";

test.describe('End to end user journey', () => {

  test('complete user journey successfully', async ({ Given, When, Then, authenticatedPage }) => { 
    await Given('I am on the login web user page', null, { authenticatedPage }); 
    await When('I attempt to complete a full user journey', null, { authenticatedPage }); 
    await Then('I should redirected to the login page', null, { authenticatedPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\end-to-end.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the login web user page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I attempt to complete a full user journey","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should redirected to the login page","stepMatchArguments":[]}]},
]; // bdd-data-end