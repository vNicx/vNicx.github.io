function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

const slides = document.querySelectorAll('.slide');
let current = 1;

function nextSlide() {
  const total = slides.length;
  const prev = current === 0 ? total - 1 : current - 1;
  const next = (current + 1) % total;

  slides.forEach(slide => {
    slide.classList.remove('active', 'prev', 'next');
  });

  slides[prev].classList.add('prev');
  slides[current].classList.add('active');
  slides[next].classList.add('next');

  current = next;
}

setInterval(nextSlide, 3000);

const titleText = "vNico - Services";
const titleEl = document.getElementById("animated-title");
let index = 0;
let isDeleting = false;

function type() {
  if (!isDeleting) {
    titleEl.textContent = titleText.slice(0, index++);
    if (index > titleText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    titleEl.textContent = titleText.slice(0, --index);
    if (index === 1) {
      isDeleting = false;
    }
  }
  setTimeout(type, isDeleting ? 60 : 100);
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});
