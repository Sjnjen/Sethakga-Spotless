document.addEventListener('DOMContentLoaded', () => {
  // Add custom favicon circle with logo message
  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  // Create a dataURL simple circle icon with S
  // Use uploaded logo as favicon
link.href = "Gemini_Generated_Image_vz9w8evz9w8evz9w.png";
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
