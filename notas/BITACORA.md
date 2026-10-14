# Bitacora de JavaScript interactivo
Laboratorio 08: JavaScript Interactivo DOM, Eventos y Objetos.
Navegador usado: (escribe aquí cuál usaste, ej. Chrome)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
| --- | --- | --- |
| textContent desde la consola | El título cambió a "Hola desde la consola" | No |
| textContent desde app.js | El título cambió a "Hola TECSUP" | Si |
| style.color | El título cambió a azul | Si |
| classList.add | El párrafo se puso en fondo amarillo | Si |
| createElement + appendChild | Se agregó "JavaScript" a la lista | Si |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
| --- | --- | --- |
| click | Un clic simple sobre el botón | Suma 1 |
| dblclick | Doble clic rápido sobre el botón | Suma 1 |
| mouseover | Pasar el puntero por encima del botón | Suma 1 |

`evento.type` indica el tipo de evento y `evento.target` muestra el botón exacto que lo disparó.

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
| --- | --- | --- |
| Escribir en el campo nombre | El texto cambió letra por letra en tiempo real | No |
| Enviar sin preventDefault | El mensaje apareció un segundo y se borró | Si |
| Enviar con preventDefault, correo sin @ | Muestra "Correo no valido: falta @" en rojo | No |
| Enviar con preventDefault, correo con @ | Muestra "Enviado: correo@ejemplo.com" | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
| --- | --- | --- | --- | --- |
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875.00 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90.00 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510.00 |

Usar una clase permite definir una plantilla reutilizable con sus propios métodos, evitando duplicar código HTML o crear objetos manualmente uno por uno.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba | Total que muestra la pagina | Correcto (Si/No) |
| --- | --- | --- |
| Cuaderno 12.50 | 12.50 | Si |
| + Lapicero 3.20 | 15.70 | Si |
| + Mochila 89.90 | 105.60 | Si |
| Sin Number() | Error en consola (toFixed is not a function) | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
| --- | --- | --- |
| DOM | document.querySelector / createElement | Selecciona y crea elementos visuales en la página |
| Evento | formProducto.addEventListener("submit", ...) | Escucha el envío del formulario sin recargar |
| Objeto | new Producto(...) / new Carrito() | Modela los datos y realiza los cálculos |