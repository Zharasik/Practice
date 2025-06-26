document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const callbackForm = document.querySelector(".callback-row form");
  if (callbackForm) {
    callbackForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      callbackForm.reset();
    });
  }
});