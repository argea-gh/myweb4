document.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>document.getElementById('preloader').classList.add('hidden'),1000);
  renderProducts();

  // Hero slider
  setInterval(heroSlider,4000
              
const products = [
  {id:1, name:"Madu Pahit", price:120000, image:"https://hni.net/public/front/img/produk/MADU%20PAHIT-1_04-01-19_.png"},
  {id:2, name:"Centella Teh", price:70000, image:"https://hni.net/public/front/img/produk/CENTELLA-1_04-01-19_.png"},
  {id:3, name:"Deep Olive", price:145000, image:"https://hni.net/public/front/img/produk/deep-olive-0625_16-06-25_.png"}
];
let cart = [];
let currentSlide = 0;

function formatRupiah(num){return 'Rp ' + num.toLocaleString('id-ID');}

function renderProducts(){
  const grid=document.getElementById('productGrid');
  grid.innerHTML=products.map(p=>`
    <div class="bg-white rounded shadow p-4">
      <img src="${p.image}" alt="${p.name}" class="h-40 mx-auto mb-4 object-contain">
      <h3 class="font-semibold">${p.name}</h3>
      <p class="text-green-600 font-bold mb-2">${formatRupiah(p.price)}</p>
      <button class="bg-green-600 text-white px-3 py-2 rounded add-to-cart" data-id="${p.id}">Tambah ke Keranjang</button>
    </div>`).join('');
}

function updateCart(){
  document.getElementById('cartCount').textContent=cart.reduce((s,i)=>s+i.qty,0);
  const items=document.getElementById('cartItems');
  items.innerHTML=cart.map(i=>`<div class="flex justify-between">
    <span>${i.name} x${i.qty}</span><span>${formatRupiah(i.price*i.qty)}</span>
  </div>`).join('');
  const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cartTotal').textContent=formatRupiah(total);
}

function showToast(msg){
  const t=document.createElement('div');t.className='toast';t

