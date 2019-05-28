Vue.component('filter-el', {
   data() {
      return {
         userSearch: ''
      };
   },
   template: `
      <form action="#" class="form-group" @submit.prevent="$parent.$refs.products.filter(userSearch)">
         <div class="select mega-select">
             <label>
                 <select required name="search">
                     <option value="">Browse</option>
                     <option class="select__section-name" value="1">Women</option>
                     <option value="2">Dresses</option>
                     <option value="3">Tops</option>
                     <option value="4">Sweaters/Knits</option>
                     <option value="5">Jackets/Coats</option>
                     <option value="6">Blazers</option>
                     <option value="7">Denim</option>
                     <option value="8">Leggings/Pants</option>
                     <option value="9">Skirts/Shorts</option>
                     <option value="10">Accessories </option>
                     <option class="select__section-name" value="11">Men</option>
                     <option value="12">Tees/Tank tops</option>
                     <option value="13">Shirts/Polos</option>
                     <option value="14">Sweaters</option>
                     <option value="15">Sweatshirts/Hoodies</option>
                     <option value="16">Blazers</option>
                     <option value="17">Jackets/vests</option>
                 </select>
             </label>
         </div>
         <input required placeholder="Search for Item..." class="form-control search" v-model="userSearch"/>
         <button type="submit" class="button button-white">
             <i class="icon-search"></i>
         </button>
      </form>
   `,
});
