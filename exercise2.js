/* 

Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

*/

let arrayNumber = [1,2,4,5];

function printNumbers(resultArray){
let result=[]

    for (let i = 0; i < arrayNumber.length; i++) {
        const element = resultArray[i];
        result.push(element*2); 
    }
    console.log(result)
}

printNumbers(arrayNumber);

// Utilizando map()

const numeros = [1,2,4,5];
const dobles = numeros.map(numero => numero *2);

console.log(dobles);