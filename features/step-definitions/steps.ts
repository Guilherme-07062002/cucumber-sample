import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";

// TGIF - Thank God It's Friday
const itIsFriday = (today: string) => {
	return today === "Friday" ? "TGIF" : "Nope";
};
    
Given("today is Sunday", function () {
	this.today = "Sunday";
});

Given("today is Friday", function () {
	this.today = "Friday";
});
         
When("I ask whether it's Friday yet", function () {
	this.actualAnswer = itIsFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer: string) {
	assert.strictEqual(this.actualAnswer, expectedAnswer);
});