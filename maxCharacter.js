/*

Given a string of characters, return the character that appears the most often.

note: uppercase and lowercase count as the same letter

*/

// Step 1: convert all to lowercase

let str = 'Hello World'
const myStr = str.toLowerCase()

console.log(myStr)

// Step 2: create an object (like python dictionary) to count the occurances of each character. characters are `keys` and counters are `values`
const charMap = {}

// Step 3: loop though string
// options for looping: forLoop, whileLoop, forEach, forOf, ...
for (let char of myStr) {
    if (!charMap[char]) {   // add the char if it doesn't exist yet
        charMap[char] = 1
    } else {                // increment if char exists
        charMap[char]++
    }
}

// Step 4: output resulting object
console.log(charMap)

// Step 5: option 1: loop through resulting object, storing comparing dictionary values

let max = 0
let maxChar = ''

for (let char in charMap) {
    if (charMap[char] > max) {
        max = charMap[char]
        maxChar = char
    }
}


// Step 5: option 2: make sure all highest values are recorded, not just the first
// const getMax = object => {
//     return Object.keys(object).filter(x => {
//          return object[x] == Math.max.apply(null, 
//          Object.values(object));
//    });
// };


// Step 6, put it all together:
const maxCharacter = str => {
    const myStr = str.toLowerCase();
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
 }

/*
Note:

Though we use two separate loops that iterate through two different inputs (character string and character map), the time complexity is still linear. It may be derived from the character string, but eventually, the size of the character map will reach a limit because there’s only a finite number of characters in any language. For the same reason, the space complexity is constant despite how the input string grows even though an internal state is kept. Temporary primitives are also negligible at large scales.
*/
