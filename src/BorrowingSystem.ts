import { Book } from "./Book.js";
import { InventoryManager } from "./InventoryManager.js";
import { User } from "./User.js";
import { deleteFromArray } from "./utils.js";

export class BorrowingSystem{
    private borrows:Record<string,Book[]>
    private inventory:InventoryManager
    constructor(inventory:InventoryManager){
        this.borrows={}
        this.inventory=inventory
    }

    borrowBookCopy(book:Book,borrower:User){
        const copies=this.inventory.getBookCopies(book)
        if(!this.borrows[borrower._email]){
            this.borrows[borrower._email]=[]
        }
        if(copies.length===0)
        {
            throw new Error("there's no copy for this book")
            
        }
        for(let copy of copies)
        {
            if (!copy.isBorrowed){
                this.borrows[borrower._email].push(copy)
                copy.isBorrowed=true
                console.log(`user with email ${borrower._email} borrowed copy with copyID ${copy._copyId} and isbn ${copy._copyId}`)
                return
            }
        }

    }
    borrowSpecificCopy(book:Book,borrower:User){
         if(!this.borrows[borrower._email]){
            this.borrows[borrower._email]=[]
        }

        if(book.isBorrowed){
           throw new Error("this copy already borrowed")
        }

        this.borrows[borrower._email].push(book)
        book.isBorrowed=true


    }

    returnBook(book:Book,borrower:User){
         if(!this.borrows[borrower._email]){
            throw new Error("this user didn't borrow any thing")
            return
        }

        if(!book.isBorrowed){
           throw new Error("this copy not borrowed")
            return
        }

       if(!this.borrows[borrower._email].includes(book))
       {
        throw new Error("this copy not borrowed by this user")
       }

        deleteFromArray(book,this.borrows[borrower._email])
        book.isBorrowed=false

    }
}