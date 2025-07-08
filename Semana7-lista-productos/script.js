// Lista inicial de productos
let productos = [
  {
    nombre: "Laptop",
    precio: 500.00,
    descripcion: "Laptop con pantalla HD, 8GB RAM y SSD de 256GB, ideal para trabajo y estudio."
  },
  {
    nombre: "Mouse",
    precio: 10.50,
    descripcion: "Mouse inalámbrico con sensor óptico y diseño ergonómico para uso prolongado."
  },
  {
    nombre: "Teclado",
    precio: 20.00,
    descripcion: "Teclado mecánico con retroiluminación LED y teclas silenciosas, ideal para escribir y jugar."
  },
  {
  nombre: "Monitor",
  precio: 150.00,
  descripcion: "Monitor LED de 24 pulgadas Full HD, ideal para trabajo y entretenimiento."
 },
 {
  nombre: "Impresora",
  precio: 120.00,
  descripcion: "Impresora multifuncional con conexión Wi-Fi, imprime, copia y escanea."
 },
 {
  nombre: "Auriculares",
  precio: 35.00,
  descripcion: "Auriculares con micrófono, sonido envolvente y cancelación de ruido."
 },
 {
  nombre: "Webcam",
  precio: 25.00,
  descripcion: "Webcam HD 1080p con micrófono integrado, ideal para videollamadas."
 },
 {
  nombre: "Memoria USB",
  precio: 10.00,
  descripcion: "Memoria USB 64GB con alta velocidad de transferencia y diseño compacto."
 }

];

// Referencia al elemento <ul>
const lista = document.getElementById("lista-productos");

// Función para mostrar los productos
function mostrarProductos() {
  lista.innerHTML = "";
  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${producto.nombre}</strong><br>
      Precio: $${producto.precio.toFixed(2)}<br>
      <span>${producto.descripcion}</span>
    `;
    lista.appendChild(li);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("btn-agregar").addEventListener("click", () => {
  const nuevo = {
    nombre: "Nuevo Producto",
    precio: 0.00,
    descripcion: "Descripción breve del nuevo producto."
  };
  productos.push(nuevo);
  mostrarProductos();
});

// Mostrar productos al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);


