/*

class User for Users entity

*/

import { EmailValidator } from "./EmailValidator.js";

export class User {
  private name: string;

  private email: string;

  constructor(
    name: string,
    email: string,
    emailValidator: EmailValidator,
  ) {
    if (!emailValidator.validate(email)) {
      throw new Error(email + " email");
    }
    if (name.length===0) {
      throw new Error(" :Invalid name: the name shouldn't be empty");
    }

    this.name = name;

    this.email = email;
  }
  get _name():string{
    return this.name
  }
  get _email():string{
    return this.email
  }
}
