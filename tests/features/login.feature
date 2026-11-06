Feature: Login
  As a secret sauce web user 
  I want to log in the website 
  So that I can be able to use the website 

  Scenario: Login in the swag lab user successfully with valid credentials
    Given I am on the login page
    When I attempt to login in to the web with valid credentials
    Then the user should be redirected to the home page

  Scenario: Fail to login into the swag lab with invalid credentials
    Given I am on the login page
    When I attempt to login into the web with invalid credentials
    Then The user should receive an error message
