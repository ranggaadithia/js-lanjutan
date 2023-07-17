// let sayHello = function(name){
//   return `Hello ${name}`
// }


// let sayHello = (name) => {
//   return `Hello ${name}`
// }

// implisit return (tidak berisi kurung jika parameternya hanya satu dan tidak isi return)

// let sayHello = name => `Hello ${name}`;

// console.log(sayHello('rangga'));

// let sayHello = (name, waktu) => {
//   return `hello ${name} selamat ${waktu}`
// }

// console.log(sayHello("rangga", "siang"));


// let sayHello = () => { return `Hello World`}

// console.log(sayHello())



// let jumlahHuruf = mahasiswa.map(function(name) {
  //   return name.length
  // })
  
  // let jumlahHuruf = mahasiswa.map(name => name.length)
  


// let mahasiswa = ['Rangga', 'Adithia', 'Putra']

// let jumlahHuruf = mahasiswa.map(name => ({
//   name,
//   jumlahHuruf: name.length
// }))

// console.table(jumlahHuruf);



// let Mahasiswa = function() {
//   this.name = 'Rangga';
//   this.age = 32;
//   this.sayHello = function() {
//     return `Hello ${this.name} umur ${this.age}`
//   }
// }

// let rangga = new Mahasiswa();
// console.log(rangga.sayHello())


// let Mahasiswa = function() {
//   this.name = 'Rangga';
//   this.age = 32;
//   this.sayHello = () => {
//     return `Hello ${this.name} umur ${this.age}`
//   }
// }

// let rangga = new Mahasiswa();
// console.log(rangga.sayHello())


// let Mhs1 = {
//   name: "Rangga",
//   age: 33,


//   // tidak dapat menggunakan this dalam arrow function jika objectnya literal.
//   sayHello: () => {
//     return `Hello ${this.name} umur ${this.age}`
//   }
// }

// console.log(Mhs1.sayHello())


// const Mahasiswa = function() {
//   this.nama = "Rangga",
//   this.umur = 33

//   setInterval(() => {
//     console.log(this.umur++)
//   }, 300);
// }

// const mahasiswa = new Mahasiswa();




let box = document.querySelector(".box");

box.addEventListener('click', function () {

  let first = 'size'
  let second = 'caption'

  if(this.classList.contains(first)) {
    [first, second] = [second, first]
  }
  
  this.classList.toggle(first)

  setTimeout(() => {
    this.classList.toggle(second)
  }, 600)
})