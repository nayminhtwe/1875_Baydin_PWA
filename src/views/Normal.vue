<template>
  <section class="ds s-pt-30 s-pb-20 s-pt-xl-60 s-pb-xl-40 c-gutter-60 c-mb-30">
    <!-- <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50"> -->
    <div class="container">
      <div
        v-for="child in getCurrentCategory.sub_categories"
        :key="child.id"
      >
        <div class="row">
          <div class="col-md-12">
            <h1>{{ child.title }}</h1>
          </div>
          <div
            class="col-xl-4 col-lg-6"
            v-for="category in child.sub_categories"
            :key="category.id"
          >
            <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow content-padding">
              <div class="item-media">
                <img
                  :src="child.image"
                  alt="img"
                  @click="$router.push({ name: 'content', params: { categoryId: category.id, parentId: category.parent_id }})"
                />
              </div>
              <div class="item-content">
                <h5
                  class="mt-0 links-maincolor2"
                  @click="$router.push({ name: 'content', params: { categoryId: category.id, parentId: category.parent_id }})"
                >

                  {{ category.title }}
                  <!-- <a href="service-single.html">{{ category.title }}</a> -->
                </h5>
                <p>{{ category.subtitle }}</p>
                <!-- <a href="service-single.html" class="mt-30 font-2">
                  Read Now
                  <i class="fa fa-caret-right color-main ml-2"></i>
                </a> -->
              </div>
            </div>
          </div>
          <!-- .col-* -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: `Normal`,
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory"
    })
  },
  created () {
    this.$store.dispatch("categoryStore/singleCategory", this.$route.params.categoryId);
  }
};
</script>
