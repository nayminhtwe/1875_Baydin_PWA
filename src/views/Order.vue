<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4 class="mm-font __mm cat">{{ order.order_id }}</h4>
          <h6 class="mm-font __mm cat">{{ order.amount }}</h6>
        </div>
        <div
          class="row"
          v-if="status == 1"
        >
          <div
            class="col-md-12"
            v-if="type == 'mp3' || type == 'wav'"
          >
            <audio
              controls
              :src="file"
              style="padding-left: 5em"
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </div>
          <div
            class="col-md-12"
            v-if="type == 'pdf'"
          >
            <a
              class="woocommerce-Button button"
              :href="file"
            >
              Download
            </a>
          </div>
        </div>
        <div
          class="row"
          v-if="status == 0"
        >
          <div class="col-md-12">
            <p>
              ဟောစာတမ်းအတွက်အဖြေမရှိသေးပါ
            </p>
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
      status: '',
      type: '',
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
      'order_id': this.order.order_id
    }).then((response) => {
      this.status = response.data.status
      this.type = response.data.file.split('.').pop();
      this.file = response.data.file
    })
  }
};
</script>
