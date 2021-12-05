

const sliceText = (arg) => {
     const promised = new Promise((s,f)=>{


        setTimeout( () =>{
            s(arg+' 1 ')
        },5)

     })
     return promised
   
}



sliceText('hello world')
.then(data => sliceText(data))
.then(data => sliceText(data))
.then(data => console.log(data))
