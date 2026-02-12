export class NameValidator {
    constructor(minLength = 1, maxLength = Infinity) {
        if (minLength < 1 || maxLength < 1 || minLength > maxLength) {
            throw new Error("Invalid length range: minLength and maxLength must be positive, and minLength must not exceed maxLength.");
        }
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    validate(name) {
        return this.validateNameLength(name) && this.validateNameFormat(name);
    }
    validateNameFormat(name) {
        // Check for valid characters only
        const nameRegex = /^[a-zA-Z\s'.-]+$/;
        return nameRegex.test(name.trim());
    }
    validateNameLength(name) {
        const trimmedName = name.trim();
        return (trimmedName.length >= this.minLength && trimmedName.length <= this.maxLength);
    }
}
