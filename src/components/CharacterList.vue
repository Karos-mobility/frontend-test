<template>
  <p v-if="characters.length === 0" class="list__empty">
    No characters match the current filter.
  </p>

  <div v-else class="list__wrapper">
    TODO: Implement character list rendering Display name, gender, birthyear
  </div>
</template>

<script setup lang="ts">
import type { Character } from "../types/swapi";

defineProps<{
  characters: Character[];
}>();
</script>

<style scoped>
.list__empty {
  color: var(--contrast-2);
  font-style: italic;
}
</style>
