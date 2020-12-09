Feature: Login
  As a User I want to login into nopcommerce website

  @Smoke @Regression
  Scenario: User should navigate to login page successfully
    Given I am on home page
    When I click on login link
    Then I should navigate to login page successfully

  @Sanity @Regression
  Scenario: User should login successfully with valid credentials
    Given I am on home page
    When I click on login link
    And I enter email "alphatest@mymail.com"
    And I enter password "123456"
    And I click on login button
    Then I should login successfully

  @Regression
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on home page
    When I click on login link
    And I enter email "<username>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | username                | password   | errorMessage                                                                                |
      | abcd123@gmail.com       | xyz123     | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | djjfgjjfg123@gmail.com  | xyadfas123 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | ritmjhsdfg123@gmail.com | adfsadf123 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

