// medium 3 : // Anagram count
let str = 'aabaabaa', s2 = 'aaba';       //output-4
function anagram(a,b){
    let a1=a.length;
    let  b1 = b.length
    if(a1!=b1){
      return false;
    }
    let fb1 = {}
    let fb2={}
    for(let i =0;i<a.length;i++){
      if(fb1[a[i]]){
         fb1[a[i]] +=1
      }
      else{
        fb1[a[i]]=1
      }
    }
    
    for(let i =0;i<b.length;i++){
      if(fb2[b[i]]){
        fb2[b[i]] +=1
      }
      else{
        fb2[b[i]]=1
      }  
    }
    
    for(let i in fb1){
      if(fb1[i]!=fb2[i]){ 
        return "It is not anagram"
      }  
    }
    return "It is anagram"
  }
  anagram(str,s2)