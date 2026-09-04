/**
 * Franceska Venzon Confeitaria — Caxias do Sul - RS
 * Cardápio Digital & Checkout Oficial Onira.fly Direto no WhatsApp
 * Telefone / WhatsApp Oficial: (54) 99914-1812
 * Endereço: Rua José Tovasi, 423, Bairro Cruzeiro, Caxias do Sul - RS
 * Powered by Onira Labs
 */

// WhatsApp Oficial da Franceska Venzon Confeitaria (Verificado via Google Maps/Fasty)
const CLIENT_WHATSAPP = '5554999141812';
const CHAVE_PIX_OFICIAL = '54999141812'; // Chave Pix Celular Oficial

// Catálogo Oficial com Imagens Reais do Estabelecimento
const CATALOG_ITEMS = [
  {
    id: "torta-limao",
    name: "Torta de Limão com Merengue Suíço Tostado",
    category: "tortas",
    categoryLabel: "Bolos & Tortas",
    desc: "Massa sablée amanteigada e crocante, curd sedoso de limão siciliano e merengue suíço finalizado no maçarico com raspas frescas. Equilíbrio cítrico perfeito.",
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
    categoryLabel: "Bolos & Tortas",
    desc: "Massa de merengue fofa, leve e aerada, recheada com nata fresca batida e compota artesanal de morangos, amoras e framboesas colhidas na serra.",
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
    categoryLabel: "Bolos & Tortas",
    desc: "Clássico da confeitaria espanhola: centro extremamente aveludado e cremoso, com topo caramelizado e tostado ao forno em alta temperatura. Sem base de biscoito.",
    price: 25.0,
    typePreco: "Fatia Generosa",
    img: "assets/sobremesa_5.jpg",
    destaque: true,
    badge: "Favorito da Chef 👑",
    rating: "5.0"
  },
  {
    id: "bolo-sabores-do-sul",
    name: "Bolo Sabores do Sul (Eleito Melhor Bolo de Caxias)",
    category: "tortas",
    categoryLabel: "Bolos & Tortas",
    desc: "Criação premiada no prêmio Sabores do Sul: massa úmida artesanal com toque de especiarias nobres, recheio sedoso e finalização contemporânea autoral.",
    price: 28.0,
    typePreco: "Fatia Premiada",
    img: "assets/pratos_vitrine.jpg",
    destaque: true,
    badge: "Premiado 2022 🏆",
    rating: "5.0"
  },
  {
    id: "brownie-belga",
    name: "Brownie Fudgy de Chocolate Belga 70% com Flor de Sal",
    category: "sobremesas",
    categoryLabel: "Doces & Sobremesas",
    desc: "Textura densa e chocolatuda feita com cacau nobre Callebaut 70%, casquinha finíssima e brilhante, finalizado com cristais de flor de sal marinho.",
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
    category: "sobremesas",
    categoryLabel: "Doces & Sobremesas",
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
    category: "sobremesas",
    categoryLabel: "Doces & Sobremesas",
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
    category: "sobremesas",
    categoryLabel: "Doces & Sobremesas",
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
    category: "sobremesas",
    categoryLabel: "Doces & Sobremesas",
    desc: "Carolinas francesas com crostinha crocante de craquelin, recheadas na hora com creme pâtissière aromatizado com favas naturais de baunilha de Madagascar.",
    price: 18.0,
    typePreco: "Unidade",
    img: "assets/sobremesa_6.jpg",
    destaque: false,
    badge: "Clássico Francês 🇫🇷",
    rating: "4.9"
  },
  {
    id: "empanada-organica",
    name: "Empanada Artesanal de Farinha Orgânica (Carne na Ponta da Faca)",
    category: "salgados",
    categoryLabel: "Salgados & Forno",
    desc: "Massa artesanal finíssima elaborada com farinha orgânica e manteiga colonial, recheio suculento de carne cortada na ponta da faca, cebola caramelizada e azeitonas.",
    price: 18.0,
    typePreco: "Unidade Assada",
    img: "assets/salgado_empanada.jpg",
    destaque: true,
    badge: "Massa Orgânica 🥟",
    rating: "4.9"
  },
  {
    id: "empanada-cogumelos",
    name: "Empanada Orgânica de Cogumelos Frescos & Queijo Serrano",
    category: "salgados",
    categoryLabel: "Salgados & Forno",
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
    name: "Muffin de Milho Doce, Queijo Meia Cura & Toque de Chipotle",
    category: "salgados",
    categoryLabel: "Salgados & Forno",
    desc: "Massa macia e aromática de milho doce fresco, cubos de queijo meia cura derretido e sutil defumado de pimenta chipotle. Receita de inspiração americana.",
    price: 16.0,
    typePreco: "Unidade",
    img: "assets/interior_salao.jpg",
    destaque: false,
    badge: "Receita Especial 🌽",
    rating: "4.8"
  },
  {
    id: "cumaru-latte",
    name: "Cumaru Latte (Assinatura do Barista Alexandre Trindade)",
    category: "cafes",
    categoryLabel: "Cafés & Bebidas",
    desc: "Espresso duplo extraído de grãos especiais da serra, leite integral vaporizado sedoso com infusão natural de semente de cumaru (a aromática baunilha da Amazônia).",
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
    categoryLabel: "Cafés & Bebidas",
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
    categoryLabel: "Cafés & Bebidas",
    desc: "Um terço de espresso especial, um terço de leite vaporizado e um terço de microespuma brilhante, polvilhado com cacau puro 70%.",
    price: 16.0,
    typePreco: "Xícara 200ml",
    img: "assets/cafe_especial.jpg",
    destaque: false,
    badge: "Clássico ☕",
    rating: "4.9"
  },
  {
    id: "cold-brew",
    name: "Cold Brew Infusionado 18 Horas (Café Gelado Especial)",
    category: "cafes",
    categoryLabel: "Cafés & Bebidas",
    desc: "Extração a frio de 18 horas de grãos com perfil frutado. Bebida refrescante, com doçura natural acentuada, baixíssima acidez e servido com gelo artesanal.",
    price: 18.0,
    typePreco: "Copo 300ml",
    img: "assets/cafe_especial.jpg",
    destaque: false,
    badge: "Refrescante ❄️",
    rating: "5.0"
  }
];

// Zonas de Entrega
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
let activeCategory = 'todos';
let fulfillmentType = 'delivery'; // 'delivery' ou 'retirada'
let selectedZone = DELIVERY_ZONES[0];
let paymentMethod = 'pix'; // 'pix', 'cartao', 'dinheiro'

// Elementos DOM
const productGridEl = document.getElementById('product-grid');
const cartDrawerEl = document.getElementById('cart-drawer');
const cartOverlayEl = document.getElementById('cart-overlay');
const cartItemsContainerEl = document.getElementById('cart-items-container');
const cartEmptyStateEl = document.getElementById('cart-empty-state');
const cartCountBadgeEl = document.getElementById('cart-badge-count');
const cartFloatingBarEl = document.getElementById('cart-floating-bar');
const subtotalEl = document.getElementById('cart-subtotal-val');
const deliveryFeeRowEl = document.getElementById('delivery-fee-row');
const deliveryFeeValEl = document.getElementById('delivery-fee-val');
const grandTotalEl = document.getElementById('cart-grand-total-val');
const deliveryAddressGroupEl = document.getElementById('delivery-address-group');
const deliveryZoneGroupEl = document.getElementById('delivery-zone-group');
const neighborhoodSelectEl = document.getElementById('neighborhood-select');
const customerNameInputEl = document.getElementById('customer-name');
const customerAddressInputEl = document.getElementById('customer-address');
const orderNotesInputEl = document.getElementById('order-notes');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  populateNeighborhoods();
  renderProducts();
  updateCartUI();
  setupEventListeners();
  initProposalScrollEffect();
  if (window.lucide) lucide.createIcons();
});

// Salvar / Carregar do LocalStorage
function saveCartToStorage() {
  localStorage.setItem('fv_cart_v1', JSON.stringify(cart));
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('fv_cart_v1');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

// Preencher Bairros de Caxias do Sul
function populateNeighborhoods() {
  if (!neighborhoodSelectEl) return;
  neighborhoodSelectEl.innerHTML = '';
  DELIVERY_ZONES.forEach((zone, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${zone.neighborhood} — R$ ${zone.fee.toFixed(2).replace('.', ',')} (${zone.time})`;
    neighborhoodSelectEl.appendChild(opt);
  });
}

// Renderizar Produtos no Grid
function renderProducts() {
  if (!productGridEl) return;
  productGridEl.innerHTML = '';

  let filtered = CATALOG_ITEMS;
  if (activeCategory === 'destaques') {
    filtered = CATALOG_ITEMS.filter(item => item.destaque);
  } else if (activeCategory !== 'todos') {
    filtered = CATALOG_ITEMS.filter(item => item.category === activeCategory);
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
          <button class="add-cart-btn" onclick="addToCart('${item.id}')">
            <i data-lucide="plus"></i> Pedir
          </button>
        </div>
      </div>
    `;
    productGridEl.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// Adicionar Item ao Carrinho
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

  saveCartToStorage();
  updateCartUI();
  showToast(`✓ ${product.name} adicionado ao pedido!`);
};

// Alterar Quantidade
window.updateItemQty = function(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
};

// Remover Item
window.removeItemFromCart = function(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
};

// Limpar Carrinho
window.clearCart = function() {
  cart = [];
  saveCartToStorage();
  updateCartUI();
};

// Alternar Tipo de Entrega (Retirada vs Tele-entrega)
window.setFulfillment = function(type) {
  fulfillmentType = type;
  document.getElementById('btn-delivery')?.classList.toggle('active', type === 'delivery');
  document.getElementById('btn-pickup')?.classList.toggle('active', type === 'retirada');

  if (deliveryAddressGroupEl) {
    deliveryAddressGroupEl.style.display = type === 'delivery' ? 'flex' : 'none';
  }
  if (deliveryZoneGroupEl) {
    deliveryZoneGroupEl.style.display = type === 'delivery' ? 'flex' : 'none';
  }
  if (deliveryFeeRowEl) {
    deliveryFeeRowEl.style.display = type === 'delivery' ? 'flex' : 'none';
  }

  updateCartUI();
};

// Alternar Método de Pagamento
window.setPayment = function(method) {
  paymentMethod = method;
  document.querySelectorAll('.pay-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === method);
  });
};

// Atualizar Interface do Carrinho
function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  let deliveryFee = 0;
  if (fulfillmentType === 'delivery' && neighborhoodSelectEl) {
    const idx = parseInt(neighborhoodSelectEl.value, 10) || 0;
    selectedZone = DELIVERY_ZONES[idx] || DELIVERY_ZONES[0];
    deliveryFee = selectedZone.fee;
  }

  const grandTotal = subtotal + deliveryFee;

  // Atualizar Contadores
  if (cartCountBadgeEl) cartCountBadgeEl.textContent = totalItems;
  
  // Floating Mobile Bar
  if (cartFloatingBarEl) {
    const floatCount = document.getElementById('float-cart-count');
    const floatTotal = document.getElementById('float-cart-total');
    if (floatCount) floatCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
    if (floatTotal) floatTotal.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;
    
    if (totalItems > 0) {
      cartFloatingBarEl.classList.add('active');
    } else {
      cartFloatingBarEl.classList.remove('active');
    }
  }

  // Renderizar Lista do Drawer
  if (cartItemsContainerEl && cartEmptyStateEl) {
    if (cart.length === 0) {
      cartItemsContainerEl.style.display = 'none';
      cartEmptyStateEl.style.display = 'block';
    } else {
      cartEmptyStateEl.style.display = 'none';
      cartItemsContainerEl.style.display = 'flex';
      cartItemsContainerEl.innerHTML = '';

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
            <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)">-</button>
            <span class="qty-count">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeItemFromCart('${item.id}')" title="Remover item">
            <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
          </button>
        `;
        cartItemsContainerEl.appendChild(row);
      });
    }
  }

  // Atualizar Totais
  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (deliveryFeeValEl) deliveryFeeValEl.textContent = `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`;
  if (grandTotalEl) grandTotalEl.textContent = `R$ ${grandTotal.toFixed(2).replace('.', ',')}`;

  if (window.lucide) lucide.createIcons();
}

// Abrir e Fechar Gaveta do Carrinho
window.openCartDrawer = function() {
  if (cartDrawerEl && cartOverlayEl) {
    cartDrawerEl.classList.add('open');
    cartOverlayEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
};

window.closeCartDrawer = function() {
  if (cartDrawerEl && cartOverlayEl) {
    cartDrawerEl.classList.remove('open');
    cartOverlayEl.classList.remove('open');
    document.body.style.overflow = '';
  }
};

// Disparador Oficial do WhatsApp (Comanda Operacional Limpa Onira.fly)
window.checkoutWhatsApp = function() {
  if (cart.length === 0) {
    showToast('Adicione pelo menos um item ao pedido!');
    return;
  }

  const customerName = (customerNameInputEl?.value || '').trim();
  const customerAddress = (customerAddressInputEl?.value || '').trim();
  const orderNotes = (orderNotesInputEl?.value || '').trim();

  if (!customerName) {
    alert('Por favor, informe seu nome para identificação do pedido.');
    customerNameInputEl?.focus();
    return;
  }

  if (fulfillmentType === 'delivery' && !customerAddress) {
    alert('Por favor, informe o endereço completo de entrega (rua, número e complemento).');
    customerAddressInputEl?.focus();
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let deliveryFee = 0;
  let zoneText = '';

  if (fulfillmentType === 'delivery') {
    const idx = parseInt(neighborhoodSelectEl?.value, 10) || 0;
    selectedZone = DELIVERY_ZONES[idx] || DELIVERY_ZONES[0];
    deliveryFee = selectedZone.fee;
    zoneText = selectedZone.neighborhood;
  }

  const grandTotal = subtotal + deliveryFee;

  // Montagem da Comanda Limpa Onira.fly (Padrão Master)
  let msg = `_pedido via site by Onira.fly_\n\n`;

  if (fulfillmentType === 'delivery') {
    msg += `Solicitação de Tele-Entrega\n\n`;
  } else {
    msg += `Solicitação de Retirada no balcão\n\n`;
  }

  // Itens do Pedido
  cart.forEach(item => {
    msg += `*${item.qty}x* ${item.name} · ${item.typePreco}\n`;
    msg += `*R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}*\n\n`;
  });

  // Observações
  if (orderNotes) {
    msg += `_Obs: ${orderNotes}_\n\n`;
  }

  // Totalizador Financeiro
  msg += `*Itens: R$ ${subtotal.toFixed(2).replace('.', ',')}*\n`;
  if (fulfillmentType === 'delivery') {
    msg += `Entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')} (${zoneText})\n`;
  }
  msg += `*Total: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n\n`;

  // Identificação do Cliente
  msg += `*${customerName}*\n`;
  if (fulfillmentType === 'delivery') {
    msg += `${customerAddress}\n`;
  }

  // Forma de Pagamento
  if (paymentMethod === 'pix') {
    msg += `Pagamento em Pix — combinamos a chave por aqui\n\n`;
  } else if (paymentMethod === 'cartao') {
    msg += `Pagamento no cartão — favor levar a maquininha\n\n`;
  } else {
    msg += `Pagamento em dinheiro — favor confirmar se precisa de troco\n\n`;
  }

  // Rodapé Oficial
  msg += `_Enviado pelo site da Franceska Venzon Confeitaria_`;

  // URL WhatsApp
  const whatsappUrl = `https://wa.me/${CLIENT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank');
};

// Efeito de Scroll no Widget da Proposta Onira (.onira-cta)
function initProposalScrollEffect() {
  const proposalWidget = document.getElementById('onira-cta');
  if (!proposalWidget) return;

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    proposalWidget.classList.add('scrolling');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      proposalWidget.classList.remove('scrolling');
    }, 450);
  }, { passive: true });
}

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

// Filtros de Categoria
function setupEventListeners() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category || 'todos';
      renderProducts();
    });
  });

  if (neighborhoodSelectEl) {
    neighborhoodSelectEl.addEventListener('change', () => {
      updateCartUI();
    });
  }
}
