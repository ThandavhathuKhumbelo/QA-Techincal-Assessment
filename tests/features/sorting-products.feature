
Feature: sorting Products

  As a user
  I want to sort products
  So that I can view products in my preferred order

 Scenario Outline: Sort products using available sorting options
    Given I am logged in and viewing the products page
    When I sort products by "<sortingOption>"
    Then all products should be sorted by "<sortingOption>"

    Examples:
      | sortingOption      |
      | Name: A to Z       |
      | Name: Z to A       |
      | Price: Low to High |
      | Price: High to Low |
