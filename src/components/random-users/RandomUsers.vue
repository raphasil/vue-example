<template>
  <div class="random-users">
  
    <h1> {{msg}} </h1>
  
  </div>
</template>

<script>

import RandomUserServices from '@/services/randomUserServices'

const randomUserServices = new RandomUserServices()

export default {
  name: 'random-users',
  data () {
    return {
      msg: 'Random Users'
    }
  },
  methods: {
    initialize () {
      randomUserServices.getOne()
        .then(res => {
          console.log('randomUserServices getOne', res)
        }).catch(e => {
          console.error('randomUserServices getOne', e)
        })
    }
  },
  beforeCreate () {
    console.log('RandomUsers - beforeCreate')
  },
  created () {
    console.log('RandomUsers - created')
    this.initialize()
  },
  beforeMount () {
    console.log('RandomUsers - beforeMount')
  },
  mounted () {
    console.log('RandomUsers - mounted')
  },
  beforeUpdate () {
    console.log('RandomUsers - beforeUpdate')
  },
  updated () {
    console.log('RandomUsers - updated')
  },
  beforeDestroy () {
    console.log('RandomUsers - beforeDestroy')
  },
  destroyed () {
    console.log('RandomUsers - destroyed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
