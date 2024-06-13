import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../pageobjects/home";
import LoginPage from '../../pageobjects/login';

Given('user submits login details',(datatable:any) => {
    LoginPage.open('practice-test-login/');
    datatable.hashes().forEach((element) => {
      LoginPage.performLogin(element.username, element.password);
    });
  })

  Then('user is able to log in sucessfully', () => {
    HomePage.isLoginSuccessful();
  })