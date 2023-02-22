---
title: Track users
sidebar_position: 2
---

Creating user profiles allows you to store custom data about your users, such as their name, email, or ID, in addition to the data that Bayanplus already stores, you can view them in Users page. A profile is a user with attached custom data.

To create a basic profile, you can use the `bayanplus.user.set()` function and provide the desired data, like this:

```typescript
bayanplus.user.set({
  id: 123456,
  name: "Salah",
  email: "Salah@gmail.com",
});
```

## Authenticate your users

If you want to authenticate your users, you can set a unique ID using the same function, this is useful
if you have multiple apps or devices and you want track the user across them.
Bayanplus will recognised **id** as unique identifier.
It will convert anonymous session into a **Profile**

```typescript
bayanplus.user.set({ id: 123456 });
```

## Write custom data

When you create a user profile, you can attach custom data to the user, such as their plan type or their preferred color scheme. You can set this data using the `bayanplus.user.set()` function:

```typescript
bayanplus.user.set({ plan: "free", isDarkMode: true });
bayanplus.user.set({ name: "Salah", email: "salah@bayanplus.co" });
```

You can call this function at any time to store data for the user. By default, data is appended to any existing data for the user. If you provide a field that already exists, it will be overwritten.

To retrieve the data you have set for the user, you can use the `bayanplus.user.get()` function.
