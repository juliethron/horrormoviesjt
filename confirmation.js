const container = document.querySelector("#checkout-list");
const totalDisplay = document.querySelector("#checkout-total");
const checkoutButton = document.querySelector("#checkout-btn");

async function loadCart() {
    container.innerHTML = `<p class="loading">Preparing your basket...</p>`;

    try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        container.innerHTML = `
        <div class="empty-cart">
            <p>Your basket is empty.</p>
            <a href="../index.html" class="btn">Browse Movies</a>
        </div>
        `;
        totalDisplay.textContent = "$0.00";
        checkoutButton.disabled = true;
        checkoutButton.classList.add("disabled");
        return;
    }

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);

        container.innerHTML += `
        <div class="checkout-item">
            <div class="item-info">
            <img src="${item.image?.url || item.image}" alt="${item.title}" class="checkout-img" />
            <div>
                <h3>${item.title}</h3>
                <p>${item.genre || "Horror / Thriller"}</p>
                <p>$${Number(item.price).toFixed(2)}</p>
            </div>
            </div>
            <button class="remove-btn" aria-label="Remove ${item.title}" data-index="${index}">
            Remove
            </button>
        </div>
        `;
    });

    totalDisplay.textContent = `$${total.toFixed(2)}`;
    checkoutButton.disabled = false;
    checkoutButton.classList.remove("disabled");

    document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        removeFromCart(index);
        });
    });
    } catch (error) {
    container.innerHTML = `
        <p class="error">⚠️ Something went wrong loading your basket.<br>
        Try refreshing the page.</p>
    `;
    }
}


function removeFromCart(index) {
    try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    } catch (error) {
    alert("Error removing item. Please try again.");
    }
}


checkoutButton.addEventListener("click", async () => {
    try {
    checkoutButton.textContent = "Processing...";
    checkoutButton.disabled = true;

    await new Promise((resolve) => setTimeout(resolve, 600));

    localStorage.removeItem("cart");
    window.location.href = "/checkout/confirmation/index.html";
    } catch (error) {
    alert("⚠️ Something went wrong during checkout. Please try again.");
    }
});


loadCart();
