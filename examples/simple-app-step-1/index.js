'use strict';

const mySimpleWebApp = function() {

    function showMessage(){
        alert('Thanks for clicking!')
    }

    return{
      showMessage:showMessage
    }
  }();