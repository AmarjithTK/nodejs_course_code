
const events = ['jallian walla bag','cuban missile crisis','panipat wars','voyage of magellan']



// map method

const eventsMapped = events.map(event => 'event : ' + event);

console.log(events,'\n',eventsMapped);



// filter method


const a = [1,9,7,6]
const b = [1,9]

c = a.filter(as => {
    if(b.includes(as))
    return as
}) // [1,9]

console.log(c) // new array based on the condition


// join method


const eventsJoinedString = events.join('++')
console.log(eventsJoinedString);



// splice - get a new array from splice(startIndex,count)

const splicedArray = events.splice(0,4);
console.log(splicedArray)


// concat ( js arrays are dynamic or hetrogenous )

const array1 = [1,7,90]
const array2 = [1,9,3]
const array3 = [1,66,76]

concatArray = array1.concat(array2,array3)

console.log(concatArray); [1,7,90,1,9,3,1,66,76]


//

