import { User } from "./User.js";
export class UsersManager {
    // Constructor
    constructor(nameValidator, emailValidator) {
        this.users = {};
        this.loggedInUsers = new Set();
        this.emailValidator = emailValidator;
        this.nameValidator = nameValidator;
    }
    // User registration
    signUp(name, email) {
        if (this.users[email] != undefined)
            throw new Error(`Registration failed: Email '${email}' is already registered. Please use a different email or try logging in.`);
        let user;
        try {
            user = new User(name, email, this.nameValidator, this.emailValidator);
            this.users[email] = user;
        }
        catch (error) {
            throw error;
        }
        return user;
    }
    // User authentication
    login(email) {
        if (this.users[email] === undefined) {
            throw new Error(`Login failed: No account found for email '${email}'. Please check your email or register for a new account.`);
        }
        this.loggedInUsers.add(email);
        return this.users[email];
    }
    // User logout
    logout(email) {
        this.loggedInUsers.delete(email);
    }
    // Check if user is logged in
    isLoggedIn(email) {
        return this.loggedInUsers.has(email);
    }
    // Get logged in user
    getLoggedInUser(email) {
        return this.loggedInUsers.has(email) ? this.users[email] : null;
    }
}
