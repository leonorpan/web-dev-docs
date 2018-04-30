---
title: "The index.css"
---

# Adding some beauty

We like things to be beautiful right?

### Import css to your html

```html
<link rel="stylesheet" type="text/css" href="index.css">
```

Make sure the ``` href``` attribute has the correct value.
For example, if you named your css ``` app.css``` this will not work.


## Open index.css

This is an example of my css styling. Feel free to implement your own beauty :)

```css
* {
    box-sizing: border-box;
}

body,
html {
    height: 100%;
    background-color: #F3E9D2;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-top: 0;
}

body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

header,
footer {
    display: flex;
    justify-content: center;
    align-items: center
}

header {
    width: 100%;
    height: 80px;
    background-color: #114B5F;
    font-size: 1.5rem;
}

header .home {
    color: #F3E9D2
}

main {
    min-height: calc(100vh - 130px);
    overflow: hidden;
}

main .content {
    text-align: center;
    padding-top: 100px;
}

footer {
    height: 50px;
    width: 100%;
    background-color: #C6DABF;
    text-align: center;
}

```

Refresh the page or open it again with your browser...! 
