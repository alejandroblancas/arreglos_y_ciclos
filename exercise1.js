
/* Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}


printOutString();
Complete the function to print out the string: This is a sentence.

 */

let arr = ["This", "is", "a", "sentence."];
/*
function printOutString() {
  console.log(arr.join(" "))
}

printOutString();
*/

function printOutString() {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] + " ";
  }
  console.log(result);
}

printOutString();
