"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/StudentRegistration",{

/***/ "./component/Modal.tsx":
/*!*****************************!*\
  !*** ./component/Modal.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var react_qr_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-qr-svg */ \"./node_modules/react-qr-svg/dist-modules/index.js\");\n/* harmony import */ var react_qr_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_qr_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./component/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: \"(100vh - 50%)\",\n    bgcolor: \"background.paper\",\n    border: \"2px solid #89dee2\",\n    boxShadow: 24,\n    borderRadius: 5,\n    p: 4\n};\nconst QrModal = (props)=>{\n    const { open , handleClose  } = props;\n    const minter = ()=>{\n        console.log(\"\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/Student\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n            open: open,\n            onClose: handleClose,\n            \"aria-labelledby\": \"modal-modal-title\",\n            \"aria-describedby\": \"modal-modal-description\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_svg__WEBPACK_IMPORTED_MODULE_2__.QRCode, {\n                    level: \"Q\",\n                    style: {\n                        width: 256\n                    },\n                    value: JSON.stringify({\n                        v: \"qrProofRequestJson\"\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    name: \"Mint Degree\",\n                    onClickHandler: minter\n                }, void 0, false, {\n                    fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\new2\\\\ZkPod\\\\component\\\\Modal.tsx\",\n            lineNumber: 36,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_c = QrModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QrModal);\nvar _c;\n$RefreshReg$(_c, \"QrModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvTW9kYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDSTtBQUNMO0FBQ047QUFDQztBQUVqQyxNQUFNSyxRQUFRO0lBQ1pDLFVBQVU7SUFDVkMsS0FBSztJQUNMQyxNQUFNO0lBQ05DLFdBQVc7SUFDWEMsT0FBTztJQUNQQyxTQUFTO0lBQ1RDLFFBQVE7SUFDUkMsV0FBVztJQUNYQyxjQUFhO0lBQ2JDLEdBQUc7QUFDTDtBQUdBLE1BQU1DLFVBQVUsQ0FBQ0MsUUFBYztJQUM3QixNQUFNLEVBQ0pDLEtBQUksRUFDSkMsWUFBVyxFQUNWLEdBQUNGO0lBSUYsTUFBTUcsU0FBTyxJQUFJO1FBQ2ZDLFFBQVFDLEdBQUcsQ0FBQztRQUNabEIsdURBQVcsQ0FBQztJQUNkO0lBRUYscUJBQ0U7a0JBQ0EsNEVBQUNILGdEQUFLQTtZQUNKaUIsTUFBTUE7WUFDTk0sU0FBU0w7WUFDVE0sbUJBQWdCO1lBQ2hCQyxvQkFBaUI7OzhCQUVqQiw4REFBQ3hCLGdEQUFNQTtvQkFDTHlCLE9BQU07b0JBQ050QixPQUFPO3dCQUFFSyxPQUFPO29CQUFJO29CQUNwQmtCLE9BQU9DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBQ0MsR0FBRTtvQkFBb0I7Ozs7Ozs4QkFFL0MsOERBQUM1QiwrQ0FBUUE7b0JBQUM2QixNQUFLO29CQUFjQyxnQkFBZ0JiOzs7Ozs7Ozs7Ozs7O0FBSW5EO0tBOUJNSjtBQWdDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvTW9kYWwudHN4P2E4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QnV0dG9uLCBNb2RhbH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIlxyXG5pbXBvcnQgeyBRUkNvZGUgfSBmcm9tICdyZWFjdC1xci1zdmcnO1xyXG5pbXBvcnQgQnV0dG9uVUkgZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnIGFzICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiBcIigxMDB2aCAtIDUwJSlcIixcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm9yZGVyOiAnMnB4IHNvbGlkICM4OWRlZTInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgYm9yZGVyUmFkaXVzOjUsXHJcbiAgcDogNCxcclxufTtcclxuXHJcblxyXG5jb25zdCBRck1vZGFsID0gKHByb3BzOmFueSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIG9wZW4sXHJcbiAgICBoYW5kbGVDbG9zZVxyXG4gICAgfT1wcm9wcztcclxuICBcclxuXHJcblxyXG4gICAgY29uc3QgbWludGVyPSgpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiXCIpXHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1N0dWRlbnRcIilcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8TW9kYWxcclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgID5cclxuICAgICAgPFFSQ29kZVxyXG4gICAgICAgIGxldmVsPVwiUVwiXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1NiB9fVxyXG4gICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeSh7djpcInFyUHJvb2ZSZXF1ZXN0SnNvblwifSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25VSSBuYW1lPVwiTWludCBEZWdyZWVcIiBvbkNsaWNrSGFuZGxlcj17bWludGVyfS8+XHJcbiAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRck1vZGFsIl0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWwiLCJRUkNvZGUiLCJCdXR0b25VSSIsIlJvdXRlciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsIlFyTW9kYWwiLCJwcm9wcyIsIm9wZW4iLCJoYW5kbGVDbG9zZSIsIm1pbnRlciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwib25DbG9zZSIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtZGVzY3JpYmVkYnkiLCJsZXZlbCIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsInYiLCJuYW1lIiwib25DbGlja0hhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/Modal.tsx\n"));

/***/ })

});