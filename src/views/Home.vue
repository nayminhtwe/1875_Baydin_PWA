<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="@/images/services/img_1.jpg" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">Analysis of Horoscope</a>
              </h5>
              <p>
                Integer sagittis nisi nec tortor fermentum aliquet.
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="@/images/services/img_2.jpg" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">Effect of planet Mars</a>
              </h5>
              <p>
                Integer sagittis nisi nec tortor fermentum aliquet.
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="@/images/services/img_3.jpg" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">Gun Milan table</a>
              </h5>
              <p>
                Integer sagittis nisi nec tortor fermentum aliquet.
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="@/images/services/img_4.jpg" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">Number of Gun</a>
              </h5>
              <p>
                Integer sagittis nisi nec tortor fermentum aliquet.
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="@/images/services/img_5.jpg" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">Recommendations</a>
              </h5>
              <p>
                Integer sagittis nisi nec tortor fermentum aliquet.
              </p>
              <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="@/images/services/img_6.jpg" alt="img">
              <div class="media-links">
                <a class="abs-link" title="" href="service-single.html"></a>
              </div>
            </div>
            <div class="item-content">
              <h5 class="mt-0 links-maincolor2">
                <a href="service-single.html">Horoscope Matching</a>
              </h5>
              <p>
                Integer sagittis nisi nec tortor fermentum aliquet.
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
    }),
  },
  created() {
    if (this.getCategories.length === 0) {
        this.$store.dispatch('categoryStore/allCategories')
      }
  }
};
</script>
