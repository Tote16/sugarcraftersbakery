// تحريك الصور عند التمرير
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.product img');
    
    window.addEventListener('scroll', () => {
        images.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight) {
                img.style.transform = 'scale(1.1)';
            }
        });
    });
});
