/* ======================================================
   DETAIL PRODUK — Herbaprima Multipage
   ====================================================== */

// Ambil ID produk dari URL
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id"); // contoh: HP001
}

/* ------------------------------------------------------
   Ambil data produk dari products.js + localStorage
------------------------------------------------------ */
function getAllProducts() {
    let defaultProducts = window.products || [];
    let localProducts = JSON.parse(localStorage.getItem("herbaprima_products")) || [];

    return [...defaultProducts, ...localProducts];
}

/* ------------------------------------------------------
   Cari produk berdasarkan ID
------------------------------------------------------ */
function getProductById(id) {
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === id);
}

/* ------------------------------------------------------
   Render Detail Produk ke Halaman
------------------------------------------------------ */
function renderProductDetail() {
    const productId = getProductIdFromURL();
    const product = getProductById(productId);

    const container = document.querySelector("#product-detail");
    if (!container) return;

    if (!product) {
        container.innerHTML = `
            <div class="not-found">
                <h2>Produk tidak ditemukan 😢</h2>
                <a href="../index.html" class="btn-primary">Kembali ke Home</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="detail-wrapper">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="detail-info">
                <h1>${product.name}</h1>

                <p class="price">Rp ${product.price.toLocaleString()}</p>

                <p class="desc">${product.description || "Tidak ada deskripsi."}</p>

                <button class="btn-add-cart"
                    onclick='addToCart(${JSON.stringify(product)})'>
                    Tambah ke Keranjang
                </button>
            </div>
        </div>
    `;

    renderRelatedProducts(product.category, product.id);
}

/* ------------------------------------------------------
   Produk Terkait
------------------------------------------------------ */
function renderRelatedProducts(category, excludeId) {
    const container = document.querySelector("#related-products");
    if (!container) return;

    const products = getAllProducts()
        .filter(p => p.category === category && p.id !== excludeId)
        .slice(0, 4);

    if (products.length === 0) {
        container.innerHTML = "<p>Tidak ada produk terkait.</p>";
        return;
    }

    container.innerHTML = products
        .map(
            (p) => `
        <div class="related-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">Rp ${p.price.toLocaleString()}</p>

            <a href="detail.html?id=${p.id}" class="btn-detail">Detail</a>

            <button class="btn-cart-small"
                onclick='addToCart(${JSON.stringify(p)})'>
                + Keranjang
            </button>
        </div>
    `
        )
        .join("");
}

/* ------------------------------------------------------
   Jalankan Auto Saat Halaman Dibuka
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail();
});
