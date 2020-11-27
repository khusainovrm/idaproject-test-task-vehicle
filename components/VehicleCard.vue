<template>
  <div
    class="Card"
    @click="$router.push(`vehicles/${vehicle.name}/specifications`)"
  >
    <div class="Card__Image">
      <img :src="vehicle.preview" alt="" />
    </div>
    <div class="Card_description">
      <div class="title">{{ vehicle.name }}</div>
      <div class="description">{{ vehicle.description }}</div>
      <div class="price">{{ vehicle.rent }} $/h</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleCard',
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.Card {
  background: var(--base-0);
  border-radius: 32px;
  height: 164px;
  padding: 24px;
  display: flex;
  cursor: pointer;
}

.Card__Image img {
  width: 88px;
  border-radius: 24px;
}

.Card_description {
  padding: 10px 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Card_description .title {
  font-weight: bold;
}

.Card_description .description {
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;

  color: var(--base-300);
}

.Card_description .price {
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;

  color: var(--secondary-400);
}
</style>
