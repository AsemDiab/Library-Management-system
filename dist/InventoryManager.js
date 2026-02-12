export class InventoryManager {
    constructor() {
        this.books = {};
    }
    addBook(book) {
        if (!this.books[book._isbn]) {
            this.books[book._isbn] = {};
        }
        this.books[book._isbn][book._copyId] = book;
    }
    removeBook(book) {
        delete this.books[book._isbn][book._copyId];
    }
    checkExist(book) {
        return this.books[book._isbn]?.[book._copyId] != undefined;
    }
    getBookCopies(book) {
        return this.books[book._isbn] ? Object.values(this.books[book._isbn]) : [];
    }
    get _books() {
        return Object.keys(this.books)
            .map((isbn) => {
            const copies = Object.values(this.books[isbn]);
            return { isbn, copies };
        });
    }
}
