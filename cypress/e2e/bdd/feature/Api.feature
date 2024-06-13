Feature: API(POST, UPDATE) scenarios

@postapi @apitest
Scenario: POST - Create new user
    Given I send a request to create new user
    Then verify user is created

@updateapi @apitest
Scenario: UPDATE - Update existing user
    Given I send a request to update user "2"
    Then verify user is updated