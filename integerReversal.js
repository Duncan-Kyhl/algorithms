/*

Given an integer, reverse the order of the digits.

Utilize the build in `toString` method,
followed by the logic from the stringReversal algorithm.

After digits are reversed, the global `parseInt` f(x) can be used to convert the string back to an integer and the Math.sign to carry ovver the polarity.

Shares the same runtime complexities for space and time as the string reversal algorithm.

NEW: Arrow Functions
https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html

Similar to traditional functions, but leave off `function` keyword and add a fat arrow after the arguments =>

One of the primary usecases for traditional lambda functions, and now for arrow functions in JavaScript, is for functions that get applied over and over again to items in a list.

For example, if you have an array of values that you want to transform using a map, an arrow function is ideal:

const words = ['hello', 'WORLD', 'Whatever'];
const downcasedWords = words.map(word => word.toLowerCase());

Arrow functions have an implicit `return` value - if they can be written in one line, without the need for the curly braces.

The regular function needs to provide an explicit return value.
*/

/*
Example of parseFloat() --- removes leading zeroes
    num = '0012345-'

    parseFloat(num)

    num = 12345


Eample of Math.sign() --- multiplies the number with the original sign
    original value of num = -5432100
    num = 12345

    num * Math.sign(-5432100)

    num = -12345
*/


// Method 1: Regular Function

function reversedNum(num) {
  return (
    parseFloat(         // parse the input value into a float from a string
      num
        .toString()     // convert number to string
        .split('')      // split string into array of char
        .reverse()      // reverse items in array
        .join('')       // join array back to single string
    ) * Math.sign(num)  // multiply by the sign of the original num
  )
}

console.log(reversedNum(-543.21))

// Method 2: Arrow Function

reversedNum = num => parseFloat(num
    .toString()
    .split('')
    .reverse()
    .join('')
    ) * Math.sign(num)

console.log(reversedNum(123000))
