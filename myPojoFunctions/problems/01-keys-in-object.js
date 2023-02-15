/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:


***********************************************************************/

function keysInObject(object)
{
  let arr = [];
  for(let key in object) {
    arr.push(key);
  }
  return arr;
}
let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
console.log(keysInObject(animals)); // => ["dog", "cat", "bison"]
console.log(keysInObject(foods)); // => ["apple", "lemon", "mango"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
