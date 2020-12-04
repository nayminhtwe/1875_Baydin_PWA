<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="vertical-item bg-darkblue text-center content-padding padding-big">
            <div class="item-media">
              <img :src="getCurrentCategory.image" alt="img" v-if="getCurrentCategory.image" />
            </div>
            <div class="item-content max-content">
              <p v-for="content in contents" :key="content.id">{{ JSON.parse(content.content)[0] }}</p>
            </div>
          </div>
          <div class="share_buttons social_part">
            <a href="https://www.facebook.com" class="color-bg-icon fa fa-facebook" target="_blank"></a>
            <a href="https://twitter.com" class="color-bg-icon fa fa-twitter" target="_blank"></a>
            <a href="https://pinterest.com" class="color-bg-icon fa fa-pinterest" target="_blank"></a>
            <a href="https://instagram.com" class="color-bg-icon fa fa-instagram" target="_blank"></a>
            <a
              href="https://www.youtube.com"
              class="color-bg-icon fa fa-youtube-play"
              target="_blank"
            ></a>
          </div>
        </div>
        <!-- .col-* -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { HTTP } from "@core/lib/http-common";

export default {
  name: `Normal`,
  data() {
    return {
      contents: []
    };
  },
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory"
    })
  },
  created() {
    this.$store.dispatch(
      "categoryStore/singleCategory",
      this.$route.params.categoryId
    );
  },
  watch: {
    getCurrentCategory(category) {
      console.log(category);
      HTTP.get(`content?category_id=1&content_category_id=${category.id}`).then(
        response => {
          console.log(this.getCurrentCategory.id, response);
          this.contents = response.data.data;
        }
      );
    }
  }
};
</script>
