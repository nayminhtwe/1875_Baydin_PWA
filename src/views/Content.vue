<template>
  <section class="ds s-pt-90 s-pb-40 s-pt-xl-150 s-pb-xl-100 c-gutter-60 c-mb-50">
    <div class="container">
      <div class="row">

						<div class="col-12">
							<div class="vertical-item bg-darkblue text-center content-padding padding-big">
								<div class="item-media">
									<img src="@/images/services/img_7.jpg" alt="img">
								</div>
								<div class="item-content max-content">
									<p>
										Stet clita kasd gubergren, no takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
									</p>
									<p>
										Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Stet clita kasd gubergren, no takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
									</p>
									<p>
										Sed diam nonumy eirmod tempor invidunt. Labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
									</p>
								</div>
							</div>
							<div class="share_buttons social_part">
								<a href="https://www.facebook.com" class="color-bg-icon fa fa-facebook" target="_blank"></a>
								<a href="https://twitter.com" class="color-bg-icon fa fa-twitter" target="_blank"></a>
								<a href="https://pinterest.com" class="color-bg-icon fa fa-pinterest" target="_blank"></a>
								<a href="https://instagram.com" class="color-bg-icon fa fa-instagram" target="_blank"></a>
								<a href="https://www.youtube.com" class="color-bg-icon fa fa-youtube-play" target="_blank"></a>
							</div>
						</div><!-- .col-* -->
					</div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: `Normal`,
  computed: {
    ...mapGetters({
      getCurrentCategory: "categoryStore/getCurrentCategory"
    })
  },
  created() {
    this.$store.dispatch("categoryStore/singleCategory", this.$route.params.categoryId);
  }
};
</script>
