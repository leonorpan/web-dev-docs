---
title: "The simple web page possible"
---

We are going to start by developing the simplest web page ever made.
The only thing you need is an html and a css file.

> You can find the code for this example [here](https://github.com/leonorpan/web-dev-docs/tree/master/examples/simple-html-css)

### Create a new directory and navigate into it

```
$ mkdir simple-app-step-1
$ cd simple-app-step-1
```

### Create the html, css and javascript files

``` 
$ touch index.html
$ touch index.css
$ touch index.js
```

This is how the structure of your directory should look like:

```
simple-app-step-1/
  index.js
  index.css
  index.html
```

Nice! We have a directory with everything we need! We are ready to go!

Here is an example of my index.html:

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
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
            <button type="button" onclick="mySimpleWebApp.showMessage()">Click me!</button>
        </div>
    </main>

    <footer>
        <div>Build with 💜 by me</div>
    </footer>
    <script src="index.js"></script>
</body>

</html>
```


🎉 🎉 Right click on your index.html and open it with your favorite browser 🎉 🎉

Feel free to play around, and in the next step, we will deploy our app to the INTERNET!
Stay tuned!


## Tips:

* Stuck finding colors for styling? [Here](https://coolors.co/114b5f-1a936f-88d498-c6dabf-f3e9d2) is a cool tool that can inspire you.

