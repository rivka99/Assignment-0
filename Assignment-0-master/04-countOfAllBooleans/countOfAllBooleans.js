function countOfAllBooleans(arr) {
  // Insert code here;
  let holdType = ""
  let boolCount = 0
  for(let i=0; i<arr.length; i++){
    holdType = typeof arr[i]
    if(holdType === "boolean"){
        boolCount++
    }
  }
  return boolCount
}

// Do not edit this line;
module.exports = countOfAllBooleans;