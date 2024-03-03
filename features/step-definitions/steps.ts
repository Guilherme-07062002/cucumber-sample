import { When, Then } from "@cucumber/cucumber";
import { Greeter } from '../../src';

interface MyWorld {
  whatIHeard: string;
}

When("the greeter says hello", function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});
