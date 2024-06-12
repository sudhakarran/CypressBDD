import { Given, Then } from "@badeball/cypress-cucumber-preprocessor"
import banklogin from "../../pageobjects/banklogin";
import bankhome from "../../pageobjects/bankhome";

  Given('{string} login to the XYZ Bank', (username:string) => {
    banklogin.open('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    banklogin.openCustomerLogin();
    banklogin.selectUser(username);
    banklogin.clickLogin();
  })

  Then('Home page is displayed', () => {
    bankhome.isHomePagePresent();
  })

  Then('account number {string} is displayed', (acct: string) => {
    bankhome.isAccountNumberPresent(acct);
  })




