/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";


const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5 + " " + s3 + " " + s2 + " " + s1 + " " + s4 + " "
console.log(tongueTwister);


// Concatenate the string variables into one new string


// Print out the concatenated string

// `"Fred fed Ted bread and Ted fed Fred bread"`


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
//Create a new variable named **`result`** by concatenating the strings `part1` and `part2`,
//and converting their last letters to uppercase to form a new "cameLtaiL" formatted string: `"javAscripT"`
//Once done, print out the `result` string using `console.log()`.

/* #### Uppercase
To convert a string to _uppercase_ letters, use the `toUpperCase()` method. 
The method `toUpperCase()` returns a new string with all the characters in uppercase.

Example:

```js
let str = "ironhack";

console.log(str.toUpperCase()); // "IRONHACK"
```
*/

const part1 = "java";
const part2 = "script";

const lastCharUppercased1 = part1[3].toUpperCase();
const lastCharUppercased2 = part2[5].toUpperCase();

const result = part1.slice(0, 3) + lastCharUppercased1 + part2.slice(0, 5) + lastCharUppercased2;

console.log(result);




// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
/*
You've had a meal at a restaurant, and you want to leave a tip. The bill total is $84. Calculate a 15% tip and store the amount in a new variable named **`tipAmount`**.

Once done, print out the `tipAmount` value using `console.log()`.
*/

const billTotal = 84;

totalTip = 0.15;

tipAmount = billTotal * totalTip;

console.log(`$${tipAmount}`);

// Calculate the tip (15% of the bill total)


// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

/*
For making this exercise I went on: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
*/


// Print the generated random number

console.log(getRandomInt(1, 10));
    




/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;