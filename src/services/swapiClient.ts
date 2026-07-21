export const BASE_URL = "https://swapi.dev/api";

/** Raised for any non-2xx or network-level failure. */
export class SwapiError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "SwapiError";
    this.status = status;
  }
}

/**
 * TODO: use fetch here or in `../components/CharacterList.vue` (the url: https://swapi.dev/api/people/)
 *
 * fetch documentation: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export const getCharacters = async <T>(): Promise<T> => {
  throw new Error("getCharacters is not implemented yet");
};
