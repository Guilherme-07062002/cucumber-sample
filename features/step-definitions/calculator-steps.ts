import { Given, Then, When } from "@cucumber/cucumber";
import { Calculator } from "../../src";
import assert = require("assert");

const calculator = new Calculator();

Given("I have entered {string} and {string} into the calculator", function (a: string, b: string) {
	this.a = parseInt(a);
	this.b = parseInt(b);
});

When("I press the add button", function () {
	this.result = calculator.add(this.a, this.b);
});

When("I press the subtract button", function () {
	this.result = calculator.subtract(this.a, this.b);
});

When("I press the multiply button", function () {
	this.result = calculator.multiply(this.a, this.b);
});

When("I press the divide button", function () {
	try{
		this.result = calculator.divide(this.a, this.b);
	} catch (e) {
		this.error = e;
	}
});

Then("the result should be {string} on the screen", function (expectedResult: string) {
	assert.strictEqual(this.result, parseInt(expectedResult));
});

Then("show an error message {string} on the screen", function (errorMessage: string) {
	assert.ok(this.error instanceof Error, "Expected an error to be thrown");
	assert.strictEqual(this.error.message, errorMessage);
});

