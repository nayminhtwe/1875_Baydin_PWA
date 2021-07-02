<template>
  <section class="ds s-pt-30 s-pb-20 s-pt-xl-60 s-pb-xl-40 c-gutter-60 c-mb-30">
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mm-font __mm cat">{{ getResponse }}</h1>
        </div>
      </div>
    </div> -->

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mm-font __mm cat">အထူးဟောစာတမ်းများ</h1>
        </div>
        <div
          class="col-xl-4 col-lg-6"
          v-for="category in specialCategories"
          :key="category.id"
        >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                :src="category.image"
                alt="img"
              >
              <div class="media-links">
                <router-link
                  class="abs-link"
                  :to="{ name: 'special', params: { categoryId: category.id }}"
                />
                <!-- <a class="abs-link" title="" href="service-single.html"></a> -->
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'special', params: { categoryId: category.id }}">
                  {{ category.title }}
                </router-link>
                <!-- <a href="service-single.html">{{ category.title }}</a> -->
              </p>
              <p>
                {{ category.subtitle }}
              </p>
              <!-- <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a> -->
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mm-font __mm cat">နေ့စဉ်၊ အပတ်စဉ်၊ လစဉ် ဟောစာတမ်းများ</h1>
        </div>
        <div
          class="col-xl-4 col-lg-6"
          v-for="category in normalCategories"
          :key="category.id"
        >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                :src="category.image"
                alt="img"
              >
              <div class="media-links">
                <router-link
                  class="abs-link"
                  :to="{ name: 'normal', params: { categoryId: category.sub_categories[0].id }}"
                />
                <!-- <a class="abs-link" title="" href="service-single.html"></a> -->
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'normal', params: { categoryId: category.sub_categories[0].id }}">
                  {{ category.title }}
                </router-link>
                <!-- <a href="service-single.html">{{ category.title }}</a> -->
              </p>
              <!--<p>-->
              <!--{{ category.subtitle }}-->
              <!--</p>-->
              <!-- <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a> -->
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mm-font __mm cat">ဗေဒင်ဆရာနဲ့တိုက်ရိုက်မေးမည်</h1>
        </div>
        <div
          class="col-xl-4 col-lg-6"
          v-for="type in types"
          :key="type.id"
        >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                :src="type.image"
                alt="img"
              >
              <div class="media-links">
                <router-link
                  class="abs-link"
                  :to="{ name: 'direct', params: { categoryName: type.name }}"
                />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: type.name }}">
                  {{ type.mm_name }}
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mm-font __mm cat">ဗေဒင်ဆရာမှဖုန်းပြန်လည်ခေါ်ဆိုပေးမည်</h1>
        </div>
        <div class="col-xl-4 col-lg-6">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/S8q7H36jcwHbDaOsuQyeVZ3AAHQL8wqjQ3TIzbcq.png"
                alt="img"
              >
              <div class="media-links">
                <router-link
                  class="abs-link"
                  :to="{ name: 'phone'}"
                />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'phone'}">
                  ဖုန်းခေါ်၍ ဗေဒင်မေးမည်။
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="mm-font __mm cat">ဟောစာတမ်းအတွက်အဖြေများ</h1>
        </div>
        <div
          class="col-xl-4 col-lg-6"
          v-for="order in orders"
          :key="order.order_id"
        >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/S8q7H36jcwHbDaOsuQyeVZ3AAHQL8wqjQ3TIzbcq.png"
                alt="img"
              >
              <div class="media-links">
                <router-link
                  class="abs-link"
                  :to="{ name: 'order', params: { order: order }}"
                />
                <!-- <a
                  class="abs-link"
                  title=""
                  href="service-single.html"
                ></a> -->
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'order', params: { order: order }}">
                  {{ order.category_name }}
                </router-link>
                <!-- <a href="service-single.html">{{ order.order_id }}</a> -->
              </p>
              <p>
                {{ moment(order.createdAt).format('YYYY-MM-DD HH:mm:ss') }}
              </p>
              <!-- <a href="service-single.html" class="mt-30 font-2">Read Now <i class="fa fa-caret-right color-main ml-2"></i></a> -->
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>

  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { HTTP } from "@core/lib/http-common";
import types from '@core/i18n/resource/direct_types.json'

export default {
  name: `Home`,
  data () {
    return {
      types: types,
      orders: [],
    }
  },
  computed: {
    ...mapGetters({
      getCategories: 'categoryStore/getCategories',
      specialCategories: 'categoryStore/getSpecialCategories',
      normalCategories: 'categoryStore/getNormalCategories',
      isAuthenticated: 'userStore/isAuthenticated',
      getResponse: 'userStore/getResponse',
      getUserToken: 'userStore/getUserToken',
    }),
  },
  async created () {
    if (this.getCategories.length === 0) {
      this.$store.dispatch('categoryStore/allCategories')
    }

    if (!this.isAuthenticated) {
      await this.$store.dispatch('userStore/login', this.$route.query.kbzpay_token)
    }

    HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
    await HTTP
      .get('subscription/orders')
      .then(response => {
        this.orders = response.data.orders
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>

<style scoped>
.cat {
  font-size: 2em;
}
</style>