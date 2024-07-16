// Fetch JSON data from the specified URL
fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Process data and create product cards
    let categories = data.categories; // Array of category objects
    let productsDiv = document.getElementById("products"); // Div element to insert product cards
    let tabs = document.getElementById("tabs").children; // Array of tab buttons
    let activeTab = "Men"; // Default active tab (adjusted to match the category name)

    // Loop through the categories array
    for (let category of categories) {
      if (category.category_name === activeTab || category.category_name === "Women" || category.category_name === "Kids") {
        // Loop through the products of the active category
        for (let product of category.category_products) {
          // Create a div element for the product card
          let productCard = document.createElement("div");
          productCard.classList.add("product-card");
          productCard.classList.add(category.category_name.toLowerCase()); // Add the category as a class for filtering

          // Create an img element for the product image
          let productImage = document.createElement("img");
          productImage.classList.add("product-image");
          productImage.src = product.image;

          // Create a span element for the product badge
          let productBadge = document.createElement("span");
          productBadge.classList.add("product-badge");
          if (product.badge_text) {
            productBadge.textContent = product.badge_text;
          }

          // Create a div element for the product info
          let productInfo = document.createElement("div");
          productInfo.classList.add("product-info");

          // Create a p element for the product title
          let productTitle = document.createElement("p");
          productTitle.classList.add("product-title");
          productTitle.textContent = product.title;

          // Create a p element for the product vendor
          let productVendor = document.createElement("p");
          productVendor.classList.add("product-vendor");
          productVendor.textContent = product.vendor;

          // Create a span element for the product price
          let productPrice = document.createElement("span");
          productPrice.classList.add("product-price");
          productPrice.textContent = "Rs " + product.price;

          // Create a span element for the product compare at price
          let productCompare = document.createElement("span");
          productCompare.classList.add("product-compare");
          productCompare.textContent = "Rs " + product.compare_at_price;

          // Calculate the product discount in percentage
          let productDiscount = ((product.compare_at_price - product.price) / product.compare_at_price) * 100;

          // Create a span element for the product discount
          let productDiscountSpan = document.createElement("span");
          productDiscountSpan.classList.add("product-discount");
          productDiscountSpan.textContent = productDiscount.toFixed(0) + "% off";

          // Create a button element for the product add to cart
          let productButton = document.createElement("button");
          productButton.classList.add("product-button");
          productButton.textContent = "Add to Cart";

          // Append the elements to the product card
          productCard.appendChild(productImage);
          if (product.badge_text) {
            productCard.appendChild(productBadge);
          }
          productInfo.appendChild(productTitle);
          productInfo.appendChild(productVendor);
          productInfo.appendChild(productPrice);
          productInfo.appendChild(productCompare);
          productInfo.appendChild(productDiscountSpan);
          productCard.appendChild(productInfo);
          productCard.appendChild(productButton);

          // Append the product card to the products div
          productsDiv.appendChild(productCard);
        }
      }
    }

    // Show only the products of the active tab
    showCategory(activeTab);
  });

// Function to show products based on the selected category
function showCategory(category) {
  // Show product cards based on the selected category
  let productCards = document.getElementsByClassName("product-card"); // Array of product card elements
  let tabs = document.getElementById("tabs").children; // Array of tab buttons
  activeTab = category; // Update the active tab

  // Loop through the product cards and hide or show them based on the category
  for (let productCard of productCards) {
    if (productCard.classList.contains(category.toLowerCase())) {
      productCard.style.display = "block"; // Show the product card
    } else {
      productCard.style.display = "none"; // Hide the product card
    }
  }

  // Loop through the tabs and highlight or unhighlight them based on the category
  for (let tab of tabs) {
    if (tab.textContent.toLowerCase() === category.toLowerCase()) {
      tab.classList.add("active"); // Highlight the tab
    } else {
      tab.classList.remove("active"); // Unhighlight the tab
    }
  }
}
