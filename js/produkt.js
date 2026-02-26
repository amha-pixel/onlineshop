const produktContainer = document.querySelector(".produkt-container");

// Læs ?id= fra URL'en
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Hent produktet fra API
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);

    const rabatBadge = product.discount ? `<span class="rabat-badge">-${product.discount}%</span>` : "";
    const originalPris = product.discount ? `<span class="produkt-pris-original">DKK ${Math.round(product.price / (1 - product.discount / 100))},-</span>` : "";
    const udsolgtBanner = product.soldout === 1 ? `<span class="udsolgt-banner">Sold out</span>` : "";
    const koebKnap = product.soldout === 1 ? `<button class="koeb-knap" disabled>Add to basket</button>` : `<button class="koeb-knap">Add to basket</button>`;

    produktContainer.innerHTML = `
      <div class="produkt-billede-wrapper">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
        ${udsolgtBanner}
      </div>

      <div class="produkt-info">
        <p class="produkt-brand">${product.brandname}</p>
        <h1 class="produkt-navn">${product.productdisplayname}</h1>
        <p class="produkt-type">${product.subcategory} · ${product.articletype}</p>

        <hr class="divider">

        <div class="produkt-pris-wrapper">
          ${originalPris}
          <span class="produkt-pris">DKK ${product.price},-</span>
          ${rabatBadge}
        </div>

        <hr class="divider">

        <div class="produkt-detaljer">
          <div class="detalje-række">
            <span class="detalje-label">Colour</span>
            <span class="detalje-value">${product.basecolour}</span>
          </div>
          <div class="detalje-række">
            <span class="detalje-label">Age group</span>
            <span class="detalje-value">${product.agegroup}</span>
          </div>
          <div class="detalje-række">
            <span class="detalje-label">Usage</span>
            <span class="detalje-value">${product.usagetype}</span>
          </div>
          <div class="detalje-række">
            <span class="detalje-label">Production year</span>
            <span class="detalje-value">${product.productionyear}</span>
          </div>
          <div class="detalje-række">
            <span class="detalje-label">Item number</span>
            <span class="detalje-value">${product.id}</span>
          </div>
        </div>

        <hr class="divider">

        <h3>Description</h3>
        <div class="produkt-beskrivelse">${product.description}</div>

        <hr class="divider">

        ${koebKnap}

        <a href="produktliste.html?season=${product.season}" class="tilbage-link">← Back to products</a>
      </div>
    `;
  });