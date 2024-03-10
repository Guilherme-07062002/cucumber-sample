Feature: Calculator
  As a user
  I want to use a calculator
  So that I can perform basic arithmetic

  Scenario: Add two numbers
    Given I have entered "50" and "30" into the calculator
    When I press the add button
    Then the result should be "80" on the screen

  Scenario: Subtract two numbers
    Given I have entered "20" and "10" into the calculator
    When I press the subtract button
    Then the result should be "10" on the screen

  Scenario: Multiply two numbers
    Given I have entered "5" and "3" into the calculator
    When I press the multiply button
    Then the result should be "15" on the screen

  Scenario: Divide two numbers
    Given I have entered "20" and "4" into the calculator
    When I press the divide button
    Then the result should be "5" on the screen
