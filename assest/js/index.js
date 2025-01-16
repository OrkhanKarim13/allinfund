// select options
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const select = dropdown.querySelector('.select');
      const menu = dropdown.querySelector('.menu');
  
      select.addEventListener('click', function() {
        dropdown.classList.toggle('open');
        
      });
  
      menu.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
          const selectedText = e.target.textContent;
          dropdown.querySelector('.selected').textContent = selectedText;
          dropdown.classList.remove('open');
        }
      });
  
      document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('open');
        }
      });
    });
  });
  