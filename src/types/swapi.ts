/** Generic envelope returned by every paginated SWAPI list endpoint. */
export interface SwapiListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

/** Raw `person` resource as returned by `/api/people/`. */
export interface SwapiPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}

/** Raw `species` resource as returned by `/api/species/`. */
export interface SwapiSpecies {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  language: string;
  homeworld: string | null;
  url: string;
}

/** Resolved view-model consumed by the components. */
export interface Character {
  id: string;
  name: string;
  type: string;
  gender: string;
  birthYear: string;
}
