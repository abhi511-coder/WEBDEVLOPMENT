const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    toggleBtn.textContent = 'Dark Mode';
  } else {
    toggleBtn.textContent = 'Light Mode';
  }
});
