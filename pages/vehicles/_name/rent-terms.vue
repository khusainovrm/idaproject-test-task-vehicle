<template>
  <div>Rent terms</div>
</template>

<script>
export default {
  name: 'RentTerms',
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getVehicleByName'](
        this.$route.params.name
      )
    },
  },
}
</script>

<style scoped></style>
