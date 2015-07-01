# <%= plugin_title %> [![Build Status][ci-img]][ci]

<%= plugin_title %> is [PostCSS] plugin that <%= plugin_desc %>.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/<%= github_name %>/<%= plugin_name %>.svg
[ci]:      https://travis-ci.org/<%= github_name %>/<%= plugin_name %>

```css
.foo {
    /* Input example */
}
```

```css
.foo {
    /* Output example */
}
```

## Usage

```js
postcss([ require('<%= plugin_name %>') ])
```

See [PostCSS] docs for examples for your environment.
