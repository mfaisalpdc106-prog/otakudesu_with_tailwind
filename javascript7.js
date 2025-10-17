// let myFunction = function(a, b){
//     return a * b;
// }

// let result = myFunction(4, 3);
// document.getElementById('function').innerHTML = 'hasilnya : ' + result; 

// let jmlAngkot = 10;
// let angkotBeroperasi = 6;

// for(let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){

// if(noAngkot <= 6 && noAngkot !== 5){
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
// }else if(noAngkot == 5 || noAngkot === 8 || noAngkot === 10){
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur');
// }else{
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
// }
// }

// let angka = prompt('masukkan angka = ');

// switch(angka){
//     case '1' :
//         alert('anda memasukkan angka 1!');
//         break;
//     case '2' :
//         alert('anda memasukkan angka 2!');
//         break;
//     case '3' :
//         alert('anda memasukkan angka 311!');
//         break;
//     default :
//         alert('angka yang anda masukkan salah!');
//         break;            
// }

let s = '';
for(let i = 20; i > 0; i--){
    for(let j = 0; j < i; j++){
        s += '*';
    }
    s += '\n';
}

console.log(s);