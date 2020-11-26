<template>
  <div class="Select">
    <div class="Select__select">
      <span class="Select__select-text">Rent</span>
      <span class="Select__select-select">whatever</span>
    </div>
    <div class="Select_create">
      <span class="Select_create--text center">Add new</span>
      <button class="Button">
        <span class="Button__text">+</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectHeader',
}
</script>

<style scoped>
.Select {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
}
.Select .Select__select {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
}

.Select__select-select {
  color: var(--main-400);
}

.Select .Select_create {
  display: inline-flex;
}

.Select_create--text {
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: var(--main-400);
}

.Select .Button {
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 48px;
  height: 48px;
  background: var(--main-400);
  border-radius: 16px;
  transition: background 0.1s ease-out;
}

.Button:hover {
  cursor: pointer;
  background: var(--main-500);
  transition: background 0.2s ease-in;
}

.Button .Button__text {
  color: var(--base-0);
  margin: 0 auto;
  font-size: 2rem;
}
</style>
