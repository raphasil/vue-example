<template>
  <div class="example-loop-list">

    <div class="phone-viewport">
      <md-list class="custom-list md-triple-line md-dense">
        <c-list-item v-for="(item, index) in cpusers" :key="index" :user="item" :index="index"></c-list-item>
      </md-list>
    </div>

  </div>
</template>

<script>

import ListItemView from './ListItem.vue'

export default {
  name: 'example-loop-list',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  components: {
    'c-list-item': ListItemView
  },
  data () {
    return {
      cpusers: this.users
    }
  },
  watch: {
    users: function (val, oldVal) {
      this.cpusers = val
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
