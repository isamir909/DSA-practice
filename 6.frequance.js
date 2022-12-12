/* get the frequency count of each character and sort it by its value.... after that print all the letters and its value saperated by ' - '  
 input-str = "My Name Is Ashish"          output: s - 3    

    h - 2
    M - 1
    y - 1
    N - 1
    a - 1
    m - 1
    e - 1
    I - 1
    A - 1
    i - 1
    */



    function stringWithSpace(str) {
      let map = new Map()
      for (let i = 0; i < str.length; i++) {
          if (!str[i].match(/^[a-zA-Z]$/)) continue
          map.set(str[i], map.get(str[i]) + 1 || 1)
      }
      let arr = []
      for (let item of map) {
          arr.push(item)
      }
      //Sort the element array by its 2nd element
      for (let i = 0; i < arr.length - 1; i++) {
          for (let j = 0; j < arr.length - 1; j++) {
              if (arr[j][1] < arr[j + 1][1]) {
                  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
              }
          }
      }
      arr = arr.join(' ').split(' ')
      for (let j = 0; j < arr.length; j++) {
          console.log(arr[j].replace(',', ' - '))
      }
  }
  const str = "My Name Is Ashish"
  stringWithSpace(str)
  