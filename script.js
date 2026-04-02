// --- Spotlight Effect ---
// Adds a glowing gradient that follows the mouse cursor on cards
const spotlights = document.querySelectorAll('.spotlight');

spotlights.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

// --- Smooth Scroll for Anchor Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// --- Navbar Blur Effect on Scroll ---
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(3, 3, 3, 0.9)";
    navbar.style.borderBottom = "1px solid #333";
  } else {
    navbar.style.background = "rgba(3, 3, 3, 0.7)";
    navbar.style.borderBottom = "1px solid #222";
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".spotlight").forEach(el => observer.observe(el));

document.querySelectorAll(".exp-card img").forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});