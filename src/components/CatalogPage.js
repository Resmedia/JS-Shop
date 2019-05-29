Vue.component('catalog', {
  data() {
    return {
      apiProducts: '/api/products',
      products: [],
      filtered: [],
    };
  },
  mounted() {
    this.$parent.getJson(this.apiProducts).then(data => {
      for (let el of data) {
        this.products.push(el);
        this.filtered.push(el);
      }
    });
  },
  methods: {
    filter(value) {
      let regexp = new RegExp(value, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.name));
    },
  },
  template: `
      <div class="catalog__items row-15">
          <product
             v-for="product of filtered"
             :key="product.id"
             :product="product"
          >
          </product>
          <div class="catalog__pager">
              <nav class="catalog__pager-left">
                  <ul class="pager">
                    <li>
                        <a href="" class="pager__item">
                            <i class="icon icon-chevron-left"></i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            1
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            2
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            3
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            4
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            5
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            6...12
                        </a>
                    </li>
                    <li>
                        <a href="" class="pager__item">
                            <i class="icon icon-chevron-right"></i>
                        </a>
                    </li>
                </ul>
              </nav>
              <div class="catalog__pager-right">
                  <button class="button button-rose-transparent">
                      View All
                  </button>
              </div>
          </div>
      </div>
   `,
});
Vue.component('product', {
  props: ['product'],
  template: `
      <div class="col-md-4"> 
          <div class="featured__item">
              <div class="image-wrapper">
                  <div class="featured__buttons">
                      <button  @click="$root.$refs.shopHeader.$refs.cart.addProduct(product)" class="button button-transparent">
                          <img alt="basket" class="basket" src="/images/basket_white.svg">
                          Add to Cart
                      </button>
                      <div class="group-inline">
                          <button class="button button-transparent">
                              <i class="icon-retweet"></i>
                          </button>
                          <button class="button button-transparent">
                              <i class="icon-heart"></i>
                          </button>
                      </div>
                  </div>
                  <div class="featured__image" v-bind:style="{ backgroundImage: 'url(' + product.img + ')' }"></div>
              </div>
              <div class="featured__text">
                  <a href="/view.html" class="featured__info">
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
