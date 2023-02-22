---
title: Track subdomains
sidebar_position: 3
---

It is common for a business also to have multiple subdomains along (eg. `docs.bayanplus.co`, `cdn.bayanplus.co`) so If your website has subdomains you want to track it also, you can do so with two options. Either create new project for this subdomain, or re-use the same script across the subdomains.

:::info
When Bayanplus recieves new tracking request, it checks the `host` and see if it matches the domain of project or it is subdomain, if so it accepts it otherwise distract it.
:::

## Tracking subdomains options

In simple words, you can do either of these things:

- **Multiple subdomains, multiple dashboards**:
  For each subdomains you have (eg. `docs.bayanplus.co`, `cdn.bayanplus.co`) you can create a project for each one with isolated dashboard, each project (subdomain) will have it is own script.
  Sessions will be isolated for each subdomains (eg. if someone visited `cdn.bayanplus.co` and then went to `docs.bayanplus.co` it will be counted as one two seperate sessions)
- **Multiple subdomains, one dashboard**,
  Create just one project that for your domains and all your subdomains you want track, and place the same script on all the subdomains. Sessions will be tracked across the subdomains (eg. if someone visited `cdn.bayanplus.co` and then went to `docs.bayanplus.co` it will be counted as one session).

For example, If someone visited `bayanplus.co` after few minutes went to `docs.bayanplus.co` to read the documenation. Since both domains use the same script (the 2nd option). Bayanplus will automatically group and merge the tracking data made across those domains in one dashboard for you.

**It is more convenient and easier to use the 2nd option** which you can simply just put the script on one or more domains (eg. `bayanplus.co`, `docs.bayanplus.co`) and Bayanplus will merge the analytics data then for you.
