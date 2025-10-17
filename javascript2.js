//cara array 1
let namaGuru = ['jordi', 'bunga', 'hana'];
namaGuru.push('dea', 'adit');
namaGuru.shift();
namaGuru.pop();
alert(namaGuru);

//cara array 2
let namaKoruptor = [];
namaKoruptor[0] = 'sahroni';
namaKoruptor[1] = 'eko';
namaKoruptor[2] = 'uyakuya';
namaKoruptor.pop();
alert(namaKoruptor);

//for
const namaArtis = ['amba', 'fuad', 'ironi', 'fais', 'narji'];
for(let i = 0; i < namaArtis.length; i++){
console.log(namaArtis[i]);
}

for(let i = 0; i < 10; i = i + 1){
    console.log('sahroni');
}

//while
let i = 0;
while(i < 10){
    i++
    console.log('ambatuukam');
}

let o = 10;
while(o < 10){
    o++
    console.log('ironi');
}

//do
let e = 10;
do{
    e++
    console.log('fuad');
} while(e < 10);

