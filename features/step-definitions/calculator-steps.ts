import { Given, Then, When } from "@cucumber/cucumber";
import { Calculator } from "../../src";
import assert = require("assert");

const calculator = new Calculator();

Given("I have entered {int} and {int} into the calculator", function (a: number, b: number) {
	this.a = a;
	this.b = b;
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

Then("the result should be {int} on the screen", function (expectedResult: number) {
	assert.strictEqual(this.result, expectedResult);
});

Then("show an error message {string} on the screen", function (errorMessage: string) {
	assert.ok(this.error instanceof Error, "Expected an error to be thrown");
	assert.strictEqual(this.error.message, errorMessage);
});

