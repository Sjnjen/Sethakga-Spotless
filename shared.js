// File: shared.js
// Shared JS for loading animations, smooth scroll, and favicon logo circle
document.addEventListener('DOMContentLoaded', () => {
  // Add custom favicon circle with logo message
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  // Create a dataURL simple circle icon with S
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e91e63';
  ctx.beginPath();
  ctx.arc(16, 16, 14, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px "Inter"';
  ctx.fillText('S', 10, 24);
  link.href = canvas.toDataURL();
  document.head.appendChild(link);
  
  // Add smooth page transitions (simulate loading screen on internal links)
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.hostname === window.location.hostname && !link.getAttribute('target') && link.getAttribute('href') && !link.href.includes('#') && link.href.endsWith('.html')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = link.href;
        const loaderDiv = document.createElement('div');
        loaderDiv.className = 'loading-overlay';
        loaderDiv.innerHTML = '<div class="loader"></div><div class="bubbles"><div class="bubble"></div><div class="bubble"></div><div class="bubble"></div></div><div class="loading-text">A spotless experience awaits ✨</div>';
        document.body.appendChild(loaderDiv);
        loaderDiv.style.display = 'flex';
        setTimeout(() => { window.location.href = targetUrl; }, 700);
      });
    }
  });
});
