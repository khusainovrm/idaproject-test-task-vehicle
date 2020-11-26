<template>
  <div class="Content">
    <Loader v-if="loading" />
    <Error v-else-if="!error" />
    <div v-else class="Content__container"><SelectHeader /> <Vehicles /></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Content',
  computed: {
    ...mapGetters('vehicles', {
      error: 'getError',
      loading: 'getLoading',
    }),
  },
}
</script>

<style scoped>
.Content {
  margin: 0 64px 48px;
  background: var(--base-50);
  border-radius: 48px;
  flex-grow: 1;
  padding: 56px 64px;

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
