document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-fabrics');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const fabricList = button.nextElementSibling;
      fabricList.classList.toggle('hidden');
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const fabricImages = document.querySelectorAll(".fabric-list img");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.querySelector(".modal-close");

  fabricImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const fabricImages = document.querySelectorAll(".fabric-list img");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const modalClose = document.querySelector(".modal-close");
  const prevBtn = document.querySelector(".modal-prev");
  const nextBtn = document.querySelector(".modal-next");

  let currentImages = [];  // массив изображений текущей карточки
  let currentIndex = 0;

  fabricImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      const parentCard = img.closest(".product-card");
      currentImages = Array.from(parentCard.querySelectorAll(".fabric-list img"));
      currentIndex = currentImages.indexOf(img);

      modal.style.display = "block";
      modalImg.src = currentImages[currentIndex].src;
      modalImg.alt = currentImages[currentIndex].alt;
    });
  });

  function showImage(index) {
    if (index < 0) index = currentImages.length - 1;
    if (index >= currentImages.length) index = 0;
    currentIndex = index;
    modalImg.src = currentImages[currentIndex].src;
    modalImg.alt = currentImages[currentIndex].alt;
  }

  prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
  nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") showImage(currentIndex - 1);
      if (e.key === "ArrowRight") showImage(currentIndex + 1);
      if (e.key === "Escape") modal.style.display = "none";
    }
  });
});

