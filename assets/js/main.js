import GLightbox from 'glightbox';

document.addEventListener('DOMContentLoaded', () => {
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

  // LQIP lazy loading: switch from lazy-loading to lazy-loaded when image loads
  document.querySelectorAll('img.lazy-loading').forEach((img) => {
    const handleLoad = () => {
      img.classList.remove('lazy-loading');
      img.classList.add('lazy-loaded');
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }
  });
});
