

document.getElementById('year').textContent = new Date().getFullYear();


const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});


const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});


const themeToggle = document.getElementById('themeToggle');
let isDark = true;

const sunIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Mode`;
const moonIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg> Mode`;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  themeToggle.innerHTML = isDark ? sunIcon : moonIcon;
});


const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.transform = 'scaleX(1)';
      });
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-cat').forEach(el => skillObserver.observe(el));


const form = document.querySelector('form[name="contact-form"]');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameField  = form.querySelector('#full_name');
    const emailField = form.querySelector('#email_address');
    const errName    = document.getElementById('err-name');
    const errEmail   = document.getElementById('err-email');
    let valid = true;

    if (!nameField.value.trim()) {
      errName.style.display = 'block';
      valid = false;
    } else {
      errName.style.display = 'none';
    }

    if (!emailField.value.trim() || !/\S+@\S+\.\S+/.test(emailField.value)) {
      errEmail.style.display = 'block';
      valid = false;
    } else {
      errEmail.style.display = 'none';
    }

    if (valid) {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sent!';
      btn.style.background = '#34d399';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message`;
        btn.style.background = '';
      }, 3000);
    }
  });
}

// Function to lazy load all images
function lazyLoadImages() {
  // Select all images that need lazy loading
  const images = document.querySelectorAll('img:not([loading="eager"])');
  
  // Add loading="lazy" attribute
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
