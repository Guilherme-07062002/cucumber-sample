Feature: Express API
  As a backend developer
  I want to create an API
  So that I can interact with the frontend

  Background: 
    Given I have a running Express server

  Scenario: Test the API
    When I send a GET request to "/" endpoint
    Then the response should be "Hello World"
    And the status code should be 200
