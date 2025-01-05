// Number Conversion...
let score = "30"
let scoreNumber = Number(score)
// console.log(typeof(scoreNumber))
// "30" => 30 string converted nto number

// but if we try some different approach like
let newScore = "30abc"
let newScoreNumber = Number(newScore)
// console.log(typeof(newScoreNumber)) // It converts into number
// but think what the value is.
// // lets print the value.
// console.log(newScoreNumber) // It returns the value is NaN means Not a Number.
// "30abc" => returns NaN.

// Let's try for other data types.

// Like Boolean Conversion...
let clicked = "true"
// console.log(clicked) // It return true
let stringClicked = clicked
let numberClicked = Boolean(5)
// console.log(stringClicked)  // It return the true.
// console.log(numberClicked)  // It returns True.
/* 
So the investigation is that
"true" => true ,
"" => false ,
1 to any number if we convert to boolean it return true
if it's 0 then False.
*/

let click = undefined
let undefinedClick = Boolean(click)
// console.log(undefinedClick) // if the value is undefined or null then 
// null => False && undefined => false..

// String Conversion...
let num = 12
let numString = String(num)
// console.log(numString + " => " + typeof(numString)) 

let no = null
let nullString = String(no)
console.log(nullString + " => " + typeof(nullString))


