Feature: Add to cart and count feature
As a SauceDemo user
I want to add products to cart and view the cart
So I can see how many Products are in the cart 

  Scenario: View products in the cart successfully
    Given I am On the sauceDemo home page
    When I attempt to add products to cart
    Then I should be able to see items total in the cart
