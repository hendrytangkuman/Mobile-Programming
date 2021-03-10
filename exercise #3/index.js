
// number 1
// class orang{
//     constructor(nama, umur){
//         this.nama=nama;
//         this.umur=umur;
//     }

//     bekerja(){

//         console.log(`${this.nama} sedang bekerja seperti biasa`);
//     }
// }

// const user1= new orang("Hendry", 17);
// user1.bekerja();

// number 2

class orang{
    constructor(nama, umur){
        this.nama=nama;
        this.umur=umur;
    }

    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
}

class pelajar extends orang {
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah=namaSekolah;
    }

    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

const user= new pelajar("John", 17, "unklab");

user.belajar();