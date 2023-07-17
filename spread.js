// const listMhs = document.querySelectorAll('li');


// const mhs = [...listMhs].map(m => m.textContent);

// console.log(mhs);


const text = document.querySelector('.text');

const arrText = [...text.innerHTML].map(m => `<span>${m}</span>`).join('');

text.innerHTML = arrText;