document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto');
  const alertaBtn = document.getElementById('btn-alerta');

  // Validación del formulario
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let esValido = true;

    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const mensaje = document.getElementById('mensaje');

    [nombre, correo, mensaje].forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('is-invalid');
        esValido = false;
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (correo.value && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(correo.value)) {
      correo.classList.add('is-invalid');
      esValido = false;
    }

    if (esValido) {
      alert('¡Formulario enviado correctamente!');
      form.reset();
    }
  });

  // Botón de alerta
  alertaBtn.addEventListener('click', () => {
    alert('¡Este es un mensaje personalizado de alerta!');
  });
});
