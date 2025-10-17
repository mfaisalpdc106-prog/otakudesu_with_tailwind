// let kubus1 = prompt('masukkan sisi kubus 1');
// kubus1 = kubus1 * kubus1 * kubus1;

// let kubus2 = prompt('masukkan sisi kubus 2');
// kubus2 = kubus2 * kubus2 * kubus2;

// alert('hasilnya : ' + (kubus1 + kubus2));

function jumlahVolumeDuaKubus(a, b){
    let hasil, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    hasil = volumeA + volumeB;

    return hasil;
}

console.log(jumlahVolumeDuaKubus(9, 9));
console.log(jumlahVolumeDuaKubus(3, 9));