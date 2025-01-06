// Set tanggal target (sesuaikan dengan tanggal pernikahan)
const weddingDate = new Date('jan 09, 2024 09:00:00').getTime();

// Update countdown setiap 1 detik
const countdown = setInterval(function() {
    // Waktu sekarang
    const now = new Date().getTime();
    
    // Selisih waktu
    const distance = weddingDate - now;
    
    // Perhitungan waktu untuk hari, jam, menit dan detik
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Tampilkan hasil
    document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
    
    // Ketika countdown selesai
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = 'Acara telah dimulai!';
    }
}, 1000); 