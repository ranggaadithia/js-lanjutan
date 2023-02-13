
// 1. Object Literal
// let mhs1 = {
//   nama: "Rangga Adithia",
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama} selamat makan! Energi kamu sekarang ${this.energi}`)
//   },
// }

// let mhs2 = {
//   nama: "Rangga Adithia",
//   energi: 10,
//   makan: function(porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama} selamat makan! Energi kamu sekarang ${this.energi}`)
//   },
// }


// 2. Function Declaration

// function Mahasiswa(nama, energi) {

//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     return this.energi
//   }

//   mahasiswa.main = function (jam) {
//     this.energi -= jam
//     return this.energi
//   }

//   return mahasiswa;

// }

// let rangga = Mahasiswa('Rangga', 10);

// 2. Function Declaration (memory efisien) 
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     return this.energi
//   },

//   main: function (jam) {
//     this.energi -= jam
//     return this.energi
//   },

//   tidur: function(jam) {
//     this.energi += jam * 2
//     return this.energi
//   }
// }


// function Mahasiswa(nama, energi) {

//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;

// }

// let rangga = Mahasiswa('Rangga', 10);



// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     return this.energi
//   }

//   this.main = function (jam) {
//     this.energi -= jam
//     return this.energi
//   }

// }

// let rangga = new Mahasiswa("Rangga", 11)



// prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return this.energi
// }
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return this.energi
// }
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return this.energi
// }

// let rangga = new Mahasiswa('rangga', 10)


// versi class

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan (porsi) {
    this.energi += porsi;
    return this.energi
  }
  
  main (jam) {
    this.energi -= jam;
    return this.energi
  }
  
  tidur (jam) {
    this.energi += jam * 2;
    return this.energi
  }

}


let rangga = new Mahasiswa("Rangga", 10)
