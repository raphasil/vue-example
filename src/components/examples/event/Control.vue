<template>


    <md-layout class="event-example-control" md-gutter>
      <md-layout>
        <md-button class="md-icon-button md-raised md-primary" @click="onClickAdd">
          <md-icon>add</md-icon>
        </md-button>
      </md-layout>

      <md-layout>
        <md-button class="md-primary">{{message + ' - ' + total}}</md-button>
      </md-layout>

      <md-layout>
        <md-button class="md-icon-button md-raised md-warn" @click="onClickRemove">
          <md-icon>remove</md-icon>
        </md-button>
      </md-layout>

    </md-layout>


</template>

<script>
export default {
  name: 'event-example-control',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      total: 0
    }
  },
  methods: {
    onClickAdd () {
      this.total++
      this.$emit('click:add')
    },
    onClickRemove () {
      this.total--
      this.$emit('click:remove')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
