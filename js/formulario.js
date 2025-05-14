document.getElementById('formularioContacto').addEventListener('submit', function(e) {
  

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const respuesta = document.getElementById('respuesta');

    if (!nombre || !correo || !mensaje) {
      respuesta.style.color = 'orange';
      respuesta.textContent = 'Por favor completa todos los campos.';
      return;
    }

    // Validar formato del correo (sencillo)
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
      respuesta.style.color = 'orange';
      respuesta.textContent = 'Ingresa un correo válido.';
      return;
    }

    // Simula envío exitoso
    respuesta.style.color = 'lightgreen';
    respuesta.textContent = '¡Mensaje enviado con éxito! Pronto estaré en contacto.';

    // Opcional: limpiar campos
    this.reset();
  });