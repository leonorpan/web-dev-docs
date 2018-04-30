---
title: "The index.js"
---

## Adding javascript
___

Great! Now let's add some javascript!

### Adding the javascript file to our html

```html
<script src="index.js"></script>
```

**It's recommended to add the script right before the closing of the body tag**

This will make sure the document is loaded before the javascript ( and you don't need any document.ready function )

### Index.js

```javascript
'use strict';

const mySimpleWebApp = function() {

    function showMessage(){
        alert('Thanks for clicking!')
    }

    return{
      showMessage:showMessage
    }
  }();
```

### Now let's add a button in our <main></main> that uses the showMessage function

```html
<button type="button" onclick="mySimpleWebApp.showMessage()">Click me!</button>
```

Awesome!

In the next chapter, we will deploy our first app!

