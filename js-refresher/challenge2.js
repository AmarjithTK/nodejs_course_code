const a ='15PM'


console.log(a.slice(2,4))



const num = '07'

console.log(parseInt(num));

function playingWithNumbers(arr, queries) {
    // Write your code here
    
    const resultarr = []
    queries.forEach(q => {
       
        // const sum = q*arr.length + arr.reduce((start,elem)=>{
        //     return start + elem
        // },0)
        for(let i =0;i<arr.length;i++)
        arr[i] += q

        const sum = arr.reduce((start,elem)=>{
            start+= Math.abs(elem)
            return start
        },0)
        resultarr.push(sum)
        
        
        
    })
    // console.log(resultarr);
    
    return resultarr
    

}


// console.log(playingWithNumbers([-1,2,-3],[1,-2,3]));




function find(inte){
    if(inte/5 == 0)
    return true
    else return false
}

console.log(find(6));


// let arra = [5,7,9,0]

// arra.forEach((elem,index)=>{
//     arra[index] += 1;
// })

// console.log(arra);