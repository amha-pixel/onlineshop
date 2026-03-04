const categoryContainer = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((seasons) => {
      categoryContainer.innerHTML += `
        <li>
          <a href="produktliste.html?season=${seasons.season}" class="category-card">
            <div class="card-inner">
              <div class="card-season">${seasons.season}</div>
              <div class="card-bottom">
                <span class="card-count">View collection</span>
                <div>
                  <div class="card-link">Shop now</div>
                  <div class="card-link-line"></div>
                </div>
              </div>
            </div>
          </a>
        </li>`;
    });
  });