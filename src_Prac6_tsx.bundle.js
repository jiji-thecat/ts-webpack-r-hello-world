(self["webpackChunkts_webpack_rn"] = self["webpackChunkts_webpack_rn"] || []).push([["src_Prac6_tsx"],{

/***/ "./src/Prac6.tsx":
/*!***********************!*\
  !*** ./src/Prac6.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=CountryCapitalGame;var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _objectDestructuringEmpty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js"));var _jsxRuntime=__webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");var ButtonComponent=function ButtonComponent(_ref){var name=_ref.name;return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("button",{children:name}),(0,_jsxRuntime.jsx)("style",{children:`
                    .blue {
                        background-color: blue;
                    }
                    .red {
                        background-color: red;
                    }
                `})]});};function CountryCapitalGame(_ref2){(0,_objectDestructuringEmpty2.default)(_ref2);var data={Germany:'berlin',Japan:'Tokyo'};var _useState=(0,_react.useState)([]),_useState2=(0,_slicedToArray2.default)(_useState,2),country=_useState2[0],setCountry=_useState2[1];var _useState3=(0,_react.useState)([]),_useState4=(0,_slicedToArray2.default)(_useState3,2),capital=_useState4[0],setCapital=_useState4[1];(0,_react.useEffect)(function(){var countryArr=[];var capitalArr=[];for(var prop in data){countryArr.push(prop);capitalArr.push(data[prop]);}setCountry(countryArr);setCapital(capitalArr);},[]);return country.map(function(val){return(0,_jsxRuntime.jsx)(ButtonComponent,{name:val});}).concat(capital.map(function(val){return(0,_jsxRuntime.jsx)(ButtonComponent,{name:val});}));}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}
module.exports = _objectDestructuringEmpty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=src_Prac6_tsx.bundle.js.map