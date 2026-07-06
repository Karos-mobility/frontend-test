<template>
  <section class="roster">
    <header class="roster__header">
      <h1>Star Wars Roster</h1>
      <p class="roster__subtitle">
        Characters from swapi.dev, with their species resolved to a type.
      </p>
    </header>

    <div class="roster__toolbar">
      <CharacterTypeFilter v-model="selectedType" :types="types" />
      <p class="roster__count">
        Showing {{ filteredCharacters.length }} of
        {{ characters.length }} characters
      </p>
    </div>

    <CharacterList :characters="filteredCharacters" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Character } from '../types/swapi';
import { ALL_TYPES, filterCharacters } from '../utils/filterCharacters';
import CharacterTypeFilter from './CharacterTypeFilter.vue';
import CharacterList from './CharacterList.vue';

const characters = ref<Character[]>([]);
const selectedType = ref<string>(ALL_TYPES);

const types = computed<string[]>(() =>
  [...new Set(characters.value.map((c) => c.type))].sort((a, b) =>
    a.localeCompare(b),
  ),
);

const filteredCharacters = computed(() =>
  filterCharacters(characters.value, selectedType.value),
);
</script>

<style scoped>
.roster {
  max-width: 60rem;
  margin: 0 auto;
  padding: 1rem;
  text-align: left;
}

.roster__header {
  margin-bottom: 1.5rem;
}

.roster__subtitle {
  color: var(--contrast-2);
  margin-top: 0.25rem;
}

.roster__toolbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.roster__count {
  color: var(--contrast-2);
  font-size: 0.9rem;
}

</style>
