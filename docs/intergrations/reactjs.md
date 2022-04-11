---
title: ReactJS
sidebar_position: 2
---


To integrate Bayanplus to your React application, **you have two options**, either embed the Bayanplus script in you html file [see here](../getting-started/add-bayanplus-to-your-website.md) 

Or to install the offical npm library by running

```
npm install bayanplus-js
# or with yarn
yarn add bayanplus-js
```

## Usage
After you install it, you can start using it by calling `bayanplus.init()` and pass the `projectId` as a parameter to so bayanplus can recognize you project. After that **Bayanplus will track page views automatically** [see this](../getting-started/add-bayanplus-to-your-website.md#automatic-tracking)
```javascript
import bayanplus from 'bayanplus-js'

// first and most important initiliaze the app with the project id
// you can find the project id on https://bayanplus.co
// you only need to do this once
bayanplus.init({
    projectId: 'xxxxx'
})

// if you are in development mode
bayanplus.init({
    projectId: 'xxxxx',
    trackLocalhost:true
})
// now you can track any event you want like
// you can track as many events you want on any file as long as you initiliazed the app
bayanplus.track('Buy Book')

```