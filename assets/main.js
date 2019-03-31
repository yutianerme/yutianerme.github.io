$(document).ready(function() {

  'use strict';

  $("#my-world").on("touchstart", touchStart);
  $("#my-world").on("touchend", touchEnd);


 
  function touchStart(event) {
    document.getElementById("my-world").innerText="World";
  }

  function touchEnd(event) {
    document.getElementById("my-world").innerText="添儿";
  }
});