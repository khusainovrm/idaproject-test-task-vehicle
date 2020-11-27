<template>
  <div class="DetailedPage_wrapper">
    <div class="DetailedPage_wrapper__Image">
      <img :src="vehicle.image" alt="" />
    </div>

    <div class="DetailedPage_wrapper-content">
      <div class="name">{{ vehicle.name }}</div>
      <div class="tabs">
        <nuxt-link to="specifications">Specifications</nuxt-link>
        <nuxt-link to="team">Team</nuxt-link>
        <nuxt-link to="rent-terms">Rent terms</nuxt-link>
      </div>
      <slot></slot>
      <div class="rent">
        <span class="rent-text">
          Rent for
          <span class="rent-text-pink">{{ vehicle.rent }} $/h</span></span
        >

        <button class="Rent__button" @click="rent">
          <span class="Rent__button-text">
            <span>Rent now</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDetailed',
  computed: {
    vehicle() {
      return this.$store.getters['vehicles/getVehicleByName'](
        this.$route.params.name
      )
    },
    vehicles() {
      return this.$store.getters['vehicles/getVehicles']
    },
  },
  mounted() {
    console.log(this.vehicle)
  },
  methods: {
    rent() {
      console.log('rent')
    },
  },
}
</script>

<style scoped>
.DetailedPage_wrapper {
  display: flex;
  height: 100%;
  padding: 0 64px;
}

.DetailedPage_wrapper__Image,
.DetailedPage_wrapper-content {
  width: 50%;
}

.DetailedPage_wrapper-content {
  padding-left: 64px;
}

img {
  width: 100%;
  max-width: 711px;
  border-radius: 24px;
}

.DetailedPage_wrapper-content .name {
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: var(--base-500);
}

.tabs {
  margin: 32px 0;
}

a {
  font-weight: bold;
  font-size: 16px;
  color: var(--base-300);
  text-decoration: none;
}

a:nth-child(2) {
  margin: 0 32px;
}

.DetailedPage_wrapper-content .rent {
  background: var(--base-50);
  border-radius: 16px;
}

.rent {
  margin-top: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
}

.rent .rent-text {
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: var(--base-500);
}
.rent-text-pink {
  color: var(--secondary-400);
}

.rent .Rent__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
  background: var(--main-400);
  border-radius: 12px;
  transition: background 0.1s ease-out;
}

.rent .Rent__button:hover {
  cursor: pointer;
  background: var(--main-500);
  transition: background 0.2s ease-in;
}

.Rent__button .Rent__button-text {
  padding: 17px 32px;
  font-weight: bold;
  font-size: 16px;
  color: var(--base-0);
}

.tabs .nuxt-link-exact-active {
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: var(--main-400);
  text-decoration: none;
}
</style>
