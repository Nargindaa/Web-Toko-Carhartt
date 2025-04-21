src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js"
      // Sample product data - would be replaced with API data
      const fetchProducts = async () => {
        try {
          // Replace the API call with your custom product data
          return [
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
        } catch (error) {
          console.error('Error fetching products:', error);
          return [];
        }
      };
  
      // DOM Elements
      const userIcon = document.getElementById('userIcon');
      const authModal = document.getElementById('authModal');
      const closeAuthModal = document.getElementById('closeAuthModal');
      const loginTab = document.getElementById('loginTab');
      const registerTab = document.getElementById('registerTab');
      const goToRegister = document.getElementById('goToRegister');
      const goToLogin = document.getElementById('goToLogin');
      const loginButton = document.getElementById('loginButton');
      const registerButton = document.getElementById('registerButton');
      const cartIcon = document.getElementById('cartIcon');
      const stickyCart = document.getElementById('stickyCart');
      const cartModal = document.getElementById('cartModal');
      const closeCartModal = document.getElementById('closeCartModal');
      const checkoutButton = document.getElementById('checkoutButton');
      const receiptModal = document.getElementById('receiptModal');
      const closeReceiptModal = document.getElementById('closeReceiptModal');
      const printReceipt = document.getElementById('printReceipt');
      const dashboardModal = document.getElementById('dashboardModal');
      const closeDashboardModal = document.getElementById('closeDashboardModal');
      const dashboardLogout = document.getElementById('dashboardLogout');
      const dashboardLinks = document.querySelectorAll('.dashboard-link');
      const loadingProducts = document.getElementById('loadingProducts');
      const productsGrid = document.getElementById('productsGrid');
      const cartCount = document.getElementById('cartCount');
      const stickyCartCount = document.getElementById('stickyCartCount');
      const searchInput = document.getElementById('searchInput');
      const searchButton = document.getElementById('searchButton');
      const sortBy = document.getElementById('sortBy');
      const filterMaterial = document.getElementById('filterMaterial');
      const filterCategory = document.getElementById('filterCategory');
      const googleSignIn = document.getElementById('googleSignIn');
  
      // Cart state
      let cart = [];
      let products = [];
      let currentUser = null;
  
      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
        loadCart();
        loadProducts();
        updateCartCount();
        loadLoginStatus();
        updateProfileIcon();
        
        // Event listeners
        if (userIcon) userIcon.addEventListener('click', showAuthModal);
        if (closeAuthModal) closeAuthModal.addEventListener('click', closeModal);
        if (goToRegister) goToRegister.addEventListener('click', showRegisterTab);
        if (goToLogin) goToLogin.addEventListener('click', showLoginTab);
        if (loginButton) loginButton.addEventListener('click', handleLogin);
        if (registerButton) registerButton.addEventListener('click', handleRegister);
        if (cartIcon) cartIcon.addEventListener('click', showCartModal);
        if (stickyCart) stickyCart.addEventListener('click', showCartModal);
        if (closeCartModal) closeCartModal.addEventListener('click', closeModal);
        if (checkoutButton) checkoutButton.addEventListener('click', handleCheckout);
        if (closeReceiptModal) closeReceiptModal.addEventListener('click', closeModal);
        if (printReceipt) printReceipt.addEventListener('click', printReceiptHandler);
        if (closeDashboardModal) closeDashboardModal.addEventListener('click', closeModal);
        if (dashboardLogout) dashboardLogout.addEventListener('click', handleLogout);
        if (searchButton) searchButton.addEventListener('click', handleSearch);
        if (sortBy) sortBy.addEventListener('change', handleSort);
        if (filterMaterial) filterMaterial.addEventListener('change', filterProducts);
        if (filterCategory) filterCategory.addEventListener('change', filterProducts);
        if (googleSignIn) googleSignIn.addEventListener('click', handleGoogleSignIn);
        
        // Dashboard section navigation
        dashboardLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = e.currentTarget.getAttribute('data-target');
            showDashboardSection(targetSection);
          });
        });
      });
  
      // Show Auth Modal
      function showAuthModal() {
        authModal.classList.remove('hidden');
        loginTab.classList.remove('hidden');
        registerTab.classList.add('hidden');
      }
  
      // Show Register Tab
      function showRegisterTab(e) {
        e.preventDefault();
        loginTab.classList.add('hidden');
        registerTab.classList.remove('hidden');
      }
  
      // Show Login Tab
      function showLoginTab(e) {
        e.preventDefault();
        registerTab.classList.add('hidden');
        loginTab.classList.remove('hidden');
      }
  
      // Close Modal
      function closeModal() {
        authModal.classList.add('hidden');
        cartModal.classList.add('hidden');
        receiptModal.classList.add('hidden');
        dashboardModal.classList.add('hidden');
      }
  
      // Handle Login
      function handleLogin() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const userType = document.getElementById('userType').value;
        
        if (!username || !password) {
          alert('Please enter both username and password');
          return;
        }
        
        // Simulate login - in a real app, this would be an API call
        currentUser = {
          username,
          userType
        };
        
        closeModal();
        saveLoginStatus();
        updateProfileIcon();
        
        // Redirect based on user type
        if (userType === 'customer') {
          // Just close the modal - customer stays on the shop page
        } else if (userType === 'cashier' || userType === 'admin') {
          // Show dashboard
          showDashboard(userType);
        }
      }
  
      // Handle Register with JS validation
      function handleRegister() {
        const fullName = document.getElementById('fullName').value;
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        const whatsapp = document.getElementById('whatsapp').value;
        
        // Reset error messages
        document.getElementById('fullNameError').classList.add('hidden');
        document.getElementById('usernameError').classList.add('hidden');
        document.getElementById('passwordError').classList.add('hidden');
        document.getElementById('whatsappError').classList.add('hidden');
        
        let hasError = false;
        
        // Validate full name (proper case, only a-z and spaces)
        if (!fullName || !/^[A-Za-z\s]+$/.test(fullName)) {
          document.getElementById('fullNameError').classList.remove('hidden');
          hasError = true;
        }
        
        // Validate username (only a-z, 0-9, no spaces)
        if (!username || !/^[a-z0-9]+$/.test(username)) {
          document.getElementById('usernameError').classList.remove('hidden');
          hasError = true;
        }
        
        // Validate password (6-20 chars, at least one uppercase, one lowercase, one number)
        if (!password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/.test(password)) {
          document.getElementById('passwordError').classList.remove('hidden');
          hasError = true;
        }
        
        // Validate WhatsApp (start with 628, 11-14 digits)
        if (!whatsapp || !/^628\d{8,11}$/.test(whatsapp)) {
          document.getElementById('whatsappError').classList.remove('hidden');
          hasError = true;
        }
        
        if (hasError) {
          return;
        }
        
        // Simulate successful registration - in a real app, this would be an API call
        currentUser = {
          fullName,
          username,
          whatsapp,
          userType: 'customer'
        };
        
        closeModal();
        saveLoginStatus();
        updateProfileIcon();
        alert('Registration successful! You are now logged in.');
      }
  
      // Handle Google Sign In
      function handleGoogleSignIn() {
        // Simulate Google Sign In - in a real app, this would use the Google OAuth API
        currentUser = {
          fullName: 'Google User',
          username: 'googleuser',
          userType: 'customer'
        };
        
        closeModal();
        saveLoginStatus();
        updateProfileIcon();
        alert('You are now signed in with Google!');
      }
  
      // Show Dashboard
      function showDashboard(userType) {
        dashboardModal.classList.remove('hidden');
        document.getElementById('dashboardUserType').textContent = userType.charAt(0).toUpperCase() + userType.slice(1);
        showDashboardSection('overview');
      }
  
      // Show Dashboard Section
      function showDashboardSection(section) {
        // Hide all sections
        document.querySelectorAll('.dashboard-section').forEach(el => {
          el.classList.add('hidden');
        });
        
        // Show selected section
        document.getElementById(`dashboard${section.charAt(0).toUpperCase() + section.slice(1)}`).classList.remove('hidden');
        
        // Update title
        document.getElementById('dashboardTitle').textContent = `Dashboard ${section.charAt(0).toUpperCase() + section.slice(1)}`;
      }
  
      // Handle Logout
      function handleLogout() {
        currentUser = null;
        closeModal();
        saveLoginStatus();
        updateProfileIcon();
        alert('You have been logged out.');
      }
  
      // Show Cart Modal
      function showCartModal() {
        renderCart();
        cartModal.classList.remove('hidden');
      }
  
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
  
      // Handle Checkout
      function handleCheckout() {
        if (cart.length === 0) {
          alert('Keranjang Anda kosong. Silakan tambahkan produk sebelum checkout.');
          return;
        }
      
        if (!currentUser) {
          alert('Silakan login untuk melanjutkan checkout.');
          closeModal();
          showAuthModal();
          return;
        }
      
        // Tampilkan modal struk
        renderReceipt();
        cartModal.classList.add('hidden');
        receiptModal.classList.remove('hidden');
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
  
      // Print Receipt Handler
      function printReceiptHandler() {
        alert('Receipt sent to printer!');
        closeModal();
      }
  
      // Load Products
      async function loadProducts() {
        loadingProducts.classList.remove('hidden');
        productsGrid.classList.add('hidden');
        
        try {
          products = await fetchProducts();
          // Konversi harga dari dolar ke rupiah
          products = products.map(product => {
            const conversionRate = 16000; // Asumsi 1 USD = 16,000 IDR
            return {
              ...product,
              price: product.price * conversionRate
            };
          });
          renderProducts(products);
        } catch (error) {
          console.error('Error loading products:', error);
          productsGrid.innerHTML = '<p class="text-center text-red-500 py-6">Error loading products. Please try again later.</p>';
        } finally {
          loadingProducts.classList.add('hidden');
          productsGrid.classList.remove('hidden');
        }
      }
  
      // Render Products
      function renderProducts(productsToRender) {
        productsGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
          productsGrid.innerHTML = '<p class="text-center text-gray-500 py-6 col-span-full">Produk tidak ditemukan</p>';
          return;
        }
        
        productsToRender.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1';
          
          const cartItem = cart.find(item => item.id === product.id);
          const isInCart = !!cartItem;
          const isOutOfStock = product.stock === 0;
          
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain p-4">
            <div class="p-4">
              <h3 class="font-bold text-gray-800 mb-2 truncate">${product.name}</h3>
              <div class="flex justify-between items-center mb-2">
                <span class="text-amber-900 font-bold">Rp${product.price.toLocaleString('id-ID')}</span>
                <span class="text-sm text-gray-600">${product.stock} stok</span>
              </div>
              <div class="flex items-center mb-2">
                <span class="text-xs text-gray-500 mr-2">Material:</span>
                <span class="text-xs font-medium bg-gray-100 px-2 py-1 rounded">${product.material}</span>
              </div>
              <button 
                class="w-full py-2 rounded font-medium ${isOutOfStock ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : isInCart ? 'bg-green-600 text-black' : 'bg-amber-900 text-black hover:bg-amber-800'}"
                data-id="${product.id}"
                ${isOutOfStock ? 'disabled' : ''}
              >
                ${isOutOfStock ? 'Habis' : isInCart ? 'Di Keranjang' : 'Tambah ke Keranjang'}
              </button>
            </div>
          `;
          
          productsGrid.appendChild(productCard);
          
          // Add event listener to add to cart button
          if (!isOutOfStock && !isInCart) {
            const addButton = productCard.querySelector('button');
            addButton.addEventListener('click', () => addToCart(product.id));
          }
        });
      }
  
      // Tambahkan fungsi untuk menampilkan notifikasi
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
      
        if (product.stock === 0) {
          showNotification('Maaf, produk ini sudah habis.');
          return;
        }
      
        const cartItem = cart.find(item => item.id === productId);
      
        if (cartItem) {
          if (cartItem.quantity < product.stock) {
            cartItem.quantity++;
          } else {
            showNotification('Maaf, Anda tidak dapat menambahkan lebih banyak item ini.');
            return;
          }
        } else {
          cart.push({
            id: productId,
            quantity: 1
          });
        }
      
        saveCart();
        updateCartCount();
        renderProducts(products); // Perbarui tampilan produk untuk memperbarui tombol
      
        showNotification(`${product.name} telah ditambahkan ke keranjang.`);
      }
  
      // Remove from Cart
      function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartCount();
        renderCart();
        renderProducts(products); // Re-render products to update buttons
      }
  
      // Update Cart Count
      function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
        stickyCartCount.textContent = count;
      }
  
      // Perbarui fungsi saveCart untuk menyimpan keranjang ke localStorage
      function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
  
      // Perbarui fungsi loadCart untuk memuat keranjang dari localStorage
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
  
      // Panggil loadCart saat halaman dimuat untuk sinkronisasi keranjang
      document.addEventListener('DOMContentLoaded', () => {
        loadCart();
        updateCartCount();
        renderCart && renderCart(); // Render keranjang jika fungsi renderCart tersedia
      });
  
      // Handle Search
      function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (!query) {
          renderProducts(products);
          return;
        }
        
        const filteredProducts = products.filter(product => 
          product.name.toLowerCase().includes(query) || 
          product.category.toLowerCase().includes(query) ||
          product.material.toLowerCase().includes(query)
        );
        
        renderProducts(filteredProducts);
      }
  
      // Handle Sort
      function handleSort() {
        const sortValue = sortBy.value;
        let sortedProducts = [...products];
        
        switch(sortValue) {
          case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
            sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
            break;
          // Featured is default, no sorting needed
        }
        
        renderProducts(sortedProducts);
      }
  
      // Filter Products
      function filterProducts() {
        const categoryValue = filterCategory.value;
        
        let filteredProducts = [...products];
        
        if (categoryValue) {
          filteredProducts = filteredProducts.filter(product => 
            product.category.toLowerCase().includes(categoryValue)
          );
        }
        
        renderProducts(filteredProducts);
      }

      // Tambahkan fungsi untuk menyimpan status login ke dalam cookie
      function saveLoginStatus() {
        if (currentUser) {
          Cookies.set('isLoggedIn', true, { expires: 7 });
          Cookies.set('currentUser', JSON.stringify(currentUser), { expires: 7 });
        } else {
          Cookies.remove('isLoggedIn');
          Cookies.remove('currentUser');
        }
      }
      
      // Tambahkan fungsi untuk memuat status login dari cookie
      function loadLoginStatus() {
        const isLoggedIn = Cookies.get('isLoggedIn');
        const savedUser = Cookies.get('currentUser');
      
        if (isLoggedIn && savedUser) {
          try {
            currentUser = JSON.parse(savedUser);
            // Tampilkan dashboard atau status login sesuai user
            if (currentUser.userType === 'customer') {
              // Tetap di halaman utama
            } else {
              showDashboard(currentUser.userType);
            }
          } catch (error) {
            console.error('Error parsing user data from cookie:', error);
            currentUser = null;
          }
        }
      }
      
      // Perbarui fungsi updateProfileIcon untuk menyembunyikan tombol login jika user sudah login
      function updateProfileIcon() {
        const profileIcon = document.querySelector('.btn-circle.avatar i');
        const loginMenuItem = document.getElementById('loginMenuButton').parentElement;
      
        if (currentUser) {
          const firstLetter = currentUser.username.charAt(0).toUpperCase();
          profileIcon.className = ''; // Hapus semua kelas ikon sebelumnya
          profileIcon.textContent = firstLetter; // Tampilkan huruf pertama username
          profileIcon.style.fontSize = '1.5rem'; // Sesuaikan ukuran huruf
          profileIcon.style.fontWeight = 'bold'; // Tambahkan gaya tebal
      
          // Sembunyikan tombol login
          loginMenuItem.style.display = 'none';
        } else {
          profileIcon.className = 'fas fa-user text-xl'; // Kembalikan ke ikon default
          profileIcon.textContent = ''; // Hapus teks
      
          // Tampilkan tombol login
          loginMenuItem.style.display = 'block';
        }
      }
      
      // Panggil updateProfileIcon setiap kali status login berubah
      function updateUser() {
        saveLoginStatus();
        saveAllData();
        updateProfileIcon();
      }
      
      // Panggil updateProfileIcon saat halaman dimuat
      document.addEventListener('DOMContentLoaded', () => {
        loadLoginStatus();
        updateProfileIcon();
      });

      // Tambahkan tombol login di menu dropdown profil
      const profileDropdown = document.querySelector('.menu');
      const loginMenuItem = document.createElement('li');
      loginMenuItem.innerHTML = '<a id="loginMenuButton">Login</a>';
      profileDropdown.insertBefore(loginMenuItem, profileDropdown.firstChild);
      
      // Tambahkan event listener untuk tombol login
      const loginMenuButton = document.getElementById('loginMenuButton');
      loginMenuButton.addEventListener('click', () => {
        authModal.classList.remove('hidden');
        loginTab.classList.remove('hidden');
        registerTab.classList.add('hidden');
      });

      // Mengubah semua teks di halaman menjadi bahasa Indonesia
      const translations = {
        "HOME": "BERANDA",
        "Produk": "Produk",
        "Kontak": "Kontak",
        "Tentang": "Tentang",
        "Profil": "Profil",
        "Pengaturan": "Pengaturan",
        "Keluar": "Keluar",
        "Login": "Masuk",
        "Register": "Daftar",
        "Sign In": "Masuk",
        "Sign in with Google": "Masuk dengan Google",
        "Don't have an account? Register": "Belum punya akun? Daftar",
        "Already have an account? Login": "Sudah punya akun? Masuk",
        "Your Cart": "Keranjang Anda",
        "Checkout": "Bayar",
        "Receipt": "Struk",
        "Thank you for shopping with us!": "Terima kasih telah berbelanja dengan kami!",
        "Please return with your receipt for any exchanges.": "Silakan kembali dengan struk Anda untuk penukaran.",
        "or": "atau",
        "Full Name": "Nama Lengkap",
        "Username": "Nama Pengguna",
        "Password": "Kata Sandi",
        "WhatsApp Number": "Nomor WhatsApp",
        "Login as": "Masuk sebagai",
        "Customer": "Pelanggan",
        "Cashier": "Kasir",
        "Admin": "Admin",
        "Featured Products": "Produk Unggulan",
        "Sort by": "Urutkan berdasarkan",
        "Category": "Kategori",
        "Price: Low to High": "Harga: Rendah ke Tinggi",
        "Price: High to Low": "Harga: Tinggi ke Rendah",
        "Newest First": "Terbaru",
        "Filter by": "Filter berdasarkan",
        "Total": "Total",
        "Subtotal": "Subtotal",
        "Tax (10%)": "Pajak (10%)",
        "TOTAL": "TOTAL",
        "SHOP NOW": "BELANJA SEKARANG",
        "BUILT TO LAST": "DIBUAT UNTUK TAHAN LAMA",
        "Premium workwear for those who value quality, durability, and comfort.": "Pakaian kerja premium untuk mereka yang menghargai kualitas, daya tahan, dan kenyamanan.",
        "Privacy Policy": "Kebijakan Privasi",
        "Terms of Service": "Syarat Layanan",
        "Accessibility": "Aksesibilitas",
        "Customer Service": "Layanan Pelanggan",
        "Track Order": "Lacak Pesanan",
        "Returns & Exchanges": "Pengembalian & Penukaran",
        "Shipping": "Pengiriman",
        "Contact Us": "Hubungi Kami",
        "Our Story": "Kisah Kami",
        "Careers": "Karir",
        "Sustainability": "Keberlanjutan",
        "Press": "Pers",
        "Store Locator": "Lokasi Toko"
      };

      // Fungsi untuk menerapkan terjemahan
      function applyTranslations() {
        document.querySelectorAll('*').forEach(element => {
          if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const text = element.textContent.trim();
            if (translations[text]) {
              element.textContent = translations[text];
            }
          }
        });
      }

      // Panggil fungsi terjemahan saat halaman dimuat
      document.addEventListener('DOMContentLoaded', applyTranslations);

      // Tambahkan event listener untuk tombol Beranda
      document.querySelector('.btn-ghost[href="#"]').addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Reset filter dan pencarian
        searchInput.value = '';
        filterCategory.value = '';
        sortBy.value = 'featured';

        // Tampilkan semua produk
        renderProducts(products);
      });

      // Tambahkan event listener untuk tombol Produk
      document.querySelector('.btn-ghost[href="#produk"]').addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Alihkan ke halaman produk
        window.location.href = 'produk.html';
      });