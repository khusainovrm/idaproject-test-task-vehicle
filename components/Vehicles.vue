<template>
  <div class="Vehicles responsive">
    <div v-for="vehicle in vehicles" :key="vehicle.id" class="Vehicles__card">
      <VehicleCard :vehicle="vehicle" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    vehicles() {
      return this.$store.getters['vehicles/getVehicles']
    },
  },
}
</script>

<style>
.Vehicles {
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
}
</style>
