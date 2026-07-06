<template>
  <p v-if="characters.length === 0" class="list__empty">
    No characters match the current filter.
  </p>

  <table v-else class="list">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Type</th>
        <th scope="col">Gender</th>
        <th scope="col">Birth year</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="character in characters" :key="character.id">
        <td>{{ character.name }}</td>
        <td>
          <span class="list__badge">{{ character.type }}</span>
        </td>
        <td>{{ character.gender }}</td>
        <td>{{ character.birthYear }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import type { Character } from '../types/swapi';

defineProps<{
  characters: Character[];
}>();
</script>

<style scoped>
.list {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.list th,
.list td {
  padding: 0.55rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--divider-color);
}

.list th {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--contrast-2);
}

.list tbody tr:hover {
  background: var(--secondary-extra-light);
}

.list__badge {
  display: inline-block;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: var(--primary-extra-light);
  color: var(--primary-dark);
  font-size: 0.82rem;
  font-weight: 600;
}

.list__empty {
  color: var(--contrast-2);
  font-style: italic;
}
</style>
