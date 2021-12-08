class User  {
    constructor(username,password){
        this.username = username
        this.password = password 
    }

    userCred(){
        console.log(` User ${this.username} has the password ${this.password}`)
    }
}


const Student  = new User('Avanti','amaravati#@5555')
Student.userCred()