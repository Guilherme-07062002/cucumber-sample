import { When, Then } from "@cucumber/cucumber";
import { Greeter } from '../../src';

interface MyWorld {
  whatIHeard: string;
}

When("the greeter says hello", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then("I should have heard {string}", function (this: MyWorld, expected: string) {
  if (this.whatIHeard !== expected) {
    throw new Error(`I heard ${this.whatIHeard}`);
  }
});