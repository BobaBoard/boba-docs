---
sidebar_position: 11
---

# External Packages/Components

- **Firebase Auth:** authentication as a service, provided by Firebase. Lives in both frontend and backend.
- **Firebase Storage:** used to store images. Probably not the best solution, but was easy enough to get started with.
- **PostgresSQL:** our database of choice. Currently hosted through Google CloudSQL, mostly for ease of setup and automated backups.
- **React:** needs no intro, I believe. This is what we're using for the UI.
- **[React-Query](https://github.com/tannerlinsley/react-query):** asynchronous data management in React. Might seem complex at first, but it really does querying the server for data much better.
- **NextJS:** tries to make developing React websites as easy as developing websites with PHP used to be. Provides Sever-Side Rendering out of the box, though I haven't done the work to set it up yet. Only caveat to know about: it's very unhappy when you reference the *window* object before components are mounted.
- **Styled JSX:** our "css-in-js" system. It's not the most popular out there and has a couple of caveats I'm unhappy about, but it allows us to write *actual CSS* rather than just assigning JavaScript objects.
- **QuillJS:** used for the text editor. While its internal workings are mostly isolated in the editor package, the QuillJS delta format is used to store the text data in the DB.
- **Storybook:** allows developing UI component systems completely separate from a frontend, as well as provides an easy way to document them.
- **Netlify:** used continuous deployment of storybook updates. Currently only truly working in a completely automated fashion for the editor because of a bug. (TODO: link to bug).
- **CircleCI:** continuous integration pipeline used for the server.
- **Docker:** used on the server to containerize tests and deploy them on CircleCI.

## To Check Out in the Future

This section has some interesting libraries I've found that might be worth checking out in the future (or might serve as inspiration for features). These have no relationship with the code itself, but are here to remind us of the marvelous possibilities ahead:

- **Tapable ([repo](https://github.com/webpack/tapable)):** a hooks package (apparently used by Webpack?) that allows adding plugins to software.