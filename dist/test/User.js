import { EmailValidator } from "../EmailValidator.js";
import { NameValidator } from "../NameValidator.js";
import { User } from "../User.js";
try {
    const user2 = new User("asem", "last@example", new NameValidator(1), new EmailValidator());
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
    const user2 = new User("asem", "asemhesham55@gmail.com", new NameValidator(1), new EmailValidator());
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
    else {
        console.error('Unknown error:', error);
    }
}
