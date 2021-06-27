<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4 class="mm-font __mm cat">{{ order.order_id }}</h4>
          <h6 class="mm-font __mm cat">{{ order.amount }}</h6>
        </div>
        <div class="row">
          <div class="col-md-12">
            <audio
              controls
              :src="file"
              style="padding-left: 5em"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Horo } from "@core/lib/http-common";

export default {
  name: `Order`,
  data () {
    return {
      order: this.$route.params.order,
      file: ''
    }
  },
  computed: {
    ...mapGetters({
      getUserToken: 'userStore/getUserToken',
    })
  },
  async created () {
    await Horo.post("1875/horoscope/getFile", {
      'order_id': "219b35c0-a617-12ea-a0ce-376ad1581769"
    }).then((response) => {
      this.file = response.data.file
    })
  }
};
</script>
