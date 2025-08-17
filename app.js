
const menuData = [
  {
    name: "Espresso",
    category: "Coffee",
    price: 350,
    img: "https://media.istockphoto.com/id/2202903277/photo/top-view-of-roasted-coffee-beans-in-coffee-cup-and-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=qWMOepG3AWcSsY41GrDuWss-m0Q7eWLhK8yTdJwuxJ0=",
    desc: "Classic Italian espresso shot made from premium beans.",
    whatsapp: "9470000007"
  },
  {
    name: "Cappuccino",
    category: "Coffee",
    price: 450,
    img: "https://images.unsplash.com/photo-1499961524705-bfd103e65a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D",
    desc: "Frothy cappuccino with thick milk foam and a sprinkle of cocoa.",
    whatsapp: "9470000007"
  },
  {
    name: "Latte",
    category: "Coffee",
    price: 450,
    img: "https://media.istockphoto.com/id/1484464555/photo/sip-savor-and-enjoy-a-perfectly-crafted-cappuccino-with-a-beautiful-twist.webp?a=1&b=1&s=612x612&w=0&k=20&c=dQFsMhiNBI11fJHMYi6yZByguqCtGn9yParKyF0BE5s=",
    desc: "Smooth espresso with steamed milk and a layer of foam.",
    whatsapp: "9470000007"
  },
  {
    name: "Iced Americano",
    category: "Coffee",
    price: 400,
    img: "https://media.istockphoto.com/id/1401392978/photo/iced-black-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=AKcodGK4Ba2Pdz1gMaFO66f4m4UsOyuxgpxIxBJwBCM=",
    desc: "Chilled espresso over ice with water for a refreshing pick-me-up.",
    whatsapp: "9470000007"
  },
  {
    name: "Matcha Latte",
    category: "Tea",
    price: 490,
    img: "https://media.istockphoto.com/id/2219262212/photo/barista-pouring-milk-into-matcha-latte-with-latte-art.webp?a=1&b=1&s=612x612&w=0&k=20&c=ECW5qez7cKTLIwTDoWT1kN8cqSV5HEh8D7DBQOIZ5Hw=",
    desc: "Japanese matcha green tea blended with steamed milk.",
    whatsapp: "9470000007"
  },
  {
    name: "Chai Latte",
    category: "Tea",
    price: 420,
    img: "https://media.istockphoto.com/id/171146485/photo/creamy-chai-latte.webp?a=1&b=1&s=612x612&w=0&k=20&c=ON_jb-URNEo5dIZi-8UnqvEZh__oOrjeksjCmzWggVI=",
    desc: "Spiced black tea with steamed milk and a hint of honey.",
    whatsapp: "9470000007"
  },
  {
    name: "Blueberry Scone",
    category: "Pastry",
    price: 380,
    img: "https://media.istockphoto.com/id/1302833389/photo/blueberry-scones.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lgqk5pQkY1D3u5PVJJRjC452USso3Rpx_AeT4PJb4_o=",
    desc: "Homemade scone bursting with fresh blueberries.",
    whatsapp: "9470000007"
  },
  {
    name: "Chocolate Croissant",
    category: "Pastry",
    price: 420,
    img: "https://media.istockphoto.com/id/180824921/photo/fresh-chocolate-croissants-on-a-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=44Uw6NL-hYLCt5pNhVqmFTmlwnnDbUcQC8mfE8WDks8=",
    desc: "Flaky croissant filled with rich chocolate.",
    whatsapp: "9470000007"
  },
  {
    name: "Avocado Toast",
    category: "Sandwich",
    price: 650,
    img: "https://media.istockphoto.com/id/2202730620/photo/tasty-avocado-toast-with-poached-eggs-on-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=YZGvb8IkSkaNabJ6of3aqeFUF7o2QAqMYy69LvxmdYM=",
    desc: "Crispy toast topped with mashed avocado, cherry tomatoes & herbs.",
    whatsapp: "9470000007"
  },
  {
    name: "Turkey Club Sandwich",
    category: "Sandwich",
    price: 770,
    img: "https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.webp?a=1&b=1&s=612x612&w=0&k=20&c=xBuPzSKIpbHABeUbLXTdlAU1Fr6y5Li6sSETpJn-xKs=",
    desc: "Triple-decker sandwich with turkey, bacon, lettuce, and tomato.",
    whatsapp: "9470000007"
  },
  {
    name: "Cheese Omelette",
    category: "Sandwich",
    price: 580,
    img: "https://media.istockphoto.com/id/155373473/photo/omelette-with-cheese-and-spinach.webp?a=1&b=1&s=612x612&w=0&k=20&c=3JiBJcZjylvY5igbC1G5VvGLBwDaIaYGPZtNyT5uHFg=",
    desc: "Three-egg omelette with cheddar cheese and herbs.",
    whatsapp: "9470000007"
  },
  {
    name: "Banana Nut Muffin",
    category: "Pastry",
    price: 350,
    img: "https://media.istockphoto.com/id/534157775/photo/homemade-banana-nut-muffins.webp?a=1&b=1&s=612x612&w=0&k=20&c=0DZIi9jD6cSsewaZ3kbLzkcai8Nd98vh1aYTiJpnIdI=",
    desc: "Moist muffin loaded with ripe bananas and crunchy walnuts. Perfect for a sweet snack or with a cup of coffee.",
    whatsapp: "9470000007" 
  }
];

// Render menu items (with Rs. price and WhatsApp button)
function renderMenu(filter = 'All', search = '') {
  const menuContainer = document.getElementById('menuItems');
  menuContainer.innerHTML = '';
  const filtered = menuData.filter(item => {
    const matchCategory = filter === 'All' || item.category === filter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });
  if (filtered.length === 0) {
    menuContainer.innerHTML = `<div class="col-12 text-center"><p class="text-muted">No items found.</p></div>`;
    return;
  }
  filtered.forEach(item => {
    // WhatsApp order button
    const waMsg = encodeURIComponent(`Hi Cafe Aroma! I would like to order the ${item.name}.`);
    const waBtn = `
      <a href="https://wa.me/${item.whatsapp}?text=${waMsg}" target="_blank"
         class="btn btn-success btn-sm mt-2 w-100">
        <i class="fab fa-whatsapp"></i> Order on WhatsApp
      </a>
    `;
    menuContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${item.img}" alt="${item.name}" class="card-img-top" style="height:220px;object-fit:cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text flex-grow-1">${item.desc}</p>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="fw-bold">Rs. ${item.price.toFixed(0)}</span>
              <span class="badge bg-secondary">${item.category}</span>
            </div>
            ${waBtn}
          </div>
        </div>
      </div>
    `;
  });
}

// Handle menu search/filter
const categoryFilters = document.getElementById('categoryFilters');
let currentCategory = "All";
let currentSearch = "";

categoryFilters.addEventListener('click', (e) => {
  if (e.target.tagName === "BUTTON") {
    [...categoryFilters.children].forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.getAttribute('data-category');
    renderMenu(currentCategory, currentSearch);
  }
});

document.getElementById('menuSearch').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderMenu(currentCategory, currentSearch);
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const alertDiv = document.getElementById('formAlert');
  alertDiv.classList.remove('d-none', 'alert-success', 'alert-danger');
  alertDiv.classList.add('alert', 'alert-success');
  alertDiv.textContent = "Thank you for contacting Café Aroma! We'll get back to you soon.";
  this.reset();
  setTimeout(() => alertDiv.classList.add('d-none'), 3500);
});

// Reservation form validation
document.getElementById('reservationForm').addEventListener('submit', function(e){
  e.preventDefault();
  this.reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
  modal.hide();
  setTimeout(() => alert("Your reservation request has been received!"), 300);
});

// Blog Posts Data
const blogPosts = [
  {
    title: "Our New Summer Menu is Here!",
    date: "2025-07-27",
    summary: "Try our limited edition iced lattes, fresh salads, and more.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "How We Source Our Coffee Beans",
    date: "2025-06-14",
    summary: "We work directly with farmers for the best taste and fair trade.",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
    link: "#"
  },
  {
    title: "Barista Workshop Recap",
    date: "2025-05-08",
    summary: "Thank you to everyone who joined our latte art class!",
    img: "https://media.istockphoto.com/id/966293970/photo/working-at-a-cafe.webp?a=1&b=1&s=612x612&w=0&k=20&c=blbvUm18wWr1FcPXSCSd74JBtK8p-xMD93A3ubw1QvU=",
    link: "#"
  }
];

function renderBlogPosts() {
  const blogDiv = document.getElementById('blogPosts');
  if (!blogDiv) return;
  blogPosts.forEach(post => {
    blogDiv.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${post.img}" class="card-img-top" alt="${post.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${post.title}</h5>
            <p class="text-muted small mb-2">${post.date}</p>
            <p class="card-text flex-grow-1">${post.summary}</p>
            <a href="${post.link}" class="btn btn-primary btn-sm mt-auto">Read More</a>
          </div>
        </div>
      </div>
    `;
  });
}
renderBlogPosts();

// Newsletter Signup
document.getElementById('newsletterForm').addEventListener('submit', function(e){
  e.preventDefault();
  const alertDiv = document.getElementById('newsletterAlert');
  alertDiv.className = "col-12 mt-2 alert alert-success";
  alertDiv.textContent = "Thank you for subscribing!";
  alertDiv.classList.remove('d-none');
  this.reset();
  setTimeout(()=>alertDiv.classList.add('d-none'), 3500);
});

// Initial render
renderMenu();