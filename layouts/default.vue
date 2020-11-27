<template>
  <div class="container">
    <div class="App">
      <AppHeader />
      <div class="App_wrapper responsive">
        <div v-if="!isRouteIncludesVehicle" class="App_wrapper-main">
          <Nuxt />
        </div>
        <LayoutDetailed v-else><Nuxt /></LayoutDetailed>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',

  computed: {
    isRouteIncludesVehicle() {
      return this.$route.fullPath.includes('vehicles')
    },
  },
  created() {
    if (!this.$store.getters['vehicles/getVehicles'])
      this.$store.dispatch('vehicles/fetch_vehicles')
  },
}
</script>

<style>
.container {
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

.App_wrapper {
  margin: 0 64px 48px;
  flex-grow: 1;
}

.App_wrapper-main {
  height: 100%;
}
</style>
