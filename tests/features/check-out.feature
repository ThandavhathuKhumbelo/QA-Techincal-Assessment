Feature: Checkout information

  Scenario: User fills checkout information successfully
    Given the cart has products added
    When I attempt to checkout
    And I attempt to submit the check out form
    Then I should get to the finish page

  Scenario: Fail to check out without information
    Given the cart has products added
    When I attempt to checkout without filling the form
    Then I should see a checkout error message
