import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";

const itIsFriday = (today: string) => {
	return "Nope";
};
    
Given("today is Sunday", function () {
	this.today = "Sunday";
});
         
When("I ask whether it's Friday yet", function () {
	this.actualAnswer = itIsFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer: string) {
	assert.equal(this.actualAnswer, expectedAnswer);
});