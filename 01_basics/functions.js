// *********************** Functions ***************************
// Simple function examples..
function add(num1 , num2){
    return num1 + num2
}

const addNumber = add(3 , 6)
// console.log(addNumber)

// If we have multiple parameter then we have to do this...
function addAnyNumber(...num){
    return num
}
// console.log(addAnyNumber(200 , 231 , 678));

// Using Object with function...
const users = {
    id : "123" ,
    email: "raja@gmail.com" ,
    password: "raja123"
}

function handleObject(anyObject) {
    console.log('User Id is ' + anyObject.id + 
        '\nUser Email ' + anyObject.email)
}

handleObject(users)

// We can also pass the argument like object.. and we can also pass the array...
handleObject({
    id : "213" ,
    email : "raja@google.com"
})