---
sidebar_position: 9
---

# Useful Commands

Frequently used commands. This is a helpful page to add to your Favorites. [Here's how to do so on Notion.](https://www.notion.so/notion/Navigate-Notion-left-sidebar-7ef7287cee00464d9a813073b02ce24a#cb2f704bec9b420d94babc8685ea358b)

# 🚚 Running dev env

For `BobaEditor` and `BobaComponents` run (in the corresponding folders):

```bash
yarn run storybook
```

For `BobaFrontend` run:

```bash
# Start instance connected to local server (BobaBackend must be running)
yarn run dev

# Start instance connected to staging server (note: changes go to prod DB)
yarn run dev:stage
```

For `BobaBackend` run:

```bash
yarn run start-db
yarn run dev:watch
```

# 🚢 Debugging Logs on Frontend

To enable debug logs, set `localStorage.debug` to one of the following values (you can do so through the JavaScript console of your browser of choice):

```jsx
// Print all the debug logs related to the editor
localStorage.debug = "bobapost:*";

// Print only the debug logs related to embeds
localStorage.debug = "bobapost:embeds:*";

// Print only the debug logs related to Twitter embeds
localStorage.debug = "bobapost:embeds:tweet";

// Print all the debug logs minus those ending with -verbose
localStorage.debug = "bobapost:*,-bobapost:*-verbose";

// Print all the debug logs related to the UI Component
localStorage.debug = "bobaui:*";

// Print all the debug logs related to the frontend
localStorage.debug = "bobafrontend:*";

// Print all the debug logs
localStorage.debug = "*";
```
