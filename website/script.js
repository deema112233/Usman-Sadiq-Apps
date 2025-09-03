// ========== Highlight Active Nav Link ==========
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
});

// ========== Mobile Menu (Optional) ==========
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✖" : "☰"; // Switch icon
  });
}

// ========== Contact Form Submission (Demo) ==========
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Example: collect form values
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted:", data);

    // Simple feedback for now
    alert("✅ Thank you for contacting us! We'll reply soon.");

    contactForm.reset();
  });
}
