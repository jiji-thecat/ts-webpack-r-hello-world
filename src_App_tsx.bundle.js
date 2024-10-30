(self["webpackChunkts_webpack_rn"] = self["webpackChunkts_webpack_rn"] || []).push([["src_App_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _jsxRuntime=__webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");var _classnames=_interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));function LikeButton(){var _useState=(0,_react.useState)(100),_useState2=(0,_slicedToArray2.default)(_useState,2),likes=_useState2[0],setLikes=_useState2[1];var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2.default)(_useState3,2),liked=_useState4[0],setLiked=_useState4[1];var handleClick=function handleClick(){setLikes(likes+(liked?-1:1));setLiked(!liked);};return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("div",{className:"body",children:(0,_jsxRuntime.jsxs)("button",{className:(0,_classnames.default)('like-button',{liked:liked}),onClick:handleClick,children:["Like | ",(0,_jsxRuntime.jsx)("span",{className:"likes-counter",children:likes})]})}),(0,_jsxRuntime.jsx)("style",{children:`
        .body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
        }
        .like-button {
          font-size: 1rem;
          padding: 5px 10px;
          color:  #585858;
        }
        .liked {
          font-weight: bold;
          color: #1565c0;
        }
      `})]});}var _default=exports["default"]=LikeButton;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

}]);
//# sourceMappingURL=src_App_tsx.bundle.js.map