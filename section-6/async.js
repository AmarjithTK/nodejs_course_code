

import fetch from "node-fetch";
const userfunc = async ()=>{


    const userdata = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    console.log(userdata.json())
    return userdata.json(); // async func always returns a promise ???

    // what does an promise contains ? resolved , rejected !!

    // after doing a long time consuming operation , was it resolved , or resulted in a err ???


}


userfunc().then( data =>{
    console.log(data)}
)