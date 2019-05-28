Vue.component('products', {
   data() {
      return {
         apiProducts: '/api/products',
         products: [],
         filtered: [],
      };
   },
   mounted() {
      this.$parent.getJson(this.apiProducts)
         .then(data => {
            for (let el of data) {
               this.products.push(el);
               this.filtered.push(el);
            }
         });
   },
   methods: {
      filter(value) {
         let regexp = new RegExp(value, 'i');
         this.filtered = this.products.filter(el => regexp.test(el.product_name));
      }
   },
   template: `
      <div class="products">
         <product
            v-for="product of filtered"
            :key="product.id"
            :img="imgCatalog"
            :product="product"
         >
         </product>
      </div>
   `,
});
Vue.component('product', {
   props: ['product', 'img'],
   template: `
      <div class="product-item"  >
         <img :src="img" :alt="product.name">
         <div class="desc">
            <h3>{{product.name}}</h3>
            <p>$ {{product.price}}</p>
            <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
         </div>
      </div>
   `,
});
