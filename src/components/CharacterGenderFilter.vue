<template>
  <label class="filter">
    <span class="filter__label">Filter by gender</span>
    <select
      class="filter__select"
      :value="modelValue"
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
    >
      <option v-for="gender in genders" :key="gender" :value="gender">
        {{ gender }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  genders: string[];
  modelValue: string;
}>();

defineEmits<{
  "update:modelValue": [value: string];
}>();
</script>

<style scoped>
.filter {
  display: inline-flex;
  flex-direction: column;
  gap: 0.35rem;
  text-align: left;
}

.filter__label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--contrast-2);
}

.filter__select {
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--divider-color);
  background: var(--white);
  color: var(--default-text-color);
  font-size: 0.95rem;
  min-width: 12rem;
}

.filter__select:focus {
  outline: 2px solid var(--primary);
  outline-offset: 1px;
}
</style>
