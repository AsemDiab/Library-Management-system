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
      throw new Error(email + " :Invalid enmail");
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
