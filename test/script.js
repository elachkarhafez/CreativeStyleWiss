// script.js
(function () {
  window.addEventListener("load", () => {
    document.body.classList.remove("preload");
    const y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    function setOpen(open) {
      menuBtn.setAttribute("aria-expanded", String(open));
      mobileMenu.hidden = !open;
    }

    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => io.observe(el));

  const track = document.getElementById("track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!track) return;

  const slides = Array.from(track.children);
  let index = 0;

  function updateCarousel() {
    track.style.transform = "translateX(" + (-index * 100) + "%)";
  }

  function next() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  setInterval(next, 5000);
})();