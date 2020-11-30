<template>
  <div class="container" :class="{ 'dark-mode': isDarkTheme }">
    <div class="App">
      <AppHeader />
      <div class="App_wrapper responsive">
        <transition name="fade">
          <div v-if="!isRouteIncludesVehicle" class="App_wrapper-main">
            <Nuxt key="1" />
          </div>

          <div v-else-if="loading" class="Loading">Loading...</div>
          <LayoutDetailed v-else key="2"><Nuxt /></LayoutDetailed>
        </transition>
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

    isDarkTheme() {
      return this.$store.getters['theme/isDarkTheme']
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
    if (localStorage.getItem('themeVehicle') === 'dark')
      this.$store.commit('theme/TOGGLE_THEME', 'firstInit')

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
  transition: background-color 0.2s ease-in;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
