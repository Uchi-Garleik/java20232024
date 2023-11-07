/* JS DEL BURGUER DE CERRAR*/

document.addEventListener('scroll', function () {
  var menuToggle = document.querySelector('.menu-toggle input');
  if (menuToggle.checked) {
    menuToggle.checked = false;
  }
});
