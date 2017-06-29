<template>
  <div class="header">

    <md-whiteframe md-tag="md-toolbar" md-elevation="2" >
      <md-button class="md-icon-button" @click="onClickMenu">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">{{ $route.meta.title }}</h2>

      <span style="flex: 1"></span>

      <h2 class="md-title">{{ 'user: ' + manager.user.username }}</h2>

    </md-whiteframe>

  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    user: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClickMenu () {
      this.$emit('click:menu')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
