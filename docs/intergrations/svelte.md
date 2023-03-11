---
title: Svelte
sidebar_position: 2
---

To integrate Bayanplus to your Svelte application, **you have two options**, either embed the Bayanplus script in you html file [see here](../getting-started/add-bayanplus-to-your-website.md)

Or to install the offical npm library by running

```
npm install bayanplus-js
# or with yarn
yarn add bayanplus-js
```

## Usage

After you install it, you can start using it by calling `bayanplus.init()` and pass the `projectId` as a parameter to so bayanplus can recognize you project. After that **Bayanplus will track page views automatically** [see this](../getting-started/add-bayanplus-to-your-website.md#automatic-tracking)

```javascript
import bayanplus from "bayanplus-js";

// first and most important initiliaze the app with the project id
// you can find the project id on https://bayanplus.co
// you only need to do this once
bayanplus.init({
  projectId: "xxxxx",
  isDev: false,
});

// now you can track any event you want like
// you can track as many events you want on any file as long as you initiliazed the app
bayanplus.event("Buy Book");
```

To initilize `bayanplus-js` once in your app, you can do it in the top-level component. If you are using Vite, this will be inside `src/App.svelte` file by default.

```javascript
<script>
// src/App.svelte
import bayanplus from "bayanplus-js";

bayanplus.init({
  projectId: "xxxxx",
  isDev: false,
});
</script>

<!-- rest of your app -->
```