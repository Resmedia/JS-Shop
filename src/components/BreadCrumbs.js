Vue.component('bread-crumbs', {
  props: ['section', 'crumbs'],
  template: `
  <div class="catalog-nav">
    <div class="container">
        <h1 class="catalog-nav__left text-rose">
            {{section}}
        </h1>
        <nav class="catalog-nav__right">
            <ul class="breadcrumbs">
                <li>
                   <a href="/" class="breadcrumbs_item">
                      Home
                   </a>
                </li>
                <crumb
                   v-for="crumb of crumbs"
                   :key="crumb.url"
                   :crumb="crumb"
                >
                </crumb>
            </ul>
        </nav>
    </div>
</div>
  `,
});

Vue.component('crumb', {
  props: ['crumb'],
  template: `
  <li>
     <a v-if="crumb.url" :href="crumb.url" class="breadcrumbs_item">
         {{crumb.name}}
     </a>
     <span v-else  class="breadcrumbs_item">
          {{crumb.name}}
     </span>
  </li>
  `,
});
