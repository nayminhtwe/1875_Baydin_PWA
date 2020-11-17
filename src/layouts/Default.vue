<template>
    <div id="canvas">
        <div id="box_wrapper">
            <main-header/>
            <main class="LayoutDefault__main">
                <slot/>
            </main>
            <main-footer/>
        </div>
    </div>
</template>

<script>
    import MainHeader from '@/components/core/blocks/Header/Header.vue'
    import MainFooter from '@/components/core/blocks/Footer/Footer.vue'

    export default {
        name: `LayoutDefault`,
        data() {
            return {
                user: null,
            };
        },
        created() {
            // Simulate fetching user data.
            setTimeout(() => {
                this.user = {name: `John Doe`};
            }, 2000);
        },
        components: {
            MainHeader,
            MainFooter
        }
    };
</script>

<style lang="scss">
    /*.LayoutDefault {*/
    /*max-width: 42em;*/
    /*margin-right: auto;*/
    /*margin-left: auto;*/
    /*padding-right: 1em;*/
    /*padding-left: 1em;*/

    /*&__nav {*/
    /*padding-top: 1em;*/
    /*padding-bottom: 1em;*/
    /*border-bottom: 1px solid #c0c0c0;*/
    /*}*/

    /*&__user {*/
    /*float: right;*/
    /*}*/

    /*&__main {*/
    /*padding-top: 1.5em;*/
    /*padding-bottom: 2em;*/
    /*}*/

    /*&__footer {*/
    /*padding-top: 1em;*/
    /*padding-bottom: 1em;*/
    /*border-top: 1px solid #c0c0c0;*/
    /*}*/
    /*}*/
</style>
<style lang="css" src="@/css/bootstrap.min.css"></style>
<!--<style lang="css" src="@/css/animations.css"></style>-->
<style lang="css" src="@/css/font-awesome.css"></style>
<style lang="css" src="@/css/icomoon.css"></style>
<style lang="css" src="@/css/main.css"></style>

