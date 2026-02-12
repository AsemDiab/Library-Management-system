export class EmailValidator {
    validate(email) {
        return this.isValidFormat(email);
    }
    isValidFormat(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
}
