<template>
  <section class="ds s-py-45 s-py-xl-75 c-gutter-60">
    <div class="container">
      <div class="row">
        <main class="col-lg-12">
          <article>
            <!-- <header class="entry-header">
              <h1 class="entry-title">{{ getCurrentCategory.subtitle }}</h1>
            </header>-->
            <!-- .entry-header -->
            <div class="entry-content">
              <div class="woocommerce">
                <div class="woocommerce-MyAccount-content">
                  <form
                    id="child-form"
                    role="form"
                    style="display: block;"
                  >
                    <p class="mm-font">အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font">အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        v-model="star.name"
                        required
                      >
                    </label>
                    <label class="form-group">
                      <span class="mm-font">မွေးသက္ကရာဇ်(ရက်/လ/နှစ်)</span>
                      <input
                        type="date"
                        class="form-control"
                        name="birth_date"
                        v-model="star.birth_date"
                        required
                      >
                    </label>
                    <label class="form-group">
                      <span class="mm-font">နေ့နံ</span>
                      <select
                        class="form-control"
                        name="nyih_nan"
                        v-model="star.nyih_nan"
                        required
                      >
                        <option
                          value="တနင်္ဂနွေ"
                          class="__mm"
                        >တနင်္ဂနွေ</option>
                        <option
                          value="တနင်္လာ"
                          class="__mm"
                        >တနင်္လာ</option>
                        <option
                          value="အင်္ဂါ"
                          class="__mm"
                        >အင်္ဂါ</option>
                        <option
                          value="ဗုဒ္ဓဟူး"
                          class="__mm"
                        >ဗုဒ္ဓဟူး</option>
                        <option
                          value="ရာဟု"
                          class="__mm"
                        >ရာဟု</option>

                        <option
                          value="ကြာသပတေး"
                          class="__mm"
                        >ကြာသပတေး</option>
                        <option
                          value="သောကြာ"
                          class="__mm"
                        >သောကြာ</option>
                        <option
                          value="စနေ"
                          class="__mm"
                        >စနေ</option>
                      </select>
                    </label>
                    <input
                      type="radio"
                      name="marital_status"
                      value="Yes"
                      v-model="star.marital_status"
                      required
                    > <span
                      for=""
                      class="mm-font"
                    > အိမ်ထောင်ရှိ </span>
                    <input
                      type="radio"
                      name="marital_status"
                      value="No"
                      v-model="star.marital_status"
                      required
                    > <span
                      for=""
                      class="mm-font"
                    > အိမ်ထောင်မရှိ </span>
                    <br>
                    <br>
                    <br>
                    <label class="form-group">
                      <span
                        for=""
                        class="mm-font"
                      >အလုပ်အကိုင်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="job"
                        v-model="star.job"
                        required
                      >
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="ကျား"
                      v-model="star.gender"
                      required
                    > <span
                      for=""
                      class="mm-font"
                    >ကျား</span>
                    <input
                      type="radio"
                      name="gender"
                      value="မ"
                      required
                      v-model="star.gender"
                    > <span
                      for=""
                      class="mm-font"
                    > မ </span>
                    <br>
                    <p class="mm-font">မေးမြန်းလိုသည့်အကြာင်းအရာကိုရေးပါ။</p>
                    <label class="form-group">
                      <textarea
                        name="about"
                        v-model="star.about"
                        class="mm-font test"
                        rows="10"
                        cols="35"
                        placeholder=""
                        style="color: black;"
                        required
                      ></textarea>
                    </label>
                    <label class="form-group">
                      <span
                        for=""
                        class="mm-font"
                      > Viber အသုံးပြုသော ဖုန်းနံပါတ်အားထည့်ပါ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="phone_number"
                        v-model="star.phone_number"
                        required
                      >
                    </label>
                    <p>
                      <input
                        type="submit"
                        @click.prevent="precreate()"
                        :disabled="disabled"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>

                </div>
              </div>
            </div>
            <!-- .entry-content -->
          </article>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Horo, HTTP } from "@core/lib/http-common";
import { getFormData, checkFormModel } from "@core/lib/form-data"
export default {
  name: `Special`,
  data () {
    return {
      disabled: false,
      star: {
        name: '',
        birth_date: '',
        nyih_nan: '',
        phone_number: '',
        order_id: '0',
        gender: '',
        user_id: '0',
        job: '',
        about: '',
        baydin_sayar: '',
        marital_status: '',
        price: 0,
      }
    }
  },
  mounted () {
    if (this.categoryName == 'chiromancy') {
      this.star.price = 5000
      this.star.baydin_sayar = 'ဆရာ ရဲရန်အောင်'
    }
    if (this.categoryName == 'clairvoyance') {
      this.star.price = 10000
      this.star.baydin_sayar = 'ရှမ်းပုဂ္ဂိုလ်ဓါတ်စီး ဆရာမ ငုဝါ'
    }
  },
  computed: {
    categoryName () {
      return this.$route.params.categoryName
    },
    ...mapGetters({
      getUserToken: 'userStore/getUserToken',
      getResponse: 'userStore/getResponse',
    })
  },
  methods: {
    precreate () {
      if (checkFormModel(this.star)) {
        this.disabled = true
        HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
        HTTP.post("subscription/precreate", {
          'category_id': 0,
          'amount': this.star.price,
          'category_name': this.categoryName
        }).then((response) => {
          const res = response.data
          this.star.order_id = res.order_id
          this.star.user_id = res.user_id
          let formdata = getFormData(this.star)
          formdata.append('user_phone', this.getResponse.customer_info.msisdn)
          Horo.post("1875/starbaydin/horoscope", formdata).then((response) => {
            this.res_status = response.data.status
            this.kbzpay.startPay(res.prepay_id, res.order_info, res.sign_app,
              ({ resultCode, lang }) => {
                if (resultCode == 1) {
                  if (lang == 'en') {
                    this.$swal('Success', 'Your Purchase Success', 'success');
                    this.$router.push({ name: 'home' })
                  }
                  if (lang == 'my') {
                    this.$swal('အောင်မြင်ပါသည်', 'ဝယ်ယူပြီးပါပြီ', 'success');
                    this.$router.push({ name: 'home' })
                  }
                }
                if (resultCode == 2) {
                  if (lang == 'en') {
                    this.$swal('Failed', 'Your Purchase Failed', 'error');
                    this.disabled = false;
                  }
                  if (lang == 'my') {
                    this.$swal('မအောင်မြင်ပါ', 'ထပ်မံကြိုးစားပေးပါ', 'error');
                    this.disabled = false;
                  }
                }


              },
              () => {
                this.$swal('Failed', 'Your Purchase Failed', 'error');
                this.disabled = false;
              })
          })
        }).catch(error => {
          console.log(error)
          this.message = 'Something went wrong'
        });
      }
      else {
        this.$swal('Oops', 'You need to fill all fields', 'error');
      }


    }
  }
};
</script>

<style scoped>
input[type="radio"] {
  display: inline;
  margin-top: 8px;
  margin-left: 3px;
}
input[type="checkbox"] {
  display: inline;
  margin-top: 8px;
}

label {
  display: block;
}
</style>
