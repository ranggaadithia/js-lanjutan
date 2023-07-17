// function init() {

//   return function(nama) {
//     console.log(nama)
//   }
// }

// let panggilNama = init()

// panggilNama('Rangga')
// panggilNama('Adithia')



// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hi ${nama}, selamat ${waktu}`)
//   }
// }


// let selamatMalam = ucapkanSalam('Malam')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatPagi = ucapkanSalam('Pagi')

// selamatMalam('Rangga')
// selamatPagi('Gusti')


// let add = (function () {
//   let counter = 0;
//   return function() {
//     return ++counter;
//   }
// })();


// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add())

// function sayHello(hari)
// {
//   return function (nama){
//     console.log(`Hello ${nama} selamat ${hari}`)
//   }
// }

// const selamatPagi = sayHello("malam");



// function sayHello(waktu) {
//   return function (name) {
//     console.log(`Hello ${name} selamat ${waktu}`);
//   }
// }

// let selamatPagi = sayHello("Pagi")
// let selamatSiang = sayHello("Siang")
// let selamatMalam = sayHello("Malam")


// selamatPagi("Rangga")


let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  }
})();


counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());

