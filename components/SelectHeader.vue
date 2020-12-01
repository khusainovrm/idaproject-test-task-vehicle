<template>
  <div class="Select responsive">
    <div class="Select__select responsive">
      <span class="Select__select-text">Rent</span>
      <select
        id="selectCategory"
        v-model="selectedFilter"
        class="selectGroup responsive"
      >
        <option value="">whatever</option>
        <option v-for="category in selectedCategories" :key="category">
          {{ category }}
        </option>
      </select>
      <label for="selectCategory" class="label__selectCategory"></label>
    </div>
    <div class="Select_create">
      <span class="Select_create--text center responsive">Add new</span>
      <button class="Button responsive" @click="$emit('openForm')">
        <span class="Button__text">+</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SelectHeader',
  data: () => ({
    selectedFilter: '',
  }),

  computed: {
    ...mapGetters('vehicles', {
      selectedCategories: 'getCategories',
    }),
  },
  watch: {
    selectedFilter() {
      this.$store.commit('vehicles/SET_FILTER', this.selectedFilter)
    },
  },
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
  user-select: none;
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
  user-select: none;
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
  vertical-align: middle;
  color: var(--main-400);
  cursor: pointer;
  appearance: none;
  background: url(../assets/svgs/selectArrow.svg) no-repeat right;
  font-family: 'Codec Pro News', serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
}
.label__selectCategory {
  background: url(../assets/svgs/selectArrow.svg) no-repeat right;
}

.selectGroup:focus {
  outline: none;
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
