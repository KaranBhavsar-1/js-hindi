class user {
    constructor(username){
        this.username = username
    }

    print(){
        console.log(`[Username: ${this.username}]`);
        
    }
    //Q1) as soon as the user is there create an Unique ID for the user
    static createId(){
        return `123`
    }
    // "Static" doent ally user to accept it
}

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }

}

const karan = new user("Karan")
// console.log(karan.createId())

const arjun = new teacher("arjun","arjun@gmail.com")
// console.log(arjun.createId())
// still doent allow the other class to access it