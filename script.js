// Cache DOM elements for efficiency
const colorBtn = document.getElementById('colorBtn');
const resetBtn = document.getElementById('resetBtn');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

const initialBg = getComputedStyle(document.body).backgroundColor || '#f7f9fb';

// Generate a random pastel color
function randomColor() {
  const r = Math.floor(150 + Math.random() * 105);
  const g = Math.floor(150 + Math.random() * 105);
  const b = Math.floor(150 + Math.random() * 105);
  return `rgb(${r}, ${g}, ${b})`;
}

// Change background handler
colorBtn?.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});

// Reset background handler
resetBtn?.addEventListener('click', () => {
  document.body.style.backgroundColor = initialBg;
});

// Form submit and validation handler
contactForm?.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  // Clear previous classes
  formMessage.className = '';

  if (!name || !email || !message) {
    formMessage.textContent = '⚠ Please fill in all the fields before submitting.';
    formMessage.classList.add('form-error');
    formMessage.focus(); // For screen readers to announce alert
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = '⚠ Please enter a valid email address.';
    formMessage.classList.add('form-error');
    formMessage.focus();
    return;
  }

  // Success message
  formMessage.textContent = `✅ Thanks, ${name}! Your message has been sent.`;
  formMessage.classList.add('form-success');
  formMessage.focus();

  // Reset the form but keep message visible
  contactForm.reset();
});
