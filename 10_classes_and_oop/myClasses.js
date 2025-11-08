class user {
    constructor(username, id, password){
        this.username = username
        this.id = id
        this.password = password

        // console.log(`the details are:- [Username: ${username}] , [Id: ${id}] , [Password: ${password}]`)
    }

    givePassword(){
        console.log(`The Password is:- [${this.password}]`)
    }
    giveId(){
        console.log(`The ID is:- [${this.id}]`)
    }
    giveUsername(){
        console.log(`The UserName is:- [${this.username}]`)
    }
    giveAllInfo(){
        // console.log(`The Password is:- [${this.username}]`)
        console.log(`The details are:- [Username: ${this.username}] , [Id: ${this.id}] , [Password: ${this.password}]`)
    }
    toCapital(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new user("karan",1,"karan password")
// const user2 = new user("aefgh",1,"karan password")
// const user3 = new user("wderd",1,"karan password")
user1.giveAllInfo()
user1.givePassword()
user1.giveId()
user1.giveUsername()
console.log(user1.toCapital())
user1.giveUsername()
