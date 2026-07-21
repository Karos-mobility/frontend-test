<template>
  <section class="roster">
    <header class="roster__header">
      <h1>Star Wars Roster</h1>
      <p class="roster__subtitle">
        Characters from
        <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer"
          >swapi.dev</a
        >
      </p>
    </header>

    <div class="roster__toolbar">
      <CharacterGenderFilter v-model="selectedGender" :genders="genders" />
      <p class="roster__count" v-if="characters.length > 0">
        Showing {{ filteredCharacters.length }} of
        {{ characters.length }} characters
      </p>
    </div>

    <CharacterList :characters="characters" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { Character } from "../types/swapi";
import { filterCharacters } from "../utils/filterCharacters";
import CharacterGenderFilter from "./CharacterGenderFilter.vue";
import CharacterList from "./CharacterList.vue";
import { getCharacters } from "../services/swapiClient.ts";

const characters = ref<Character[]>([]);
const selectedGender = ref<string>("");

const genders = computed<string[]>(() =>
  [...new Set(characters.value.map((c) => c.gender))].sort((a, b) =>
    a.localeCompare(b),
  ),
);

const filteredCharacters = computed(() =>
  filterCharacters(characters.value, selectedGender.value),
);

onMounted(async () => {
  try {
    const response = await getCharacters();
    // TODO: Implement getCharacters with fetch here or here `../services/swapiClient.ts`
    // Fetch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    console.log("Fetched characters:", response);
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
});
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
