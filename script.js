document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 Naked AI Generator By HANZZ');
    
    // Tambahkan efek klik pada tombol
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            console.log('Tombol diklik: ' + this.textContent.trim());
            // Efek tambahan jika mau
        });
    });

    // Efek hover tambahan dengan JS (opsional)
    const card = document.querySelector('.glass-card');
    card.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        this.style.transition = '0.1s';
        this.style.transform = `rotateX(${y * 2 - 1}deg) rotateY(${x * 2 - 1}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', function() {
        this.style.transition = '0.5s';
        this.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
});