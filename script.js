// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});


 const form = document.querySelector(".contact-form");
  const spinner = document.getElementById("formSpinner");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", () => {
    spinner.style.display = "flex";
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
  });


  
    // Check success flag in URL
  const params = new URLSearchParams(window.location.search);

  if (params.get("success") === "true") {
    const popup = document.getElementById("thankYouPopup");
    popup.style.display = "flex";

    // Remove query parameter from URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }

// Close nav when clicking a link (mobile)
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});



// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();