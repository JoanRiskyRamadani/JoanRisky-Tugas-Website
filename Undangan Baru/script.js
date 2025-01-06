document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('button');
    button.classList.add('submitting');
    
    // Simulate form submission
    setTimeout(() => {
        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;
        const guests = document.getElementById('guests').value;
        
        console.log('Form submitted:', { name, attendance, guests });
        
        // Show notification
        const notification = document.getElementById('notification');
        notification.textContent = 'Terima kasih atas konfirmasinya!';
        notification.classList.add('show');
        
        // Reset form and button
        this.reset();
        button.classList.remove('submitting');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }, 1000);
});

// Add floating labels
document.querySelectorAll('.form-group input, .form-group select').forEach(field => {
    field.addEventListener('focus', (e) => {
        e.target.parentNode.querySelector('label').style.transform = 'translateY(-25px) scale(0.8)';
    });
    
    field.addEventListener('blur', (e) => {
        if (!e.target.value) {
            e.target.parentNode.querySelector('label').style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Tambahkan kode untuk animasi scroll
function checkScroll() {
    const elements = document.querySelectorAll('.ceremony-details, .reception-details');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.75) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Music player functionality
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicStatus = musicToggle.querySelector('.music-status');
    let isPlaying = false;

    // Fungsi untuk memulai musik
    function playMusic() {
        music.play();
        isPlaying = true;
        musicToggle.classList.add('playing');
        musicStatus.textContent = 'Matikan Musik';
    }

    // Fungsi untuk menghentikan musik
    function pauseMusic() {
        music.pause();
        isPlaying = false;
        musicToggle.classList.remove('playing');
        musicStatus.textContent = 'Putar Musik';
    }

    // Event listener untuk tombol musik
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    // Autoplay musik saat halaman dimuat (opsional)
    // Uncomment baris di bawah jika ingin musik autoplay
    // playMusic();
}); 