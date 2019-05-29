Vue.component('products-main', {
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
               if(el.main){
                  this.products.push(el);
               }
            }
         });
   },
   template: `
      <section class="main-block__featured">
         <div class="featured-name">
            Fetured Items
         </div>
         <div class="featured-anons">
            Shop for items based on what we featured in this week
         </div>
         <div class="row-15">
             <product
                v-for="product of products"
                :key="product.id"
                :product="product"
             >
             </product>
         </div>
         <a href="products.html" class="button button-rose main-block__button">
            Browse All Product <i class="icon-arrow-right"></i>
         </a>
      </section>
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

