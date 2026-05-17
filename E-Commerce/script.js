// ===========================
// PRODUCT DATA
// ===========================
const PRODUCTS = [
  {
    id: 1,
    name: 'Arc Minimalist Watch',
    category: 'Watches',
    price: 249,
    originalPrice: null,
    badge: 'Bestseller',
    badgeType: '',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80',
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80',
    ],
    description: 'Clean lines, Swiss movement. The Arc Watch is a study in restraint — a 38mm case in brushed stainless steel with a sapphire crystal face and a hand-stitched leather strap.',
    meta: { Material: 'Stainless Steel + Leather', Movement: 'Swiss Quartz', Water Resistance: '5 ATM', Case Size: '38mm' },
  },
  {
    id: 2,
    name: 'Leather Tote Bag',
    category: 'Bags',
    price: 189,
    originalPrice: 240,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    ],
    description: 'Full-grain Italian leather, hand-dyed and waxed for a rich patina that only gets better with age. Fits a 15" laptop and daily essentials.',
    meta: { Material: 'Full-Grain Leather', Dimensions: '14" x 12" x 4"', Strap: 'Adjustable, 24"', Lining: 'Canvas' },
  },
  {
    id: 3,
    name: 'Ceramic Desk Lamp',
    category: 'Accessories',
    price: 128,
    originalPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
    ],
    description: 'Hand-thrown ceramic base with a linen shade and adjustable warm LED. Each piece is unique — slight variations in glaze are a feature, not a flaw.',
    meta: { Material: 'Ceramic + Linen', Bulb: 'LED 8W (included)', Dimensions: '14" H x 7" W', Cord: '6ft fabric-wrapped' },
  },
  {
    id: 4,
    name: 'Wireless Earbuds Pro',
    category: 'Tech',
    price: 179,
    originalPrice: 219,
    badge: 'Sale',
    badgeType: 'sale',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    ],
    description: 'Active noise cancellation, 32-hour battery life, and a charging case that fits in your pocket. IPX4 water resistant. Available in Slate and Bone.',
    meta: { Battery: '8hr + 24hr case', ANC: 'Active Noise Cancellation', Connectivity: 'Bluetooth 5.3', Water Resistance: 'IPX4' },
  },
  {
    id: 5,
    name: 'Merino Wool Throw',
    category: 'Accessories',
    price: 95,
    originalPrice: null,
    badge: null,
    badgeType: '',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    ],
    description: 'Ethically sourced New Zealand merino, woven into a 130x170cm throw. Naturally temperature-regulating, machine washable, and available in five muted tones.',
    meta: { Material: '100% Merino Wool', Dimensions: '130 x 170cm', Care: 'Machine washable, cold', Origin: 'New Zealand' },
  },
  {
    id: 6,
    name: 'Slim Bifold Wallet',
    category: 'Accessories',
    price: 68,
    originalPrice: null,
    badge: 'New',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80',
    ],
    description: 'Holds up to 8 cards and folded bills. Vegetable-tanned leather that develops a personal patina over years of use. Stitched by hand in Portugal.',
    meta: { Material: 'Veg-Tanned Leather', Capacity: '8 cards + bills', Dimensions: '4.2" x 3.5"', Origin: 'Handmade in Portugal' },
  },
  {
    id: 7,
    name: 'Chronograph Field Watch',
    category: 'Watches',
    price: 389,
    originalPrice: null,
    badge: null,
    badgeType: '',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&q=80',
    ],
    description: 'A 42mm field watch with a Japanese chronograph movement, anti-reflective sapphire crystal, and 100m water resistance. Built for daily wear.',
    meta: { Movement: 'Japanese Chronograph', Water Resistance: '100m', Case: '42mm PVD Steel', Crystal: 'Anti-reflective Sapphire' },
  },
  {
    id: 8,
    name: 'Canvas Backpack',
    category: 'Bags',
    price: 145,
    originalPrice: null,
    badge: null,
    badgeType: '',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    ],
    description: 'Waxed cotton canvas body with leather trim and brass hardware. A padded 15" laptop sleeve, organiser panel, and a hidden back pocket.',
    meta: { Material: 'Waxed Canvas + Leather', Capacity: '22L', Laptop: 'Fits up to 15"', Hardware: 'Solid Brass' },
  },
];

// ===========================
// CART STATE
// ===========================
let cart = [];
let activeCategory = 'All';
let searchQuery = '';
let currentProductId = null;
let detailQty = 1;

// ===========================
// PAGE NAVIGATION
// ===========================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);

  if (page === 'cart') renderCart();
  if (page === 'checkout') renderCheckoutSummary();
}

// ===========================
// SEARCH
// ===========================
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    document.getElementById('searchInput').focus();
  } else {
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    renderProducts();
  }
}

function handleSearch() {
  searchQuery = document.getElementById('searchInput').value.toLowerCase();
  renderProducts();
  showPage('shop');
}

function clearSearch() {
  searchQuery = '';
  document.getElementById('searchInput').value = '';
  renderProducts();
}

// ===========================
// CATEGORY FILTER
// ===========================
function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.chip').forEach(c => {
    c.classList.toggle('active', c.dataset.cat === cat);
  });
  renderProducts();
}

// ===========================
// RENDER PRODUCTS
// ===========================
function renderProducts() {
  const sort = document.getElementById('sortSelect').value;
  let data = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery) || p.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (sort === 'price-asc') data.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') data.sort((a, b) => b.price - a.price);
  else if (sort === 'name') data.sort((a, b) => a.name.localeCompare(b.name));

  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');

  if (!data.length) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  grid.innerHTML = data.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<div class="product-badge ${p.badgeType}">${p.badge}</div>` : ''}
        <button class="quick-add" onclick="event.stopPropagation(); quickAdd(${p.id})">
          + Add to Cart
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-pricing">
          <span class="product-price">$${p.price}</span>
          ${p.originalPrice ? `<span class="product-original">$${p.originalPrice}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// ===========================
// PRODUCT DETAIL
// ===========================
function openProduct(id) {
  currentProductId = id;
  detailQty = 1;
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;

  const thumbs = p.images.map((img, i) => `
    <div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="switchThumb(this, '${img}')">
      <img src="${img}" alt="${p.name}" loading="lazy" />
    </div>
  `).join('');

  const metaRows = Object.entries(p.meta).map(([k, v]) => `
    <div class="detail-meta-row"><span>${k}</span><span>${v}</span></div>
  `).join('');

  document.getElementById('productDetail').innerHTML = `
    <button class="detail-back" onclick="showPage('shop')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="15 18 9 12 15 6"/></svg>
      Back to Shop
    </button>
    <div class="detail-grid">
      <div>
        <div class="detail-img-main">
          <img src="${p.images[0]}" alt="${p.name}" id="detailMainImg" />
        </div>
        ${p.images.length > 1 ? `<div class="detail-thumbnails">${thumbs}</div>` : ''}
      </div>
      <div>
        <div class="detail-cat">${p.category}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-price">
          $${p.price}
          ${p.originalPrice ? `<span class="original">$${p.originalPrice}</span>` : ''}
        </div>
        <p class="detail-desc">${p.description}</p>
        <div class="detail-qty">
          <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
          <div class="qty-val" id="detailQtyVal">1</div>
          <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
        </div>
        <div class="detail-actions">
          <button class="btn-dark" onclick="addToCartFromDetail()">Add to Cart</button>
          <button class="btn-outline" onclick="addToCartFromDetail(); showPage('cart')">Buy Now</button>
        </div>
        <div class="detail-meta">${metaRows}</div>
      </div>
    </div>
  `;

  showPage('product');
}

function switchThumb(el, imgSrc) {
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('detailMainImg').src = imgSrc;
}

function changeDetailQty(dir) {
  detailQty = Math.max(1, detailQty + dir);
  document.getElementById('detailQtyVal').textContent = detailQty;
}

function addToCartFromDetail() {
  const p = PRODUCTS.find(p => p.id === currentProductId);
  if (!p) return;
  addToCart(p.id, detailQty);
}

// ===========================
// CART OPERATIONS
// ===========================
function quickAdd(id) {
  addToCart(id, 1);
}

function addToCart(id, qty = 1) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    const p = PRODUCTS.find(p => p.id === id);
    cart.push({ id: p.id, name: p.name, category: p.category, price: p.price, image: p.image, qty });
  }
  updateCartCount();
  showToast(`Added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartCount();
  renderCart();
}

function updateCartQty(id, qty) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (qty < 1) { removeFromCart(id); return; }
  item.qty = qty;
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

// ===========================
// RENDER CART
// ===========================
function renderCart() {
  const container = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');

  if (!cart.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h3>Your cart is empty</h3>
        <p>Add something you love to get started.</p>
        <button class="btn-dark" onclick="showPage('shop')">Shop Now</button>
      </div>`;
    summary.innerHTML = '';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, ${item.qty - 1})">−</button>
          <div class="cart-qty-val">${item.qty}</div>
          <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, ${item.qty + 1})">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-remove" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');

  summary.innerHTML = buildSummaryHTML(true);
}

function buildSummaryHTML(showCheckoutBtn = true) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return `
    <div class="summary-title">Order Summary</div>
    <div class="summary-row"><span>Subtotal (${cart.reduce((s,i)=>s+i.qty,0)} items)</span><strong>$${subtotal.toFixed(2)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</strong></div>
    <div class="summary-row"><span>Tax (8%)</span><strong>$${tax.toFixed(2)}</strong></div>
    <div class="summary-row total"><span>Total</span><strong>$${total.toFixed(2)}</strong></div>
    ${showCheckoutBtn ? `<button class="btn-dark full" style="margin-top:1.5rem" onclick="showPage('checkout')">Proceed to Checkout</button>` : ''}
    <p class="summary-note">Free shipping on orders over $75. Taxes calculated at checkout.</p>
  `;
}

// ===========================
// CHECKOUT SUMMARY
// ===========================
function renderCheckoutSummary() {
  const col = document.getElementById('checkoutSummary');
  const itemsList = cart.map(i => `
    <div style="display:flex;gap:12px;align-items:center;margin-bottom:12px">
      <div style="width:52px;height:52px;border-radius:6px;overflow:hidden;background:var(--bg3);flex-shrink:0">
        <img src="${i.image}" alt="${i.name}" style="width:100%;height:100%;object-fit:cover" />
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:0.85rem;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${i.name}</div>
        <div style="font-size:0.75rem;color:var(--muted)">Qty: ${i.qty}</div>
      </div>
      <div style="font-size:0.85rem;font-weight:600">$${(i.price*i.qty).toFixed(2)}</div>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  col.innerHTML = `
    <div style="font-size:0.9rem;font-weight:600;margin-bottom:1.25rem">Your Order</div>
    ${itemsList}
    <div style="border-top:1px solid var(--border);margin-top:1rem;padding-top:1rem">
      <div class="summary-row"><span>Subtotal</span><strong>$${subtotal.toFixed(2)}</strong></div>
      <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</strong></div>
      <div class="summary-row"><span>Tax</span><strong>$${tax.toFixed(2)}</strong></div>
      <div class="summary-row total"><span>Total</span><strong>$${total.toFixed(2)}</strong></div>
    </div>
  `;
}

// ===========================
// PLACE ORDER (Stripe simulation)
// ===========================
function placeOrder() {
  const email = document.getElementById('co-email').value.trim();
  const fname = document.getElementById('co-fname').value.trim();
  const addr = document.getElementById('co-addr').value.trim();

  if (!email || !fname || !addr) {
    alert('Please fill in all required fields.');
    return;
  }

  const btn = document.getElementById('placeOrderBtn');
  btn.textContent = 'Processing...';
  btn.disabled = true;

  // Simulate Stripe payment processing
  // In production: call your backend to create a Stripe PaymentIntent,
  // then use stripe.js to confirm the payment with the client secret.
  setTimeout(() => {
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const shipping = subtotal >= 75 ? 0 : 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    const orderNum = 'ARC-' + Math.floor(10000 + Math.random() * 90000);

    document.getElementById('successOrder').innerHTML = `
      <div style="font-size:0.78rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem">Order Details</div>
      <div class="summary-row"><span>Order Number</span><strong>${orderNum}</strong></div>
      <div class="summary-row"><span>Email</span><strong>${email}</strong></div>
      <div class="summary-row"><span>Items</span><strong>${cart.reduce((s,i)=>s+i.qty,0)}</strong></div>
      <div class="summary-row total"><span>Total Charged</span><strong>$${total.toFixed(2)}</strong></div>
    `;

    cart = [];
    updateCartCount();
    showPage('success');
    btn.textContent = 'Place Order';
    btn.disabled = false;
  }, 1800);
}

// ===========================
// RESTART
// ===========================
function startOver() {
  showPage('shop');
  renderProducts();
}

// ===========================
// TOAST
// ===========================
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===========================
// CARD INPUT FORMATTERS
// ===========================
function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 2) v = v.substring(0, 2) + ' / ' + v.substring(2);
  input.value = v;
}

// ===========================
// FILTER CHIP EVENT LISTENERS
// ===========================
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => setCategory(chip.dataset.cat));
});

// ===========================
// INIT
// ===========================
renderProducts();
