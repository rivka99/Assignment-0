const countOfAllBooleans = require("./04-countOfAllBooleans/countOfAllBooleans")

function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let holdType = ""
  let boolStringCount = 0
  for(let i=0; i<arr.length; i++){
    holdType = typeof arr[i]
    if(holdType === "boolean" || holdType === "string"){
        boolStringCount++
    }
  }
  return boolStringCount

}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;