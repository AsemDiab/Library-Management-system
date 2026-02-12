import { EmailValidator } from "./EmailValidator.js";
import { User } from "./User.js";

export class UserManager {
    private users: Record<string, User>;
    private loggedInUsers: Set<string>;

    constructor(){
        this.users={}
        this.loggedInUsers=new Set()
    }
    
    // User registration
    signUp(name: string, email: string): User{
        if(this.users[email]!==undefined)
            throw new Error("This email already taken")
        let user:User|null;
        try{
            user=new User(name,email,new EmailValidator())
        }catch(error){
            throw error
        }
        return user
    }
    
    // User authentication
    login(email: string): User | null{
        if(this.users[email]==undefined)
        {
            console.log("This email not linked to any user")
            return null
        }

        this.loggedInUsers.add(email)
        return this.users[email]
    }
    
    // User logout
    logout(email: string): void{
        this.loggedInUsers.delete(email)

    }
    
    // Check if user is logged in
    isLoggedIn(email: string): boolean{
        return this.loggedInUsers.has(email)
    }
    
    // Get logged in user
    getLoggedInUser(email: string): User | null{
        return this.loggedInUsers.has(email)?this.users[email]:null
    }
}