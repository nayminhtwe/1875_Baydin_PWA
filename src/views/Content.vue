<template>
  <section class="ds s-pt-30 s-pb-20 s-pt-xl-60 s-pb-xl-40 c-gutter-60 c-mb-30">
    <!-- <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50"> -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="vertical-item bg-darkblue text-center content-padding padding-big">
            <div class="item-media">
              <img
                :src="getCurrentCategory.image"
                alt="img"
                v-if="getCurrentCategory.image"
              />
            </div>
            <div
              class="item-content max-content"
              style="word-break: break-all"
            >
              <!-- <p
                v-for="content in getContents"
                :key="content.id"
              >{{ JSON.parse(content.content)[0] }}</p> -->
              <p>{{ JSON.parse(getContents[0].content)[0] }}</p>
            </div>
          </div>
          <div class="share_buttons social_part">
          </div>
        </div>
        <!-- .col-* -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
// import { HTTP } from "@core/lib/http-common";

export default {
  name: `Normal`,
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory",
      getContents: "categoryStore/getContents"
    })
  },
  created () {
    this.$store.dispatch(
      "categoryStore/getContents",
      this.$route.params.categoryId
    );
  }
};
</script>
