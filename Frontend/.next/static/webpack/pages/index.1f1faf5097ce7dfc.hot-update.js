"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nfunction login() {\n    return _login.apply(this, arguments);\n}\nfunction _login() {\n    _login = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function() {\n        var URL;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    URL = \"https://truends.com/api/v1/login\";\n                    return [\n                        4,\n                        fetch(URL, {\n                            method: \"GET\"\n                        }).then(function(response) {\n                            return response.json;\n                        }).then(function(data) {\n                            return console.log(data);\n                        })\n                    ];\n                case 1:\n                    _state.sent();\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return _login.apply(this, arguments);\n}\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg flex flex-col w-screen h-screen justify-center items-center border-0 border-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/6 h-3/6 z-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            method: \"GET\",\n                            action: \"\",\n                            className: \"grid grid-rows-6 gap-2 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"email\",\n                                    className: \"w-full self-end font-semibold text-2xl\",\n                                    children: [\n                                        \"Email/Username\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    className: \"w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    required: true,\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"password\",\n                                    className: \"w-full self-end font-semibold text-2xl\",\n                                    children: [\n                                        \"Password\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    className: \"w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    required: true,\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-semibold text-2xl mt-3\",\n                                    children: [\n                                        \"Don’t have an account? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 38\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    onClick: login,\n                                    className: \"w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    value: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"embed\", {\n                        className: \"w-full fixed border-4 border-red-900 mt-14 \",\n                        src: \"svg/title.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"https://cdn.tailwindcss.com\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFpQztTQUVsQkMsS0FBSztXQUFMQSxNQUFLOztTQUFMQSxNQUFLO0lBQUxBLE1BQUssR0FBcEIsK0ZBQXVCO1lBQ2ZDLEdBQUc7Ozs7b0JBQUhBLEdBQUcsR0FBRyxrQ0FBa0MsQ0FBQztvQkFDL0M7O3dCQUFNQyxLQUFLLENBQUNELEdBQUcsRUFBRTs0QkFDZkUsTUFBTSxFQUFFLEtBQUs7eUJBQ2QsQ0FBQyxDQUNDQyxJQUFJLENBQUMsU0FBQ0MsUUFBUTttQ0FBS0EsUUFBUSxDQUFDQyxJQUFJO3lCQUFBLENBQUMsQ0FDakNGLElBQUksQ0FBQyxTQUFDRyxJQUFJO21DQUFLQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO3lCQUFBLENBQUM7c0JBQUE7O29CQUpwQyxhQUlvQyxDQUFDOzs7Ozs7SUFDdkMsQ0FBQztXQVBjUCxNQUFLOztBQVNwQixTQUFTVSxRQUFRLEdBQUc7SUFDbEIscUJBQ0UsOERBQUNYLDJDQUFROzswQkFDUCw4REFBQ1ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJGQUEyRjs7a0NBQ3hHLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsa0JBQWtCO2tDQUMvQiw0RUFBQ0MsTUFBSTs0QkFBQ1YsTUFBTSxFQUFDLEtBQUs7NEJBQUNXLE1BQU0sRUFBQyxFQUFFOzRCQUFDRixTQUFTLEVBQUMseUJBQXlCOzs4Q0FDOUQsOERBQUNHLE9BQUs7b0NBQUNDLEdBQUcsRUFBQyxPQUFPO29DQUFDSixTQUFTLEVBQUMsd0NBQXdDOzt3Q0FBQyxnQkFDdEQ7d0NBQUMsR0FBRzs7Ozs7O3dDQUNaOzhDQUNSLDhEQUFDSyxPQUFLO29DQUFDQyxJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsRUFBRSxFQUFDLE9BQU87b0NBQUNDLElBQUksRUFBQyxPQUFPO29DQUFDUixTQUFTLEVBQUMsb0VBQW9FO29DQUFDUyxRQUFRO29DQUFDQyxTQUFTOzs7Ozt3Q0FBUzs4Q0FDckosOERBQUNQLE9BQUs7b0NBQUNDLEdBQUcsRUFBQyxVQUFVO29DQUFDSixTQUFTLEVBQUMsd0NBQXdDOzt3Q0FBQyxVQUMvRDt3Q0FBQyxHQUFHOzs7Ozs7d0NBQ047OENBQ1IsOERBQUNLLE9BQUs7b0NBQUNDLElBQUksRUFBQyxNQUFNO29DQUFDQyxFQUFFLEVBQUMsVUFBVTtvQ0FBQ0MsSUFBSSxFQUFDLFVBQVU7b0NBQUNSLFNBQVMsRUFBQyxvRUFBb0U7b0NBQUNTLFFBQVE7b0NBQUNDLFNBQVM7Ozs7O3dDQUFTOzhDQUMzSiw4REFBQ1gsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDZCQUE2Qjs7d0NBQUMseUJBQ3BCO3NEQUFBLDhEQUFDVyxHQUFDOzRDQUFDQyxJQUFJLEVBQUMsR0FBRztzREFBQyxTQUFPOzs7OztnREFBSTs7Ozs7O3dDQUMxQzs4Q0FFTiw4REFBQ1AsT0FBSztvQ0FBQ0MsSUFBSSxFQUFDLFFBQVE7b0NBQUNPLE9BQU8sRUFBRXpCLEtBQUs7b0NBQUVZLFNBQVMsRUFBQyw2RkFBNkY7b0NBQUNjLEtBQUssRUFBQyxPQUFPOzs7Ozt3Q0FBUzs7Ozs7O2dDQUM5Sjs7Ozs7NEJBQ0g7a0NBQ04sOERBQUNDLE9BQUs7d0JBQUNmLFNBQVMsRUFBQyw2Q0FBNkM7d0JBQUNnQixHQUFHLEVBQUMsZUFBZTs7Ozs7NEJBQVM7Ozs7OztvQkFDdkY7MEJBQ04sOERBQUNDLFFBQU07Z0JBQUNELEdBQUcsRUFBQyw2QkFBNkI7Ozs7O29CQUFVOzs7Ozs7WUFDMUMsQ0FDWDtBQUNKLENBQUM7QUExQlFsQixLQUFBQSxRQUFRO0FBNEJqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly90cnVlbmRzLmNvbS9hcGkvdjEvbG9naW5cIjtcclxuICBhd2FpdCBmZXRjaChVUkwsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZsZXggZmxleC1jb2wgdy1zY3JlZW4gaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJvcmRlci0wIGJvcmRlci1ibGFja1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzYgaC0zLzYgei00MFwiPlxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtNiBnYXAtMiBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwidy1mdWxsIHNlbGYtZW5kIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICBFbWFpbC9Vc2VybmFtZXtcIiBcIn1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1mdWxsIHB4LTUgaC0xNFwiIHJlcXVpcmVkIGF1dG9Gb2N1cz48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2VsZi1lbmQgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgIFBhc3N3b3Jke1wiIFwifVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWZ1bGwgcHgtNSBoLTE0XCIgcmVxdWlyZWQgYXV0b0ZvY3VzPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/IDxhIGhyZWY9XCIjXCI+U2lnbiBVcDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2xvZ2lufSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xNiB0ZXh0LXdoaXRlIHRleHQtMnhsIGJnLWJsdWUtOTAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWZ1bGwgcHgtNSBoLTE0XCIgdmFsdWU9XCJMb2dpblwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGVtYmVkIGNsYXNzTmFtZT1cInctZnVsbCBmaXhlZCBib3JkZXItNCBib3JkZXItcmVkLTkwMCBtdC0xNCBcIiBzcmM9XCJzdmcvdGl0bGUuc3ZnXCI+PC9lbWJlZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tXCI+PC9zY3JpcHQ+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJsb2dpbiIsIlVSTCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSG9tZVBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImEiLCJocmVmIiwib25DbGljayIsInZhbHVlIiwiZW1iZWQiLCJzcmMiLCJzY3JpcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});