import { Book } from "./Book.js";
import { BorrowingSystem } from "./BorrowingSystem.js";
import { InventoryManager } from "./InventoryManager.js";
import { User } from "./User.js";

export class Library {
    private inventory:InventoryManager
    private borrowingSystem:BorrowingSystem

    constructor(inventory:InventoryManager,borrowingSystem:BorrowingSystem){
        this.inventory=inventory
        this.borrowingSystem=borrowingSystem

    }

    addBook(newBook:Book):boolean{
        try{
            
            this.inventory.addBook(newBook)
            return true
        }
        catch{
            return false
        }
    }

    removeBook(book:Book):void{
        this.inventory.removeBook(book)
    }

    get _book():{ isbn: string; copies: Book[] }[]{
        return this.inventory._books
    }

    borrowBookCopy(book:Book,user:User):void{
        this.borrowingSystem.borrowBookCopy(book,user)
    }

    returnBook(book:Book,user:User):void{
        this.borrowingSystem.returnBook(book,user)
    }
    borrowSpecificCopy(book:Book,user:User):void{
        this.borrowingSystem.borrowSpecificCopy(book,user)
    }
    get borrowingOperations():Record<string,Book[]>{
        return this.borrowingSystem.borrowingOperations
    }
}
