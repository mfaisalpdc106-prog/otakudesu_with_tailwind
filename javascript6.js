for (let i = 1; i <= 100; i++) {
  let prima = true;

  if (i < 2) {
    prima = false; // 0 dan 1 bukan prima
  } else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        prima = false;
        break;
      }
    }
  }

  if (prima) {
    console.log(i + " adalah angka prima");
  } else {
    console.log(i);
  }
}

// for(let i = 1; i <= 10; i++){
//     if(i === 4){
//         break;
//     }
//     console.log('nomornya adalah ' + i);
// }

// let day;
// switch(new Date().getDay()){
//     case 1:
//         day = 'Minggu';
//         break;
//     case 2:
//         day = 'Senin';
//         break;
//     case 3:
//         day = 'Selasa';
//         break;
//     case 4:
//         day = 'Rabu';
//         break;
//     case 5:
//         day = 'Kamis';
//         break;
//     case 6:
//         day = "jum'at";
//         break;
//     case 7:
//         day = 'Sabtu';
//         break;                        
// }

// console.log('Sekarang hari ' + day);

// loop1: for(let j =1; j < 5; j++){
//     loop2: for(let i = 6; i < 10; i++){
        
//     }
// }