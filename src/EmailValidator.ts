import { StringValidatorBase } from "./StringValidatorBase.js";

export class EmailValidator implements StringValidatorBase {


  validate(email: string): boolean {
    return this.isValidFormat(email.trim())&&this.isValidLength(email.trim());
  }

  protected isValidFormat(email: string): boolean {
    const regex: RegExp = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

    return regex.test(email);
  }
  isValidLength(email: string): boolean {
    return email.trim().length >= 4;
  }

}
