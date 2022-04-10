---
title: Exclude pages from being tracked
sidebar_position: 3
---

By default Bayanplus does what is called [Automatic Tracking](/getting-started/add-bayanplus-to-your-website#automatic-tracking). But what if there are some pages in your website that you don't want them to be tracked and included in your dashboard? you can do that with the help of our script, the script will recognize the pages you want to be excluded and will just simple ignore them from being tracked

Here's how you can do that with help of our script

## Use `data-exclude` to exclude pages

Once you have added the embedded [Bayanplus script](/getting-started/add-bayanplus-to-your-website) all you need to is to `data-exclude` attribute to the script with the pages you want to exclude.
For example let's say we want to exclude `/login` page from being tracked. 

Here's how it will look like:
```html
<script defer data-exclude="/login" pid="Your Project Id" src="https://cdn.bayanplus.co/bp.js"></script>
```
You can see the attribute `data-exclude="/login"` was added to the origin script which will help up to exclude `/login` page and now it **will not** be count int your Bayanplus dashboard

:::caution
You want to exclude a pages, just make sure to include '/' in the beginning.
Do this `data-exclude="/login"` 
and not this `data-exclude="login"` 
:::

## Exclude multiple pages

You can also exclude as many pages as you just make sure they are **coma-seperated**.
For example let's say we want to exclude `/login`, `/register` and `/hello` from being tracked. 

Just add them together and seperate them with a coma:

```html
<script defer data-exclude="/login, /register, /hello" pid="Your Project Id" src="https://cdn.bayanplus.co/bp.js"></script>
```

## Advanced pages excluding 
 
Bayanplus script will recognize the below format for excluding pages
```
data-exclude="/login, /admin/*, /blog-*, /*/admin, /*/stat/*"
```
Any page listed in this format will not be tracked. The asterisk `*` in simple words means **anything**.

Example 
- `/admin/*` is `/admin/<anything>`, will exclude any path that comes after `/admin/` like 
`/admin/profile` or `/admin/password` 

- `/blog-*` is `/blog-<anything>`, anything comes in format of `/blog-*` like `/blog-1` or `/blog-2323` will be excluded.

- `*/admin/` is  `<anything>/admin `, will exclude any path comes in format of `*/admin` like `/users/admin`

- `*/stat/*` is  `<anything>/stat/<anything> `, will exclude any path comes in format of `*/stat/*` like `/dashboard/stat/main`








