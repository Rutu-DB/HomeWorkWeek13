package com.nopCommerce.demo.stepDefs;

import com.nopCommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class e2eStepDefs {

    HomePage homepage = new HomePage();
    ComputerPage computerPage = new ComputerPage();
    DesktopPage desktopPage = new DesktopPage();
    BuildYourComputerPage buildYourComputerPage = new BuildYourComputerPage();
    ShoppingCartPage shoppingCartPage = new ShoppingCartPage();


    @Given("^I am on Demo NopCommerce home page$")
    public void iAmOnDemoNopCommerceHomePage() {
        homepage.verifyHomepageMessage();
    }

    @And("^I click on Computer Link$")
    public void iClickOnComputerLink() {
        computerPage.clickOnComputerLink();
    }

    @And("^I click on Desktop Link$")
    public void iClickOnDesktopLink() {
        desktopPage.clickDesktopLink();
    }

    @And("^: I sort products list as Z to A$")
    public void iSortProductsListAsZToA() {
        desktopPage.sortProductsOrderByZToA();
    }

    @And("^:  I sprt products list back to A to z$")
    public void iSprtProductsListBackToAToZ() {
        desktopPage.deskTopPageAction();
    }

    @And("^: I click on Add to Cart Button$")
    public void iClickOnAddToCartButton() {
        desktopPage.clickonAddToCartBtn();
    }

    @Then("^: I should be able to navigate to Build Your Computer Page$")
    public void iShouldBeAbleToNavigateToBuildYourComputerPage() {
        String actual = desktopPage.actualMessageBuildYourOwnDesktop();
        Assert.assertEquals("Build your own computer", actual);
    }

    @And("^I sort product list by Z TO A$")
    public void iSortProductListByZTOA() {
        desktopPage.sortProductsOrderByZToA();
    }

    @And("^I sort product list by A to Z$")
    public void iSortProductListByAToZ() {
        desktopPage.deskTopPageAction();
    }

    @And("^I click on Add to Cart Button on Desktop page$")
    public void iClickOnAddToCartButtonOnDesktopPage() {
        desktopPage.clickonAddToCartBtn();
    }

    @Then("^I should navigate to Build your own Computer Page$")
    public void iShouldNavigateToBuildYourOwnComputerPage() {
        String actual = desktopPage.actualMessageBuildYourOwnDesktop();
        Assert.assertEquals("Build your own computer", actual);
    }


    @And("^I select Processor from Dropdown$")
    public void iSelectProcessorFromDropdown() throws InterruptedException {
        buildYourComputerPage.buildYourOwnComputerSelectProcessor();
    }

    @And("^I select RAM from Dropdown$")
    public void iSelectRAMFromDropdown() {
        buildYourComputerPage.buildYourOwnComputerSelectRAM();
    }


    @And("^I click on Vista Premium Os Radio Button$")
    public void iClickOnVistaPremiumOsRadioButton() throws InterruptedException {
        buildYourComputerPage.buildYourOwnComputerRadioButton();
    }

    @And("^I click on Software Commander Check Box$")
    public void iClickOnSoftwareCommanderCheckBox() throws InterruptedException {
        buildYourComputerPage.buildYourOwnComputerCheckBox();
    }

    @And("^I verify that amount in total is \"([^\"]*)\"$")
    public void iVerifyThatAmountInTotalIs(String expAmount) throws InterruptedException {
        Assert.assertEquals(expAmount, buildYourComputerPage.actualAmountMessage());

    }


    @And("^I click to add to cart Build your own Computer page$")
    public void iClickToAddToCartBuildYourOwnComputerPage() throws InterruptedException {
        buildYourComputerPage.buildYourOwnComputerAddToCartBtn();
    }


    @Then("^I verify display pop message appears$")
    public void iVerifyDisplayPopMessageAppears() throws InterruptedException {
        buildYourComputerPage.notificationDisplay();
    }

    @And("^I move to Mini Shopping Cart$")
    public void iMoveToMiniShoppingCart() throws InterruptedException {
        shoppingCartPage.moveToShoppingCart();
    }


    @And("^I amend the Item Quantity$")
    public void iAmendTheItemQuantity() throws InterruptedException {
        shoppingCartPage.amendQtyField();
    }

    @Then("^I click on Update Button$")
    public void iClickOnUpdateButton() {
        shoppingCartPage.updateFinalCart();
    }

    @And("^I select Build Your Own Computer Product$")
    public void iSelectBuildYourOwnComputerProduct() {
    }



}

