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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./styles/login.module.css":
/*!*********************************!*\
  !*** ./styles/login.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"login_container__PKLw_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbWlseXRlY2gtZ2FtZXMvLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcz80Njg5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxvZ2luX2NvbnRhaW5lcl9fUEtMd19cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/login.module.css\n");

/***/ }),

/***/ "./styles/login_button.module.css":
/*!****************************************!*\
  !*** ./styles/login_button.module.css ***!
  \****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"login\": \"login_button_login__aU1mG\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbG9naW5fYnV0dG9uLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbHl0ZWNoLWdhbWVzLy4vc3R5bGVzL2xvZ2luX2J1dHRvbi5tb2R1bGUuY3NzPzU1YzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9naW5cIjogXCJsb2dpbl9idXR0b25fbG9naW5fX2FVMW1HXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/login_button.module.css\n");

/***/ }),

/***/ "./components/login_button.js":
/*!************************************!*\
  !*** ./components/login_button.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"@mui/material/CircularProgress\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_login_button_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/login_button.module.css */ \"./styles/login_button.module.css\");\n/* harmony import */ var _styles_login_button_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_button_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/LoadingContext */ \"./contexts/LoadingContext.js\");\n\n\n\n\n\n\nfunction LoginButton() {\n    const { doLogin  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const { loading , updateLoading  } = (0,_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_4__.useLoading)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {\n            color: \"green\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\OneDrive\\\\Documents\\\\College\\\\IS_562_Project_Management\\\\familytech-games\\\\src\\\\components\\\\login_button.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_1___default()), {\n            variant: \"contained\",\n            size: \"small\",\n            className: (_styles_login_button_module_css__WEBPACK_IMPORTED_MODULE_5___default().login),\n            style: {\n                padding: \"20px\"\n            },\n            onClick: ()=>{\n                doLogin();\n                updateLoading(true);\n            },\n            children: \"Login with Family Search\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\OneDrive\\\\Documents\\\\College\\\\IS_562_Project_Management\\\\familytech-games\\\\src\\\\components\\\\login_button.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ2luX2J1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ29CO0FBQ1I7QUFDTDtBQUNNO0FBRXhDLFNBQVNLLFdBQVcsR0FBRztJQUNwQyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHSCw4REFBTyxFQUFFO0lBQzdCLE1BQU0sRUFBRUksT0FBTyxHQUFFQyxhQUFhLEdBQUUsR0FBR0osb0VBQVUsRUFBRTtJQUUvQyxxQkFDRTtrQkFDR0csT0FBTyxpQkFDTiw4REFBQ04sdUVBQWdCO1lBQUNRLEtBQUssRUFBQyxPQUFPOzs7OztnQkFBRyxpQkFFbEMsOERBQUNULDZEQUFNO1lBQ0xVLE9BQU8sRUFBQyxXQUFXO1lBQ25CQyxJQUFJLEVBQUMsT0FBTztZQUNaQyxTQUFTLEVBQUVWLDhFQUFZO1lBQ3ZCWSxLQUFLLEVBQUU7Z0JBQUNDLE9BQU8sRUFBRSxNQUFNO2FBQUM7WUFDeEJDLE9BQU8sRUFBRSxJQUFNO2dCQUNiVixPQUFPLEVBQUUsQ0FBQztnQkFDVkUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO3NCQUNGLDBCQUVEOzs7OztnQkFBUztxQkFFVixDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbHl0ZWNoLWdhbWVzLy4vY29tcG9uZW50cy9sb2dpbl9idXR0b24uanM/YWRlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9sb2dpbl9idXR0b24ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlTG9hZGluZyB9IGZyb20gJ0AvY29udGV4dHMvTG9hZGluZ0NvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5CdXR0b24oKSB7XHJcbiAgY29uc3QgeyBkb0xvZ2luIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCB1cGRhdGVMb2FkaW5nIH0gPSB1c2VMb2FkaW5nKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj0nZ3JlZW4nIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbn1cclxuICAgICAgICAgIHN0eWxlPXt7cGFkZGluZzogXCIyMHB4XCJ9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBkb0xvZ2luKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIExvZ2luIHdpdGggRmFtaWx5IFNlYXJjaFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ2lyY3VsYXJQcm9ncmVzcyIsInN0eWxlcyIsInVzZUF1dGgiLCJ1c2VMb2FkaW5nIiwiTG9naW5CdXR0b24iLCJkb0xvZ2luIiwibG9hZGluZyIsInVwZGF0ZUxvYWRpbmciLCJjb2xvciIsInZhcmlhbnQiLCJzaXplIiwiY2xhc3NOYW1lIiwibG9naW4iLCJzdHlsZSIsInBhZGRpbmciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/login_button.js\n");

/***/ }),

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/auth-service */ \"./services/auth-service.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.js\");\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nconst AuthProvider = ({ children  })=>{\n    const { 0: accessToken , 1: setAccessToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: cookieExists , 1: setCookieExists  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (_services_auth_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasCookie()) {\n            setAccessToken(_services_auth_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getFSCookieValue());\n        } else if (_lib_utils__WEBPACK_IMPORTED_MODULE_4__.isDev && router.query.fstoken) {\n            // dev only\n            setAccessToken(router.query.fstoken);\n            document.cookie = `FS_SSO_JWT_TOKEN=${router.query.fstoken}`;\n        }\n        checkForCookie();\n    }, [\n        router.query.fstoken\n    ]);\n    const doLogin = async ()=>{\n        await _services_auth_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].doLogin();\n    };\n    const doLogout = async ()=>{\n        await _services_auth_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].doLogout();\n        setAccessToken(null);\n    };\n    const checkForCookie = ()=>{\n        const hasCookie = _services_auth_service__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasCookie();\n        setCookieExists(hasCookie);\n    };\n    const context = {\n        accessToken,\n        cookieExists,\n        doLogin,\n        doLogout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: context,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justi\\\\OneDrive\\\\Documents\\\\College\\\\IS_562_Project_Management\\\\familytech-games\\\\src\\\\contexts\\\\AuthContext.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUU7QUFDckI7QUFDVjtBQUNMO0FBRW5DLE1BQU1PLFdBQVcsaUJBQUdOLG9EQUFhLEVBQUU7QUFDNUIsU0FBU08sT0FBTyxHQUFHO0lBQ3hCLE9BQU9SLGlEQUFVLENBQUNPLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDO0FBRU0sTUFBTUUsWUFBWSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDNUMsTUFBTSxFQVhSLEdBV1NDLFdBQVcsR0FYcEIsR0FXc0JDLGNBQWMsTUFBSVYsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDcEQsTUFBTSxFQVpSLEdBWVNXLFlBQVksR0FackIsR0FZdUJDLGVBQWUsTUFBSVosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDdkQsTUFBTWEsTUFBTSxHQUFHVixzREFBUyxFQUFFO0lBRTFCRixnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJQyx3RUFBcUIsRUFBRSxFQUFFO1lBQzNCUSxjQUFjLENBQUNSLCtFQUE0QixFQUFFLENBQUMsQ0FBQztTQUNoRCxNQUFNLElBQUlFLDZDQUFLLElBQUlTLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLEVBQUU7WUFDeEMsV0FBVztZQUNYUCxjQUFjLENBQUNHLE1BQU0sQ0FBQ0csS0FBSyxDQUFDQyxPQUFPLENBQUMsQ0FBQztZQUNyQ0MsUUFBUSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRU4sTUFBTSxDQUFDRyxLQUFLLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFDREcsY0FBYyxFQUFFLENBQUM7S0FDbEIsRUFBRTtRQUFDUCxNQUFNLENBQUNHLEtBQUssQ0FBQ0MsT0FBTztLQUFDLENBQUMsQ0FBQztJQUUzQixNQUFNSSxPQUFPLEdBQUcsVUFBWTtRQUMxQixNQUFNbkIsc0VBQW1CLEVBQUUsQ0FBQztLQUM3QjtJQUVELE1BQU1vQixRQUFRLEdBQUcsVUFBWTtRQUMzQixNQUFNcEIsdUVBQW9CLEVBQUUsQ0FBQztRQUM3QlEsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0lBRUQsTUFBTVUsY0FBYyxHQUFHLElBQU07UUFDM0IsTUFBTU4sU0FBUyxHQUFHWix3RUFBcUIsRUFBRTtRQUN6Q1UsZUFBZSxDQUFDRSxTQUFTLENBQUMsQ0FBQztLQUM1QjtJQUVELE1BQU1TLE9BQU8sR0FBRztRQUNkZCxXQUFXO1FBQ1hFLFlBQVk7UUFDWlUsT0FBTztRQUNQQyxRQUFRO0tBQ1Q7SUFFRCxxQkFDRSw4REFBQ2pCLFdBQVcsQ0FBQ21CLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixPQUFPO2tCQUFHZixRQUFROzs7OztpQkFBd0IsQ0FDdkU7Q0FDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFtaWx5dGVjaC1nYW1lcy8uL2NvbnRleHRzL0F1dGhDb250ZXh0LmpzPzU5Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJ0Avc2VydmljZXMvYXV0aC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpc0RldiB9IGZyb20gJ0AvbGliL3V0aWxzJ1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjb29raWVFeGlzdHMsIHNldENvb2tpZUV4aXN0c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoQXV0aFNlcnZpY2UuaGFzQ29va2llKCkpIHtcclxuICAgICAgc2V0QWNjZXNzVG9rZW4oQXV0aFNlcnZpY2UuZ2V0RlNDb29raWVWYWx1ZSgpKTtcclxuICAgIH0gZWxzZSBpZiAoaXNEZXYgJiYgcm91dGVyLnF1ZXJ5LmZzdG9rZW4pIHtcclxuICAgICAgLy8gZGV2IG9ubHlcclxuICAgICAgc2V0QWNjZXNzVG9rZW4ocm91dGVyLnF1ZXJ5LmZzdG9rZW4pO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgRlNfU1NPX0pXVF9UT0tFTj0ke3JvdXRlci5xdWVyeS5mc3Rva2VufWA7XHJcbiAgICB9XHJcbiAgICBjaGVja0ZvckNvb2tpZSgpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnkuZnN0b2tlbl0pO1xyXG5cclxuICBjb25zdCBkb0xvZ2luID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgQXV0aFNlcnZpY2UuZG9Mb2dpbigpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRvTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgQXV0aFNlcnZpY2UuZG9Mb2dvdXQoKTtcclxuICAgIHNldEFjY2Vzc1Rva2VuKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrRm9yQ29va2llID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFzQ29va2llID0gQXV0aFNlcnZpY2UuaGFzQ29va2llKCk7XHJcbiAgICBzZXRDb29raWVFeGlzdHMoaGFzQ29va2llKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgYWNjZXNzVG9rZW4sXHJcbiAgICBjb29raWVFeGlzdHMsXHJcbiAgICBkb0xvZ2luLFxyXG4gICAgZG9Mb2dvdXQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dH0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoU2VydmljZSIsInVzZVJvdXRlciIsImlzRGV2IiwiQXV0aENvbnRleHQiLCJ1c2VBdXRoIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwiY29va2llRXhpc3RzIiwic2V0Q29va2llRXhpc3RzIiwicm91dGVyIiwiaGFzQ29va2llIiwiZ2V0RlNDb29raWVWYWx1ZSIsInF1ZXJ5IiwiZnN0b2tlbiIsImRvY3VtZW50IiwiY29va2llIiwiY2hlY2tGb3JDb29raWUiLCJkb0xvZ2luIiwiZG9Mb2dvdXQiLCJjb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./contexts/LoadingContext.js":
/*!************************************!*\
  !*** ./contexts/LoadingContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadingProvider\": () => (/* binding */ LoadingProvider),\n/* harmony export */   \"useLoading\": () => (/* binding */ useLoading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LoadingContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useLoading() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LoadingContext);\n}\nconst LoadingProvider = ({ children  })=>{\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateLoading = (val)=>{\n        setLoading(val);\n    };\n    const context = {\n        loading,\n        updateLoading\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadingContext.Provider, {\n        value: context,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justi\\\\OneDrive\\\\Documents\\\\College\\\\IS_562_Project_Management\\\\familytech-games\\\\src\\\\contexts\\\\LoadingContext.js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Mb2FkaW5nQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUUzRCxNQUFNRyxjQUFjLGlCQUFHSCxvREFBYSxFQUFFO0FBRS9CLFNBQVNJLFVBQVUsR0FBRztJQUMzQixPQUFPSCxpREFBVSxDQUFDRSxjQUFjLENBQUMsQ0FBQztDQUNuQztBQUVNLE1BQU1FLGVBQWUsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQy9DLE1BQU0sRUFUUixHQVNTQyxPQUFPLEdBVGhCLEdBU2tCQyxVQUFVLE1BQUlOLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRTdDLE1BQU1PLGFBQWEsR0FBRyxDQUFDQyxHQUFHLEdBQUs7UUFDN0JGLFVBQVUsQ0FBQ0UsR0FBRyxDQUFDLENBQUM7S0FDakI7SUFFRCxNQUFNQyxPQUFPLEdBQUc7UUFDZEosT0FBTztRQUNQRSxhQUFhO0tBQ2Q7SUFFRCxxQkFBTyw4REFBQ04sY0FBYyxDQUFDUyxRQUFRO1FBQUNDLEtBQUssRUFBRUYsT0FBTztrQkFBR0wsUUFBUTs7Ozs7aUJBQTJCO0NBQ3JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFtaWx5dGVjaC1nYW1lcy8uL2NvbnRleHRzL0xvYWRpbmdDb250ZXh0LmpzPzc4MGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IExvYWRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvYWRpbmcoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoTG9hZGluZ0NvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTG9hZGluZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlTG9hZGluZyA9ICh2YWwpID0+IHtcclxuICAgIHNldExvYWRpbmcodmFsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgbG9hZGluZyxcclxuICAgIHVwZGF0ZUxvYWRpbmdcclxuICB9IFxyXG5cclxuICByZXR1cm4gPExvYWRpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT57Y2hpbGRyZW59PC9Mb2FkaW5nQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdDb250ZXh0IiwidXNlTG9hZGluZyIsIkxvYWRpbmdQcm92aWRlciIsImNoaWxkcmVuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cGRhdGVMb2FkaW5nIiwidmFsIiwiY29udGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/LoadingContext.js\n");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"isClient\": () => (/* binding */ isClient),\n/* harmony export */   \"isDev\": () => (/* binding */ isDev),\n/* harmony export */   \"parseJWT\": () => (/* binding */ parseJWT)\n/* harmony export */ });\nconst isClient = \"undefined\" === \"object\";\nconst isDev = \"development\" === \"development\";\nconst getCookie = (cname)=>{\n    let name = cname + \"=\";\n    let ca = document.cookie.split(\";\");\n    for(let i = 0; i < ca.length; i++){\n        let c = ca[i];\n        while(c.charAt(0) == \" \"){\n            c = c.substring(1);\n        }\n        if (c.indexOf(name) == 0) {\n            return c.substring(name.length, c.length);\n        }\n    }\n    return \"\";\n};\nconst parseJWT = (token)=>{\n    const base64Url = token.split(\".\")[1];\n    const base64 = base64Url.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    const jsonPayload = decodeURIComponent(atob(base64).split(\"\").map((c)=>\"%\" + (\"00\" + c.charCodeAt(0).toString(16)).slice(-2)\n    ).join(\"\"));\n    return JSON.parse(jsonPayload);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFFBQVEsR0FBRyxXQUFhLEtBQUssUUFBUSxDQUFDO0FBRTVDLE1BQU1DLEtBQUssR0FBR0MsYUFGUixLQUVpQyxhQUFhLENBQUM7QUFFckQsTUFBTUMsU0FBUyxHQUFHLENBQUNDLEtBQUssR0FBSztJQUNsQyxJQUFJQyxJQUFJLEdBQUdELEtBQUssR0FBRyxHQUFHO0lBQ3RCLElBQUlFLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkMsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdKLEVBQUUsQ0FBQ0ssTUFBTSxFQUFFRCxDQUFDLEVBQUUsQ0FBRTtRQUNsQyxJQUFJRSxDQUFDLEdBQUdOLEVBQUUsQ0FBQ0ksQ0FBQyxDQUFDO1FBQ2IsTUFBT0UsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFFO1lBQ3pCRCxDQUFDLEdBQUdBLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsSUFBSUYsQ0FBQyxDQUFDRyxPQUFPLENBQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPTyxDQUFDLENBQUNFLFNBQVMsQ0FBQ1QsSUFBSSxDQUFDTSxNQUFNLEVBQUVDLENBQUMsQ0FBQ0QsTUFBTSxDQUFDLENBQUM7U0FDM0M7S0FDRjtJQUNELE9BQU8sRUFBRSxDQUFDO0NBQ1gsQ0FBQztBQUVLLE1BQU1LLFFBQVEsR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDakMsTUFBTUMsU0FBUyxHQUFHRCxLQUFLLENBQUNSLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsTUFBTVUsTUFBTSxHQUFHRCxTQUFTLENBQUNFLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQ0EsT0FBTyxPQUFPLEdBQUcsQ0FBQztJQUU5RCxNQUFNQyxXQUFXLEdBQUdDLGtCQUFrQixDQUNwQ0MsSUFBSSxDQUFDSixNQUFNLENBQUMsQ0FDVFYsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNUZSxHQUFHLENBQUMsQ0FBQ1osQ0FBQyxHQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBR0EsQ0FBQyxDQUFDYSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDLENBQ2pFQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQ1o7SUFDRCxPQUFPQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1QsV0FBVyxDQUFDLENBQUM7Q0FDaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZhbWlseXRlY2gtZ2FtZXMvLi9saWIvdXRpbHMuanM/OGExZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChjbmFtZSkgPT4ge1xyXG4gIGxldCBuYW1lID0gY25hbWUgKyAnPSc7XHJcbiAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGMgPSBjYVtpXTtcclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VKV1QgPSAodG9rZW4pID0+IHtcclxuICBjb25zdCBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xyXG4gIGNvbnN0IGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG5cclxuICBjb25zdCBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChcclxuICAgIGF0b2IoYmFzZTY0KVxyXG4gICAgICAuc3BsaXQoJycpXHJcbiAgICAgIC5tYXAoKGMpID0+ICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpKVxyXG4gICAgICAuam9pbignJylcclxuICApO1xyXG4gIHJldHVybiBKU09OLnBhcnNlKGpzb25QYXlsb2FkKTtcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJpc0NsaWVudCIsImlzRGV2IiwicHJvY2VzcyIsImdldENvb2tpZSIsImNuYW1lIiwibmFtZSIsImNhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInBhcnNlSldUIiwidG9rZW4iLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwic2xpY2UiLCJqb2luIiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utils.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/login_button */ \"./components/login_button.js\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction Login() {\n    const { cookieExists  } = (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (cookieExists) {\n            router.push(\"/\");\n        }\n    }, [\n        cookieExists\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_login_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\justi\\\\OneDrive\\\\Documents\\\\College\\\\IS_562_Project_Management\\\\familytech-games\\\\src\\\\pages\\\\login.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justi\\\\OneDrive\\\\Documents\\\\College\\\\IS_562_Project_Management\\\\familytech-games\\\\src\\\\pages\\\\login.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9EO0FBQ0w7QUFDRTtBQUNoQjtBQUNNO0FBRXhCLFNBQVNLLEtBQUssR0FBRztJQUM5QixNQUFNLEVBQUVDLFlBQVksR0FBRSxHQUFHSiw4REFBTyxFQUFFO0lBQ2xDLE1BQU1LLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUUxQkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsWUFBWSxFQUFFO1lBQ2hCQyxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtLQUNGLEVBQUU7UUFBQ0YsWUFBWTtLQUFDLENBQUM7SUFFbEIscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCwyRUFBZ0I7a0JBQzlCLDRFQUFDRCxnRUFBVzs7OztnQkFBRzs7Ozs7WUFDWCxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYW1pbHl0ZWNoLWdhbWVzLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9naW5CdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2xvZ2luX2J1dHRvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICdAL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgeyBjb29raWVFeGlzdHMgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjb29raWVFeGlzdHMpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtjb29raWVFeGlzdHNdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8TG9naW5CdXR0b24gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxvZ2luQnV0dG9uIiwic3R5bGVzIiwidXNlQXV0aCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxvZ2luIiwiY29va2llRXhpc3RzIiwicm91dGVyIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "./services/auth-service.js":
/*!**********************************!*\
  !*** ./services/auth-service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthService)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"./lib/utils.js\");\n\n\n\nclass AuthService {\n    static doLogin = async ()=>{\n        let authUrl = \"https://auth.byufamilytech.org\";\n        let redirectUri = _lib_utils__WEBPACK_IMPORTED_MODULE_1__.isDev ? \"http://localhost:3000/login\" : `${\"https://games.byufamilytech.org\"}/login`;\n        axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${authUrl}/?redirect=${redirectUri}/&site=ag`).then((res)=>{\n            window.location = res.request.responseURL;\n        }).catch((err)=>{\n            console.log(err);\n        });\n    };\n    static doLogout = async ()=>{\n        const authUrl = \"https://auth.byufamilytech.org\";\n        const isDev1 = \"development\" === \"development\";\n        let redirectUri = isDev1 ? \"http://localhost:3000/\" : \"https://games.byufamilytech.org\";\n        let ssoToken = document.cookie.replace(/(?:(?:^|.*;\\s*)FS_SSO_JWT_TOKEN\\s*\\=\\s*([^;]*).*$)|^.*$/, \"$1\");\n        window.location = `${authUrl}/logout?redirect=${redirectUri}&fstoken=${ssoToken}`;\n        if (isDev1) {\n            document.cookie = \"FS_SSO_JWT_TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 UTC;\";\n        }\n        localStorage.clear();\n    };\n    static hasCookie = ()=>{\n        let cookieValue = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"FS_SSO_JWT_TOKEN\");\n        return document.cookie.includes(\"FS_SSO_JWT_TOKEN\") && cookieValue;\n    };\n    static getFSCookieValue = ()=>{\n        return (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"FS_SSO_JWT_TOKEN\");\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hdXRoLXNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNjO0FBQ0o7QUFFckIsTUFBTUcsV0FBVztJQUM5QixPQUFPQyxPQUFPLEdBQUcsVUFBWTtRQUMzQixJQUFJQyxPQUFPLEdBQUcsZ0NBQWdDO1FBQzlDLElBQUlDLFdBQVcsR0FBR0osNkNBQUssR0FDbkIsNkJBQTZCLEdBQzdCLENBQUMsRUFBRUssaUNBQWtCLENBQUMsTUFBTSxDQUFDO1FBQ2pDUCxnREFDTSxDQUFDLENBQUMsRUFBRUssT0FBTyxDQUFDLFdBQVcsRUFBRUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQ25ESyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFLO1lBQ2JDLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDO1NBQzNDLENBQUMsQ0FDREMsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO0tBQ04sQ0FBQztJQUVGLE9BQU9HLFFBQVEsR0FBRyxVQUFZO1FBQzVCLE1BQU1oQixPQUFPLEdBQUcsZ0NBQWdDO1FBQ2hELE1BQU1ILE1BQUssR0FBR0ssYUF0QkwsS0FzQjhCLGFBQWE7UUFDcEQsSUFBSUQsV0FBVyxHQUFHSixNQUFLLEdBQUcsd0JBQXdCLEdBQUdLLGlDQUFrQjtRQUN2RSxJQUFJZSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLDREQUVwQyxJQUFJLENBQ0w7UUFDRFosTUFBTSxDQUFDQyxRQUFRLEdBQUcsQ0FBQyxFQUFFVCxPQUFPLENBQUMsaUJBQWlCLEVBQUVDLFdBQVcsQ0FBQyxTQUFTLEVBQUVnQixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUlwQixNQUFLLEVBQUU7WUFDVHFCLFFBQVEsQ0FBQ0MsTUFBTSxHQUNiLDJEQUEyRCxDQUFDO1NBQy9EO1FBQ0RFLFlBQVksQ0FBQ0MsS0FBSyxFQUFFLENBQUM7S0FDdEIsQ0FBQztJQUVGLE9BQU9DLFNBQVMsR0FBRyxJQUFNO1FBQ3ZCLElBQUlDLFdBQVcsR0FBRzVCLHFEQUFTLENBQUMsa0JBQWtCLENBQUM7UUFDL0MsT0FBT3NCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDTSxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSUQsV0FBVyxDQUFDO0tBQ3BFLENBQUM7SUFFRixPQUFPRSxnQkFBZ0IsR0FBRyxJQUFNO1FBQzlCLE9BQU85QixxREFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDdEMsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFtaWx5dGVjaC1nYW1lcy8uL3NlcnZpY2VzL2F1dGgtc2VydmljZS5qcz9mN2E0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJ0AvbGliL3V0aWxzJztcclxuaW1wb3J0IHsgaXNEZXYgfSBmcm9tICdAL2xpYi91dGlscyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgc3RhdGljIGRvTG9naW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgYXV0aFVybCA9ICdodHRwczovL2F1dGguYnl1ZmFtaWx5dGVjaC5vcmcnO1xyXG4gICAgbGV0IHJlZGlyZWN0VXJpID0gaXNEZXZcclxuICAgICAgPyAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJ1xyXG4gICAgICA6IGAke3Byb2Nlc3MuZW52LkRPTUFJTn0vbG9naW5gO1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHthdXRoVXJsfS8/cmVkaXJlY3Q9JHtyZWRpcmVjdFVyaX0vJnNpdGU9YWdgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gcmVzLnJlcXVlc3QucmVzcG9uc2VVUkw7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRvTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aFVybCA9ICdodHRwczovL2F1dGguYnl1ZmFtaWx5dGVjaC5vcmcnO1xyXG4gICAgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxuICAgIGxldCByZWRpcmVjdFVyaSA9IGlzRGV2ID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nIDogcHJvY2Vzcy5lbnYuRE9NQUlOO1xyXG4gICAgbGV0IHNzb1Rva2VuID0gZG9jdW1lbnQuY29va2llLnJlcGxhY2UoXHJcbiAgICAgIC8oPzooPzpefC4qO1xccyopRlNfU1NPX0pXVF9UT0tFTlxccypcXD1cXHMqKFteO10qKS4qJCl8Xi4qJC8sXHJcbiAgICAgICckMSdcclxuICAgICk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24gPSBgJHthdXRoVXJsfS9sb2dvdXQ/cmVkaXJlY3Q9JHtyZWRpcmVjdFVyaX0mZnN0b2tlbj0ke3Nzb1Rva2VufWA7XHJcbiAgICBpZiAoaXNEZXYpIHtcclxuICAgICAgZG9jdW1lbnQuY29va2llID1cclxuICAgICAgICAnRlNfU1NPX0pXVF9UT0tFTj07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7JztcclxuICAgIH1cclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBoYXNDb29raWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgY29va2llVmFsdWUgPSBnZXRDb29raWUoJ0ZTX1NTT19KV1RfVE9LRU4nKTtcclxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUuaW5jbHVkZXMoJ0ZTX1NTT19KV1RfVE9LRU4nKSAmJiBjb29raWVWYWx1ZTtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZ2V0RlNDb29raWVWYWx1ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBnZXRDb29raWUoJ0ZTX1NTT19KV1RfVE9LRU4nKTtcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldENvb2tpZSIsImlzRGV2IiwiQXV0aFNlcnZpY2UiLCJkb0xvZ2luIiwiYXV0aFVybCIsInJlZGlyZWN0VXJpIiwicHJvY2VzcyIsImVudiIsIkRPTUFJTiIsImdldCIsInRoZW4iLCJyZXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcXVlc3QiLCJyZXNwb25zZVVSTCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRvTG9nb3V0Iiwic3NvVG9rZW4iLCJkb2N1bWVudCIsImNvb2tpZSIsInJlcGxhY2UiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsImhhc0Nvb2tpZSIsImNvb2tpZVZhbHVlIiwiaW5jbHVkZXMiLCJnZXRGU0Nvb2tpZVZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/auth-service.js\n");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/CircularProgress":
/*!*************************************************!*\
  !*** external "@mui/material/CircularProgress" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();