import GLightbox from 'glightbox';

document.addEventListener('DOMContentLoaded', () => {
  GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    closeOnOutsideClick: true,
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    zoomable: true,
    draggable: true,
  });
});
