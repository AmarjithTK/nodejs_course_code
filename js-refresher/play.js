

const myname = 'Amar';
let age = 18;
const hobbies = ' cricket,coding,running and swimming';


// const vs let ? const --> we never plan to change it


// var,let can be used accordingly

function charUser (username,userage,userhobbies) {
    return (
    'Hi , my name is '+
    username+
    `. I am ${userage} years old. ` +
    'My hobbies are' +
    userhobbies
    );

}


const describeUser = charUser(myname,age,hobbies);

console.log(describeUser)


// primitive vs reference types


// primitive cannot be modified in any way if const keyword is used eg : int,string,bool

// reference types can , array.push(),pop(),