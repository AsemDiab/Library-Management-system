export class Library {
    constructor(inventory, borrowingSystem, usersManager) {
        this.inventory = inventory;
        this.borrowingSystem = borrowingSystem;
        this.usersManager = usersManager;
    }
    addBook(newBook) {
        try {
            this.inventory.addBook(newBook);
            return true;
        }
        catch {
            return false;
        }
    }
    removeBook(book) {
        try {
            this.inventory.removeBook(book);
            return true;
        }
        catch {
            return false;
        }
    }
    get _book() {
        return this.inventory._books;
    }
    borrowBookCopy(book, user) {
        if (!user || !this.usersManager.isLoggedIn(user._email))
            return false;
        try {
            this.borrowingSystem.borrowBookCopy(book, user);
            return true;
        }
        catch {
            return false;
        }
    }
    returnBook(book, user) {
        if (!user || !this.usersManager.isLoggedIn(user._email))
            return false;
        try {
            this.borrowingSystem.returnBook(book, user);
            return true;
        }
        catch {
            return false;
        }
    }
    borrowSpecificCopy(book, user) {
        if (!user || !this.usersManager.isLoggedIn(user._email))
            return false;
        if (book.isBorrowed)
            return false;
        try {
            this.borrowingSystem.borrowSpecificCopy(book, user);
            return true;
        }
        catch {
            return false;
        }
    }
    get borrowingOperations() {
        return this.borrowingSystem.borrowingOperations;
    }
    login(email) {
        try {
            return this.usersManager.login(email);
        }
        catch {
            return null;
        }
    }
    signup(name, email) {
        try {
            this.usersManager.signUp(name, email);
            return true;
        }
        catch {
            return false;
        }
    }
    logout(email) {
        try {
            this.usersManager.logout(email);
            return true;
        }
        catch {
            return false;
        }
    }
}
