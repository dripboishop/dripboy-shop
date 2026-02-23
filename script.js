const WHATSAPP_NUMBER = '27696643402';
const productImage = (query, variant) => {
  const tags = query
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ',')
    .replace(/^,+|,+$/g, '');

  return `https://loremflickr.com/900/700/${tags}?lock=${variant}`;
};

const categoryOrder = ['Sneakers', 'Apparel', 'Football Jerseys', 'Watches', 'Wallets', 'Combos'];

const sectionIds = {
  Sneakers: 'sneakers',
  Apparel: 'apparel',
  'Football Jerseys': 'football-jerseys',
  Watches: 'watches',
  Wallets: 'wallets',
  Combos: 'combos'
};

const products = [
  { name: 'Jordan 4 Retro', category: 'Sneakers', colors: ['Black/Gold', 'White/Gray', 'Red/Black'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('jordan 4 retro sneaker shoe', 11), productImage('Air Jordan sneaker side profile', 12)] },
  { name: 'Jordan 6', category: 'Sneakers', colors: ['Infrared', 'Midnight Navy', 'All Black'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('jordan 6 sneaker shoe', 13), productImage('Nike Jordan 6 shoes', 14)] },
  { name: 'Nike Air Force', category: 'Sneakers', colors: ['Triple White', 'Black', 'Sail'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('nike air force 1 sneaker shoe', 15), productImage('Air Force 1 shoes', 16)] },
  { name: 'Adidas Campus', category: 'Sneakers', colors: ['Green', 'Gray', 'Black'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('adidas campus sneaker shoe', 17), productImage('Adidas campus shoes', 18)] },

  { name: 'Nike T-Shirts', category: 'Apparel', colors: ['White', 'Black', 'Navy'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('nike t shirt apparel', 19), productImage('Nike tee streetwear', 20)] },
  { name: 'Puma T-Shirts', category: 'Apparel', colors: ['Black', 'Gray', 'Burgundy'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('puma t shirt apparel', 21), productImage('Puma clothing t-shirt', 22)] },
  { name: 'G-Star Raw T-Shirts', category: 'Apparel', colors: ['Olive', 'White', 'Black'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('g star raw t shirt apparel', 23), productImage('G-Star Raw clothing', 24)] },

  { name: 'Real Madrid', category: 'Football Jerseys', subcategory: 'International', colors: ['Home White', 'Away Black'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('real madrid football jersey shirt', 25), productImage('Real Madrid football shirt', 26)] },
  { name: 'Barcelona', category: 'Football Jerseys', subcategory: 'International', colors: ['Blue/Red', 'Gold Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('barcelona football jersey shirt', 27), productImage('FC Barcelona football shirt', 28)] },
  { name: 'Manchester United', category: 'Football Jerseys', subcategory: 'International', colors: ['Red', 'White Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('manchester united football jersey shirt', 29), productImage('Man United football shirt', 30)] },
  { name: 'Liverpool', category: 'Football Jerseys', subcategory: 'International', colors: ['Home Red', 'Away Green'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('liverpool football jersey shirt', 31), productImage('Liverpool FC football shirt', 32)] },
  { name: 'PSG', category: 'Football Jerseys', subcategory: 'International', colors: ['Navy', 'White'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('psg football jersey shirt', 33), productImage('Paris Saint Germain football shirt', 34)] },
  { name: 'Mamelodi Sundowns', category: 'Football Jerseys', subcategory: 'PSL', colors: ['Yellow', 'Blue Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('mamelodi sundowns football jersey shirt', 35), productImage('Sundowns football shirt', 36)] },
  { name: 'Kaizer Chiefs', category: 'Football Jerseys', subcategory: 'PSL', colors: ['Gold/Black', 'Black Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('kaizer chiefs football jersey shirt', 37), productImage('Kaizer Chiefs football shirt', 38)] },
  { name: 'Orlando Pirates', category: 'Football Jerseys', subcategory: 'PSL', colors: ['Black/White', 'White Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('orlando pirates football jersey shirt', 39), productImage('Orlando Pirates football shirt', 40)] },
  { name: 'Moroka Swallows', category: 'Football Jerseys', subcategory: 'PSL', colors: ['Black', 'White'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('moroka swallows football jersey shirt', 41), productImage('Swallows football shirt', 42)] },

  { name: 'Casual Leather Watch', category: 'Watches', colors: ['Brown', 'Black', 'Tan'], sizes: ['One Size'], images: [productImage('casual leather wrist watch', 43), productImage('brown leather watch', 44)] },
  { name: 'Stainless Steel Watch', category: 'Watches', colors: ['Silver', 'Gold', 'Gunmetal'], sizes: ['One Size'], images: [productImage('stainless steel wrist watch', 45), productImage('luxury metal watch', 46)] },

  { name: 'Diesel Wallet', category: 'Wallets', colors: ['Black', 'Brown'], sizes: ['One Size'], images: [productImage('diesel leather wallet', 47), productImage('leather wallet black', 48)] },
  { name: 'Lacoste Wallet', category: 'Wallets', colors: ['Black', 'Navy'], sizes: ['One Size'], images: [productImage('lacoste leather wallet', 49), productImage('premium wallet navy', 50)] },

  { name: 'Sneaker + T-Shirt', category: 'Combos', colors: ['Black/White Mix', 'Earth Tones'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('sneaker t shirt combo outfit', 51), productImage('streetwear sneaker outfit', 52)] },
  { name: 'Watch + Wallet', category: 'Combos', colors: ['Classic Black', 'Brown Luxury'], sizes: ['One Size'], images: [productImage('watch wallet combo accessories', 53), productImage('men accessories watch wallet', 54)] }
];

const productSections = document.getElementById('product-sections');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('show');
  });
});

function renderProducts() {
  categoryOrder.forEach((category) => {
    const section = document.createElement('section');
    section.className = 'category-block';
    section.id = sectionIds[category];

    const heading = document.createElement('h3');
    heading.className = 'category-title';
    heading.textContent = category;

    const grid = document.createElement('div');
    grid.className = 'product-grid';

    products.filter((product) => product.category === category).forEach((product) => {
      const card = document.createElement('article');
      card.className = 'card';
      const safeId = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

      card.innerHTML = `
        <div class="image-wrap"><img src="${product.images[0]}" alt="${product.name}" id="main-${safeId}" loading="lazy" /></div>
        <div class="thumb-row">${product.images.map((img, idx) => `<button class="thumb ${idx === 0 ? 'active' : ''}" type="button" data-main="main-${safeId}" data-img="${img}" aria-label="${product.name} image ${idx + 1}"><img src="${img}" alt="${product.name} thumbnail ${idx + 1}" loading="lazy" /></button>`).join('')}</div>
        <h4>${product.name}</h4>
        <p class="meta">Category: ${product.category}${product.subcategory ? ` • ${product.subcategory}` : ''}</p>
        <label>Color<select class="color-select">${product.colors.map((color) => `<option value="${color}">${color}</option>`).join('')}</select></label>
        <label>Size<select class="size-select">${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('')}</select></label>
        <button class="order-btn" type="button">Order on WhatsApp</button>
      `;

      card.querySelector('.order-btn').addEventListener('click', () => {
        const color = card.querySelector('.color-select').value;
        const size = card.querySelector('.size-select').value;
        const message = [
          'Hi DRIPBOY SHOP, I would like to order:',
          `Product Name: ${product.name}`,
          `Category: ${product.category}${product.subcategory ? ` (${product.subcategory})` : ''}`,
          `Color: ${color}`,
          `Size: ${size}`
        ].join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      });

      grid.appendChild(card);
    });

    section.append(heading, grid);
    productSections.appendChild(section);
  });

  document.querySelectorAll('.thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const mainImage = document.getElementById(thumb.dataset.main);
      mainImage.src = thumb.dataset.img;
      thumb.parentElement.querySelectorAll('.thumb').forEach((item) => item.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

renderProducts();
