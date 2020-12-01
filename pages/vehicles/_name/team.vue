<template>
  <div class="Team">
    <div class="Team__text">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </div>
    <div class="Team_specialists">
      <div class="Team_specialists__title responsive">
        Qualified specialists
      </div>
      <div class="Team_specialists__specialists responsive">
        <SpecialistCard
          src="/images/Marvin.png"
          name="Marvin McKinney"
          profession="Pilot assistant"
        />
        <SpecialistCard
          src="/images/Savannah.png"
          name="Savannah Nguyen"
          profession="Mechanic"
        />
        <SpecialistCard
          src="/images/Courtney.png"
          name="Courtney Henry"
          profession="Stewardess"
        />
      </div>
      <div class="Team_specialists__text">
        {{ vehicle.team_text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
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
.Team__text {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
  user-select: none;
}

.Team_specialists__title {
  margin: 32px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;
  color: var(--base-500);
}

.Team_specialists__specialists {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}

.Team_specialists__text {
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: var(--base-300);
}
</style>
