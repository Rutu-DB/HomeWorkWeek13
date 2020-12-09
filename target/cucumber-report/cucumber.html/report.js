$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/e2e.feature");
formatter.feature({
  "line": 1,
  "name": "End to End",
  "description": "As a user I want to check the full funtionality of nopCommerce website",
  "id": "end-to-end",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7574240900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to update Shopping cart successfully",
  "description": "",
  "id": "end-to-end;user-should-be-able-to-update-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    },
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on Demo NopCommerce home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computer Link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Desktop Link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I sort product list by Z TO A",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sort product list by A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart Button on Desktop page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to Build your own Computer Page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I select Processor from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select RAM from Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Vista Premium Os Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Software Commander Check Box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify that amount in total is \"$1,475.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click to add to cart Build your own Computer page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify display pop message appears",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I move to Mini Shopping Cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I amend the Item Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Update Button",
  "keyword": "Then "
});
formatter.match({
  "location": "e2eStepDefs.iAmOnDemoNopCommerceHomePage()"
});
formatter.result({
  "duration": 5308040900,
  "status": "passed"
});
formatter.match({
  "location": "e2eStepDefs.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1290525700,
  "status": "passed"
});
formatter.match({
  "location": "e2eStepDefs.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 13312129900,
  "status": "passed"
});
formatter.match({
  "location": "e2eStepDefs.iSortProductListByZTOA()"
});
formatter.result({
  "duration": 1407149400,
  "status": "passed"
});
formatter.match({
  "location": "e2eStepDefs.iSortProductListByAToZ()"
});
formatter.result({
  "duration": 3317497200,
  "status": "passed"
});
formatter.match({
  "location": "e2eStepDefs.iClickOnAddToCartButtonOnDesktopPage()"
});
formatter.result({
  "duration": 54541500,
  "status": "passed"
});
formatter.match({
  "location": "e2eStepDefs.iShouldNavigateToBuildYourOwnComputerPage()"
});
formatter.result({
  "duration": 30094823000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[contains(text(),\u0027Build your own computer\u0027)]\"}\n  (Session info: chrome\u003d87.0.4280.88)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027169.254.117.87\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57560}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 97860c97b979a1b0b2b2e460117d2c25\n*** Element info: {Using\u003dxpath, value\u003d//h1[contains(text(),\u0027Build your own computer\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat com.nopCommerce.demo.utility.Utility.getTextFromElement(Utility.java:58)\r\n\tat com.nopCommerce.demo.pages.DesktopPage.actualMessageBuildYourOwnDesktop(DesktopPage.java:111)\r\n\tat com.nopCommerce.demo.stepDefs.e2eStepDefs.iShouldNavigateToBuildYourOwnComputerPage(e2eStepDefs.java:71)\r\n\tat ✽.Then I should navigate to Build your own Computer Page(src/test/java/resources/featurefile/e2e.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "e2eStepDefs.iSelectProcessorFromDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iSelectRAMFromDropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iClickOnVistaPremiumOsRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iClickOnSoftwareCommanderCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 34
    }
  ],
  "location": "e2eStepDefs.iVerifyThatAmountInTotalIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iClickToAddToCartBuildYourOwnComputerPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iVerifyDisplayPopMessageAppears()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iMoveToMiniShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iAmendTheItemQuantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "e2eStepDefs.iClickOnUpdateButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60034054600,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 10.000\n  (Session info: chrome\u003d87.0.4280.88)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-39B32HH7\u0027, ip: \u0027169.254.117.87\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.88, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\rutun\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57560}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 97860c97b979a1b0b2b2e460117d2c25\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.nopCommerce.demo.utility.Utility.getScreenshot(Utility.java:259)\r\n\tat com.nopCommerce.demo.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.uri("src/test/java/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a User I want to login into nopcommerce website",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6857159000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 168686000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 3128416300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 30312100,
  "status": "passed"
});
formatter.after({
  "duration": 640562400,
  "status": "passed"
});
