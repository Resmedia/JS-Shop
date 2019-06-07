import {Cart} from './Cart.js';
import {FilterEl} from './Filter.js';
export const ShopHeader = {
	data() {
		return {
			showMenu: false,
			scrollEvent: false
		};
	},
	components: {
		'filter-el': FilterEl,
		'cart': Cart,
	},
	mounted() {
		document.addEventListener("scroll", this.handleScroll);
	},
	beforeDestroy() {
		document.removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			this.scrollEvent = window.scrollY > 150;
		}
	},
	template: `
   <header class="header" v-bind:class="{ fixed: scrollEvent }">
      <div class="header__wrap">
          <div class="container header__content">
          <div class="header__left">
              <a href="/" title="Main Page" class="brand">
                  <img class="logo" src="./images/logo.svg" alt="logo"/>
                  <div class="main-name">
                     BRAN<span class="text-rose">D</span>
                  </div>
              </a>
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
      </div>
    </header>
  `
};
