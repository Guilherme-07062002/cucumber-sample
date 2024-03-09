Feature: Greeter
  As a user
  I want to be able to greet someone
  So that I can be polite

  Scenario: Greet with Hello
    Given I am a greeter
    When I greet someone
    Then I should say "Hello"
