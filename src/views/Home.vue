<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
						<h1>Special</h1>
				</div>
        <div class="col-xl-4 col-lg-6" v-for="category in specialCategories" :key="category.id">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img :src="category.image" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'special', params: { categoryId: category.id }}" />
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

    </div><div class="container">
      <div class="row">
        <div class="col-md-12">
						<h1>Normal</h1>
				</div>
        <div class="col-xl-4 col-lg-6" v-for="category in normalCategories" :key="category.id">
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img :src="category.image" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'normal', params: { categoryId: category.sub_categories[0].id }}" />
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
						<h1>Direct</h1>
				</div>
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/lCmAjRi38hMDWr6UQW06JtjxsQRv622uAjS4le5h.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'love' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'love' }}">
                  အချစ်ရေး
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/w3kaxUoO2TQFfmGxOpjOi8ERjukfQLb986ZKEurx.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'marriage' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'marriage' }}">
                  အိမ်ထောင်ရေး
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/XbjziGXHV6wphTo2gSNPBoe1Hx3e9enHzBQt0P9L.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'bussiness' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'bussiness' }}">
                  ကိုယ်ပိုင်စီးပွားရေး
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/xg2aUTzav5m1IOCmgamNVPURLTtlLHHEzzXaPbQI.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'finance' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'finance' }}">
                  ကိုယ်ပိုင်စီးပွားရေး
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/U8qcLdGo3jIvu1Ghq1583kTsk3aBbXJZvan6WSSv.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'job' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'job' }}">
                  အလုပ်အကိုင်
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/Daqtxvq0XWucGPU7oHQ34hrSXDyiO9iy3rTCFM1l.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'education' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'education' }}">
                  ပညာရေး
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
        <div class="col-xl-4 col-lg-6" >
          <div class="vertical-item bg-darkblue text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img src="https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/N0KWDUIV0UNvEDnsZGR2TI1bkUmWYon17RB8Rtk2.jpeg" alt="img">
              <div class="media-links">
                <router-link class="abs-link" :to="{ name: 'direct', params: { categoryName: 'general' }}" />
              </div>
            </div>
            <div class="item-content">
              <p class="mt-0 links-maincolor2">
                <router-link :to="{ name: 'direct', params: { categoryName: 'general' }}">
                  လူမှုရေးအထွေထွေ
                </router-link>
              </p>
            </div>
          </div>
        </div><!-- .col-* -->
      </div>

    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: `Home`,
  computed: {
    ...mapGetters({
      getCategories: 'categoryStore/getCategories',
      specialCategories: 'categoryStore/getSpecialCategories',
      normalCategories: 'categoryStore/getNormalCategories',
    }),
  },
  created() {
    if (this.getCategories.length === 0) {
        this.$store.dispatch('categoryStore/allCategories')
      }
  }
};
</script>
