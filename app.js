/**
 * Franceska Venzon Confeitaria — Caxias do Sul - RS
 * Cardápio Digital & Checkout Oficial Onira.fly Direto no WhatsApp
 * Telefone / WhatsApp Oficial: (54) 99914-1812
 * Endereço: Rua José Tovasi, 423, Bairro Cruzeiro, Caxias do Sul - RS
 * Powered by Onira Labs
 */

// WhatsApp Oficial da Franceska Venzon Confeitaria (Verificado via Google Maps / Fasty)
const CLIENT_WHATSAPP = '5554999141812';

// Catálogo Oficial com Imagens Reais do Estabelecimento
const CATALOG_ITEMS = [
  {
    id: "torta-limao",
    name: "Torta de Limão com Merengue Suíço Tostado",
    category: "tortas",
    categoryLabel: "Tortas & Fatias",
    desc: "Massa sablée amanteigada e crocante, curd sedoso de limão siciliano e merengue suíço finalizado no maçarico com raspas frescas.",
    price: 24.0,
    typePreco: "Fatia Generosa",
    img: "assets/sobremesa_1.jpg",
    destaque: true,
    badge: "Assinatura da Casa ⭐",
    rating: "5.0"
  },
  {
    id: "rocambole-merengue",
    name: "Rocambole de Merengue com Frutas Vermelhas",
    category: "tortas",
    categoryLabel: "Tortas & Fatias",
    desc: "Massa de merengue fofa e aerada, recheada com nata fresca batida e compota artesanal de morangos, amoras e framboesas da serra.",
    price: 26.0,
    typePreco: "Fatia Generosa",
    img: "assets/sobremesa_2.jpg",
    destaque: true,
    badge: "Mais Pedido ⭐",
    rating: "5.0"
  },
  {
    id: "cheesecake-basco",
    name: "San Sebastián Cheesecake (Cheesecake Basco)",
    category: "tortas",
    categoryLabel: "Tortas & Fatias",
    desc: "Clássico da confeitaria espanhola: centro extremamente aveludado e cremoso, topo tostado e caramelizado em alta temperatura.",
    price: 25.0,
    typePreco: "Fatia Generosa",
    img: "assets/sobremesa_5.jpg",
    destaque: true,
    badge: "Favorito da Chef 👑",
    rating: "5.0"
  },
  {
    id: "bolo-sabores-do-sul",
    name: "Bolo Sabores do Sul (Melhor Bolo de Caxias)",
    category: "tortas",
    categoryLabel: "Tortas & Fatias",
    desc: "Criação premiada pela Revista Sabores do Sul: massa úmida artesanal com toque de especiarias nobres e recheio autoral aveludado.",
    price: 28.0,
    typePreco: "Fatia Premiada",
    img: "assets/pratos_vitrine.jpg",
    destaque: true,
    badge: "Premiado 2022 🏆",
    rating: "5.0"
  },
  {
    id: "brownie-belga",
    name: "Brownie Fudgy de Chocolate Belga 70% e Flor de Sal",
    category: "doces",
    categoryLabel: "Doces & Pâtisserie",
    desc: "Textura densa e chocolatuda feita com cacau nobre Callebaut 70%, casquinha finíssima brilhante e cristais de flor de sal marinho.",
    price: 18.0,
    typePreco: "Unidade Grande",
    img: "assets/bolo_chocolate.jpg",
    destaque: true,
    badge: "Puro Cacau 🍫",
    rating: "4.9"
  },
  {
    id: "ichigo-sando",
    name: "Ichigo Sando (Sanduíche Japonês de Morango)",
    category: "doces",
    categoryLabel: "Doces & Pâtisserie",
    desc: "Pão de leite japonês ultra macio (shokupan artesanal), recheado generosamente com chantilly de nata fresca e morangos selecionados inteiros.",
    price: 24.0,
    typePreco: "Unidade",
    img: "assets/sobremesa_3.jpg",
    destaque: false,
    badge: "Autoral Tóquio-Londres 🍓",
    rating: "5.0"
  },
  {
    id: "blondie-pistache",
    name: "Blondie de Pistache com Framboesas Frescas",
    category: "doces",
    categoryLabel: "Doces & Pâtisserie",
    desc: "Blondie amanteigado e denso feito com pasta pura de pistache da Sicília, pedaços crocantes de pistache tostado e framboesas vermelhas frescas.",
    price: 22.0,
    typePreco: "Unidade",
    img: "assets/sobremesa_4.jpg",
    destaque: true,
    badge: "Exclusivo 🌿",
    rating: "5.0"
  },
  {
    id: "brigadeiro-erva-mate",
    name: "Brigadeiro Autoral de Erva-Mate Nobre (Dupla)",
    category: "doces",
    categoryLabel: "Doces & Pâtisserie",
    desc: "Aclamada assinatura da Franceska: infusão delicada de erva-mate gaúcha selecionada em chocolate branco nobre, resultando em notas florais e herbáceas únicas.",
    price: 15.0,
    typePreco: "Dupla (2 un)",
    img: "assets/sobremesa_7.jpg",
    destaque: true,
    badge: "Ícone Autoral 🧉",
    rating: "5.0"
  },
  {
    id: "choux-cream",
    name: "Choux Cream com Craquelin e Baunilha de Madagascar",
    category: "doces",
    categoryLabel: "Doces & Pâtisserie",
    desc: "Carolinas francesas com crostinha crocante de craquelin, recheadas com creme pâtissière aromatizado com favas naturais de baunilha de Madagascar.",
    price: 18.0,
    typePreco: "Unidade",
    img: "assets/sobremesa_6.jpg",
    destaque: false,
    badge: "Clássico Francês 🇫🇷",
    rating: "4.9"
  },
  {
    id: "empanada-organica",
    name: "Empanada Artesanal de Farinha Orgânica (Carne)",
    category: "salgados",
    categoryLabel: "Quiches & Salgados",
    desc: "Massa artesanal finíssima com farinha orgânica e manteiga colonial, carne cortada na ponta da faca, cebola caramelizada e azeitonas.",
    price: 18.0,
    typePreco: "Unidade Assada",
    img: "assets/salgado_empanada.jpg",
    destaque: true,
    badge: "Massa Orgânica 🥟",
    rating: "4.9"
  },
  {
    id: "empanada-cogumelos",
    name: "Empanada Orgânica de Cogumelos Frescos & Queijo",
    category: "salgados",
    categoryLabel: "Quiches & Salgados",
    desc: "Mix de cogumelos frescos salteados com ervas finas da serra e queijo artesanal curado, envolvidos em massa folhada leve de forno.",
    price: 19.0,
    typePreco: "Unidade Assada",
    img: "assets/salgado_empanada.jpg",
    destaque: false,
    badge: "Vegetariano 🌱",
    rating: "4.8"
  },
  {
    id: "muffin-milho-chipotle",
    name: "Muffin de Milho Doce, Meia Cura & Toque de Chipotle",
    category: "salgados",
    categoryLabel: "Quiches & Salgados",
    desc: "Massa macia e aromática de milho doce fresco, cubos de queijo meia cura derretido e sutil defumado de pimenta chipotle.",
    price: 16.0,
    typePreco: "Unidade",
    img: "assets/interior_salao.jpg",
    destaque: false,
    badge: "Receita Especial 🌽",
    rating: "4.8"
  },
  {
    id: "cumaru-latte",
    name: "Cumaru Latte (Assinatura do Barista Alexandre)",
    category: "cafes",
    categoryLabel: "Cafés Especiais",
    desc: "Espresso duplo extraído de microlote especial, leite vaporizado sedoso com infusão natural de semente de cumaru (baunilha da Amazônia).",
    price: 18.0,
    typePreco: "Xícara 240ml",
    img: "assets/cafe_especial.jpg",
    destaque: true,
    badge: "Assinatura do Barista ☕",
    rating: "5.0"
  },
  {
    id: "espresso-duplo",
    name: "Espresso Duplo Especial (Torra Clara Selecionada)",
    category: "cafes",
    categoryLabel: "Cafés Especiais",
    desc: "Grãos arábica de microlote selecionado, notas florais e frutadas naturais, acidez málica equilibrada e crema aveludada.",
    price: 12.0,
    typePreco: "Dose Dupla",
    img: "assets/cafe_especial.jpg",
    destaque: false,
    badge: "Microlote Especial ☕",
    rating: "4.9"
  },
  {
    id: "cappuccino-italiano",
    name: "Cappuccino Italiano Cremoso com Cacau 70%",
    category: "cafes",
    categoryLabel: "Cafés Especiais",
    desc: "Espresso especial, leite vaporizado e microespuma brilhante aveludada, polvilhado com cacau puro Callebaut 70%.",
    price: 16.0,
    typePreco: "Xícara 200ml",
    img: "assets/cafe_especial.jpg",
    destaque: false,
    badge: "Clássico ☕",
    rating: "4.9"
  },
  {
    id: "cold-brew",
    name: "Cold Brew Infusionado 18 Horas (Café Gelado)",
    category: "cafes",
    categoryLabel: "Cafés Especiais",
    desc: "Extração a frio de 18 horas de grãos com perfil frutado. Bebida refrescante, com doçura natural acentuada e servido com gelo artesanal.",
    price: 18.0,
    typePreco: "Copo 300ml",
    img: "assets/cafe_especial.jpg",
    destaque: false,
    badge: "Refrescante ❄️",
    rating: "5.0"
  }
];

// Zonas e Bairros de Caxias do Sul
const DELIVERY_ZONES = [
  { neighborhood: "Cruzeiro / Bela Vista (Bairro da Loja)", fee: 8.0, time: "25-35 min" },
  { neighborhood: "Centro / Exposição", fee: 10.0, time: "30-40 min" },
  { neighborhood: "São Pelegrino / Rio Branco", fee: 11.0, time: "30-45 min" },
  { neighborhood: "Lourdes / Panazzolo", fee: 10.0, time: "30-40 min" },
  { neighborhood: "Sagrada Família / Jardim América", fee: 12.0, time: "35-45 min" },
  { neighborhood: "Villagio Caxias / Sanvitto", fee: 14.0, time: "35-50 min" },
  { neighborhood: "Pio X / Santa Catarina", fee: 14.0, time: "40-50 min" },
  { neighborhood: "Cristo Redentor / Kayser", fee: 12.0, time: "35-45 min" },
  { neighborhood: "Universitário / Interlagos", fee: 14.0, time: "40-55 min" },
  { neighborhood: "Ana Rech / Forqueta", fee: 22.0, time: "50-70 min" },
  { neighborhood: "Outro Bairro de Caxias do Sul", fee: 15.0, time: "40-60 min" }
];

// Estado da Aplicação
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let deliveryType = 'delivery'; // 'delivery' ou 'pickup'
let paymentMethod = 'pix'; // 'pix', 'cartao', 'dinheiro'
let selectedBairroIndex = 0;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  populateBairros();
  renderCatalog();
  updateCartUI();
  initProposalScrollEffect();
  if (window.lucide) lucide.createIcons();
});

// Storage
function loadCart() {
  try {
    const data = localStorage.getItem('fv_cart_v2');
    if (data) cart = JSON.parse(data);
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem('fv_cart_v2', JSON.stringify(cart));
}

// Bairros
function populateBairros() {
  const select = document.getElementById('client-bairro');
  if (!select) return;
  select.innerHTML = '';
  DELIVERY_ZONES.forEach((zone, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${zone.neighborhood} (+ R$ ${zone.fee.toFixed(2).replace('.', ',')})`;
    select.appendChild(opt);
  });
}

window.updateBairroFee = function() {
  const select = document.getElementById('client-bairro');
  if (select) {
    selectedBairroIndex = parseInt(select.value, 10) || 0;
  }
  updateCartUI();
};

// Renderização do Catálogo
function renderCatalog() {
  const grid = document.getElementById('product-grid');
  const countBadge = document.getElementById('products-count-badge');
  const titleEl = document.getElementById('current-category-name');
  if (!grid) return;

  grid.innerHTML = '';

  let filtered = CATALOG_ITEMS;

  // Filtro de Categoria
  if (activeCategory !== 'all') {
    filtered = filtered.filter(item => item.category === activeCategory);
  }

  // Filtro de Busca
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.categoryLabel.toLowerCase().includes(q)
    );
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'opção artesanal' : 'opções artesanais'}`;
  }

  if (titleEl) {
    if (searchQuery.trim()) {
      titleEl.textContent = `Busca: "${searchQuery}"`;
    } else if (activeCategory === 'all') {
      titleEl.textContent = 'Vitrine de Hoje';
    } else if (activeCategory === 'tortas') {
      titleEl.textContent = 'Tortas & Fatias Frescas';
    } else if (activeCategory === 'doces') {
      titleEl.textContent = 'Doces Finos & Pâtisserie';
    } else if (activeCategory === 'salgados') {
      titleEl.textContent = 'Quiches, Empanadas & Salgados';
    } else if (activeCategory === 'cafes') {
      titleEl.textContent = 'Cafés Especiais & Bebidas';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:50px 20px;color:#71717A;">
        <i data-lucide="search-x" style="width:48px;height:48px;margin-bottom:12px;opacity:0.4;"></i>
        <h4 style="color:#24140E;margin-bottom:6px;font-size:1.2rem;">Nenhum item encontrado</h4>
        <p style="font-size:0.9rem;">Tente buscar por outro termo ou limpe o filtro.</p>
        <button type="button" onclick="window.clearSearch()" style="margin-top:14px;background:#24140E;color:#FFF;border:none;padding:8px 18px;border-radius:9999px;font-weight:700;cursor:pointer;">Limpar busca</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-box">
        <img src="${item.img}" alt="${item.name}" class="product-img" loading="lazy" onerror="this.src='assets/pratos_vitrine.jpg'">
        ${item.badge ? `<span class="product-badge-tag">${item.badge}</span>` : ''}
        <div class="product-rating">
          <i data-lucide="star"></i> ${item.rating}
        </div>
      </div>
      <div class="product-body">
        <span class="product-category-label">${item.categoryLabel}</span>
        <h3 class="product-title">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-bottom">
          <div class="price-box">
            <span class="price-portion-label">${item.typePreco}</span>
            <span class="price-value">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <button type="button" class="add-cart-btn" onclick="window.addToCart('${item.id}')">
            <i data-lucide="plus"></i> Pedir
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// Filtros de Categoria
window.filterCategory = function(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderCatalog();
};

// Busca
window.handleSearch = function(val) {
  searchQuery = val;
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) {
    clearBtn.style.display = val.length > 0 ? 'flex' : 'none';
  }
  renderCatalog();
};

window.clearSearch = function() {
  const input = document.getElementById('catalog-search-input');
  if (input) input.value = '';
  searchQuery = '';
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) clearBtn.style.display = 'none';
  renderCatalog();
};

// Gerenciamento do Carrinho
window.addToCart = function(productId) {
  const product = CATALOG_ITEMS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      typePreco: product.typePreco,
      img: product.img,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`✓ ${product.name} adicionado ao pedido!`);
};

window.updateItemQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
};

window.removeItemFromCart = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
};

window.clearCart = function() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Pedido esvaziado.');
};

// Drawer Controls
window.openCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCart = function() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Tipo de Pedido (Tele-entrega vs Retirada)
window.setDeliveryType = function(type) {
  deliveryType = type;
  document.getElementById('btn-delivery')?.classList.toggle('active', type === 'delivery');
  document.getElementById('btn-pickup')?.classList.toggle('active', type === 'pickup');

  const addrForm = document.getElementById('delivery-address-form');
  const feeRow = document.getElementById('cart-fee-row');
  if (addrForm) addrForm.style.display = type === 'delivery' ? 'flex' : 'none';
  if (feeRow) feeRow.style.display = type === 'delivery' ? 'flex' : 'none';

  updateCartUI();
};

// Forma de Pagamento
window.setPaymentMethod = function(method) {
  paymentMethod = method;
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });

  const trocoBox = document.getElementById('troco-input-box');
  if (trocoBox) {
    trocoBox.style.display = method === 'dinheiro' ? 'block' : 'none';
  }
};

// Atualização da UI do Carrinho
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  let deliveryFee = 0;
  if (deliveryType === 'delivery') {
    const zone = DELIVERY_ZONES[selectedBairroIndex] || DELIVERY_ZONES[0];
    deliveryFee = zone.fee;
  }

  const grandTotal = subtotal + deliveryFee;

  // Header Counters & Badges
  const badgeCount = document.getElementById('cart-badge-count');
  const headerTotal = document.getElementById('header-cart-total');
  const headerTrash = document.getElementById('btn-header-trash');

  if (badgeCount) badgeCount.textContent = totalItems;
  if (headerTotal) headerTotal.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
  if (headerTrash) headerTrash.style.display = totalItems > 0 ? 'inline-flex' : 'none';

  // Mobile Floating Bar
  const floatingBar = document.getElementById('cart-floating-bar');
  const floatCount = document.getElementById('floating-cart-count');
  const floatTotal = document.getElementById('floating-cart-total');

  if (floatCount) floatCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
  if (floatTotal) floatTotal.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
  if (floatingBar) {
    if (totalItems > 0) {
      floatingBar.classList.add('active');
    } else {
      floatingBar.classList.remove('active');
    }
  }

  // Lista de Itens no Drawer (FLUIDA, SEM SCROLL INTERNO)
  const itemsList = document.getElementById('cart-items-list');
  const emptyState = document.getElementById('cart-empty-state');

  if (itemsList && emptyState) {
    if (cart.length === 0) {
      itemsList.innerHTML = '';
      itemsList.style.display = 'none';
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
      itemsList.style.display = 'flex';
      itemsList.innerHTML = '';

      cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-card';
        row.innerHTML = `
          <img src="${item.img}" alt="${item.name}" class="cart-item-img" onerror="this.src='assets/pratos_vitrine.jpg'">
          <div class="cart-item-info">
            <h5 class="cart-item-name">${item.name}</h5>
            <span class="cart-item-price">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
          </div>
          <div class="cart-qty-ctrl">
            <button type="button" class="qty-btn" onclick="window.updateItemQty('${item.id}', -1)">-</button>
            <span class="qty-count">${item.qty}</span>
            <button type="button" class="qty-btn" onclick="window.updateItemQty('${item.id}', 1)">+</button>
          </div>
          <button type="button" class="cart-item-remove" onclick="window.removeItemFromCart('${item.id}')" title="Remover item">
            <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
          </button>
        `;
        itemsList.appendChild(row);
      });
    }
  }

  // Totais no Drawer
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const feeEl = document.getElementById('cart-fee-val');
  const totalEl = document.getElementById('cart-total-val');

  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (feeEl) feeEl.textContent = `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
  if (totalEl) totalEl.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;

  if (window.lucide) lucide.createIcons();
}

// CHECKOUT WHATSAPP OFICIAL (REGRA ZERO ALERT — EXPERIÊNCIA FLUIDA E ELEGANTE)
window.submitOrderToWhatsApp = function() {
  if (cart.length === 0) {
    showToast('Adicione pelo menos uma fatia ou café ao pedido!');
    return;
  }

  const clientName = (document.getElementById('client-name')?.value || '').trim();
  const street = (document.getElementById('client-street')?.value || '').trim();
  const number = (document.getElementById('client-number')?.value || '').trim();
  const complement = (document.getElementById('client-complement')?.value || '').trim();
  const obs = (document.getElementById('order-obs')?.value || '').trim();
  const troco = (document.getElementById('troco-val')?.value || '').trim();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let deliveryFee = 0;
  let zone = DELIVERY_ZONES[selectedBairroIndex] || DELIVERY_ZONES[0];

  if (deliveryType === 'delivery') {
    deliveryFee = zone.fee;
  }

  const grandTotal = subtotal + deliveryFee;

  // Montagem da Comanda Limpa Onira.fly
  let msg = `_pedido via site by Onira.fly_\n\n`;

  if (deliveryType === 'delivery') {
    msg += `Solicitação de Tele-Entrega\n\n`;
  } else {
    msg += `Solicitação de Retirada no Balcão\n\n`;
  }

  // Itens
  cart.forEach(item => {
    msg += `*${item.qty}x* ${item.name} · ${item.typePreco}\n`;
    msg += `*R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}*\n\n`;
  });

  // Observações
  if (obs) {
    msg += `_Obs: ${obs}_\n\n`;
  }

  // Totais
  msg += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;
  if (deliveryType === 'delivery') {
    msg += `Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')} (${zone.neighborhood})\n`;
  }
  msg += `*Total: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n\n`;

  // Identificação do Cliente (Nome opcional com fallback elegante)
  if (clientName) {
    msg += `*${clientName}*\n`;
  } else {
    msg += `*Cliente WhatsApp*\n`;
  }

  // Endereço de Entrega (Fallback sem bloqueio para evitar abandono)
  if (deliveryType === 'delivery') {
    if (street) {
      let fullAddress = `${street}${number ? ', ' + number : ''}`;
      if (complement) fullAddress += ` (${complement})`;
      fullAddress += ` — ${zone.neighborhood}, Caxias do Sul`;
      msg += `${fullAddress}\n`;
    } else {
      msg += `Endereço: A combinar por aqui no WhatsApp (${zone.neighborhood})\n`;
    }
  }

  // Pagamento
  if (paymentMethod === 'pix') {
    msg += `Pagamento em Pix — combinamos a chave por aqui\n\n`;
  } else if (paymentMethod === 'cartao') {
    msg += `Pagamento no cartão — favor levar a maquininha\n\n`;
  } else {
    msg += `Pagamento em dinheiro`;
    if (troco) {
      msg += ` (troco para ${troco})\n\n`;
    } else {
      msg += ` — favor confirmar se precisa de troco\n\n`;
    }
  }

  // Rodapé Oficial
  msg += `_Enviado pelo site da Franceska Venzon Confeitaria_`;

  // Disparo sem bloqueio
  const whatsappUrl = `https://wa.me/${CLIENT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
};

// Toast Notifier
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-box';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Floating CTA Scroll Retract
function initProposalScrollEffect() {
  const cta = document.getElementById('onira-floating-cta');
  if (!cta) return;

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    cta.classList.add('scrolling');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      cta.classList.remove('scrolling');
    }, 450);
  }, { passive: true });
}
