let jmlh = 10;
let nilai = 1;
while(nilai <= jmlh){
    console.log(nilai);
    nilai = nilai + 1;
}

for(let n = 1; n <= 10; n++){
    console.log('hello world!');
}

let jml = 10;
let beroperasi = 6;

for(let noA = 1; noA <= jml; noA++ ){
    if(noA <= beroperasi){
        console.log('beroperasi');
    }else{
        console.log('tidk beroperasi');
    }
}

let angka = prompt('masukkan angka : ');

if(angka % 2 == 0){
    alert('angka genap');
} else if(angka % 2 == 1){
    alert('angka ganjil');
} else{
    alert('yang anda masukkan bukan angka!');
}