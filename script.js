// =============================
// Product data (easy to edit)
// Copy/paste an object below to add a new product.
// category must match one of:
// New Arrivals, Footwear, Apparel, PSL Heritage,
// International Jerseys, Tracksuits, Accessories, Bags
// =============================
const products = [
  {
    name: "Air Jordan 4 Retro",
    price: 3299,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black/Red", "White/Cement"],
    isNewArrival: true,
  },
  {
    name: "Air Jordan 6",
    price: 3399,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Infrared", "Cool Grey"],
  },
  {
    name: "Nike Air Max TN",
    price: 2799,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Triple Black", "White/Gold"],
    isNewArrival: true,
  },
  {
    name: "Adidas Forum Low",
    price: 1999,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=80",
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["White/Blue", "Black/White"],
  },
  {
    name: "G-Star Raw T-Shirt",
    price: 749,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Olive"],
    isNewArrival: true,
  },
  {
    name: "Nike Club Fleece Hoodie",
    price: 1199,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1556821840-3a9fbc4d02f2?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey"],
  },
  {
    name: "Kaizer Chiefs Home Jersey",
    price: 1099,
    category: "PSL Heritage",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gold/Black"],
  },
  {
    name: "Orlando Pirates Home Jersey",
    price: 1099,
    category: "PSL Heritage",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black/White"],
    isNewArrival: true,
  },
  {
    name: "Real Madrid Home Jersey",
    price: 1249,
    category: "International Jerseys",
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
  },
  {
    name: "Manchester United Away Jersey",
    price: 1249,
    category: "International Jerseys",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Green/White"],
  },
  {
    name: "Nike Academy Tracksuit",
    price: 1699,
    category: "Tracksuits",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    isNewArrival: true,
  },
  {
    name: "Adidas Tiro Tracksuit",
    price: 1599,
    category: "Tracksuits",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black/White", "Grey/Black"],
  },
  {
    name: "Diesel Wallet",
    price: 899,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    colors: ["Black", "Brown"],
  },
  {
    name: "Lacoste Wallet",
    price: 999,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1601592993348-29c2f01f24a7?auto=format&fit=crop&w=900&q=80",
    colors: ["Black", "Navy"],
    isNewArrival: true,
  },
  {
    name: "Nike Elemental Backpack",
    price: 1099,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    colors: ["Black", "Khaki"],
  },
  {
    name: "Adidas Duffel Bag",
    price: 1199,
    category: "Bags",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    colors: ["Black/White"],
  },
];

const WHATSAPP_NUMBER = "27696643402";
const sectionGrids = document.querySelectorAll("[data-section-grid]");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const modal = document.getElementById("order-modal");
const modalClose = document.getElementById("modal-close");
const modalProductName = document.getElementById("modal-product-name");
const sizeField = document.getElementById("size-field");
const sizeSelect = document.getElementById("modal-size");
const colorField = document.getElementById("color-field");
const colorSelect = document.getElementById("modal-color");
const quantityInput = document.getElementById("modal-quantity");
const modalOrderBtn = document.getElementById("modal-order-btn");

const formatPrice = (amount) => `R${amount.toLocaleString("en-ZA")}`;
let activeProduct = null;

function buildOptions(options = []) {
  return options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");
}

function buildProductCard(product, index) {
  return `
    <article class="product-card fade-in visible" data-product-index="${index}" tabindex="0" role="button" aria-label="Open order options for ${product.name}">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-body">
        <p class="meta">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="price">${formatPrice(product.price)}</p>
        <p class="sizes">${product.sizes ? `Sizes: ${product.sizes.join(" • ")}` : "Tap to choose options"}</p>
      </div>
    </article>
  `;
}

function renderSectionProducts() {
  sectionGrids.forEach((grid) => {
    const sectionCategory = grid.dataset.sectionGrid;

    const sectionProducts =
      sectionCategory === "New Arrivals"
        ? products.filter((product) => product.isNewArrival)
        : products.filter((product) => product.category === sectionCategory);

    grid.innerHTML = sectionProducts
      .map((product) => buildProductCard(product, products.indexOf(product)))
      .join("");
  });

  bindProductCardClicks();
}

function openModal(product) {
  activeProduct = product;
  modalProductName.textContent = `${product.name} • ${formatPrice(product.price)}`;

  if (product.sizes && product.sizes.length) {
    sizeField.style.display = "block";
    sizeSelect.innerHTML = buildOptions(product.sizes);
  } else {
    sizeField.style.display = "none";
    sizeSelect.innerHTML = "";
  }

  if (product.colors && product.colors.length) {
    colorField.style.display = "block";
    colorSelect.innerHTML = buildOptions(product.colors);
  } else {
    colorField.style.display = "none";
    colorSelect.innerHTML = "";
  }

  quantityInput.value = 1;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  activeProduct = null;
}

function bindProductCardClicks() {
  document.querySelectorAll("[data-product-index]").forEach((card) => {
    const openCardModal = () => {
      const index = Number(card.dataset.productIndex);
      const product = products[index];
      if (product) openModal(product);
    };

    card.addEventListener("click", openCardModal);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openCardModal();
      }
    });
  });
}

modalOrderBtn.addEventListener("click", () => {
  if (!activeProduct) return;

  const selectedSize = sizeField.style.display === "none" ? "N/A" : sizeSelect.value;
  const selectedColor = colorField.style.display === "none" ? "N/A" : colorSelect.value;
  const quantity = Math.max(1, Number(quantityInput.value) || 1);

  const message = encodeURIComponent(
    `Hi DripBoy Shop, I’m interested in ${activeProduct.name}.\nSize: ${selectedSize}\nColor: ${selectedColor}\nQuantity: ${quantity}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close-modal")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

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
renderSectionProducts();
