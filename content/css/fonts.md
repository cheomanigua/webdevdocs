## Add fonts

1. Download the fonts from your preferred website. For this example, we download the fonts **futura-pt-book.otf**
2. Move the fonts to your preferred directory in your site. For this example: `/resources`
3. Add these lines on `index.html`. Note that `style` block is placed before the `lin>``tag for the css file.
```
<style>
  @font-face {
    font-family: "futura-pt";
    src: url("resources/futura-pt-book.otf");
  }
</style>
<link rel="stylesheet" href="css/styles.css">
```
4. Add these lines to `css/styles.css`:
```
html {
  font-family: 'futura-pt', helvetica, san-serif;
  font-size: 100%;
  color: rgba(12, 12, 10, 0.8); }
```