/*

class User for Users entity

*/

import { EmailValidator } from "./EmailValidator.js";
import { NameValidator } from "./NameValidator.js";
import { StringValidatorBase } from "./StringValidatorBase.js";

export class User {
  private name: string;

  private email: string;

  constructor(
    name: string,
    email: string,
    nameValidator: StringValidatorBase,
    emailValidator: StringValidatorBase,
  ) {
    if (!emailValidator.validate(email)) {
      throw new Error(`Invalid email format: ${email}. Please provide a valid email address.`);
    }
    if (!nameValidator.validate(name)) {
      throw new Error("Invalid name: Name cannot be empty. Please provide a valid name.");
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
