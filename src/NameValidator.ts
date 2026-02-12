import { StringValidatorBase } from "./StringValidatorBase.js";

export class NameValidator implements StringValidatorBase {
  private minLength: number;
  private maxLength: number;

  constructor(minLength: number = 1, maxLength: number = Infinity) {
    if (minLength < 1 || maxLength < 1 || minLength > maxLength) {
      throw new Error(
        "Invalid length range: minLength and maxLength must be positive, and minLength must not exceed maxLength.",
      );
    }

    this.minLength = minLength;
    this.maxLength = maxLength;
  }

  validate(name: string): boolean {
    return this.validateNameLength(name) && this.validateNameFormat(name);
  }
  protected validateNameFormat(name: string): boolean {
    // Check for valid characters only
    const nameRegex = /^[a-zA-Z\s'.-]+$/;
    return nameRegex.test(name.trim());
  }

  protected validateNameLength(name: string): boolean {
    const trimmedName = name.trim();
    return (
      trimmedName.length >= this.minLength && trimmedName.length <= this.maxLength
    );
  }
}
