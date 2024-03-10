Feature: Calculator
  As a user
  I want to use a calculator
  So that I can perform basic arithmetic

  Scenario Outline: Add two numbers
    Given I have entered <number1> and <number2> into the calculator
    When I press the add button
    Then the result should be <result> on the screen

    Examples: 
      | number1 | number2 | result |
      |      20 |      30 |     50 |
      |       5 |       3 |      8 |
      |      10 |      10 |     20 |

  Scenario Outline: Subtract two numbers
    Given I have entered <number1> and <number2> into the calculator
    When I press the subtract button
    Then the result should be <result> on the screen

    Examples: 
      | number1 | number2 | result |
      |      20 |      30 |    -10 |
      |       5 |       3 |      2 |
      |      10 |      10 |      0 |

  Scenario Outline: Multiply two numbers
    Given I have entered <number1> and <number2> into the calculator
    When I press the multiply button
    Then the result should be <result> on the screen

    Examples: 
      | number1 | number2 | result |
      |      20 |      30 |    600 |
      |       5 |       3 |     15 |
      |      10 |      10 |    100 |

  Scenario Outline: Divide two numbers
    Given I have entered <number1> and <number2> into the calculator
    When I press the divide button
    Then the result should be <result> on the screen

    Examples: 
      | number1 | number2 | result |
      |      10 |      10 |      1 |
      |      20 |       5 |      4 |
      |      30 |       3 |     10 |

  Scenario: Divide by zero
    Given I have entered 20 and 0 into the calculator
    When I press the divide button
    Then show an error message "Cannot divide by zero" on the screen
