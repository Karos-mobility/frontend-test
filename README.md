# Karos frontend exercise

## Context

This exercise aims at testing your ability to read documentation, [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) data from an API, and use it in a frontend application

## Task

- Fetch the star wars characters from the endpoint `https://swapi.dev/api/people/` (you can encapsulate the method to fetch it in `../services/swapiClient.ts`)
- Display the fetched characters in `src/components/CharacterList.vue` (Only display the name, gender, birth year)

**Bonus task**: Implement a filtering method (in `src/utils/filterCharacters.ts` if you want) to filter the characters by gender. Use it appropriately in `src/StarWarsRoster.vue`)

## Infos

- For info, the response from this endpoint https://swapi.dev/api/people/ looks like the content`swapiPeople.json`: only use the `results`key
