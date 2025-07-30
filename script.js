
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
   

      messageDiv.textContent = "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
    });
  }
});
