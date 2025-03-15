// // Creating Promises
// const promise1 = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async Task 1 Completed");
//         resolve()
//     } , 2000);
// });
 
// // Consuming Promises
// promise1.then(function(){
//     console.log("Promises Consumed...")
// })

// // Second Approach
// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         resolve()
//         console.log("Async Task 2 Complete")
      
//     } , 2000);
// }).then(function() {
//     console.log("Promise 2 completed...")
// });

// // Third approach : Passing parameter in resolve method.
// const promise3 = new Promise(function(resolve , reject){
//     setTimeout(function() {
//         console.log("Async Task 3 Completed...")
//         resolve({
//             username : "Raja Mikrani" ,
//             email : "rajamikrani12@gmail.com"
//         })
//     } , 2000)
// }).then(function(user){
//     console.log("Promise 3 Completed")
//     console.log(user)

// })

// // Fourth Approach : handling Errors..
// const Promise4 = new Promise(function(resolve , reject) {
//     setTimeout(function(){
//         console.log("Async Task 4 Running..");
//         let error = true
//         if (!error) {
//             resolve({
//                 username : "Raja mikrani" ,
//                 password : "asd123"
//             })
//         } else {
//            console.log("Error : Something went Wrong");
//         }
//     } , 1000);
// })
//  Promise4
// .then((user) => {
//     console.log(user)
//     return user.username;
// })
// .then(function(username){
//     console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// })

// Simple Example of using async and await
// const promiseFive = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log("Async Task 5 Running...");
//         let error = false;
//         if(error){
//             resolve("Promise Resolved")
//         }else {
//             reject("Promise Rejected")
//         }
//     } ,1000)
// })

// async function consumedPromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// consumedPromiseFive()

// // fetch data from api using async and await
// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("Error :" , error);
//     }
 
// }
// getAllUsers()

// Simple Example of using then method...
const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async Task 5 Running...");
        let error = false;
        if(!error){
            resolve("Promise Resolved")
        }else {
            reject("Promise Rejected")
        }
    } ,1000)
})
promiseFive
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

// // fetch data from api using then and catch method..
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
.finally("Finally Promise ended")
