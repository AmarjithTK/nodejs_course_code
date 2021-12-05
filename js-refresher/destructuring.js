


const person = {

    name:'Manohar pareekar',
    age:500,
    job:'slavery',

    getFamily(){
        console.log('has , mother.father,wife.himself,daughter.son')
    }


}


const putNameAge = ({name,age}) => {

    console.log('Name is '+name,', age is - '+age);

}

putNameAge(person)

const {name,job} = person

console.log(name+' and '+job)