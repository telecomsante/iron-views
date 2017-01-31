#&lt;iron-views&gt;

`iron-views` is directly derived from [Polymer's iron-pages](https://github.com/PolymerElements/iron-pages).

`iron-pages` was forked because it hides unselected pages by using `display: none` which is currently [not an option with Electron's webviews](http://electron.atom.io/docs/api/web-view-tag/#css-styling-notes)

The Example remains the same as for `iron-pages`:

```html
<iron-views selected="0">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</iron-pages>

<script>
  document.addEventListener('click', function(e) {
    var views = document.querySelector('iron-views');
    views.selectNext();
  });
</script>
```


