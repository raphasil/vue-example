<template>
  <div class="home">

    <c-header :user='user' @click:menu="toogleSidenav"></c-header>

    <md-layout md-gutter md-align="center" class="home-body">
      <router-view></router-view>
    </md-layout>

    <c-sidenav :user='user' ref="sidenav"></c-sidenav>

  </div>
</template>

<script>

import HeaderView from './Header.vue'
import SidenavView from './Sidenav.vue'

import RandomUserServices from '@/services/randomUserServices'

const randomUserServices = new RandomUserServices()

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {}
    }
  },
  components: {
    'c-header': HeaderView,
    'c-sidenav': SidenavView
  },
  methods: {
    initialize () {
      randomUserServices.getOne()
        .then(res => {
          this.user = res
          this.$refs.sidenav.$forceUpdate()
          console.log('receive', this.user)
        }).catch(e => {
          console.error('app randomUserServices getOne', e)
        })
    },
    toogleSidenav () {
      this.$refs.sidenav.toggle()
    }
  },
  created () {
    console.log('home - created')
    this.initialize()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home-body {
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: scroll;
  max-height: 600px;
  display: block;
}

</style>
