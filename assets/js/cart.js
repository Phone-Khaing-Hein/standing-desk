document.addEventListener("DOMContentLoaded", () => {
  // Function to get cart from localStorage
  const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  // Function to save cart to localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Function to update the cart UI
  const updateCartUI = () => {
    const cart = getCartFromLocalStorage();
    const cartList = document.querySelector(".cart-list");
    const cartTotal = document.querySelector(".cart-total");
    cartList.innerHTML = ""; // Clear existing cart items

    if (cart.length === 0) {
      cartList.innerHTML = `
            <p class="empty-cart">Your cart is empty. <a href="/products.html">Go to product page</a> to add items.</p>
          `;
      cartTotal.style.display = "none"; // Hide total price when cart is empty
    } else {
      cartTotal.style.display = "block"; // Show total price if there are items in the cart
      cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                <div class="cart-flex">
                  <div>
                      <img src="${item.image}" alt="${item.name}" />
                  </div>
                  <div class="cart-item-details">
                      <h4>${item.name}</h4>
                      <p>Price: $${item.price.toFixed(2)}</p>
                      <div class="flex-row-container">
                      <button class="cart-item-quantity" data-id="${
                        item.id
                      }" data-action="decrease">-</button>
                      <span>${item.quantity}</span>
                      <button class="cart-item-quantity" data-id="${
                        item.id
                      }" data-action="increase">+</button>
                      </div>
                  </div>
                 </div>
                <div class="cart-item-actions">
                  <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              `;
        cartList.appendChild(cartItem);
      });
    }

    document.querySelector(".item-count").textContent = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    updateTotalPrice();
  };

  // Function to update total price
  const updateTotalPrice = () => {
    const cart = getCartFromLocalStorage();
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    document.querySelector(
      ".cart-total h4"
    ).textContent = `Total: $${total.toFixed(2)}`;
  };

  // Function to handle quantity change
  const changeQuantity = (id, action) => {
    let cart = getCartFromLocalStorage();
    const item = cart.find((i) => i.id === id);

    if (item) {
      if (action === "increase") {
        item.quantity += 1;
      } else if (action === "decrease") {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove the item from the cart if quantity is 1 and decrease is clicked
          cart = cart.filter((i) => i.id !== id);
        }
      }

      saveCartToLocalStorage(cart);
      updateCartUI();
    }
  };

  // Event listener for quantity buttons
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("cart-item-quantity")) {
      const button = event.target;
      const itemId = parseInt(button.getAttribute("data-id"));
      const action = button.getAttribute("data-action");

      changeQuantity(itemId, action);
    }

    // Event listener for item removal
    if (event.target.classList.contains("cart-item-remove")) {
      const button = event.target;
      const itemId = parseInt(button.getAttribute("data-id"));
      let cart = getCartFromLocalStorage();
      cart = cart.filter((item) => item.id !== itemId);

      saveCartToLocalStorage(cart);
      updateCartUI();
    }
  });

  // Event listener for checkout button
  document.querySelector(".btn").addEventListener("click", () => {
    // Clear the cart in localStorage
    localStorage.removeItem("cart");
    // Update the cart UI
    updateCartUI();
    // Redirect to a confirmation or thank you page if needed
    // window.location.href = "/thank-you.html";
  });

  // Initial cart UI setup
  updateCartUI();
});
