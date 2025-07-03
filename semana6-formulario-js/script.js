const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmar = document.getElementById('confirmar');
const edad = document.getElementById('edad');
const enviar = document.getElementById('enviar');
const formulario = document.getElementById('formulario');

// Validaciones
function validarNombre() {
  const valor = nombre.value.trim();
  if (valor.length < 3) {
    mostrarError('error-nombre', 'El nombre debe tener al menos 3 caracteres.');
    return false;
  }
  mostrarError('error-nombre', '');
  return true;
}

function validarEmail() {
  const valor = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(valor)) {
    mostrarError('error-email', 'Correo electrónico no válido.');
    return false;
  }
  mostrarError('error-email', '');
  return true;
}

function validarPassword() {
  const valor = password.value;
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  if (!regex.test(valor)) {
    mostrarError('error-password', 'Mínimo 8 caracteres, un número y un símbolo.');
    return false;
  }
  mostrarError('error-password', '');
  return true;
}

function validarConfirmacion() {
  if (password.value !== confirmar.value) {
    mostrarError('error-confirmar', 'Las contraseñas no coinciden.');
    return false;
  }
  mostrarError('error-confirmar', '');
  return true;
}

function validarEdad() {
  const valor = parseInt(edad.value);
  if (isNaN(valor) || valor < 18) {
    mostrarError('error-edad', 'Debes ser mayor de 18 años.');
    return false;
  }
  mostrarError('error-edad', '');
  return true;
}

function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}

function validarFormulario() {
  const validaciones = [
    validarNombre(),
    validarEmail(),
    validarPassword(),
    validarConfirmacion(),
    validarEdad()
  ];

  const todoCorrecto = validaciones.every(v => v === true);
  enviar.disabled = !todoCorrecto;
}

// Eventos
[nombre, email, password, confirmar, edad].forEach(input => {
  input.addEventListener('input', validarFormulario);
});

formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Formulario enviado con éxito!');
  formulario.reset();
  enviar.disabled = true;
});
