Feature: Adding products to the cart to verify the cart count

  As a user
  I want to add products to the cart
  So that I can see the correct number of items in my cart

  Scenario Outline: Add products to the cart to verify the cart count
    Given I am on the home product page
    When I attempt to add "<numberOfProducts>" products to the cart
    Then the cart count should be updated to "<expectedCartCount>"

    Examples:
      | numberOfProducts | expectedCartCount |
      | 3                | 3                 |
      | 2                | 2                 |