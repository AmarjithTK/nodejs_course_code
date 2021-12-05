
// objects are created using curly braces with

// ***** key, value pairs 

const object_name = {};


const User = {
    name:'amar_nath',
    age:147,
    height:'9 feet',
    score : 1200
}

console.log(User);


// var name = 'Max'


const thisKeyword = {
    name:'Amar',
    age:21,
    greetArrow : () => {
        console.log('Hi '+this.name); // in arrow func 

        //  this.property ---> refers to global js variables
    },
    greetNormal : function () {
        console.log("Hi "+ this.name);
    },
    greetObject(){
        console.log('Hi '+ this.name);
    }
}

this.name = 'Max' // global node variable ?? or environmental variable

Function.call([
    thisKeyword.greetArrow(), // what is wrong with arrow func ?? why not this.name is working
    thisKeyword.greetNormal(),
    thisKeyword.greetObject()
])
