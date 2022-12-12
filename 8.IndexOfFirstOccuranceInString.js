// Find the Index of the First Occurrence in a String

// Input: 
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
let haystack = "sadbutsad", needle = "sad"
var strStr = function(haystack, needle) {

  for(let i=0;i<=haystack.length-needle.length;i++){
          if(needle===haystack.substring(i,i+needle.length)){
              return i
          }
  }
  return -1
}
strStr(haystack,needle)



