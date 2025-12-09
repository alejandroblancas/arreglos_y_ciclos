/* 
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. 
Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue);

  const multiplyInitial = array1.reduce(
    (accumulator, currentValue) => accumulator * currentValue);
console.log("Multiplicación de los valores del array:", multiplyInitial);
console.log("Suma de los valores del array:", sumWithInitial);