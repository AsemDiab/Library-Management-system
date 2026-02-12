export class Library {
    constructor(inventory, borrowingSystem) {
        this.inventory = inventory;
        this.borrowingSystem = borrowingSystem;
    }
    addBook(newBook) {
        this.inventory.addBook(newBook);
    }
    removeBook(book) {
        this.inventory.removeBook(book);
    }
    get _book() {
        return this.inventory._books;
    }
    borrowBookCopy(book, user) {
        this.borrowingSystem.borrowBookCopy(book, user);
    }
    returnBook(book, user) {
        this.borrowingSystem.returnBook(book, user);
    }
    borrowSpecificCopy(book, user) {
        this.borrowingSystem.borrowSpecificCopy(book, user);
    }
    get borrowingOperations() {
        return this.borrowingSystem.borrowingOperations;
    }
}
