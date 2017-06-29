<template>
  <div class="loop-example">

    <md-input-container>
      <label>Count</label>
      <md-input v-model="count" type="number"></md-input>
    </md-input-container>

    <c-list :users="users"></c-list>

  </div>
</template>

<script>

import ListView from './List.vue'

import RandomUserServices from '@/services/randomUserServices'

const randomUserServices = new RandomUserServices()

export default {
  name: 'loop-example',
  components: {
    'c-list': ListView
  },
  data () {
    return {
      count: 1,
      users: []
    }
  },
  watch: {
    count: function (val, oldVal) {
      if (val) {
        this.updateUser(val)
      }
    }
  },
  methods: {
    updateUser (size) {
      randomUserServices.getMany(size)
        .then(res => {
          this.users = res
          console.log('receive', this.users)
        }).catch(e => {
          console.error('app randomUserServices getMany', e)
        })
    }
  },
  beforeCreate () {
    console.log('loop-example - beforeCreate')
  },
  created () {
    console.log('loop-example - created')
    this.updateUser(this.count)
  },
  beforeMount () {
    console.log('loop-example - beforeMount')
  },
  mounted () {
    console.log('loop-example - mounted')
  },
  beforeUpdate () {
    console.log('loop-example - beforeUpdate')
  },
  updated () {
    console.log('loop-example - updated')
  },
  beforeDestroy () {
    console.log('loop-example - beforeDestroy')
  },
  destroyed () {
    console.log('loop-example - destroyed')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
