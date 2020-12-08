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
                    action="https://chatbothoro.blueplanet.com.mm/baydin_sayar/baydin"
                    method="post"
                    role="form"
                    style="display: block;"
                  >
                    
                    <p class="mm-font __mm">အောက်ပါပေးထားသော Form အချက်အလက်များကို ဖြည့်ပေးပါ</p>
                    <label class="form-group">
                      <span class="mm-font __mm">အမည်</span>
                      <input type="text" class="form-control" name="name" required />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">မွေးသက္ကရာဇ်</span>
                      <input type="text" class="form-control" name="birth_date" required />
                    </label>
                    <label class="form-group">
                      <span class="mm-font __mm">နေ့နံ</span>
                      <input type="text" class="form-control" name="nyih_nan" required />
                    </label>
                    <input type="radio" name="marital_status" value="Yes" required />
                    <span for class="mm-font __mm">အိမ်ထောင်ရှိ</span>
                    <input type="radio" name="marital_status" value="No" required />
                    <span for class="mm-font __mm">အိမ်ထောင်မရှိ</span>
                    <br />
                    <br />
                    <label class="form-group">
                      <span for class="mm-font __mm">နေထိုင်သည့်မြို့</span>
                      <input type="text" class="form-control" name="address" required />
                    </label>
                    <input type="radio" name="gender" value="ကျား" required />
                    <span for class="mm-font __mm">ကျား</span>
                    <input type="radio" name="gender" value="မ" required />
                    <span for class="mm-font __mm">မ</span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <label class="form-group">
                      <span for class="mm-font __mm">ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်</span>
                      <input type="text" class="form-control" name="phone_number" required />
                    </label>

                    <br />
                    <br />

                    <label class="form-group">
                      <h4
                        class="mm-font __mm"
                        style="color: white;font-size: 15px;"
                      >ဗေဒင်ဆရာ/မ များမှ ဖုန်းခေါ်ဆို ပေးစေချင်သောအချိန်</h4>
                      <h5
                        class="mm-font __mm"
                        style="color: white"
                      >တနင်္လာ မှ စနေထိ၊မနက် ၉နာရီ မှ ညနေ ၅နာရီအတွင်းသာ</h5>
                      <input type="text" class="form-control mm-font" name="call_time" />
                    </label>

                    <br />
                    <br />
                    <p class="mm-font" id="call_service"></p>
                    <p class="mm-font __mm">မေးမြန်းလိုသည့်အကြာင်းအရာကိုရေးပါ။</p>
                    <label class="form-group">
                      <textarea
                        name="about"
                        class="mm-font test"
                        rows="10"
                        cols="35"
                        placeholder
                        style="color: black;"
                        required
                      ></textarea>
                    </label>

                    <label class="form-group">
                      <span class="mm-font __mm">ဗေဒင်ဆရာ</span>
                      <select name="baydin_sayar" class="mm-font __mm" required>
                        <option value=" " class=" mm-font __mm">ဗေဒင်ဆရာ ရွေးချယ်ပါ...</option>
                        <option value="ဆရာမ သန့်ထားဆု" class="mm-font __mm">ဆရာမ သန့်ထားဆု</option>
                        <option
                          value="ဆရာ မင်းသုကျော်ခေါင်"
                          class="mm-font __mm"
                        >ဆရာ မင်းသုကျော်ခေါင်</option>
                        <option value="ဆရာ ကျော်ဇောဟန်" class="__mm">ဆရာ ကျော်ဇောဟန်</option>
                        <option value="ဆရာ မင်းသိမ်းခိုင်" class="__mm">ဆရာ မင်းသိမ်းခိုင်</option>
                        <option value="ဆရာမ စောလှနွယ်နီ" class="__mm">ဆရာမ စောလှနွယ်နီ</option>
                        <option value="ဆရာ မိုးမင်းသုခ" class="__mm">ဆရာ မိုးမင်းသုခ</option>
                        <option value="ဆရာမ စောယုထွေး" class="__mm">ဆရာမ စောယုထွေး</option>
                        <option value="ဆရာမ ယွန်းပိုးအိ" class="__mm">ဆရာမ ယွန်းပိုးအိ</option>
                        <option value="ဆရာမ ဝင့်ယမုံဦး" class="__mm">ဆရာမ ဝင့်ယမုံဦး</option>
                      </select>
                    </label>

                    <!-- <p class="mm-font"></p>
                    <h2 class="text-center __mm">ဗေဒင်ဆရာများ</h2>
                    <p></p>

                    <div class="feature">
                      <figure
                        class="featured-item image-holder r-3-2 transition"
                        style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/HquaoE4zf0CpyGciDKk7m2JWzYR1Y9Rh0SXu3y2f.jpeg&quot;);"
                      ></figure>
                    </div>

                    <div class="gallery-wrapper">
                      <div class="gallery">
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 active transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/HquaoE4zf0CpyGciDKk7m2JWzYR1Y9Rh0SXu3y2f.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/QwGFOX5UMFViMPGMqLO01ctjd7TPZXSUxiud0fOi.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/jtJJrzwGwJK4hEKCEULxWS2JhmbW8X6JHSAj9mdf.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/1dfvLNMQn0eO9KA6sYlrmT7mMb2lBIGKzJUmNBGq.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/bqT3PnK3tJ7Xn1JWylN2ZEUnrQkNWKlfKh3bV0bC.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/g1UFtmxAzcMJeRxyaUM8V0VRzhQUAQ6KzfJHWQaG.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/HPZTllBvWKhA2tvfJMbd4zhZHv3cOzTi0L6oji9n.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/d9qxmZ8QaUtamRxc57pWAtRRGckKYKtvRRuZkMZv.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;https://s3.ap-southeast-1.amazonaws.com/assets.myclip.com/smart/BaZhNOTgtAzi6SVdg25WUqigHNShv75XWDuLU5TP.jpeg&quot;);"
                          ></figure>
                        </div>
                        <div class="item-wrapper">
                          <figure
                            class="gallery-item image-holder r-3-2 transition"
                            style="background-image: url(&quot;undefined&quot;);"
                          ></figure>
                        </div>
                      </div>
                    </div>

                    <div class="controls">
                      <a class="move-btn left" style="font-size: 30px">←</a>
                      <a class="move-btn right" style="font-size: 30px">→</a>
                    </div> -->

                    <p>
                      <input
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
export default {
  name: `Special`
};
</script>

<style scoped>
input[type="radio"] {
  display: inline;
  margin-top: 8px;
  margin-left: 3px;
}
</style>
