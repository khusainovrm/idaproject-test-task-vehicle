<template>
  <div class="container">
    <div class="App">
      <AppHeader />
      <MainContent />
    </div>
  </div>
</template>

<script>
import { getVehicles } from '@/api/request'
export default {
  data: () => ({
    error: false,
  }),
  async created() {
    try {
      // eslint-disable-next-line no-console
      console.log(await getVehicles())
      this.erro = false
    } catch (e) {
      if (e.error === 'Server error') {
        this.error = true
      }
    }
  },
}
</script>

<style>
.container {
  font-family: 'Codec Pro News', serif;
  font-style: normal;
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
