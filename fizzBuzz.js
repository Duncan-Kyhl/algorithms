/*

Given a number as an input, usually 100, print out every integer from 1 to that number.

Conditions: If number is divisible by
    2, print out "Fizz"
    3, print out "Buzz"
    2 and 3, print out "Fizz Buzz"

Use modulo operator returns the remainder of a division operation.

Note, division by 2 and 3 means it's also divisible by the least common multiple - potential for quicker evaluation
*/

// FOR Loop
for (var i = 1; i < 100; i++) {
    if (i % 6 == 0) console.log("FizzBuzz")     // LCM = 6
    else if (i % 3 == 0) console.log("Fizz")
    else if (i % 2 == 0) console.log ("Buzz")
    else console.log(i)
}
