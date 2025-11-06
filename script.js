const modeToggle = document.getElementById('modeToggle');
const colorBtn = document.getElementById('colorBtn');
const resetBtn = document.getElementById('resetBtn');

const lightBackgrounds = ['#f7f9fb', '#fff0f6', '#e0f7fa', '#fff8e1', '#e8f5e9']; // light pastels
const darkBackgrounds = ['#121212', '#1a1a1a', '#222222', '#2c2c2c', '#333333']; // dark shades

modeToggle.textContent = '🌙';
modeToggle.title = 'Switch to Dark Mode';

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '☀️';
    modeToggle.title = 'Switch to Light Mode';
    document.body.style.backgroundColor = '#121212'; // reset dark bg
  } else {
    modeToggle.textContent = '🌙';
    modeToggle.title = 'Switch to Dark Mode';
    document.body.style.backgroundColor = '#f7f9fb'; // reset light bg
  }
});

colorBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    const color = darkBackgrounds[Math.floor(Math.random() * darkBackgrounds.length)];
    document.body.style.backgroundColor = color;
  } else {
    const color = lightBackgrounds[Math.floor(Math.random() * lightBackgrounds.length)];
    document.body.style.backgroundColor = color;
  }
});

resetBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.style.backgroundColor = '#121212';
  } else {
    document.body.style.backgroundColor = '#f7f9fb';
  }
});
