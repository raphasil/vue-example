<template>
  <div class="desafio-info">

    <md-layout md-gutter>
      <md-layout md-column md-gutter>
        <md-layout>
          <md-tabs md-centered>
            <md-tab md-label="Cards" md-icon="filter_none">

              <lista-magic :card="card"></lista-magic>

            </md-tab>

            <md-tab md-label="Favorites" md-icon="bookmark">

              <md-card class="custom-card" md-with-hover v-for="(item, index) in favoriteCards" :key="item.id">
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
                      <md-button @click="removeFavorite(item,index)" class="md-icon-button">
                        <md-icon>delete_forever</md-icon>
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
            </md-tab>
          </md-tabs>
        </md-layout>
      </md-layout>
    </md-layout>

  </div>
</template>

<script>

/**
 *    Descrição do desafio (CI&T DOJO)
 * 1- Efetuar uma requisição rest, que retorne todas as cartas
 *    DOC: https://docs.magicthegathering.io/#get-all-cards
 * 2- Criar uma lista de cartas exibindo imagem, nome etc...
 * 3- Criar uma ação de adcionar a carta a lista de favoritos e remover da lista atual
 * 4- Criar uma lista de favoritos exibindo as mesmas informação da lista principal, porém com ação de excluir do favorito
 * 5- Componentizar a apresentação das listas
 * 6- Criar uma diretiva para só poder remover da lista de favoritos se for ADMIN o usuario
 * 7- Separar as requisições para uma classe java script
 **/

import axios from 'axios'
import ListMagic from './ListMagic.vue'

export default {
  name: 'desafio-info',
  components: {
    'lista-magic': ListMagic
  },
  data () {
    return {
      msg: 'Desafio',
      card: [],
      favoriteCards: []
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
