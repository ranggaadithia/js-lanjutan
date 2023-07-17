// function jumlahkan(...values) {
//   // let total = 0

//   // for( const m of values) {
//   //   total += m;
//   // }

//   // return total;

//   return values.reduce((acc, curr) => acc + curr, 0)
// }

// console.log(jumlahkan(1,2,3,4,5));




// const kelompok1 = ['Rangga', 'Budi', 'Chris', 'Agus', 'Melinda']

// const [ketua, wakil, ...anggota] = kelompok1


// console.log(anggota);


function filterBy(type, ...values) {
  return values.filter(val => typeof val === type);
}

console.log(filterBy('boolean', 1, 2, 'Rangga', false, 10, true, 'Dody'));