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
            v-if="type == 'mp4'"
          >
            <video
              controls
              :src="file"
              style="padding-left: 5em"
            >
              Your browser does not support the
              <code>video</code> element.
            </video>
          </div>
          <div
            class="col-md-12"
            v-if="type == 'pdf'"
          >
            <button
              class="woocommerce-Button button"
              :href="file"
              v-text="item.name"
              style="margin-left: 5em"
              @click.prevent="downloadItem(item)"
            />
          </div>
        </div>
        <div
          class="row"
          v-if="status == 0"
        >
          <div class="col-md-12">

            <h4 class="mm-font __mm cat">ဟောစာတမ်းအတွက်အဖြေမရှိသေးပါ</h4>
            <!-- <p>
              ဟောစာတမ်းအတွက်အဖြေမရှိသေးပါ
            </p> -->
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Horo } from "@core/lib/http-common";
import axios from 'axios';

export default {
  name: `Order`,
  data () {
    return {
      order: this.$route.params.order,
      item: '',
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
      this.item = response.data
      this.status = response.data.status
      this.type = response.data.file.split('.').pop();
      this.file = response.data.file
    })
  },
  methods: {
    downloadItem ({ file, name }) {
      axios.get(file, { responseType: 'blob' })
        .then(response => {
          const blob = new Blob([response.data], { type: 'application/pdf' })
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = name
          link.click()
          URL.revokeObjectURL(link.href)
        }).catch(console.error)
    }
  }
};
</script>
