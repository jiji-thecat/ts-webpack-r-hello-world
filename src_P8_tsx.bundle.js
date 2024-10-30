(self["webpackChunkts_webpack_rn"] = self["webpackChunkts_webpack_rn"] || []).push([["src_P8_tsx"],{

/***/ "./src/P8.tsx":
/*!********************!*\
  !*** ./src/P8.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _jsxRuntime=__webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js");var Timer=function Timer(_ref){var duration=_ref.duration,id=_ref.id,timerCallback=_ref.timerCallback;var _useState=(0,_react.useState)(duration),_useState2=(0,_slicedToArray2.default)(_useState,2),time=_useState2[0],setTime=_useState2[1];var intervalRef=(0,_react.useRef)(null);(0,_react.useEffect)(function(){if(intervalRef.current){clearInterval(intervalRef.current);timerCallback();setTime(duration);}else{intervalRef.current=setInterval(function(){setTime(function(prev){if(prev<=0&&intervalRef.current){clearInterval(intervalRef.current);timerCallback();return 0;}return prev-1000;});},1000);}},[id]);return(0,_jsxRuntime.jsxs)("div",{className:"timer",children:[time/10**3," sec / quiz"]});};var QuizList=function QuizList(_ref2){var data=_ref2.data,selectAnsArr=_ref2.selectAnsArr,setSelectAnsArr=_ref2.setSelectAnsArr,isSubmit=_ref2.isSubmit;var title=data.title,options=data.options,id=data.id,answer=data.answer;var onClick=(0,_react.useCallback)(function(e){var val=e.target.getAttribute('data-key');setSelectAnsArr(function(prev){var newArr=(0,_toConsumableArray2.default)(prev);newArr[id]=parseInt(val);return newArr;});},[]);return(0,_jsxRuntime.jsxs)("div",{className:"quiz",children:[(0,_jsxRuntime.jsx)("div",{className:"title",children:title}),(0,_jsxRuntime.jsx)("div",{className:"options",children:options.map(function(v,i){var className='button';className+=selectAnsArr[id]===i?' clicked':'';return(0,_jsxRuntime.jsx)("button",{className:className,onClick:onClick,"data-key":i,children:v},i);})}),isSubmit&&selectAnsArr[id]!==answer&&(0,_jsxRuntime.jsx)("div",{className:"answer",children:options[answer]})]});};var _default=exports["default"]=function _default(){var _useState3=(0,_react.useState)([]),_useState4=(0,_slicedToArray2.default)(_useState3,2),data=_useState4[0],setData=_useState4[1];var _useState5=(0,_react.useState)([]),_useState6=(0,_slicedToArray2.default)(_useState5,2),ansData=_useState6[0],setAnsData=_useState6[1];var _useState7=(0,_react.useState)([]),_useState8=(0,_slicedToArray2.default)(_useState7,2),selectAnsArr=_useState8[0],setSelectAnsArr=_useState8[1];var _useState9=(0,_react.useState)(-1),_useState10=(0,_slicedToArray2.default)(_useState9,2),score=_useState10[0],setScore=_useState10[1];var _useState11=(0,_react.useState)(false),_useState12=(0,_slicedToArray2.default)(_useState11,2),isSubmit=_useState12[0],setIsSubmit=_useState12[1];(0,_react.useEffect)(function(){var fetchData=function(){var _ref3=(0,_asyncToGenerator2.default)(function*(){try{var _data=yield(yield fetch('./assets/p8.json')).json();var ansDataArr=[];for(var v of _data){ansDataArr.push(v.answer);}setAnsData([].concat(ansDataArr));setSelectAnsArr(new Array(_data.length).fill(-1));setData(_data);}catch(e){console.log(e);}});return function fetchData(){return _ref3.apply(this,arguments);};}();fetchData();},[]);var onClickSubmit=(0,_react.useCallback)(function(){var score=0;selectAnsArr.forEach(function(v,i){if(v===ansData[i]){score++;}});setScore(score);setIsSubmit(true);},[ansData,selectAnsArr]);var onClickReset=(0,_react.useCallback)(function(){setSelectAnsArr(new Array(data.length).fill(-1));setScore(-1);setIsSubmit(false);},[]);return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsxs)("div",{className:"body",children:[(0,_jsxRuntime.jsx)("div",{className:"upper",children:data.map(function(v,id){return(0,_jsxRuntime.jsx)(QuizList,{data:v,selectAnsArr:selectAnsArr,setSelectAnsArr:setSelectAnsArr,isSubmit:isSubmit},id);})}),(0,_jsxRuntime.jsxs)("div",{className:"footer",children:[(0,_jsxRuntime.jsx)("button",{className:"button submit",onClick:onClickSubmit,children:"Submit"}),(0,_jsxRuntime.jsx)("button",{className:"button reset",onClick:onClickReset,children:"Reset"})]}),score>=0&&(0,_jsxRuntime.jsxs)("div",{className:"score",children:[score,"/",data.length]})]}),(0,_jsxRuntime.jsx)("style",{children:`
         .body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
         }
         .upper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
         }
         .button {
            margin-left: 10px;
         }
         .button.clicked {
            background-color: aqua;
         }
         .button.notClicked {
            pointer-events: none;
         }
         .quiz {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
         }
         .footer {
            margin-bottom: 10px;
         }
         .score {
            font-size: xx-large;
            font-weight: bold;
         }
         .answer {
            margin-left: 10px;
            font-size: 27px;
            color: red;
         }
      `})]});};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=src_P8_tsx.bundle.js.map