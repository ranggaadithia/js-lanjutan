const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// mencari angka >= 3



// for (let i = 0; i < angka.length; i++) {
//   if(angka[i] >= 3) {
//     newAngka.push(angka[i])
//   }
// }

// filter
// const newAngka = angka.filter(function(a) {
//   return a >= 3;
// })

// or

const newAngka = angka.filter(a => a >= 3)


// map
// const newAngka = angka.map(a => a * 2)


// reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5)

// console.log(newAngka);


// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5)
  .map(a => a * 3)
  .reduce((acc, curr) => acc + curr)


console.log(hasil);


