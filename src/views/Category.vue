<template>
  <section class="ds s-pt-50 s-pb-20 s-pt-xl-60 s-pb-xl-40 c-gutter-60 c-mb-30">
    <div class="container">
      <div class="row">
        <div
          class="col-12"
          v-if="category == 'oneyear'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/oneyear.png'
                alt="img"
                @click="$router.push({ name: 'special', params: { categoryId: 10 }})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                တစ်နှစ်စာဟောစာတမ်း
              </p>
              <p id="desc">
                တစ်နှစ်စာအထူးဟောစာတမ်းအတွက် ဉာဏ်ပူဇော်ခ ၄၅၀၀ ကျပ်ကျသင့်ပါမည်။
              </p>

              <span
                id="btn-oneyear"
                @click="$router.push({ name: 'special', params: { categoryId: 10 }})"
              >
                မေးမည်
              </span>

            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'clairvoyance'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/clairvoyance.png'
                alt="img"
                @click="$router.push({ name: 'star', params: { categoryName: 'clairvoyance' }})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                အကြားအမြင်ဟောစာတမ်း
              </p>
              <p id="desc">
                ရှမ်းပုဂ္ဂိုလ်ဓာတ်စီး ဆရာမငုဝါရဲ့ အကြားအမြင်အဟောကို မေးမြန်းမည်ဆိုပါက ဉာဏ်ပူဇော်ခ ၁၀,၀၀၀ ကျပ် ကျသင့်ပါမည်။
                အချစ်ရေး၊အိမ်ထောင်ရေး၊စီးပွားရေး၊အလုပ်အကိုင်၊
                ငွေရေးကြေးရေး၊ကျန်းမာရေး၊လူမှုရေး အဟောများကို မေးမြန်းနိုင်ပါသည်။
              </p>
              <span
                id="btn-clairvoyance"
                @click="$router.push({ name: 'star', params: { categoryName: 'clairvoyance' }})"
              >
                မေးမည်
              </span>
            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'free'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/free.png'
                alt="img"
                @click="$router.push({ name: 'free'})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                အခမဲ့
                (နေ့စဉ်၊အပတ်စဉ်၊လစဉ်)
              </p>
              <p id="desc">
                အချစ်ဗေဒင်၊ အကျိုးပေးဂဏန်း၊ လစဉ်အဟောများကို အခမဲ့ရယူနိုင်ပါသည်။
              </p>
              <span
                id="btn-free"
                @click="$router.push({ name: 'free'})"
              >မေးမည်</span>
            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'chiromancy'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/chiromancy.png'
                alt="img"
                @click="$router.push({ name: 'star', params: { categoryName: 'chiromancy' }})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                လက္ခဏာဗေဒင်
              </p>
              <p id="desc">
                ဆရာရဲရန်အောင် (လက္ခဏာဗေဒပညာရှင်) ရဲ့
                လက္ခဏာဗေဒင် မေးမြန်းမည်ဆိုပါက ဉာဏ်ပူဇော်ခ ၅၀၀၀ - ၆၅၀၀ ကျပ် ကျသင့်ပါမည်။
                <br /><br />

                လူမှုရေး၊စီးပွားရေး၊အိမ်ထောင်ရေး၊အချစ်ရေး၊
                ငွေရေးကြေးရေး၊ပညာရေး၊ကျန်းမာရေး၊ထီကံများ မေးမြန်းနိုင်ပါသည်။
              </p>

              <span
                id="btn-chiromancy"
                @click="$router.push({ name: 'star', params: { categoryName: 'chiromancy' }})"
              >
                မေးမည်
              </span>

            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'child'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/child.png'
                alt="img"
                @click="$router.push({ name: 'special', params: { categoryId: 11 }})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                ကလေးအမည်ပေး
              </p>
              <p id="desc">
                ကလေးအမည်ပေးအတွက် ဉာဏ်ပူဇော်ခ ၄၅၀၀ ကျပ်ကျသင့်ပါမည်။
              </p>

              <span
                id="btn-child"
                @click="$router.push({ name: 'special', params: { categoryId: 11 }})"
              >
                မေးမည်
              </span>
            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'love'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/love.png'
                alt="img"
                @click="$router.push({ name: 'special', params: { categoryId: 275 }})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                အချစ်ဇာတာ
              </p>
              <p id="desc">
                အချစ်ဇာတာဟောစာတမ်းအတွက် အမျိုးသားနှင့်အမျိုးသမီး၏ အမည်၊မွေးနေ့၊မွေးသက္ကရာဇ်၊နေရပ်လိပ်စာ၊
                ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် ထည့်သွင်းရန်လိုအပ်ပါသည်။
                အချစ်ဇာတာဟောစာတမ်းအတွက် ဉာဏ်ပူဇော်ခ ၄၅၀၀ ကျပ်ကျသင့်ပါမည်။
              </p>

              <span
                id="btn-love"
                @click="$router.push({ name: 'special', params: { categoryId: 275 }})"
              >
                မေးမည်
              </span>

            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'phone'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/phone.png'
                alt="img"
                @click="$router.push({ name: 'phone'})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                ဖုန်းဖြင့်တိုက်ရိုက်ဗေဒင်မေးမည်
              </p>
              <p id="desc">
                ဗေဒင်ဆရာများဖြင့် ဖုန်းခေါ်ဆို၍ တိုက်ရိုက်မေးမြန်းလိုပါက ဉာဏ်ပူဇော်ခ ၅၀၀၀ ကျပ်ကျသင့်မည်ဖြစ်ပါသည်။
              </p>

              <span
                id="btn-phone"
                @click="$router.push({ name: 'phone'})"
              >
                မေးမည်
              </span>

            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'direct'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/direct.png'
                alt="img"
                @click="$router.push({ name: 'direct'})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                ဗေဒင်ဆရာနှင့်တိုက်ရိုက်မေးမည်
              </p>
              <p id="desc">
                အချစ်ရေး၊အိမ်ထောင်ရေး၊ကျန်းမာရေး၊ကိုယ်ပိုင်စီးပွားရေး၊အလုပ်အကိုင်၊ပညာရေး၊ငွေရေးကြေးရေး၊ထီပေါက်ကိန်း၊လူမှုရေး၊ အထွေထွေ အဟောများ မေးမြန်းလိုပါက ဉာဏ်ပူဇော်ခ ၁၅၀၀ - ၂၀၀၀ ကျပ် ကျသင့်မည်ဖြစ်ပါသည်။
              </p>

              <span
                id="btn-direct"
                @click="$router.push({ name: 'direct'})"
              >
                မေးမည်
              </span>

            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'business'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/business.png'
                alt="img"
                @click="$router.push({ name: 'special', params: { categoryId: 267 }})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                လုပ်ငန်းအမည်ပေး
              </p>
              <p id="desc">
                လုပ်ငန်းအမည်ပေးအတွက် ဉာဏ်ပူဇော်ခ ၄၅၀၀ ကျပ်ကျသင့်ပါမည်။
              </p>

              <span
                id="btn-business"
                @click="$router.push({ name: 'special', params: { categoryId: 267 }})"
              >မေးမည်</span>
            </div>
          </div>
        </div><!-- .col-* -->
        <div
          class="col-12"
          v-if="category == 'orders'"
        >
          <div class="vertical-item text-center service-layout-1 box-shadow  content-padding">
            <div class="item-media">
              <img
                src='@/images/category/orders.png'
                alt="img"
                @click="$router.push({ name: 'orders'})"
              >
            </div>
            <div
              class="item-content"
              id="content"
            >
              <p
                class="mt-0 links-maincolor2"
                id="head"
              >
                အဖြေများ
              </p>
              <p id="desc">
                သင် ၃လအတွင်းမေးထားခဲ့ဖူးသောဟောစာတမ်းများ
              </p>

              <span
                id="btn-orders"
                @click="$router.push({ name: 'orders'})"
              >ကြည့်မည်</span>
            </div>
          </div>
        </div><!-- .col-* -->

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: `Category`,
  data () {
    return {
      category: this.$route.params.categoryName
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
#content {
  padding: 15px;
}
#desc {
  font-weight: normal;
}

#head {
  font-size: 18px;
}

#btn-oneyear {
  background-color: #46892f;
  border-color: #46892f;
  padding: 8px 16px;
  display: inline-block;
}
#btn-clairvoyance {
  background-color: #ff8f00;
  border-color: #ff8f00;
  padding: 8px 16px;
  display: inline-block;
}
#btn-free {
  background-color: #fe61db;
  border-color: #fe61db;
  padding: 8px 16px;
  display: inline-block;
}
#btn-chiromancy {
  background-color: #925fff;
  border-color: #925fff;
  padding: 8px 16px;
  display: inline-block;
}
#btn-child {
  background-color: #767676;
  border-color: #767676;
  padding: 8px 16px;
  display: inline-block;
}
#btn-love {
  background-color: #ff4f4f;
  border-color: #ff4f4f;
  padding: 8px 16px;
  display: inline-block;
}
#btn-phone {
  background-color: #f49893;
  border-color: #f49893;
  padding: 8px 16px;
  display: inline-block;
}
#btn-direct {
  background-color: #6bb2ff;
  border-color: #6bb2ff;
  padding: 12px 30px;
  display: inline-block;
}
#btn-business {
  background-color: #ff4f4f;
  border-color: #ff4f4f;
  padding: 12px 30px;
  display: inline-block;
}
#btn-orders {
  background-color: #d117c5;
  border-color: #d117c5;
  padding: 12px 30px;
  display: inline-block;
}
</style>
