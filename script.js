// Configuration initiale des animations AOS (Animate On Scroll)
// Définit les paramètres globaux pour toutes les animations du site
AOS.init({
  once: true, 
  offset: 100, 
  duration: 800, 
  easing: "ease-out-cubic", 
});

// Gestionnaire de défilement pour la navigation principale
// Met à jour la section active dans le menu de navigation lors du défilement
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  // Fonction qui détecte la section visible et met à jour le menu
  function onScroll() {
    let current = "";

    // Parcourt toutes les sections pour trouver celle qui est visible
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    // Met à jour la classe active dans le menu de navigation
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});

// Gestionnaire d'effet de défilement pour la barre de navigation
// Ajoute une classe pour modifier l'apparence de la navbar lors du défilement
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Gestionnaire de navigation pour le footer
// Met à jour les liens actifs dans le footer en fonction de la section visible
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link-footer");

  let currentSectionId = "";

  // Détermine la section actuellement visible
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  // Met à jour les liens du footer
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").substring(1);
    if (href === currentSectionId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Initialisation du suivi de la section active dans le footer
window.addEventListener("scroll", setActiveSection);
setActiveSection(); // Appel initial pour définir l'état initial
