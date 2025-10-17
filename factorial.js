// factorial
// 7! = ...
// 7! = 7x6x5x4x dst

// fibonacci
// 1 1 2 3 5 8 13

// function factorial(n){
//     let result = 1;
//     for(let i = 2; i <= n; i++){
//         result = result * i;
//     }
//     return result;
// }

// alert(factorial(10));
// alert(factorial(1));
// alert(factorial(5));

function factorialR(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorialR(n - 1);
}
alert(factorialR(10));


// function Add() {
//     Add()
// }

// function fibonacciIterative(n) {
//   if (n <= 0) {
//     return [];
//   } else if (n === 1) {
//     return [0];
//   }

//   let fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib.push(fib[i - 1] + fib[i - 2]);
//   }
//   return fib;
// }

// console.log(fibonacciIterative(5)); // Output: [0, 1, 1, 2, 3]
// console.log(fibonacciIterative(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]