// ============================================
// GLOBAL CONFIG & DATA
// ============================================

// Default configuration for editable content
const defaultConfig = {
  brand_name: "Herbaprima",
  hero_title: "Herbaprima — Solusi Herbal Modern untuk Hidup Sehat Alami",
  hero_subtitle: "Produk herbal premium berkualitas tinggi dari alam untuk kesehatan optimal Anda dan keluarga",
  whatsapp_number: "6282241900467",
  store_address: "Jl. Herbal Sehat No. 123, Jakarta Selatan, DKI Jakarta 12345",
  store_email: "info@herbaprima.com",
  store_hours: "Senin - Sabtu: 08:00 - 17:00 WIB"
};

// Product Data Array - All available products
const products = [
  { id:1, name:"Madu Pahit", price:120000, category:"madu", icon:"🍯", image:"https://hni.net/public/front/img/produk/MADU%20PAHIT-1_04-01-19_.png", bestseller:true,
    description:"Madu pahit kualitas premium dengan khasiat luar biasa untuk kesehatan. Dipercaya dapat membantu mengatasi berbagai masalah kesehatan.",
    benefits:["Meningkatkan daya tahan tubuh","Membantu mengatasi diabetes","Antioksidan tinggi","Detoksifikasi alami"],
    composition:"Madu pahit murni 100%" },
  { id:2, name:"Centella Teh Sinergi", price:70000, category:"minuman", icon:"🍵", image:"https://hni.net/public/front/img/produk/CENTELLA-1_04-01-19_.png", bestseller:false,
    description:"Teh herbal dengan ekstrak centella asiatica yang menyegarkan dan menyehatkan.",
    benefits:["Meningkatkan konsentrasi","Menjaga kesehatan otak","Antioksidan alami","Menyegarkan tubuh"],
    composition:"Ekstrak centella, teh hijau, herbal alami" },
  { id:3, name:"Deep Olive", price:145000, category:"minyak", icon:"🫒", image:"https://hni.net/public/front/img/produk/deep-olive-0625_16-06-25_.png", bestseller:true,
    description:"Minyak zaitun extra virgin premium dengan kualitas terbaik. Kaya akan nutrisi untuk kesehatan jantung.",
    benefits:["Menjaga kesehatan jantung","Menurunkan kolesterol","Kaya antioksidan","Melembabkan kulit"],
    composition:"Minyak zaitun extra virgin 100%" },
  { id:4, name:"Etta Goat Milk", price:75000, category:"minuman", icon:"🥛", image:"https://hni.net/public/front/img/produk/egm-topbrand_14-11-24_.png", bestseller:true,
    description:"Susu kambing etawa premium dengan nutrisi lengkap. Mudah dicerna dan baik untuk semua usia.",
    benefits:["Sumber kalsium tinggi","Mudah dicerna","Meningkatkan stamina","Nutrisi lengkap"],
    composition:"Susu kambing etawa murni, vitamin, mineral" },
  { id:5, name:"Madu Multiflora", price:100000, category:"madu", icon:"🍯", image:"https://hni.net/public/front/img/produk/MADU%20MULTI%202020_18-05-20_.png", bestseller:true,
    description:"Madu multiflora dari berbagai jenis bunga pilihan.",
    benefits:["Meningkatkan imunitas","Sumber energi alami","Menjaga kesehatan pencernaan","Antioksidan tinggi"],
    composition:"Madu multiflora murni 100%" },
  { id:6, name:"Madu Habbat", price:130000, category:"madu", icon:"🍯", image:"https://hni.net/public/front/img/produk/MADU%20HABBATS%202020_18-05-20_.png", bestseller:true,
    description:"Perpaduan madu murni dengan habbatussauda.",
    benefits:["Meningkatkan imunitas","Antioksidan super","Menjaga kesehatan jantung","Stamina dan vitalitas"],
    composition:"Madu murni, ekstrak habbatussauda" },
  { id:7, name:"HNI Coffee", price:125000, category:"minuman", icon:"☕", image:"https://hni.net/public/front/img/produk/hcmockup2021_27-12-21_.png", bestseller:true,
    description:"Kopi premium dengan tambahan herbal pilihan untuk stamina dan vitalitas.",
    benefits:["Meningkatkan stamina","Menambah energi","Kaya antioksidan","Meningkatkan fokus"],
    composition:"Kopi arabica, ekstrak herbal, ginseng" },
  { id:8, name:"Hania Susu Kambing Full Cream", price:75000, category:"minuman", icon:"🥛", image:"https://hni.net/public/front/img/produk/hania-fc-full_01-03-23_.png", bestseller:false,
    description:"Susu kambing full cream dengan rasa lezat dan nutrisi lengkap.",
    benefits:["Kalsium tinggi","Protein berkualitas","Vitamin lengkap","Memperkuat tulang"],
    composition:"Susu kambing full cream, vitamin, mineral" },
  { id:9, name:"Sevel Stamina", price:115000, category:"minuman", icon:"💪", image:"https://hni.net/public/front/img/produk/sevel-stamina_11-09-25_.png", bestseller:true,
    description:"Suplemen herbal untuk meningkatkan stamina dan vitalitas pria.",
    benefits:["Meningkatkan stamina pria","Menambah vitalitas","Meningkatkan energi","Herbal alami"],
    composition:"Ekstrak herbal, ginseng, maca, tribulus" },
  { id:10, name:"Cappuccino Less Sugar", price:50000, category:"minuman", icon:"☕", image:"https://hni.net/public/front/img/produk/cappucino-lessugar1_14-11-24_.png", bestseller:false,
    description:"Cappuccino gula rendah, cocok untuk pola makan sehat.",
    benefits:["Gula rendah","Rasa creamy","Energi sehat","Cocok untuk diet"],
    composition:"Kopi, susu, gula rendah kalori" },
  { id:11, name:"Madu HNI Health", price:80000, category:"madu", icon:"🍯", image:"https://hni.net/public/front/img/produk/hni-health-3_18-11-24_.png", bestseller:false,
    description:"Madu kesehatan premium untuk menjaga daya tahan tubuh.",
    benefits:["Meningkatkan imunitas","Sumber energi","Menjaga kesehatan","Cocok untuk harian"],
    composition:"Madu murni berkualitas premium" },
  { id:12, name:"Hania Gluta Juicy Drink", price:185000, category:"minuman", icon:"🧃", image:"https://hni.net/public/front/img/produk/gluta2_27-10-22_.png", bestseller:true,
    description:"Minuman kecantikan dengan glutathione dan kolagen.",
    benefits:["Mencerahkan kulit","Antioksidan tinggi","Kolagen untuk kulit","Awet muda"],
    composition:"Glutathione, kolagen, vitamin C, ekstrak buah" }
];

// ============================================
// APPLICATION STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('herbaprima_cart')) || [];
let currentSlide = 0;
let selectedProduct = null;

// ============================================
// UTILITY & CONFIG FUNCTIONS
// ============================================
function formatRupiah(number) {
  return 'Rp ' + Number(number).toLocaleString('id-ID');
}

async function onConfigChange(config) {
  document.getElementById('headerBrandName')?.textContent = config.brand_name || defaultConfig.brand_name;
  document.getElementById('footerBrandName')?.textContent = config.brand_name || defaultConfig.brand_name;
  document.getElementById('heroTitle')?.textContent = config.hero_title || defaultConfig.hero_title;
  document.getElementById('heroSubtitle')?.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
  document.getElementById('footerAddress')?.textContent = config.store_address || defaultConfig.store_address;
  document.getElementById('footerEmail')?.textContent = config.store_email || defaultConfig.store_email;
  document.getElementById('footerHours')?.textContent = config.store_hours || defaultConfig.store_hours;
  document.getElementById('footerWhatsApp')?.textContent = `+${(config.whatsapp_number || defaultConfig.whatsapp_number)}`;

  const floatingWA = document.getElementById('floatingWhatsApp');
  const whatsappNum = (config.whatsapp_number || defaultConfig.whatsapp_number).replace(/^0/, '');
  if (floatingWA) floatingWA.href = `https://wa.me/${whatsappNum}?text=Halo%20${encodeURIComponent(config.brand_name || defaultConfig.brand_name)},%20saya%20ingin%20bertanya%20tentang%20produk%20Anda`;
}

// ============================================
// PRODUCT RENDERING
// ============================================
function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  const bestsellerGrid = document.getElementById('bestsellerGrid');
  if (!productGrid) return;

  productGrid.innerHTML = products.map(product => `
    <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden fade-in cursor-pointer" data-product-id="${product.id}">
      <div class="product-image bg-white h-48 flex items-center justify-center relative overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4"
          onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 text-6xl\'>${product.icon || '📦'}</div>';">
        ${product.bestseller ? '<span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">TERLARIS</span>' : ''}
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-gray-800 mb-2">${product.name}</h3>
        <p class="text-green-600 font-bold mb-4">${formatRupiah(product.price)}</p>
        <div class="flex space-x-2">
          <button class="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition add-to-cart" data-product-id="${product.id}">Tambah ke Keranjang</button>
          <button class="bg-green-100 text-green-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-200 transition view-detail" data-product-id="${product.id}">Detail</button>
        </div>
      </div>
    </div>
  `).join('');

  if (bestsellerGrid) {
    const bestsellers = products.filter(p => p.bestseller);
    bestsellerGrid.innerHTML = bestsellers.map(product => `
      <div class="product-card bg-white rounded-xl shadow-lg overflow-hidden fade-in cursor-pointer" data-product-id="${product.id}">
        <div class="product-image bg-white h-48 flex items-center justify-center relative overflow-hidden">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4"
            onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='<div class=\'w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 text-6xl\'>${product.icon || '📦'}</div>';">
          <span class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">TERLARIS</span>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-gray-800 mb-2">${product.name}</h3>
          <p class="text-green-600 font-bold mb-4">${formatRupiah(product.price)}</p>
          <div class="flex space-x-2">
            <button class="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition add-to-cart" data-product-id="${product.id}">Tambah ke Keranjang</button>
            <button class="bg-green-100 text-green-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-200 transition view-detail" data-product-id="${product.id}">Detail</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ============================================
// PRODUCT DETAIL MODAL
// ============================================
function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalImage').innerHTML = `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain"
    onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-8xl\\'>${product.icon || '📦'}</span>';">`;
  document.getElementById('modalPrice').textContent = formatRupiah(product.price);
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalBenefits').innerHTML = product.benefits.map(b => `<li>${b}</li>`).join('');
  document.getElementById('modalComposition').textContent = product.composition;

  if (product.bestseller) document.getElementById('modalBestseller').classList.remove('hidden');
  else document.getElementById('modalBestseller').classList.add('hidden');

  document.getElementById('productModal').classList.add('active');
}

// ============================================
// SHOPPING CART MANAGEMENT
// ============================================
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) existingItem.quantity++;
  else cart.push({ id:product.id, name:product.name, price:product.price, icon:product.icon, image:product.image, quantity:1 });

  localStorage.setItem('herbaprima_cart', JSON.stringify(cart));
  updateCartCount();
  return true;
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const c1 = document.getElementById('cartCount');
  const c2 = document.getElementById('cartCountMobile');
  if (c1) c1.textContent = count;
  if (c2) c2.textContent = count;
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const emptyCart = document.getElementById('emptyCart');
  const cartSummary = document.getElementById('cartSummary');
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = '';
    emptyCart?.classList.remove('hidden');
    cartSummary?.classList.add('hidden');
    return;
  }

  emptyCart?.classList.add('hidden');
  cartSummary?.classList.remove('hidden');

  cartItems.innerHTML = cart.map(item => `
    <div class="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
      <div class="w-16 h-16 flex items-center justify-center bg-white rounded-lg overflow-hidden">
        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain"
          onerror="this.src=''; this.style.display='none'; this.parentElement.innerHTML='<span class=\\'text-3xl\\'>${item.icon}</span>';">
      </div>
      <div class="flex-1">
        <h4 class="font-semibold text-gray-800">${item.name}</h4>
        <p class="text-green-600 font-bold">${formatRupiah(item.price)}</p>
      </div>
      <div class="flex items-center space-x-2">
        <button class="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition decrease-qty" data-product-id="${item.id}">-</button>
        <span class="w-10 text-center font-semibold">${item.quantity}</span>
        <button class="w-8 h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition increase-qty" data-product-id="${item.id}">+</button>
      </div>
      <button class="text-red-500 hover:text-red-700 transition remove-item" data-product-id="${item.id}">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
        </svg>
      </button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('cartTotal').textContent = formatRupiah(total);
}

function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
  localStorage.setItem('herbaprima_cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function removeItem(productId) {
  cart = cart.filter(i => i.id !== productId);
  localStorage.setItem('herbaprima_cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function clearCart() {
  const confirmOverlay = document.createElement('div');
  confirmOverlay.className = 'confirm-overlay';
  confirmOverlay.innerHTML = `
    <div class="bg-white rounded-lg p-6 max-w-sm mx-4">
      <h3 class="text-xl font-semibold mb-4">Hapus Semua Item?</h3>
      <p class="text-gray-600 mb-6">Anda yakin ingin mengosongkan keranjang belanja?</p>
      <div class="flex space-x-3">
        <button id="confirmClear" class="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">Ya, Hapus</button>
        <button id="cancelClear" class="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300">Batal</button>
      </div>
    </div>
  `;
  document.body.appendChild(confirmOverlay);
  document.getElementById('confirmClear').onclick = () => {
    cart = [];
    localStorage.setItem('herbaprima_cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    document.body.removeChild(confirmOverlay);
    showToast('Keranjang berhasil dikosongkan');
  };
  document.getElementById('cancelClear').onclick = () => document.body.removeChild(confirmOverlay);
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================
function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const config = window.elementSdk?.config || defaultConfig;
  const whatsappNum = (config.whatsapp_number || defaultConfig.whatsapp_number).replace(/^0/, '');
  const brandName = config.brand_name || defaultConfig.brand_name;

  let message = `Halo ${brandName}, saya ingin memesan:\n\n`;
  cart.forEach(item => {
    message += `- ${item.name} Qty: ${item.quantity} (${formatRupiah(item.price * item.quantity)})\n`;
  });
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  message += `\nTotal: ${formatRupiah(total)}\n\nNama:\nAlamat:\nNo HP:`;

  const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function buyViaWhatsApp() {
  if (!selectedProduct) return;
  const config = window.elementSdk?.config || defaultConfig;
  const whatsappNum = (config.whatsapp_number || defaultConfig.whatsapp_number).replace(/^0/, '');
  const brandName = config.brand_name || defaultConfig.brand_name;
  const message = `Halo ${brandName}, saya ingin memesan:\n\n- ${selectedProduct.name} Qty: 1 (${formatRupiah(selectedProduct.price)})\n\nNama:\nAlamat:\nNo HP:`;
  const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ============================================
// UI NOTIFICATIONS & ANIMATIONS
// ============================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 2000);
}

function heroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  dots.forEach((d, i) => d.style.opacity = i === currentSlide ? '1' : '0.5');
  currentSlide = (currentSlide + 1) % slides.length;
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ============================================
// PAGE NAVIGATION (single-page compatibility)
// ============================================
function navigateToPage(pageName) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const targetPage = document.getElementById(pageName + 'Page');
  if (targetPage) {
    targetPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll(`.nav-link[data-page="${pageName}"]`).forEach(link => link.classList.add('active'));
}

// ============================================
// EVENT HANDLERS - INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  setTimeout(() => document.getElementById('preloader')?.classList.add('hidden'), 1000);

  // Init
  onConfigChange(defaultConfig);
  renderProducts();
  updateCartCount();
  observeElements();
  setInterval(heroSlider, 4000);

  // Slider dot navigation
  document.querySelectorAll('.slider-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => { currentSlide = index; heroSlider(); });
  });

  // Mobile menu toggle
  document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
    document.getElementById('mobileMenu')?.classList.toggle('hidden');
  });

  // Global click delegation: product detail & add-to-cart & cart controls
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-detail')) {
      const productId = parseInt(e.target.dataset.productId);
      showProductDetail(productId);
    }
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
      const btn = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
      const productId = parseInt(btn.dataset.productId);
      addToCart(productId);
      showToast('Produk ditambahkan ke keranjang!');
    }
    if (e.target.classList.contains('increase-qty')) {
      updateQuantity(parseInt(e.target.dataset.productId), 1);
    }
    if (e.target.classList.contains('decrease-qty')) {
      updateQuantity(parseInt(e.target.dataset.productId), -1);
    }
    if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
      const btn = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
      removeItem(parseInt(btn.dataset.productId));
    }
  });

  // Category cards (single page mode)
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => navigateToPage('produk'));
  });

  // Navigation links (single page mode)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const page = link.dataset.page;
      if (page) {
        e.preventDefault();
        navigateToPage(page);
        document.getElementById('mobileMenu')?.classList.add('hidden');
      }
    });
  });

  // Cart buttons
  document.getElementById('cartBtn')?.addEventListener('click', () => {
    renderCart();
    document.getElementById('cartModal')?.classList.add('active');
  });
  document.getElementById('floatingCartMobile')?.addEventListener('click', () => {
    renderCart();
    document.getElementById('cartModal')?.classList.add('active');
  });

  // Modal close buttons
  document.getElementById('closeModal')?.addEventListener('click', () => {
    document.getElementById('productModal')?.classList.remove('active');
  });
  document.getElementById('closeModalBottom')?.addEventListener('click', () => {
    document.getElementById('productModal')?.classList.remove('active');
  });
  document.getElementById('closeCart')?.addEventListener('click', () => {
    document.getElementById('cartModal')?.classList.remove('active');
  });
  document.getElementById('closeCartBottom')?.addEventListener('click', () => {
    document.getElementById('cartModal')?.classList.remove('active');
  });

  // Product modal actions
  document.getElementById('modalAddToCart')?.addEventListener('click', () => {
    if (selectedProduct) {
      addToCart(selectedProduct.id);
      showToast('Produk ditambahkan ke keranjang!');
    }
  });
  document.getElementById('modalBuyWhatsApp')?.addEventListener('click', buyViaWhatsApp);

  // Cart actions
  document.getElementById('clearCart')?.addEventListener('click', clearCart);
  document.getElementById('checkoutWhatsApp')?.addEventListener('click', checkoutWhatsApp);

  // Scroll-to-top visibility + click
  window.addEventListener('scroll', () => {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;
    if (window.pageYOffset > 300) scrollBtn.classList.add('visible');
    else scrollBtn.classList.remove('visible');
  });
  document.getElementById('scrollToTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form submit → WhatsApp
  document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const config = window.elementSdk?.config || defaultConfig;
    const whatsappNum = (config.whatsapp_number || defaultConfig.whatsapp_number).replace(/^0/, '');
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    const text = `Halo, saya ${name}\nEmail: ${email}\n\nPesan: ${message}`;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    e.target.reset();
    showToast('Pesan Anda akan dikirim via WhatsApp');
  });

  // Newsletter form
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Terima kasih telah berlangganan newsletter!');
    e.target.reset();
  });

  // Element SDK initialization (optional edit panel)
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities: () => ({ recolorables: [], borderables: [], fontEditable: undefined, fontSizeable: undefined }),
      mapToEditPanelValues: (config) => new Map([
        ['brand_name', config.brand_name || defaultConfig.brand_name],
        ['hero_title', config.hero_title || defaultConfig.hero_title],
        ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
        ['whatsapp_number', config.whatsapp_number || defaultConfig.whatsapp_number],
        ['store_address', config.store_address || defaultConfig.store_address],
        ['store_email', config.store_email || defaultConfig.store_email],
        ['store_hours', config.store_hours || defaultConfig.store_hours]
      ])
    });
  }
});
