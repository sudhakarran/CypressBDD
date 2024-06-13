Feature: Web scenario with datatable

@datatable
Scenario: Successful Login
    Given user submits login details
        |username|password|
        |student|Password123|
    Then user is able to log in sucessfully