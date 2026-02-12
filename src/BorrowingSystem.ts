import { Book } from "./Book.js";
import { InventoryManager } from "./InventoryManager.js";
import { User } from "./User.js";
import { deleteFromArray } from "./utils.js";

export class BorrowingSystem{
    private borrows:Record<string,Book[]>
    private inventory:InventoryManager
    constructor(invetory:InventoryManager){
        this.borrows={}
        this.inventory=invetory
    }

    borrowBookCopy(book:Book,borrower:User){
        const copies=this.inventory.getBookCopies(book)
        if(!this.borrows[borrower._email]){
            this.borrows[borrower._email]=[]
        }
        if(copies.length===0)
        {
            console.log("there's no copy for this book")
            return
        }
        for(let copy of copies)
        {
            if (!copy.isBorrowed){
                this.borrows[borrower._email].push(copy)
                copy.isBorrowed=true
                console.log(`user wwith email ${borrower._email} borrowed copy with copyID ${copy._copyId} and isbn ${copy._copyId}`)
                return
            }
        }

    }
    borrowSpecificCopy(book:Book,borrower:User){
         if(!this.borrows[borrower._email]){
            this.borrows[borrower._email]=[]
        }

        if(book.isBorrowed){
            console.log("this copy already borrowed")
            return
        }

        this.borrows[borrower._email].push(book)
        book.isBorrowed=true


    }

    returnBook(book:Book,borrower:User){
         if(!this.borrows[borrower._email]){
            console.log("this user didn't borrow any thing")
        }

        if(!book.isBorrowed){
            console.log("this copy not borrowed")
            return
        }

       if(this.borrows[borrower._email].includes(book))
       {
         console.log("this copy not borrowed by this user")
            return
       }

        deleteFromArray(book,this.borrows[borrower._email])
        book.isBorrowed=false

    }
}