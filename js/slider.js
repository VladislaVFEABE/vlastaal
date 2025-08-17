document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const images = slider.querySelectorAll('img');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const dotsContainer = document.getElementById('slider-dots');

  let index = 0;
  let interval;

  // Создание точек
  images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    slider.style.transition = 'transform 0.3s ease';
    updateDots();
  }

  function showNext() {
    index = (index + 1) % images.length;
    updateSlider();
  }

  function showPrev() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
  }

  // Кнопки
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  // Автопрокрутка
  function startInterval() {
    interval = setInterval(showNext, 4000);
  }
  startInterval();

  slider.parentElement.addEventListener('mouseenter', () => clearInterval(interval));
  slider.parentElement.addEventListener('mouseleave', startInterval);

  // --- Свайпы ---
  let startX = 0;
  let isDragging = false;

  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
    slider.style.transition = 'none';
  });

  slider.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    const movePercent = (diffX / slider.offsetWidth) * 100; // переводим в %
    slider.style.transform = `translateX(-${index * 100 - movePercent}%)`;
  });

  slider.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > 50) showPrev();
    else if (diffX < -50) showNext();
    else updateSlider(); // если свайп меньше порога, возвращаем на место
  });
});
