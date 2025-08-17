 document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const current = window.location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });

// JS для открытия/закрытия меню с плавной прокруткой
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');

    if(isActive){
      // Скролл к верху меню при открытии
      navMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
