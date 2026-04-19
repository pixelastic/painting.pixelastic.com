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
});
