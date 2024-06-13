Feature: Web scenario with outline

@outline
Scenario Outline:  Bank account validation
    Given "<user>" login to the XYZ Bank
    Then Home page is displayed
    And account number "<acct>" is displayed

    Examples:
    | user             | acct  |
    | Hermoine Granger | 1001  |
    | Harry Potter     | 1004  |