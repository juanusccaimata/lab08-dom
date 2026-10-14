class Tarea {
  constructor(texto) {
    this.id = Date.now();
    this.texto = texto;
    this.completada = false;
  }
}

class AdministradorTareas {
  constructor() {
    this.tareas = [];
  }
  agregar(texto) {
    const nuevaTarea = new Tarea(texto);
    this.tareas.push(nuevaTarea);
  }
  completar(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) tarea.completada = !tarea.completada;
  }
  eliminar(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
  contarPendientes() {
    return this.tareas.filter(t => !t.completada).length;
  }
}

const admin = new AdministradorTareas();
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const listaTareas = document.querySelector("#listaTareas");
const contadorPendientes = document.querySelector("#contadorPendientes");

function render() {
  listaTareas.innerHTML = "";
  admin.tareas.forEach(tarea => {
    const li = document.createElement("li");
    if (tarea.completada) li.classList.add("completada");

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const divBotones = document.createElement("div");

    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = tarea.completada ? "Deshacer" : "Completar";
    btnCompletar.className = "btn-completar";
    btnCompletar.addEventListener("click", () => {
      admin.completar(tarea.id);
      render();
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.addEventListener("click", () => {
      admin.eliminar(tarea.id);
      render();
    });

    divBotones.appendChild(btnCompletar);
    divBotones.appendChild(btnEliminar);

    li.appendChild(span);
    li.appendChild(divBotones);
    listaTareas.appendChild(li);
  });

  contadorPendientes.textContent = admin.contarPendientes();
}

formTarea.addEventListener("submit", (e) => {
  e.preventDefault();
  admin.agregar(inputTarea.value.trim());
  inputTarea.value = "";
  render();
});