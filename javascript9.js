// function tampilkanAngka(n){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     return tampilkanAngka(n-1);
// }

// tampilkanAngka(10);

// function faktorial(n){
//     if (n === 0){
//         return 1;
//     }
//     return n * faktorial(n-1);
// }


//looping
// console.log(faktorial(5));

// function cetakAngka(n){
//     for(let i = n; i >= 1; i--){
//         console.log(i);
//     }
// }
// console.log(cetakAngka(10));


//rekrusif
// function cetakAngka(n){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     cetakAngka(n-1);
// }
// console.log(cetakAngka(10));

//looping faktorial
// function faktorial(n){
//     let hasil  = 1;
//     for(let i = n; i > 0; i--){
//         hasil *= i;
//     }
//     return hasil;
// }
// console.log(faktorial(10));

//rekrusif faktorial
// function faktorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * faktorial(n-1);
// }
// console.log(faktorial(10));

function fak(n){
    if(n === 0){
        return;
    }
    return n * fak(n-1);
}
console.log(fak(10))