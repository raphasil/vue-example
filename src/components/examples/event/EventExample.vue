<template>
  <div class="event-example">

    <md-layout md-gutter>
      <md-layout md-column md-gutter>
        <md-layout>
          <md-rating-bar v-model="rating" :md-max-rating="max" class="md-primary" :md-empty-icon="'star_border'"></md-rating-bar>
        </md-layout>
        <md-layout md-gutter>
          <c-control :message="'rating'" ref="controlRating" @click:add="addRating" @click:remove="removeRating"> </c-control>
        </md-layout>
        <md-layout md-gutter>
          <c-control :message="'count'" ref="controlMax" @click:add="addMax" @click:remove="removeMax"> </c-control>
        </md-layout>
        <md-layout md-gutter>
          <md-button @click="onUpdate" class="md-raised md-primary">UPDATE</md-button>
        </md-layout>
      </md-layout>
    </md-layout>

  </div>
</template>

<script>

import ControlView from './Control.vue'

export default {
  name: 'event-example',
  components: {
    'c-control': ControlView
  },
  data () {
    return {
      rating: 1,
      max: 1
    }
  },
  methods: {
    addRating () {
      if (this.rating < this.max) {
        this.rating++
      }
    },
    removeRating () {
      if (this.rating > 0) {
        this.rating--
      }
    },
    addMax () {
      this.max++
    },
    removeMax () {
      if (this.max > 0 && this.max > this.rating) {
        this.max--
      }
    },
    onUpdate () {
      this.$refs.controlRating.total = this.rating
      this.$refs.controlMax.total = this.max
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
