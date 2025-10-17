// var tes = confirm('kamu yakin?');
// if(tes === true){
//     alert('kamu menekan ok!');
// }else{
//     alert('kamu menekan cancel!');
// }

const form = document.getElementById('form');
if (form){
    form.addEventListener('click', function (){
        window.location.href = 'main.html';
    })
}

const tes = confirm('apakah kamu yakin?');
if(tes === true){
    alert('kamu menekan ok!');
}else{
    alert('kamu menekan cancel!');
}

var usia = 30;
console.log('hey usiaku ' + usia);

let umur = prompt('berapa usiamu?');
alert('usiamu adalah : ' + umur);

let nama = 'faisal'
let usiaa = 20
let tinggiBadan = 165
let beratBadan = 45
let pacar = null

// if(pacar == null){
//     pacar = 'belum punya'
// }else{
//     pacar = 'udah punya'
// }

switch(pacar){
    case 1: 
      pacar = 'punya 1'
      break
    case 2: 
      pacar = 'punya 2, aku cukup playboy';
      break
    case 3: 
      pacar = 'punya 3, aku playboy'    
      break
    default:
      pacar = 'belum punya'  
      break  
}

var saldoAwal = 50000;
var saldoAkhir = 100000;
const utang = 30000;
const jumlahSaldo = saldoAwal + saldoAkhir - utang;

// alert('nama saya adalah ' + nama + ' usia saya adalah ' + usiaa + ' tinggi badan saya adalah ' + tinggiBadan + ' berat badan saya adalah ' + beratbadan + ' pacar saya adalah ' + pacar)
alert(`nama saya ${nama} usia ${usiaa} tinggi badan ${tinggiBadan} berat badan ${beratBadan} pacar ${pacar}`)

alert(`saya punya saldo awal sebesar Rp.${saldoAwal} dan saldo akhir sebesar Rp.${saldoAkhir}, jika dijumlahkan saya punya saldo sebesar Rp.${jumlahSaldo}`);