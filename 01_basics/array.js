// ******************** Arrays *************************
const marvel_heros = ["IronMan" , "Thor" , "Captain America"]
const dc_heros = ['Superman' , "Batman" , "Flash"]
dc_heros.push("Shazam")
// this statement push all the dc_heros array into the marvel_heros array.
// marvel_heros.push(dc_heros) 
// console.log(marvel_heros);
/*
output 
[
  'IronMan',
  'Thor',
  'Captain America',
  [ 'Superman', 'Batman', 'Flash' ]
]
*/
// This statement return the new Array 
/*
Output
[ 'IronMan', 'Thor', 'Captain America', 'Superman', 'Batman', 'Flash' ]
*/
// const dc_marvel_heros = marvel_heros.concat(dc_heros)
// console.log(dc_marvel_heros);

// Another Way to combine the Array.
// It return the same as concat mrthod.
// const all_heros = [...marvel_heros , ...dc_heros]
// console.log(all_heros)

// If We have to make an new Array using variable and existing array 
const score1 = 100
const score2 = 200
const score3 = 300
const makeArr = Array.of(score1 , score2 , score3 , marvel_heros , dc_heros)
console.log(makeArr)
/*
Output
[
  100,
  200,
  300,
  [ 'IronMan', 'Thor', 'Captain America' ],
  [ 'Superman', 'Batman', 'Flash' ]
]
*/





