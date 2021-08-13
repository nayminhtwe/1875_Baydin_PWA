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
      <div
        class="row"
        id="box"
      >
        <div
          class="col-xl-4 col-lg-6 col-6"
          v-for="category in displayCategories"
          :key="category.id"
        >
          <div
            class="vertical-item text-center service-layout-1  content-padding"
            @click="$router.push({ name: 'category', params: { categoryName: category.name }})"
          >
            <div class="item-media">
              <img
                :src="category.image"
                alt="img"
              >
              <!-- <div class="media-links">
                <router-link
                  class="abs-link"
                  :to="{ name: 'category', params: { categoryName: category.name }}"
                />
              </div> -->
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
      categories: {
        'love': 'အချစ်ဇာတာဟောစာတမ်း',
        'child': 'အမည်ပေး(ရင်သွေးအမည်)',
        'oneyear': 'တနစ်စာအဟော',
        'business': 'အမည်ပေး(လုပ်ငန်းအမည်)',
        'direct': 'ဗေဒင်ဆရာနဲ့တိုက်ရိုက်မေးမည်',
        'phone': 'ဗေဒင်ဆရာမှဖုန်းပြန်လည်ခေါ်ဆိုပေးမည်',
      },
      displayCategories: [
        {
          'id': 1,
          'name': 'oneyear',
          'image': require('@/images/home/1.png')
        },
        {
          'id': 2,
          'name': 'clairvoyance',
          'image': require('@/images/home/2.png')
        },
        {
          'id': 3,
          'name': 'free',
          'image': require('@/images/home/3.png')
        },
        {
          'id': 4,
          'name': 'chiromancy',
          'image': require('@/images/home/4.png')
        },
        {
          'id': 5,
          'name': 'child',
          'image': require('@/images/home/5.png')
        },
        {
          'id': 6,
          'name': 'love',
          'image': require('@/images/home/6.png')
        },
        {
          'id': 7,
          'name': 'phone',
          'image': require('@/images/home/7.png')
        },
        {
          'id': 8,
          'name': 'direct',
          'image': require('@/images/home/8.png')
        },
        {
          'id': 9,
          'name': 'business',
          'image': require('@/images/home/9.png')
        },
        {
          'id': 10,
          'name': 'orders',
          'image': require('@/images/home/10.png')
        },
      ],
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
    if (!this.getResponse.result) {
      if (!this.isAuthenticated) {
        await this.$store.dispatch('userStore/login', this.$route.query.kbzpay_token)
      } else {
        await this.$store.dispatch("userStore/queryCustInfo", this.$route.query.kbzpay_token);
      }
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
#box {
  margin: 0 0;
}
</style>