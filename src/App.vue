<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const DefaultLayout = () => import(/* webpackChunkName: "vsf-layout-default" */ './layouts/Default')
export default {
  name: `App`,
  components: {
    DefaultLayout
  },
  computed: {
    layout () {
      return `${(this.$route.meta.layout || 'default')}-layout`
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html {
  line-height: 1.6;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

p {
  &:not(:first-child) {
    margin-top: 1.25em;
  }
}
</style>
