import type { Character } from '../types/swapi';

/** Sentinel value for "no type filter selected" (the "All" option). */
export const ALL_TYPES = '';

/**
 * TODO: return only the characters whose `type` matches `selectedType`.
 * When `selectedType` is `ALL_TYPES`, return every character unchanged.
 */
export const filterCharacters = (
  characters: Character[],
  selectedType: string,
): Character[] => {
  return characters;
};
