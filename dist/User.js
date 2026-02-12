/*

class User for Users entity

*/
export class User {
    constructor(name, email, emailValidator) {
        if (!emailValidator.validate(email)) {
            throw new Error(email + " email");
        }
        if (name.length === 0) {
            throw new Error(" :Invalid name: the name shouldn't be empty");
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
