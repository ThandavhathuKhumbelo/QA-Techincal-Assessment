Feature: Login 

As a user of sauceDemo website
I want to be able to login with valid credentials
So that I can buy items on the website

Scenario: Login with valid credentials
  Given I am on the login page
  When I enter valid login credentials
  Then I should be logged in successfully

  Scenario: Login with invalid credentials
  Given I am on the login page
  When I enter invalid login credentials
  Then I should see the login error