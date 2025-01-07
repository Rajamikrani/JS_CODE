// ********************* Object ***********************
// Using Literals
// This is a simple example of an Object.
const mySym = Symbol("MYSYMBOL")
const weather = {
    "time": "12:00" ,
    degree : 11 ,
    location : "Kathmandu" ,
    feel_like : 6 ,
    mySym: mySym ,
    weather_for_weak : {
        monday: 12 ,
        tuesday: 10 ,
        wednesday : 9 ,
        thursday : 8 ,
        friday : 6 ,
        saturday : 5
    } ,
    description : "Most Sunny" 
}
// if we access a particular element in the object
console.log(weather.weather_for_weak.tuesday);
// Another way of accessing the element..
console.log(weather["description"]);
console.log(weather["mySym"]);

// 
