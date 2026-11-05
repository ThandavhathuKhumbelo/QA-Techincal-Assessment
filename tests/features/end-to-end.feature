Feature: End-to-end checkout journey
  As a SauceDemo customer
  I want to complete a purchase
  So that I can verify the checkout process and successfully log out

  Scenario: Complete checkout, navigate back to products, and logout
    Given I am logged in and have added products to my cart
    When I complete checkout using valid information
    Then I should see the successful order confirmation
    And the success title should be displayed
    And the success description should be displayed
    And the cart badge should not display a number
    When I open the burger menu
    And I navigate to All Items
    Then the Products page should be displayed
    When I open the shopping cart
    Then the cart should be empty
    When I logout
    Then I should be redirected to the Login page
