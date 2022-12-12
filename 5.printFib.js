// print all the fibonnacci series numbers which are less than given input …..   input - 30 output- 0,1,1,2,3,5,8,13,21

let arr = [0,1]
let a = 0;
let b = 1;
function fibbonacci(num){
    let c = a + b;
    if(num < 1) return 0;
    if(num < 2 || c>num) return arr
    arr.push(c)
    a = b
    b= c
    return fibbonacci(num-1)

}

(fibbonacci(30))
console.log(arr)
