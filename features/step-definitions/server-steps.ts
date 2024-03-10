import { Given, Then, When } from "@cucumber/cucumber";
import { server } from "../../src/server";
import assert = require("assert");

Given("I have a running Express server", async function () {
	this.server = server;
});

When("I send a GET request to {string} endpoint", async function(endpoint: string) {
	const response = await fetch(`http://localhost:3000${endpoint}`);
	this.responseBody = await response.json();
	this.responseStatus = response.status;
});

Then("the response should be {string}", function (expectedResult: string) {
	assert.strictEqual(this.responseBody.message, expectedResult);
});

Then("the status code should be {int}", function (expectedStatus: number) {
	assert.strictEqual(this.responseStatus, expectedStatus);
});

