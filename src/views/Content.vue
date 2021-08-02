<template>
  <section class="ds s-pt-30 s-pb-20 s-pt-xl-60 s-pb-xl-40 c-gutter-60 c-mb-30">
    <!-- <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50"> -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="vertical-item bg-darkblue text-center content-padding padding-big">
            <div class="item-media">
              <img
                :src="category.image"
                alt="img"
                v-if="category.image"
              />
            </div>
            <div
              class="item-content max-content"
              style="word-break: break-all"
              v-if="contents.content"
            >
              <p
                v-for="(c, index) in JSON.parse(contents.content)"
                :key="index"
              >{{ c }}</p>

              <!-- <p v-if="contents">{{ JSON.parse(contents.content)[0] }}</p>
              <p v-if="contents">{{ JSON.parse(contents.content)[1] }}</p> -->
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
import { HTTP } from "@core/lib/http-common";

export default {
  name: `Normal`,
  data () {
    return {
      category: '',
      contents: ''
    }
  },
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory",
      getContents: "categoryStore/getContents"
    })
  },
  async created () {
    await this.$store.dispatch(
      "categoryStore/getContents",
      this.$route.params.categoryId
    );
    await HTTP.get(`category/${this.getCurrentCategory.parent_id}`).then((response) => {
      this.category = response.data;
    });
    let content = this.getContents[0]
    if (!content.for_date) {
      this.contents = content
    }

    if (content.for_date) {
      this.contents = this.getContents.filter(category => category.for_date == this.moment().format('YYYY-MM-DD'))[0]
    }

  }
};
</script>
