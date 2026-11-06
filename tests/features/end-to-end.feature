Feature: End to end user journey
As a Sauce Demo web user
I want to Complete a whole user journey of the website
So that we can veriy the web works as expected

  Scenario: complete user journey successfully
    Given I am on the login web user page
    When I attempt to complete a full user journey
    Then I should redirected to the login page
