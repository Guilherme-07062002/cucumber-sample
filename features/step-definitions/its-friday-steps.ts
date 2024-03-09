import { Given, When, Then } from "@cucumber/cucumber";
import { itIsFriday } from "../../src";
import assert from "assert";
         
Given("today is {string}", function (day: string) {
	this.today = day;
});

When("I ask whether it's Friday yet", function () {
	this.actualAnswer = itIsFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer: string) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});

