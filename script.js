// --- DOM elements ---
const colorBtn = document.getElementById('colorBtn');
const resetBtn = document.getElementById('resetBtn');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

const initialBg = getComputedStyle(document.body).backgroundColor || '#f7f9fb';

// helper: random pastel-ish color
function randomColor() {
  // create pleasant pastel by mixing high RGB values
  const r = Math.floor(150 + Math.random() * 105);
  const g = Math.floor(150 + Math.random() * 105);
  const b = Math.floor(150 + Math.random() * 105);
  return rgb(${r}, ${g}, ${b});
}

// change background handler
colorBtn?.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColor();
});

// reset background
resetBtn?.addEventListener('click', () => {
  document.body.style.backgroundColor = initialBg;
});

// simple contact validation and message
contactForm?.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = '⚠ Please complete all fields.';
    formMessage.style.color = 'crimson';
    return;
  }

  // pretend we send the data — show success message
  formMessage.textContent = ✅ Thanks ${name}! Message received.;
  formMessage.style.color = 'green';

  // reset form (keeps message visible)
  contactForm.reset();
});