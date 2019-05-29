Vue.component('shop-menu', {
   template: `
   <nav class="nav container">
      <ul>
          <li>
              <a href="/" class="nav__link">
                  Home
              </a>
          </li>
          <li>
              <div class="nav__link">
                  Man
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Man
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                              <li><a href="/products.html" class="drop-section__link">Blazers</a></li>
                              <li><a href="/products.html" class="drop-section__link">Denim</a></li>
                              <li><a href="/products.html" class="drop-section__link">Leggings/Pants</a></li>
                              <li><a href="/products.html" class="drop-section__link">Skirts/Shorts</a></li>
                              <li><a href="/products.html" class="drop-section__link">Accessories </a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Man
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <h3 class="drop-section__name">
                              Man
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Man
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <a href="/view.html" class="drop-section__sale">
                              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                              <div class="drop-section__sale-text">
                                  Super sale!
                              </div>
                          </a>
                      </div>
                  </nav>
              </div>
          </li>
          <li>
              <div class="nav__link">
                  Women
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Women
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                              <li><a href="/products.html" class="drop-section__link">Blazers</a></li>
                              <li><a href="/products.html" class="drop-section__link">Denim</a></li>
                              <li><a href="/products.html" class="drop-section__link">Leggings/Pants</a></li>
                              <li><a href="/products.html" class="drop-section__link">Skirts/Shorts</a></li>
                              <li><a href="/products.html" class="drop-section__link">Accessories </a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Women
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <h3 class="drop-section__name">
                              Women
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Women
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <a href="/view.html" class="drop-section__sale">
                              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                              <div class="drop-section__sale-text">
                                  Super sale!
                              </div>
                          </a>
                      </div>
                  </nav>
              </div>
          </li>
          <li>
              <div class="nav__link">
                  Kids
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Kids
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                              <li><a href="/products.html" class="drop-section__link">Blazers</a></li>
                              <li><a href="/products.html" class="drop-section__link">Denim</a></li>
                              <li><a href="/products.html" class="drop-section__link">Leggings/Pants</a></li>
                              <li><a href="/products.html" class="drop-section__link">Skirts/Shorts</a></li>
                              <li><a href="/products.html" class="drop-section__link">Accessories </a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Kids
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <h3 class="drop-section__name">
                              Kids
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Kids
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <a href="/view.html" class="drop-section__sale">
                              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                              <div class="drop-section__sale-text">
                                  Super sale!
                              </div>
                          </a>
                      </div>
                  </nav>
              </div>
          </li>
          <li>
              <div class="nav__link">
                  Accoseriese
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Accoseriese
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                              <li><a href="/products.html" class="drop-section__link">Blazers</a></li>
                              <li><a href="/products.html" class="drop-section__link">Denim</a></li>
                              <li><a href="/products.html" class="drop-section__link">Leggings/Pants</a></li>
                              <li><a href="/products.html" class="drop-section__link">Skirts/Shorts</a></li>
                              <li><a href="/products.html" class="drop-section__link">Accessories </a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Accoseriese
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <h3 class="drop-section__name">
                              Accoseriese
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Accoseriese
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <a href="/view.html" class="drop-section__sale">
                              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                              <div class="drop-section__sale-text">
                                  Super sale!
                              </div>
                          </a>
                      </div>
                  </nav>
              </div>
          </li>
          <li>
              <div class="nav__link">
                  Featured
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Featured
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                              <li><a href="/products.html" class="drop-section__link">Blazers</a></li>
                              <li><a href="/products.html" class="drop-section__link">Denim</a></li>
                              <li><a href="/products.html" class="drop-section__link">Leggings/Pants</a></li>
                              <li><a href="/products.html" class="drop-section__link">Skirts/Shorts</a></li>
                              <li><a href="/products.html" class="drop-section__link">Accessories </a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Featured
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <h3 class="drop-section__name">
                              Featured
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Featured
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <a href="/view.html" class="drop-section__sale">
                              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                              <div class="drop-section__sale-text">
                                  Super sale!
                              </div>
                          </a>
                      </div>
                  </nav>
              </div>
          </li>
          <li>
              <div class="nav__link">
                  Hot Deals
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Hot Deals
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                              <li><a href="/products.html" class="drop-section__link">Blazers</a></li>
                              <li><a href="/products.html" class="drop-section__link">Denim</a></li>
                              <li><a href="/products.html" class="drop-section__link">Leggings/Pants</a></li>
                              <li><a href="/products.html" class="drop-section__link">Skirts/Shorts</a></li>
                              <li><a href="/products.html" class="drop-section__link">Accessories </a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Hot Deals
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <h3 class="drop-section__name">
                              Hot Deals
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                          </ul>
                      </div>
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Hot Deals
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link">Dresses</a></li>
                              <li><a href="/products.html" class="drop-section__link">Tops</a></li>
                              <li><a href="/products.html" class="drop-section__link">Sweaters/Knits</a></li>
                              <li><a href="/products.html" class="drop-section__link">Jackets/Coats</a></li>
                          </ul>
                          <a href="/view.html" class="drop-section__sale">
                              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                              <div class="drop-section__sale-text">
                                  Super sale!
                              </div>
                          </a>
                      </div>
                  </nav>
              </div>
          </li>
      </ul>
  </nav>
  `,
});
