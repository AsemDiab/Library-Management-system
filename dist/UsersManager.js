import { EmailValidator } from "./EmailValidator.js";
import { User } from "./User.js";
export class UsersManager {
    constructor() {
        this.users = {};
        this.loggedInUsers = new Set();
    }
    // User registration
    signUp(name, email) {
        console.log("this.users[email]", this.users[email]);
        if (this.users[email] != undefined)
            throw new Error(`Registration failed: Email '${email}' is already registered. Please use a different email or try logging in.`);
        let user;
        try {
            user = new User(name, email, new EmailValidator());
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
