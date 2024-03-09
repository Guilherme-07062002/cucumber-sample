import { Given, Then, When } from "@cucumber/cucumber";
import { Greeter } from "../../src";
import assert from "assert";
       
Given("I am a greeter", function () {
	this.greeter = new Greeter();
});
       
When("I greet someone", function () {
	this.greeting = this.greeter.sayHello();
});
       
Then("I should say {string}", function (expectedGreeting: string) {
	assert.strictEqual(this.greeting, expectedGreeting);
});