<template>
  <div class="text-example">

    <form id="form-text-example" novalidate @submit.stop.prevent="submit">

      <md-input-container>        
        <label>message</label>
        <md-input v-model="msg"></md-input>
      </md-input-container>

    </form>

    <md-layout md-column md-gutter>

      

        <md-card md-with-hover>

          <md-card-header>
            <div class="md-title">Text with v-text</div>          
          </md-card-header>

          <md-card-content>
            <p v-text="msg"> Message: </p>
            <p v-text="'Message: ' + msg"> Message: </p>
          </md-card-content>

        </md-card>

      

      <md-card md-with-hover>

        <md-card-header>
          <div class="md-title">Text with {{}}</div>          
        </md-card-header>

        <md-card-content>
          <p> {{msg}} </p>
          <p> Message: {{msg}} </p>
        </md-card-content>

      </md-card>

      
      <md-card md-with-hover>

        <md-card-header>
          <div class="md-title">Text with v-once</div>          
        </md-card-header>

        <md-card-content>          
          <p v-once> Message: {{msg}} </p>
          <p v-text="'Message: ' + msg" v-once> Message: </p>
        </md-card-content>

      </md-card>

      

    </md-layout>

  </div>
</template>

<script>
export default {
  name: 'text-example',
  data () {
    return {
      msg: 'one simple example with text interpolation'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
