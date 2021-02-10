/*

Palindrome = word or phrase that reads the same backwards as it does forwards.

This function checks if that condition exists.

---

Need to return a boolean value
this can be done by returning a triple equality check against the original string

or, use the `every` method on an array to check that the first and last characters match up in sequential order towards the center. However, this checks twice as much as we need.

What if we wanted to expand the function to test an entire phrase?
Using the `helper function` that uses Regular Expressions and the replace method on a string to keep only the letters.

If RegEx are not allowed, we can create an array of acceptable char to use as a filter

*/

// return TRUE if given string is a Palindrome, else FALSE

/*
Test cases:

`racecar` = true
`not a Palindrome` = false
`never odd or even` = true

*/

/*
Regular Expressions are patterns used to match character combinations in strings
    ex:     /[^A-Za-z0–9]/g  or

            /[\W_]/g

\W removes all non-alphanumeric characters and == [^A-Za-z0–9]. Meaning:

    [^A-Z] matches anything that is not enclosed between A and Z

    [^a-z] matches anything that is not enclosed between a and z

    [^0-9] matches anything that is not enclosed between 0 and 9

    [^_] matches anything that does not enclose _


the /g flag indicates a global search
*/

/*
Two Methods for checking palindromes:

1. Built-in Functions

2. FOR Loop
*/

// Method 1: Built-in Functions

// toLowerCase() --- returns the string in lowercase form
// replace() --- returns a new string with some or all of a pattern replaced by a replacement. You can use one of the RegExp above.

// Now, just like the reverse a string:
// split() --- splits a string object into an array of string char
// reverse() --- reverses the array
// join() --- joins all array elements into a single string


// Method 1: Built-in Functions

function palindrome(str) {
    // define the RegExp
  var re = /[\W_]/g
    // turn the string, str, into lowercase form
    // call the RegExp to remove unwanted characters
  var lowRegStr = str.toLowerCase().replace(re, '')
    // same as reverse string algorithm
  var reverseStr = lowRegStr.split('').reverse().join('')
    // check if the reversed string matches the initial (check if palindrome). Return boolean.
  return reverseStr === lowRegStr
}
console.log(palindrome("racecar"))


// Method 2: FOR Loop

function palindrome(str) {
    // same as above
 var re = /[^A-Za-z0-9]/g
 str = str.toLowerCase().replace(re, '')
    // check length of string
 var len = str.length
    // create FOR loop
    // initialize var i, for i less than len.string/2, increment i
 for (var i = 0; i < len/2; i++) {
     // while characters from eahc part match, continue with FOR loop
   if (str[i] !== str[len - 1 - i]) {
        // when they don't match, stop the loop
       return false
   }
 }
    // both parts are equal, return true => palindrome
 return true
}

console.log(palindrome("never odd or even"))
