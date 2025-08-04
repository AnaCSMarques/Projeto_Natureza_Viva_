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
