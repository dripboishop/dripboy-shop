
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', () => {
    console.log('Searching:', input.value);
  });
});
