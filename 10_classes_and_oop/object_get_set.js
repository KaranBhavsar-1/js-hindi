const User = {
    _email:"karan@gmail.com",
    _password: "abcdEF",

    get email(){
        return this._email.toUpperCase()
    },   
    set email(value){
        return this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },   
    set password(value){
        return this._password = value
    },
}

const chai = Object.create(User)
console.log(chai.email);
console.log(chai.password);
