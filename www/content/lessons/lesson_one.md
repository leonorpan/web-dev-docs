---
title: "The simple web page possible"
---

We are going to start by developing the simplest web page ever made.

The only thing you need is an html and a css file.

First, create a new directory

```
$ mkdir simple-page
$ cd simple-page
```

Create the html and css

``` 
$ touch index.html
$ touch index.css
```

Nice! We have a directory with an html and css file! We are ready to go!

In our index.html:

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Hello page</title>    
    <link rel="stylesheet" type="text/css" href="index.css">
</head>

<body>
    <header>
        <a href="#" class="home">Home</a>
    </header>

    <main>
        <div class="content">
            <h1>Hello world! </h1>
            <h2>This is a very simple page for now...</h2>
        </div>
    </main>

    <footer>
        <div>Build with 💜 by me</div>
    </footer>
</body>

</html>
```

Open index.html with your favorite browser.
Ugly right? Let's add some css.

```css
* {
    box-sizing: border-box;
}

body,
html {
    height: 100%;
    background-color: #F3E9D2;
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

Open index.html with your browser. Cool isn't it?
Feel free to play with the css and styling.

## Tips:

* Stuck finding colors? Here is a cool tool that can inspire you https://coolors.co/114b5f-1a936f-88d498-c6dabf-f3e9d2

## Question:

* If I remove ``` overflow: hidden;  ``` rule from the ``` main ```, the footer moves down a few pixels. Can you explain why?

( https://css-tricks.com/what-you-should-know-about-collapsing-margins/)

In the next chapter, we will publish our website. Stay tuned!
