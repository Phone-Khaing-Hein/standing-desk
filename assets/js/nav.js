document.getElementById("menu-toggler").addEventListener("click", function () {
  toggleBodyClass("menu-active");
});

const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

document.addEventListener("DOMContentLoaded", () => {
    const cart = getCartFromLocalStorage();
    document.querySelector('.item-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
});

function toggleBodyClass(className) {
  document.body.classList.toggle(className);
}

const standingDesk = document.getElementById("standingDesk");
const fixedDesk = document.getElementById("fixedDesk");

standingDesk.addEventListener("click", () => {
  localStorage.setItem("deskType", "standing");
  window.location.href = "products.html";
});

fixedDesk.addEventListener("click", () => {
  localStorage.setItem("deskType", "fixed");
  window.location.href = "products.html";
});
