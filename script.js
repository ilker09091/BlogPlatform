const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Tema Geçişini Yönet
themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Sayfa Yüklenirken Tema Durumunu Kontrol Et
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeToggle.checked = true;
    }
});



document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 0) {
        navbar.classList.add("sticked"); // Scroll varsa sınıf ekle
    } else {
        navbar.classList.remove("sticked"); // Scroll yoksa sınıfı kaldır
    }
});
