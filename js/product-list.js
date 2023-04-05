// Make all products list
class ProductList {
  constructor() {
    this.container = document.querySelector(".products-container") || null;
    this.recommended = document.querySelector(".products-recommended") || null;
    this.productsService = new ProductsService();
    this.renderProducts();
  }

  // Render products
  async renderProducts() {
    let productListDomString = "";
    const products = await this.productsService.getProducts();
    if (this.container !== null) {
      products.forEach((product) => {
        productListDomString += this.createProductDomString(product);
      });
      this.container.innerHTML = productListDomString;
    } else if (this.recommended !== null) {
      const recommendedProducts = this.selectRandomProducts(products);
      recommendedProducts.forEach((product) => {
        productListDomString += this.createProductDomString(product);
      });
      this.recommended.innerHTML = productListDomString;
    }
    this.addEventListeners();
  }

  //Function that take 4 random products
  selectRandomProducts(products) {
    const selectedProducts = [];
    // Loop through the array and randomly select 4 products
    while (selectedProducts.length < 4) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const randomProduct = products[randomIndex];
      // Check if the selected product is already in the selectedProducts array
      if (!selectedProducts.includes(randomProduct)) {
        selectedProducts.push(randomProduct);
      }
    }
    return selectedProducts;
  }

  // Create product card
  createProductDomString(product) {
    return `<article class="card col-12 col-sm-6 col-md-4 col-lg-3 bg-dark text-light">
                    <img src="img/${product.image}" class="rounded card-img-top m-1" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <a href="#" id="btn-info" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#product-info-modal" data-id="${product.id}">Info</a>
                        <a href="#" id="btn-buy" class="btn btn-warning btn-buy" data-id="${product.id}"> $${product.price} Buy</a>
                    </div>
                </article>`;
  }

  // Add listeners
  async addEventListeners() {
    document.querySelectorAll("#btn-info").forEach((btn) => {
      btn.addEventListener("click", this.showProductInfo.bind(this));
    });
    document.querySelectorAll("#btn-buy").forEach((btn) => {
      btn.addEventListener("click", this.addProductToCart.bind(this));
    });
  }

  // Create modal window for product
  async showProductInfo(event) {
    const id = event.target.dataset.id;
    const modal = document.querySelector("#modal-section");
    const product = await this.productsService.getProductById(id);

    modal.innerHTML = `
        <div class="modal-header">
              <h5 class="modal-title" id="product-info-modalLabel">${product.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <img class="d-block w-50 mx-auto product-image" src="img/${product.image}"
                  alt="${product.title}">
              <p class="product-description">${product.description}</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button id="btn-buy-modal" type="button" class="btn btn-warning btn-buy" data-bs-dismiss="modal"
                  data-id="${product.id}">$${product.price} Buy</button>
        </div>
    `;
    document.querySelectorAll("#btn-buy-modal").forEach((btn) => {
      btn.addEventListener("click", this.addProductToCart.bind(this));
    });
  }

  // Function for add product to cart
  addProductToCart(event) {
    const id = event.target.dataset.id;
    const cart = new Cart();
    cart.updateCart();
    cart.addProduct(id);
    window.showAlert("Thanks! Go to cart and make order.");
  }
}

new ProductList();
