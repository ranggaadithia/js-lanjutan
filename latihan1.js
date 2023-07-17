// mendapatkan list dari ul
const listItems = document.querySelectorAll("li");

const playlist = Array.from(listItems).filter(item => {
  return item.textContent.includes("JAVASCRIPT LANJUTAN");
})
  

const totalDuration = playlist.map(item => item.dataset.duration).reduce((total, duration) => {
  const [minutes, seconds] = duration.split(":");
  const durationInSecond = parseInt(minutes) * 60 + parseInt(seconds);
  return total + durationInSecond;
}, 0);


function convertSecondsToTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let second = seconds % 60;
  
  let time = hours.toString().padStart(2, '0') + ':' +
  minutes.toString().padStart(2, '0') + ':' +
  second.toString().padStart(2, '0');

return time;

}

// count durasi


let durasi = document.querySelector(".total-durasi")
durasi.innerHTML += convertSecondsToTime(totalDuration)  



let jmlVideo = document.querySelector(".jumlah-video");
jmlVideo.innerHTML += playlist.length;

// append to html