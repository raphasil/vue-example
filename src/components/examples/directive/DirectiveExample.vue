<template>
  <div class="directive-example">

    <form id="form-directive-example" novalidate @submit.stop.prevent="submit">

      <md-input-container>        
        <label>First</label>
        <md-input v-model="obj.first"></md-input>
      </md-input-container>

      <md-input-container>        
        <label>Second</label>
        <md-input v-model="obj.second"></md-input>
      </md-input-container>

    </form>

    <pre v-custom:mod.a.b="obj"></pre>

  </div>
</template>

<script>
export default {
  name: 'directive-example',
  data () {
    return {
      obj: {
        first: 'first',
        second: 'second'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
