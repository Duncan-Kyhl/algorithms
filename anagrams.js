/*

Anagrams = words or phrases that contain the same number of characters.

Create a function that checks for this.

*/

// Method 1: Character Map

function anagrams(stringA, stringB) {
    // regex to remove non-alphabetical characters, then convert to lowercase
    stringA = stringA.replace(/[^W]/g, "").toLowerCase()
    stringB = stringB.replace(/[^W]/g, "").toLowerCase()

    console.log(stringA)

    // get character maps
    const charMapA = getCharMap(stringA)
    const charMapB = getCharMap(stringB)

    // compare each char in charMapA to B
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

}

function getCharMap(string) {
    // create object
    let charMap = {}

    // loop through each character in string, counting occurances of each letter
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

console.log(anagrams('state', 'taste'))


// Method 2: Sorting

function anagrams(stringA, stringB) {
    // regex to remove non-alphabetical characters, then convert to lowercase
    stringA = stringA.replace(/[^W]/g, "").toLowerCase()
    stringB = stringB.replace(/[^W]/g, "").toLowerCase()

    console.log(stringA)

    // get character maps
    const charMapA = getCharMap(stringA)
    const charMapB = getCharMap(stringB)

    // compare each char in charMapA to B
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }

}

function getCharMap(string) {
    // create object
    let charMap = {}

    // loop through each character in string, counting occurances of each letter
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

console.log(anagrams('state', 'taste'))

// Method 3: Array.splice()
