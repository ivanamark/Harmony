/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = [
  "red",
  "basketball",
  "paperclip",
  "green",
  "computer",
  "earth",
  "udacity",
  "blue",
  "dogs"
];

const [one, , , two, , , , three, ,] = things;


const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;
console.log(colors);

let point = [10, 25, -34];

let [x, y, z] = point;
point = [-15, -56, -31];
console.log(x, y, z);
console.log(point);
//swap the variables
let dre = ([1, 2][(1, 2)] = [2, 1]);
console.log(dre);
//the old way of swapping variables
var a = 10;
var b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

//destructuring object
const gemstone = {
  type: "quartz",
  color: "rose",
  carat: 21.29
};

const { type, color, carat } = gemstone;

console.log(type, color, carat);