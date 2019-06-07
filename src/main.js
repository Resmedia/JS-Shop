import {ShopHeader} from './ShopHeader.js';
import {ShopMenu} from './ShopMenu.js';
import {ShopFooter} from './ShopFooter.js';
import {BreadCrumbs} from './BreadCrumbs.js';
import {Products} from './Products.js';
import {ShopMerits} from './ShopMerits.js';
import {ShopOffer} from './ShopOffer.js';
import {MainAdditions} from './MainAdditions.js';
import {CatalogMenu} from './CatalogMenu.js';
import {MainSlider} from './MainSlider.js';
import {CartPage} from './CartPage.js';
import {CatalogFilter} from './CatalogFilter.js';
import {ShopMeritsPage} from './ShopMeritsPage.js';
import {ViewPage} from './View.js';

import {Error} from './Error.js';

const app = new Vue({
	el: "#app",
	data: {
		userSearch: "",
		removeAll: "/api/cart/all-remove",
		methodGet: "GET",
		methodPost: "POST",
		methodPut: "PUT",
		methodDelete: "DELETE"
	},
	components: {
		'bread-crumbs': BreadCrumbs,
		'cart-page': CartPage,
		'shop-header': ShopHeader,
		'shop-menu': ShopMenu,
		'shop-footer': ShopFooter,
		'shop-merits': ShopMerits,
		'shop-offer': ShopOffer,
		'main-slider': MainSlider,
		'main-additions': MainAdditions,
		'products': Products,
		'error': Error,
		'catalog-menu': CatalogMenu,
		'catalog-filter': CatalogFilter,
		'shop-merits-page': ShopMeritsPage,
		'view-page': ViewPage,
	},
	methods: {
		async processJson(url, data, method) {
			if (url === this.removeAll && method === this.methodDelete) {
				return fetch(url, {
					method: method,
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.catch(error => this.$refs.error.setError(error));
			}

			if (method !== this.methodGet) {
				return fetch(url, {
					method: method,
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(response => response.json())
					.catch(error => this.$refs.error.setError(error));
			} else {
				return await fetch(url)
					.then(result => result.json())
					.catch(error => this.$refs.error.setError(error));
			}
		},
		getJson(url) {
			return this.processJson(url, null, this.methodGet);
		},
		postJson(url, data) {
			return this.processJson(url, data, this.methodPost);
		},
		putJson(url, data) {
			return this.processJson(url, data, this.methodPut);
		},
		removeJson(url, data) {
			return this.processJson(url, data, this.methodDelete);
		},
		clearJson(url) {
			return this.processJson(url, null, this.methodDelete);
		}
	}
});
