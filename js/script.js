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

/*menu mobile */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
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

    const elements = document.querySelectorAll('.animate-right, .animate-left, .animate-from-bottom');
    elements.forEach(el => observer.observe(el));
  });

  /* ir até a section suavemente*/
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const yOffset = -100; // ajusta esse valor conforme seu header
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });