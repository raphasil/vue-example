
<template>
<div>
    <md-card class="custom-card" md-with-hover v-for="(item, index) in card" :key="item.id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{item.name}}</div>
          <div class="md-subhead">
            <md-chip v-for="(supertype, supertypeIndex) in item.supertypes" :key="supertypeIndex">{{supertype}}</md-chip>
            <md-chip v-for="(type, typeIndex) in item.types" :key="typeIndex">{{type}}</md-chip>
            <md-chip v-for="(subtype, subtypeIndex) in item.subtypes" :key="subtypeIndex">{{subtype}}</md-chip>
          </div>
        </md-card-header-text>

        <md-card-media md-big>
          <img :src="item.imageUrl" alt="Card">
        </md-card-media>
      </md-card-header>

      <md-card-expand>

        <md-card-actions>
          <md-layout md-align="start" md-gutter>
            <md-button @click="addFavorite(item,index)" class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
          </md-layout>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" md-expand-trigger>
            <md-icon>keyboard_arrow_down</md-icon>
          </md-button>
        </md-card-actions>

        <md-card-content>
          {{item.text}}
        </md-card-content>

      </md-card-expand>
    </md-card>
</div>
</template>

<script>
import axios from 'axios'

export default {

  props: ['card'],
  name: 'desafio-info',
  data () {
    return {
      msg: 'Desafio'
    }
  },
  methods: {
    getCards () {
      axios.get('https://api.magicthegathering.io/v1/cards')
        .then(response => {
          this.$data.cards = response.data

          response.data.cards.forEach(function (element) {
            this.$data.card.push(
              {
                id: element.id,
                name: element.name,
                text: element.text,
                imageUrl: element.imageUrl,
                supertypes: element.supertypes,
                types: element.types,
                subtypes: element.subtypes
              })
          }, this)

          console.log('Aqui esta', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    addFavorite (cardItem, index) {
      this.$data.favoriteCards.push(cardItem)
      this.$data.card.splice(index, 1)
    },
    removeFavorite (cardItem, index) {
      this.$data.card.push(cardItem)
      this.$data.favoriteCards.splice(index, 1)
    }
  },
  created () {
    this.getCards()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
