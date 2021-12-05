
// array.reduce(callback,firstvalue)

// const arrayR = array.reduce((previousvalue,currentvalue)=>{

//     return previousvalue + currentvalue; // any operation

// },previousvale_starting_val)



// can use const instead of let


const numbers = [5,7,9,15,89,111]


//using foreach to add numbers
let sum = 0
numbers.forEach(number => {
    sum+=number
})

const numbersR = numbers.reduce((totalvalue,number,index,array)=>{
    return totalvalue + number;
},15)

console.log(numbersR);

//  -------------------------------

const sumSquares = [1,3,9];

const sumSquaresR = sumSquares.reduce((squareSumVal,eacharrItem)=>{
    return squareSumVal + Math.pow(eacharrItem,2)
},0)


console.log(sumSquaresR)


//  -------------------------------


const studentUK = [
    {name:'aaron',subject:'math'},
    {name:'surya',subject:'cs'},
    {name:'keerthi',subject:'cs'},
    {name:'kanishka',subject:'math'},
    {name:'vineesh',subject:'bcom'},
    {name:'jerry',subject:'bcom'},
    {name:'georgy',subject:'bsc'},
]


const studentsUKsubjectWiseR = studentUK.reduce((resultingArray,student) => {
    let subject  = student.subject
    if(resultingArray[subject] == null){
        resultingArray[subject] = []
    }
    resultingArray[subject].push(student.name)
    return resultingArray


},{})

console.log(studentsUKsubjectWiseR)


//  -------------------------------

