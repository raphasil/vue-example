<template>
  <div class="show-example">
    <p></p>
    <md-card>
      <md-card-area v-show="checked">        
        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card-area>

      <md-card-actions>
        <md-switch v-model="checked" class="md-primary"> {{ checked ? 'Hide' : 'Show'  }} </md-switch>
      </md-card-actions>
    </md-card>

  </div>
</template>

<script>
export default {
  name: 'show-example',
  data () {
    return {
      checked: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
