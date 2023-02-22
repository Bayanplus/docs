---
title: Add Bayanplus to your website
sidebar_position: 1
---

To add Bayanplus to your website, you will need to add the below this line of code to the `<head></head>` tag in you HTML file

The tracking script has `data-pid` parameter which has your project id and you must add it so the script can work. You can find it in the setting page of your project, it will look something like this, or can copy and paste the code from the setting page in your project directly

If you are using Javascript library/framework like React **we recommond checking** [this](../libraries/javascript.md)

```html
<script
  defer
  data-pid="Your Project Id"
  src="https://cdn.bayanplus.co/bp.js"
></script>
```

:::info

Bayanplus will only accept tracking request that has project id parameter `pid` and are coming from the project exact domain and it is subdomains

:::

## Development mode

If you are in development mode using something like `localhost:3000` you can use the attribute `data-dev` which will not record events

```html
<script
  defer
  data-dev
  data-pid="Your Project Id"
  src="https://cdn.bayanplus.co/bp.js"
></script>
```

## Automatic tracking

All page views are **automatically tracked**, you don't need any extra configuration whatsoever, we send a new request anytime the URL changes. We track traditional websites that has many HTML pages and SPAs like React, Angular and Vue.

If you need custom event tracking like tracking button click or signup then definitely check out [custom event tracking](../how-to/track-custom-events.md)
