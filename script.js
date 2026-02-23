const WHATSAPP_NUMBER = '27696643402';

const heroFrames = [
  'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1800&q=80'
];

const products = [
  {
    name: 'Jordan 4 Retro Metallic',
    department: 'Footwear Vault',
    itemImage: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=900&q=80',
    price: 'R3,499',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Metallic', 'Black', 'Reflective']
  },
  {
    name: 'Yeezy Street Runner',
    department: 'Footwear Vault',
    itemImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80',
    price: 'R3,199',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Black', 'Stone', 'Reflective']
  },
  {
    name: 'Diesel Shadow Sneaker',
    department: 'Footwear Vault',
    itemImage: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=80',
    price: 'R2,899',
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colors: ['Black', 'Metallic', 'Grey']
  },
  {
    name: 'Lacoste Gold Crest Polo',
    department: 'Luxury Apparel',
    itemImage: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80',
    price: 'R1,099',
    sizes: ['UK S', 'UK M', 'UK L', 'UK XL'],
    colors: ['Black', 'White', 'Gold Trim']
  },
  {
    name: 'G-Star Raw Denim Armor',
    department: 'Luxury Apparel',
    itemImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?auto=format&fit=crop&w=900&q=80',
    price: 'R2,299',
    sizes: ['UK S', 'UK M', 'UK L', 'UK XL'],
    colors: ['Indigo', 'Black', 'Raw Wash']
  },
  {
    name: 'Nike Reflector Full Set',
    department: 'Luxury Apparel',
    itemImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80',
    price: 'R2,999',
    sizes: ['UK S', 'UK M', 'UK L', 'UK XL'],
    colors: ['Reflective', 'Black', 'Silver']
  },
  {
    name: 'PSL Matchday Jersey',
    department: 'Soccer Heritage',
    itemImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1543351611-58f69d95a5ca?auto=format&fit=crop&w=900&q=80',
    price: 'R899',
    sizes: ['UK S', 'UK M', 'UK L', 'UK XL'],
    colors: ['Home', 'Away', 'Blackout']
  },
  {
    name: 'International Fanwear Jersey',
    department: 'Soccer Heritage',
    itemImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=900&q=80',
    price: 'R999',
    sizes: ['UK S', 'UK M', 'UK L', 'UK XL'],
    colors: ['Classic', 'Limited Gold', 'Black']
  },
  {
    name: 'Nike Urban Travel Duffel',
    department: 'Bags & Luggage · Urban Travel',
    itemImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    price: 'R1,299',
    sizes: ['Standard'],
    colors: ['Black', 'Reflective', 'Metallic']
  },
  {
    name: 'Designer School Utility Bag',
    department: 'Bags & Luggage · School Essentials',
    itemImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80',
    price: 'R1,199',
    sizes: ['Standard'],
    colors: ['Black', 'Grey', 'Reflective']
  },
  {
    name: 'Reflector Grip Gloves',
    department: 'Essential Drip',
    itemImage: 'https://images.unsplash.com/photo-1575383598941-ee7d1ec37f53?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    price: 'R499',
    sizes: ['UK S', 'UK M', 'UK L'],
    colors: ['Reflective', 'Black', 'Metallic']
  },
  {
    name: 'Executive Drip Watch Set',
    department: 'Essential Drip',
    itemImage: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80',
    styledImage: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=80',
    price: 'R1,499',
    sizes: ['Standard'],
    colors: ['Gold', 'Black', 'Metallic']
  }
];

const grid = document.getElementById('product-grid');
const hero = document.getElementById('hero-sequence');

function setHeroSequence() {
  let index = 0;
  hero.style.backgroundImage = `url('${heroFrames[0]}')`;
  setInterval(() => {
    index = (index + 1) % heroFrames.length;
    hero.style.backgroundImage = `url('${heroFrames[index]}')`;
  }, 3200);
}

function buildProductCard(product, idx) {
  const reflector = product.name.toLowerCase().includes('reflector') ? 'reflector-glow border-slate-300/50' : '';

  return `
    <article class="rounded-2xl border border-gold/30 bg-panel p-4">
      <div class="flip-card">
        <div class="flip-card-inner relative h-64 w-full">
          <div class="flip-face overflow-hidden rounded-xl border border-white/10">
            <img class="h-full w-full object-cover" src="${product.itemImage}" alt="${product.name} item image" loading="lazy" />
          </div>
          <div class="flip-face flip-back overflow-hidden rounded-xl border border-gold/30 ${reflector}">
            <img class="h-full w-full object-cover" src="${product.styledImage}" alt="${product.name} styled on model" loading="lazy" />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-gold">${product.department}</p>
        <h3 class="mt-1 text-lg font-extrabold">${product.name}</h3>
        <p class="mt-1 text-sm text-white/70">${product.price}</p>

        <div class="mt-4 grid gap-3 sm:grid-cols-2">
          <label class="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
            UK Size
            <select data-size-${idx} class="mt-1 w-full rounded-lg border border-gold/35 bg-black px-3 py-2 text-sm text-white outline-none focus:border-gold">
              ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('')}
            </select>
          </label>

          <label class="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
            Colorway
            <select data-color-${idx} class="mt-1 w-full rounded-lg border border-gold/35 bg-black px-3 py-2 text-sm text-white outline-none focus:border-gold">
              ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join('')}
            </select>
          </label>
        </div>

        <button data-order="${idx}" class="mt-4 w-full rounded-lg bg-gold px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-black transition hover:shadow-glow hover:brightness-110">
          Order on WhatsApp
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  grid.innerHTML = products.map((product, idx) => buildProductCard(product, idx)).join('');

  document.querySelectorAll('[data-order]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.getAttribute('data-order'));
      const item = products[index];
      const size = document.querySelector(`[data-size-${index}]`).value;
      const color = document.querySelector(`[data-color-${index}]`).value;

      const message = `What's up Drip Boy! I need to secure the ${item.name} in ${color}, Size ${size}. Is it available for delivery?`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

setHeroSequence();
renderProducts();
