

const arr = ['rest','spread','newhampshire','argentina','mmoti']

const copiedarr = [...arr] // copying arr using spread operator


class Gooduser {
    constructor(username,password){
        this.username = username
        this.password = password
    }

    getUser(){
        console.log(`${this.username} has password = ${this.password}`)
    }
}

mobileUser = new Gooduser(username='Antartica',password = 'ant@!5635%')
mobileUser.getUser()



copiedUser = {...mobileUser}

console.log(copiedUser);