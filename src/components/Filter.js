import {SelectElement} from './Select.js';

export const FilterEl = {
	data() {
		return {
			userSearch: "",
			options: [
				{
					id: 1,
					name: "Women",
					section: true
				},
				{
					id: 2,
					name: "Dresses",
					section: false
				},
				{
					id: 3,
					name: "Tops",
					section: false
				},
				{
					id: 4,
					name: "Sweaters/Knits",
					section: false
				},
				{
					id: 5,
					name: "Jackets/Coats",
					section: false
				},
				{
					id: 6,
					name: "Blazers",
					section: false
				},
				{
					id: 7,
					name: "Denim",
					section: false
				},
				{
					id: 8,
					name: "Leggings/Pants",
					section: false
				},
				{
					id: 9,
					name: "Skirts/Shorts",
					section: false
				},
				{
					id: 10,
					name: "Accessories",
					section: false
				},
				{
					id: 11,
					name: "Men",
					section: true
				},
				{
					id: 12,
					name: "Tees/Tank tops",
					section: false
				},
				{
					id: 13,
					name: "Shirts/Polos",
					section: false
				},
				{
					id: 14,
					name: "Sweaters",
					section: false
				},
				{
					id: 15,
					name: "Sweatshirts/Hoodies",
					section: false
				},
				{
					id: 16,
					name: "Blazers",
					section: false
				},
				{
					id: 17,
					name: "Jackets/vests",
					section: false
				}
			]
		};
	},
	components: {
		'select-element': SelectElement,
	},
	template: `
      <form action="" class="form-group" @submit.prevent="$parent.$parent.$refs.products.filter(userSearch)">
         <div class="select select-mega">
         <select-element
            ref="selectElement"
            name="Brose"
            v-bind:options="options"
         ></select-element>
         </div>
         <input placeholder="Search for Item..." class="form-control search" v-model="userSearch"/>
         <button type="submit" class="button button-white">
             <i class="icon-search"></i>
         </button>
      </form>
   `
};
