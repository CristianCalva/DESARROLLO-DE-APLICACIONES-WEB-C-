const urlInput = document.getElementById("urlImagen");
const agregarBtn = document.getElementById("agregarBtn");
const eliminarBtn = document.getElementById("eliminarBtn");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

function crearImagen(url) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen añadida";
  img.addEventListener("click", () => seleccionarImagen(img));
  galeria.appendChild(img);
}

function seleccionarImagen(img) {
  if (imagenSeleccionada) {
    imagenSeleccionada.classList.remove("seleccionada");
  }
  imagenSeleccionada = img;
  img.classList.add("seleccionada");
}

function eliminarImagenSeleccionada() {
  if (imagenSeleccionada) {
    galeria.removeChild(imagenSeleccionada);
    imagenSeleccionada = null;
  }
}

agregarBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();
  if (url) {
    crearImagen(url);
    urlInput.value = "";
  }
});

eliminarBtn.addEventListener("click", eliminarImagenSeleccionada);

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarBtn.click();
  }
});

// Imágenes por defecto desde la carpeta local
const imagenesIniciales = [
  'assets/img/atardecer 05.jpeg',
  'assets/img/atardecer 06.jpeg',
  'assets/img/atardecer 07.jpeg',
  'assets/img/atardecer 08.jpeg',
  'assets/img/paisaje 01.jpeg',
  'assets/img/paisaje 02.jpeg',
  'assets/img/paisaje 03.jpeg',
  'assets/img/paisaje 04.jpeg'


];

imagenesIniciales.forEach(url => {
  crearImagen(url);
});
