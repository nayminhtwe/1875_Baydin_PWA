<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
						<h1>Special</h1>
				</div>
        <div class="col-xl-4 col-lg-6" v-for="category in specialCategories" :key="category.id">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img :src="category.image" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">{{ category.title }}</a>
              </h5>
              <p>
                {{ category.subtitle }}
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div><div class="container">
      <div class="row">
        <div class="col-md-12">
						<h1>Normal</h1>
				</div>
        <div class="col-xl-4 col-lg-6" v-for="category in normalCategories" :key="category.id">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img :src="category.image" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">{{ category.title }}</a>
              </h5>
              <p>
                {{ category.subtitle }}
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: `Home`,
  computed: {
    ...mapGetters({
      getCategories: 'categoryStore/allCategories',
      specialCategories: 'categoryStore/specialCategories',
      normalCategories: 'categoryStore/normalCategories',
    }),
  },
  created() {
    if (this.getCategories.length === 0) {
        this.$store.dispatch('categoryStore/allCategories')
      }
  }
};
</script>
