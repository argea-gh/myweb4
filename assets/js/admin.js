/* ======================================================
   ADMIN PANEL - Herbaprima Multipage
   ====================================================== */

/* ------------------------------------------------------
   1. Ambil default products + produk dari localStorage
------------------------------------------------------ */
function getDefaultProducts() {
    return window.products || []; // dari products.js
}

function getLocalProducts() {
    return JSON.parse(localStorage.getItem("herbaprima_products")) || [];
}

function saveLocalProducts(products) {
    localStorage.setItem("herbaprima_products", JSON.stringify(products));
}

function getAllProducts() {
    return [...getDefaultProducts(), ...getLocalProducts()];
}

/* ------------------------------------------------------
   2. Generate ID Produk otomatis
------------------------------------------------------ */
function generateProductID() {
    let all = getAllProducts();
    return "HP" + String(all.length + 1).padStart(4, "0");
}

/* ------------------------------------------------------
   3. Render Tabel Produk
------------------------------------------------------ */
function renderProductTable() {
    const tbody = document.querySelector("#admin-product-list");
    if (!tbody) return;

    let products = getAllProducts();
    let local = getLocalProducts(); // hanya produk editable

    tbody.innerHTML = local
        .map(
            (p, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${p.id}</td>
            <td><img src="${p.image}" class="admin-thumb"></td>
            <td>${p.name}</td>
            <td>Rp ${p.price.toLocaleString()}</td>
            <td>${p.category}</td>

            <td>
                <button class="btn-edit" onclick="editProduct('${p.id}')">Edit</button>
                <button class="btn-delete" onclick="deleteProduct('${p.id}')">Hapus</button>
            </td>
        </tr>
    `
        )
        .join("");
}

/* ------------------------------------------------------
   4. Tambah Produk Baru
------------------------------------------------------ */
function addProduct() {
    let local = getLocalProducts();

    const newProduct = {
        id: generateProductID(),
        name: document.querySelector("#p-name").value.trim(),
        price: Number(document.querySelector("#p-price").value),
        category: document.querySelector("#p-category").value,
        image: document.querySelector("#p-image").value.trim(),
        description: document.querySelector("#p-desc").value.trim(),
    };

    if (!newProduct.name || !newProduct.price || !newProduct.image) {
        alert("Nama, harga, dan URL gambar wajib diisi!");
        return;
    }

    local.push(newProduct);
    saveLocalProducts(local);

    alert("Produk berhasil ditambahkan!");
    renderProductTable();
    clearForm();
}

/* ------------------------------------------------------
   5. Isi Form untuk Edit Produk
------------------------------------------------------ */
function editProduct(id) {
    const local = getLocalProducts();
    const p = local.find(x => x.id === id);

    if (!p) return;

    document.querySelector("#p-id").value = p.id;
    document.querySelector("#p-name").value = p.name;
    document.querySelector("#p-price").value = p.price;
    document.querySelector("#p-category").value = p.category;
    document.querySelector("#p-image").value = p.image;
    document.querySelector("#p-desc").value = p.description;

    document.querySelector("#btn-add").style.display = "none";
    document.querySelector("#btn-update").style.display = "inline-block";
}

/* ------------------------------------------------------
   6. Update Produk
------------------------------------------------------ */
function updateProduct() {
    let id = document.querySelector("#p-id").value;
    let local = getLocalProducts();

    let index = local.findIndex(p => p.id === id);
    if (index === -1) return;

    local[index] = {
        id,
        name: document.querySelector("#p-name").value.trim(),
        price: Number(document.querySelector("#p-price").value),
        category: document.querySelector("#p-category").value,
        image: document.querySelector("#p-image").value.trim(),
        description: document.querySelector("#p-desc").value.trim(),
    };

    saveLocalProducts(local);

    alert("Produk berhasil diperbarui!");
    renderProductTable();
    clearForm();
}

/* ------------------------------------------------------
   7. Hapus Produk
------------------------------------------------------ */
function deleteProduct(id) {
    if (!confirm("Hapus produk ini?")) return;

    let local = getLocalProducts();
    local = local.filter(p => p.id !== id);

    saveLocalProducts(local);
    renderProductTable();
}

/* ------------------------------------------------------
   8. Reset LocalStorage (Kembali ke Default)
------------------------------------------------------ */
function resetDatabase() {
    if (!confirm("Reset database? Semua produk tambahan akan hilang!")) return;

    localStorage.removeItem("herbaprima_products");
    renderProductTable();
}

/* ------------------------------------------------------
   9. Clear Form
------------------------------------------------------ */
function clearForm() {
    document.querySelector("#form-product").reset();
    document.querySelector("#p-id").value = "";

    document.querySelector("#btn-add").style.display = "inline-block";
    document.querySelector("#btn-update").style.display = "none";
}

/* ------------------------------------------------------
   10. Preview Gambar
------------------------------------------------------ */
function previewImage() {
    let url = document.querySelector("#p-image").value;
    document.querySelector("#img-preview").src = url;
}

/* ------------------------------------------------------
   11. Auto Render Saat Halaman Admin Dibuka
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    renderProductTable();
});
