import { Given, Then, When } from "@cucumber/cucumber";
import { Greeter } from "../../src";
import assert from "assert";
       
Given("I am a greeter", function () {
	this.greeter = new Greeter();
});
       
When("I see the another greeter", function () {
	this.anotherGreeter = new Greeter();
});
       
Then("I should say {string}", function (string) {
	assert.strictEqual(this.greeter.sayHello(), string);
});