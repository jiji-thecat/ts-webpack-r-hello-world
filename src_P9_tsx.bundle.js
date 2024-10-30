(self["webpackChunkts_webpack_rn"] = self["webpackChunkts_webpack_rn"] || []).push([["src_P9_tsx"],{

/***/ "./src/P9.tsx":
/*!********************!*\
  !*** ./src/P9.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _jsxRuntime=__webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");var TIME=10000;var _default=exports["default"]=function _default(){var timerRef=(0,_react.useRef)(null);var _useState=(0,_react.useState)(TIME),_useState2=(0,_slicedToArray2.default)(_useState,2),timer=_useState2[0],setTimer=_useState2[1];var onClick=(0,_react.useCallback)(function(){if(timerRef.current){clearInterval(timerRef.current);setTimer(TIME);}timerRef.current=setInterval(function(){setTimer(function(prev){if(prev<=0&&timerRef.current){clearTimeout(timerRef.current);alert("Time's up!");return TIME;}return prev-1000;});},1000);},[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsxs)("div",{className:"body",children:[(0,_jsxRuntime.jsx)("div",{children:timer/10**3}),(0,_jsxRuntime.jsx)("button",{onClick:onClick,children:TIME/10**3})]}),(0,_jsxRuntime.jsx)("style",{children:`
        .body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
        }
      `})]});};

/***/ })

}]);
//# sourceMappingURL=src_P9_tsx.bundle.js.map