export class EmailValidator {
    constructor() { }
    validate(email) {
        return this.isValidFormate(email);
    }
    isValidFormate(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
}
