export class EmailValidator {
    validate(email) {
        return this.isValidFormat(email.trim()) && this.isValidLength(email.trim());
    }
    isValidFormat(email) {
        const regex = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
        return regex.test(email);
    }
    isValidLength(email) {
        return email.trim().length >= 4;
    }
}
