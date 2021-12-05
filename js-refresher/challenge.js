function plusMinus(arr) {
    // Write your code here
    let array = [0,0,0]
    arr.forEach(elem => {
        console.log(elem);
        if(elem > 0) array[0]++
        else if(elem<0) array[1]++
        else array[2]++
    })
    
    const a = array.map(elem => (elem/arr.length))


   
    console.log(a,'this works')
    

}


plusMinus([1,-1,2,-3,5,0,0,7])



 



var x;

let a = ['','','  ','17']


a.forEach(a=>{
    x+=a
})

console.log(x);








 