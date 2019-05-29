Vue.component('similar-items', {
  data() {
    return {
      apiProducts: '/api/products',
      products: [],
    };
  },
  mounted() {
    this.$root.getJson(this.apiProducts)
    .then(data => {
      for (let el of data) {
        if(el.similar){
          this.products.push(el);
        }
      }
    });
  },
  template: `
     <div class="container">
        <div class="featured-name">
            you may like also
        </div>
        <div class="row-15 featured ">
             <product
                v-for="product of products"
                :key="product.id"
                :product="product"
             >
             </product>
        </div>
     </div>
  `,
});

Vue.component('product', {
  props: ['product'],
  template: `
      <div class="col-md-3"> 
          <div class="featured__item">
              <div class="image-wrapper">
                  <div class="featured__buttons">
                      <button  @click="$root.$refs.shopHeader.$refs.cart.addProduct(product)" class="button button-transparent">
                          <img alt="basket" class="basket" src="./images/basket_white.svg">
                          Add to Cart
                      </button>
                  </div>
                  <div class="featured__image" v-bind:style="{ backgroundImage: 'url(' + product.img + ')' }"></div>
              </div>
              <div class="featured__text">
                  <a href="./view.html" class="featured__info">
                      {{product.name}} / {{product.brand || product.designer}}
                  </a>
                  <div class="featured__price text-rose">
                      $ {{product.price}}
                  </div>
              </div>
          </div>
      </div>       
   `,
});
