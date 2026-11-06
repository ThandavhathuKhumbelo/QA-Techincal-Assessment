Feature: sorting Products with different filters
As a sauce Demo web user
I want to filter products with different filters
So that I can view products in my preferred filter

  Scenario: Sort products with name a to z successfully
    Given I am on the Sauce Demo home page
    When I attempt to sort products by name a to z
    Then all products should be filtered by selected sorting option

  Scenario: Sort products with name z to a successfully
    Given I am on the Sauce Demo home page
    When I attempt to sort products by name z to a
    Then all products should be filtered by selected sorting option

  Scenario: Sort products with price high successfully
    Given I am on the Sauce Demo home page
    When I attempt to sort products by price high to low
    Then all products should be filtered by selected sorting option

  Scenario: Sort products with price low to high successfully
    Given I am on the Sauce Demo home page
    When I attempt to sort products by price low to high
    Then all products should be filtered by selected sorting option
