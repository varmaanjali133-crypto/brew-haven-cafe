let cart = [];
let total = 0;
let wishlist = [];

function addItem(
  name,
  price,
  btn
) {

  const existingItem =
    cart.find(item =>
      item.name === name
    );

  if (existingItem) {

    existingItem.qty++;

  }

  else {

    cart.push({
      name,
      price,
      qty: 1
    });

  }

  updateCart();

  if (btn) {

    btn.innerText =
      "✓ Added";

    btn.disabled = true;

    setTimeout(() => {

      btn.innerText =
        "Add To Cart";

      btn.disabled =
        false;

    }, 2000);

  }

}

function updateCart() {

  let box = document.getElementById("cartItems");
  if (!box) return;

  box.innerHTML = "";

  cart.forEach((i, index) => {

    let div =
      document.createElement("div");

    div.className =
      "cart-item";

    div.innerHTML = `

    <h4>${i.name}</h4>

    <div class="qty-controls">

      <button onclick="decreaseQty(${index})">
        -
      </button>

      <span>${i.qty}</span>

      <button onclick="increaseQty(${index})">

        +

      </button>
    </div>
    <p>
      ₹${i.price * i.qty}
    </p>

    <button
      class="remove-btn"
      onclick="removeItem(${index})">

      Remove

    </button>

  `;

    box.appendChild(div);

  });

  let count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;

  let t = document.getElementById("total");
  const totalPrice =
    cart.reduce(

      (sum, item) =>

        sum +
        item.price * item.qty,

      0

    );

  if (t)
    t.innerText = totalPrice;

  const emptyMsg =
    document.getElementById(
      "emptyCartMsg"
    );

  if (cart.length === 0) {

    emptyMsg.style.display =
      "block";

  }

  else {

    emptyMsg.style.display =
      "none";

  }
}
function increaseQty(index) {

  cart[index].qty++;

  updateCart();

}

function decreaseQty(index) {

  if (cart[index].qty > 1) {

    cart[index].qty--;

  }

  else {

    cart.splice(index, 1);

  }

  updateCart();

}

function removeItem(index) {

  cart.splice(index, 1);

  updateCart();

}

function toggleCart() {

  document
    .getElementById("cartDrawer")
    .classList
    .toggle("open");

  document
    .getElementById("cartOverlay")
    .classList
    .toggle("show");

  document
    .querySelector(".cart-btn")
    .classList
    .toggle("active");

  document
    .querySelector(".wishlist-nav")
    .classList
    .remove("active");

  document
    .getElementById("wishlistDrawer")
    ?.classList
    .remove("open");

  document
    .getElementById("wishlistOverlay")
    ?.classList
    .remove("active");

}
function toggleWishlist() {

  document
    .getElementById("wishlistDrawer")
    .classList
    .toggle("open");

  document
    .getElementById("wishlistOverlay")
    .classList
    .toggle("active");

  document
    .querySelector(".wishlist-nav")
    .classList
    .toggle("active");

  document
    .querySelector(".cart-btn")
    .classList
    .remove("active");

  document
    .getElementById("cartDrawer")
    ?.classList
    .remove("open");

  document
    .getElementById("cartOverlay")
    ?.classList
    .remove("show");

}


function checkout() {

  document
    .getElementById("checkoutModal")
    .style.display = "flex";

}
const form =
  document.getElementById("contactForm");

if (form) {

  form.addEventListener(
    "submit",
    function (e) {

      e.preventDefault();

      const toast =
        document.getElementById("successToast");

      toast.style.display = "block";

      setTimeout(() => {
        toast.style.display = "none";
      }, 3000);

      form.reset();

    });
}
const galleryImages =
  document.querySelectorAll(".gallery-item");

const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightboxImg");

const closeLightbox =
  document.getElementById("closeLightbox");

if (
  galleryImages.length > 0 &&
  lightbox &&
  lightboxImg &&
  closeLightbox
) {

  galleryImages.forEach(img => {

    img.addEventListener("click", () => {

      lightbox.style.display = "flex";

      lightboxImg.src = img.src;

    });

  });

  closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

  });

}

const filterButtons =
  document.querySelectorAll(".filter-btn");

const galleryItems =
  document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelector(".filter-btn.active")
      ?.classList.remove("active");

    button.classList.add("active");

    const filter =
      button.dataset.filter;

    galleryItems.forEach(item => {

      if (filter === "all") {

        item.style.display = "block";

      }

      else if (item.classList.contains(filter)) {

        item.style.display = "block";

      }

      else {

        item.style.display = "none";

      }

    });

  });

});

if (lightbox) {

  lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

      lightbox.style.display = "none";

    }

  });

}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach(item => {

    const top = item.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {

      item.classList.add("active");
    }

  });

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

  const target = parseFloat(counter.dataset.target);

  let current = 0;

  const duration = 2000; // 2 seconds

  const step = target / (duration / 16);

  function updateCounter() {

    current += step;

    if (current < target) {

      if (target === 4.9) {

        counter.innerText = current.toFixed(1);

      } else {

        counter.innerText = Math.floor(current);
      }

      requestAnimationFrame(updateCounter);

    } else {

      if (target === 20) {

        counter.innerText = "20+";

      }

      else if (target === 10000) {

        counter.innerText = "10K+";

      }

      else if (target === 4.9) {

        counter.innerText = "4.9★";

      }
    }
  }

  updateCounter();

});
window.addEventListener("scroll", () => {

  const header =
    document.querySelector("header");

  header.classList.toggle(
    "scrolled",
    window.scrollY > 50
  );

});
const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

  });

}
const topBtn =
  document.getElementById("topBtn");

if (topBtn) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

      topBtn.style.display = "block";

    } else {

      topBtn.style.display = "none";

    }

  });

  topBtn.addEventListener("click", () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

}
window.addEventListener("load", () => {

  const currentPage =
    window.location.pathname.split("/").pop();

  document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

      if (
        link.getAttribute("href") === currentPage
      ) {

        link.classList.add("active");

      }

    });

});
window.addEventListener("scroll", () => {

  const nav =
    document.querySelector(".nav");

  if (window.scrollY > 50) {

    nav.classList.add("scrolled");

  } else {

    nav.classList.remove("scrolled");

  }

});
const navbar =
  document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

  }

  else {

    navbar.classList.remove("scrolled");

  }

});
window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  document.getElementById(
    "scrollProgress"
  ).style.width = progress + "%";

});
const menuTabs =
  document.querySelectorAll(".menu-tab");

const menuCards =
  document.querySelectorAll(".menu-card");

menuTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    menuTabs.forEach(btn =>
      btn.classList.remove("active")
    );

    tab.classList.add("active");

    const filter =
      tab.dataset.filter;

    menuCards.forEach(card => {

      if (
        filter === "all" ||
        card.dataset.category === filter
      ) {

        card.style.display = "block";

      }

      else {

        card.style.display = "none";

      }

    });

  });

});
const searchInput =
  document.getElementById("menuSearch");

searchInput?.addEventListener("input", () => {

  const value =
    searchInput.value.toLowerCase();

  let visibleCount = 0;

  menuCards.forEach(card => {

    const itemName =
      card.querySelector("h3")
        .innerText
        .toLowerCase();

    if (
      itemName.includes(value)
    ) {

      card.style.display = "block";

      visibleCount++;

    }

    else {

      card.style.display = "none";

    }

  });

  const resultText =
    document.getElementById(
      "searchResultText"
    ).innerText =
    `${visibleCards} items found`;;

  if (value === "") {

    resultText.innerText = "";

  }

  else if (visibleCount === 0) {

    resultText.innerText =
      "No items found";

  }

  else {

    resultText.innerText =
      visibleCount + " item(s) found";

  }

});
document
  .querySelectorAll(".wishlist-btn")
  .forEach(btn => {

    btn.addEventListener("click", () => {

      const card =
        btn.closest(".menu-card");

      const itemName =
        card.querySelector("h3")
          .innerText;

      if (
        btn.innerText === "♡"
      ) {

        btn.innerText = "♥";

        wishlist.push(itemName);

      }

      else {

        btn.innerText = "♡";

        wishlist =
          wishlist.filter(

            item =>
              item !== itemName

          );

      }

      updateWishlist();

    });

  });
const sortMenu =
  document.getElementById("sortMenu");

sortMenu?.addEventListener("change", () => {

  const grid =
    document.getElementById("menuGrid");

  const cards =
    Array.from(
      grid.querySelectorAll(".menu-card")
    );

  if (sortMenu.value === "low") {

    cards.sort((a, b) => {

      const priceA =
        parseInt(
          a.querySelector(".price-row span")
            .innerText.replace("₹", "")
        );

      const priceB =
        parseInt(
          b.querySelector(".price-row span")
            .innerText.replace("₹", "")
        );

      return priceA - priceB;

    });

  }

  else if (
    sortMenu.value === "high"
  ) {

    cards.sort((a, b) => {

      const priceA =
        parseInt(
          a.querySelector(".price-row span")
            .innerText.replace("₹", "")
        );

      const priceB =
        parseInt(
          b.querySelector(".price-row span")
            .innerText.replace("₹", "")
        );

      return priceB - priceA;

    });

  }

  cards.forEach(card => {

    grid.appendChild(card);

  });

});
function updateWishlist() {

  const count =
    document.getElementById(
      "wishlistCount"
    );

  if (count) {

    count.innerText =
      wishlist.length;

  }

  const box =
    document.getElementById(
      "wishlistItems"
    );

  if (!box) return;

  box.innerHTML = "";

  wishlist.forEach((item, index) => {

    const div =
      document.createElement("div");

    div.innerHTML = `

    <div class="wishlist-item">

      <div class="wishlist-info">

        <h4>${item}</h4>

        <span>

          ⭐ Guest Favorite

        </span>

      </div>

      <div class="wishlist-actions">

        <button
          class="wishlist-cart-btn"
          onclick="addWishlistToCart('${item}')">

          🛒 Add

        </button>

        <button
          class="wishlist-remove-btn"
          onclick="removeWishlistItem(${index})">

          ✕

        </button>

      </div>

    </div>

  `;

    box.appendChild(div);

  });

}


function removeWishlistItem(itemName) {

  wishlist =
    wishlist.filter(

      item =>
        item !== itemName

    );

  updateWishlist();

}
function wishlistToCart(itemName) {

  const card =

    [...document.querySelectorAll(".menu-card")]

      .find(card =>

        card.querySelector("h3")
          .innerText === itemName

      );

  if (!card) return;

  const price = Number(

    card.querySelector(
      ".price-row span"
    )

      .innerText

      .replace("₹", "")

  );

  addItem(itemName, price);

}
function closeCheckout() {

  document
    .getElementById("checkoutModal")
    .style.display = "none";

}
function placeOrder() {

  const name =
    document.getElementById(
      "customerName"
    ).value;

  const phone =
    document.getElementById(
      "customerPhone"
    ).value;

  const address =
    document.getElementById(
      "customerAddress"
    ).value;

  if (
    !name ||
    !phone ||
    !address
  ) {

    alert(
      "Please fill all required fields."
    );

    return;

  }

  const orderId =
    "BH" +
    Math.floor(
      1000 + Math.random() * 9000
    );

  document
    .getElementById(
      "orderIdText"
    )
    .innerText =
    `Order ID: ${orderId}`;

  document
    .getElementById(
      "successModal"
    )
    .style.display =
    "flex";

  closeCheckout();

}
function closeSuccess() {

  document
    .getElementById(
      "successModal"
    )
    .style.display =
    "none";

}
function openQuickView(
  title,
  image,
  desc,
  price
) {

  document.getElementById(
    "quickViewModal"
  ).style.display = "flex";

  document.getElementById(
    "quickImg"
  ).src = image;

  document.getElementById(
    "quickTitle"
  ).innerText = title;

  document.getElementById(
    "quickDesc"
  ).innerText = desc;

  document.getElementById(
    "quickPrice"
  ).innerText =
    `₹${price}`;

  document.getElementById(
    "quickAddBtn"
  ).onclick = () => {

    addItem(
      title,
      price
    );

  };

}

function closeQuickView() {

  document
    .getElementById("quickViewModal")
    .style.display = "none";

}
function removeWishlistItem(index) {

  wishlist.splice(index, 1);

  updateWishlist();

}
function addWishlistToCart(name) {

  const prices = {

    "Espresso": 120,

    "Cappuccino": 150,

    "Latte": 180,

    "Cold Brew": 170,

    "Mocha": 200,

    "Caramel Latte": 220,

    "Cheesecake": 250,

    "Brownie": 180,

    "Red Velvet Cake": 260,

    "Strawberry Smoothie": 190,

    "Avocado Toast": 290

  };

  addItem(
    name,
    prices[name]
  );

}