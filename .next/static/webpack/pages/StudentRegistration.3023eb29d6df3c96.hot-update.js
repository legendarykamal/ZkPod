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

/***/ "./pages/StudentRegistration.tsx":
/*!***************************************!*\
  !*** ./pages/StudentRegistration.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_med4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/med4.png */ \"./assets/med4.png\");\n/* harmony import */ var _component_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Button */ \"./component/Button.tsx\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst StudentRegistration = ()=>{\n    _s();\n    const atx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthContext);\n    console.log(atx);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        studentId: \"\",\n        walletAddress: atx.address\n    });\n    const inputs = [\n        {\n            title: \"Name\",\n            name: \"name\",\n            type: \"text\"\n        },\n        {\n            title: \"StudentID\",\n            name: \"studentId\",\n            type: \"text\"\n        }\n    ];\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [schema, setSchema] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [schemaLink, setClaimLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://api-staging.polygonid.com/v1/orgs/sign-in\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Accept-Encoding\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email: \"youngsj500@gmail.com\",\n                password: \"PikachuPikachu1!\"\n            })\n        }).then((response)=>response.json()).then((param)=>{\n            let { token  } = param;\n            setToken(token);\n            const { account: { organization: issuerId  }  } = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(token);\n            console.log(issuerId);\n            const schema_id = \"e5c6d9aa8db73c187113290407082ebd\";\n            const tempSchemaLink = \"https://api-staging.polygonid.com/v1/issuers/\".concat(issuerId, \"/schemas/\").concat(schema_id);\n            setClaimLink(\"\".concat(tempSchemaLink, \"/offers\"));\n            return {\n                token,\n                tempSchemaLink\n            };\n        }).then((param)=>{\n            let { token , tempSchemaLink  } = param;\n            fetch(tempSchemaLink, {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    \"Accept-Encoding\": \"application/json\",\n                    Authorization: \"Bearer \".concat(token)\n                }\n            }).then((response)=>response.json()).then((data)=>setSchema(data));\n        });\n    }, []);\n    console.log(setSchema);\n    const handleResults = ()=>{\n        console.log(schemaLink);\n        fetch(schemaLink, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Accept-Encoding\": \"application/json\",\n                Authorization: \"Bearer \".concat(token)\n            },\n            body: JSON.stringify({\n                attributeKey: \"yes\",\n                attributeValue: parseInt(value.studentId)\n            })\n        }).then((response)=>response.json()).then((response)=>{\n            console.log(response);\n            window.open(\"https://platform-test.polygonid.com/claim-link/52ce53d9-6abd-4d2b-981c-18890e2ec6b3\", \"_newtab\");\n        });\n    };\n    const inputHandler = (e)=>{\n        setValue((p)=>({\n                ...p,\n                [e.target.name]: e.target.value\n            }));\n        console.log(value);\n    };\n    const register = ()=>{\n        setLoading(true);\n        handleResults();\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    mt: 5,\n                    mb: 8,\n                    display: \"flex\",\n                    justifyContent: \"space-around\",\n                    alignItems: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_med4_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"image\",\n                            style: {\n                                width: \"900px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"h2\",\n                            fontWeight: \"bold\",\n                            textAlign: \"center\",\n                            sx: {\n                                color: \"#16c2d5\",\n                                marginLeft: 2,\n                                marginRight: 4,\n                                width: \"400px\"\n                            },\n                            children: \"Login to claim your degree as an SBT, and generate a proof for your identity on-chain.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                display: \"flex\",\n                flexDirection: \"column\",\n                alignItems: \"center\",\n                mb: 4,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                        variant: \"h2\",\n                        fontWeight: \"bold\",\n                        children: \"Welcome \\uD83D\\uDC4B\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 17\n                    }, undefined),\n                    inputs.map((input, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                            sx: {\n                                mb: 2,\n                                width: \"500px\"\n                            },\n                            id: input.name,\n                            label: input.title,\n                            name: input.name,\n                            variant: \"standard\",\n                            type: input.type,\n                            onChange: inputHandler\n                        }, void 0, false, {\n                            fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.TextField, {\n                        id: \"address\",\n                        label: \"Address\",\n                        name: \"address\",\n                        defaultValue: atx.address,\n                        variant: \"standard\",\n                        disabled: true,\n                        sx: {\n                            marginBottom: \"40px\",\n                            width: \"500px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 17\n                    }, undefined),\n                    !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClickHandler: register,\n                        name: \"Ready to Go ➡️\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 30\n                    }, undefined),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onClickHandler: register,\n                        name: \"Please Wait... ⌛\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\new2\\\\ZkPod\\\\pages\\\\StudentRegistration.tsx\",\n                lineNumber: 133,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(StudentRegistration, \"Haq1i6NobYEXLi2Zc5mEyYzkghU=\");\n_c = StudentRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StudentRegistration);\nvar _c;\n$RefreshReg$(_c, \"StudentRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1zRCxNQUFNdEQsSUFBSTs0QkFDeEYwRCxVQUFVM0I7Ozs7OztrQ0FHbEIsOERBQUNwRCxvREFBU0E7d0JBQUM2RSxJQUFHO3dCQUFVQyxPQUFNO3dCQUFVL0QsTUFBSzt3QkFBVWlFLGNBQWN4RSxJQUFJVSxPQUFPO3dCQUFFZ0QsU0FBUTt3QkFBV2UsUUFBUTt3QkFBQ1osSUFBSTs0QkFDOUdhLGNBQWM7NEJBQ2RqQixPQUFPO3dCQUNYOzs7Ozs7b0JBQ0MsQ0FBQ3RELHlCQUFXLDhEQUFDUCx5REFBUUE7d0JBQUMrRSxnQkFBZ0IzQjt3QkFBVXpDLE1BQUs7Ozs7OztvQkFDckRKLHlCQUFXLDhEQUFDUCx5REFBUUE7d0JBQUMrRSxnQkFBZ0IzQjt3QkFBVXpDLE1BQUs7Ozs7Ozs7Ozs7Ozs7O0FBSXJFO0dBL0lNUjtLQUFBQTtBQWlKTiwrREFBZUEsbUJBQW1CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1N0dWRlbnRSZWdpc3RyYXRpb24udHN4PzEwNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgbWVkIGZyb20gXCIuLi9hc3NldHMvbWVkNC5wbmdcIlxyXG5pbXBvcnQgQnV0dG9uVUkgZnJvbSAnLi4vY29tcG9uZW50L0J1dHRvbidcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiXHJcblxyXG5jb25zdCBTdHVkZW50UmVnaXN0cmF0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXR4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcclxuICAgIGNvbnNvbGUubG9nKGF0eClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgc3R1ZGVudElkOiBcIlwiLFxyXG4gICAgICAgIHdhbGxldEFkZHJlc3M6IGF0eC5hZGRyZXNzLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBbe1xyXG4gICAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgICBuYW1lOiBcIm5hbWVcIixcclxuICAgICAgICB0eXBlOiBcInRleHRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJTdHVkZW50SURcIixcclxuICAgICAgICBuYW1lOiBcInN0dWRlbnRJZFwiLFxyXG4gICAgICAgIHR5cGU6IFwidGV4dFwiXHJcblxyXG4gICAgfSxcclxuICAgIF1cclxuXHJcblxyXG4gICAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW3NjaGVtYSwgc2V0U2NoZW1hXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbc2NoZW1hTGluaywgc2V0Q2xhaW1MaW5rXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9hcGktc3RhZ2luZy5wb2x5Z29uaWQuY29tL3YxL29yZ3Mvc2lnbi1pbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJ5b3VuZ3NqNTAwQGdtYWlsLmNvbVwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiUGlrYWNodVBpa2FjaHUxIVwiLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgdG9rZW4gfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW4odG9rZW4pXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudDogeyBvcmdhbml6YXRpb246IGlzc3VlcklkIH0sXHJcbiAgICAgICAgICAgICAgICB9ID0gand0X2RlY29kZSh0b2tlbilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzc3VlcklkKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoZW1hX2lkID0gXCJlNWM2ZDlhYThkYjczYzE4NzExMzI5MDQwNzA4MmViZFwiXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wU2NoZW1hTGluayA9IGBodHRwczovL2FwaS1zdGFnaW5nLnBvbHlnb25pZC5jb20vdjEvaXNzdWVycy8ke2lzc3VlcklkfS9zY2hlbWFzLyR7c2NoZW1hX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgICAgIHNldENsYWltTGluayhgJHt0ZW1wU2NoZW1hTGlua30vb2ZmZXJzYClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHRva2VuLCB0ZW1wU2NoZW1hTGluayB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IHRva2VuLCB0ZW1wU2NoZW1hTGluayB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmZXRjaCh0ZW1wU2NoZW1hTGluaywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0U2NoZW1hKGRhdGEpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zb2xlLmxvZyhzZXRTY2hlbWEpXHJcbiAgICBjb25zdCBoYW5kbGVSZXN1bHRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNjaGVtYUxpbmspXHJcbiAgICAgICAgZmV0Y2goc2NoZW1hTGluaywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlS2V5OiBcInllc1wiLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWU6IHBhcnNlSW50KHZhbHVlLnN0dWRlbnRJZClcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihcclxuICAgICAgICAgICAgICAgICAgICBgaHR0cHM6Ly9wbGF0Zm9ybS10ZXN0LnBvbHlnb25pZC5jb20vY2xhaW0tbGluay81MmNlNTNkOS02YWJkLTRkMmItOTgxYy0xODg5MGUyZWM2YjNgLFxyXG4gICAgICAgICAgICAgICAgICAgICdfbmV3dGFiJ1xyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlucHV0SGFuZGxlciA9IChlOiBhbnkpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSgocCkgPT4gKHsgLi4ucCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGhhbmRsZVJlc3VsdHMoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxCb3ggbXQ9ezV9IG1iPXs4fSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiOTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDInIGZvbnRXZWlnaHQ9J2JvbGQnIHRleHRBbGlnbj1cImNlbnRlclwiIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxNmMyZDVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gdG8gY2xhaW0geW91ciBkZWdyZWUgYXMgYW4gU0JULCBhbmQgZ2VuZXJhdGUgYSBwcm9vZiBmb3IgeW91ciBpZGVudGl0eSBvbi1jaGFpbi5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17NH0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoMicgZm9udFdlaWdodD1cImJvbGRcIj5XZWxjb21lIPCfkYs8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICB7aW5wdXRzLm1hcCgoaW5wdXQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1iOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gaWQ9e2lucHV0Lm5hbWV9IGxhYmVsPXtpbnB1dC50aXRsZX0gbmFtZT17aW5wdXQubmFtZX0gdmFyaWFudD1cInN0YW5kYXJkXCIgdHlwZT17aW5wdXQudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwiYWRkcmVzc1wiIGxhYmVsPVwiQWRkcmVzc1wiIG5hbWU9XCJhZGRyZXNzXCIgZGVmYXVsdFZhbHVlPXthdHguYWRkcmVzc30gdmFyaWFudD1cInN0YW5kYXJkXCIgZGlzYWJsZWQgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwMHB4XCJcclxuICAgICAgICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgICAgICAgICB7IWxvYWRpbmcgJiYgPEJ1dHRvblVJIG9uQ2xpY2tIYW5kbGVyPXtyZWdpc3Rlcn0gbmFtZT1cIlJlYWR5IHRvIEdvIOKeoe+4j1wiIC8+fVxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgPEJ1dHRvblVJIG9uQ2xpY2tIYW5kbGVyPXtyZWdpc3Rlcn0gbmFtZT1cIlBsZWFzZSBXYWl0Li4uIOKMm1wiIC8+fVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudFJlZ2lzdHJhdGlvbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkJveCIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJJbWFnZSIsIm1lZCIsIkJ1dHRvblVJIiwiQXV0aENvbnRleHQiLCJqd3RfZGVjb2RlIiwiU3R1ZGVudFJlZ2lzdHJhdGlvbiIsImF0eCIsImNvbnNvbGUiLCJsb2ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJuYW1lIiwic3R1ZGVudElkIiwid2FsbGV0QWRkcmVzcyIsImFkZHJlc3MiLCJpbnB1dHMiLCJ0aXRsZSIsInR5cGUiLCJ0b2tlbiIsInNldFRva2VuIiwic2NoZW1hIiwic2V0U2NoZW1hIiwic2NoZW1hTGluayIsInNldENsYWltTGluayIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJhY2NvdW50Iiwib3JnYW5pemF0aW9uIiwiaXNzdWVySWQiLCJzY2hlbWFfaWQiLCJ0ZW1wU2NoZW1hTGluayIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiaGFuZGxlUmVzdWx0cyIsImF0dHJpYnV0ZUtleSIsImF0dHJpYnV0ZVZhbHVlIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJvcGVuIiwiaW5wdXRIYW5kbGVyIiwiZSIsInAiLCJ0YXJnZXQiLCJyZWdpc3RlciIsIm10IiwibWIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwic3JjIiwiYWx0Iiwic3R5bGUiLCJ3aWR0aCIsInZhcmlhbnQiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwic3giLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJpbnB1dCIsImkiLCJpZCIsImxhYmVsIiwib25DaGFuZ2UiLCJkZWZhdWx0VmFsdWUiLCJkaXNhYmxlZCIsIm1hcmdpbkJvdHRvbSIsIm9uQ2xpY2tIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/StudentRegistration.tsx\n"));

/***/ })

});