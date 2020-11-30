<template>
  <div class="container">
    <div class="App">
      <AppHeader />
      <div class="App_wrapper responsive">
        <div v-if="!isRouteIncludesVehicle" class="App_wrapper-main">
          <Nuxt />
        </div>

        <div v-else-if="loading" class="Loading">Loading...</div>
        <LayoutDetailed v-else><Nuxt /></LayoutDetailed>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',

  data: () => ({
    loading: true,
  }),

  computed: {
    isRouteIncludesVehicle() {
      return this.$route.fullPath.includes('vehicles')
    },

    vehicles() {
      return this.$store.getters['vehicles/getVehicles']
    },
  },

  // implementation of functionality to open project on any page without error
  watch: {
    $route(to) {
      if (!this.vehicles.length) {
        to.fullPath.includes('vehicles')
          ? this.fetchVehicles()
          : this.fetchVehicles('main')
      } else this.loading = false
    },
  },

  created() {
    !this.$route.fullPath.includes('vehicles')
      ? this.fetchVehicles('mainPage')
      : this.fetchVehicles()
  },

  methods: {
    async fetchVehicles(flag) {
      if (!this.$store.getters['vehicles/getVehicles']) {
        await this.$store.dispatch('vehicles/fetch_vehicles').then((data) => {
          this.loading = true
          if (flag) return
          if (data) {
            this.loading = false
          } else this.fetchVehicles()
        })
      }
    },
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

.Loading {
  padding: 0 16px;
}
</style>
