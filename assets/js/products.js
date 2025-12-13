/* ============================================================
   products.js
   Database produk default + sinkronisasi localStorage
   ============================================================ */

// Produk default (bawaan website)
const defaultProducts = [
    {
        id: "madu-pahit",
        name: "Madu Pahit",
        category: "Madu Premium",
        price: 120000,
        image: "https://hni.net/public/front/img/produk/MADU%20PAHIT-1_04-01-19_.png",
        description: "Madu pahit premium untuk menjaga kesehatan dan meningkatkan stamina.",
        bestseller: true
    },
    {
        id: "centella-teh",
        name: "Centella Teh Sinergi",
        category: "Minuman Sehat",
        price: 70000,
        image: "https://hni.net/public/front/img/produk/CENTELLA-1_04-01-19_.png",
        description: "Teh herbal sinergi yang menenangkan dan menyehatkan.",
        bestseller: false
    },
    {
        id: "deep-olive",
        name: "Deep Olive",
        category: "Minyak Herba",
        price: 145000,
        image: "https://hni.net/public/front/img/produk/deep-olive-0625_16-06-25_.png",
        description: "Minyak herba premium untuk menunjang kesehatan alami.",
        bestseller: true
    },
    {
        id: "etta-goat-milk",
        name: "Etta Goat Milk",
        category: "Minuman Sehat",
        price: 75000,
        image: "https://hni.net/public/front/img/produk/egm-topbrand_14-11-24_.png",
        description: "Susu kambing murni yang kaya nutrisi.",
        bestseller: false
    },
    {
        id: "madu-multiflora",
        name: "Madu Multiflora",
        category: "Madu Premium",
        price: 100000,
        image: "https://hni.net/public/front/img/produk/MADU%20MULTI%202020_18-05-20_.png",
        description: "Madu multiflora alami berkualitas tinggi.",
        bestseller: false
    },
    {
        id: "madu-habbat",
        name: "Madu Habbat",
        category: "Madu Premium",
        price: 130000,
        image: "https://hni.net/public/front/img/produk/MADU%20HABBATS%202020_18-05-20_.png",
        description: "Kombinasi madu dan habbatussauda untuk kekebalan tubuh.",
        bestseller: true
    },
    {
        id: "hni-coffee",
        name: "HNI Coffee",
        category: "Minuman Sehat",
        price: 125000,
        image: "https://hni.net/public/front/img/produk/hcmockup2021_27-12-21_.png",
        description: "Kopi herbal khusus untuk menjaga stamina tubuh.",
        bestseller: true
    },
    {
        id: "hania-susu-kambing",
        name: "Hania Susu Kambing Full Cream",
        category: "Minuman Sehat",
        price: 75000,
        image: "https://hni.net/public/front/img/produk/hania-fc-full_01-03-23_.png",
        description: "Susu kambing full cream bernutrisi tinggi.",
        bestseller: false
    },
    {
        id: "sevel-stamina",
        name: "Sevel Stamina",
        category: "Minuman Sehat",
        price: 115000,
        image: "https://hni.net/public/front/img/produk/sevel-stamina_11-09-25_.png",
        description: "Minuman stamina herbal berkualitas premium.",
        bestseller: true
    },
    {
        id: "cappuccino-less",
        name: "Hania Realco Cappuccino Less Sugar",
        category: "Minuman Sehat",
        price: 50000,
        image: "https://hni.net/public/front/img/produk/cappucino-lessugar1_14-11-24_.png",
        description: "Cappuccino rendah gula yang tetap lezat.",
        bestseller: false
    },
    {
        id: "madu-health",
        name: "Madu HNI Health",
        category: "Madu Premium",
        price: 80000,
        image: "https://hni.net/public/front/img/produk/hni-health-3_18-11-24_.png",
        description: "Madu kesehatan untuk meningkatkan imun.",
        bestseller: false
    },
    {
        id: "gluta-juicy",
        name: "Hania Gluta Juicy Drink",
        category: "Minuman Sehat",
        price: 185000,
        image: "https://hni.net/public/front/img/produk/gluta2_27-10-22_.png",
        description: "Minuman kecantikan dengan gluta premium.",
        bestseller: true
    },
    {
        id: "mahkota-dara",
        name: "Mahkota Dara",
        category: "Aneka Herbal",
        price: 200000,
        image: "https://hni.net/public/front/img/produk/mahkota%20dara-l_16-06-25_.png",
        description: "Herbal tradisional serbaguna.",
        bestseller: false
    },
    {
        id: "habbat-kapsul",
        name: "Habbatusauda Kapsul",
        category: "Aneka Herbal",
        price: 60000,
        image: "https://hni.net/public/front/img/produk/2023-habbats_21-02-24_.png",
        description: "Kapsul habbatussauda untuk daya tahan tubuh.",
        bestseller: true
    },
    {
        id: "mhs-hot",
        name: "Minyak Herba Sinergi Hot",
        category: "Minyak Herba",
        price: 55000,
        image: "https://hni.net/public/front/img/produk/mhs-hot_16-12-24_.png",
        description: "Minyak herbal hangat untuk relaksasi.",
        bestseller: false
    },
    {
        id: "zareen-serum",
        name: "Zareen Bright Glow Serum",
        category: "Perawatan Kulit",
        price: 70000,
        image: "https://hni.net/public/front/img/produk/zareen-serum_22-12-22_.png",
        description: "Serum pencerah wajah alami.",
        bestseller: true
    },
    {
        id: "sabun-kolagen",
        name: "Sabun Kolagen",
        category: "Perawatan Kulit",
        price: 25000,
        image: "https://hni.net/public/front/img/produk/SABUN%20KOLAGEN-4_07-01-19_.png",
        description: "Sabun kolagen agar kulit tetap cerah dan lembut.",
        bestseller: false
    },
    {
        id: "hibis-pantyliner",
        name: "Hibis Pantyliner",
        category: "Perawatan Pribadi",
        price: 225000,
        image: "https://hni.net/public/front/img/produk/HIBIS%20PANTY-5_26-03-19_.png",
        description: "Pantyliner herbal premium untuk kenyamanan harian.",
        bestseller: false
    }
];

/* ============================================================
   Load produk dari LocalStorage (jika ada)
   ============================================================ */
function loadProducts() {
    const stored = localStorage.getItem("herbaprima_products");
    if (stored) {
        return JSON.parse(stored);
    }
    return defaultProducts;
}

/* ============================================================
   Save produk ke LocalStorage
   ============================================================ */
function saveProducts(products) {
    localStorage.setItem("herbaprima_products", JSON.stringify(products));
}

/* ============================================================
   Reset produk ke default
   ============================================================ */
function resetProducts() {
    localStorage.removeItem("herbaprima_products");
    location.reload();
}

let products = loadProducts();  // Produk final yg dipakai website

