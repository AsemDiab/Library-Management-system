import { EmailValidator } from "../EmailValidator.js";
import { User } from "../User.js";
try {
    const user2 = new User("asem", "last@example", new EmailValidator());
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error('Unknown error:', error);
    }
}
try {
    const user2 = new User("asem", "asemhesham55@gmail.com", new EmailValidator());
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error('Unknown error:', error);
    }
}
