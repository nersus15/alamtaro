const navAnimation = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Membuka / Menutup Drawer Navigation
        nav.classList.toggle('nav-active');

        // Efek transisi Fade In untuk list menu satu per satu
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        // Animasi tombol Burger menjadi tanda silang (X)
        burger.classList.toggle('toggle');
    });

    // Menutup menu secara otomatis saat salah satu link diklik (khusus mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(l => l.style.animation = '');
            }
        });
    });
}

// Inisialisasi navigasi saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    navAnimation();
});