document.getElementById('formularioContacto').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  const datos = {
    nombre,
    email,
    mensaje,
    fecha: new Date().toISOString()
  };

  // Guardar en localStorage (simulación de backend)
  let mensajesGuardados = JSON.parse(localStorage.getItem('mensajesCrimsonMoon')) || [];
  mensajesGuardados.push(datos);
  localStorage.setItem('mensajesCrimsonMoon', JSON.stringify(mensajesGuardados));

  // Feedback visual
  document.getElementById('estadoEnvio').textContent = 'Mensaje enviado correctamente ✅';
  this.reset();
});
