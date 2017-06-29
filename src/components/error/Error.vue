<template>
  <div class="error">
    <!--
        <md-layout md-row> 
          <md-layout md-row>
          </md-layout>
          <md-layout md-row>         
            <md-layout md-align="center" md-vertical-align="center" md-column>
                    <h1>You are lost.</h1>
                    <h4>This page doesn't exist.</h4>
                    <router-link to="/">Take me home.</router-link>
            </md-layout>
          </md-layout>
        </md-layout>
      -->

      <md-layout md-column>        
        <md-layout md-row >
          <md-layout md-align="center" md-vertical-align="center" md-column>
                    <h1>You are lost.</h1>
                    <h4>This page doesn't exist.</h4>
                    <router-link to="/">Take me home.</router-link>
            </md-layout>
        </md-layout>
      </md-layout>
      
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: 'Page not found'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
