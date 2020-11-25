<template>
  <div class="Content">
    <Error />
  </div>
</template>

<script>
import Error from '@/components/Error'
export default {
  name: 'Content',
  components: { Error },
}
</script>

<style scoped>
.Content {
  margin: 0 64px 48px;
  background: var(--base-50);
  border-radius: 48px;
  flex-grow: 1;
  padding: 56px 64px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
