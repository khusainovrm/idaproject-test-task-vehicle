<template>
  <div class="container">
    <div class="App">
      <AppHeader />
      <MainContent />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    error: false,
  }),
  created() {
    this.$store.dispatch('vehicles/fetch_vehicles')
  },
}
</script>

<style>
.container {
  font-family: 'Codec Pro News', serif;
  font-style: normal;
  color: var(--base-500);
  min-height: 100vh;
  width: 100%;
  background: var(--base-0);
  display: flex;
}

.App {
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
