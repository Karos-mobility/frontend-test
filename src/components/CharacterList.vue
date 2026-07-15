<template>
  <p v-if="characters.length === 0" class="list__empty">
    No characters match the current filter.
  </p>

  <div v-else class="list__wrapper">
    TODO: Implement character list rendering Display name, gender, birthyear

    <div class="header">
      <!-- display headers of the Character list -->
      <div>Name</div>
      <div>Gender</div>
      <div>Birth Year</div>
    </div>
    <!-- display character items -->
    <div v-for="character in characters" :key="character.id" class="content">
      <div>{{ character.name }}</div>
      <div>{{ character.gender }}</div>
      <div>{{ character.birth_year }}</div>
    </div>
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
