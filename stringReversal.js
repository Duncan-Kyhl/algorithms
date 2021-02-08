/*

3 steps:
    1. split method on a string to generate an array of characters
    2. built-in reveerse method for an array
    3. join method to combine characters back into a string

can be written in one line,
or use a 'for of' loop that iterates through each char using the latest syntax
or use the array's 'reduce' method which eliminates the need for a temp var

Speed:
    Given a string of characters, every character needs to be visited once. Though this happens multiple times, the time complexity normalizes out to linear. And since no separate internal data structure is kept, the space complexity is constant.

*/

// 1. SPLITTING STRINGS
let randomString = 'test';
let returnedString = randomString.split(""); // why do i need quotes?
//console.log("response --->", returnedString);
// response ---> ["t","s","e","t"]

// 2. REVERSE STRING
returnedString = randomString.split("").reverse()
// console.log("response --->", returnedString);

// 3. JOIN STRING BACK TOGETHER
returnedString = randomString.split("").reverse().join("")
//console.log("response --->", returnedString);

// FULL FUNCTION
function reverse(str) {
    let reversedString = str.split("").reverse().join("")
    return reversedString
};

string = "Can you read backwards?"

console.log(reverse(string))
