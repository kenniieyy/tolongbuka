let currentWishIndex = 0;
const wishes = [
  "🎉🎉🎉",
  "siapa yang hari ini tambah tua?? reyshar, reyshar, HAHA",
  "selamat bertemu kembali dengan tanggal ini",
  "dari sekian banyak orang yang mengucapkan selamat ulang tahun untukmu, aku ingin menjadi salah satu diantaranya wkwk",
  "ini ada sedikit ucapan dari aku, di aamiin kan ya",
  "semoga panjang umur, sehat selalu, dilancarkan rezekinya",
  "semoga di umur yang sekarang bisa jauh lebih baik dari yang sebelum nya",
  "semoga lebih banyak haha nya dari pada huhu nya",
  "semoga kamu selalu berada di tengah lingkungan yang baik",
  "semoga kamu tidak merasa bahwa dirimu tidak layak dicinta, kurangi trust issue nya",
  "semoga kamu mencintai dirimu dengan sepenuh hati",
  "semoga jalan-jalan yang kamu temui ke depan adalah jalan yang mulus dan lancar",
  "serta segala doa dan cita cita yang kamu inginkan bisa terwujud dan dimudahkan dalam segala urusan",
  "ayoo buat banyak harapan, nanti aku bantu aamiin kan",
  "selamat merayakan, selamat ulang tahun REYSHARR🎉",
  "semangat terus dalam berproses, KAMU PASTI BISAA!!!"
];

const showWishesBtn = document.querySelector('button[onclick="showWishes()"]');
const nextWishBtn = document.getElementById("nextWishBtn");
const prevWishBtn = document.getElementById("prevWishBtn");
const finishBtn = document.getElementById("finishBtn");
const playMusicBtn = document.getElementById("playMusicBtn");

function showWishes() {
  document.getElementById("wish").textContent = wishes[currentWishIndex];
  showWishesBtn.style.display = "none";
  playMusicBtn.style.display = "none";
  nextWishBtn.style.display = "inline";
  prevWishBtn.style.display = "inline";
  finishBtn.style.display = "inline";
  nextWishBtn.disabled = false;
  prevWishBtn.disabled = currentWishIndex === 0;
  startConfetti();
}

function nextWish() {
  currentWishIndex++;
  if (currentWishIndex >= wishes.length) {
    currentWishIndex = wishes.length - 1;
    nextWishBtn.disabled = true;
    finishBtn.disabled = false;
  } else {
    finishBtn.disabled = true;
  }
  document.getElementById("wish").textContent = wishes[currentWishIndex];
  prevWishBtn.disabled = false;
  startConfetti();
}

function prevWish() {
  currentWishIndex--;
  if (currentWishIndex < 0) {
    currentWishIndex = 0;
  }
  document.getElementById("wish").textContent = wishes[currentWishIndex];
  nextWishBtn.disabled = false;
  finishBtn.disabled = true;
  startConfetti();
}

function playMusic() {
  // Kode untuk memutar musik di sini
  const audio = new Audio('music.mp3'); audio.play();
}

// Menonaktifkan tombol "Next Ucapan" dan "Back" secara default
nextWishBtn.disabled = true;
prevWishBtn.disabled = true;
nextWishBtn.style.display = "none";
prevWishBtn.style.display = "none";
finishBtn.style.display = "none";

// Menangani klik pada tombol "Selesai"
finishBtn.addEventListener("click", function() {
  window.location.href = "akhir.html";
});

// Menangani klik pada tombol "Nyalakan Musik"
playMusicBtn.addEventListener("click", playMusic);
