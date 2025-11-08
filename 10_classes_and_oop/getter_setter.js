class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        // return this._password.toUpperCase()
        return `${this._email} Karan`
    }
    set email(value){
        return this._email =value.toUpperCase()
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password} Karan`
    }
    set password(value){
        return this._password =value.toUpperCase()
    }
}

const karan = new User("Karan@3123gmail.com", "abcDE")
console.log(karan.password);
console.log(karan.email);
