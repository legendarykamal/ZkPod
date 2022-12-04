"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthContextProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [err, setErr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [userDetails, setUserDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function web3_check_metamask() {\n        if (!window.ethereum) {\n            console.error(\"It seems that the MetaMask extension is not detected. Please install MetaMask first.\");\n            alert(\"It seems that the MetaMask extension is not detected. Please install MetaMask first.\");\n            return false;\n        } else {\n            console.log(\"MetaMask extension has been detected!!\");\n            return true;\n        }\n    }\n    async function login() {\n        try {\n            setLoading(true);\n            if (web3_check_metamask()) {\n                console.log(\"Initate Login Process\");\n                // Get the Ethereum provider\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n                // Get Ethereum accounts\n                await provider.send(\"eth_requestAccounts\", []);\n                console.log(\"Connected!!\");\n                // Get the User Ethereum address\n                const address = await provider.getSigner().getAddress();\n                console.log(address);\n                setAddress(address);\n            }\n            setLoading(false);\n        } catch (error) {\n            setLoading(false);\n            setErr(true);\n        }\n    }\n    const contextValue = {\n        userDetails,\n        login,\n        address\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\new2\\\\ZkPod\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthContextProvider, \"QTF201a6hX+OqvQT4A7NfqsOSHA=\");\n_c = AuthContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContextProvider);\nvar _c;\n$RefreshReg$(_c, \"AuthContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDbEI7QUFJekIsTUFBTUksNEJBQWNILG9EQUFhQSxDQUFDLElBQUksRUFBRTtBQUUvQyxNQUFNSSxzQkFBc0IsU0FBZ0I7UUFBZixFQUFDQyxTQUFRLEVBQUM7O0lBQ25DLE1BQU0sQ0FBQ0MsS0FBSUMsT0FBTyxHQUFDTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2pDLE1BQU0sQ0FBQ08sU0FBUUMsV0FBVyxHQUFDUiwrQ0FBUUEsQ0FBQztJQUNwQyxNQUFNLENBQUNTLGFBQVlDLGVBQWUsR0FBQ1YsK0NBQVFBLENBQUMsSUFBSTtJQUNoRCxNQUFNLENBQUNXLFNBQVFDLFdBQVcsR0FBQ1osK0NBQVFBLENBQUMsS0FBSztJQUV6QyxTQUFTYSxzQkFBc0I7UUFDM0IsSUFBSSxDQUFDQyxPQUFPQyxRQUFRLEVBQUU7WUFDbEJDLFFBQVFDLEtBQUssQ0FBQztZQUNkQyxNQUFNO1lBQ04sT0FBTyxLQUFLO1FBQ2hCLE9BQUs7WUFDREYsUUFBUUcsR0FBRyxDQUFDO1lBQ1osT0FBTyxJQUFJO1FBQ2YsQ0FBQztJQUNMO0lBQ0EsZUFBZUMsUUFBUTtRQUNuQixJQUFJO1lBQ0FSLFdBQVcsSUFBSTtZQUNmLElBQUtDLHVCQUF3QjtnQkFDekJHLFFBQVFHLEdBQUcsQ0FBQztnQkFFWiw0QkFBNEI7Z0JBQzVCLE1BQU1FLFdBQVcsSUFBSXBCLGlFQUE2QixDQUFDYSxPQUFPQyxRQUFRO2dCQUNsRSx3QkFBd0I7Z0JBQ3hCLE1BQU1NLFNBQVNHLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtnQkFDN0NSLFFBQVFHLEdBQUcsQ0FBQztnQkFDWixnQ0FBZ0M7Z0JBQ2hDLE1BQU1aLFVBQVUsTUFBTWMsU0FBU0ksU0FBUyxHQUFHQyxVQUFVO2dCQUNyRFYsUUFBUUcsR0FBRyxDQUFDWjtnQkFDWkMsV0FBV0Q7WUFDZixDQUFDO1lBQ0RLLFdBQVcsS0FBSztRQUNwQixFQUFFLE9BQU9LLE9BQU87WUFDWkwsV0FBVyxLQUFLO1lBQ2hCTixPQUFPLElBQUk7UUFDZjtJQUNKO0lBRUEsTUFBTXFCLGVBQWE7UUFDZmxCO1FBQ0FXO1FBQ0FiO0lBQ0o7SUFDRixxQkFDRSw4REFBQ0wsWUFBWTBCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQ3hCdkI7Ozs7OztBQUdUO0dBakRNRDtLQUFBQTtBQW1ETiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvQXV0aENvbnRleHQudHN4P2ZkZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbZXJyLHNldEVycl09dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FkZHJlc3Msc2V0QWRkcmVzc109dXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlckRldGFpbHMsc2V0VXNlckRldGFpbHNdPXVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB3ZWIzX2NoZWNrX21ldGFtYXNrKCkge1xyXG4gICAgICAgIGlmICghd2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0l0IHNlZW1zIHRoYXQgdGhlIE1ldGFNYXNrIGV4dGVuc2lvbiBpcyBub3QgZGV0ZWN0ZWQuIFBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrIGZpcnN0LicpO1xyXG4gICAgICAgICAgICBhbGVydCgnSXQgc2VlbXMgdGhhdCB0aGUgTWV0YU1hc2sgZXh0ZW5zaW9uIGlzIG5vdCBkZXRlY3RlZC4gUGxlYXNlIGluc3RhbGwgTWV0YU1hc2sgZmlyc3QuJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01ldGFNYXNrIGV4dGVuc2lvbiBoYXMgYmVlbiBkZXRlY3RlZCEhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2dpbigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoIHdlYjNfY2hlY2tfbWV0YW1hc2soKSApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbml0YXRlIExvZ2luIFByb2Nlc3MnKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBFdGhlcmV1bSBwcm92aWRlclxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IEV0aGVyZXVtIGFjY291bnRzXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCEhXCIpOyBcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgVXNlciBFdGhlcmV1bSBhZGRyZXNzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCkuZ2V0QWRkcmVzcygpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkcmVzcyk7ICBcclxuICAgICAgICAgICAgICAgIHNldEFkZHJlc3MoYWRkcmVzcykgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0RXJyKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY29udGV4dFZhbHVlPXtcclxuICAgICAgICB1c2VyRGV0YWlscyxcclxuICAgICAgICBsb2dpbixcclxuICAgICAgICBhZGRyZXNzXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRQcm92aWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkF1dGhDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiZXJyIiwic2V0RXJyIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJ1c2VyRGV0YWlscyIsInNldFVzZXJEZXRhaWxzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ3ZWIzX2NoZWNrX21ldGFtYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJjb25zb2xlIiwiZXJyb3IiLCJhbGVydCIsImxvZyIsImxvZ2luIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzZW5kIiwiZ2V0U2lnbmVyIiwiZ2V0QWRkcmVzcyIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n"));

/***/ })

});