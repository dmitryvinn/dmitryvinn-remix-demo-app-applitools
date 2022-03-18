# Remix Demo: Blogging App Tested with Cypress and Applitools 

This blogging app is a basic example of a Remix app using the Remix App Server. It's almost entirely based on the tutorial from the Remix's site, except that this demo has additional routes and tests built with Cypress and Applitools.

## Development

From your terminal:

```sh
npm install
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

## Testing Locally

After you start your application, you can begin running the Cypress test suite. 

**Note:** The tests assume the default port is `3000`, meaning your app is running under `localhost:3000`. If that's not the case, update your test with an appropriate URL.

To run all non-Applitools tests, you can simply call:

```sh
npm test
```

or if you'd like to see your tests in the [Cypress Studio](https://docs.cypress.io/guides/core-concepts/cypress-studio#Overview), run the following:

```sh
npm run cypress-open
```

**Note:** To successfully run Applitools tests, you need to provide `APPLITOOLS_API_KEY` in either your `applitools.config.js` or your cli like `APPLITOOLS_API_KEY="[Your API Key]" npm test`. You can read more about this step in this article [LINK NEW ARTICLE].


```
module.exports = {
  testConcurrency: 1,
  apiKey: "NOT_SHARING_MY_APPLITOOLS_API_KEY",
  browser: [
    // Add browsers with different viewports
    { width: 800, height: 600, name: "chrome" },
  ],
  // set batch name to the configuration
  batchName: "Remix Demo App",
};
```