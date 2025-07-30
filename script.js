// Simple contact form handler to simulate form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Basic validation could be here

      // Show a success message
      messageDiv.textContent = "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
    });
  }
});
