/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/2048/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var GameManager = __webpack_require__(15)
	var KeyboardInputManager = __webpack_require__(19)
	var HTMLActuator = __webpack_require__(20)
	var LocalStorageManager = __webpack_require__(21)

	window.requestAnimationFrame(function () {
	  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.i(__webpack_require__(4), "");

	// module
	exports.push([module.id, "html, body {\n  margin: 0;\n  padding: 0;\n  background: #faf8ef;\n  color: #776e65;\n  font-family: \"Clear Sans\", \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 18px; }\n\nbody {\n  margin: 80px 0; }\n\n.heading:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\nh1.title {\n  font-size: 80px;\n  font-weight: bold;\n  margin: 0;\n  display: block;\n  float: left; }\n\n@-webkit-keyframes move-up {\n  0% {\n    top: 25px;\n    opacity: 1; }\n  100% {\n    top: -50px;\n    opacity: 0; } }\n\n@-moz-keyframes move-up {\n  0% {\n    top: 25px;\n    opacity: 1; }\n  100% {\n    top: -50px;\n    opacity: 0; } }\n\n@keyframes move-up {\n  0% {\n    top: 25px;\n    opacity: 1; }\n  100% {\n    top: -50px;\n    opacity: 0; } }\n\n.scores-container {\n  float: right;\n  text-align: right; }\n\n.score-container, .best-container {\n  position: relative;\n  display: inline-block;\n  background: #bbada0;\n  padding: 15px 25px;\n  font-size: 25px;\n  height: 25px;\n  line-height: 47px;\n  font-weight: bold;\n  border-radius: 3px;\n  color: white;\n  margin-top: 8px;\n  text-align: center; }\n\n.score-container:after, .best-container:after {\n  position: absolute;\n  width: 100%;\n  top: 10px;\n  left: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  line-height: 13px;\n  text-align: center;\n  color: #eee4da; }\n\n.score-container .score-addition, .best-container .score-addition {\n  position: absolute;\n  right: 30px;\n  color: red;\n  font-size: 25px;\n  line-height: 25px;\n  font-weight: bold;\n  color: rgba(119, 110, 101, 0.9);\n  z-index: 100;\n  -webkit-animation: move-up 600ms ease-in;\n  -moz-animation: move-up 600ms ease-in;\n  animation: move-up 600ms ease-in;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.score-container:after {\n  content: \"Score\"; }\n\n.best-container:after {\n  content: \"Best\"; }\n\np {\n  margin-top: 0;\n  margin-bottom: 10px;\n  line-height: 1.65; }\n\na {\n  color: #776e65;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer; }\n\nstrong.important {\n  text-transform: uppercase; }\n\nhr {\n  border: none;\n  border-bottom: 1px solid #d8d4d0;\n  margin-top: 20px;\n  margin-bottom: 30px; }\n\n.container {\n  width: 500px;\n  margin: 0 auto; }\n\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.game-container {\n  margin-top: 40px;\n  position: relative;\n  padding: 15px;\n  cursor: default;\n  -webkit-touch-callout: none;\n  -ms-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -ms-touch-action: none;\n  touch-action: none;\n  background: #bbada0;\n  border-radius: 6px;\n  width: 500px;\n  height: 500px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.game-container .game-message {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(238, 228, 218, 0.5);\n  z-index: 100;\n  text-align: center;\n  -webkit-animation: fade-in 800ms ease 1200ms;\n  -moz-animation: fade-in 800ms ease 1200ms;\n  animation: fade-in 800ms ease 1200ms;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.game-container .game-message p {\n  font-size: 60px;\n  font-weight: bold;\n  height: 60px;\n  line-height: 60px;\n  margin-top: 222px; }\n\n.game-container .game-message .lower {\n  display: block;\n  margin-top: 59px; }\n\n.game-container .game-message a {\n  display: inline-block;\n  background: #8f7a66;\n  border-radius: 3px;\n  padding: 0 20px;\n  text-decoration: none;\n  color: #f9f6f2;\n  height: 40px;\n  line-height: 42px;\n  margin-left: 9px; }\n\n.game-container .game-message a.keep-playing-button {\n  display: none; }\n\n.game-container .game-message.game-won {\n  background: rgba(237, 194, 46, 0.5);\n  color: #f9f6f2; }\n\n.game-container .game-message.game-won a.keep-playing-button {\n  display: inline-block; }\n\n.game-container .game-message.game-won, .game-container .game-message.game-over {\n  display: block; }\n\n.grid-container {\n  position: absolute;\n  z-index: 1; }\n\n.grid-row {\n  margin-bottom: 15px; }\n\n.grid-row:last-child {\n  margin-bottom: 0; }\n\n.grid-row:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.grid-cell {\n  width: 106.25px;\n  height: 106.25px;\n  margin-right: 15px;\n  float: left;\n  border-radius: 3px;\n  background: rgba(238, 228, 218, 0.35); }\n\n.grid-cell:last-child {\n  margin-right: 0; }\n\n.tile-container {\n  position: absolute;\n  z-index: 2; }\n\n.tile, .tile .tile-inner {\n  width: 107px;\n  height: 107px;\n  line-height: 107px; }\n\n.tile.tile-position-1-1 {\n  -webkit-transform: translate(0px, 0px);\n  -moz-transform: translate(0px, 0px);\n  -ms-transform: translate(0px, 0px);\n  transform: translate(0px, 0px); }\n\n.tile.tile-position-1-2 {\n  -webkit-transform: translate(0px, 121px);\n  -moz-transform: translate(0px, 121px);\n  -ms-transform: translate(0px, 121px);\n  transform: translate(0px, 121px); }\n\n.tile.tile-position-1-3 {\n  -webkit-transform: translate(0px, 242px);\n  -moz-transform: translate(0px, 242px);\n  -ms-transform: translate(0px, 242px);\n  transform: translate(0px, 242px); }\n\n.tile.tile-position-1-4 {\n  -webkit-transform: translate(0px, 363px);\n  -moz-transform: translate(0px, 363px);\n  -ms-transform: translate(0px, 363px);\n  transform: translate(0px, 363px); }\n\n.tile.tile-position-2-1 {\n  -webkit-transform: translate(121px, 0px);\n  -moz-transform: translate(121px, 0px);\n  -ms-transform: translate(121px, 0px);\n  transform: translate(121px, 0px); }\n\n.tile.tile-position-2-2 {\n  -webkit-transform: translate(121px, 121px);\n  -moz-transform: translate(121px, 121px);\n  -ms-transform: translate(121px, 121px);\n  transform: translate(121px, 121px); }\n\n.tile.tile-position-2-3 {\n  -webkit-transform: translate(121px, 242px);\n  -moz-transform: translate(121px, 242px);\n  -ms-transform: translate(121px, 242px);\n  transform: translate(121px, 242px); }\n\n.tile.tile-position-2-4 {\n  -webkit-transform: translate(121px, 363px);\n  -moz-transform: translate(121px, 363px);\n  -ms-transform: translate(121px, 363px);\n  transform: translate(121px, 363px); }\n\n.tile.tile-position-3-1 {\n  -webkit-transform: translate(242px, 0px);\n  -moz-transform: translate(242px, 0px);\n  -ms-transform: translate(242px, 0px);\n  transform: translate(242px, 0px); }\n\n.tile.tile-position-3-2 {\n  -webkit-transform: translate(242px, 121px);\n  -moz-transform: translate(242px, 121px);\n  -ms-transform: translate(242px, 121px);\n  transform: translate(242px, 121px); }\n\n.tile.tile-position-3-3 {\n  -webkit-transform: translate(242px, 242px);\n  -moz-transform: translate(242px, 242px);\n  -ms-transform: translate(242px, 242px);\n  transform: translate(242px, 242px); }\n\n.tile.tile-position-3-4 {\n  -webkit-transform: translate(242px, 363px);\n  -moz-transform: translate(242px, 363px);\n  -ms-transform: translate(242px, 363px);\n  transform: translate(242px, 363px); }\n\n.tile.tile-position-4-1 {\n  -webkit-transform: translate(363px, 0px);\n  -moz-transform: translate(363px, 0px);\n  -ms-transform: translate(363px, 0px);\n  transform: translate(363px, 0px); }\n\n.tile.tile-position-4-2 {\n  -webkit-transform: translate(363px, 121px);\n  -moz-transform: translate(363px, 121px);\n  -ms-transform: translate(363px, 121px);\n  transform: translate(363px, 121px); }\n\n.tile.tile-position-4-3 {\n  -webkit-transform: translate(363px, 242px);\n  -moz-transform: translate(363px, 242px);\n  -ms-transform: translate(363px, 242px);\n  transform: translate(363px, 242px); }\n\n.tile.tile-position-4-4 {\n  -webkit-transform: translate(363px, 363px);\n  -moz-transform: translate(363px, 363px);\n  -ms-transform: translate(363px, 363px);\n  transform: translate(363px, 363px); }\n\n.tile {\n  position: absolute;\n  -webkit-transition: 100ms ease-in-out;\n  -moz-transition: 100ms ease-in-out;\n  transition: 100ms ease-in-out;\n  -webkit-transition-property: -webkit-transform;\n  -moz-transition-property: -moz-transform;\n  transition-property: transform; }\n\n.tile .tile-inner {\n  border-radius: 3px;\n  background: #eee4da;\n  text-align: center;\n  font-weight: bold;\n  z-index: 10;\n  font-size: 55px; }\n\n.tile.tile-2 .tile-inner {\n  background: #eee4da;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0); }\n\n.tile.tile-4 .tile-inner {\n  background: #ede0c8;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0); }\n\n.tile.tile-8 .tile-inner {\n  color: #f9f6f2;\n  background: #f2b179; }\n\n.tile.tile-16 .tile-inner {\n  color: #f9f6f2;\n  background: #f59563; }\n\n.tile.tile-32 .tile-inner {\n  color: #f9f6f2;\n  background: #f67c5f; }\n\n.tile.tile-64 .tile-inner {\n  color: #f9f6f2;\n  background: #f65e3b; }\n\n.tile.tile-128 .tile-inner {\n  color: #f9f6f2;\n  background: #edcf72;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);\n  font-size: 45px; }\n\n@media screen and (max-width: 520px) {\n  .tile.tile-128 .tile-inner {\n    font-size: 25px; } }\n\n.tile.tile-256 .tile-inner {\n  color: #f9f6f2;\n  background: #edcc61;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);\n  font-size: 45px; }\n\n@media screen and (max-width: 520px) {\n  .tile.tile-256 .tile-inner {\n    font-size: 25px; } }\n\n.tile.tile-512 .tile-inner {\n  color: #f9f6f2;\n  background: #edc850;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);\n  font-size: 45px; }\n\n@media screen and (max-width: 520px) {\n  .tile.tile-512 .tile-inner {\n    font-size: 25px; } }\n\n.tile.tile-1024 .tile-inner {\n  color: #f9f6f2;\n  background: #edc53f;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);\n  font-size: 35px; }\n\n@media screen and (max-width: 520px) {\n  .tile.tile-1024 .tile-inner {\n    font-size: 15px; } }\n\n.tile.tile-2048 .tile-inner {\n  color: #f9f6f2;\n  background: #edc22e;\n  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);\n  font-size: 35px; }\n\n@media screen and (max-width: 520px) {\n  .tile.tile-2048 .tile-inner {\n    font-size: 15px; } }\n\n.tile.tile-super .tile-inner {\n  color: #f9f6f2;\n  background: #3c3a32;\n  font-size: 30px; }\n\n@media screen and (max-width: 520px) {\n  .tile.tile-super .tile-inner {\n    font-size: 10px; } }\n\n@-webkit-keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@-moz-keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes appear {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n.tile-new .tile-inner {\n  -webkit-animation: appear 200ms ease 100ms;\n  -moz-animation: appear 200ms ease 100ms;\n  animation: appear 200ms ease 100ms;\n  -webkit-animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n\n@-webkit-keyframes pop {\n  0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@-moz-keyframes pop {\n  0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pop {\n  0% {\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -ms-transform: scale(1.2);\n    transform: scale(1.2); }\n  100% {\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1); } }\n\n.tile-merged .tile-inner {\n  z-index: 20;\n  -webkit-animation: pop 200ms ease 100ms;\n  -moz-animation: pop 200ms ease 100ms;\n  animation: pop 200ms ease 100ms;\n  -webkit-animation-fill-mode: backwards;\n  -moz-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n\n.above-game:after {\n  content: \"\";\n  display: block;\n  clear: both; }\n\n.game-intro {\n  float: left;\n  line-height: 42px;\n  margin-bottom: 0; }\n\n.restart-button {\n  display: inline-block;\n  background: #8f7a66;\n  border-radius: 3px;\n  padding: 0 20px;\n  text-decoration: none;\n  color: #f9f6f2;\n  height: 40px;\n  line-height: 42px;\n  display: block;\n  text-align: center;\n  float: right; }\n\n.game-explanation {\n  margin-top: 50px; }\n\n@media screen and (max-width: 520px) {\n  html, body {\n    font-size: 15px; }\n  body {\n    margin: 20px 0;\n    padding: 0 20px; }\n  h1.title {\n    font-size: 27px;\n    margin-top: 15px; }\n  .container {\n    width: 280px;\n    margin: 0 auto; }\n  .score-container, .best-container {\n    margin-top: 0;\n    padding: 15px 10px;\n    min-width: 40px; }\n  .heading {\n    margin-bottom: 10px; }\n  .game-intro {\n    width: 55%;\n    display: block;\n    box-sizing: border-box;\n    line-height: 1.65; }\n  .restart-button {\n    width: 42%;\n    padding: 0;\n    display: block;\n    box-sizing: border-box;\n    margin-top: 2px; }\n  .game-container {\n    margin-top: 17px;\n    position: relative;\n    padding: 10px;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -ms-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: #bbada0;\n    border-radius: 6px;\n    width: 280px;\n    height: 280px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box; }\n  .game-container .game-message {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(238, 228, 218, 0.5);\n    z-index: 100;\n    text-align: center;\n    -webkit-animation: fade-in 800ms ease 1200ms;\n    -moz-animation: fade-in 800ms ease 1200ms;\n    animation: fade-in 800ms ease 1200ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n    animation-fill-mode: both; }\n  .game-container .game-message p {\n    font-size: 60px;\n    font-weight: bold;\n    height: 60px;\n    line-height: 60px;\n    margin-top: 222px; }\n  .game-container .game-message .lower {\n    display: block;\n    margin-top: 59px; }\n  .game-container .game-message a {\n    display: inline-block;\n    background: #8f7a66;\n    border-radius: 3px;\n    padding: 0 20px;\n    text-decoration: none;\n    color: #f9f6f2;\n    height: 40px;\n    line-height: 42px;\n    margin-left: 9px; }\n  .game-container .game-message a.keep-playing-button {\n    display: none; }\n  .game-container .game-message.game-won {\n    background: rgba(237, 194, 46, 0.5);\n    color: #f9f6f2; }\n  .game-container .game-message.game-won a.keep-playing-button {\n    display: inline-block; }\n  .game-container .game-message.game-won, .game-container .game-message.game-over {\n    display: block; }\n  .grid-container {\n    position: absolute;\n    z-index: 1; }\n  .grid-row {\n    margin-bottom: 10px; }\n  .grid-row:last-child {\n    margin-bottom: 0; }\n  .grid-row:after {\n    content: \"\";\n    display: block;\n    clear: both; }\n  .grid-cell {\n    width: 57.5px;\n    height: 57.5px;\n    margin-right: 10px;\n    float: left;\n    border-radius: 3px;\n    background: rgba(238, 228, 218, 0.35); }\n  .grid-cell:last-child {\n    margin-right: 0; }\n  .tile-container {\n    position: absolute;\n    z-index: 2; }\n  .tile, .tile .tile-inner {\n    width: 58px;\n    height: 58px;\n    line-height: 58px; }\n  .tile.tile-position-1-1 {\n    -webkit-transform: translate(0px, 0px);\n    -moz-transform: translate(0px, 0px);\n    -ms-transform: translate(0px, 0px);\n    transform: translate(0px, 0px); }\n  .tile.tile-position-1-2 {\n    -webkit-transform: translate(0px, 67px);\n    -moz-transform: translate(0px, 67px);\n    -ms-transform: translate(0px, 67px);\n    transform: translate(0px, 67px); }\n  .tile.tile-position-1-3 {\n    -webkit-transform: translate(0px, 135px);\n    -moz-transform: translate(0px, 135px);\n    -ms-transform: translate(0px, 135px);\n    transform: translate(0px, 135px); }\n  .tile.tile-position-1-4 {\n    -webkit-transform: translate(0px, 202px);\n    -moz-transform: translate(0px, 202px);\n    -ms-transform: translate(0px, 202px);\n    transform: translate(0px, 202px); }\n  .tile.tile-position-2-1 {\n    -webkit-transform: translate(67px, 0px);\n    -moz-transform: translate(67px, 0px);\n    -ms-transform: translate(67px, 0px);\n    transform: translate(67px, 0px); }\n  .tile.tile-position-2-2 {\n    -webkit-transform: translate(67px, 67px);\n    -moz-transform: translate(67px, 67px);\n    -ms-transform: translate(67px, 67px);\n    transform: translate(67px, 67px); }\n  .tile.tile-position-2-3 {\n    -webkit-transform: translate(67px, 135px);\n    -moz-transform: translate(67px, 135px);\n    -ms-transform: translate(67px, 135px);\n    transform: translate(67px, 135px); }\n  .tile.tile-position-2-4 {\n    -webkit-transform: translate(67px, 202px);\n    -moz-transform: translate(67px, 202px);\n    -ms-transform: translate(67px, 202px);\n    transform: translate(67px, 202px); }\n  .tile.tile-position-3-1 {\n    -webkit-transform: translate(135px, 0px);\n    -moz-transform: translate(135px, 0px);\n    -ms-transform: translate(135px, 0px);\n    transform: translate(135px, 0px); }\n  .tile.tile-position-3-2 {\n    -webkit-transform: translate(135px, 67px);\n    -moz-transform: translate(135px, 67px);\n    -ms-transform: translate(135px, 67px);\n    transform: translate(135px, 67px); }\n  .tile.tile-position-3-3 {\n    -webkit-transform: translate(135px, 135px);\n    -moz-transform: translate(135px, 135px);\n    -ms-transform: translate(135px, 135px);\n    transform: translate(135px, 135px); }\n  .tile.tile-position-3-4 {\n    -webkit-transform: translate(135px, 202px);\n    -moz-transform: translate(135px, 202px);\n    -ms-transform: translate(135px, 202px);\n    transform: translate(135px, 202px); }\n  .tile.tile-position-4-1 {\n    -webkit-transform: translate(202px, 0px);\n    -moz-transform: translate(202px, 0px);\n    -ms-transform: translate(202px, 0px);\n    transform: translate(202px, 0px); }\n  .tile.tile-position-4-2 {\n    -webkit-transform: translate(202px, 67px);\n    -moz-transform: translate(202px, 67px);\n    -ms-transform: translate(202px, 67px);\n    transform: translate(202px, 67px); }\n  .tile.tile-position-4-3 {\n    -webkit-transform: translate(202px, 135px);\n    -moz-transform: translate(202px, 135px);\n    -ms-transform: translate(202px, 135px);\n    transform: translate(202px, 135px); }\n  .tile.tile-position-4-4 {\n    -webkit-transform: translate(202px, 202px);\n    -moz-transform: translate(202px, 202px);\n    -ms-transform: translate(202px, 202px);\n    transform: translate(202px, 202px); }\n  .tile .tile-inner {\n    font-size: 35px; }\n  .game-message p {\n    font-size: 30px !important;\n    height: 30px !important;\n    line-height: 30px !important;\n    margin-top: 90px !important; }\n  .game-message .lower {\n    margin-top: 30px !important; } }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@font-face {\n    font-family: \"Clear Sans\";\n    src: url(" + __webpack_require__(5) + ");\n    src: url(" + __webpack_require__(5) + "?#iefix) format(\"embedded-opentype\"),\n         url(" + __webpack_require__(6) + "#clear_sans_lightregular) format(\"svg\"),\n         url(" + __webpack_require__(7) + ") format(\"woff\");\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Clear Sans\";\n    src: url(" + __webpack_require__(8) + ");\n    src: url(" + __webpack_require__(8) + "?#iefix) format(\"embedded-opentype\"),\n         url(" + __webpack_require__(9) + "#clear_sansregular) format(\"svg\"),\n         url(" + __webpack_require__(10) + ") format(\"woff\");\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: \"Clear Sans\";\n    src: url(" + __webpack_require__(11) + ");\n    src: url(" + __webpack_require__(11) + "?#iefix) format(\"embedded-opentype\"),\n         url(" + __webpack_require__(12) + "#clear_sansbold) format(\"svg\"),\n         url(" + __webpack_require__(13) + ") format(\"woff\");\n    font-weight: 700;\n    font-style: normal;\n}\n\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "43f90ca76c3585fc286161208be42ca4.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f6a8d8d7f680d9eef1f499a8ebcedd87.svg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "930193fff909a5f270126f7b1c885268.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "207557cd41a54883b13627dcfd0240aa.eot";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "067209713c5d920e1b705e13bd290559.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "051b44622bff6697c5591a681f33eb6a.woff";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "92a9c29a5c673efec034d61617369a37.eot";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "637ed43d88cc8d27eb7390d16e8413ca.svg";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8e55742896553de18fbed1a44baf1d79.woff";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Grid = __webpack_require__(16);
	var Tile = __webpack_require__(17);
	var Board = __webpack_require__(18).Board;
	function GameManager(size, InputManager, Actuator, StorageManager) {
	  this.size           = size; // Size of the grid
	  this.inputManager   = new InputManager;
	  this.storageManager = new StorageManager;
	  this.actuator       = new Actuator;

	  this.startTiles     = 2;

	  // this.inputManager.on("move", this.move.bind(this));
	  this.inputManager.on("restart", this.restart.bind(this));
	  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

	  this.setup();
	  var self = this;

	  setTimeout(function(){
	    self.running = true;
	    self.run();
	  }, 2000);
	}

	// Restart the game
	GameManager.prototype.restart = function () {
	  this.running = false;
	  var self = this;

	  setTimeout(function(){
	    self.storageManager.clearGameState();
	    self.actuator.continueGame(); // Clear the game won/lost message
	    self.setup();
	  }, 500);

	  setTimeout(function(){
	    self.running = true;
	    self.run();
	  }, 2000);
	};

	// Keep playing after winning (allows going over 2048)
	GameManager.prototype.keepPlaying = function () {
	  this.keepPlaying = true;
	  this.actuator.continueGame(); // Clear the game won/lost message

	  this.running = false;
	  var self = this;
	  setTimeout(function(){
	    self.running = true;
	    self.run();
	  }, 1000);
	};

	// Return true if the game is lost, or has won and the user hasn't kept playing
	GameManager.prototype.isGameTerminated = function () {
	  return this.over || (this.won && !this.keepPlaying);
	};

	// Set up the game
	GameManager.prototype.setup = function () {
	  var previousState = this.storageManager.getGameState();

	  // Reload the game from a previous game if present
	  if (previousState) {
	    this.grid        = new Grid(previousState.grid.size,
	                                previousState.grid.cells); // Reload grid
	    this.score       = previousState.score;
	    this.over        = previousState.over;
	    this.won         = previousState.won;
	    this.keepPlaying = previousState.keepPlaying;
	    this.running     = false;
	    this.rundelay    = 600;
	  } else {
	    this.grid        = new Grid(this.size);
	    this.score       = 0;
	    this.over        = false;
	    this.won         = false;
	    this.keepPlaying = false;
	    this.running     = false;
	    this.rundelay    = 600;

	    // Add the initial tiles
	    this.addStartTiles();
	  }

	  // Update the actuator
	  this.actuate();
	};

	// Set up the initial tiles to start the game with
	GameManager.prototype.addStartTiles = function () {
	  for (var i = 0; i < this.startTiles; i++) {
	    this.addRandomTile();
	  }
	};

	// Adds a tile in a random position
	GameManager.prototype.addRandomTile = function () {
	  if (this.grid.cellsAvailable()) {
	    var value = Math.random() < 0.9 ? 2 : 4;
	    var tile = new Tile(this.grid.randomAvailableCell(), value);

	    this.grid.insertTile(tile);
	  }
	};

	// Sends the updated grid to the actuator
	GameManager.prototype.actuate = function () {
	  if (this.storageManager.getBestScore() < this.score) {
	    this.storageManager.setBestScore(this.score);
	  }

	  // Clear the state when the game is over (game over only, not win)
	  if (this.over) {
	    this.storageManager.clearGameState();
	  } else {
	    this.storageManager.setGameState(this.serialize());
	  }

	  this.actuator.actuate(this.grid, {
	    score:      this.score,
	    over:       this.over,
	    won:        this.won,
	    bestScore:  this.storageManager.getBestScore(),
	    terminated: this.isGameTerminated()
	  });

	};

	// Represent the current game as an object
	GameManager.prototype.serialize = function () {
	  return {
	    grid:        this.grid.serialize(),
	    score:       this.score,
	    over:        this.over,
	    won:         this.won,
	    keepPlaying: this.keepPlaying
	  };
	};

	// Save all tile positions and remove merger info
	GameManager.prototype.prepareTiles = function () {
	  this.grid.eachCell(function (x, y, tile) {
	    if (tile) {
	      tile.mergedFrom = null;
	      tile.savePosition();
	    }
	  });
	};

	// Move a tile and its representation
	GameManager.prototype.moveTile = function (tile, cell) {
	  this.grid.cells[tile.x][tile.y] = null;
	  this.grid.cells[cell.x][cell.y] = tile;
	  tile.updatePosition(cell);
	};

	// Move tiles on the grid in the specified direction
	GameManager.prototype.move = function (direction) {
	  // 0: up, 1: right, 2: down, 3: left
	  var self = this;

	  if (this.isGameTerminated()) return; // Don't do anything if the game's over

	  var cell, tile;

	  var vector     = this.getVector(direction);
	  var traversals = this.buildTraversals(vector);
	  var moved      = false;

	  // Save the current tile positions and remove merger information
	  this.prepareTiles();

	  // Traverse the grid in the right direction and move tiles
	  traversals.x.forEach(function (x) {
	    traversals.y.forEach(function (y) {
	      cell = { x: x, y: y };
	      tile = self.grid.cellContent(cell);

	      if (tile) {
	        var positions = self.findFarthestPosition(cell, vector);
	        var next      = self.grid.cellContent(positions.next);

	        // Only one merger per row traversal?
	        if (next && next.value === tile.value && !next.mergedFrom) {
	          var merged = new Tile(positions.next, tile.value * 2);
	          merged.mergedFrom = [tile, next];

	          self.grid.insertTile(merged);
	          self.grid.removeTile(tile);

	          // Converge the two tiles' positions
	          tile.updatePosition(positions.next);

	          // Update the score
	          self.score += merged.value;

	          // The mighty 2048 tile
	          if (merged.value === 2048) {
	            self.won = true;
	            if (!self.keepPlaying) self.running = false;
	          }
	        } else {
	          self.moveTile(tile, positions.farthest);
	        }

	        if (!self.positionsEqual(cell, tile)) {
	          moved = true; // The tile moved from its original cell!
	        }
	      }
	    });
	  });

	  if (moved) {
	    this.addRandomTile();

	    if (!this.movesAvailable()) {
	      this.over = true; // Game over!
	      this.running = false;
	    }

	    this.actuate();
	  }
	};

	// Get the vector representing the chosen direction
	GameManager.prototype.getVector = function (direction) {
	  // Vectors representing tile movement
	  var map = {
	    0: { x: 0,  y: -1 }, // Up
	    1: { x: 1,  y: 0 },  // Right
	    2: { x: 0,  y: 1 },  // Down
	    3: { x: -1, y: 0 }   // Left
	  };

	  return map[direction];
	};

	// Build a list of positions to traverse in the right order
	GameManager.prototype.buildTraversals = function (vector) {
	  var traversals = { x: [], y: [] };

	  for (var pos = 0; pos < this.size; pos++) {
	    traversals.x.push(pos);
	    traversals.y.push(pos);
	  }

	  // Always traverse from the farthest cell in the chosen direction
	  if (vector.x === 1) traversals.x = traversals.x.reverse();
	  if (vector.y === 1) traversals.y = traversals.y.reverse();

	  return traversals;
	};

	GameManager.prototype.findFarthestPosition = function (cell, vector) {
	  var previous;

	  // Progress towards the vector direction until an obstacle is found
	  do {
	    previous = cell;
	    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
	  } while (this.grid.withinBounds(cell) &&
	           this.grid.cellAvailable(cell));

	  return {
	    farthest: previous,
	    next: cell // Used to check if a merge is required
	  };
	};

	GameManager.prototype.movesAvailable = function () {
	  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
	};

	// Check for available matches between tiles (more expensive check)
	GameManager.prototype.tileMatchesAvailable = function () {
	  var self = this;

	  var tile;

	  for (var x = 0; x < this.size; x++) {
	    for (var y = 0; y < this.size; y++) {
	      tile = this.grid.cellContent({ x: x, y: y });

	      if (tile) {
	        for (var direction = 0; direction < 4; direction++) {
	          var vector = self.getVector(direction);
	          var cell   = { x: x + vector.x, y: y + vector.y };

	          var other  = self.grid.cellContent(cell);

	          if (other && other.value === tile.value) {
	            return true; // These two tiles can be merged
	          }
	        }
	      }
	    }
	  }

	  return false;
	};

	GameManager.prototype.positionsEqual = function (first, second) {
	  return first.x === second.x && first.y === second.y;
	};

	// moves continuously until game is over
	GameManager.prototype.run = function() {
	  var position = [];
	  for (var i = 0; i < this.grid.cells[0].length; ++i) {
	    position[i] = [];
	    for (var j = 0; j < this.grid.cells.length; ++j) {
	      position[i][j] = this.grid.cells[j][i] ? this.grid.cells[j][i].value : 0;
	    }
	  }
	  var board = new Board(position, {depth: 20, sampling:3000});
	  var points = [0, 0, 0, 0];
	  var p, estimate, i;
	  for (i = 0; i < 33; ++i) {
	    board.depth = 20 + i / 3;
	    estimate = board.estimate();
	    for (var k = 0; k < 4; ++k) {
	      points[k] += estimate.evaluations[k];
	    }
	    p = Math.max.apply(null, points);
	    if (p > 5000) break;
	  }
	  // console.log(i, points);
	  this.move(points.indexOf(p));

	  if (this.running && !this.over) {
	    var self = this;
	    setTimeout(function(){
	      self.run();
	    }, self.rundelay);
	  } else {
	    this.running = false;
	  };
	};

	module.exports = GameManager;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Tile = __webpack_require__(17);

	function Grid(size, previousState) {
	  this.size = size;
	  this.cells = previousState ? this.fromState(previousState) : this.empty();
	}

	// Build a grid of the specified size
	Grid.prototype.empty = function () {
	  var cells = [];

	  for (var x = 0; x < this.size; x++) {
	    var row = cells[x] = [];

	    for (var y = 0; y < this.size; y++) {
	      row.push(null);
	    }
	  }

	  return cells;
	};

	Grid.prototype.fromState = function (state) {
	  var cells = [];

	  for (var x = 0; x < this.size; x++) {
	    var row = cells[x] = [];

	    for (var y = 0; y < this.size; y++) {
	      var tile = state[x][y];

	      row.push(tile ? new Tile(tile.position, tile.value) : null);
	    }
	  }

	  return cells;
	};

	// Find the first available random position
	Grid.prototype.randomAvailableCell = function () {
	  var cells = this.availableCells();

	  if (cells.length) {
	    return cells[Math.floor(Math.random() * cells.length)];
	  }
	};

	Grid.prototype.availableCells = function () {
	  var cells = [];

	  this.eachCell(function (x, y, tile) {
	    if (!tile) {
	      cells.push({ x: x, y: y });
	    }
	  });

	  return cells;
	};

	// Call callback for every cell
	Grid.prototype.eachCell = function (callback) {
	  for (var x = 0; x < this.size; x++) {
	    for (var y = 0; y < this.size; y++) {
	      callback(x, y, this.cells[x][y]);
	    }
	  }
	};

	// Check if there are any cells available
	Grid.prototype.cellsAvailable = function () {
	  return !!this.availableCells().length;
	};

	// Check if the specified cell is taken
	Grid.prototype.cellAvailable = function (cell) {
	  return !this.cellOccupied(cell);
	};

	Grid.prototype.cellOccupied = function (cell) {
	  return !!this.cellContent(cell);
	};

	Grid.prototype.cellContent = function (cell) {
	  if (this.withinBounds(cell)) {
	    return this.cells[cell.x][cell.y];
	  } else {
	    return null;
	  }
	};

	// Inserts a tile at its position
	Grid.prototype.insertTile = function (tile) {
	  this.cells[tile.x][tile.y] = tile;
	};

	Grid.prototype.removeTile = function (tile) {
	  this.cells[tile.x][tile.y] = null;
	};

	Grid.prototype.withinBounds = function (position) {
	  return position.x >= 0 && position.x < this.size &&
	         position.y >= 0 && position.y < this.size;
	};

	Grid.prototype.serialize = function () {
	  var cellState = [];

	  for (var x = 0; x < this.size; x++) {
	    var row = cellState[x] = [];

	    for (var y = 0; y < this.size; y++) {
	      row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
	    }
	  }

	  return {
	    size: this.size,
	    cells: cellState
	  };
	};

	module.exports = Grid;


/***/ },
/* 17 */
/***/ function(module, exports) {

	function Tile(position, value) {
	  this.x                = position.x;
	  this.y                = position.y;
	  this.value            = value || 2;

	  this.previousPosition = null;
	  this.mergedFrom       = null; // Tracks tiles that merged together
	}

	Tile.prototype.savePosition = function () {
	  this.previousPosition = { x: this.x, y: this.y };
	};

	Tile.prototype.updatePosition = function (position) {
	  this.x = position.x;
	  this.y = position.y;
	};

	Tile.prototype.serialize = function () {
	  return {
	    position: {
	      x: this.x,
	      y: this.y
	    },
	    value: this.value
	  };
	};

	module.exports = Tile;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["montecalro2048"] = factory();
		else
			root["montecalro2048"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(1);


	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var UP = 0;
		var RIGHT = 1;
		var DOWN = 2;
		var LEFT = 3;
		var DIRECTIONS = [UP, RIGHT, DOWN, LEFT];

		var copy = function copy(array2d) {
		  var nrow = array2d.length;
		  var ncol = array2d[0].length;
		  var ret = [];
		  for (var i = 0; i < nrow; ++i) {
		    ret[i] = [];
		    for (var j = 0; j < ncol; ++j) {
		      ret[i][j] = array2d[i][j];
		    }
		  }
		  return ret;
		};

		var Board = function () {
		  function Board(setup) {
		    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		    _classCallCheck(this, Board);

		    this.position = copy(setup);
		    this.nrow = setup.length;
		    this.ncol = setup[0].length;

		    this.depth = options.depth || 10;
		    this.sampling = options.sampling || 500;
		    this.target = options.target || 2048;

		    this.updateState();
		  }

		  _createClass(Board, [{
		    key: 'updateState',
		    value: function updateState() {
		      this.nEmpty = 0;
		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = 0; j < this.ncol; ++j) {
		          if (this.position[i][j] === 0) ++this.nEmpty;
		        }
		      }
		    }
		  }, {
		    key: 'isCleared',
		    value: function isCleared() {
		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = 0; j < this.ncol; ++j) {
		          if (this.position[i][j] === this.target) return true;
		        }
		      }
		      return false;
		    }
		  }, {
		    key: 'isOvered',
		    value: function isOvered() {
		      if (this.nEmpty !== 0) return false;
		      for (var i = 0; i < 4; ++i) {
		        if (this.isMovable(i)) return false;
		      }return true;
		    }
		  }, {
		    key: 'copy',
		    value: function copy() {
		      return new Board(this.position, { depth: this.depth, sampling: this.sampling, target: this.target });
		    }
		  }, {
		    key: 'add',
		    value: function add() {
		      if (this.nEmpty === 0) return;
		      var n = Math.floor(Math.random() * this.nEmpty);

		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = 0; j < this.ncol; ++j) {
		          if (this.position[i][j] === 0 && n === 0) {
		            this.position[i][j] = Math.random() < 0.9 ? 2 : 4;
		            --this.nEmpty;
		            return;
		          }
		          if (this.position[i][j] === 0) --n;
		        }
		      }
		    }
		  }, {
		    key: 'isLeftMovable',
		    value: function isLeftMovable() {
		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = 0; j < this.ncol - 1; ++j) {
		          for (var k = j + 1; k < this.ncol; ++k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[i][k] && this.position[i][k] !== 0) break;
		            if (this.position[i][j] > 0 && this.position[i][j] === this.position[i][k]) {
		              return true;
		            }
		          }
		        }
		      }

		      for (var _i = 0; _i < this.nrow; ++_i) {
		        for (var _j = 0; _j < this.ncol - 1; ++_j) {
		          if (this.position[_i][_j] === 0) {
		            for (var _k = _j + 1; _k < this.ncol; ++_k) {
		              if (this.position[_i][_k] !== 0) {
		                return true;
		              }
		            }
		          }
		        }
		      }

		      return false;
		    }
		  }, {
		    key: 'isRightMovable',
		    value: function isRightMovable() {
		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = this.ncol - 1; j > 0; --j) {
		          for (var k = j - 1; k >= 0; --k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[i][k] && this.position[i][k] !== 0) break;
		            if (this.position[i][j] > 0 && this.position[i][j] === this.position[i][k]) {
		              return true;
		            }
		          }
		        }
		      }

		      for (var _i2 = 0; _i2 < this.nrow; ++_i2) {
		        for (var _j2 = this.ncol - 1; _j2 >= 0; --_j2) {
		          if (this.position[_i2][_j2] === 0) {
		            for (var _k2 = _j2 - 1; _k2 >= 0; --_k2) {
		              if (this.position[_i2][_k2] !== 0) {
		                return true;
		              }
		            }
		          }
		        }
		      }

		      return false;
		    }
		  }, {
		    key: 'isUpMovable',
		    value: function isUpMovable() {
		      for (var j = 0; j < this.ncol; ++j) {
		        for (var i = 0; i < this.nrow - 1; ++i) {
		          for (var k = i + 1; k < this.nrow; ++k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[k][j] && this.position[k][j] !== 0) break;
		            if (this.position[i][j] === this.position[k][j]) {
		              return true;
		            }
		          }
		        }
		      }

		      for (var _j3 = 0; _j3 < this.ncol; ++_j3) {
		        for (var _i3 = 0; _i3 < this.nrow - 1; ++_i3) {
		          if (this.position[_i3][_j3] === 0) {
		            for (var _k3 = _i3 + 1; _k3 < this.nrow; ++_k3) {
		              if (this.position[_k3][_j3] !== 0) {
		                return true;
		              }
		            }
		          }
		        }
		      }

		      return false;
		    }
		  }, {
		    key: 'isDownMovable',
		    value: function isDownMovable() {
		      for (var j = 0; j < this.ncol; ++j) {
		        for (var i = this.nrow - 1; i > 0; --i) {
		          for (var k = i - 1; k >= 0; --k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[k][j] && this.position[k][j] !== 0) break;
		            if (this.position[i][j] > 0 && this.position[i][j] === this.position[k][j]) {
		              return true;
		            }
		          }
		        }
		      }

		      for (var _j4 = 0; _j4 < this.ncol; ++_j4) {
		        for (var _i4 = this.nrow - 1; _i4 >= 0; --_i4) {
		          if (this.position[_i4][_j4] === 0) {
		            for (var _k4 = _i4 - 1; _k4 >= 0; --_k4) {
		              if (this.position[_k4][_j4] !== 0) {
		                return true;
		              }
		            }
		          }
		        }
		      }

		      return false;
		    }
		  }, {
		    key: 'isMovable',
		    value: function isMovable(direction) {
		      switch (direction) {
		        case LEFT:
		          return this.isLeftMovable();
		        case RIGHT:
		          return this.isRightMovable();
		        case UP:
		          return this.isUpMovable();
		        case DOWN:
		          return this.isDownMovable();
		        default:
		          return false;
		      }
		    }
		  }, {
		    key: 'randomMove',
		    value: function randomMove() {
		      var directions = [-1, -1, -1, -1];
		      var ndirections = 0;
		      for (var i = 0; i < 4; ++i) {
		        if (this.isMovable(i)) {
		          directions[ndirections] = i;
		          ++ndirections;
		        }
		      }
		      if (ndirections === 0) return false;
		      this.move(directions[Math.floor(Math.random() * ndirections)]);
		      return true;
		    }
		  }, {
		    key: 'move',
		    value: function move(direction) {
		      var ret = void 0;
		      switch (direction) {
		        case LEFT:
		          ret = this.leftMove();
		          break;
		        case RIGHT:
		          ret = this.rightMove();
		          break;
		        case UP:
		          ret = this.upMove();
		          break;
		        case DOWN:
		          ret = this.downMove();
		          break;
		        default:
		          return false;
		      }
		      if (ret) this.updateState();
		      return ret;
		    }
		  }, {
		    key: 'leftMove',
		    value: function leftMove() {
		      var ret = false;

		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = 0; j < this.ncol - 1; ++j) {
		          for (var k = j + 1; k < this.ncol; ++k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[i][k] && this.position[i][k] !== 0) break;
		            if (this.position[i][j] > 0 && this.position[i][j] === this.position[i][k]) {
		              this.position[i][j] = this.position[i][j] * 2;
		              this.position[i][k] = 0;
		              ret = true;
		              break;
		            }
		          }
		        }
		      }

		      for (var _i5 = 0; _i5 < this.nrow; ++_i5) {
		        for (var _j5 = 0; _j5 < this.ncol - 1; ++_j5) {
		          if (this.position[_i5][_j5] === 0) {
		            for (var _k5 = _j5 + 1; _k5 < this.ncol; ++_k5) {
		              if (this.position[_i5][_k5] !== 0) {
		                this.position[_i5][_j5] = this.position[_i5][_k5];
		                this.position[_i5][_k5] = 0;
		                ret = true;
		                break;
		              }
		            }
		          }
		        }
		      }

		      return ret;
		    }
		  }, {
		    key: 'rightMove',
		    value: function rightMove() {
		      var ret = false;

		      for (var i = 0; i < this.nrow; ++i) {
		        for (var j = this.ncol - 1; j > 0; --j) {
		          for (var k = j - 1; k >= 0; --k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[i][k] && this.position[i][k] !== 0) break;
		            if (this.position[i][j] > 0 && this.position[i][j] === this.position[i][k]) {
		              this.position[i][j] = this.position[i][j] * 2;
		              this.position[i][k] = 0;
		              ret = true;
		              break;
		            }
		          }
		        }
		      }

		      for (var _i6 = 0; _i6 < this.nrow; ++_i6) {
		        for (var _j6 = this.ncol - 1; _j6 >= 0; --_j6) {
		          if (this.position[_i6][_j6] === 0) {
		            for (var _k6 = _j6 - 1; _k6 >= 0; --_k6) {
		              if (this.position[_i6][_k6] !== 0) {
		                this.position[_i6][_j6] = this.position[_i6][_k6];
		                this.position[_i6][_k6] = 0;
		                ret = true;
		                break;
		              }
		            }
		          }
		        }
		      }

		      return ret;
		    }
		  }, {
		    key: 'upMove',
		    value: function upMove() {
		      var ret = false;

		      for (var j = 0; j < this.ncol; ++j) {
		        for (var i = 0; i < this.nrow - 1; ++i) {
		          for (var k = i + 1; k < this.nrow; ++k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[k][j] && this.position[k][j] !== 0) break;
		            if (this.position[i][j] === this.position[k][j]) {
		              this.position[i][j] = this.position[i][j] * 2;
		              this.position[k][j] = 0;
		              ret = true;
		              break;
		            }
		          }
		        }
		      }

		      for (var _j7 = 0; _j7 < this.ncol; ++_j7) {
		        for (var _i7 = 0; _i7 < this.nrow - 1; ++_i7) {
		          if (this.position[_i7][_j7] === 0) {
		            for (var _k7 = _i7 + 1; _k7 < this.nrow; ++_k7) {
		              if (this.position[_k7][_j7] !== 0) {
		                this.position[_i7][_j7] = this.position[_k7][_j7];
		                this.position[_k7][_j7] = 0;
		                ret = true;
		                break;
		              }
		            }
		          }
		        }
		      }

		      return ret;
		    }
		  }, {
		    key: 'downMove',
		    value: function downMove() {
		      var ret = false;

		      for (var j = 0; j < this.ncol; ++j) {
		        for (var i = this.nrow - 1; i > 0; --i) {
		          for (var k = i - 1; k >= 0; --k) {
		            if (this.position[i][j] === 0) break;
		            if (this.position[i][j] !== this.position[k][j] && this.position[k][j] !== 0) break;
		            if (this.position[i][j] > 0 && this.position[i][j] === this.position[k][j]) {
		              this.position[i][j] = this.position[i][j] * 2;
		              this.position[k][j] = 0;
		              ret = true;
		              break;
		            }
		          }
		        }
		      }

		      for (var _j8 = 0; _j8 < this.ncol; ++_j8) {
		        for (var _i8 = this.nrow - 1; _i8 >= 0; --_i8) {
		          if (this.position[_i8][_j8] === 0) {
		            for (var _k8 = _i8 - 1; _k8 >= 0; --_k8) {
		              if (this.position[_k8][_j8] !== 0) {
		                this.position[_i8][_j8] = this.position[_k8][_j8];
		                this.position[_k8][_j8] = 0;
		                ret = true;
		                break;
		              }
		            }
		          }
		        }
		      }
		      return ret;
		    }
		  }, {
		    key: 'evaluate',
		    value: function evaluate(direction) {
		      var directionBoard = this.copy();
		      if (!directionBoard.move(direction)) return -1;

		      var count = 0;
		      var samplingBoard = void 0;

		      for (var j = 0; j < this.sampling; ++j) {
		        samplingBoard = directionBoard.copy();
		        for (var k = 0; k < this.depth; ++k) {
		          samplingBoard.add();
		          if (!samplingBoard.randomMove()) break;
		        }
		        count += samplingBoard.nEmpty;
		      }

		      return count;
		    }
		  }, {
		    key: 'estimate',
		    value: function estimate() {
		      var _this = this;

		      var evaluations = DIRECTIONS.map(function (v) {
		        return _this.evaluate(v);
		      });
		      return {
		        direction: evaluations.indexOf(Math.max.apply(Math, _toConsumableArray(evaluations))),
		        evaluations: evaluations
		      };
		    }
		  }, {
		    key: 'print',
		    value: function print() {
		      return this.position.map(function (v) {
		        return v.map(function (vv) {
		          return ('    ' + vv).slice(-4);
		        }).join(' ');
		      }).join('\n');
		    }
		  }]);

		  return Board;
		}();

		exports.Board = Board;
		exports.LEFT = LEFT;
		exports.UP = UP;
		exports.RIGHT = RIGHT;
		exports.DOWN = DOWN;
		exports.DIRECTIONS = DIRECTIONS;

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 19 */
/***/ function(module, exports) {

	function KeyboardInputManager() {
	  this.events = {};

	  if (window.navigator.msPointerEnabled) {
	    //Internet Explorer 10 style
	    this.eventTouchstart    = "MSPointerDown";
	    this.eventTouchmove     = "MSPointerMove";
	    this.eventTouchend      = "MSPointerUp";
	  } else {
	    this.eventTouchstart    = "touchstart";
	    this.eventTouchmove     = "touchmove";
	    this.eventTouchend      = "touchend";
	  }

	  this.listen();
	}

	KeyboardInputManager.prototype.on = function (event, callback) {
	  if (!this.events[event]) {
	    this.events[event] = [];
	  }
	  this.events[event].push(callback);
	};

	KeyboardInputManager.prototype.emit = function (event, data) {
	  var callbacks = this.events[event];
	  if (callbacks) {
	    callbacks.forEach(function (callback) {
	      callback(data);
	    });
	  }
	};

	KeyboardInputManager.prototype.listen = function () {
	  var self = this;

	  var map = {
	    38: 0, // Up
	    39: 1, // Right
	    40: 2, // Down
	    37: 3, // Left
	    75: 0, // Vim up
	    76: 1, // Vim right
	    74: 2, // Vim down
	    72: 3, // Vim left
	    87: 0, // W
	    68: 1, // D
	    83: 2, // S
	    65: 3  // A
	  };

	  // Respond to direction keys
	  document.addEventListener("keydown", function (event) {
	    var modifiers = event.altKey || event.ctrlKey || event.metaKey ||
	                    event.shiftKey;
	    var mapped    = map[event.which];

	    if (!modifiers) {
	      if (mapped !== undefined) {
	        event.preventDefault();
	        self.emit("move", mapped);
	      }
	    }

	    // R key restarts the game
	    if (!modifiers && event.which === 82) {
	      self.restart.call(self, event);
	    }
	  });

	  // Respond to button presses
	  this.bindButtonPress(".retry-button", this.restart);
	  this.bindButtonPress(".restart-button", this.restart);
	  this.bindButtonPress(".keep-playing-button", this.keepPlaying);

	  // Respond to swipe events
	  var touchStartClientX, touchStartClientY;
	  var gameContainer = document.getElementsByClassName("game-container")[0];

	  gameContainer.addEventListener(this.eventTouchstart, function (event) {
	    if ((!window.navigator.msPointerEnabled && event.touches.length > 1) ||
	        event.targetTouches.length > 1) {
	      return; // Ignore if touching with more than 1 finger
	    }

	    if (window.navigator.msPointerEnabled) {
	      touchStartClientX = event.pageX;
	      touchStartClientY = event.pageY;
	    } else {
	      touchStartClientX = event.touches[0].clientX;
	      touchStartClientY = event.touches[0].clientY;
	    }

	    event.preventDefault();
	  });

	  gameContainer.addEventListener(this.eventTouchmove, function (event) {
	    event.preventDefault();
	  });

	  gameContainer.addEventListener(this.eventTouchend, function (event) {
	    if ((!window.navigator.msPointerEnabled && event.touches.length > 0) ||
	        event.targetTouches.length > 0) {
	      return; // Ignore if still touching with one or more fingers
	    }

	    var touchEndClientX, touchEndClientY;

	    if (window.navigator.msPointerEnabled) {
	      touchEndClientX = event.pageX;
	      touchEndClientY = event.pageY;
	    } else {
	      touchEndClientX = event.changedTouches[0].clientX;
	      touchEndClientY = event.changedTouches[0].clientY;
	    }

	    var dx = touchEndClientX - touchStartClientX;
	    var absDx = Math.abs(dx);

	    var dy = touchEndClientY - touchStartClientY;
	    var absDy = Math.abs(dy);

	    if (Math.max(absDx, absDy) > 10) {
	      // (right : left) : (down : up)
	      self.emit("move", absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
	    }
	  });
	};

	KeyboardInputManager.prototype.restart = function (event) {
	  event.preventDefault();
	  this.emit("restart");
	};

	KeyboardInputManager.prototype.keepPlaying = function (event) {
	  event.preventDefault();
	  this.emit("keepPlaying");
	};

	KeyboardInputManager.prototype.bindButtonPress = function (selector, fn) {
	  var button = document.querySelector(selector);
	  button.addEventListener("click", fn.bind(this));
	  button.addEventListener(this.eventTouchend, fn.bind(this));
	};

	module.exports = KeyboardInputManager;


/***/ },
/* 20 */
/***/ function(module, exports) {

	function HTMLActuator() {
	  this.tileContainer    = document.querySelector(".tile-container");
	  this.scoreContainer   = document.querySelector(".score-container");
	  this.bestContainer    = document.querySelector(".best-container");
	  this.messageContainer = document.querySelector(".game-message");

	  this.score = 0;
	}

	HTMLActuator.prototype.actuate = function (grid, metadata) {
	  var self = this;

	  window.requestAnimationFrame(function () {
	    self.clearContainer(self.tileContainer);

	    grid.cells.forEach(function (column) {
	      column.forEach(function (cell) {
	        if (cell) {
	          self.addTile(cell);
	        }
	      });
	    });

	    self.updateScore(metadata.score);
	    self.updateBestScore(metadata.bestScore);

	    if (metadata.terminated) {
	      if (metadata.over) {
	        self.message(false); // You lose
	      } else if (metadata.won) {
	        self.message(true); // You win!
	      }
	    }

	  });
	};

	// Continues the game (both restart and keep playing)
	HTMLActuator.prototype.continueGame = function () {
	  this.clearMessage();
	};

	HTMLActuator.prototype.clearContainer = function (container) {
	  while (container.firstChild) {
	    container.removeChild(container.firstChild);
	  }
	};

	HTMLActuator.prototype.addTile = function (tile) {
	  var self = this;

	  var wrapper   = document.createElement("div");
	  var inner     = document.createElement("div");
	  var position  = tile.previousPosition || { x: tile.x, y: tile.y };
	  var positionClass = this.positionClass(position);

	  // We can't use classlist because it somehow glitches when replacing classes
	  var classes = ["tile", "tile-" + tile.value, positionClass];

	  if (tile.value > 2048) classes.push("tile-super");

	  this.applyClasses(wrapper, classes);

	  inner.classList.add("tile-inner");
	  inner.textContent = tile.value;

	  if (tile.previousPosition) {
	    // Make sure that the tile gets rendered in the previous position first
	    window.requestAnimationFrame(function () {
	      classes[2] = self.positionClass({ x: tile.x, y: tile.y });
	      self.applyClasses(wrapper, classes); // Update the position
	    });
	  } else if (tile.mergedFrom) {
	    classes.push("tile-merged");
	    this.applyClasses(wrapper, classes);

	    // Render the tiles that merged
	    tile.mergedFrom.forEach(function (merged) {
	      self.addTile(merged);
	    });
	  } else {
	    classes.push("tile-new");
	    this.applyClasses(wrapper, classes);
	  }

	  // Add the inner part of the tile to the wrapper
	  wrapper.appendChild(inner);

	  // Put the tile on the board
	  this.tileContainer.appendChild(wrapper);
	};

	HTMLActuator.prototype.applyClasses = function (element, classes) {
	  element.setAttribute("class", classes.join(" "));
	};

	HTMLActuator.prototype.normalizePosition = function (position) {
	  return { x: position.x + 1, y: position.y + 1 };
	};

	HTMLActuator.prototype.positionClass = function (position) {
	  position = this.normalizePosition(position);
	  return "tile-position-" + position.x + "-" + position.y;
	};

	HTMLActuator.prototype.updateScore = function (score) {
	  this.clearContainer(this.scoreContainer);

	  var difference = score - this.score;
	  this.score = score;

	  this.scoreContainer.textContent = this.score;

	  if (difference > 0) {
	    var addition = document.createElement("div");
	    addition.classList.add("score-addition");
	    addition.textContent = "+" + difference;

	    this.scoreContainer.appendChild(addition);
	  }
	};

	HTMLActuator.prototype.updateBestScore = function (bestScore) {
	  this.bestContainer.textContent = bestScore;
	};

	HTMLActuator.prototype.message = function (won) {
	  var type    = won ? "game-won" : "game-over";
	  var message = won ? "You win!" : "Game over!";

	  this.messageContainer.classList.add(type);
	  this.messageContainer.getElementsByTagName("p")[0].textContent = message;
	};

	HTMLActuator.prototype.clearMessage = function () {
	  // IE only takes one value to remove at a time.
	  this.messageContainer.classList.remove("game-won");
	  this.messageContainer.classList.remove("game-over");
	};

	module.exports = HTMLActuator;


/***/ },
/* 21 */
/***/ function(module, exports) {

	window.fakeStorage = {
	  _data: {},

	  setItem: function (id, val) {
	    return this._data[id] = String(val);
	  },

	  getItem: function (id) {
	    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
	  },

	  removeItem: function (id) {
	    return delete this._data[id];
	  },

	  clear: function () {
	    return this._data = {};
	  }
	};

	function LocalStorageManager() {
	  this.bestScoreKey     = "bestScore";
	  this.gameStateKey     = "gameState";

	  var supported = this.localStorageSupported();
	  this.storage = supported ? window.localStorage : window.fakeStorage;
	}

	LocalStorageManager.prototype.localStorageSupported = function () {
	  var testKey = "test";
	  var storage = window.localStorage;

	  try {
	    storage.setItem(testKey, "1");
	    storage.removeItem(testKey);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	// Best score getters/setters
	LocalStorageManager.prototype.getBestScore = function () {
	  return this.storage.getItem(this.bestScoreKey) || 0;
	};

	LocalStorageManager.prototype.setBestScore = function (score) {
	  this.storage.setItem(this.bestScoreKey, score);
	};

	// Game state getters/setters and clearing
	LocalStorageManager.prototype.getGameState = function () {
	  var stateJSON = this.storage.getItem(this.gameStateKey);
	  return stateJSON ? JSON.parse(stateJSON) : null;
	};

	LocalStorageManager.prototype.setGameState = function (gameState) {
	  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
	};

	LocalStorageManager.prototype.clearGameState = function () {
	  this.storage.removeItem(this.gameStateKey);
	};

	module.exports = LocalStorageManager;


/***/ }
/******/ ]);