<template>
  <div class="Content responsive">
    <AddNewVehicleForm
      :show-form="showAddNewVehicleForm"
      @closeForm="toggleForm"
    />
    <Loader v-if="loading" />
    <Error v-else-if="!error" />
    <div v-else class="Content__container">
      <SelectHeader @openForm="toggleForm" />
      <Vehicles />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainContent',

  data: () => ({
    showAddNewVehicleForm: false,
  }),

  methods: {
    toggleForm() {
      this.showAddNewVehicleForm = !this.showAddNewVehicleForm
    },
  },
  computed: {
    ...mapGetters('vehicles', {
      error: 'getError',
      loading: 'getLoading',
    }),
  },
}
</script>

<style>
.Content {
  background: var(--base-50);
  border-radius: 48px;
  flex-grow: 1;
  padding: 56px 64px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.Content .Content__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
