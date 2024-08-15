document.getElementById("menu-toggler").addEventListener("click", function () {
  toggleBodyClass("menu-active");
});

function toggleBodyClass(className) {
  document.body.classList.toggle(className);
}

const standingDesk = document.getElementById("standingDesk");
const fixedDesk = document.getElementById("fixedDesk");

standingDesk.addEventListener("click", () => {
  localStorage.setItem("deskType", "standing");
  standingDesk.parentElement.classList.add("current-menu-item");
  fixedDesk.parentElement.classList.remove("current-menu-item");
  window.location.href = "products.html";
});

fixedDesk.addEventListener("click", () => {
  localStorage.setItem("deskType", "fixed");
  fixedDesk.parentElement.classList.add("current-menu-item");
  standingDesk.parentElement.classList.remove("current-menu-item");
  window.location.href = "products.html";
});
