document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/thank-you.html";
        } else {
          alert("Error submitting form. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting form. Please try again later.");
      });
  });
});
