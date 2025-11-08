function setUsername(username){
    console.log("called", username);

    // complex DB  calls    
    this.username = username
    console.log("called", username);

}

function createUser(username, email,password){
    setUsername.call(this,username)
    // this.username = username
    this.email = email
    this.password = password
}

function User(username, email,password){
    setUsername(username)
    // this.username = username
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@email.com","123456")
console.log((chai));

// const chai = new User("chai","chai@email.com","123456")
// console.log((chai));