function toggleEstado(element) {
  if (element.classList.contains("pendiente")) {
    element.classList.remove("pendiente");
    element.classList.add("cursando");
  } else if (element.classList.contains("cursando")) {
    element.classList.remove("cursando");
    element.classList.add("aprobado");
  } else {
    element.classList.remove("aprobado");
    element.classList.add("pendiente");
  }
}
