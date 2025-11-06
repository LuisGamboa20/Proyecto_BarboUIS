// ======================= ANIMACIONES VISUALES =======================

// FADE-IN DE SECCIONES AL HACER SCROLL
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ANIMACIÓN DEL ENCABEZADO AL CARGAR
window.addEventListener("load", () => {
  const header = document.querySelector("header");
  header.classList.add("header-animado");
});

// EFECTO DINÁMICO EN IMÁGENES DE LA GALERÍA
const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.07) rotate(1deg)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1) rotate(0deg)";
  });
});
// ==================== SLIDER AUTOMÁTICO ====================

let indiceSlide = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === n) slide.classList.add("active");
    });
}

function moverSlide(direccion) {
    indiceSlide += direccion;
    if (indiceSlide >= slides.length) indiceSlide = 0;
    if (indiceSlide < 0) indiceSlide = slides.length - 1;
    mostrarSlide(indiceSlide);
}

// Cambio automático cada 5 segundos
setInterval(() => moverSlide(1), 5000);
// ==================== MENÚ RESPONSIVO ====================
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
