<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
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
            <div class="item-content max-content">
              <p
                v-for="content in getContents"
                :key="content.id"
              >{{ JSON.parse(content.content)[0] }}</p>
            </div>
          </div>
          <div class="share_buttons social_part">
            <button
              name="pay"
              style="margin-left: 120px;"
              @click="startPay()"
            >Pay Now</button>
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
  },
  methods: {
    startPay () {
      this.kbzpay.startPay('KBZ00261c56010070436571da196b74a56a04140644911', 'appid=kp9539d5120b864436980c3f25966215&merch_code=200170&nonce_str=gXvnSZWWrJjqbkHUXBdlRubrTMKeLuzc&prepay_id=KBZ00261c56010070436571da196b74a56a04140644911&timestamp=1535166225&key=zKyBnbqZYQ0P^H^4SSaBu3Bw&hsJAYlZ', 'a6583b507f7f88ecae445faa9980dca8723f0f5b16b9032f47a83d9f332d32ce', {}, {})
    }
  }
};
</script>
