function toggleInstalaciones(id) {
  const elemento = document.getElementById(id);
  if (elemento.style.display === "flex") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "flex";
  }
}
