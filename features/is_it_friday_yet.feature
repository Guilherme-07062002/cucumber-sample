Feature: Is it Friday yet?
  As a user
  I want to know if it's Friday yet
  So that I can plan my weekend

  Scenario: Sunday isn't Friday
    Given today is "Sunday"
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  Scenario: Today is Friday
    Given today is "Friday"
    When I ask whether it's Friday yet
    Then I should be told "TGIF"
