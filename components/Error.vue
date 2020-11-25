<template>
  <div class="Error">
    <div class="Error__title">An error has occurred</div>
    <div class="Error__text">Please refresh the page</div>
    <div class="Error__button">
      <div class="Error__button-text">Reload page</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style scoped>
.Error {
  text-align: center;
}

.Error .Error__title {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  margin-top: 24px;
  color: var(--base-500);
}

.Error .Error__text {
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
  transition: background 0.2s ease-out;
}

.Error .Error__button:hover {
  cursor: pointer;
  background: var(--main-500);
  transition: background 0.3s ease-in;
}

.Error__button .Error__button-text {
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  color: var(--base-0);
}
</style>
