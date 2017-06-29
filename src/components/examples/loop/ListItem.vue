<template>
  <md-list-item class="example-loop-list-item">

    <md-avatar>
      <img :src="picture()" :alt="name()">
    </md-avatar>

    <div class="md-list-text-container">
      <span>{{name()}}</span>
      <span>{{email()}}</span>
      <p>{{address()}}</p>
    </div>

    <!--
    <md-button class="md-icon-button md-list-action">
      <md-icon>star_border</md-icon>
    </md-button>
    -->

    <md-rating-bar v-model="rating" :md-max-rating="3" class="md-primary md-list-action" :md-empty-icon="'star_border'"></md-rating-bar>

    <md-divider class="md-inset"></md-divider>

  </md-list-item>
</template>

<script>
export default {
  name: 'example-loop-list-item',
  props: {
    user: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      rating: null
    }
  },
  methods: {
    picture () {
      return this.user.picture.thumbnail
    },
    name () {
      return `(${this.index}) ${this.captalize(this.user.name.first)} ${this.captalize(this.user.name.last)}`
    },
    email () {
      return this.user.email
    },
    phone () {
      return this.user.phone
    },
    address () {
      return `${this.user.location.street} - ${this.user.location.state} - ${this.user.location.city}`
    },
    captalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
