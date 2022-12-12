// Given a set of strings, find the longest common prefix.
// Input: 
// Output: "gee"

// Input: ["apple", "ape", "april"]
// Output: "ap"


let str=["geeksforgeeks", "geeks", "geek", "geezer"]
str=["apple", "ape", "april"]
function LongestCommonPrefix(str){
   str.sort((a, b) => a.localeCompare(b))
let common=""
  for(let i=0;i<str[0].length;i++){
    if(str[0][i]===str[str.length-1][i]){
      common=  common+str[0][i]
    }else{
      break
    }
  }
return common
}
console.log(LongestCommonPrefix(str));