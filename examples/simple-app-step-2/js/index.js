'use strict';

const mySimpleWebApp = function() {
    let history = null

    function showMessage(){
        alert('Thanks for clicking!')
    }

    function navigateTo(event) {
      history.push("/home", { some: "state" })
  }

    function init () {
      history = createBrowserHistory()

      // Get the current location.
      const location = history.location

      // Listen for changes to the current location.
      const unlisten = history.listen((location, action) => {
      // location is an object like window.location
        console.log(action, location.pathname, location.state)
      })
    }

    return {
      showMessage:showMessage,
      navigateTo: navigateTo,
      init: init,
    }
  }();

  mySimpleWebApp.init()