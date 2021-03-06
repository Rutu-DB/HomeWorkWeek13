package com.nopCommerce.demo.stepDefs;

import com.nopCommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class RegisterStepDefs {

    HomePage homePage = new HomePage();
    RegistrationPage registrationPage = new RegistrationPage();
    DesktopPage desktopPage = new DesktopPage();
    BuildYourComputerPage buildYourComputerPage = new BuildYourComputerPage();
    ShoppingCartPage shoppingCartPage = new ShoppingCartPage();


    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        homePage.clickOnRegisterLink();

    }

    @Then("^I should navigate to registration page$")
    public void iShouldNavigateToRegistrationPage() {
        registrationPage.verifyRegisterPageMessage();
        String actualResult = registrationPage.verifyRegisterPageMessage();
        Assert.assertEquals(actualResult,"Register");
    }

    @And("^I click on Gender button$")
    public void iClickOnGenderButton() {
        registrationPage.clickOnGender();
    }

    @And("^I enter First Name$")
    public void iEnterFirstName() {
        registrationPage.enterFirstName("Alpha");
    }

    @And("^I enter Last Name$")
    public void iEnterLastName() {
        registrationPage.enterLastName("Beta");
    }

    @And("^I select Date$")
    public void iSelectDate() {
        registrationPage.setDate();
    }

    @And("^I select Month$")
    public void iSelectMonth() {
        registrationPage.setMonth();
    }

    @And("^I select Year$")
    public void iSelectYear() {
        registrationPage.setYear();
    }

    @And("^I enter Email Id$")
    public void iEnterEmailId() {
        registrationPage.enterEmailId("alpha@ymail.com");
    }

    @And("^I enter Company Name$")
    public void iEnterCompanyName() {
        registrationPage.enterCompanyField("ABC Ltd.");
    }

    @And("^I click on Newsletter check box$")
    public void iClickOnNewsletterCheckBox() {
        registrationPage.clickOnNewsletterChkBox();
    }

    @And("^I enter Password$")
    public void iEnterPassword() {
        registrationPage.enterPassword("123456");
    }

    @And("^I enter Confirm Password$")
    public void iEnterConfirmPassword() {
    registrationPage.confirmPasswordField("123456");
    }

    @And("^I click on Register Button$")
    public void iClickOnRegisterButton() {
        registrationPage.clickonRegisterButton();
    }

    @Then("^I should Register Successfully$")
    public void iShouldRegisterSuccessfully() {
        registrationPage.verifyRegisterSuccessMessage();
    }
}
