const categoryContainer = document.querySelector(".category_list_container");
console.log(categoryContainer);

fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((seasons) => {
      categoryContainer.innerHTML += `<a href="produktliste.html?season=${seasons.season}" class="kategori-card" data-field="seasons">${seasons.season}</a>`;
    });
  });
