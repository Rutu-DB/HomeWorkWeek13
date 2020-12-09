Feature: End to End
As a user I want to check the full funtionality of nopCommerce website
@Smoke @Regression
Scenario: User should be able to update Shopping cart successfully

  Given  I am on Demo NopCommerce home page
  And I click on Computer Link
  And I click on Desktop Link
  And I sort product list by Z TO A
  And I sort product list by A to Z
  And I click on Add to Cart Button on Desktop page
  Then I should navigate to Build your own Computer Page
  And I select Processor from Dropdown
  And I select RAM from Dropdown
  And I click on Vista Premium Os Radio Button
  And I click on Software Commander Check Box
  And I verify that amount in total is "$1,475.00"
  And I click to add to cart Build your own Computer page
  Then I verify display pop message appears
  And I move to Mini Shopping Cart
  And I amend the Item Quantity
  Then  I click on Update Button





