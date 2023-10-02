const userName='Mobi'

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

//if you have only one expression then you can omit the curly braces and also can remove the return but the result of that on expression will be automaticly will return 
//just a shorter way to use arrow function its valid only with on expression

const add=(a:number,b:number)=>a+b;


console.log(add(9,5));



