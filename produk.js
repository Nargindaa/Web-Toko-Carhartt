// Render produk di halaman produk
document.addEventListener('DOMContentLoaded', function() {
  const productsGrid = document.getElementById('productsGrid');

  // Tambahkan tombol "Tambah ke Keranjang" pada setiap produk
  function renderProducts(products) {
    productsGrid.innerHTML = '';

    if (products.length === 0) {
      productsGrid.innerHTML = '<p class="text-center text-gray-500 py-6 col-span-full">Produk tidak ditemukan</p>';
      return;
    }

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1';

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain p-4">
        <div class="p-4">
          <h3 class="font-bold text-gray-800 mb-2 truncate">${product.name}</h3>
          <div class="flex justify-between items-center mb-2">
            <span class="text-black font-bold">Rp${product.price.toLocaleString('id-ID')}</span>
            <span class="text-black">${product.stock} stok</span>
          </div>
          <div class="flex items-center mb-2">
            <span class="text-xs text-gray-500 mr-2">Material:</span>
            <span class="text-xs font-medium bg-gray-100 px-2 py-1 rounded text-black">${product.material}</span>
          </div>
          <button class="bg-amber-900 hover:bg-amber-800 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full add-to-cart-button" data-product-id="${product.id}">Tambah ke Keranjang</button>
        </div>
      `;

      productsGrid.appendChild(productCard);
    });
  }

  // Perbarui fungsi showNotification untuk menampilkan notifikasi di bagian atas tengah
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000); // Notifikasi akan hilang setelah 3 detik
  }

  // Perbarui fungsi addToCart untuk menggunakan notifikasi baru
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      if (cartItem.quantity < product.stock) {
        cartItem.quantity++;
      } else {
        showNotification('Stok tidak mencukupi.');
        return;
      }
    } else {
      cart.push({ id: productId, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} telah ditambahkan ke keranjang.`);
  }

  // Tambahkan event listener untuk tombol "Tambah ke Keranjang"
  document.addEventListener('click', function(event) {
    if (event.target.matches('.add-to-cart-button')) {
      const productId = parseInt(event.target.dataset.productId, 10);
      addToCart(productId);
    }
  });

  // Simpan keranjang ke localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Muat keranjang dari localStorage
  function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        cart = JSON.parse(savedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        cart = [];
      }
    }
  }

  // Perbarui jumlah item di ikon keranjang
  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
  }

  // Inisialisasi keranjang
  let cart = [];
  loadCart();
  updateCartCount();

  // Data produk (gunakan data asli jika tersedia)
  const products = [
    {
        id: 1,
        name: "Relaxed Fit Heavyweight Short-Sleeve Pocket Shamrock Graphic T-Shirt",
        price: 47.65,
        image: "/aset/Baju Carhartt.jpg", // Replace with your image path
        category: "Shirts",
        material: "Cotton",
        stock: 10,
        dateAdded: new Date().toISOString()
      },
      {
        id: 2,
        name: "Force Sun Defender™ Lightweight Long-Sleeve Logo Graphic T-Shirt",
        price: 53.65,
        image: "/Aset/Ls Carhartt.avif", // Replace with your image path
        category: "Pants",
        material: "Cotton",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 3,
        name: "Carhartt Force Sun Defender™ Lightweight Short-Sleeve Logo Graphic T-Shirt",
        price: 47.65,
        image: "/Aset/Ts Carhartt.avif", // Replace with your image path
        category: "Shirts",
        material: "Cotton",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 4,
        name: "Loose Fit Heavyweight Long-Sleeve Shamrock Graphic T-Shirt",
        price: 53.65,
        image: "/Aset/Ls 2.webp", // Replace with your image path
        category: "Pants",
        material: "Cotton",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 5,
        name: "Loose Fit Midweight Quarter Zip Mock Neck Sweatshirt",
        price: 59.64,
        image: "/Aset/Zip.webp", // Replace with your image path
        category: "Jackets",
        material: "Cotton",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 6,
        name: "Rain Defender™ Loose Fit Midweight 'C' Graphic Sweatshirt",
        price: 77.53,
        image: "/Aset/Hoodie.webp", // Replace with your image path
        category: "Jackets",
        material: "Flecee",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 7,
        name: "Knit Cuffed Beanie",
        price: 29.82,
        image: "/Aset/Kupluk.jpeg", // Replace with your image path
        category: "accessories",
        material: "Cotton",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 8,
        name: "Rugged Flex™ Twill Mesh-Back Logo Patch Cap",
        price: 28.63,
        image: "/Aset/Topi.webp", // Replace with your image path
        category: "accessories",
        material: "Canvas",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 9,
        name: "Canvas Cap",
        price: 28.63,
        image: "/Aset/Topi 2.webp", // Replace with your image path
        category: "accessories",
        material: "Canvas",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
      // Add more products as needed
      {
        id: 10,
        name: "Greenfields Rugged Flex™ 02 Occupational Workboot",
        price: 125.25,
        image: "/Aset/Sepatu.webp", // Replace with your image path
        category: "shoes",
        material: "canvas",
        stock: 5,
        dateAdded: new Date().toISOString()
      },
  ];

  // Konversi harga dari dolar ke rupiah
  const conversionRate = 16000; // Asumsi 1 USD = 16,000 IDR
  products.forEach(product => {
    product.price = product.price * conversionRate;
  });

  renderProducts(products);

  // Tambahkan event listener untuk tombol menu dropdown
  const menuButton = document.querySelector('.btn-circle.avatar');
  const dropdownMenu = document.querySelector('.dropdown-content');

  // Sembunyikan menu dropdown secara default
  dropdownMenu.classList.add('hidden');

  menuButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden'); // Tampilkan atau sembunyikan menu dropdown
  });

  // Tambahkan event listener untuk item menu
  const menuItems = document.querySelectorAll('.dropdown-content li a');
  menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku default tautan

      const menuText = this.textContent.trim();

      if (menuText === 'Profil') {
        alert('Fitur Profil belum tersedia.');
      } else if (menuText === 'Pengaturan') {
        alert('Fitur Pengaturan belum tersedia.');
      } else if (menuText === 'Keluar') {
        alert('Anda telah berhasil keluar.');
        // Tambahkan logika logout jika diperlukan
      }

      dropdownMenu.classList.add('hidden'); // Sembunyikan menu setelah klik
    });
  });

  // Tambahkan event listener untuk tombol Beranda
  document.querySelector('.btn-ghost[href="index.html"]').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default tautan

    // Alihkan pengguna ke halaman awal
    window.location.href = 'index.html';
  });

  // Tambahkan event listener untuk tombol pencarian
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
      alert('Masukkan kata kunci untuk mencari produk.');
      renderProducts(products); // Tampilkan semua produk jika pencarian kosong
      return;
    }

    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.material.toLowerCase().includes(query)
    );

    if (filteredProducts.length === 0) {
      alert('Produk tidak ditemukan.');
    }

    renderProducts(filteredProducts);
  });

  // Tambahkan event listener untuk ikon keranjang
  document.getElementById('cartIcon').addEventListener('click', function() {
    renderCart();
    document.getElementById('cartModal').classList.remove('hidden');
  });

  // Tambahkan event listener untuk tombol tutup modal keranjang
  document.getElementById('closeCartModal').addEventListener('click', function() {
    document.getElementById('cartModal').classList.add('hidden');
  });

  // Tambahkan event listener untuk tombol checkout
  document.getElementById('checkoutButton').addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Keranjang Anda kosong. Silakan tambahkan produk sebelum checkout.');
      return;
    }

    renderReceipt();
    document.getElementById('cartModal').classList.add('hidden');
    document.getElementById('receiptModal').classList.remove('hidden');
  });

  // Tambahkan event listener untuk tombol tutup modal struk
  document.getElementById('closeReceiptModal').addEventListener('click', function() {
    document.getElementById('receiptModal').classList.add('hidden');
  });

  // Tambahkan event listener untuk tombol cetak struk
  document.getElementById('printReceipt').addEventListener('click', function() {
    alert('Struk telah dicetak!');
    document.getElementById('receiptModal').classList.add('hidden');
  });

  // Fungsi untuk merender isi keranjang
  function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    cartItems.innerHTML = '';

    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="text-center text-gray-500 py-6">Keranjang Anda kosong</p>';
      cartTotal.textContent = 'Rp0.00';
      return;
    }

    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return;

      const itemTotal = product.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement('div');
      cartItem.className = 'flex items-center justify-between py-2 border-b';
      cartItem.innerHTML = `
        <div class="flex items-center">
          <img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover mr-4">
          <div>
            <h4 class="font-medium">${product.name}</h4>
            <p class="text-gray-500">Rp${product.price.toLocaleString('id-ID')} x ${item.quantity}</p>
          </div>
        </div>
        <div class="flex items-center">
          <span class="font-medium mr-4">Rp${itemTotal.toLocaleString('id-ID')}</span>
          <button class="text-red-500 hover:text-red-700" data-id="${product.id}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;

      cartItems.appendChild(cartItem);

      // Tambahkan event listener untuk tombol hapus
      const removeButton = cartItem.querySelector('button');
      removeButton.addEventListener('click', () => removeFromCart(product.id));
    });

    cartTotal.textContent = `Rp${total.toLocaleString('id-ID')}`;
  }

  // Fungsi untuk merender struk
  function renderReceipt() {
    const receiptItems = document.getElementById('receiptItems');
    const receiptDate = document.getElementById('receiptDate');
    const receiptNumber = document.getElementById('receiptNumber');
    const receiptSubtotal = document.getElementById('receiptSubtotal');
    const receiptTax = document.getElementById('receiptTax');
    const receiptTotal = document.getElementById('receiptTotal');

    receiptDate.textContent = new Date().toLocaleDateString();
    receiptNumber.textContent = `R-${Date.now().toString().slice(-6)}`;

    let subtotal = 0;

    receiptItems.innerHTML = '';

    cart.forEach(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return;

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;

      const receiptItem = document.createElement('div');
      receiptItem.className = 'flex justify-between text-xs mb-2';
      receiptItem.innerHTML = `
        <div class="w-1/2 truncate">${product.name}</div>
        <div class="w-1/4 text-center">${item.quantity}</div>
        <div class="w-1/4 text-right">Rp${itemTotal.toLocaleString('id-ID')}</div>
      `;

      receiptItems.appendChild(receiptItem);
    });

    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    receiptSubtotal.textContent = `Rp${subtotal.toLocaleString('id-ID')}`;
    receiptTax.textContent = `Rp${tax.toLocaleString('id-ID')}`;
    receiptTotal.textContent = `Rp${total.toLocaleString('id-ID')}`;

    // Kosongkan keranjang setelah checkout
    cart = [];
    saveCart();
    updateCartCount();
  }
});

// Panggil loadCart saat halaman dimuat untuk sinkronisasi keranjang
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  updateCartCount();
  renderCart && renderCart(); // Render keranjang jika fungsi renderCart tersedia
});