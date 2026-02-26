const productContainer = document.querySelector(".product_list_container");

// Læs URL-parameteren ?season=Fall
const params = new URLSearchParams(window.location.search);
const season = params.get("season");

console.log(season); // tjek at den rigtige sæson hentes

// Hent produkter fra API baseret på sæson
fetch(`https://kea-alt-del.dk/t7/api/products?season=${season}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
        const rabatBadge = product.discount ? `<span class="rabat-badge">-${product.discount}%</span>` : "";
        const udsolgt = product.soldout === 1 ? `<span class="udsolgt">Udsolgt</span>` : "";
      
        productContainer.innerHTML += `
          <a href="produkt.html?id=${product.id}" class="produkt-card">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
            <h2 class="produkt-card-navn">${product.productdisplayname}</h2>
            <p class="produkt-card-pris">${product.price}</p>
            ${rabatBadge}
            ${udsolgt}
            <span class="produkt-card-link">Read More</span>
          </a>`;
      });
  });

  