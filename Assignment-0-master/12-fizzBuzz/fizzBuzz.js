const { fr } = require("faker/lib/locales");

function fizzBuzz(start, end) {
  // Insert code here;
//   - For multiples of three, insert "Fizz" instead of the number into the output array
// - For multiples of five, insert "Buzz" instead of the number into the output array
// - For numbers which are multiples of both three and five, insert "FizzBuzz" into the output array
// - For numbers which are neither a multiple of three nor a multiple of five, insert the number into the output array
let numArray = []
for(let i=start; i<=end; i++){
  if(i%3 === 0 && i%5 === 0){
    numArray += "FizzBuzz"
  } else if(i%3 === 0 ){
    numArray += "Fizz"
  } else if(i%5 === 0){
    numArray += "Buzz"
  } else{
    numArray += i
  }
}
return numArray
}


// Do not edit this line;
module.exports = fizzBuzz;