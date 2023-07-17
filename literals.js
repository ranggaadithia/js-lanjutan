// const mhs = {
//   name: 'Rangga',
//   age: 20,
//   nim: '2215101001',
//   email: 'rangga.adithia@undiksha.ac.id'
// }

// const el = `<div class="mhs">
//   <h2>${mhs.name}</h2>
//   <span>${mhs.nim}</span>
// </div>`





// const mhs = [
//   {
//     name: 'Rangga',
//     email: 'rangga@undiksha.ac.id'
//   },
//   {
//     name: 'erik',
//     email: 'erik@undiksha.ac.id'
//   },
//   {
//     name: 'budi',
//     email: 'budi@undiksha.ac.id'
//   }
// ]


// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
//     <li>${m.name}</li>
//     <li>${m.email}</li>
//   </ul>`).join('')}
// </div>`



// const lagu = {
//   judul: "ME!",
//   penyanyi: "Taylor Swift",
//   // feat: "Brandon"
// }

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`



// const mhs = {
//   nama: "Rangga",
//   semester: 5,
//   mataKuliah: [
//     'Basis Data',
//     'Pemograman Web',
//     'Struktur Data Algoritma',
//     'Kalkulus',
//     'Sistem Operasi'
//   ]
// }

// function cetakMataKuliah(mataKuliah) {
//   return `<ol>
//     ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//   </ol>`
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span>Semester: ${mhs.semester}</span>
//   ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`


// document.body.innerHTML = el;



// Tagged Templates

const nama = "Rangga"
const umur = 19


function coba(strings, ...values){
  // let result = ''
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`
  // })

  // return result

  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
}


const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`

console.log(str);