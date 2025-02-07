/** 
 * Stack and heap of data types
 * for primitive data type like number , string etc it use stack
**/
let myName = "Raja"
// if i initialize the fullName -> myName 
// myName variable data is copied in fullName.
let fullName = myName
console.log(fullName) // It gives "Raja" as output
// Both return the same output becouse the datatypes are primitive
console.log(myName) // It gives "Raja" as output
fullName = "Raja Mikrani"
console.log(fullName) // It gives "Raja Mikrani" as output

// But In heap it gives the reference of the data
const user = {
    name: "Raja" ,
    email: "raja@gmail.com"
}
// It did not copy the data if we change the value it override the original value.
let newUser = user
newUser.name = "Raja Mikrani"
console.log(user.name)  // It gives "Raja Mikrani" as output
console.log(newUser.name) // It gives "Raja Mikrani" as output



