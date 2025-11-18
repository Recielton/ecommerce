// Mobile Menu Toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});

// Carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".carousel-dot");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active", "fade-in"));
  dots.forEach((dot) => dot.classList.remove("bg-white"));
  dots.forEach((dot) => dot.classList.add("bg-opacity-50"));

  slides[index].classList.add("active", "fade-in");
  dots[index].classList.add("bg-white");
  dots[index].classList.remove("bg-opacity-50");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

// Auto-play carousel
setInterval(nextSlide, 5000);

// WhatsApp form
function enviarWhatsApp(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}. Email: ${email}. Telefone: ${telefone}. Mensagem: ${mensagem}`;
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    texto
  )}`;
  window.open(whatsappUrl, "_blank");
}

// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
