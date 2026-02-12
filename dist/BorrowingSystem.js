import { deleteFromArray } from "./utils.js";
export class BorrowingSystem {
    constructor(inventory) {
        this.borrows = {};
        this.inventory = inventory;
    }
    borrowBookCopy(book, borrower) {
        const copies = this.inventory.getBookCopies(book);
        if (!this.borrows[borrower._email]) {
            this.borrows[borrower._email] = [];
        }
        console.log("copies: ", copies.length);
        if (copies.length === 0) {
            throw new Error("there's no copy for this book");
        }
        for (let copy of copies) {
            if (!copy.isBorrowed) {
                this.borrows[borrower._email].push(copy);
                copy.isBorrowed = true;
                console.log(`user with email ${borrower._email} borrowed copy with copyID ${copy._copyId} and isbn ${copy._isbn}`);
                return;
            }
        }
    }
    borrowSpecificCopy(book, borrower) {
        if (!this.borrows[borrower._email]) {
            this.borrows[borrower._email] = [];
        }
        if (book.isBorrowed) {
            throw new Error("this copy already borrowed");
        }
        this.borrows[borrower._email].push(book);
        book.isBorrowed = true;
    }
    returnBook(book, borrower) {
        if (!this.borrows[borrower._email]) {
            throw new Error("this user didn't borrow any thing");
        }
        if (!book.isBorrowed) {
            throw new Error("this copy not borrowed");
        }
        if (!this.borrows[borrower._email].includes(book)) {
            throw new Error("this copy not borrowed by this user");
        }
        deleteFromArray(book, this.borrows[borrower._email]);
        book.isBorrowed = false;
    }
    get borrowingOperations() {
        return this.borrows;
    }
}
