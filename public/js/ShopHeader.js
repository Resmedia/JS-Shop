Vue.component('shop-header', {
   data(){
      return {
        showMenu: false,
      }
   },
   template: `
   <header class="header">
        <div class="container header__content">
            <div class="header__left brand">
                <img class="logo" src="./images/logo.svg" alt="logo"/>
                <div class="main-name">
                    <a class="#" href="./" title="Main Page">
                        BRAN<span class="text-rose">D</span>
                    </a>
                </div>
                <filter-el></filter-el>
            </div>
            <div class="header__right">
                <cart ref="cart"></cart>
                <div class="dropdown">
                    <button @click="showMenu = !showMenu" class="button button-rose">
                        My Account <i class="arrow-down arrow-white"></i>
                    </button>
                    <ul v-show="showMenu" class="dropdown__menu">
                        <li>
                            <a href="#" class="dropdown__menu-item">
                                My cabinet
                            </a>
                        </li>
                        <li>
                            <a href="#" class="dropdown__menu-item">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  `,
});
