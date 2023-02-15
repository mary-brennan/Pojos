/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:



Example 2:

***********************************************************************/

function countScores(people) {
  let totalScores ={ };
  people.forEach(function(object){
    let player = object.name;
    let points = object.score;
    if(totalScores[player] === undefined) {
      totalScores[player] = points;
    }
    else {
      totalScores[player] = totalScores[player] + points;
    }
  });
  return totalScores;
}
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 4},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 8},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];
            console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
