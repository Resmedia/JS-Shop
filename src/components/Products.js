Vue.component("products", {
  props: ["type", "column", "pager"],
  data() {
    return {
      apiProducts: "/api/products",
      products: [],
      filtered: [],
      currentPage: 0,
      itemsPerPage: 6,
      resultCount: 0
    };
  },
  mounted() {
    this.$parent.getJson(this.apiProducts).then(data => {
      for (let item of data) {
        if (!!this.type && item[this.type]) {
          this.products.push(item);
          this.filtered.push(item);
        }

        if (!this.type) {
          this.products.push(item);
          this.filtered.push(item);
        }
      }
    });
  },
  computed: {
    totalPages() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    }
  },
  methods: {
    filter(value) {
      let regexp = new RegExp(value, "i");
      this.filtered = this.products.filter(el => regexp.test(el.name));
    },
    setPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    pagination(list) {
      this.resultCount = list.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }

      const index = this.currentPage * this.itemsPerPage;
      return list.slice(index, index + this.itemsPerPage);
    }
  },
  template: `
      <div class="products">
          <product
             v-for="product of !type ? pagination(filtered) : filtered"
             :key="product.id"
             :product="product"
             :type="type"
             :column="column"
          >
          </product>
          <div v-if="!type" class="products__pager">
              <nav class="products__pager-left">
              <ul class="pager">
                 <li
                    v-for="pageNumber in totalPages"
                    v-if="
                       Math.abs(pageNumber - currentPage) < 3 ||
                       pageNumber === totalPages ||
                       pageNumber === 0
                    "
                 >
                     <a
                        href="#"
                        class="pager__item"
                        v-on:click.self="setPage(pageNumber - 1)" 
                        v-bind:class="{
                            current: currentPage === pageNumber - 1,
                            last: (pageNumber === totalPages && Math.abs(pageNumber - currentPage) > 3),
                            first:(pageNumber === 0 && Math.abs(pageNumber - currentPage) > 3)
                        }"
                     >
                       {{ pageNumber }}
                     </a>
                 </li>
              </ul>
              </nav>
              <div class="products__pager-right">
                  <button class="button button-rose-transparent">
                      View All
                  </button>
              </div>
          </div>
      </div>
   `
});
Vue.component("product", {
  props: ["product", "type", "column"],
  template: `
      <div v-bind:class="column"> 
          <div class="products__item">
              <div class="image-wrapper">
                  <a :title="product.name" href="/view.html" class="active-zone"></a>
                  <div class="products__buttons">
                      <button  @click="$root.$refs.shopHeader.$refs.cart.addProduct(product)" class="button button-transparent">
                          <img alt="basket" class="basket" src="/images/basket_white.svg">
                          Add to Cart
                      </button>
                      <div v-if="!type" class="group-inline">
                          <button class="button button-transparent">
                              <i class="icon-retweet"></i>
                          </button>
                          <button class="button button-transparent">
                              <i class="icon-heart"></i>
                          </button>
                      </div>
                  </div>
                  <div class="products__image" v-bind:style="{ backgroundImage: 'url(' + product.img + ')' }"></div>
              </div>
              <div class="products__text">
                  <a href="/view.html" class="products__info">
                      {{product.name}} / {{product.brand || product.designer}}
                  </a>
                  <div class="products__price text-rose">
                      $ {{product.price}}
                  </div>
              </div>
          </div>
      </div>       
   `
});
