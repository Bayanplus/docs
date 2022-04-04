---
title: Add Bayanplus to your website
sidebar_position: 1
---


To add Bayanplus to your website, you will need to add the below this line of code to the `<head></head>` tag in you HTML file

The tracking script has `pid` parameter which has your project id and you must add it so the script can work. You can find it in the setting page of your project, it will look something like this, or can copy and paste the code from the setting page in your project directly

```html
<script defer pid="Your Project Id" src="https://cdn.bayanplus.co/bp.js"></script>
```
 
> 💡 *Bayanplus will only accept tracking request that has project id parameter `pid` and are coming from the project exact domain and it is subdomains*

## Automatic tracking

All page views are **automatically tracked**, you don't need any extra configuration whatsoever, we send a new request anytime the URL changes. We track traditional websites that has many HTML pages and SPAs like React, Angular and Vue. 

If you need custom event tracking like tracking button click or signup then definitely check out [custom event tracking](add-bayanplus-to-your-website.md)

