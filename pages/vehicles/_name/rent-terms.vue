<template>
  <div class="Rent-terms">
    <div class="Rent-terms__term-text">{{ vehicle.term_text }}</div>
    <div class="Rent-terms__term-conditions">
      <div class="Rent-terms__term-conditions__title">
        Additional conditions:
      </div>
      <ul>
        <li
          v-for="condition in conditions"
          :key="condition.text"
          class="Rent-terms__term-conditions__text"
        >
          {{ condition.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RentTerms',
  data: () => ({
    conditions: [
      {
        text:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
        text:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      },
      {
        text:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      },
    ],
  }),
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getVehicleByName'](
        this.$route.params.name
      )
    },
  },
}
</script>

<style scoped>
.Rent-terms__term-text {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
}

.Rent-terms__term-conditions__title {
  margin: 24px 0;
  font-weight: bold;
  line-height: 24px;
  color: var(--base-500);
}
ul {
  padding-left: 10px;
}

li {
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
}

li::marker {
  color: var(--secondary-400);
}
</style>
