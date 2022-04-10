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

## Subdomains

It is common for a business also to have multiple subdomains along (eg. `docs.bayanplus.co`, `cdn.bayanplus.co`) so If your website has subdomains you want to track it also, you can do so with two options. Either create new project for this subdomain, or re-use the same script across the subdomains. Bayanplus automaticlly 

> When Bayanplus recieves new tracking request, it checks the `host` and see if it matches the domain of project or it is subdomain, if so it accepts it otherwise distract it.

### Tracking Subdomains

Simply just put the script on one or more domains (eg. `bayanplus.co`, `docs.bayanplus.co`). Bayanplus will merge the analytics data then for you

Let's summary the options for tracking subdomain in simple words:
- **Multiple subdomains, multiple dashboards**:
For each subdomains you have (eg. `docs.bayanplus.co`, `cdn.bayanplus.co`) you can create a project for each one with isolated dashboard, each project (subdomain) will have it is own script.
Sessions will be isolated for each subdomains (eg. if someone visited `cdn.bayanplus.co` and then went to `docs.bayanplus.co` it will be counted as one two seperate sessions)
- **Multiple subdomains, one dashboard**, 
Create just one project that for your domains and all your subdomains you want track, and place the same script on all the subdomains. Sessions will be tracked across the subdomains (eg. if someone visited `cdn.bayanplus.co` and then went to `docs.bayanplus.co` it will be counted as one session)

For example, If someone visited `bayanplus.co` after few minutes went to `docs.bayanplus.co` to read the documenation. Since both domains use the same script (the 2nd option). Bayanplus will automatically group and merge the tracking data made across those domains in one dashboard for you.  