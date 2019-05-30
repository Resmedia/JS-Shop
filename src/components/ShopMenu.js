Vue.component("shop-menu", {
  data() {
    return {
      apiMenu: "/api/menu",
      menuSite: []
    };
  },
  mounted() {
    this.$root.getJson(this.apiMenu).then(data => {
      for (let el of data) {
        this.menuSite.push(el);
      }
    });
  },
  template: `
   <nav class="nav container">
      <ul>
          <li>
              <a href="/" class="nav__link">
                  Home
              </a>
          </li>
          <menu-one
             v-for="menu of menuSite"
             :key="menu.id"
             :menu="menu"
          >
          </menu-one>
      </ul>
   </nav>
  `
});

Vue.component("menu-one", {
  props: ["menu"],
  template: `
  <li>
      <div class="nav__link">
             {{menu.name}}
          <nav class="nav__drop-menu">
             <ul>
             <sub-menu
                 v-for="subMenu of menu.data"
                 :key="subMenu.id"
                 :sub-menu="subMenu"
              >
              </sub-menu>
              <a href="/view.html" class="drop-section__sale">
              <img src="/images/sale.jpg" alt="" class="drop-section__sale-image" />
                  <div class="drop-section__sale-text">
                       Super sale!
                   </div>
              </a>
              </ul>
          </nav>
      </div>
  </li>
  `
});

Vue.component("sub-menu", {
  props: ["subMenu"],
  template: `
      <div class="nav__drop-section">
           <h3 class="drop-section__name">
               {{subMenu.section}}
           </h3>
           <ul>
              <last-item
                  v-for="lastItem of subMenu.sectionData"
                 :key="lastItem.id"
                 :last-item="lastItem"
               >
               </last-item>
           </ul>
      </div>
  `
});
Vue.component("last-item", {
  props: ["lastItem"],
  template: `
      <li>
          <a :href="lastItem.url" class="drop-section__link">
              {{lastItem.name}}
          </a>
      </li>
  `
});

/*
* <li>
              <div class="nav__link">
                  Man
                  <nav class="nav__drop-menu">
                      <div class="nav__drop-section">
                          <h3 class="drop-section__name">
                              Man
                          </h3>
                          <ul>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
                              <li><a href="/products.html" class="drop-section__link"></a></li>
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
          </li>*/
