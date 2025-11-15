//object literal
// let mhs = {
//     nama : 'adit',
//     umur : 30,
//     ips : [3.00, 2.50, 3.20],              
//     alamat : {
//         jalan : 'jl.anwar',
//         kota : 'bandung',
//         prov : 'jatim'
//     }
// };

//function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    let mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs1 = buatObjectMahasiswa('Adit', '231209895', 'Adit@gmail.com', 'Teknik Gym');

let mhs2 = buatObjectMahasiswa('Adity', '2312098950', 'Adity@gmail.com', 'Teknik Gym');

//Constructor
function Mahasiswa (nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs3 = new Mahasiswa ('Eka', '98764567', 'Eka@gmail.com', 'Teknik Gym');