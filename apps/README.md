# Next Now SSR Bug reproduction

This is a simple static + next.js app that specify's a custom now build and routing.

```
{
  "version": 2,
  "build": {
    "env": {
      "BUILDING_FOR_NOW": "true"
    }
  },
  "builds": [
    { "src": "index.html", "use": "@now/static" },
    { "src": "apps/package.json", "use": "@now/next" }
  ],
  "routes": [{ "src": "/next(.*)", "dest": "apps/$1" }]
}
```

**What I expect**

Navigating to `/next/123` should render the `[post]` page and output `Your post id is 123`.

**What's Happening**

`/next/123` produces a 404. `/apps/123` renders the page, but doesn't pass down the SSR response.
