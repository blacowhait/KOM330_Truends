"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/register";
exports.ids = ["pages/auth/register"];
exports.modules = {

/***/ "./pages/auth/register.js":
/*!********************************!*\
  !*** ./pages/auth/register.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function signup() {\n    const URL = \"https://truends.com/api/v1/login\";\n    await fetch(URL, {\n        method: \"GET\"\n    }).then((response)=>response.json).then((data)=>console.log(data));\n}\nfunction Register() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg flex flex-col w-screen h-screen justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-semibold text-3xl\",\n                        children: \"SIGN UP\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/6 h-7/12 z-40 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            method: \"GET\",\n                            action: \"\",\n                            className: \"grid grid-rows-6 gap-2 \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"username\",\n                                    className: \"w-full self-end font-semibold text-2xl\",\n                                    children: [\n                                        \"Username\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    name: \"username\",\n                                    className: \"w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    required: true,\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"email\",\n                                    className: \"w-full self-end font-semibold text-2xl\",\n                                    children: [\n                                        \"Email\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    id: \"email\",\n                                    name: \"email\",\n                                    className: \"w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    required: true,\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    for: \"password\",\n                                    className: \"w-full self-end font-semibold text-2xl\",\n                                    children: [\n                                        \"Password\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"password\",\n                                    id: \"password\",\n                                    name: \"password\",\n                                    className: \"w-full bg-gray-200 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    required: true,\n                                    autoFocus: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-semibold text-2xl mt-3\",\n                                    children: [\n                                        \"Don’t have an account? \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            children: \"Sign Up\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 38\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    onClick: signup,\n                                    className: \"w-full h-16 text-white text-2xl bg-blue-900 border-2 border-gray-300 rounded-full px-5 h-14\",\n                                    value: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"embed\", {\n                        className: \"w-full fixed border-4 border-red-900 mt-14 \",\n                        src: \"/svg/register.svg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"https://cdn.tailwindcss.com\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Desktop\\\\KOM330_\\\\frontend\\\\pages\\\\auth\\\\register.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9hdXRoL3JlZ2lzdGVyLmpzPzE0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNpZ251cCgpIHtcclxuICBjb25zdCBVUkwgPSBcImh0dHBzOi8vdHJ1ZW5kcy5jb20vYXBpL3YxL2xvZ2luXCI7XHJcbiAgYXdhaXQgZmV0Y2goVVJMLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbilcclxuICAgIC50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmbGV4IGZsZXgtY29sIHctc2NyZWVuIGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LTN4bFwiPlNJR04gVVA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi82IGgtNy8xMiB6LTQwIFwiPlxyXG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgYWN0aW9uPVwiXCIgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtNiBnYXAtMiBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwidy1mdWxsIHNlbGYtZW5kIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGxcIj5cclxuICAgICAgICAgICAgICBVc2VybmFtZXtcIiBcIn1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1mdWxsIHB4LTUgaC0xNFwiIHJlcXVpcmVkIGF1dG9Gb2N1cz48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2VsZi1lbmQgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgIEVtYWlse1wiIFwifVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1mdWxsIHB4LTUgaC0xNFwiIHJlcXVpcmVkIGF1dG9Gb2N1cz48L2lucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2VsZi1lbmQgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bFwiPlxyXG4gICAgICAgICAgICAgIFBhc3N3b3Jke1wiIFwifVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1mdWxsIHB4LTUgaC0xNFwiIHJlcXVpcmVkIGF1dG9Gb2N1cz48L2lucHV0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgbXQtM1wiPlxyXG4gICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyA8YSBocmVmPVwiI1wiPlNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdudXB9IGNsYXNzTmFtZT1cInctZnVsbCBoLTE2IHRleHQtd2hpdGUgdGV4dC0yeGwgYmctYmx1ZS05MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtZnVsbCBweC01IGgtMTRcIiB2YWx1ZT1cIkxvZ2luXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZW1iZWQgY2xhc3NOYW1lPVwidy1mdWxsIGZpeGVkIGJvcmRlci00IGJvcmRlci1yZWQtOTAwIG10LTE0IFwiIHNyYz1cIi9zdmcvcmVnaXN0ZXIuc3ZnXCI+PC9lbWJlZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tXCI+PC9zY3JpcHQ+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInNpZ251cCIsIlVSTCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiUmVnaXN0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsImEiLCJocmVmIiwib25DbGljayIsInZhbHVlIiwiZW1iZWQiLCJzcmMiLCJzY3JpcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/register.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/register.js"));
module.exports = __webpack_exports__;

})();