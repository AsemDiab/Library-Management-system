/*

class User for Users entity

*/
export class User {
    constructor(name, email, nameValidator, emailValidator) {
        if (!emailValidator.validate(email)) {
            throw new Error(`Invalid email format: ${email}. Please provide a valid email address.`);
        }
        if (!nameValidator.validate(name)) {
            throw new Error("Invalid name: Name cannot be empty. Please provide a valid name.");
        }
        this.name = name;
        this.email = email;
    }
    get _name() {
        return this.name;
    }
    get _email() {
        return this.email;
    }
}
