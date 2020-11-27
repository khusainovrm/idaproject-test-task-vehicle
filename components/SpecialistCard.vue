<template>
  <div>
    <div class="Team_specialists__specialists-imamge">
      <img :src="src" alt="" />
    </div>
    <div class="Team_specialists__specialists-description">
      <div class="name">{{ name }}</div>
      <div class="profession">{{ profession }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String, required: true },
    name: { type: String, required: true },
    profession: { type: String, required: true },
  },
}
</script>

<style>
.Team_specialists__specialists-imamge img {
  border-radius: 16px;
  margin-bottom: 16px;
}

.Team_specialists__specialists-description .name {
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: var(--base-500);
}

.profession {
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  color: var(--base-300);
}
</style>
