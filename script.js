// ===========================
// NAV — scroll shadow + mobile toggle
// ===========================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = '#2a2a2a';
  } else {
    navbar.style.borderBottomColor = '#222222';
  }
});

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===========================
// SCROLL REVEAL
// ===========================
const revealEls = document.querySelectorAll(
  '#about .section-label, #about .section-title, .about-grid, ' +
  '#projects .section-label, #projects .section-title, .project-card, ' +
  '#skills .section-label, #skills .section-title, .skill-group, ' +
  '#contact .section-label, #contact .section-title, .contact-sub, .contact-form'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

document.querySelectorAll('.project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
document.querySelectorAll('.skill-group').forEach((group, i) => {
  group.style.transitionDelay = `${i * 0.08}s`;
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});

// ===========================
// CONTACT FORM — EmailJS
// ===========================
emailjs.init('29EhQ_f43ZI6H5cML');

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_y0cdi4e', 'template_7zvr5ww', templateParams)
    .then(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      contactForm.reset();
      formSuccess.classList.add('show');
      setTimeout(() => formSuccess.classList.remove('show'), 4000);
    })
    .catch((error) => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      alert('Something went wrong. Please try again.');
      console.error('EmailJS error:', error);
    });
});

// ===========================
// HERO — cursor glow (desktop only)
// ===========================
if (window.innerWidth > 768) {
  const hero = document.getElementById('hero');
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hero.style.setProperty('--mx', `${x}px`);
    hero.style.setProperty('--my', `${y}px`);
  });
}
