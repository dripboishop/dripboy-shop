// =============================
// Product data (easy to edit)
// Copy/paste an object below to add a new product.
// =============================
const products = [
  {
    name: "Urban Phantom 1",
    price: 1499,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    name: "Goldline Runner",
    price: 1299,
    category: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    name: "Street Script Tee",
    price: 499,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Noir Utility Jacket",
    price: 1099,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    name: "Weekend Flex Combo",
    price: 1899,
    category: "Combos",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    comboPrice: 1699,
  },
  {
    name: "Street Starter Combo",
    price: 1599,
    category: "Combos",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    comboPrice: 1399,
  },
];

const WHATSAPP_NUMBER = "27696643402";
const productGrid = document.getElementById("product-grid");
const tabButtons = document.querySelectorAll(".tab-btn");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const formatPrice = (amount) => `R${amount.toLocaleString("en-ZA")}`;

// Render product cards by category
function renderProducts(filter = "all") {
  const visibleProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const message = encodeURIComponent(
        `Hi DripBoy Shop, I’m interested in ${product.name}.`
      );
      const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

      return `
        <article class="product-card fade-in visible">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <div class="product-body">
            <p class="meta">${product.category}</p>
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            ${
              product.comboPrice
                ? `<p class="combo">Combo Price: <strong>${formatPrice(product.comboPrice)}</strong></p>`
                : ""
            }
            <p class="sizes">Sizes: ${product.sizes.join(" • ")}</p>
            <a class="btn btn-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
          </div>
        </article>
      `;
    })
    .join("");
}

// Category filters
if (tabButtons.length) {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });
}

// Mobile menu toggle
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Fade-in on scroll using IntersectionObserver
const revealItems = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => observer.observe(item));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Initial product render
renderProducts();
