Feature: sorting Products with different filters
As a sauce Demo web user
I want to filter products with different filters
So that I can view products in my preferred filter

  Scenario Outline: Sort products with different filters successfully
    Given I am on the Sauce Demo home page
    When I attempt to sort products by "<sortingOption>"
    Then all products should be filtered by selected "<sortingOption>"

    Examples:
      | sortingOption      |
      | Name: A to Z       |
      | Name: Z to A       |
      | Price: Low to High |
      | Price: High to Low |
