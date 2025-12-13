/* ======================================================
   CART SYSTEM — Herbaprima Multipage
   Menggunakan localStorage
   ====================================================== */

const CART_KEY = "herbaprima_cart";

/* ------------------------------------------------------
   Load Cart from localStorage
------------------------------------------------------ */
function loadCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

/* ------------------------------------------------------
   Save Cart
------------------------------------------------------ */
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ------------------------------------------------------
   Add to Cart
------------------------------------------------------ */
function addToCart(product, qty = 1) {
    let cart = loadCart();

    const index = cart.findIndex(item => item.id === product.id);

    if (index >= 0) {
        cart[index].qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: qty
        });
    }

    saveCart(cart);
    updateCartBadge();
    alert("Produk berhasil ditambahkan ke keranjang!");
}

/* ------------------------------------------------------
   Remove Item dari Cart
------------------------------------------------------ */
function removeCartItem(id) {
    let cart = loadCart().filter(item => item.id !== id);
    saveCart(cart);
    renderCartPage();
    updateCartBadge();
}

/* ------------------------------------------------------
   Update Qty (Pada Page Cart)
------------------------------------------------------ */
function updateQty(id, qty) {
    let cart = loadCart();

    let item = cart.find(i => i.id === id);
    if (!item) return;

    qty = Number(qty);
    if (qty <= 0) {
        removeCartItem(id);
        return;
    }

    item.qty = qty;
    saveCart(cart);
    renderCartPage();
    updateCartBadge();
}

/* ------------------------------------------------------
   Hitung Total Cart
------------------------------------------------------ */
function calculateCartTotal() {
    const cart = loadCart();
    return cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

/* ------------------------------------------------------
   Update Cart Badge (angka di icon keranjang)
------------------------------------------------------ */
function updateCartBadge() {
    const cart = loadCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

    const badge = document.querySelector(".cart-badge");
    if (!badge) return;

    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? "flex" : "none";
}

/* ------------------------------------------------------
   Render Cart Page (Halaman cart.html)
------------------------------------------------------ */
function renderCartPage() {
    const cartContainer = document.querySelector("#cart-list");
    if (!cartContainer) return; // Bukan halaman cart

    const cart = loadCart();

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                Keranjang masih kosong 😅<br>
                <a href="../index.html" class="btn-primary">Belanja Sekarang</a>
            </div>
        `;
        document.querySelector("#cart-total").textContent = "0";
        return;
    }

    cartContainer.innerHTML = cart
        .map(
            (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>Rp ${item.price.toLocaleString()}</p>
                <div class="qty-box">
                    <input type="number" min="1" value="${item.qty}"
                           onchange="updateQty('${item.id}', this.value)">
                </div>
                <button class="btn-remove" onclick="removeCartItem('${item.id}')">
                    Hapus
                </button>
            </div>
        </div>
    `
        )
        .join("");

    document.querySelector("#cart-total").textContent =
        calculateCartTotal().toLocaleString();
}

/* ------------------------------------------------------
   Checkout via WhatsApp
------------------------------------------------------ */
function checkoutWhatsapp() {
    const cart = loadCart();
    if (cart.length === 0) {
        alert("Keranjang kamu masih kosong!");
        return;
    }

    let message = "Halo kak, saya ingin memesan:%0A%0A";

    cart.forEach((item) => {
        message += `• ${item.name} (${item.qty} x Rp ${item.price.toLocaleString()})%0A`;
    });

    message += `%0ATotal: Rp ${calculateCartTotal().toLocaleString()}%0A`;
    message += `%0AData pembeli:%0ANama:%0AAlamat lengkap:%0ANo HP:%0A`;

    const whatsappNumber = "6281234567890"; // ➜ GANTI NOMOR WA ANDA

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
}

/* ------------------------------------------------------
   Reset Cart (Opsional untuk admin)
------------------------------------------------------ */
function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartBadge();
}

/* ------------------------------------------------------
   Auto Load Badge on all pages
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", updateCartBadge);
