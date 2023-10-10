// const userName='Mobi'

//userName='MaxXx' we cant change const value as we let

// let age=30;

// age=35;
//-----------Basic add Function----------------

// function add (a: number, b: number){
//   let result ;
//   result =a+b;
//   return result;

// }

// console.log(result);

//-----------Arrow Function----------------

// const add=(a:number,b:number)=>{
//   return a+b;
// }

// console.log(add(9,5));

//if you have only one expression then you can omit the curly braces and also can remove the return but the result of that on expression will be automatily will return 
//just a shorter way to use arrow function its valid only with on expression

// const add=(a:number,b:number)=>a+b;


// console.log(add(9,5));

const hobbies = [ 'sport', 'Cooking']
const activeHobbies=[ 'hiking']

activeHobbies.push(...hobbies)

// console.log(activeHobbies);

const  person ={
  firstName:'max',
  age:29,
}


const copiedPerson={
  ...person // spread operator is used here   
}

const add =(...numbers:number[])=>{
  return numbers.reduce((curResult,curValue)=>{
    return curResult+curValue
  },0)
}

const addedNumber=add(5,8,9,6,2.8)
console.log(addedNumber);


// array deStructuring

const [hobby1, hobby2, ...remainingHobbies] =hobbies

console.log(hobbies,hobby1 ,hobby2);//restructuring is creating new array but not changing the orignal one

// deStructuring Object


const {firstName: userName, age }= person;

console.log(userName,age, person);

