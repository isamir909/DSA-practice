// Given a string, the task is to reverse the order of the words in the given string. 

// Examples:

// Input: s = “geeks quiz practice code” 
// Output: s = “code practice quiz geeks”

// Input: s = “i love programming very much” 
// Output: s = “much very programming love i”


let str = "i love programming very much";
str = str.split(' ');
function reverseWord(str) {
    if (str.length <= 1) return str;
    return reverseWord(str.slice(1)) + ' ' + str[0]
}
console.log(reverseWord(str));
