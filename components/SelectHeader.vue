<template>
  <div class="Select responsive">
    <div class="Select__select responsive">
      <span class="Select__select-text">Rent</span>
      <span class="Select__select-select">whatever</span>
      <select v-model="selectedGroup" class="selectGroup">
        <option disabled value="">Выберите один из вариантов</option>
        <option>Tom</option>
        <option>Bob</option>
        <option>Sam</option>
      </select>
    </div>
    <div class="Select_create">
      <span class="Select_create--text center responsive">Add new</span>
      <button class="Button responsive">
        <span class="Button__text">+</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectHeader',
  data: () => ({
    selectedGroup: '',
  }),
}
</script>

<style>
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

.Select__select-text {
  color: var(--base-500);
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
  border-radius: 30%;
  transition: background 0.1s ease-out;
}
.selectGroup {
  border: none;
  background: url('/assets/svgs/Logo.svg');
  vertical-align: middle;
  width: 20px;
  color: var(--main-400);
}

.selectGroup:focus {
  outline: none;
}

.selectGroup::before {
  content: '11';
  width: 100px;
  height: 100px;
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
