document.addEventListener("DOMContentLoaded", function () {
  const titleLinks = document.querySelectorAll(".titleLink");
  const mainTitle = document.getElementById("mainTitle");
  const contentDivs = document.querySelectorAll(".content");

  titleLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      mainTitle.innerText = this.getAttribute("data-title");

      // Oculta todos los divs de contenido
      contentDivs.forEach((div) => {
        div.style.display = "none";
      });

      // Muestra el div de contenido correspondiente al enlace clicado
      const contentId = this.getAttribute("data-content-id");
      document.getElementById(contentId).style.display = "block";
    });
  });
});


document.getElementById('enviarCvLink').addEventListener('click', function (event) {
  event.preventDefault(); // Previene la recarga de la página al hacer clic en el enlace

  var formContainer = document.getElementById('formContainer');

  // Muestra u oculta el contenedor del formulario según su estado actual
  if (formContainer.style.display === 'none') {
    formContainer.style.display = 'block';
  } else {
    formContainer.style.display = 'none';
  }

});



/* JS DEL BURGUER DE CERRAR*/
