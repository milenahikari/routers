<template>
  <section>
    <h1>Conteúdo da página</h1>
    <button v-on:click="voltar">Voltar</button>
  </section>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
</style>