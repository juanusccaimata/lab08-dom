# Bitacora - Tarea Individual: Lista de Tareas Interactivas

## Iteracion 1: Captura de tareas e impresion inicial
- **Objetivo**: Permitir ingresar tareas mediante un formulario y mostrarlas en una lista simple sin recargar la página.
- **Cambios en JS**: Se creó la clase `Tarea` y el listener `submit` en el formulario para capturar `inputTarea.value` e insertarlo con `createElement('li')`.
- **Resultado**: Las tareas se renderizan correctamente en pantalla.

## Iteracion 2: Estado de completado y contador
- **Objetivo**: Marcar tareas como completadas/pendientes y actualizar el contador dinámicamente.
- **Cambios en JS**: Se implementó el método `completar(id)` en la clase gestora y el botón 'Completar' que alterna la clase CSS `.completada` y actualiza `contadorPendientes`.
- **Resultado**: Al hacer clic en completar, el texto se tacha y las pendientes disminuyen.

## Iteracion 3: Eliminacion de elementos
- **Objetivo**: Permitir borrar tareas individualmente del arreglo y del DOM.
- **Cambios en JS**: Se añadió el método `eliminar(id)` filtrando el arreglo `tareas` y re-renderizando la vista.
- **Resultado**: La tarea desaparece del HTML y el contador se reajusta en tiempo real.