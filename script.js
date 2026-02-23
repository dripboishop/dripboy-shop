const WHATSAPP_LINK = 'https://wa.me/27696643402';

// Hero slideshow
const heroImages = [
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1800&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=80'
];

const hero = document.querySelector('.hero');
let heroIndex = 0;

function setHeroImage() {
  hero.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
  heroIndex = (heroIndex + 1) % heroImages.length;
}

setHeroImage();
setInterval(setHeroImage, 4500);

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navArea = document.querySelector('.nav-area');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navArea.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navArea.classList.remove('show');
  });
});

// Shop dropdown support on mobile button
const shopToggle = document.querySelector('.shop-toggle');
const shopDropdown = document.querySelector('.shop-dropdown');
shopToggle.addEventListener('click', () => {
  shopDropdown.classList.toggle('open');
  const isOpen = shopToggle.getAttribute('aria-expanded') === 'true';
  shopToggle.setAttribute('aria-expanded', String(!isOpen));
});

// Live search across all categories
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', (event) => {
  const term = event.target.value.trim().toLowerCase();

  cards.forEach((card) => {
    const name = card.dataset.name;
    const match = name.includes(term);
    card.classList.toggle('hidden-by-search', !match);
  });
});

// WhatsApp order flow with validation
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    const productName = card.querySelector('.product-name').textContent.trim();
    const selectedColor = card.querySelector('.color-select').value;
    const selectedSize = card.querySelector('.size-select').value;

    if (!selectedColor || !selectedSize) {
      window.alert('Please select both color and size before ordering.');
      return;
    }

    const message = `Hi DripBoy Shop, I would like to order:\n\nProduct: ${productName}\nColor: ${selectedColor}\nSize: ${selectedSize}\n\nI understand shipping is free nationwide.`;
    const fullLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;

    window.open(fullLink, '_blank', 'noopener,noreferrer');
  });
});
