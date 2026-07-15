const products = [
  {
    name: "Chocolate Dream Cake",
    category: "cake",
    price: "$32",
    description: "Rich layers of dark chocolate and smooth ganache.",
    image: "assert/2.jpg",
  },
  {
    name: "Vanilla Croissant",
    category: "pastry",
    price: "$5",
    description: "Crispy, buttery, and perfect with coffee.",
    image: "assert/3.jpg",
  },
  {
    name: "Strawberry Tart",
    category: "tart",
    price: "$12",
    description: "Fresh berries with creamy custard filling.",
    image: "assert/4.jpg",
  },
  {
    name: "Caramel Donut Dozen",
    category: "pastry",
    price: "$18",
    description: "Golden donuts with caramel glaze.",
    image: "assert/5.jpg",
  },
  {
    name: "Carrot Cake Slice",
    category: "cake",
    price: "$6",
    description: "Moist and fluffy with cream cheese frosting.",
    image: "assert/6.jpg",
  },
  {
    name: "Berry Cheesecake",
    category: "tart",
    price: "$28",
    description: "Perfect for birthdays and celebrations.",
    image: "assert/7.jpg",
  },
];

const quoteBank = [
  '"Every perfect cake begins with quality ingredients and patience."',
  '"Fresh-baked happiness in every bite."',
  '"Life is sweet, especially with pastries."',
];

function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const visibleProducts = products.filter(
    (product) => filter === "all" || product.category === filter,
  );

  grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="mini-card">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <strong>${product.price}</strong>
        </article>
      `,
    )
    .join("");
}

function setupFilters() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });
}

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const button = document.getElementById("menu-btn");
  if (!nav || !button) return;
  nav.classList.toggle("open");
}

function setYear() {
  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function rotateQuote() {
  const quote = document.getElementById("quote-text");
  const button = document.getElementById("quote-btn");
  if (!quote || !button) return;

  let index = 0;
  quote.textContent = quoteBank[index];

  button.addEventListener("click", () => {
    index = (index + 1) % quoteBank.length;
    quote.textContent = quoteBank[index];
  });
}

function handleContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    status.textContent = `Thanks, ${name || "friend"}! Your message is ready for the shop.`;
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  renderProducts();
  setupFilters();
  rotateQuote();
  handleContactForm();

  const menuButton = document.getElementById("menu-btn");
  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }
});
