# Boolflix (vue + vite)

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Description 

In this exercise we begin to replicate the logic behind many sites that allow the viewing of films and TV series (like Netflix).

### Milestone 0: 
Design the structure of the global state.

### Milestone 1: 
Create a basic layout with a searchbar (an input and a button) in which we can completely or partially write the name of a film. We can, by clicking the button, search the API for all the films that contain what the user wrote.
After the API response, we want to display the following values on the screen for each film found:
- Title
- Original title
- Language
- Vote

### Milestone 2: 

Transform the static string of the language into a real flag of the corresponding nation, managing the case in which we do not have the flag of the nation returned by the API.

We then broaden the search to include TV series. With the same search action we will have to take both the films that match the query and the TV series, being careful to have similar values at the end (the series and films have different fields in the response JSON, similar but not always identical)