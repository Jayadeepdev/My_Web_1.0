// Cache DOM elements for efficiency
const colorBtn = document.getElementById('colorBtn');
const resetBtn = document.getElementById('resetBtn');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

const initialBg = getComputedStyle(document.body).backgroundColor || '#f7f9fb';

// Flag to track theme state; false means light mode initially
let isDarkMode = false;

// Toggle dark/light mode background and update button label
colorBtn?.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add('dark-theme');
    colorBtn.textContent = '☀️ Switch to Light Mode';
    colorBtn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    document.body.classList.remove('dark-theme');
    colorBtn.textContent = '🌙 Switch to Dark Mode';
    colorBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  }
});

// Reset background and form states
resetBtn?.addEventListener('click', () => {
  isDarkMode = false;
  document.body.classList.remove('dark-theme');
  colorBtn.textContent = '🌙 Switch to Dark Mode';
  colorBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  document.body.style.backgroundColor = initialBg;
});

// Form submit and validation handler (unchanged)
contactForm?.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  formMessage.className = '';

  if (!name || !email || !message) {
    formMessage.textContent = '⚠ Please fill in all the fields before submitting.';
    formMessage.classList.add('form-error');
    formMessage.focus();
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = '⚠ Please enter a valid email address.';
    formMessage.classList.add('form-error');
    formMessage.focus();
    return;
  }

  formMessage.textContent = `✅ Thanks, ${name}! Your message has been sent.`;
  formMessage.classList.add('form-success');
  formMessage.focus();

  contactForm.reset();
});
