(function () {

    const NAV_LINKS = [
        { label: 'Categories',   href: 'index.html'                      },
        { label: 'Product list', href: 'produktliste.html?season=Fall'   },
      ];
  
    const currentPage = window.location.pathname
      .split('/')
      .pop()
      || 'index.html';
  
    const linksHTML = NAV_LINKS.map(link => {
      const isActive = currentPage === link.href;
      return `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
    }).join('');
  
    const headerHTML = `
      <header class="site-header">
        <a href="index.html" class="logo">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="11,1 20.5,6 20.5,16 11,21 1.5,16 1.5,6" stroke="#c8472a" stroke-width="1.5" fill="none"/>
            <polygon points="11,5 17,8.5 17,13.5 11,17 5,13.5 5,8.5" fill="#c8472a"/>
          </svg>
          <span>OnlineShop</span>
        </a>
        <nav class="site-nav">
          ${linksHTML}
        </nav>
      </header>
    `;
  
    document.addEventListener('DOMContentLoaded', () => {
      const existing = document.querySelector('header.site-header');
      if (existing) existing.remove();
      document.body.insertAdjacentHTML('afterbegin', headerHTML);
    });
  
  })();