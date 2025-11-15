//Latihan object
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
}

let angkot1 = new Angkot('Adit', ['Blitar', 'Kediri'], [], 0);

let angkot2 = new Angkot('irfan', ['Blitar', 'Ngenjuk'], [], 0);