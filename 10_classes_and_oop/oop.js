const user = {
    name: "Karan",
    id: 3,
    loggedIn: true,

    getDetails: function(){
        console.log("ok ok  fine condom")
        console.log(this.name)
    }
}

user.getDetails()
// console.log(user)
function User(name,id,loggedIn){
    this.name = name
    this.id = id
    this.loggedIn = loggedIn
    return this
}

const user1 = new User("don",11,false)
const user2 = new User("golu",1341,true)

console.log(user1);
console.log(user2);
