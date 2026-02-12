/*

class User for Users entity

*/
export class User {
    constructor(name, email, emailValidator) {
        if (!emailValidator.validate(email)) {
            throw new Error(email + " :Invalid enmail");
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
