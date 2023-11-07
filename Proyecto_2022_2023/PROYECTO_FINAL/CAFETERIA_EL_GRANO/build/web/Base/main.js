
/* JS DEL BURGUER DE CERRAR*/

document.addEventListener('scroll', function () {
    const burgerCheckbox = document.querySelector('.burger input[type="checkbox"]');
    const burgerMenu = document.querySelector('.burger-menu-elem');
    
    if (burgerCheckbox.checked) {
      burgerCheckbox.checked = false;
      burgerMenu.style.display = 'none';
    }
  });
  