Vue.component('cart', {
  data() {
    return {
      showCart: false,
      cartUrl: '/api/cart/',
      cartItems: [],
    };
  },
  computed: {
    calcSum() {
      return this.cartItems.reduce((accum, item) => accum += item.price * item.quantity, 0);
    },
    calcQuantity() {
      return this.cartItems.reduce((accum, item) => accum += item.quantity, 0);
    },
  },
  mounted() {
    this.$root.getJson(this.cartUrl).then(data => {
      for (let el of data.contents) {
        this.cartItems.push(el);
      }
    });
  },
  methods: {
    addProduct(product) {
      let find = this.cartItems.find(el => el.id === product.id);
      if (find) {
        this.$root.putJson(this.cartUrl + find.id, { quantity: 1 }).then(data => {
          if (!!data && data.result) {
            find.quantity++;
          }
        });
      } else {
        let prod = Object.assign({ quantity: 1 }, product);
        this.$root.postJson(this.cartUrl, prod).then(data => {
          if (data.result) {
            this.cartItems.push(prod);
          }
        });
      }
    },
    remove(product) {
      let find = this.cartItems.find(el => el.id === product.id);
      if (find && find.quantity > 1) {
        this.$root.putJson(this.cartUrl + find.id, { quantity: -1 }).then(data => {
          if (!!data && data.result) {
            find.quantity--;
          }
        });
      } else {
        this.$root.removeJson(this.cartUrl + find.id, find);
        this.cartItems.splice(this.cartItems.indexOf(product), 1);
      }
    },
    clearCart() {
      this.$root.clearJson(this.$root.removeAll);
      this.cartItems = [];
    },
  },
  template: `
      <div class="basket">
         <div v-if="calcQuantity > 0" class="basket__count">{{ calcQuantity }}</div>
         <img @click="showCart = !showCart"  alt="basket" class="basket" src="/images/basket_bleak.svg"/>
         <div class="basket__drop-menu" v-show="showCart">
            <div class="cart-block">
               <p class="cart-block__empty" v-if="!cartItems.length">
                 Cart is empty
               </p>
               <cart-item 
                   v-for="item of cartItems"
                   :key="item.id"
                   :img="item.img"
                   :cart-item="item"
                   @remove="remove"
                >
                </cart-item>
                <div  v-if="calcSum > 0 && cartItems.length > 0" class="drop-menu__price">
                    TOTAL <span class="price__total">$ {{ calcSum }}</span>
                </div>
                <a class="button button-rose-transparent" href="checkout.html">
                   Checkout
                </a>
                <a class="button button-default" href="cart.html">
                   Go to cart
                </a>
            </div>
         </div>
      </div>
  `,
});
Vue.component('cart-item', {
  props: ['cartItem', 'img'],
  template: `
      <div class="drop-menu__item">
         <a href="./view.html"  class="drop-menu__image">
            <img :alt="cartItem.name" class="basket__image" :src="img">
         </a>
         <div class="drop-menu__info">
             <a href="view.html" class="info__name">
                 {{cartItem.name}}
             </a>
             <div class="info__count-price text-rose">
                 {{ cartItem.quantity }}  x  $ {{ cartItem.price }} = $ {{ cartItem.quantity*cartItem.price }}
             </div>
         </div>
         <div class="drop-menu__remove">
             <i @click="$emit('remove', cartItem)" class="icon-times-circle"></i>
         </div>
      </div>
  `,
});
