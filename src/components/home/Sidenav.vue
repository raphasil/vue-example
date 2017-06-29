<template>
  <div class="sidenav">

    <md-sidenav class="md-left" ref="leftSidenav">

      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img :src="picture()" alt="People">
            </md-avatar>
          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>{{ name() }}</span>
              <span>{{ email() }}</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>

        <md-list-item>
          <router-link :to="{ name: 'dashboard'}">
          <md-icon>dashboard</md-icon>
          <span>Dashboard</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <router-link :to="{ name: 'random-user'}">
          <md-icon>people</md-icon>
          <span>Random Users</span>
          </router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>folder</md-icon>
          <span>Examples</span>

          <md-list-expand>
            <md-list>
                <md-list-item>
                  <router-link :to="{ name: 'example-text'}">
                  <md-icon>chevron_right</md-icon>
                  <span>Text</span>
                  </router-link>
                </md-list-item>

                <md-list-item>
                  <router-link :to="{ name: 'example-show-hide'}">
                  <md-icon>chevron_right</md-icon>
                  <span>Show / Hide</span>
                  </router-link>
                </md-list-item>

                <md-list-item>
                  <router-link :to="{ name: 'example-directive'}">
                  <md-icon>chevron_right</md-icon>
                  <span>Directive</span>
                  </router-link>
                </md-list-item>

                <md-list-item>
                  <router-link :to="{ name: 'example-loop'}">
                  <md-icon>chevron_right</md-icon>
                  <span>Loop</span>
                  </router-link>
                </md-list-item>

                <md-list-item>
                  <router-link :to="{ name: 'example-event'}">
                  <md-icon>chevron_right</md-icon>
                  <span>Event</span>
                  </router-link>
                </md-list-item>
            </md-list>
          </md-list-expand>

        </md-list-item>

        <md-list-item>
          <router-link :to="{ name: 'desafio'}">
          <md-icon>whatshot</md-icon>
          <span>Desafio</span>
          </router-link>
        </md-list-item>
      </md-list>

    </md-sidenav>

  </div>
</template>

<script>
export default {
  name: 'sidenav',
  props: {
    user: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggle () {
      this.$refs.leftSidenav.toggle()
    },
    name () {
      let result = ''
      if (this.user && this.user.name) {
        const vname = this.user.name
        result = `${vname.first} ${vname.last}`
      }

      return result
    },
    email () {
      console.log('aqui')
      let result = ''
      if (this.user && this.user.email) {
        result = this.user.email
      }

      return result
    },
    picture () {
      let result = ''
      if (this.user && this.user.picture && this.user.picture.large) {
        result = this.user.picture.large
      }
      return result
    }
  },
  updated () {
    console.log('sidenav - updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
