document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navSearchContainer = document.querySelector(".nav-search-container");

  menuToggle.addEventListener("click", () => {
    // Toggle the 'active' class to show/hide the menu
    navMenu.classList.toggle("active");

    // Hide the search container when menu is active
    if (navMenu.classList.contains("active")) {
      navSearchContainer.style.display = "none";
    } else {
      navSearchContainer.style.display = "flex"; // Restore search container when menu is hidden
    }
  });

  // Navigation Items
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll(".content-section");

  if (navItems.length > 0 && sections.length > 0) {
    navItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        navItems.forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");

        const target = this.getAttribute("data-target");

        sections.forEach((section) => {
          section.style.display = "none";
        });

        const targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.style.display = "block";
        }
      });
    });
  }

  // FAQ Items
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      if (question) {
        question.addEventListener("click", () => {
          item.classList.toggle("active");

          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active");
            }
          });
        });
      }
    });
  }

  // Footer and Sidebar Visibility
  const footerHeader = document.querySelector(".footer-header");
  const sidebar = document.querySelector(".sidebar");

  if (footerHeader && sidebar) {
    setTimeout(() => {
      footerHeader.classList.add("visible");
      sidebar.classList.add("visible");
    }, 500);
  } else {
    console.error("Footer header or sidebar element not found.");
  }
});
