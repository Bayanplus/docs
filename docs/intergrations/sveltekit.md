---
title: SvelteKit
sidebar_position: 2
---

To integrate Bayanplus to your SvelteKit application, you need to install the offical npm library by running

```
npm install bayanplus-js
# or with yarn
yarn add bayanplus-js
```

## Usage

After you install it, you can start using it by calling `bayanplus.init()`inside the `onMount` lifecycle function in `+layout.svelte` and pass the `projectId` as a parameter to so bayanplus can recognize you project. After that **Bayanplus will track page views automatically** [see this](../getting-started/add-bayanplus-to-your-website.md#automatic-tracking)

```javascript
// routes/+layout.svelte
<script>
  import bayanplus from "bayanplus-js";
  import { onMount } from 'svelte';

  onMount(() => {
    bayanplus.init({
      projectId: "xxxx",
      isDev: false, //  if you data set to `true` so your data won't be tracked in case you are in development mode
    });
  };
</script>

<slot />

```

## Sending custom events

```javascript
<script>
  // routes/signup/+page.svelte
  import bayanplus from "bayanplus-js";

  let email = ""

  const handleSubmit = (e) => {
    e.preventDefault();
    // Record custom event on submit
    bayanplus.event("Signup to newsletter");
  };
</script>

<form on:submit={handleSubmit}>
  <label>
    Subscribe to newsletter 🎉:
    <input
      type="text"
      bind:value={email}
    />
  </label>
  <input type="submit" value="Submit" />
</form>
```
