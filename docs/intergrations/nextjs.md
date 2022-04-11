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
import bayanplus from 'bayanplus-js'
useEffect(() => {
      bayanplus.init({
        projectId: "xxxx",
      })
  }, [])
return  <Component {...pageProps} />
```
## Tracking with localhost
Bayanplus does not accept data coming from developemt enviroment, so if you are in development mode using something like `localhost:3000` it wouldn't work. However, you can bypass that by passing `trackLocalhost: true`

```javascript
// /pages/_app.js
import bayanplus from 'bayanplus-js'
function MyApp({ Component, pageProps }) {

useEffect(() => {
      bayanplus.init({
        projectId: "xxxx",
        trackLocalhost: true,
      })
  }, [])
  
return  <Component {...pageProps} />
}
export default MyApp;
```

## Sending custom events
```javascript
import bayanplus from 'bayanplus-js'
import { useState } from "react";

export function SignupForm(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Record custom event on submit
    bayanplus("Signup to newsletter");
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