var greeting = require("./greeting.js");
var log = require("./log.js");

(function () {
    var welcomeBtn = document.getElementById("welcomeBtn");
    var welcomeMsg = document.getElementById("welcomeMsg");

    log();

    welcomeBtn.addEventListener('click',  function(){ greeting(welcomeMsg)});
})();
