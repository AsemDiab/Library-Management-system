import { Book } from "./Book.js";
import { BorrowingSystem } from "./BorrowingSystem.js";
import { InventoryManager } from "./InventoryManager.js";
import { User } from "./User.js";
import { UsersManager } from "./UsersManager.js";

export class Library {
  private inventory: InventoryManager;
  private borrowingSystem: BorrowingSystem;
  private usersManager:UsersManager

  constructor(inventory: InventoryManager, borrowingSystem: BorrowingSystem,usersManager:UsersManager) {
    this.inventory = inventory;
    this.borrowingSystem = borrowingSystem;
    this.usersManager=usersManager
  }

  addBook(newBook: Book): boolean {
    try {
      this.inventory.addBook(newBook);
      return true;
    } catch {
      return false;
    }
  }

  removeBook(book: Book): boolean {
    try {
      this.inventory.removeBook(book);
      return true;
    } catch {
      return false;
    }
  }

  get _book(): { isbn: string; copies: Book[] }[] {
    return this.inventory._books;
  }

  borrowBookCopy(book: Book, user: User): boolean {

    if(!user||!this.usersManager.isLoggedIn(user._email))
        return false
    try {
      this.borrowingSystem.borrowBookCopy(book, user);
    
      return true;
    } catch {
      return false;
    }
  }

  returnBook(book: Book, user: User): boolean {
    if(!user||!this.usersManager.isLoggedIn(user._email))
        return false
    try {
      this.borrowingSystem.returnBook(book, user);
      return true;
    } catch {
      return false;
    }
  }
  borrowSpecificCopy(book: Book, user: User): boolean {
    if(!user||!this.usersManager.isLoggedIn(user._email))
        return false
    if(book.isBorrowed)
      return false
    try {
      this.borrowingSystem.borrowSpecificCopy(book, user);
      return true;
    } catch {
      return false;
    }
  }
  get borrowingOperations(): Record<string, Book[]> {
    return this.borrowingSystem.borrowingOperations;
  }

  login(email: string):User|null{
    try{
        return this.usersManager.login(email)
    }catch{
        return null
    }
  }

  signup(name: string, email: string):boolean{
    try{
        this.usersManager.signUp(name,email)
        return true
    }catch{
        return false
    }

    
  }

  logout(email: string):boolean{
        try{
            this.usersManager.logout(email)
            return true
        }catch{
            return false
        }
    }

}
