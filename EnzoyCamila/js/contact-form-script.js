// Esperamos que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el enlace "Ver Datos Bancarios" y el div de los datos bancarios
    const btnVerDatos = document.querySelector('.btn-alt');
    const divCbu = document.querySelector('#hidden-cbu');
  
    // Añadimos un evento al hacer clic en el botón
    btnVerDatos.addEventListener('click', function(event) {
      event.preventDefault(); // Evitamos la acción por defecto del enlace
  
      // Cambiar la visibilidad del div con los datos bancarios
      if (divCbu.style.display === "none" || divCbu.style.display === "") {
        divCbu.style.display = "block"; // Hacemos visible el div
        divCbu.classList.add('fadeInUp'); // Agregamos la clase para animación, si la deseas
  
        // Cambiar el texto del botón a "Ocultar Datos Bancarios"
        btnVerDatos.textContent = "Ocultar Datos Bancarios";
      } else {
        divCbu.style.display = "none"; // Ocultamos el div
        btnVerDatos.textContent = "Ver Datos Bancarios"; // Cambiamos el texto del botón nuevamente
      }
    });
  });
  