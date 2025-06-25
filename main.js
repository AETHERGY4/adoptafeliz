
document.addEventListener('DOMContentLoaded', function () {
  // CONTACTOS - Enviar mensaje
  const contactoForm = document.querySelector('#contacto-form');
  if (contactoForm) {
    contactoForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('📬 ¡Gracias por contactarnos, te responderemos pronto!');
      contactoForm.reset();
    });
  }

  // CONFIGURACIÓN - Guardar preferencias
  const configForm = document.querySelector('#config-form');
  if (configForm) {
    configForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('✅ Configuración guardada correctamente.');
    });
  }

  // PERFIL - Botones
  const btnEditar = document.querySelector('.btn-editar');
  if (btnEditar) {
    btnEditar.addEventListener('click', function () {
      window.location.href = 'configuracion.html';
    });
  }

  const btnCerrarSesion = document.querySelector('.btn-cerrar');
  if (btnCerrarSesion) {
    btnCerrarSesion.addEventListener('click', function () {
      alert('🔒 Sesión cerrada exitosamente.');
      window.location.href = 'index.html';
    });
  }

  // INDEX - Botones de navegación
  const btnAdoptante = document.querySelector('.btn-ir-adoptante');
  if (btnAdoptante) {
    btnAdoptante.addEventListener('click', () => window.location.href = 'soy_adoptante.html');
  }

  const btnRescatista = document.querySelector('.btn-ir-rescatista');
  if (btnRescatista) {
    btnRescatista.addEventListener('click', () => window.location.href = 'soy_rescatista.html');
  }

  const btnAyudar = document.querySelector('.btn-ir-ayudar');
  if (btnAyudar) {
    btnAyudar.addEventListener('click', () => window.location.href = 'quiero_ayudar.html');
  }

  // PUBLICAR - Simulación de envío
  const publicarForm = document.querySelector('#publicar-form');
  if (publicarForm) {
    publicarForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('🐾 Tu publicación ha sido enviada para revisión.');
      publicarForm.reset();
    });
  }

  // QUIERO AYUDAR - Botón de contacto
  const btnAyudaContacto = document.querySelector('.btn-ayuda-contacto');
  if (btnAyudaContacto) {
    btnAyudaContacto.addEventListener('click', () => window.location.href = 'contactos.html');
  }

  // SERVICIOS - Tarjetas clickeables
  const cards = document.querySelectorAll('.card-servicio');
  if (cards.length > 0) {
    cards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        alert('Para más información contáctanos directamente.');
        window.location.href = 'contactos.html';
      });
    });
  }

  // SOY ADOPTANTE / RESCATISTA - Botones
  const verMascotasBtn = document.querySelector('.btn-ver-mascotas');
  if (verMascotasBtn) {
    verMascotasBtn.addEventListener('click', () => window.location.href = 'tienda.html');
  }

  const publicarBtn = document.querySelector('.btn-publicar');
  if (publicarBtn) {
    publicarBtn.addEventListener('click', () => window.location.href = 'publicar_algo.html');
  }
});
