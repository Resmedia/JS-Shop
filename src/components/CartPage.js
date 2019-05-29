Vue.component('cart-page', {
  data() {
    return {
      mainPath: this.$root.$refs.shopHeader.$refs,
      countries: [
        { id: 1, name: 'USA' },
        { id: 2, name: 'Russia' },
        { id: 3, name: 'France' },
        { id: 4, name: 'Greece' },
        { id: 5, name: 'Japan' },
      ],
      state: [
        { id: 0, name: "Saint-Petersburg"},
        { id: 2, name: "Moscow"},
        { id: 3, name: "Ekaterinburg"},
      ]
    };
  },
  template: `
   <div class="cart-page">
       <div class="cart-list">
          <div class="cart-list__column">
              <div class="column__name">
                  Product Details
              </div>
              <cart-info
                 v-for="item of mainPath.cart.cartItems"
                 :key="item.id"
                 :cart-info="item"
               >
               </cart-info>
          </div>
       
          <div class="cart-list__column">
              <div class="column__name">
                  unite Price
              </div>
              <cart-price
                 v-for="item of mainPath.cart.cartItems"
                 :key="item.id"
                 :cart-price="item.price"
               >
               </cart-price>
          </div>
          
          <div class="cart-list__column">
              <div class="column__name">
                  Quantity
              </div>
              <cart-quantity
                 v-for="item of mainPath.cart.cartItems"
                 :key="item.id"
                 :cart-quantity="item.quantity"
                 @input="item.quantity = $event > 1 ? $event : 1"
               >
               </cart-quantity>
          </div>
          
          <div class="cart-list__column">
              <div class="column__name">
                  shipping
              </div>
              <cart-shipping
                 v-for="item of mainPath.cart.cartItems"
                 :key="item.id"
                 :cart-sipping="item"
               >
               </cart-shipping>
          </div>
          
          <div class="cart-list__column">
              <div class="column__name">
                  Subtotal
              </div>
              <cart-total
                 v-for="item of mainPath.cart.cartItems"
                 :key="item.id"
                 :cart-total="item"
               >
               </cart-total>
          </div>
          
          <div class="cart-list__column">
              <div class="column__name">
                  ACTION
              </div>
              <cart-action
                  v-for="item of mainPath.cart.cartItems"
                  :key="item.id"
                  :cart-action="item"
                  @remove="mainPath.cart.remove"
              >
              </cart-action>
          </div>
      </div>
      <div class="cart-block__empty" v-if="!mainPath.cart.cartItems.length">
              Cart is empty
          </div>
      <div class="cart-buttons">
            <button
                 @click="mainPath.cart.clearCart()"
                 class="button button-default"
                 v-bind:class="{'disabled': !mainPath.cart.cartItems.length }"
                 v-bind:disabled="!mainPath.cart.cartItems.length">
                CLEAR SHOPPING CART
            </button>
            <a href="products.html" class="button button-default">
                CONTINUE SHOPPING
            </a>
        </div>
        <div class="cart-order row-15">
            <div class="col-md-4">
                <form class="cart-order__item">
                    <div class="cart-order__name">
                        Shipping Adress
                    </div>

                    <div class="select">
                        <select-element
                           ref="selectElement"
                           name="Country"
                           v-bind:options="countries"
                        ></select-element>
                    </div>
                    <div class="select">
                        <select-element
                           ref="selectElement"
                           name="State"
                           v-bind:options="state"
                        ></select-element>
                    </div>
                    <input class="form-control" type="number" required placeholder="Postcode / Zip" >
                    <button type="submit" class="button button-default button-quote">
                        get a quote
                    </button>
                </form>
            </div>
            <div class="col-md-4">
                <form class="cart-order__item">
                    <div class="cart-order__name">
                        coupon discount
                    </div>
                    <div class="cart-order__info-text">
                        Enter your coupon code if you have one
                    </div>
                    <input class="form-control" required placeholder="Coupon code" >
                    <button type="submit" class="button button-default button-quote">
                        Apply coupon
                    </button>
                </form>
            </div>
            <div class="col-md-4">
                <div class="cart-order__item cart-order__total">
                    <div class="cart-order__sub">
                        <span class="sub__text">Sub total</span> $ {{mainPath.cart.calcSum}} 
                    </div>
                    <div class="cart-order__grand">
                        <span class="grand__text">GRAND TOTAL</span> <span class="text-rose">$ {{mainPath.cart.calcSum}} </span>
                    </div>
                    <hr />
                    <a href="checkout.html" class="button button-rose">
                        proceed to checkout
                    </a>
                </div>
            </div>
        </div>
  </div>
  `,
});
Vue.component('cart-info', {
  props: ['cartInfo'],
  template: `
   <div class="column__item">
      <img :src="cartInfo.img" :alt="cartInfo.name" class="cart-list__image">
      <div class="cart-list__info">
          <a href="view.html" class="info__name">
              {{cartInfo.name}} / {{cartInfo.brand || cartInfo.designer}}
          </a>
          <div class="info__color">
              <b>Color:</b>   {{cartInfo.color}}
          </div>
          <div class="info__size">
              <b>Size:</b>   Xll
          </div>
      </div>
   </div>
   `,
});
Vue.component('cart-price', {
  props: ['cartPrice'],
  template: `
   <div class="column__item">
      $ {{cartPrice}}
   </div>
   `,
});
Vue.component('cart-quantity', {
  props: ['cartQuantity'],
  template: `
   <div class="column__item">
      <input
         min="1"
         class="form-control"
         type="number"
         v-bind:value="cartQuantity"
         v-on:input="$emit('input', $event.target.value)"
      >
   </div>
   `,
});
Vue.component('cart-shipping', {
  props: ['cartShipping'],
  template: `
   <div class="column__item">
      FREE
   </div>
   `,
});
Vue.component('cart-total', {
  props: ['cartTotal'],
  template: `
   <div class="column__item">
      $ {{ cartTotal.quantity*cartTotal.price }}
   </div>
   `,
});
Vue.component('cart-action', {
  props: ['cartAction'],
  template: `
   <div class="column__item">
      <i @click="$emit('remove', cartAction)" class="icon-times-circle text-gray"></i>
   </div>
   `,
});
