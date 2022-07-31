document.addEventListener('DOMContentLoaded', function () {
  initApp();
});
function initApp() {
  navegacionFija();
  crearGaleria();
}
function navegacionFija() {
  const barra = document.querySelector('.header');
  const sobreFestival = document.querySelector('.sobre-festival');
  const body = document.querySelector('body');
  window.addEventListener('scroll', () => {
    if (sobreFestival.getBoundingClientRect().bottom < 0) {
      barra.classList.add('barra-fija');
      body.classList.add('body-scroll');
    } else {
      barra.classList.remove('barra-fija');
      body.classList.remove('body-scroll');
    }
  });
}
function crearGaleria() {
  const galeriaImagenes = document.querySelector('.galeria-imagenes');
  for (let index = 1; index <= 12; index++) {
    const element = document.createElement('picture');
    element.innerHTML = `
          <source srcset="build/img/thumb/${index}.avif" type="image/avif" />
          <source srcset="build/img/thumb/${index}.webp" type="image/webp" />
          <img src="build/img/thumb/${index}.jpg" alt="imagen galeria" />
    `;
    element.onclick = function () {
      mostrarImagen(index);
    };
    galeriaImagenes.appendChild(element);
  }
}
function mostrarImagen(id) {
  const element = document.createElement('picture');
  element.innerHTML = `
          <source srcset="build/img/grande/${id}.avif" type="image/avif" />
          <source srcset="build/img/grande/${id}.webp" type="image/webp" />
          <img src="build/img/grande/${id}.jpg" alt="imagen galeria" />
    `;
  const overlay = document.createElement('div');
  overlay.appendChild(element);
  overlay.classList.add('overlay');
  overlay.onclick = function () {
    const body = document.querySelector('body');
    body.classList.remove('fijar-body');
    overlay.remove();
  };
  const cerrarModal = document.createElement('p');
  cerrarModal.textContent = 'X';
  cerrarModal.classList.add('btn-cerrar');
  cerrarModal.onclick = function () {
    overlay.remove();
    const body = document.querySelector('body');

    body.classList.remove('fijar-body');
  };
  overlay.appendChild(cerrarModal);
  const body = document.querySelector('body');
  body.appendChild(overlay);
  body.classList.add('fijar-body');
}
