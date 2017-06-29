<template>
  <div class="desafio-info">

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

export default {
  name: 'desafio-info',
  data () {
    return {
      msg: 'Desafio'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
