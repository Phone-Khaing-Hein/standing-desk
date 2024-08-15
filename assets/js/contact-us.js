document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the active class on the clicked button
    button.classList.toggle("active");

    // Get the content panel associated with the clicked button
    const content = button.nextElementSibling;

    // Toggle the display of the content panel
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      // Close other panels
      document.querySelectorAll(".accordion-content").forEach((panel) => {
        if (panel !== content) {
          panel.style.display = "none";
        }
      });

      content.style.display = "block";
    }
  });
});
