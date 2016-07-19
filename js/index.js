require("!style!css!sass!../style/main.css");
var GameManager = require('./game_manager.js')
var KeyboardInputManager = require('./keyboard_input_manager.js')
var HTMLActuator = require('./html_actuator.js')
var LocalStorageManager = require('./local_storage_manager.js')

window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
