/* zoom image */
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.zoom-image');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  images.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = "";
  });
});

/* Texto vindo das laterais */
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-right, .animate-left');
    elements.forEach(el => observer.observe(el));
  });