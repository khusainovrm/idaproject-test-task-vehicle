<template>
  <div class="Specification">
    <div class="Specification__description">
      {{ vehicle.specifications_text }}
    </div>
    <div class="Specification__features">
      <div class="title">Features:</div>
      <div class="list">
        <div class="list_item">
          <div class="icon"><img src="@/assets/svgs/graal.svg" alt="" /></div>
          <div class="desciption">
            <div class="desciption_title">A challenge for a true champion</div>
            <div class="desciption_text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </div>
          </div>
        </div>
        <div class="list_item">
          <div class="icon"><img src="@/assets/svgs/human.svg" alt="" /></div>
          <div class="desciption">
            <div class="desciption_title">Pilot's sweaty hands</div>
            <div class="desciption_text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specifications',
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getVehicleByName'](
        this.$route.params.name
      )
    },
  },
}
</script>

<style>
.Specification__description {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
  margin-bottom: 32px;
  user-select: none;
}

.Specification__features .title {
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;
  color: var(--base-500);
  margin-bottom: 32px;
}

.list_item {
  display: flex;
  margin-bottom: 16px;
}
.list_item .icon {
  width: 185px;
  height: 96px;
  background: var(--base-50);
  border-radius: 16px;
  margin-right: 24px;
  display: flex;
  justify-content: center;
}

.desciption .desciption_title {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: var(--base-500);
  margin-bottom: 8px;
}

.desciption .desciption_text {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
}

.icon img {
  width: 25px;
}
</style>
