// ===========================
// NAV — scroll + mobile toggle
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobLinks = document.querySelectorAll('.mob-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(12,11,9,0.98)';
  } else {
    navbar.style.background = 'rgba(12,11,9,0.9)';
  }
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===========================
// MENU TABS
// ===========================
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.menu-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealTargets = document.querySelectorAll(
  '.about-text-col, .about-image-col, ' +
  '.menu-tabs, .menu-panel, ' +
  '.pricing-card, ' +
  '.contact-form-col, .contact-info-col, ' +
  '.strip-item, .gallery-item'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => observer.observe(el));

// Stagger pricing cards
document.querySelectorAll('.pricing-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});

// Stagger gallery items
document.querySelectorAll('.gallery-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.07}s`;
});

// ===========================
// RESERVATION FORM
// ===========================
const resForm = document.getElementById('resForm');
const resSuccess = document.getElementById('resSuccess');

resForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = resForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Replace with your preferred form service (EmailJS, Formspree, etc.)
  setTimeout(() => {
    btn.textContent = 'Request Reservation';
    btn.disabled = false;
    resForm.reset();
    resSuccess.classList.add('show');
    setTimeout(() => resSuccess.classList.remove('show'), 5000);
  }, 1200);
});

// ===========================
// ACTIVE NAV ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-left a, .nav-right a:not(.nav-reserve)');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = 'var(--gold)';
    }
  });
});

// ===========================
// SET MIN DATE ON DATE INPUT
// ===========================
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
