export class EmailValidator {
  validate(email: string): boolean {
    return this.isValidFormat(email);
  }

  protected isValidFormat(email: string): boolean {
    const regex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
  }
}
