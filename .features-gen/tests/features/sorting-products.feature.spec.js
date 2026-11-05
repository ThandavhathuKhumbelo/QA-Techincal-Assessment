// Generated from: tests\features\sorting-products.feature
import { test } from "playwright-bdd";

test.describe('sorting Products', () => {

  test.describe('Sort products using available sorting options', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('I am logged in and viewing the products page', null, { page }); 
      await When('I sort products by "Name: A to Z"', null, { page }); 
      await Then('all products should be sorted by "Name: A to Z"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('I am logged in and viewing the products page', null, { page }); 
      await When('I sort products by "Name: Z to A"', null, { page }); 
      await Then('all products should be sorted by "Name: Z to A"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('I am logged in and viewing the products page', null, { page }); 
      await When('I sort products by "Price: Low to High"', null, { page }); 
      await Then('all products should be sorted by "Price: Low to High"', null, { page }); 
    });

    test('Example #4', async ({ Given, When, Then, page }) => { 
      await Given('I am logged in and viewing the products page', null, { page }); 
      await When('I sort products by "Price: High to Low"', null, { page }); 
      await Then('all products should be sorted by "Price: High to Low"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\sorting-products.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am logged in and viewing the products page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name: A to Z\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name: A to Z\"","children":[{"start":20,"value":"Name: A to Z","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then all products should be sorted by \"Name: A to Z\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Name: A to Z\"","children":[{"start":34,"value":"Name: A to Z","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am logged in and viewing the products page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I sort products by \"Name: Z to A\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Name: Z to A\"","children":[{"start":20,"value":"Name: Z to A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then all products should be sorted by \"Name: Z to A\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Name: Z to A\"","children":[{"start":34,"value":"Name: Z to A","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am logged in and viewing the products page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price: Low to High\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price: Low to High\"","children":[{"start":20,"value":"Price: Low to High","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then all products should be sorted by \"Price: Low to High\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Price: Low to High\"","children":[{"start":34,"value":"Price: Low to High","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am logged in and viewing the products page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I sort products by \"Price: High to Low\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Price: High to Low\"","children":[{"start":20,"value":"Price: High to Low","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then all products should be sorted by \"Price: High to Low\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Price: High to Low\"","children":[{"start":34,"value":"Price: High to Low","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end