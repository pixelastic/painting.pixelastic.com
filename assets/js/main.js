import GLightbox from 'glightbox';

document.addEventListener('DOMContentLoaded', () => {
  // GLightbox initialization
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    closeOnOutsideClick: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'fade',
    zoomable: true,
    draggable: true,
  });

  // LQIP: remove blur when image finishes loading
  document.querySelectorAll('img.lqip-loading').forEach((img) => {
    const handleLoad = () => {
      img.classList.remove('lqip-loading');
      img.classList.add('lqip-loaded');
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }
  });
});
