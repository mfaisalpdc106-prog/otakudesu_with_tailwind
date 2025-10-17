/*
Kumpulan Soal JavaScript Dasar

1. Buat program untuk menghitung luas persegi panjang berdasarkan input user.

2. Buat program untuk menentukan apakah sebuah angka yang dimasukkan user adalah ganjil atau genap.

3. Buat program untuk mengkonversi suhu dari Celcius ke Fahrenheit.

4. Buat program untuk menentukan grade (A, B, C, D, E) dari nilai yang diinput user.

5. Buat program untuk menampilkan jam, menit, dan detik saat ini.

6. Buat program yang meminta nama user lalu menampilkan sapaan: "Halo, [nama]!".

7. Buat program untuk menghitung luas lingkaran berdasarkan jari-jari yang diinput user.

8. Buat program untuk menghitung hasil perkalian dari dua angka yang dimasukkan user.

9. Buat program untuk menampilkan bulan saat ini (nama bulan, bukan angka).

10. Buat program untuk meminta umur user lalu menampilkan apakah user sudah cukup umur (>= 18) atau belum.
***/

//soal 1
alert('menghitung luas persegi panjang');
let panjang = Number(prompt('masukkan nilai panjang : '));
let lebar = Number(prompt('masukkan nilai lebar : '));
alert('hasil luas persegi panjang adalah : ' + (panjang * lebar));

//soal 2
alert('menentukan sebuah angka ganjil atau genap');
const angka = prompt('masukkan angka : ');
if(angka % 2 == 0){
    alert('angkanya adalah genap');
}else{
    alert('angkanya adalah ganjil');
}

//soal 3
alert('mengkonversi suhu celcius ke fahrenheit');
const celcius = Number(prompt('masukkan nilai suhu celcius : '));
alert('hasil suhu dalam fahrenheit adalah : ' + (celcius * (9/5) + 32));

// //soal 4
// alert('menentukan grade');
// const grade = prompt('masukkan grade A, B, C, D, atau E : ');
// switch(grade){
//     case 'A':
//         grade = alert('nilai gradenya adalah A');
//         break;
//     case 'B':
//         grade = alert('nilai gradenya adalah B');
//         break;
//     case 'C':
//         grade = alert('nilai gradenya adalah C');
//         break;
//     case 'D':
//         grade = alert('nilai gradenya adalah D');
//         break;
//     case 'E':
//         grade = alert('nilai gradenya adalah E');
//         break;    
//     default:
//         grade = alert('nilai gradenya adalah sahroni');
//         break;
// }

//soal 5
let tanggal = new Date();
console.log(tanggal);

//soal 6
let nama = prompt('masukkan nama kamu : ');
alert(`Halo ${nama}`);

//soal 7
const jari_jari = Number(prompt('masukkan nilai jari-jari lingkaran : '));
const rms = 3.14;
alert('luas lingkarannya adalah : ' + (jari_jari * jari_jari * rms));

//soal 8
const angka_1 = Number(prompt('masukkan angka pertama : '));
const angka_2 = Number(prompt('masukkan angka kedua : ')) ;
alert('hasilnya : ' + (angka_1 * angka_2));

//soal 9
let date = new Date().getMonth();
let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
console.log(`${month[date]}`);

//soal 10
const umur = Number(prompt('masukkan umur anda : '));
if(umur >= 18){
    alert('anda sudah cukup umur');
}else{
    alert('anda masih dibawah umur');
}