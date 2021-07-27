<template>
  <section class="ds s-py-45 s-py-xl-75 c-gutter-60">
    <!-- <section class="ds s-py-90 s-py-xl-150 c-gutter-60"> -->
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
                    v-if="getCurrentCategory.id === 275"
                  >
                    <!-- <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3> -->
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>

                    <label class="mm-font __mm">အမျိုးသမီး</label>
                    <br />
                    <br />
                    <label class="form-group">
                      <span class="mm-font __mm __mm">အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="g_name"
                        v-model="love.g_name"
                        required
                      />
                    </label>
                    <label class="form-group mm-font">
                      <span class="mm-font __mm">မွေးနေ့</span>
                      <select
                        name="g_birth_day"
                        v-model="love.g_birth_day"
                        class="mm-font __mm"
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
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးသက္ကရာဇ်(7.11.1990)</span>
                      <input
                        type="date"
                        class="form-control"
                        name="g_birth_date"
                        v-model="love.g_birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေရပ်လိပ်စာ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="g_address"
                        v-model="love.g_address"
                        required
                      />
                    </label>

                    <p style="font-size: 30px">
                      <i
                        class="fa fa-heart"
                        aria-hidden="true"
                      ></i>
                    </p>
                    <label class="mm-font __mm">အမျိုးသား</label>
                    <br />
                    <br />
                    <label class="form-group">
                      <span class="mm-font __mm">အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="b_name"
                        v-model="love.b_name"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့</span>
                      <select
                        name="b_birth_day"
                        v-model="love.b_birth_day"
                        class="mm-font __mm"
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
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးသက္ကရာဇ်(5.12.1990)</span>
                      <input
                        type="date"
                        class="form-control"
                        name="b_birth_date"
                        v-model="love.b_birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေရပ်လိပ်စာ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="b_address"
                        v-model="love.b_address"
                        required
                      />
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
                        v-model="love.phone_number"
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click.prevent="precreate()"
                        :disabled="disabled"
                        type="submit"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>
                  <form
                    id="child-form"
                    role="form"
                    style="display: block;"
                    v-if="getCurrentCategory.id === 11"
                  >
                    <!-- <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3> -->
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့(30.11.2004)</span>
                      <input
                        type="date"
                        class="form-control"
                        name="birth_date"
                        v-model="child.birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးချိန်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_time"
                        v-model="child.birth_time"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">ဖခင်အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="father_name"
                        v-model="child.father_name"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မိခင်အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="mother_name"
                        v-model="child.mother_name"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >မွေးရပ်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_place"
                        v-model="child.birth_place"
                        required
                      />
                    </label>
                    <p class="mm-font __mm">မှတ်ချက်။ ။ မိမိပေးလိုသော နေ့နံများကိုလည်းပြောပြပေးပါရန်။</p>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေ့နံ</span>
                      <select
                        class="form-control"
                        name="nyih_nan"
                        v-model="child.nyih_nan"
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
                      name="gender"
                      v-model="child.gender"
                      value="0"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >ယောကျ်ားလေး</span>
                    <input
                      type="radio"
                      name="gender"
                      v-model="child.gender"
                      value="1"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >မိန်းကလေး</span>
                    <br />
                    <br />

                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="phone_number"
                        v-model="child.phone_number"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေရပ်လိပ်စာ (မြို့နယ်)</span>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        v-model="child.address"
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click.prevent="precreate()"
                        :disabled="disabled"
                        type="submit"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>
                  <form
                    id="business-form"
                    role="form"
                    v-if="getCurrentCategory.id === 267"
                  >
                    <!-- <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3> -->
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">လုပ်ငန်းရှင်အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="owner_name"
                        v-model="business.owner_name"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့ (30.11.2004)</span>
                      <input
                        type="date"
                        class="form-control"
                        name="birth_date"
                        v-model="business.birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">လုပ်ကိုင်မည့်လုပ်ငန်း</span>
                      <input
                        type="text"
                        class="form-control"
                        name="business_type"
                        v-model="business.business_type"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">လုပ်ငန်းလိပ်စာ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        v-model="business.address"
                        required
                      />
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
                        v-model="business.phone_number"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေ့သား(လုပ်ငန်းရှင်)</span>
                      <select
                        class="form-control"
                        name="nyih_tha"
                        v-model="business.nyih_tha"
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
                    <p>
                      <input
                        @click.prevent="precreate()"
                        :disabled="disabled"
                        type="submit"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>
                  <form
                    id="child-form"
                    role="form"
                    style="display: block;"
                    v-if="getCurrentCategory.id === 10"
                  >

                    <!-- <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3> -->
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့(30.11.2004)</span>
                      <input
                        type="date"
                        class="form-control"
                        name="birth_date"
                        v-model="oneyear.birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးချိန်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_time"
                        v-model="oneyear.birth_time"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        v-model="oneyear.name"
                        required
                      />
                    </label>

                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >မွေးရပ်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_place"
                        v-model="oneyear.birth_place"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >အလုပ်အကိုင်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="career"
                        v-model="oneyear.career"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေရပ်လိပ်စာ (မြို့နယ်)</span>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
                        v-model="oneyear.address"
                        required
                      />
                    </label>
                    <input
                      type="radio"
                      name="marital_status"
                      value="1"
                      v-model="oneyear.marital_status"
                      required
                    />
                    <span
                      for
                      class="mm-font __mm"
                    >အိမ်ထောင်ရှိ</span>
                    <input
                      type="radio"
                      name="marital_status"
                      value="0"
                      v-model="oneyear.marital_status"
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
                      >နေ့နံ</span>
                      <select
                        name="g_birth_day"
                        v-model="oneyear.nyih_nan"
                        class="mm-font __mm"
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
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >အဓိကသိချင်သောအကြောင်းအရာ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="about"
                        v-model="oneyear.about"
                        required
                      />
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
                        v-model="oneyear.phone_number"
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click.prevent="precreate()"
                        :disabled="disabled"
                        type="submit"
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
      res_status: 0,
      message: '',
      love: {
        g_name: '',
        g_birth_day: '',
        g_birth_date: '',
        g_address: '',
        b_name: '',
        b_birth_day: '',
        b_birth_date: '',
        b_address: '',
        phone_number: '',
        order_id: '0',
        user_id: '0',
        price: '0'
      },
      child: {
        birth_date: '',
        birth_time: '',
        father_name: '',
        mother_name: '',
        birth_place: '',
        nyih_nan: '',
        order_id: '0',
        address: '',
        phone_number: '',
        gender: '',
        user_id: '0',
        price: '0'
      },
      oneyear: {
        birth_date: '',
        birth_time: '',
        birth_place: '',
        nyih_nan: '',
        career: '',
        marital_status: '',
        phone_number: '',
        order_id: '0',
        user_id: '0',
        about: '',
        address: '',
        price: '0',
      },
      business: {
        owner_name: '',
        user_id: '0',
        birth_date: '',
        business_type: '',
        phone_number: '',
        address: '',
        nyih_tha: '',
        order_id: '0',
        price: '0',

      }
    }
  },
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory",
      getUserToken: 'userStore/getUserToken',
    })
  },
  created () {
    this.$store.dispatch(
      "categoryStore/singleCategory",
      this.$route.params.categoryId
    );
  },
  methods: {
    precreate () {
      if (this.getCurrentCategory.id === 275 && checkFormModel(this.love)) {
        this.disabled = true
        HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
        HTTP.post("subscription/precreate", {
          'category_id': this.getCurrentCategory.id,
          'amount': this.getCurrentCategory.price,
          'category_name': 'love'
        }).then((response) => {
          const res = response.data
          this.love.order_id = res.order_id
          this.love.user_id = res.user_id
          this.love.price = this.getCurrentCategory.price
          let formdata = getFormData(this.love)
          Horo.post("1875/love/horoscope", formdata).then((response) => {
            this.res_status = response.data.status
            this.kbzpay.startPay(res.prepay_id, res.order_info, res.sign_app,
              () => {
                this.$swal('Success', 'Your Purchase Success', 'success');
                this.disabled = false;
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
      else if (this.getCurrentCategory.id === 11 && checkFormModel(this.child)) {
        this.disabled = true
        HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
        HTTP.post("subscription/precreate", {
          'category_id': this.getCurrentCategory.id,
          'amount': this.getCurrentCategory.price,
          'category_name': 'child'
        }).then((response) => {
          const res = response.data
          this.child.order_id = res.order_id
          this.child.user_id = res.user_id
          this.child.price = this.getCurrentCategory.price
          let formdata = getFormData(this.child)
          Horo.post("1875/childNaming/horoscope", formdata).then((response) => {
            this.res_status = response.data.status
            this.kbzpay.startPay(res.prepay_id, res.order_info, res.sign_app,
              () => {
                this.$swal('Success', 'Your Purchase Success', 'success');
                this.disabled = false;
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
      else if (this.getCurrentCategory.id === 10 && checkFormModel(this.oneyear)) {
        this.disabled = true
        HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
        HTTP.post("subscription/precreate", {
          'category_id': this.getCurrentCategory.id,
          'amount': this.getCurrentCategory.price,
          'category_name': 'oneyear'
        }).then((response) => {
          const res = response.data
          this.oneyear.order_id = res.order_id
          this.oneyear.user_id = res.user_id
          this.oneyear.price = this.getCurrentCategory.price
          let formdata = getFormData(this.oneyear)
          Horo.post("1875/oneyear/horoscope", formdata).then((response) => {
            this.res_status = response.data.status
            this.kbzpay.startPay(res.prepay_id, res.order_info, res.sign_app,
              () => {
                this.$swal('Success', 'Your Purchase Success', 'success');
                this.disabled = false;
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
      else if (this.getCurrentCategory.id === 267 && checkFormModel(this.business)) {
        this.disabled = true
        HTTP.defaults.headers.Authorization = `Bearer ${this.getUserToken}`
        HTTP.post("subscription/precreate", {
          'category_id': this.getCurrentCategory.id,
          'amount': this.getCurrentCategory.price,
          'category_name': 'business'
        }).then((response) => {
          const res = response.data
          this.business.order_id = res.order_id
          this.business.user_id = res.user_id
          this.business.price = this.getCurrentCategory.price
          let formdata = getFormData(this.business)
          Horo.post("1875/businessNaming/horoscope", formdata).then((response) => {
            this.res_status = response.data.status
            this.kbzpay.startPay(res.prepay_id, res.order_info, res.sign_app,
              () => {
                this.$swal('Success', 'Your Purchase Success', 'success');
                this.disabled = false;
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
      } else {
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
</style>
