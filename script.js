document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

function setupMobileFlip() {
  if (window.innerWidth <= 768) {
    document.querySelectorAll(".project-inner").forEach((inner) => {
      inner.classList.add("mobile-flip");
    });

    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", function () {
        this.querySelector(".project-inner").classList.toggle("show-back");
      });
    });
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(44, 62, 80, 0.95)";
    header.style.padding = "10px 0";
  } else {
    header.style.background = "var(--primary-color)";
    header.style.padding = "15px 0";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setupMobileFlip();
});

window.addEventListener("resize", function () {
  setupMobileFlip();
});
