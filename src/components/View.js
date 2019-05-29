Vue.component('view-page', {
  template: `
  <div class="arrival-view">
      <div class="arrival__slider">
        <div class="arrival__slider-left">
            <i class="icon-chevron-left"></i>
        </div>
        <img alt="arrival" src="/images/view-image.jpg" />
        <div class="arrival__slider-left">
            <i class="icon-chevron-right"></i>
        </div>
    </div>
    <div class="arrival__params">
        <div class="container">
            <div class="arrival__box text-center">
                <h2 class="arrival__collection text-rose">
                    WOMEN COLLECTION
                </h2>
                <div class="arrival__name">
                    Moschino Cheap And Chic
                </div>
                <div class="arrival__description">
                    Compellingly actualize fully researched processes before proactive outsourcing. Progressively
                    syndicate collaborative architectures before cutting-edge services. Completely visualize parallel
                    core competencies rather than exceptional portals.
                </div>
                <div class="arrival__info">
                    <div class="info-item">
                        <span class="text-gray">MATERIAL:</span> COTTON
                    </div>
                    <div class="info-item">
                        <span class="text-gray">DESIGNER:</span> BINBURHAN
                    </div>
                </div>
                <div class="arrival__price text-rose">
                    $561
                </div>
                <hr/>
                <form class="arrival__settings">
                    <div class="arrival__select">
                        <div class="select-item">
                            <div class="select-item__name">
                                CHOOSE COLOR
                            </div>
                            <div class="select select-default">
                                <label>
                                    <select name="color" required>
                                        <option value="">Choose</option>
                                        <option class="square-red" value="1">Red</option>
                                        <option class="square-blue" value="2">Blue</option>
                                        <option class="square-green" value="3">Green</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="select-item">
                            <div class="select-item__name">
                                CHOOSE SIZE
                            </div>
                            <div class="select select-default">
                                <label>
                                    <select name="size" required>
                                        <option value="">Choose</option>
                                        <option value="1">XXL</option>
                                        <option value="2">XL</option>
                                        <option value="3">L</option>
                                        <option value="4">M</option>
                                        <option value="5">S</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="select-item">
                            <div class="select-item__name">
                                QUANTITY
                            </div>
                            <label>
                                <input
                                      name="count"
                                      placeholder="Input count..."
                                      minlength="1"
                                      value="2"
                                      required
                                      type="number"
                                      class="form-control"
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="button button-lg button-rose-transparent">
                        <img alt="basket" class="basket" src="images/basket_rose.svg">
                        Add to Cart
                    </button>
                </form>
            </div>
        </div>
    </div>
  </div>
  `,
});
