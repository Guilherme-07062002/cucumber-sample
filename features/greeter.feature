Feature: Greeter
  When you see the greeter, then you should say "Hello"

  Scenario: Greet
    Given I am a greeter
    When I see the another greeter
    Then I should say "Hello"
