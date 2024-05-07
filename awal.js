const expectedPassword = "mei"; // Ganti dengan password yang diinginkan
let attempt = 0;

function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    if (password === expectedPassword) {
        document.getElementById("passwordContainer").style.display = "none";
        document.getElementById("countdownContainer").style.display = "block";
        updateCountdown(); // Memperbarui countdown setelah memasuki jamnya
    } else {
        const errorMessages = [
            "Oops! Password salah, ulangi dengan memasukkan nama lengkap mu",
            "Masih salah lagi ni, coba masukkan besok tanggal berapa dalam kalimat",
            "Yhaa salah lagi, coba masukkan nama bulan saat ini"
        ];
        attempt++;
        if (attempt <= errorMessages.length) {
            alert(errorMessages[attempt - 1]);
        } else {
            alert("Anda sudah melebihi jumlah percobaan. Coba lagi nanti.");
        }
    }
}

const birthday = new Date('2024-05-08T00:00:00');

function updateCountdown() {
    const currentTime = new Date();
    
    if (currentTime > birthday) {
        document.getElementById('message').innerText = ''; // Menghilangkan teks
        document.getElementById('sendWishesButton').disabled = false; // Aktifkan tombol setelah melewati waktu ulang tahun
        return;
    }
    
    const difference = birthday - currentTime;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

document.getElementById('sendWishesButton').addEventListener('click', function() {
    window.location.href = 'giftucapan.html';
});
