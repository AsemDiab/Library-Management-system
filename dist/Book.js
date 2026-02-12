/*
Book class is class for storing information of book in one object that is only purpose
*/
export class Book {
    constructor(title, author, isbn) {
        this.isBorrowed = false;
        this.author = author;
        this.title = title;
        this.isbn = isbn;
        this.copyID = Book.booksCount++;
    }
    get _title() { return this.title; }
    get _auther() { return this.author; }
    get _isbn() { return this.isbn; }
    get _copyId() { return this.copyID; }
}
Book.booksCount = 0;
