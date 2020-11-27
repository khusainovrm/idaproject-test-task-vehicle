<template>
  <div class="Error">
    <div class="Error__title">An error has occurred</div>
    <div class="Error__text">Please refresh the page</div>
    <button class="Error__button" :disabled="loading" @click="reloadAndFetch">
      <span class="Error__button-text">
        <span v-if="!loading">Reload page</span>
        <span v-else>Loading</span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data: () => ({
    loading: false,
  }),
  methods: {
    async reloadAndFetch() {
      this.loading = true
      await this.$store.dispatch('vehicles/fetch_vehicles')
      this.loading = false
    },
  },
}
</script>

<style>
.Error {
  text-align: center;
}

.Error .Error__title {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  margin-top: 24px;
}

.Error .Error__text {
  margin-top: 24px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
}

.Error .Error__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px auto;
  width: 161px;
  height: 48px;
  background: var(--main-400);
  border-radius: 12px;
  transition: background 0.1s ease-out;
}

.Error .Error__button:hover {
  cursor: pointer;
  background: var(--main-500);
  transition: background 0.2s ease-in;
}

.Error__button .Error__button-text {
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  color: var(--base-0);
}

.Error button[disabled],
.Error button[disabled]:hover {
  border: none;
  background-color: #cccccc;
  color: #666666;
}
</style>
