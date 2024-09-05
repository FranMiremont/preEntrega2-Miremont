// Configuración Inicial del Supermercado

let productosDisponibles = ["Manzanas","Bananas","Leche","Pan","Huevos","Carne"];

let impuesto = 0.21;  //21% de IVA

let descuento = 0.10;  // 10% de descuento

function saludoInicial() {
  console.log("¡Bienvenido al Supermercado Central  !");
  console.log("Aquí puedes encontrar una gran variedad de productos.");
}
saludoInicial();

console.log(productosDisponibles)


function agregarProducto(producto) {
  productosDisponibles.push(producto);
  console.log("El producto  " + producto + " ha sido agregado al SuperMercado Central");
}
function eliminarProducto(producto) {
  let indice = productosDisponibles.indexOf(producto);

  if (indice !== -1) {
      productosDisponibles.splice(indice, 1);  
      console.log("El producto " + producto + " ha sido eliminado del SuperMercado Central.");
  } else {
      console.log("El producto " + producto + " no se encontró en el SuperMercado Central.");
  }
}
function modificarProducto(productoActual, nuevoProducto) {
  let indice = productosDisponibles.indexOf(productoActual);
  if (indice !== -1) {
      productosDisponibles[indice] = nuevoProducto;
      console.log("El producto " + productoActual + " ha sido modificado a " + nuevoProducto + ".");
  } else {
      console.log("El producto" + productoActual + " no se encontró en el SuperMercado Central.");
  }
}

agregarProducto("Queso");
console.log(productosDisponibles)

eliminarProducto("Pan");
console.log(productosDisponibles)

modificarProducto("Leche", "Leche Descremada");
console.log("Productos disponibles actualmente:", productosDisponibles);

// Cálculo de Precios en el SuperMercado Central

function calcularPrecioConImpuesto(precio) {
  let precioFinal = precio + (precio * impuesto);
  return precioFinal;
}
// Función para calcular el precio con descuento
function calcularPrecioConDescuento(precio) {
  let precioFinal = precio - (precio * descuento);  
  return precioFinal;
}

// Función para calcular el precio final con descuento e impuesto
function calcularPrecioFinal(precio, aplicarDescuento = false) {
  // Aplicar descuento si es necesario
  if (aplicarDescuento) {
      precio = calcularPrecioConDescuento(precio);
  }

  // Aplicar impuesto
  let precioFinal = calcularPrecioConImpuesto(precio);

  return precioFinal;
}

let precioProductoCarne = 10;

console.log("El precio del Kg de Carne sin IVA, y sin descuento es de: $" + precioProductoCarne + " pesos")

console.log("Precio con impuesto: " + calcularPrecioConImpuesto(precioProductoCarne));
console.log("Precio con descuento: " + calcularPrecioConDescuento(precioProductoCarne));
console.log("Precio final con descuento e impuesto: " + calcularPrecioFinal(precioProductoCarne, true));



// Manejo de Inventario en el SuperMercado Central

// Objeto que representa el inventario del supermercado
let inventario = {
    "Manzanas": 1.5,
    "Leche": 2,
    "Queso": 3.5,
};

console.log(inventario)
function agregarProductoInventario(producto, cantidad) {
    if (inventario[producto]) {
        inventario[producto] += cantidad;
    } else {
        inventario[producto] = cantidad; 
    }
    console.log("Se ha agregado " + cantidad + " unidades del producto \"" + producto + "\" al inventario.");
}

// Función para eliminar productos del inventario
function eliminarProductoInventario(producto) {
    if (inventario[producto]) {
        delete inventario[producto];  
        console.log("El producto \"" + producto + "\" ha sido eliminado del inventario.");
    } else {
        console.log("El producto \"" + producto + "\" no se encuentra en el inventario.");
    }
}

// Función para actualizar la cantidad de un producto en el inventario
function actualizarCantidadProducto(producto, cantidad) {
    if (inventario[producto]) {
        inventario[producto] = cantidad;
        console.log("La cantidad del producto \"" + producto + "\" ha sido actualizada a " + cantidad + " unidades.");
    } else {
        console.log("El producto \"" + producto + "\" no se encuentra en el inventario.");
    }
}

// Función para ver el estado actual del inventario
function verInventario() {
    console.log("Estado actual del inventario:");
    for (let producto in inventario) {
        console.log(producto + ": " + inventario[producto] + " unidades");
    }
}


agregarProductoInventario("Pan", 4);
agregarProductoInventario("Manzanas", 3);
eliminarProductoInventario("Leche");
actualizarCantidadProducto("Queso", 2);
verInventario();

// Funciones de Alto Orden y Métodos de Math y Date en el SuperMercado Central

// Ejemplo de array de productos con precios
let productos = [
    { nombre: "Manzanas", precio: 1.5 },
    { nombre: "Leche", precio: 2 },
    { nombre: "Queso", precio: 3.5 },
    { nombre: "Pan", precio: 0.9 },
    { nombre: "Carne", precio: 10 },
];

// `forEach` para mostrar el nombre y precio de cada producto
productos.forEach(producto => {
    console.log("Producto: " + producto.nombre + ", Precio: " + producto.precio);
});

// `find` para encontrar un producto específico
let productoEncontrado = productos.find(producto => producto.nombre === "Leche");
console.log("Producto encontrado: " + productoEncontrado.nombre + ", Precio: " + productoEncontrado.precio);

// `filter` para encontrar productos que cuesten más de 1.5
let productosFiltrados = productos.filter(producto => producto.precio > 1.5);
console.log("Productos con precio mayor a 1.5:");
productosFiltrados.forEach(producto => {
    console.log(producto.nombre + ": " + producto.precio);
});

// `some` para verificar si hay algún producto que cueste menos de 1.0
let hayProductoBarato = productos.some(producto => producto.precio < 1);
console.log("¿Hay algún producto que cueste menos de 1.0? " + (hayProductoBarato ? "Sí" : "No"));

// `map` para crear un nuevo array con precios más altos
let preciosConDescuento = productos.map(producto => ({
    nombre: producto.nombre,
    precio: producto.precio * 0.9  // Aplicar un descuento del 10%
}));
console.log("Precios con descuento:");
preciosConDescuento.forEach(producto => {
    console.log(producto.nombre + ": " + producto.precio);
});


// `reduce` para calcular el total de todos los productos
let total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("Total de todos los productos: " + total);

// `sort` para ordenar productos por precio de menor a mayor
productos.sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:");
productos.forEach(producto => {
    console.log(producto.nombre + ": " + producto.precio);
});

// Ejemplos de métodos de Math
console.log("Número máximo: " + Math.max(1.5, 2, 3.5, 0.9, 10)); //Precios de Productos
console.log("Número mínimo: " + Math.min(1.5, 2, 3.5, 0.9, 10)); //Precios de Productos
console.log("Redondeo de 1.7: " + Math.round(0.9));
console.log("Redondeo hacia arriba de 3.5: " + Math.ceil(3.5));
console.log("Redondeo hacia abajo de 1.5: " + Math.floor(1.5));

// Ejemplos de métodos de Date
let fecha = new Date();
console.log("El año de su compra es: " + fecha.getFullYear());
console.log("El mes (0-11): " + fecha.getMonth());
console.log("Día de la semana (0-6): " + fecha.getDay());

// Objetos y Clases en el SuperMercado Central

// Crear un objeto de producto
let producto = {
    nombre: "Manzanas",
    precio: 1.5,
    cantidad: 7,
    mostrarDetalles: function() {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio + ", Cantidad: " + this.cantidad);
    }
};

// Acceder y modificar propiedades del objeto
producto.mostrarDetalles();
producto.precio = 1.7;  // Modificar precio
console.log("Nuevo precio de " + producto.nombre + ": " + producto.precio);

// 2. Funciones Constructoras

// Crear una función constructora para productos
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.mostrarDetalles = function() {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio + ", Cantidad: " + this.cantidad);
    };
}

// Crear un nuevo producto usando la función constructora
let queso = new Producto("Queso", 3.5, 6);
queso.mostrarDetalles();

// Definir una clase para productos
class ProductoClase {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    mostrarDetalles() {
        console.log("Producto: " + this.nombre + ", Precio: " + this.precio + ", Cantidad: " + this.cantidad);
    }
}

// Crear un nuevo producto usando la clase
let pan = new ProductoClase("Pan", 1, 8);
pan.mostrarDetalles();

// 4. Métodos Personalizados y Operadores en Objetos

// Añadir un método personalizado a un objeto
producto.calcularValorTotal = function() {
    return this.precio * this.cantidad;
};

console.log("Valor total de " + producto.nombre + ": " + producto.calcularValorTotal());

// Verificar si una propiedad existe en un objeto usando `in`
console.log("¿El objeto tiene la propiedad 'cantidad'? " + ('cantidad' in producto));

// Arrays y Métodos de Arrays en el SuperMercado Central

// Crear un array de productos
let productos2 = ["Manzanas", "Leche", "Queso", "Pan"];

//  Métodos Básicos de Arrays
// Obtener la longitud del array
console.log("Número de productos en el array: " + productos2.length);
// Agregar un producto al final
productos2.push("Yogur");
console.log("Productos después de agregar al final: " + productos2.join(", "));
// Agregar un producto al inicio
productos2.unshift("Huevos");
console.log("Productos después de agregar al inicio: " + productos2.join(", "));

// Eliminar el primer producto
productos2.shift();
console.log("Productos después de eliminar el primer elemento: " + productos2.join(", "));

// Eliminar el último producto
productos2.pop();
console.log("Productos después de eliminar el último elemento: " + productos2.join(", "));



//  Manipulación de Arrays
// Reemplazar y agregar productos en posiciones específicas
productos2.splice(2, 1, "Aceite", "Mantequilla");
console.log("Productos después de splice: " + productos2.join(", "));

// Extraer una sección del array
let algunosProductos = productos2.slice(1, 3);
console.log("Con algunos productos menos: " + algunosProductos.join(", "));

// Unir dos arrays
let productosAdicionales = ["Azúcar", "Harina"];
let todosLosProductos = productos2.concat(productosAdicionales);
console.log("Todos los productos: " + todosLosProductos.join(", "));

// Unir todos los elementos en una cadena
console.log("Productos unidos en cadena: " + todosLosProductos.join(" - "));

// Invertir el orden de los productos
todosLosProductos.reverse();
console.log("Productos en orden inverso: " + todosLosProductos.join(", "));

// 3. Búsqueda y Comprobación
// Buscar el índice de un producto
let indice = todosLosProductos.indexOf("Aceite");
console.log("Índice de 'Aceite': " + indice);

// Verificar si un producto está en el array
let tieneQueso = todosLosProductos.includes("Queso");
console.log("¿Contiene 'Queso'? " + (tieneQueso ? "Sí" : "No"));

// 4. Iteración
// Iterar sobre los productos con for...of
console.log("Productos en el array:");
for (let producto2 of todosLosProductos) {
    console.log(producto2);
}

console.log("Gracias por su compra, hasta pronto.")