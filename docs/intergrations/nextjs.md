---
title: NextJS
sidebar_position: 2
---

To integrate Bayanplus to your NextJs application, you need to install the offical npm library by running

```
npm install bayanplus-js
# or with yarn
yarn add bayanplus-js
```

## Usage

After you install it, you can start using it by calling `bayanplus.init()` and pass the `projectId` as a parameter to so bayanplus can recognize you project. After that **Bayanplus will track page views automatically** [see this](../getting-started/add-bayanplus-to-your-website.md#automatic-tracking)

```javascript
// /pages/_app.js
import bayanplus from "bayanplus-js";
useEffect(() => {
  bayanplus.init({
    projectId: "xxxx",
    isDev: false, //  if you data set to `true` so your data won't be tracked in case you are in development mode
  });
}, []);
return <Component {...pageProps} />;
```

## Sending custom events

```javascript
import bayanplus from "bayanplus-js";
import { useState } from "react";

export function SignupForm(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Record custom event on submit
    bayanplus.event("Signup to newsletter");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subscribe to newsletter 🎉:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
