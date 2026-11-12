/* Guica · tienda: antes de pintar, marca que hay JS y, si no se pide movimiento reducido, oculta lo que va a entrar
   animado (clase «anim»). Si tienda.js no arranca en 3 s, lo vuelve a enseñar. También pone el modo claro u oscuro
   que se eligió con el botón de la cabecera («guica-tema»; sin elegir, el del sistema), para que no destelle.
   Va en un archivo (no en línea) para que la política de contenido pueda prohibir los scripts en línea. */
(function (h) {
  h.classList.add('js');
  // Pantalla de carga hasta que fuentes y animaciones estén listas (src/carga.js); si el JS fallara, se quita a los 5 s
  h.classList.add('cargando');
  setTimeout(function () { if (!window.__cargaLista) h.classList.remove('cargando'); }, 5000);
  try {
    var t = localStorage.getItem('guica-tema');
    if (t === 'claro' || t === 'oscuro') h.setAttribute('data-tema', t);
  } catch (e) { /* sin almacenamiento: el del sistema */ }
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  h.classList.add('anim');
  setTimeout(function () { if (!window.__tiendaMov) h.classList.remove('anim'); }, 3000);
})(document.documentElement);
