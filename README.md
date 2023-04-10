# Vanilla JS Online Store

This is a simple online store built with vanilla JavaScript, HTML, CSS and Bootstrap. It includes a homepage with a random list of products, a product modal window, a shopping cart with a checkout form, articles card with modal winow and few banners whith call to action buttons. The project is responsive and works well on both desktop and mobile devices. In general there are 4 pages: Home, Products, About, Contacts.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Dynamic generate products list from server
- Dynamic generate articles list (blog posts) from server
- Modal window for every product and article
- Shopping cart whith checkout form
- Alert for add product to cart or make order
- Navbar created using javascript (`render-navbar.js`) to avoid repeating html code
- Cart modal window created using javascript (`render-modal-cart.js`) to avoid repeating html code
- Contains four pages for all the information you need (`index.html`, `products.html`, `contacts.html`, `about.html`)

### Homepage

The homepage displays a list of four random products with their names, prices, and images. Users can click "Info" button on a product to view its details or "Buy" button to add it to their shopping cart.

There are two banners with call to action button, image, and text.

Also there are dynamicly generate blog posts with title, short details and "More" button that after click open modal window with all text of article or blog post.

### Modal windows

The modal window of product display more information about a selected product, including its name, price, image, and description. Users can also add the product to their shopping cart from this window or close it.

The modal window of article (blog post) display full text of it, have "Close" and call to action buttons.

### Shopping Cart

The shopping cart displays the list of products that the user has added to their cart. Users can update the quantity of each product, remove products from the cart, or proceed to checkout.

### Checkout Form

The checkout form collects the user's contacts such as name, phone, and email. Once the user submits the form, they receive a confirmation email. The admin also receive the email with order information for further processing. Further confirmation of the order by the customer's phone is assumed.

This functionality uses the service ...

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## Installation

To run this project on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/Volodymyr-Branets/vanilla_js_online_store.git`
2. Navigate to the project directory: `cd vanilla_js_online_store`
3. Open `index.html` in your browser.

## Usage

To use the online store, you can:

1. Change list of products or articles (blog posts) in `api` folder.
2. Change in `product-list.js` or `article-list.js` the parameter (url) when create new DataService for using your own server (back end).
3. Make some visual changes using `Bootstrap`.
4. Add your own pages.
5. Change data in `order` method at `cart.js` to your onw.

## Contributing

It is my student project and it don't need any contribution.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
