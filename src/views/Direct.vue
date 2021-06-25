<template>
  <section class="ds s-py-90 s-py-xl-150 c-gutter-60">
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
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        v-model="direct.name"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးသက္ကရာဇ်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_date"
                        v-model="direct.birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">နေ့နံ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="nyih_nan"
                        v-model="direct.nyih_nan"
                        required
                      />
                    </label>
                    <input
                      type="radio"
                      name="marital_status"
                      value="Yes"
                      v-model="direct.marital_status"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >အိမ်ထောင်ရှိ</span>
                    <input
                      type="radio"
                      name="marital_status"
                      value="No"
                      v-model="direct.marital_status"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >အိမ်ထောင်မရှိ</span>
                    <br />
                    <br />
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေထိုင်သည့်မြို့</span>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        v-model="direct.address"
                        required
                      />
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      v-model="direct.gender"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >ကျား</span>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      v-model="direct.gender"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >မ</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <label class="form-group">
                      <span class="mm-font __mm">ဗေဒင်ဆရာ</span>
                      <select
                        name="baydin_sayar"
                        class="mm-font __mm"
                        v-model="direct.baydin_sayar"
                        required
                      >
                        <option
                          value=" "
                          class="mm-font __mm"
                        >ဗေဒင်ဆရာ ရွေးချယ်ပါ...</option>
                        <option
                          value="ဆရာမ သန့်ထားဆု"
                          class="mm-font __mm"
                        >ဆရာမ သန့်ထားဆု</option>
                        <option
                          value="ဆရာ မင်းသုကျော်ခေါင်"
                          class="mm-font __mm"
                        >ဆရာ မင်းသုကျော်ခေါင်</option>
                        <option
                          value="ဆရာ ကျော်ဇောဟန်"
                          class="__mm"
                        >ဆရာ ကျော်ဇောဟန်</option>
                        <option
                          value="ဆရာ မင်းသိမ်းခိုင်"
                          class="__mm"
                        >ဆရာ မင်းသိမ်းခိုင်</option>
                        <option
                          value="ဆရာမ စောလှနွယ်နီ"
                          class="__mm"
                        >ဆရာမ စောလှနွယ်နီ</option>
                        <option
                          value="ဆရာ မိုးမင်းသုခ"
                          class="__mm"
                        >ဆရာ မိုးမင်းသုခ</option>
                        <option
                          value="ဆရာမ စောယုထွေး"
                          class="__mm"
                        >ဆရာမ စောယုထွေး</option>
                        <option
                          value="ဆရာမ ယွန်းပိုးအိ"
                          class="__mm"
                        >ဆရာမ ယွန်းပိုးအိ</option>
                        <option
                          value="ဆရာမ ဝင့်ယမုံဦး"
                          class="__mm"
                        >ဆရာမ ဝင့်ယမုံဦး</option>
                      </select>
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="phone_number"
                        v-model="direct.phone_number"
                        required
                      />
                    </label>

                    <p class="mm-font __mm">မေးလိုသည့်ကဏ္ဍကို ရွေးချယ်ပါ။</p>

                    <div
                      class="container options"
                      ref="input"
                    >
                      <label
                        class="form-check-label customcheck"
                        v-for="type in types"
                        :key="type.id"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          :value="type.name"
                          name="services[]"
                          v-model="direct.services"
                          :checked="categoryName === type.name"
                          @click="toggle(type)"
                        />
                        <span class="checkmark"></span>
                        <span class="mm-font __mm">{{ type.mm_name }}</span>
                      </label>
                    </div>
                    <br />
                    <br />
                    <p class="mm-font __mm">မေးမြန်းလိုသည့်အကြာင်းအရာကိုရေးပါ။</p>
                    <label class="form-group">
                      <textarea
                        name="about"
                        class="mm-font test"
                        rows="10"
                        cols="35"
                        placeholder
                        style="color: black;"
                        v-model="direct.about"
                        required
                      ></textarea>
                    </label>

                    <p
                      class="mm-font"
                      id="price"
                    >ဉာဏ်ပူဇော်ခ {{ direct.price }}ကျပ် ဖြစ်ပါသည်။ ငွေပေးချေမှုအောင်မြင်ပြီးပါက နှစ်ရက်အတွင်း ပြန်လည်ဖြေကြားပေးပါမည်။</p>
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
import types from '@core/i18n/resource/direct_types.json'
import { mapGetters } from "vuex";
import { Horo, HTTP } from "@core/lib/http-common";
import { getFormData, checkFormModel } from "@core/lib/form-data"
export default {
  name: `Special`,
  data () {
    return {
      types: [],
      selected: {},
      disabled: false,
      direct: {
        name: '',
        birth_date: '',
        nyih_nan: '',
        address: '',
        phone_number: '',
        order_id: '0',
        gender: '',
        user_id: '0',
        services: [],
        about: '',
        baydin_sayar: '',
        marital_status: '',
        price: '0',
      }
    }
  },
  created () {
    this.types = types;
  },
  mounted () {
    for (let type of types) {
      if (type.name === this.categoryName) {
        this.selected[type.name] = true
        this.direct.services.push(this.categoryName)
        this.direct.price = type.price
      } else {
        this.selected[type.name] = false
      }

    }
  },
  computed: {
    categoryName () {
      return this.$route.params.categoryName
    },
    ...mapGetters({
      getUserToken: 'userStore/getUserToken',
    })
  },
  methods: {
    toggle (type) {
      if (!this.selected[type.name]) {
        this.direct.price += type.price
        this.direct.services.push(type.name)
      } else {
        this.direct.price -= type.price
        this.direct.services = this.direct.services.filter(item => item !== type.name)
      }
      this.selected[type.name] = !this.selected[type.name];
    },
    precreate () {
      if (checkFormModel(this.direct)) {
        this.disabled = true
        HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
        HTTP.post("subscription/precreate", {
          'category_id': 0,
          'amount': this.direct.price
        }).then((response) => {
          const res = response.data
          this.direct.order_id = res.order_id
          this.direct.user_id = res.user_id
          let formdata = getFormData(this.direct)
          Horo.post("1875/direct/horoscope", formdata).then((response) => {
            console.log(response)
            this.res_status = response.data.status
            this.kbzpay.startPay(res.prepay_id, res.order_info, res.sign_app, {}, {})
          })
        }).catch(error => {
          console.log(error)
          this.message = 'Something went wrong'
        });
      }
      else {
        alert("Plz fill all required fields")
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
