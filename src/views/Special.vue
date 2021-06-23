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
                    action="https://chatbothoro.blueplanet.com.mm/lovebaydin"
                    method="post"
                    role="form"
                    style="display: block;"
                    v-if="getCurrentCategory.id === 275"
                  >
                    <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3>
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
                        required
                      />
                    </label>
                    <label class="form-group mm-font">
                      <span class="mm-font __mm">မွေးနေ့</span>
                      <select
                        name="g_birth_day"
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
                        type="text"
                        class="form-control"
                        name="g_birth_date"
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
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့</span>
                      <select
                        name="b_birth_day"
                        class="mm-font __mm"
                        required
                      >
                        <option
                          value="တနင်္ဂနွေ"
                          class="mm-font __mm"
                        >တနင်္ဂနွေ</option>
                        <option
                          value="တနင်္လာ"
                          class="mm-font __mm"
                        >တနင်္လာ</option>
                        <option
                          value="အင်္ဂါ"
                          class="mm-font __mm"
                        >အင်္ဂါ</option>
                        <option
                          value="ဗုဒ္ဓဟူး"
                          class="__mm"
                        >ဗုဒ္ဓဟူး</option>
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
                        type="text"
                        class="form-control"
                        name="b_birth_date"
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
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click="precreate()"
                        type="submit"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>
                  <form
                    id="child-form"
                    action="https://chatbothoro.blueplanet.com.mm/horo/child/naming/create"
                    method="post"
                    role="form"
                    style="display: block;"
                    v-if="getCurrentCategory.id === 11"
                  >
                    <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3>
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့(30.11.2004)</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးချိန်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_time"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">ဖခင်အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="father_name"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မိခင်အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="mother_name"
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
                        required
                      />
                    </label>
                    <p class="mm-font __mm">မှတ်ချက်။ ။ မိမိပေးလိုသော နေ့နံများကိုလည်းပြောပြပေးပါရန်။</p>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေ့နံ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="nyih_nan"
                        required
                      />
                    </label>

                    <input
                      type="radio"
                      name="gender"
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
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click="precreate()"
                        type="submit"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>
                  <form
                    action="https://chatbothoro.blueplanet.com.mm/horo/business/naming/create"
                    method="post"
                    id="business-form"
                    role="form"
                    v-if="getCurrentCategory.id === 267"
                  >
                    <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3>
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
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့ (30.11.2004)</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">လုပ်ကိုင်မည့်လုပ်ငန်း</span>
                      <input
                        type="text"
                        class="form-control"
                        name="business_type"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">လုပ်ငန်းလိပ်စာ</span>
                      <input
                        type="text"
                        class="form-control"
                        name="address"
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
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span
                        for
                        class="mm-font __mm"
                      >နေ့သား(လုပ်ငန်းရှင်)</span>
                      <input
                        type="text"
                        class="form-control"
                        name="nyih_tha"
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click="precreate()"
                        type="submit"
                        class="woocommerce-Button button mm-font __mm"
                        name="save_account_details"
                        value="အတည်ပြုမည်"
                      />
                    </p>
                  </form>
                  <form
                    id="child-form"
                    action="https://chatbothoro.blueplanet.com.mm/horo/one/year/create"
                    method="post"
                    role="form"
                    style="display: block;"
                    v-if="getCurrentCategory.id === 10"
                  >

                    <h3
                      class="mm-font __mm"
                      align="center"
                    >{{ getCurrentCategory.title }}</h3>
                    <p
                      class="mm-font __mm"
                      align="center"
                    >အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးနေ့(30.11.2004)</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_date"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးချိန်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="birth_time"
                        required
                      />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">အမည်</span>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
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
                        required
                      />
                    </label>
                    <input
                      type="radio"
                      name="marital_status"
                      value="1"
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
                      <input
                        type="text"
                        class="form-control"
                        name="nyih_nan"
                        required
                      />
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
                        required
                      />
                    </label>
                    <p>
                      <input
                        @click.prevent="precreate()"
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
import { HTTP } from "@core/lib/http-common";

export default {
  name: `Special`,
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory"
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
      HTTP.post("subscription/precreate", {
        'category_id': this.getCurrentCategory.id,
        'amount': this.getCurrentCategory.price
      }).then((response) => {
        console.log(response)
      });
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
