import { Given, Then, When } from "@cucumber/cucumber";
import { Calculator } from "../../src";
import assert = require("assert");

const calculator = new Calculator();

Given("I have entered {string} and {string} into the calculator", function (a: string, b: string) {
	this.a = parseInt(a);
	this.b = parseInt(b);
});

When("I press the add button", function () {
	this.sumResult = calculator.add(this.a, this.b);
});

Then("the result should be {string} on the screen", function (expectedSumResult: string) {
	assert.strictEqual(this.sumResult, parseInt(expectedSumResult));
});

