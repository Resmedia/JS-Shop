Vue.component('select-element', {
  props: ['name', 'options'],
  data() {
    return {
      selectHide: false,
    };
  },
  template: `
  <div @click="selectHide = !selectHide" class="select-selected" v-bind:class="{ 'select-active': selectHide }">
        <span v-if="name" class="catalog-nav__left">
            {{name}}
        </span>
       
        <div v-if="selectHide" class="select-items" >
            <option-element
                v-for="option of options"
                :key="option.id"
                :option="option"
            >
            </option-element>
        </div>
  </div>
  `,
});

Vue.component('option-element', {
  props: ['option'],
  data() {
    return {
      section: this.option.section,
    };
  },
  template: `
  <div class="select__option" v-bind:class="{ 'select__section-name': section }">
      {{option.name}}
  </div>
  `,
});
/**/
