<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'app',
  data () {
    return {}
  },
  methods: {},
  created () {
    console.log('App - created')
  }
}
</script>

<style>

html, body, .login {
  height: 100%;
}

</style>
