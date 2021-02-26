/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _makeImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeImage.js */ "./src/makeImage.js");

var canvas = document.getElementById("canvas");
canvas.width = 10000; //document.width is obsolete

canvas.height = 10000; //document.height is obsolete

console.log("canvas", canvas);

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
}

document.addEventListener("click", function (e) {
  var _getMousePosition = getMousePosition(canvas, e),
      x = _getMousePosition.x,
      y = _getMousePosition.y;

  fetch("http://localhost:5000/position/test", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      x_pos: x,
      y_pos: y
    })
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    console.log("res", json);
    (0,_makeImage_js__WEBPACK_IMPORTED_MODULE_0__.default)(ctx, x, y, json.url);
  })["catch"](function (e) {
    return console.log("error", e);
  });
});

function getMousePosition(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  console.log("CLICK EVENT " + "Coordinate x: " + x, "Coordinate y: " + y);
  return {
    x: x,
    y: y
  };
}

document.addEventListener("keydown", function (e) {});

/***/ }),

/***/ "./src/makeImage.js":
/*!**************************!*\
  !*** ./src/makeImage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var makeImage = function makeImage(context, x, y, image) {
  var img = new Image();
  img.src = image;

  img.onload = function () {
    context.drawImage(img, x, y, 100, 100);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeImage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3JjL21ha2VJbWFnZS5qcyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb250ZXh0IiwiY3R4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJnZXRNb3VzZVBvc2l0aW9uIiwieCIsInkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInhfcG9zIiwieV9wb3MiLCJ0aGVuIiwicmVzIiwianNvbiIsIm1ha2VJbWFnZSIsInVybCIsImV2ZW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsImNvbnRleHQiLCJpbWFnZSIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUYsTUFBTSxDQUFDRyxLQUFQLEdBQWUsS0FBZixDLENBQXNCOztBQUN0QkgsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEtBQWhCLEMsQ0FBdUI7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Q0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFrZUltYWdlIGZyb20gXCIuL21ha2VJbWFnZS5qc1wiXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuY2FudmFzLndpZHRoID0gMTAwMDA7IC8vZG9jdW1lbnQud2lkdGggaXMgb2Jzb2xldGVcbmNhbnZhcy5oZWlnaHQgPSAxMDAwMDsgLy9kb2N1bWVudC5oZWlnaHQgaXMgb2Jzb2xldGVcbmNvbnNvbGUubG9nKFwiY2FudmFzXCIsIGNhbnZhcyk7XG5cbmlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IHt4LHl9ID0gZ2V0TW91c2VQb3NpdGlvbihjYW52YXMsZSk7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvcG9zaXRpb24vdGVzdFwiLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt4X3BvczogeCwgeV9wb3M6IHl9KVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzXCIsIGpzb24pXG4gICAgICAgICAgICBtYWtlSW1hZ2UoXG4gICAgICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICAgICBqc29uLnVybCxcbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coXCJlcnJvclwiLCBlKSlcbn0pO1xuXG5mdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKGNhbnZhcywgZXZlbnQpIHtcbiAgICBsZXQgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgbGV0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgY29uc29sZS5sb2coXCJDTElDSyBFVkVOVCBcIiArIFwiQ29vcmRpbmF0ZSB4OiBcIiArIHgsIFwiQ29vcmRpbmF0ZSB5OiBcIiArIHkpO1xuICAgIHJldHVybiB7eCwgeX1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcblxufSkiLCJjb25zdCBtYWtlSW1hZ2UgPSAoY29udGV4dCwgeCwgeSwgaW1hZ2UpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCAxMDAsIDEwMClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VJbWFnZVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=