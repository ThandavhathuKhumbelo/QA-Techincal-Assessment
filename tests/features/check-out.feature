Feature: Checkout information

  Scenario: User fills checkout information successfully
    Given the cart has products added
    When I attempt to checkout after filling valid check out information
    Then I should get to the finish page to see check out overview

  Scenario: Fail to check out without information
    Given the cart has products added
    When I attempt to checkout without filling the checkout information
    Then I should see a checkout error message
