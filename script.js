const WHATSAPP_NUMBER = '27696643402';

const productImage = (query, variant) => {
  const tags = query
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ',')
    .replace(/^,+|,+$/g, '');

  return `https://loremflickr.com/900/700/${tags}?lock=${variant}`;
};

const categories = [
  {
    id: 'winter-drip',
    title: 'THE WINTER DRIP',
    subtitle: 'Heavy Puffers, Parkas & Winter Hoodies',
    items: [
      { name: 'Puffer Jackets', colors: ['Black', 'Olive', 'Stone'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('black puffer jacket streetwear', 101), productImage('winter puffer jacket fashion', 102)] },
      { name: 'Fleece Hoodies', colors: ['Charcoal', 'Cream', 'Navy'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('fleece hoodie streetwear', 103), productImage('winter hoodie urban wear', 104)] },
      { name: 'Winter Coats', colors: ['Jet Black', 'Khaki', 'Brown'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('winter coat mens fashion', 105), productImage('parka coat urban style', 106)] }
    ]
  },
  {
    id: 'international-fan-zone',
    title: 'INTERNATIONAL FAN ZONE',
    subtitle: 'Real Madrid, PSG, Arsenal & Global Giants',
    items: [
      { name: 'UEFA Champions League Kits', colors: ['Home', 'Away', 'Third'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('uefa champions league football kit', 107), productImage('champions league soccer jersey', 108)] },
      { name: 'European Club Jerseys', colors: ['Real Madrid', 'PSG', 'Arsenal'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('european football club jersey', 109), productImage('real madrid psg arsenal jersey', 110)] }
    ]
  },
  {
    id: 'psl-heritage',
    title: 'PSL HERITAGE',
    subtitle: 'Local Legends & Snake-Skin Classics',
    items: [
      { name: 'Kaizer Chiefs', colors: ['Gold/Black', 'Black Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('kaizer chiefs jersey', 111), productImage('chiefs football shirt', 112)] },
      { name: 'Orlando Pirates', colors: ['Black/White', 'White Away'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('orlando pirates jersey', 113), productImage('pirates football shirt', 114)] },
      { name: 'Heritage Kits', colors: ['Vintage Gold', 'Retro Black'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('retro football heritage kit', 115), productImage('classic soccer kit', 116)] }
    ]
  },
  {
    id: 'footwear-heat',
    title: 'FOOTWEAR HEAT (Sneakers)',
    subtitle: 'Diesel, Nike & Premium Kicks',
    items: [
      { name: 'Diesel Sneakers', colors: ['Black', 'White', 'Gray'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('diesel sneakers', 117), productImage('diesel sneaker side profile', 118)] },
      { name: 'Nike Air', colors: ['Triple White', 'Black', 'Sail'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('nike air sneakers', 119), productImage('nike air force shoe', 120)] },
      { name: 'Urban Footwear', colors: ['Black/Gold', 'White/Gum', 'Olive'], sizes: ['6', '7', '8', '9', '10', '11'], images: [productImage('urban sneakers streetwear', 121), productImage('premium kicks sneaker', 122)] }
    ]
  },
  {
    id: 'timeless-drip',
    title: 'TIMELESS DRIP (Watches & Belts)',
    subtitle: 'Premium Watches & Designer Belts',
    items: [
      { name: 'Gold Watches', colors: ['Gold', 'Gold/Black'], sizes: ['One Size'], images: [productImage('gold wrist watch luxury', 123), productImage('premium gold watch', 124)] },
      { name: 'Leather Belts', colors: ['Black', 'Brown', 'Tan'], sizes: ['30', '32', '34', '36', '38'], images: [productImage('leather belt designer', 125), productImage('mens leather belt buckle', 126)] },
      { name: 'Signature Buckles', colors: ['Gold Buckle', 'Silver Buckle'], sizes: ['One Size'], images: [productImage('designer belt buckle', 127), productImage('signature buckle fashion', 128)] }
    ]
  },
  {
    id: 'street-set',
    title: 'THE STREET SET (Tracksuits & Shorts)',
    subtitle: 'Urban Tech-Wear & Matching Sets',
    items: [
      { name: 'Full Tracksuits', colors: ['Black', 'Gray', 'Navy'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('full tracksuit urban wear', 129), productImage('matching tracksuit set', 130)] },
      { name: 'Summer Shorts', colors: ['Black', 'Khaki', 'White'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('summer shorts streetwear', 131), productImage('mens casual shorts', 132)] },
      { name: 'Tech Fleece', colors: ['Graphite', 'Beige', 'Black'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], images: [productImage('nike tech fleece set', 133), productImage('techwear fleece outfit', 134)] }
    ]
  },
  {
    id: 'headwear-crowns',
    title: 'HEADWEAR & CROWNS',
    subtitle: 'Signature Caps, Beanies & Bucket Hats',
    items: [
      { name: 'Snapbacks', colors: ['Black', 'Red', 'Navy'], sizes: ['One Size'], images: [productImage('snapback cap streetwear', 135), productImage('flat peak cap', 136)] },
      { name: 'Winter Beanies', colors: ['Black', 'Gray', 'Brown'], sizes: ['One Size'], images: [productImage('winter beanie hat', 137), productImage('knit beanie street style', 138)] },
      { name: 'Drip Boy Caps', colors: ['Black/Gold', 'White/Gold'], sizes: ['One Size'], images: [productImage('luxury black cap gold logo', 139), productImage('streetwear branded cap', 140)] }
    ]
  },
  {
    id: 'the-vault',
    title: 'THE VAULT (Travel & Bags)',
    subtitle: 'Duffel Bags, Side Bags & Wallets',
    items: [
      { name: 'Travel Bags', colors: ['Black', 'Olive', 'Tan'], sizes: ['One Size'], images: [productImage('travel duffel bag', 141), productImage('luxury travel bag', 142)] },
      { name: 'Cross-body Bags', colors: ['Black', 'Gray'], sizes: ['One Size'], images: [productImage('cross body bag mens', 143), productImage('side bag streetwear', 144)] },
      { name: 'Wallets', colors: ['Black', 'Brown', 'Navy'], sizes: ['One Size'], images: [productImage('leather wallet premium', 145), productImage('designer wallet', 146)] }
    ]
  },
  {
    id: 'kids-extreme-drip',
    title: 'KIDS EXTREME DRIP',
    subtitle: 'Boys & Girls (Ages 2-14)',
    items: [
      { name: 'Mini-Kits', colors: ['Home', 'Away'], sizes: ['2-4', '5-7', '8-10', '11-14'], images: [productImage('kids football kit', 147), productImage('children soccer jersey', 148)] },
      { name: 'Kids Tracksuits', colors: ['Black', 'Blue', 'Red'], sizes: ['2-4', '5-7', '8-10', '11-14'], images: [productImage('kids tracksuit set', 149), productImage('children tracksuit outfit', 150)] },
      { name: 'Kids Sneakers', colors: ['White', 'Black', 'Multi'], sizes: ['10C', '11C', '12C', '13C', '1Y', '2Y'], images: [productImage('kids sneakers', 151), productImage('children sneaker shoes', 152)] }
    ]
  }
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
  categories.forEach((category) => {
    const section = document.createElement('section');
    section.className = 'category-block';
    section.id = category.id;

    const categoryMessage = encodeURIComponent(`Hi DRIPBOY SHOP, I want to shop the ${category.title} category.`);

    section.innerHTML = `
      <div class="category-head">
        <div>
          <h3 class="category-title">${category.title}</h3>
          <p class="category-subtext">${category.subtitle}</p>
        </div>
        <div class="category-tools">
          <span class="shipping-badge">Free Shipping</span>
          <a class="btn btn-outline category-whatsapp" target="_blank" rel="noopener noreferrer" href="https://wa.me/${WHATSAPP_NUMBER}?text=${categoryMessage}">WhatsApp Category</a>
        </div>
      </div>
      <div class="product-grid"></div>
    `;

    const grid = section.querySelector('.product-grid');

    category.items.forEach((product) => {
      const card = document.createElement('article');
      card.className = 'card';
      const safeId = `${category.id}-${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

      card.innerHTML = `
        <span class="shipping-badge card-badge">Free Shipping</span>
        <div class="image-wrap"><img src="${product.images[0]}" alt="${product.name}" id="main-${safeId}" loading="lazy" /></div>
        <div class="thumb-row">${product.images.map((img, idx) => `<button class="thumb ${idx === 0 ? 'active' : ''}" type="button" data-main="main-${safeId}" data-img="${img}" aria-label="${product.name} image ${idx + 1}"><img src="${img}" alt="${product.name} thumbnail ${idx + 1}" loading="lazy" /></button>`).join('')}</div>
        <h4>${product.name}</h4>
        <p class="meta">Category: ${category.title}</p>
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
          `Category: ${category.title}`,
          `Color: ${color}`,
          `Size: ${size}`
        ].join('\n');

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
      });

      grid.appendChild(card);
    });

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
