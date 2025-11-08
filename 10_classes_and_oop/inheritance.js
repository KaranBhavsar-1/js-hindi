class user {
    constructor(username){
        this.username = username
    }
    print(){
        console.log(`the UserName is:- ${this.username}`)
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new Course was Added by ${this.username}`)
    }
}

const user1 = new teacher("Hitesh", "hitesh@gmail.com","1235")
user1.print()
user1.addCourse()

const user2 = new user("karan")
user2.print()
// user2.addCourse()            //this is not thr function of user class