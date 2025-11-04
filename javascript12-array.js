// let arr = ['a', 1, true];
// console.log(arr[1]);


//menambah isi array
// let arr = [];
// arr[0] = 'array1';
// arr[1] = 'array2';
// arr[2] = 'array3';
// arr[4] = 'array4';

// console.log(arr);

//menghapus isi array (undifined)
// let arr = ['array1', 'array2', 'array3'];
// arr[1] = undefined;
// console.log(arr);

//menampilkan isi array
// let arr = ['array1', 'array2', 'array3'];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i=i+1){
//     console.log('Mahasiswa ke-' + i + ' : ' + arr[i]);
// }

//method pada array

//1. length
// let arr = ['array1', 'array2', 'array3'];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

//2. join
// let arr = ['array1', 'array2', 'array3'];
// console.log(arr.join(' - '));

//3. push & pop
// let arr = ['array1', 'array2', 'array3'];
// arr.push('array4', 'array5');
// console.log(arr.join(' - '));

// let arr = ['array1', 'array2', 'array3'];
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

//4. unshift dan shift
// let arr = ['array1', 'array2', 'array3'];
// arr.unshift('array0', 'array0,1');
// console.log(arr.join(' - '));

// let arr = ['array1', 'array2', 'array3'];
// arr.shift();
// arr.shift();
// console.log(arr.join(' - '));

//5. splice
// let arr = ['array1', 'array2', 'array3'];
// splice(indexAwal, mauDihapusBerapa, elemenBaru, elemenBaru2,...);
// arr.splice(2, 0, 'array-s');
// arr.splice(1, 1);
// arr.splice(1, 1, 'array-d', 'array-d2');
// console.log(arr.join(' - '));

//6. slice
// let arr = ['array1', 'array2', 'array3', 'array4', 'array5', 'array6'];
//slice(mau diiris awal index berapa, dan akhirnya berapa);
// let arr2 = arr.slice(0, 5);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

//7. forEach
// let angka = [1, 2, 3, 4, 5, 7, 8];
// let arr = ['array1', 'array2', 'array3'];

// for(let i = 0; i < angka.length; i++){
//     console.log(angka[i]);
// }

// let cetak = function(e){
//     console.log(e);
// }
// angka.forEach(cetak);

// angka.forEach(function(e){
//     console.log(e);
// });

// arr.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

//8. map
// let angka = [1, 2, 3, 4, 5, 7, 8];
// let angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' - '));

//9. sort
// let angka = [1, 3, 10, 5, 4, 7, 30, 6, 2, 8];
// console.log(angka.join(' - '));
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join(' - '));

//10. filter $ find
// let angka = [1, 3, 10, 5, 4, 7, 30, 6, 2, 8];
// let angka2 = angka.filter(function(x){
//     return x > 5;
// });
// console.log(angka2);

// let angka = [1, 3, 10, 5, 4, 7, 30, 6, 2, 8];
// let angka2 = angka.find(function(x){
//     return x > 5;
// });
// console.log(angka2);