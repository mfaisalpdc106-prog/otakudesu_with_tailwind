//Tugas

/* 
1. prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user.
2. menentukan hari dari tanggal yang ada saat ini di pc kalian.
**/

//soal 1
let saldoPertama = Number(prompt('masukkan saldo pertama :'));
let saldoKedua = Number(prompt('masukkan saldo kedua :'));
alert('hasil : ' + (saldoPertama - saldoKedua));

//soal 2
let hari = new Date().getDay();
let hariHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
console.log(`hari ini adalah hari : ${hariHari[hari]}`);