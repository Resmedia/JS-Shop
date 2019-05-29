Vue.component('catalog-filter', {
   data() {
      return {

      };
   },
   template: `
      <div class="catalog-search">
          <div class="catalog__filter">
              <div class="catalog__filter-item">
              <div class="filter-item__name">
                  Trending now
              </div>
              <div class="catalog-filter__trend">
                  <ul>
                      <li>
                          <a href="" class="filter__trend-item">
                              Bohemian
                          </a>
                      </li>
                      <li>
                          <a href="" class="filter__trend-item">
                              Floral
                          </a>
                      </li>
                      <li>
                          <a href="" class="filter__trend-item">
                              Lace
                          </a>
                      </li>
                  </ul>
                  <ul>
                      <li>
                          <a href="" class="filter__trend-item">
                              Floral
                          </a>
                      </li>
                      <li>
                          <a href="" class="filter__trend-item">
                              Lace
                          </a>
                      </li>
                      <li>
                          <a href="" class="filter__trend-item">
                              Bohemian
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
              <div class="catalog__filter-item">
              <div class="filter-item__name">
                  Size
              </div>
              <div class="catalog-filter__size">
                  <label class="check-box">XXS
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
                  <label class="check-box">XS
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
                  <label class="check-box">S
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
                  <label class="check-box">M
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
                  <br/>
                  <label class="check-box">L
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
                  <label class="check-box">XL
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
                  <label class="check-box">XXL
                      <input type="checkbox">
                      <span class="checkmark"></span>
                  </label>
              </div>
          </div>
              <div class="catalog__filter-item">
              <div class="filter-item__name">
                  Price
              </div>
              <div class="catalog-filter__size">
                  <section class="range-slider">
                      <input
                              class="range-slider__input"
                              value="250"
                              min="0"
                              max="10000"
                              step="50"
                              type="range"
                      >
                      <input
                              class="range-slider__input"
                              value="8500"
                              min="0"
                              max="10000"
                              step="50"
                              type="range"
                      >
                      <div class="range-slider__values">
                          <span class="range-slider__min"></span>
                          <span class="range-slider__max"></span>
                      </div>
                  </section>
              </div>
          </div>
          </div>
          <div class="catalog__sort">
              <div class="catalog__sort-button">
                  <label class="sort-button_name">SortBy</label>
                  <div class="button__sort">
                      Name <i class="arrow-black arrow-down"></i>
                  </div>
              </div>
              <div class="catalog__sort-button">
                  <label class="sort-button_name">Show</label>
                  <div class="select select-sort">
                      <label>
                          <select name="count-on-page">
                              <option value="">9</option>
                              <option value="1">20</option>
                              <option value="2">40</option>
                              <option value="3">60</option>
                              <option value="4">100</option>
                          </select>
                      </label>
                  </div>
              </div>
          </div>
      </div>
   `,
});

