---
title: Track custom events
sidebar_position: 1
---

Events are useful and powerful features, allowing you to get a better insights and understanding on how you visitors are intercating with you websitte. Bayanplus already track page view automatically. However, sometimes you might need to track custom actions in you website, like if newsletter sign ups, **button clicks, downloads, form submission and anything you could think of** other than page view

Bayanplus automatically groups all the events you visitors has done and show it on the dashboard. You can see from the picture the the name for all event, in our case we have `downloads`, `sign up`. The count tell you how many this event or actions has been done by your visitors, and the conversion is the perecentage of completion out of all the visitors. So for example if you had 1000 visitors last 24 hours, and only 100 from those have sign up, then the conversion rate would be 10%

## Sending an event

You can start sending custom events with no extra configurations, all you need is to make sure the script is installed, [click if you haven't](/getting-started/add-bayanplus-to-your-website).

You can start using two options:

### Using Javascript

The Bayanplus script you have installed already exposes Bayanplus object globally. You can access it in `window.bayanplus` or just `bayanplus` is enough. If you are using a javascript framework or build tool we recommand using our offical npm library [bayanplus-js](https://www.npmjs.com/package/bayanplus-js)

To track an event, simple call `bayanplus()` function in your code. and pass the name of the event you want, Sign up for example

```javascript
window.bayanplus.event("Sign up");
// or
bayanplus.event("Sign up");
```

For the above example, the `Sign up` event will be recorded to current visitor session. The `event` function takes an argument which is the name of the event, we recommand giving **short and straightforward** events name

### Using HTML attributes

This an easier approach to track custom events, no need to write any Javascript, just add `data-bayanplus-event` to the HTML element you want.

You need to specfiy the name of the event and whenever this element is clicked Bayanplus will automatically record it

```html
<button data-bayanplus-event="Sign up">Sign up to our website!</button>
```

#### HTML Forms

Also it is easy to track form submission just in same way using above example
just append `data-bayanplus-event` to the form element.
If the user submits the form the an event will be triggered, in below example it is called `Subscribe to newsletter`

:::info
Bayanplus will not send or record any custom data like passwords our email in below case, only the event name, so do not worry about this
:::

```html
<form data-bayanplus-event="Subscribe to newsletter">
  <input name="email" type="email" />
  <button type="submit">Subscribe</button>
</form>
```
