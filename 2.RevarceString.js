// Reverse String 
// spaceComplexity=O(1)
// TC=>n
let str="samir"

function reverse(str){
  str=str.split("")
  let i=0;
  let j=str.length-1
  
  while(i<j){
    [str[i],str[j]]=[str[j],str[i]]
    i++
    j--
  }
  return str.join('')
  
}

// console.log(reverse(str));




// Recursion
 str = "PushpakKumar"

function reverseStr(str){
    if(str.length<=1) return str
    return reverseStr(str.substring(1)) +str[0]
}

console.log(reverseStr(str))
// spaceComplexity=O(1)
// TC=>O(n)