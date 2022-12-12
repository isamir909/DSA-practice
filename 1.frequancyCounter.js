// RETURN THE COUNT OF CONSONANT AND VOWEL IN GIVEN STRING

let str="https://media-exp1.licdn.com/dms/document/C4D1FAQGD_Z3_3xBBQA/feedshare-document-pdf-analyzed/0/1670692396082?e=1671667200&v=beta&t=xeFvy3yJjxdSKcKgITt8cII3WwIte-GfNUl_x2FdEUU"
// str="anil/$4"
// =======================================================[Approach-1]====================================================================
function frequencyCount(str){
  let vowel="aeiouAEIOU"
  // let a=97
  // let z=122
  // let A=65
  // let Z=90
  let vowelCount=0
  let consonant=0

  for(let i=0;i<str.length;i++){
    let temp=str[i].charCodeAt(0)
      if(vowel.includes(str[i])){
        vowelCount++
        continue;
      }
      else if((temp<65 || temp>122 )&& (temp<97 || temp>90) ){
        continue;
      }else{
        consonant++
      }
  }
  return{
     vowelCount,
     consonant
  }
}
console.log(frequencyCount(str));






// =======================================================[Approach-2]====================================================================

// let str = "https://media-exp1.licdn.com/dms/document/C4D1FAQGD_Z3_3xBBQA/feedshare-document-pdf-analyzed/0/1670692396082?e=1671667200&v=beta&t=xeFvy3yJjxdSKcKgITt8cII3WwIte-GfNUl_x2FdEUU"



let vowel = "aeiouAEIOU"
vowel = vowel.split("")
let vCount = 0
let cCount = 0

function counterFreq(str){
    for(let i of str){
        if((/^[a-zA-z]+$/.test(i))){
            if(vowel.indexOf(i) !== -1){
                vCount++
            }else{
                cCount++
            }
        }
    }
    return [vCount,cCount]
}

console.log(counterFreq(str))
