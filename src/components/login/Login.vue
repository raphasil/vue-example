<template>
  <div class="login">

    <md-layout md-gutter>
      <md-layout md-column md-gutter>
      </md-layout>

      <md-layout md-column md-gutter>

        <form id="form-login" novalidate @submit.stop.prevent="submit">

          <md-whiteframe md-elevation="8">

            <md-layout>

              <md-toolbar class="form-login-header">
                <h2 class="md-title">Login</h2>
              </md-toolbar>

            </md-layout>

            <md-layout>
              
                
                  <md-input-container>
                    <md-icon>person</md-icon>
                    <label>username</label>
                    <md-input v-model="form.username" required></md-input>
                    <span class="md-error">This field is required</span>
                  </md-input-container>

                  <md-input-container md-has-password>
                    <md-icon>https</md-icon>
                    <label>password</label>
                    <md-input v-model="form.password" required type="password"></md-input>
                    <span class="md-error">This field is required</span>
                  </md-input-container>

              
            </md-layout>
            
            <md-layout md-align="end">
              <md-button class="md-raised md-primary" :disabled="!form.username || !form.password" @click="login">
                Acessar
              </md-button>
            </md-layout>

          </md-whiteframe>

        </form>
      </md-layout>

      <md-layout md-column md-gutter>
      </md-layout>
    </md-layout>

    
   
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    login () {
      if (this.form.username && this.form.password) {
        this.manager.authenticated = true
        this.manager.user.username = this.form.username
        this.manager.user.password = this.form.password
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>

<style>

.login {
  padding-top: 50px
}

.form-login-header {
  width: 100%
}

</style>
