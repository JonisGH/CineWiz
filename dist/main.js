/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/appContext */ "./src/context/appContext.tsx");
/* harmony import */ var _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/NavbarComponent */ "./src/components/NavbarComponent.tsx");
/* harmony import */ var _components_TableComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TableComponent */ "./src/components/TableComponent.tsx");





function App() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_appContext__WEBPACK_IMPORTED_MODULE_2__.UserlistProvider, { favorites: _context_appContext__WEBPACK_IMPORTED_MODULE_2__.initialUserListState.favorites, watchlist: _context_appContext__WEBPACK_IMPORTED_MODULE_2__.initialUserListState.watchlist },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "app-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { style: { position: 'relative', zIndex: 1 } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavbarComponent__WEBPACK_IMPORTED_MODULE_3__["default"], null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TableComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-animation" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "stars" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "stars2" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "stars3" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "stars4" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "stars5" })))));
}
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/components/FadingTypographyComponent.tsx":
/*!******************************************************!*\
  !*** ./src/components/FadingTypographyComponent.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FadingTypographyComponent = function (props) {
    var textValue = props.textValue, hide = props.hide;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), firstRender = _a[0], setFirstRender = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), hidden = _b[0], setHidden = _b[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (firstRender === false) {
            setHidden(hide);
            return;
        }
        setFirstRender(false);
    }, [hide]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { hidden: hidden, className: "element-fade-in-out", style: {
            marginLeft: '-40px',
            fontStyle: 'italic',
            color: 'white',
            fontSize: '0.9rem',
            fontWeight: 'initial',
        } }, textValue));
};
/* harmony default export */ __webpack_exports__["default"] = (FadingTypographyComponent);


/***/ }),

/***/ "./src/components/NavbarComponent.tsx":
/*!********************************************!*\
  !*** ./src/components/NavbarComponent.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_NavbarBrand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/NavbarBrand */ "./node_modules/react-bootstrap/esm/NavbarBrand.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var _SideBarComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarComponent */ "./src/components/SideBarComponent.tsx");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");










var NavbarComponent = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), sidebarOpen = _a[0], setSiderbarOpen = _a[1];
    var toggleSidebarOpen = function () {
        setSiderbarOpen(!sidebarOpen);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], { fixed: "top", bg: "dark", variant: "dark" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], { style: { transition: 'margin-right .5s', paddingRight: '20px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavbarBrand__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faFilm }),
                    " CineWiz"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "outline-light", style: {
                        border: 'none',
                        fontWeight: 'bold',
                    }, onClick: toggleSidebarOpen },
                    sidebarOpen ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronRight }))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronLeft }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faChevronLeft }))),
                    "\u00A0My stuff\u00A0")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SideBarComponent__WEBPACK_IMPORTED_MODULE_1__["default"], { barPlacement: "end", show: sidebarOpen }))));
};
/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);


/***/ }),

/***/ "./src/components/SearchBarComponent.tsx":
/*!***********************************************!*\
  !*** ./src/components/SearchBarComponent.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap_FormText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/FormText */ "./node_modules/react-bootstrap/esm/FormText.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");





var SearchBar = function (props) {
    var searchInput = props.searchInput, handleChange = props.handleChange, show = props.show, setShow = props.setShow;
    function handleOnFocus() {
        setShow(false);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (searchInput !== '') {
            setTimeout(function () {
                setShow(true);
            }, 800);
        }
        // eslint-disable-next-line
    }, [searchInput]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_FormGroup__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "d-flex flex-column justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_3__["default"], { onFocus: handleOnFocus, type: "text", placeholder: "Search for your favorite movies!", value: searchInput, onChange: handleChange, style: { marginTop: '4rem' } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_FormText__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "mx-auto mt-3 text-light", hidden: !show },
                    "Displaying results for search : ",
                    searchInput)))));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);


/***/ }),

/***/ "./src/components/SideBarComponent.tsx":
/*!*********************************************!*\
  !*** ./src/components/SideBarComponent.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SideBarComponent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Offcanvas */ "./node_modules/react-bootstrap/esm/Offcanvas.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome/ */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs");
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/appContext */ "./src/context/appContext.tsx");




// icon imports








function SideBarComponent(props) {
    var show = props.show, barPlacement = props.barPlacement;
    var _a = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_2__.useManageUserLists)(), state = _a.state, removeFromFavorites = _a.removeFromFavorites, removeFromWatchlist = _a.removeFromWatchlist;
    var favorites = state.favorites;
    var watchlist = state.watchlist;
    function handleRemoveFavorite(movie) {
        removeFromFavorites(movie);
    }
    function handleRemoveWatchlist(movie) {
        removeFromWatchlist(movie);
    }
    // TODO: Make custom component that pushes table instead
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_3__["default"], { className: 'sidebar', scroll: true, backdrop: false, placement: barPlacement, show: show, style: {
                backgroundColor: '#212529',
                top: '3rem',
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__["default"], { striped: true, hover: true, variant: "dark" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", { style: { borderColor: '#212529' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "d-flex gap-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHeart }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Favorites")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, favorites.map(function (movie) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: movie.id + '_favorites', style: { verticalAlign: 'middle', lineBreak: 'strict' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                                movie.vote_average,
                                "\u00A0\u00A0",
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { color: "gold", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, movie.title),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "outline-light", size: "sm", className: "w-100", onClick: function () { return handleRemoveFavorite(movie); }, style: {
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap',
                                    border: 'none',
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHeart }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleXmark, className: "text-dark bg-light", style: {
                                        borderRadius: '20px',
                                        marginLeft: '-9px',
                                    } })))));
                }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_4__["default"], { striped: true, hover: true, variant: "dark" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "d-flex gap-3", style: { border: 'none' } },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEye }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, "Watchlist")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, watchlist.map(function (movie) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: movie.id + '_watchlist', style: { verticalAlign: 'middle', lineBreak: 'strict' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                            movie.vote_average,
                            "\u00A0\u00A0",
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { color: "gold", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faStar })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { style: { lineBreak: 'strict' } }, movie.title)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "outline-light", size: "sm", className: "w-100", onClick: function () { return handleRemoveWatchlist(movie); }, style: {
                                    border: 'none',
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap',
                                } },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEye }),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCircleXmark, className: "text-dark bg-light", style: {
                                        borderRadius: '20px',
                                        marginLeft: '-9px',
                                    } })))));
                }))))));
}


/***/ }),

/***/ "./src/components/TableComponent.tsx":
/*!*******************************************!*\
  !*** ./src/components/TableComponent.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useDebounce */ "./src/hooks/useDebounce.ts");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _SearchBarComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBarComponent */ "./src/components/SearchBarComponent.tsx");
/* harmony import */ var _hooks_useFetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useFetchData */ "./src/hooks/useFetchData.ts");
/* harmony import */ var _TableRowComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableRowComponent */ "./src/components/TableRowComponent.tsx");







var TableComponent = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), hideSearchDisplay = _a[0], setHideSearchDisplay = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var debouncedValue = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_1__["default"])(searchQuery, 500);
    var searchResult = (0,_hooks_useFetchData__WEBPACK_IMPORTED_MODULE_3__["default"])({
        searchString: debouncedValue,
        page: '1',
    }).searchResult;
    function handleChange(event) {
        var _a;
        event.preventDefault();
        if (event.target.value !== undefined) {
            setSearchQuery((_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchBarComponent__WEBPACK_IMPORTED_MODULE_2__["default"], { searchInput: searchQuery, show: hideSearchDisplay, setShow: setHideSearchDisplay, handleChange: handleChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__["default"], { striped: true, hover: true, variant: "dark", style: { marginTop: '2rem' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", { className: "text-align-center tablebody" }, searchResult.map(function (movie) {
                    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TableRowComponent__WEBPACK_IMPORTED_MODULE_4__["default"], { key: movie.id + 'row', movie: movie });
                }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TableComponent);


/***/ }),

/***/ "./src/components/TableRowComponent.tsx":
/*!**********************************************!*\
  !*** ./src/components/TableRowComponent.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome/ */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.mjs");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/appContext */ "./src/context/appContext.tsx");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var _FadingTypographyComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FadingTypographyComponent */ "./src/components/FadingTypographyComponent.tsx");

// icon imports











var TableRowComponent = function (props) {
    var movie = props.movie;
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), firstRender = _a[0], setFirstRender = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), hideFavorite = _b[0], setHideFavorite = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), hideWatchlist = _c[0], setHideWatchlist = _c[1];
    var _d = (0,_context_appContext__WEBPACK_IMPORTED_MODULE_2__.useManageUserLists)(), state = _d.state, addToFavorites = _d.addToFavorites, addToWatchlist = _d.addToWatchlist, removeFromFavorites = _d.removeFromFavorites, removeFromWatchlist = _d.removeFromWatchlist;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setFirstRender(false);
    }, []);
    function handleAddFavorite() {
        setHideFavorite(!hideFavorite);
        addToFavorites(movie);
    }
    function handleRemoveFavorite() {
        setHideFavorite(!hideFavorite);
        removeFromFavorites(movie);
    }
    function handleAddWatchlist() {
        setHideWatchlist(!hideWatchlist);
        addToWatchlist(movie);
    }
    function handleRemoveWatchlist() {
        setHideWatchlist(!hideWatchlist);
        removeFromWatchlist(movie);
    }
    function buttonStateCheck(listType, checkMovie) {
        if (listType === 'watchlist' &&
            state.watchlist.find(function (movie) { return movie.id === checkMovie.id; })) {
            return true;
        }
        if (listType === 'favorites' &&
            state.favorites.find(function (movie) { return movie.id === checkMovie.id; })) {
            return true;
        }
        return false;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "d-none d-lg-table-cell border-0", style: { maxHeight: '3rem', maxWidth: '3rem' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: 'https://image.tmdb.org/t/p/w200' + movie.poster_path, alt: 'poster-table-cell', style: { maxHeight: '100%', maxWidth: '100%' } })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "border-0", style: { paddingLeft: '1rem' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 mb-4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, movie.title),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { style: { color: 'GrayText' } }, ' (' + movie.release_date + ')'))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "border-0" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "mt-4 mb-4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", { style: { color: 'GrayText' } }, "TMDB rating"),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
                    movie.vote_average,
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { color: "gold", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faStar }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "border-0" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "mt-4 mb-4" }, buttonStateCheck('favorites', movie) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outline-light", size: "sm", className: " mt-4 mb-4 border-0", onClick: handleRemoveFavorite, style: {
                        maxWidth: '37px',
                        maxHeight: '29.25px',
                        whiteSpace: 'nowrap',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faHeart }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCircleXmark, className: "text-dark bg-light", style: {
                                borderRadius: '20px',
                                marginLeft: '-9px',
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FadingTypographyComponent__WEBPACK_IMPORTED_MODULE_3__["default"], { textValue: "added to favorites", hide: hideFavorite }))) : (
                // w 37 h 29.25 PX
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outline-light", size: "sm", className: "mt-4 mb-4 border-0", onClick: handleAddFavorite, style: {
                        maxWidth: '37px',
                        maxHeight: '29.25px',
                        whiteSpace: 'nowrap',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faHeart }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FadingTypographyComponent__WEBPACK_IMPORTED_MODULE_3__["default"], { textValue: "added to favorites", hide: hideFavorite }))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "border-0", style: { paddingRight: '1rem' } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], { className: "mt-4 mb-4" }, buttonStateCheck('watchlist', movie) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outline-light", size: "sm", className: "mt-4 mb-4 border-0", onClick: handleRemoveWatchlist, style: {
                        maxWidth: '37px',
                        maxHeight: '29.25px',
                        whiteSpace: 'nowrap',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEye }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCircleXmark, className: "text-dark bg-light", style: {
                                borderRadius: '20px',
                                marginLeft: '-9px',
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FadingTypographyComponent__WEBPACK_IMPORTED_MODULE_3__["default"], { textValue: "added to watchlist", hide: hideWatchlist }))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "outline-light", size: "sm", className: "mt-4 mb-4 border-0", onClick: handleAddWatchlist, style: {
                        maxWidth: '37px',
                        maxHeight: '29.25px',
                        whiteSpace: 'nowrap',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome___WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { size: "xl", icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEye }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FadingTypographyComponent__WEBPACK_IMPORTED_MODULE_3__["default"], { textValue: "added to watchlist", hide: hideWatchlist }))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (TableRowComponent);


/***/ }),

/***/ "./src/context/appContext.tsx":
/*!************************************!*\
  !*** ./src/context/appContext.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListContext": function() { return /* binding */ UserListContext; },
/* harmony export */   "UserlistProvider": function() { return /* binding */ UserlistProvider; },
/* harmony export */   "initialUserListState": function() { return /* binding */ initialUserListState; },
/* harmony export */   "useManageUserLists": function() { return /* binding */ useManageUserLists; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var initialUserListState = {
    favorites: [],
    watchlist: [],
};
// Reducer
var REDUCER_ACTION_TYPE;
(function (REDUCER_ACTION_TYPE) {
    REDUCER_ACTION_TYPE[REDUCER_ACTION_TYPE["ADD_TO_WATCHLIST"] = 0] = "ADD_TO_WATCHLIST";
    REDUCER_ACTION_TYPE[REDUCER_ACTION_TYPE["ADD_TO_FAVORITES"] = 1] = "ADD_TO_FAVORITES";
    REDUCER_ACTION_TYPE[REDUCER_ACTION_TYPE["REMOVE_FROM_WATCHLIST"] = 2] = "REMOVE_FROM_WATCHLIST";
    REDUCER_ACTION_TYPE[REDUCER_ACTION_TYPE["REMOVE_FROM_FAVORITES"] = 3] = "REMOVE_FROM_FAVORITES";
})(REDUCER_ACTION_TYPE || (REDUCER_ACTION_TYPE = {}));
var userListReducer = function (state, action) {
    switch (action.type) {
        // Favorites Add & Remove
        case REDUCER_ACTION_TYPE.ADD_TO_FAVORITES: {
            if (state.favorites.find(function (movie) { return movie.id === action.payload.id; })) {
                return state;
            }
            return __assign(__assign({}, state), { favorites: __spreadArray([action.payload], state.favorites, true) });
        }
        case REDUCER_ACTION_TYPE.REMOVE_FROM_FAVORITES: {
            return __assign(__assign({}, state), { favorites: state.favorites.filter(function (movie) { return movie.id !== action.payload.id; }) });
        }
        // Watchlist Add & Remove
        case REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST: {
            if (state.watchlist.find(function (movie) { return movie.id === action.payload.id; })) {
                return state;
            }
            return __assign(__assign({}, state), { watchlist: __spreadArray([action.payload], state.watchlist, true) });
        }
        case REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHLIST: {
            return __assign(__assign({}, state), { watchlist: state.watchlist.filter(function (movie) { return movie.id !== action.payload.id; }) });
        }
        default:
            console.error('An error occurred');
            return state;
    }
};
// Context & Hooks
var useUserListContext = function (initialUserListState) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(userListReducer, initialUserListState), state = _a[0], dispatch = _a[1];
    /*/ Making use of useCallback here to prevent components from rerendering /*/
    var addToFavorites = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (movie) {
        dispatch({ type: REDUCER_ACTION_TYPE.ADD_TO_FAVORITES, payload: movie });
    }, []);
    var removeFromFavorites = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (movie) {
        dispatch({
            type: REDUCER_ACTION_TYPE.REMOVE_FROM_FAVORITES,
            payload: movie,
        });
    }, []);
    var addToWatchlist = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (movie) {
        dispatch({ type: REDUCER_ACTION_TYPE.ADD_TO_WATCHLIST, payload: movie });
    }, []);
    var removeFromWatchlist = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (movie) {
        dispatch({
            type: REDUCER_ACTION_TYPE.REMOVE_FROM_WATCHLIST,
            payload: movie,
        });
    }, []);
    return {
        state: state,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        addToWatchlist: addToWatchlist,
        removeFromWatchlist: removeFromWatchlist,
    };
};
var initialUserListContextState = {
    state: initialUserListState,
    addToFavorites: function () { },
    removeFromFavorites: function () { },
    addToWatchlist: function () { },
    removeFromWatchlist: function () { },
};
var UserListContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialUserListContextState);
var UserlistProvider = function (_a) {
    var children = _a.children, initialUserListState = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserListContext.Provider, { value: useUserListContext(initialUserListState) }, children));
};
var useManageUserLists = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(UserListContext), state = _a.state, addToFavorites = _a.addToFavorites, removeFromFavorites = _a.removeFromFavorites, addToWatchlist = _a.addToWatchlist, removeFromWatchlist = _a.removeFromWatchlist;
    return {
        state: state,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        addToWatchlist: addToWatchlist,
        removeFromWatchlist: removeFromWatchlist,
    };
};


/***/ }),

/***/ "./src/hooks/useDebounce.ts":
/*!**********************************!*\
  !*** ./src/hooks/useDebounce.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = setTimeout(function () { return setDebouncedValue(value); }, delay || 500);
        return function () {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}
/* harmony default export */ __webpack_exports__["default"] = (useDebounce);


/***/ }),

/***/ "./src/hooks/useFetchData.ts":
/*!***********************************!*\
  !*** ./src/hooks/useFetchData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// TODO: put in .env
var TMDB_KEY = '47da03161ab5477b6ac6c70f5435f4ae';
var BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=".concat(TMDB_KEY);
var useFetchData = function (props) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), searchResult = _a[0], setSearchResult = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), error = _c[0], setError = _c[1];
    var searchString = props.searchString, page = props.page;
    var dataConverter = function (inputData) {
        if (inputData === undefined) {
            return [];
        }
        var prunedData = inputData.map(function (movie) {
            return {
                title: movie.title,
                release_date: movie.release_date,
                poster_path: movie.poster_path,
                vote_average: movie.vote_average,
                id: movie.id,
                overview: movie.overview,
            };
        });
        return prunedData;
    };
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(BASE_URL, "&query=").concat(searchString, "&page=").concat(page, "&include_adult=false"))
                            .then(function (res) {
                            var _a;
                            setSearchResult(dataConverter((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results));
                            setLoading(false);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    setError('Failed to fetch data');
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var fetchInitialData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(TMDB_KEY, "&language=en-US&page=1"))
                            .then(function (res) {
                            var _a;
                            setSearchResult(dataConverter((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.results));
                            setLoading(false);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    setError('Failed to fetch data');
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (searchString === '') {
            fetchInitialData();
        }
        if (searchString.length > 0) {
            fetchData();
        }
        // eslint-disable-next-line
    }, [searchString]);
    return { searchResult: searchResult, loading: loading, error: error };
};
/* harmony default export */ __webpack_exports__["default"] = (useFetchData);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var react_bootstrap_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");





//bootstrap css

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["default"], { breakpoints: ['xxl', 'xl', 'lg', 'md', 'sm'], minBreakpoint: "sm" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null)));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcinewiz"] = self["webpackChunkcinewiz"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_react-fontawesome_index_es_js-node_modules_bootstrap_dist_cs-ec5452"], function() { return __webpack_require__("./src/index.tsx"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVsREE7VUFDQTtVQUNBO1VBQ0Esa0xBQWtMLGdEQUFnRDtVQUNsTyIsInNvdXJjZXMiOlsid2VicGFjazovL2NpbmV3aXovLi9zcmMvQXBwLmNzcz85YjcyIiwid2VicGFjazovL2NpbmV3aXovLi9zcmMvaW5kZXguY3NzP2M0MGQiLCJ3ZWJwYWNrOi8vY2luZXdpei8uL3NyYy9BcHAudHN4Iiwid2VicGFjazovL2NpbmV3aXovLi9zcmMvY29tcG9uZW50cy9GYWRpbmdUeXBvZ3JhcGh5Q29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9jaW5ld2l6Ly4vc3JjL2NvbXBvbmVudHMvTmF2YmFyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9jaW5ld2l6Ly4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9jaW5ld2l6Ly4vc3JjL2NvbXBvbmVudHMvU2lkZUJhckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vY2luZXdpei8uL3NyYy9jb21wb25lbnRzL1RhYmxlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly9jaW5ld2l6Ly4vc3JjL2NvbXBvbmVudHMvVGFibGVSb3dDb21wb25lbnQudHN4Iiwid2VicGFjazovL2NpbmV3aXovLi9zcmMvY29udGV4dC9hcHBDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9jaW5ld2l6Ly4vc3JjL2hvb2tzL3VzZURlYm91bmNlLnRzIiwid2VicGFjazovL2NpbmV3aXovLi9zcmMvaG9va3MvdXNlRmV0Y2hEYXRhLnRzIiwid2VicGFjazovL2NpbmV3aXovLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovL2NpbmV3aXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2luZXdpei93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NpbmV3aXovd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2luZXdpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2luZXdpei93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NpbmV3aXovd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaW5ld2l6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2luZXdpei93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NpbmV3aXovd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2luZXdpei93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NpbmV3aXovd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NpbmV3aXovd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9BcHAuY3NzJztcclxuaW1wb3J0IHsgVXNlcmxpc3RQcm92aWRlciwgaW5pdGlhbFVzZXJMaXN0U3RhdGUgfSBmcm9tICcuL2NvbnRleHQvYXBwQ29udGV4dCc7XHJcbmltcG9ydCBOYXZiYXJDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhckNvbXBvbmVudCc7XHJcbmltcG9ydCBUYWJsZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvVGFibGVDb21wb25lbnQnO1xyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXNlcmxpc3RQcm92aWRlciwgeyBmYXZvcml0ZXM6IGluaXRpYWxVc2VyTGlzdFN0YXRlLmZhdm9yaXRlcywgd2F0Y2hsaXN0OiBpbml0aWFsVXNlckxpc3RTdGF0ZS53YXRjaGxpc3QgfSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFwcC13cmFwcGVyXCIgfSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDEgfSB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZiYXJDb21wb25lbnQsIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNvbXBvbmVudCwgbnVsbCkpLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJnLWFuaW1hdGlvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgaWQ6IFwic3RhcnNcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJzdGFyczJcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJzdGFyczNcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJzdGFyczRcIiB9KSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBpZDogXCJzdGFyczVcIiB9KSkpKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxudmFyIEZhZGluZ1R5cG9ncmFwaHlDb21wb25lbnQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciB0ZXh0VmFsdWUgPSBwcm9wcy50ZXh0VmFsdWUsIGhpZGUgPSBwcm9wcy5oaWRlO1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUodHJ1ZSksIGZpcnN0UmVuZGVyID0gX2FbMF0sIHNldEZpcnN0UmVuZGVyID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSh0cnVlKSwgaGlkZGVuID0gX2JbMF0sIHNldEhpZGRlbiA9IF9iWzFdO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZmlyc3RSZW5kZXIgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNldEhpZGRlbihoaWRlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRGaXJzdFJlbmRlcihmYWxzZSk7XHJcbiAgICB9LCBbaGlkZV0pO1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGhpZGRlbjogaGlkZGVuLCBjbGFzc05hbWU6IFwiZWxlbWVudC1mYWRlLWluLW91dFwiLCBzdHlsZToge1xyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTQwcHgnLFxyXG4gICAgICAgICAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgZm9udFNpemU6ICcwLjlyZW0nLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnaW5pdGlhbCcsXHJcbiAgICAgICAgfSB9LCB0ZXh0VmFsdWUpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRmFkaW5nVHlwb2dyYXBoeUNvbXBvbmVudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgTmF2YmFyQnJhbmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhckJyYW5kJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IFNpZGVCYXJDb21wb25lbnQgZnJvbSAnLi9TaWRlQmFyQ29tcG9uZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFGaWxtIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFDaGV2cm9uTGVmdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQ2hldnJvblJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxudmFyIE5hdmJhckNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgc2lkZWJhck9wZW4gPSBfYVswXSwgc2V0U2lkZXJiYXJPcGVuID0gX2FbMV07XHJcbiAgICB2YXIgdG9nZ2xlU2lkZWJhck9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0U2lkZXJiYXJPcGVuKCFzaWRlYmFyT3Blbik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTmF2YmFyLCB7IGZpeGVkOiBcInRvcFwiLCBiZzogXCJkYXJrXCIsIHZhcmlhbnQ6IFwiZGFya1wiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGFpbmVyLCB7IHN0eWxlOiB7IHRyYW5zaXRpb246ICdtYXJnaW4tcmlnaHQgLjVzJywgcGFkZGluZ1JpZ2h0OiAnMjBweCcgfSB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChOYXZiYXJCcmFuZCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvbnRBd2Vzb21lSWNvbiwgeyBpY29uOiBmYUZpbG0gfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgQ2luZVdpelwiKSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwib3V0bGluZS1saWdodFwiLCBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9uQ2xpY2s6IHRvZ2dsZVNpZGViYXJPcGVuIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhck9wZW4gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgaWNvbjogZmFDaGV2cm9uUmlnaHQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IGljb246IGZhQ2hldnJvblJpZ2h0IH0pKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgaWNvbjogZmFDaGV2cm9uTGVmdCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgaWNvbjogZmFDaGV2cm9uTGVmdCB9KSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDBBME15IHN0dWZmXFx1MDBBMFwiKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZUJhckNvbXBvbmVudCwgeyBiYXJQbGFjZW1lbnQ6IFwiZW5kXCIsIHNob3c6IHNpZGViYXJPcGVuIH0pKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgRm9ybVRleHQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm1UZXh0JztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcclxudmFyIFNlYXJjaEJhciA9IGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgdmFyIHNlYXJjaElucHV0ID0gcHJvcHMuc2VhcmNoSW5wdXQsIGhhbmRsZUNoYW5nZSA9IHByb3BzLmhhbmRsZUNoYW5nZSwgc2hvdyA9IHByb3BzLnNob3csIHNldFNob3cgPSBwcm9wcy5zZXRTaG93O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlT25Gb2N1cygpIHtcclxuICAgICAgICBzZXRTaG93KGZhbHNlKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNlYXJjaElucHV0ICE9PSAnJykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfSwgW3NlYXJjaElucHV0XSk7XHJcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXIsIG51bGwsXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCB7IGNsYXNzTmFtZTogXCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCB7IG9uRm9jdXM6IGhhbmRsZU9uRm9jdXMsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIHlvdXIgZmF2b3JpdGUgbW92aWVzIVwiLCB2YWx1ZTogc2VhcmNoSW5wdXQsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIHN0eWxlOiB7IG1hcmdpblRvcDogJzRyZW0nIH0gfSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1UZXh0LCB7IGNsYXNzTmFtZTogXCJteC1hdXRvIG10LTMgdGV4dC1saWdodFwiLCBoaWRkZW46ICFzaG93IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEaXNwbGF5aW5nIHJlc3VsdHMgZm9yIHNlYXJjaCA6IFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaElucHV0KSkpKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE9mZmNhbnZhcyBmcm9tICdyZWFjdC1ib290c3RyYXAvT2ZmY2FudmFzJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJsZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbi8vIGljb24gaW1wb3J0c1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUvJztcclxuaW1wb3J0IHsgZmFTdGFyIGFzIHN0YXJGaWxsZWQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUhlYXJ0IGFzIGhlYXJ0RmlsbGVkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFIZWFydCBhcyBoZWFydE91dGxpbmVkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUV5ZSBhcyBleWVGaWxsZWQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYUV5ZSBhcyBleWVPdXRsaW5lZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFDaXJjbGVYbWFyayBhcyBtaW51cyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IHVzZU1hbmFnZVVzZXJMaXN0cyB9IGZyb20gJy4uL2NvbnRleHQvYXBwQ29udGV4dCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXJDb21wb25lbnQocHJvcHMpIHtcclxuICAgIHZhciBzaG93ID0gcHJvcHMuc2hvdywgYmFyUGxhY2VtZW50ID0gcHJvcHMuYmFyUGxhY2VtZW50O1xyXG4gICAgdmFyIF9hID0gdXNlTWFuYWdlVXNlckxpc3RzKCksIHN0YXRlID0gX2Euc3RhdGUsIHJlbW92ZUZyb21GYXZvcml0ZXMgPSBfYS5yZW1vdmVGcm9tRmF2b3JpdGVzLCByZW1vdmVGcm9tV2F0Y2hsaXN0ID0gX2EucmVtb3ZlRnJvbVdhdGNobGlzdDtcclxuICAgIHZhciBmYXZvcml0ZXMgPSBzdGF0ZS5mYXZvcml0ZXM7XHJcbiAgICB2YXIgd2F0Y2hsaXN0ID0gc3RhdGUud2F0Y2hsaXN0O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlRmF2b3JpdGUobW92aWUpIHtcclxuICAgICAgICByZW1vdmVGcm9tRmF2b3JpdGVzKG1vdmllKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZVdhdGNobGlzdChtb3ZpZSkge1xyXG4gICAgICAgIHJlbW92ZUZyb21XYXRjaGxpc3QobW92aWUpO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ETzogTWFrZSBjdXN0b20gY29tcG9uZW50IHRoYXQgcHVzaGVzIHRhYmxlIGluc3RlYWRcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE9mZmNhbnZhcywgeyBjbGFzc05hbWU6ICdzaWRlYmFyJywgc2Nyb2xsOiB0cnVlLCBiYWNrZHJvcDogZmFsc2UsIHBsYWNlbWVudDogYmFyUGxhY2VtZW50LCBzaG93OiBzaG93LCBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIxMjUyOScsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICczcmVtJyxcclxuICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlLCB7IHN0cmlwZWQ6IHRydWUsIGhvdmVyOiB0cnVlLCB2YXJpYW50OiBcImRhcmtcIiB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoZWFkXCIsIHsgc3R5bGU6IHsgYm9yZGVyQ29sb3I6ICcjMjEyNTI5JyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGNsYXNzTmFtZTogXCJkLWZsZXggZ2FwLTNcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgc2l6ZTogXCJ4bFwiLCBpY29uOiBoZWFydE91dGxpbmVkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIG51bGwsIFwiRmF2b3JpdGVzXCIpKSkpLFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIGZhdm9yaXRlcy5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBrZXk6IG1vdmllLmlkICsgJ19mYXZvcml0ZXMnLCBzdHlsZTogeyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJywgbGluZUJyZWFrOiAnc3RyaWN0JyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllLnZvdGVfYXZlcmFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTAwQTBcXHUwMEEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgY29sb3I6IFwiZ29sZFwiLCBpY29uOiBzdGFyRmlsbGVkIH0pKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCBtb3ZpZS50aXRsZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJvdXRsaW5lLWxpZ2h0XCIsIHNpemU6IFwic21cIiwgY2xhc3NOYW1lOiBcInctMTAwXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZVJlbW92ZUZhdm9yaXRlKG1vdmllKTsgfSwgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgc2l6ZTogXCJ4bFwiLCBpY29uOiBoZWFydEZpbGxlZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvbnRBd2Vzb21lSWNvbiwgeyBpY29uOiBtaW51cywgY2xhc3NOYW1lOiBcInRleHQtZGFyayBiZy1saWdodFwiLCBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnLTlweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpKSkpO1xyXG4gICAgICAgICAgICAgICAgfSkpKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBzdHJpcGVkOiB0cnVlLCBob3ZlcjogdHJ1ZSwgdmFyaWFudDogXCJkYXJrXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBjbGFzc05hbWU6IFwiZC1mbGV4IGdhcC0zXCIsIHN0eWxlOiB7IGJvcmRlcjogJ25vbmUnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IHNpemU6IFwieGxcIiwgaWNvbjogZXllT3V0bGluZWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic21hbGxcIiwgbnVsbCwgXCJXYXRjaGxpc3RcIikpKSksXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgd2F0Y2hsaXN0Lm1hcChmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogbW92aWUuaWQgKyAnX3dhdGNobGlzdCcsIHN0eWxlOiB7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCBsaW5lQnJlYWs6ICdzdHJpY3QnIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZS52b3RlX2F2ZXJhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTAwQTBcXHUwMEEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvbnRBd2Vzb21lSWNvbiwgeyBjb2xvcjogXCJnb2xkXCIsIGljb246IHN0YXJGaWxsZWQgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbGluZUJyZWFrOiAnc3RyaWN0JyB9IH0sIG1vdmllLnRpdGxlKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJvdXRsaW5lLWxpZ2h0XCIsIHNpemU6IFwic21cIiwgY2xhc3NOYW1lOiBcInctMTAwXCIsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZVJlbW92ZVdhdGNobGlzdChtb3ZpZSk7IH0sIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IHNpemU6IFwieGxcIiwgaWNvbjogZXllRmlsbGVkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IGljb246IG1pbnVzLCBjbGFzc05hbWU6IFwidGV4dC1kYXJrIGJnLWxpZ2h0XCIsIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICctOXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSkpKSk7XHJcbiAgICAgICAgICAgICAgICB9KSkpKSkpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uL2hvb2tzL3VzZURlYm91bmNlJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJsZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi9TZWFyY2hCYXJDb21wb25lbnQnO1xyXG5pbXBvcnQgdXNlRmV0Y2hEYXRhIGZyb20gJy4uL2hvb2tzL3VzZUZldGNoRGF0YSc7XHJcbmltcG9ydCBUYWJsZVJvd0NvbXBvbmVudCBmcm9tICcuL1RhYmxlUm93Q29tcG9uZW50JztcclxudmFyIFRhYmxlQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShmYWxzZSksIGhpZGVTZWFyY2hEaXNwbGF5ID0gX2FbMF0sIHNldEhpZGVTZWFyY2hEaXNwbGF5ID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSgnJyksIHNlYXJjaFF1ZXJ5ID0gX2JbMF0sIHNldFNlYXJjaFF1ZXJ5ID0gX2JbMV07XHJcbiAgICB2YXIgZGVib3VuY2VkVmFsdWUgPSB1c2VEZWJvdW5jZShzZWFyY2hRdWVyeSwgNTAwKTtcclxuICAgIHZhciBzZWFyY2hSZXN1bHQgPSB1c2VGZXRjaERhdGEoe1xyXG4gICAgICAgIHNlYXJjaFN0cmluZzogZGVib3VuY2VkVmFsdWUsXHJcbiAgICAgICAgcGFnZTogJzEnLFxyXG4gICAgfSkuc2VhcmNoUmVzdWx0O1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5KChfYSA9IGV2ZW50ID09PSBudWxsIHx8IGV2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldmVudC50YXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VhcmNoQmFyLCB7IHNlYXJjaElucHV0OiBzZWFyY2hRdWVyeSwgc2hvdzogaGlkZVNlYXJjaERpc3BsYXksIHNldFNob3c6IHNldEhpZGVTZWFyY2hEaXNwbGF5LCBoYW5kbGVDaGFuZ2U6IGhhbmRsZUNoYW5nZSB9KSxcclxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBzdHJpcGVkOiB0cnVlLCBob3ZlcjogdHJ1ZSwgdmFyaWFudDogXCJkYXJrXCIsIHN0eWxlOiB7IG1hcmdpblRvcDogJzJyZW0nIH0gfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LWFsaWduLWNlbnRlciB0YWJsZWJvZHlcIiB9LCBzZWFyY2hSZXN1bHQubWFwKGZ1bmN0aW9uIChtb3ZpZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlUm93Q29tcG9uZW50LCB7IGtleTogbW92aWUuaWQgKyAncm93JywgbW92aWU6IG1vdmllIH0pO1xyXG4gICAgICAgICAgICAgICAgfSkpKSkpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpY29uIGltcG9ydHNcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lLyc7XHJcbmltcG9ydCB7IGZhU3RhciBhcyBzdGFyRmlsbGVkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFIZWFydCBhcyBoZWFydEZpbGxlZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhSGVhcnQgYXMgaGVhcnRPdXRsaW5lZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFFeWUgYXMgZXllRmlsbGVkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFFeWUgYXMgZXllT3V0bGluZWQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7IGZhQ2lyY2xlWG1hcmsgYXMgbWludXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgeyB1c2VNYW5hZ2VVc2VyTGlzdHMgfSBmcm9tICcuLi9jb250ZXh0L2FwcENvbnRleHQnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgRmFkaW5nVHlwb2dyYXBoeUNvbXBvbmVudCBmcm9tICcuL0ZhZGluZ1R5cG9ncmFwaHlDb21wb25lbnQnO1xyXG52YXIgVGFibGVSb3dDb21wb25lbnQgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBtb3ZpZSA9IHByb3BzLm1vdmllO1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUodHJ1ZSksIGZpcnN0UmVuZGVyID0gX2FbMF0sIHNldEZpcnN0UmVuZGVyID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSh0cnVlKSwgaGlkZUZhdm9yaXRlID0gX2JbMF0sIHNldEhpZGVGYXZvcml0ZSA9IF9iWzFdO1xyXG4gICAgdmFyIF9jID0gdXNlU3RhdGUodHJ1ZSksIGhpZGVXYXRjaGxpc3QgPSBfY1swXSwgc2V0SGlkZVdhdGNobGlzdCA9IF9jWzFdO1xyXG4gICAgdmFyIF9kID0gdXNlTWFuYWdlVXNlckxpc3RzKCksIHN0YXRlID0gX2Quc3RhdGUsIGFkZFRvRmF2b3JpdGVzID0gX2QuYWRkVG9GYXZvcml0ZXMsIGFkZFRvV2F0Y2hsaXN0ID0gX2QuYWRkVG9XYXRjaGxpc3QsIHJlbW92ZUZyb21GYXZvcml0ZXMgPSBfZC5yZW1vdmVGcm9tRmF2b3JpdGVzLCByZW1vdmVGcm9tV2F0Y2hsaXN0ID0gX2QucmVtb3ZlRnJvbVdhdGNobGlzdDtcclxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Rmlyc3RSZW5kZXIoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkRmF2b3JpdGUoKSB7XHJcbiAgICAgICAgc2V0SGlkZUZhdm9yaXRlKCFoaWRlRmF2b3JpdGUpO1xyXG4gICAgICAgIGFkZFRvRmF2b3JpdGVzKG1vdmllKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZUZhdm9yaXRlKCkge1xyXG4gICAgICAgIHNldEhpZGVGYXZvcml0ZSghaGlkZUZhdm9yaXRlKTtcclxuICAgICAgICByZW1vdmVGcm9tRmF2b3JpdGVzKG1vdmllKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZFdhdGNobGlzdCgpIHtcclxuICAgICAgICBzZXRIaWRlV2F0Y2hsaXN0KCFoaWRlV2F0Y2hsaXN0KTtcclxuICAgICAgICBhZGRUb1dhdGNobGlzdChtb3ZpZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVXYXRjaGxpc3QoKSB7XHJcbiAgICAgICAgc2V0SGlkZVdhdGNobGlzdCghaGlkZVdhdGNobGlzdCk7XHJcbiAgICAgICAgcmVtb3ZlRnJvbVdhdGNobGlzdChtb3ZpZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidXR0b25TdGF0ZUNoZWNrKGxpc3RUeXBlLCBjaGVja01vdmllKSB7XHJcbiAgICAgICAgaWYgKGxpc3RUeXBlID09PSAnd2F0Y2hsaXN0JyAmJlxyXG4gICAgICAgICAgICBzdGF0ZS53YXRjaGxpc3QuZmluZChmdW5jdGlvbiAobW92aWUpIHsgcmV0dXJuIG1vdmllLmlkID09PSBjaGVja01vdmllLmlkOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpc3RUeXBlID09PSAnZmF2b3JpdGVzJyAmJlxyXG4gICAgICAgICAgICBzdGF0ZS5mYXZvcml0ZXMuZmluZChmdW5jdGlvbiAobW92aWUpIHsgcmV0dXJuIG1vdmllLmlkID09PSBjaGVja01vdmllLmlkOyB9KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCBudWxsLFxyXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBjbGFzc05hbWU6IFwiZC1ub25lIGQtbGctdGFibGUtY2VsbCBib3JkZXItMFwiLCBzdHlsZTogeyBtYXhIZWlnaHQ6ICczcmVtJywgbWF4V2lkdGg6ICczcmVtJyB9IH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiAnaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzIwMCcgKyBtb3ZpZS5wb3N0ZXJfcGF0aCwgYWx0OiAncG9zdGVyLXRhYmxlLWNlbGwnLCBzdHlsZTogeyBtYXhIZWlnaHQ6ICcxMDAlJywgbWF4V2lkdGg6ICcxMDAlJyB9IH0pKSxcclxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgY2xhc3NOYW1lOiBcImJvcmRlci0wXCIsIHN0eWxlOiB7IHBhZGRpbmdMZWZ0OiAnMXJlbScgfSB9LFxyXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJtdC00IG1iLTRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIG1vdmllLnRpdGxlKSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic21hbGxcIiwgeyBzdHlsZTogeyBjb2xvcjogJ0dyYXlUZXh0JyB9IH0sICcgKCcgKyBtb3ZpZS5yZWxlYXNlX2RhdGUgKyAnKScpKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXItMFwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm10LTQgbWItNFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNtYWxsXCIsIHsgc3R5bGU6IHsgY29sb3I6ICdHcmF5VGV4dCcgfSB9LCBcIlRNREIgcmF0aW5nXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDBBMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZpZS52b3RlX2F2ZXJhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwMEEwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgY29sb3I6IFwiZ29sZFwiLCBpY29uOiBzdGFyRmlsbGVkIH0pKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXItMFwiIH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBjbGFzc05hbWU6IFwibXQtNCBtYi00XCIgfSwgYnV0dG9uU3RhdGVDaGVjaygnZmF2b3JpdGVzJywgbW92aWUpID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwib3V0bGluZS1saWdodFwiLCBzaXplOiBcInNtXCIsIGNsYXNzTmFtZTogXCIgbXQtNCBtYi00IGJvcmRlci0wXCIsIG9uQ2xpY2s6IGhhbmRsZVJlbW92ZUZhdm9yaXRlLCBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzM3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcyOS4yNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IHNpemU6IFwieGxcIiwgaWNvbjogaGVhcnRGaWxsZWQgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IGljb246IG1pbnVzLCBjbGFzc05hbWU6IFwidGV4dC1kYXJrIGJnLWxpZ2h0XCIsIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJy05cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGYWRpbmdUeXBvZ3JhcGh5Q29tcG9uZW50LCB7IHRleHRWYWx1ZTogXCJhZGRlZCB0byBmYXZvcml0ZXNcIiwgaGlkZTogaGlkZUZhdm9yaXRlIH0pKSkgOiAoXHJcbiAgICAgICAgICAgICAgICAvLyB3IDM3IGggMjkuMjUgUFhcclxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwib3V0bGluZS1saWdodFwiLCBzaXplOiBcInNtXCIsIGNsYXNzTmFtZTogXCJtdC00IG1iLTQgYm9yZGVyLTBcIiwgb25DbGljazogaGFuZGxlQWRkRmF2b3JpdGUsIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzI5LjI1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgICAgICAgICAgICAgICB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb250QXdlc29tZUljb24sIHsgc2l6ZTogXCJ4bFwiLCBpY29uOiBoZWFydE91dGxpbmVkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFkaW5nVHlwb2dyYXBoeUNvbXBvbmVudCwgeyB0ZXh0VmFsdWU6IFwiYWRkZWQgdG8gZmF2b3JpdGVzXCIsIGhpZGU6IGhpZGVGYXZvcml0ZSB9KSkpKSksXHJcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IGNsYXNzTmFtZTogXCJib3JkZXItMFwiLCBzdHlsZTogeyBwYWRkaW5nUmlnaHQ6ICcxcmVtJyB9IH0sXHJcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRhaW5lciwgeyBjbGFzc05hbWU6IFwibXQtNCBtYi00XCIgfSwgYnV0dG9uU3RhdGVDaGVjaygnd2F0Y2hsaXN0JywgbW92aWUpID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwib3V0bGluZS1saWdodFwiLCBzaXplOiBcInNtXCIsIGNsYXNzTmFtZTogXCJtdC00IG1iLTQgYm9yZGVyLTBcIiwgb25DbGljazogaGFuZGxlUmVtb3ZlV2F0Y2hsaXN0LCBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzM3cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcyOS4yNXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9udEF3ZXNvbWVJY29uLCB7IHNpemU6IFwieGxcIiwgaWNvbjogZXllRmlsbGVkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvbnRBd2Vzb21lSWNvbiwgeyBpY29uOiBtaW51cywgY2xhc3NOYW1lOiBcInRleHQtZGFyayBiZy1saWdodFwiLCBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICctOXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFkaW5nVHlwb2dyYXBoeUNvbXBvbmVudCwgeyB0ZXh0VmFsdWU6IFwiYWRkZWQgdG8gd2F0Y2hsaXN0XCIsIGhpZGU6IGhpZGVXYXRjaGxpc3QgfSkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcIm91dGxpbmUtbGlnaHRcIiwgc2l6ZTogXCJzbVwiLCBjbGFzc05hbWU6IFwibXQtNCBtYi00IGJvcmRlci0wXCIsIG9uQ2xpY2s6IGhhbmRsZUFkZFdhdGNobGlzdCwgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICczN3B4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnMjkuMjVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvbnRBd2Vzb21lSWNvbiwgeyBzaXplOiBcInhsXCIsIGljb246IGV5ZU91dGxpbmVkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmFkaW5nVHlwb2dyYXBoeUNvbXBvbmVudCwgeyB0ZXh0VmFsdWU6IFwiYWRkZWQgdG8gd2F0Y2hsaXN0XCIsIGhpZGU6IGhpZGVXYXRjaGxpc3QgfSkpKSkpKSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYWJsZVJvd0NvbXBvbmVudDtcclxuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufTtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0LCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IHZhciBpbml0aWFsVXNlckxpc3RTdGF0ZSA9IHtcclxuICAgIGZhdm9yaXRlczogW10sXHJcbiAgICB3YXRjaGxpc3Q6IFtdLFxyXG59O1xyXG4vLyBSZWR1Y2VyXHJcbnZhciBSRURVQ0VSX0FDVElPTl9UWVBFO1xyXG4oZnVuY3Rpb24gKFJFRFVDRVJfQUNUSU9OX1RZUEUpIHtcclxuICAgIFJFRFVDRVJfQUNUSU9OX1RZUEVbUkVEVUNFUl9BQ1RJT05fVFlQRVtcIkFERF9UT19XQVRDSExJU1RcIl0gPSAwXSA9IFwiQUREX1RPX1dBVENITElTVFwiO1xyXG4gICAgUkVEVUNFUl9BQ1RJT05fVFlQRVtSRURVQ0VSX0FDVElPTl9UWVBFW1wiQUREX1RPX0ZBVk9SSVRFU1wiXSA9IDFdID0gXCJBRERfVE9fRkFWT1JJVEVTXCI7XHJcbiAgICBSRURVQ0VSX0FDVElPTl9UWVBFW1JFRFVDRVJfQUNUSU9OX1RZUEVbXCJSRU1PVkVfRlJPTV9XQVRDSExJU1RcIl0gPSAyXSA9IFwiUkVNT1ZFX0ZST01fV0FUQ0hMSVNUXCI7XHJcbiAgICBSRURVQ0VSX0FDVElPTl9UWVBFW1JFRFVDRVJfQUNUSU9OX1RZUEVbXCJSRU1PVkVfRlJPTV9GQVZPUklURVNcIl0gPSAzXSA9IFwiUkVNT1ZFX0ZST01fRkFWT1JJVEVTXCI7XHJcbn0pKFJFRFVDRVJfQUNUSU9OX1RZUEUgfHwgKFJFRFVDRVJfQUNUSU9OX1RZUEUgPSB7fSkpO1xyXG52YXIgdXNlckxpc3RSZWR1Y2VyID0gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBGYXZvcml0ZXMgQWRkICYgUmVtb3ZlXHJcbiAgICAgICAgY2FzZSBSRURVQ0VSX0FDVElPTl9UWVBFLkFERF9UT19GQVZPUklURVM6IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmZhdm9yaXRlcy5maW5kKGZ1bmN0aW9uIChtb3ZpZSkgeyByZXR1cm4gbW92aWUuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCB7IGZhdm9yaXRlczogX19zcHJlYWRBcnJheShbYWN0aW9uLnBheWxvYWRdLCBzdGF0ZS5mYXZvcml0ZXMsIHRydWUpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFRFVDRVJfQUNUSU9OX1RZUEUuUkVNT1ZFX0ZST01fRkFWT1JJVEVTOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3RhdGUpLCB7IGZhdm9yaXRlczogc3RhdGUuZmF2b3JpdGVzLmZpbHRlcihmdW5jdGlvbiAobW92aWUpIHsgcmV0dXJuIG1vdmllLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZDsgfSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdhdGNobGlzdCBBZGQgJiBSZW1vdmVcclxuICAgICAgICBjYXNlIFJFRFVDRVJfQUNUSU9OX1RZUEUuQUREX1RPX1dBVENITElTVDoge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUud2F0Y2hsaXN0LmZpbmQoZnVuY3Rpb24gKG1vdmllKSB7IHJldHVybiBtb3ZpZS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQ7IH0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgd2F0Y2hsaXN0OiBfX3NwcmVhZEFycmF5KFthY3Rpb24ucGF5bG9hZF0sIHN0YXRlLndhdGNobGlzdCwgdHJ1ZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVEVUNFUl9BQ1RJT05fVFlQRS5SRU1PVkVfRlJPTV9XQVRDSExJU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzdGF0ZSksIHsgd2F0Y2hsaXN0OiBzdGF0ZS53YXRjaGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChtb3ZpZSkgeyByZXR1cm4gbW92aWUuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkOyB9KSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG4vLyBDb250ZXh0ICYgSG9va3NcclxudmFyIHVzZVVzZXJMaXN0Q29udGV4dCA9IGZ1bmN0aW9uIChpbml0aWFsVXNlckxpc3RTdGF0ZSkge1xyXG4gICAgdmFyIF9hID0gdXNlUmVkdWNlcih1c2VyTGlzdFJlZHVjZXIsIGluaXRpYWxVc2VyTGlzdFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgZGlzcGF0Y2ggPSBfYVsxXTtcclxuICAgIC8qLyBNYWtpbmcgdXNlIG9mIHVzZUNhbGxiYWNrIGhlcmUgdG8gcHJldmVudCBjb21wb25lbnRzIGZyb20gcmVyZW5kZXJpbmcgLyovXHJcbiAgICB2YXIgYWRkVG9GYXZvcml0ZXMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFJFRFVDRVJfQUNUSU9OX1RZUEUuQUREX1RPX0ZBVk9SSVRFUywgcGF5bG9hZDogbW92aWUgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB2YXIgcmVtb3ZlRnJvbUZhdm9yaXRlcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChtb3ZpZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVEVUNFUl9BQ1RJT05fVFlQRS5SRU1PVkVfRlJPTV9GQVZPUklURVMsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IG1vdmllLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdmFyIGFkZFRvV2F0Y2hsaXN0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBSRURVQ0VSX0FDVElPTl9UWVBFLkFERF9UT19XQVRDSExJU1QsIHBheWxvYWQ6IG1vdmllIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgdmFyIHJlbW92ZUZyb21XYXRjaGxpc3QgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobW92aWUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFRFVDRVJfQUNUSU9OX1RZUEUuUkVNT1ZFX0ZST01fV0FUQ0hMSVNULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBtb3ZpZSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxyXG4gICAgICAgIGFkZFRvRmF2b3JpdGVzOiBhZGRUb0Zhdm9yaXRlcyxcclxuICAgICAgICByZW1vdmVGcm9tRmF2b3JpdGVzOiByZW1vdmVGcm9tRmF2b3JpdGVzLFxyXG4gICAgICAgIGFkZFRvV2F0Y2hsaXN0OiBhZGRUb1dhdGNobGlzdCxcclxuICAgICAgICByZW1vdmVGcm9tV2F0Y2hsaXN0OiByZW1vdmVGcm9tV2F0Y2hsaXN0LFxyXG4gICAgfTtcclxufTtcclxudmFyIGluaXRpYWxVc2VyTGlzdENvbnRleHRTdGF0ZSA9IHtcclxuICAgIHN0YXRlOiBpbml0aWFsVXNlckxpc3RTdGF0ZSxcclxuICAgIGFkZFRvRmF2b3JpdGVzOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICByZW1vdmVGcm9tRmF2b3JpdGVzOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICBhZGRUb1dhdGNobGlzdDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgcmVtb3ZlRnJvbVdhdGNobGlzdDogZnVuY3Rpb24gKCkgeyB9LFxyXG59O1xyXG5leHBvcnQgdmFyIFVzZXJMaXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFVzZXJMaXN0Q29udGV4dFN0YXRlKTtcclxuZXhwb3J0IHZhciBVc2VybGlzdFByb3ZpZGVyID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgaW5pdGlhbFVzZXJMaXN0U3RhdGUgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcclxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChVc2VyTGlzdENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHVzZVVzZXJMaXN0Q29udGV4dChpbml0aWFsVXNlckxpc3RTdGF0ZSkgfSwgY2hpbGRyZW4pKTtcclxufTtcclxuZXhwb3J0IHZhciB1c2VNYW5hZ2VVc2VyTGlzdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VDb250ZXh0KFVzZXJMaXN0Q29udGV4dCksIHN0YXRlID0gX2Euc3RhdGUsIGFkZFRvRmF2b3JpdGVzID0gX2EuYWRkVG9GYXZvcml0ZXMsIHJlbW92ZUZyb21GYXZvcml0ZXMgPSBfYS5yZW1vdmVGcm9tRmF2b3JpdGVzLCBhZGRUb1dhdGNobGlzdCA9IF9hLmFkZFRvV2F0Y2hsaXN0LCByZW1vdmVGcm9tV2F0Y2hsaXN0ID0gX2EucmVtb3ZlRnJvbVdhdGNobGlzdDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxyXG4gICAgICAgIGFkZFRvRmF2b3JpdGVzOiBhZGRUb0Zhdm9yaXRlcyxcclxuICAgICAgICByZW1vdmVGcm9tRmF2b3JpdGVzOiByZW1vdmVGcm9tRmF2b3JpdGVzLFxyXG4gICAgICAgIGFkZFRvV2F0Y2hsaXN0OiBhZGRUb1dhdGNobGlzdCxcclxuICAgICAgICByZW1vdmVGcm9tV2F0Y2hsaXN0OiByZW1vdmVGcm9tV2F0Y2hsaXN0LFxyXG4gICAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSh2YWx1ZSksIGRlYm91bmNlZFZhbHVlID0gX2FbMF0sIHNldERlYm91bmNlZFZhbHVlID0gX2FbMV07XHJcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0RGVib3VuY2VkVmFsdWUodmFsdWUpOyB9LCBkZWxheSB8fCA1MDApO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFt2YWx1ZSwgZGVsYXldKTtcclxuICAgIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCB1c2VEZWJvdW5jZTtcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gVE9ETzogcHV0IGluIC5lbnZcclxudmFyIFRNREJfS0VZID0gJzQ3ZGEwMzE2MWFiNTQ3N2I2YWM2YzcwZjU0MzVmNGFlJztcclxudmFyIEJBU0VfVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PVwiLmNvbmNhdChUTURCX0tFWSk7XHJcbnZhciB1c2VGZXRjaERhdGEgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBfYSA9IHVzZVN0YXRlKFtdKSwgc2VhcmNoUmVzdWx0ID0gX2FbMF0sIHNldFNlYXJjaFJlc3VsdCA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlU3RhdGUodHJ1ZSksIGxvYWRpbmcgPSBfYlswXSwgc2V0TG9hZGluZyA9IF9iWzFdO1xyXG4gICAgdmFyIF9jID0gdXNlU3RhdGUoJycpLCBlcnJvciA9IF9jWzBdLCBzZXRFcnJvciA9IF9jWzFdO1xyXG4gICAgdmFyIHNlYXJjaFN0cmluZyA9IHByb3BzLnNlYXJjaFN0cmluZywgcGFnZSA9IHByb3BzLnBhZ2U7XHJcbiAgICB2YXIgZGF0YUNvbnZlcnRlciA9IGZ1bmN0aW9uIChpbnB1dERhdGEpIHtcclxuICAgICAgICBpZiAoaW5wdXREYXRhID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJ1bmVkRGF0YSA9IGlucHV0RGF0YS5tYXAoZnVuY3Rpb24gKG1vdmllKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbW92aWUudGl0bGUsXHJcbiAgICAgICAgICAgICAgICByZWxlYXNlX2RhdGU6IG1vdmllLnJlbGVhc2VfZGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3Rlcl9wYXRoOiBtb3ZpZS5wb3N0ZXJfcGF0aCxcclxuICAgICAgICAgICAgICAgIHZvdGVfYXZlcmFnZTogbW92aWUudm90ZV9hdmVyYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG1vdmllLmlkLFxyXG4gICAgICAgICAgICAgICAgb3ZlcnZpZXc6IG1vdmllLm92ZXJ2aWV3LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcnVuZWREYXRhO1xyXG4gICAgfTtcclxuICAgIHZhciBmZXRjaERhdGEgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlcnJvcl8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJcIi5jb25jYXQoQkFTRV9VUkwsIFwiJnF1ZXJ5PVwiKS5jb25jYXQoc2VhcmNoU3RyaW5nLCBcIiZwYWdlPVwiKS5jb25jYXQocGFnZSwgXCImaW5jbHVkZV9hZHVsdD1mYWxzZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdChkYXRhQ29udmVydGVyKChfYSA9IHJlcyA9PT0gbnVsbCB8fCByZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcy5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzdWx0cykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yXzEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdmFyIGZldGNoSW5pdGlhbERhdGEgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlcnJvcl8yO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQoXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT1cIi5jb25jYXQoVE1EQl9LRVksIFwiJmxhbmd1YWdlPWVuLVVTJnBhZ2U9MVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdChkYXRhQ29udmVydGVyKChfYSA9IHJlcyA9PT0gbnVsbCB8fCByZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlcy5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzdWx0cykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGZldGNoIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yXzIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoc2VhcmNoU3RyaW5nID09PSAnJykge1xyXG4gICAgICAgICAgICBmZXRjaEluaXRpYWxEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWFyY2hTdHJpbmcubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICB9LCBbc2VhcmNoU3RyaW5nXSk7XHJcbiAgICByZXR1cm4geyBzZWFyY2hSZXN1bHQ6IHNlYXJjaFJlc3VsdCwgbG9hZGluZzogbG9hZGluZywgZXJyb3I6IGVycm9yIH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHVzZUZldGNoRGF0YTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCBUaGVtZVByb3ZpZGVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UaGVtZVByb3ZpZGVyJztcclxuLy9ib290c3RyYXAgY3NzXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxudmFyIHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5yb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lUHJvdmlkZXIsIHsgYnJlYWtwb2ludHM6IFsneHhsJywgJ3hsJywgJ2xnJywgJ21kJywgJ3NtJ10sIG1pbkJyZWFrcG9pbnQ6IFwic21cIiB9LFxyXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIG51bGwpKSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IGZ1bmN0aW9uKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgY2h1bmtJZHMgPSBkZWZlcnJlZFtpXVswXTtcblx0XHR2YXIgZm4gPSBkZWZlcnJlZFtpXVsxXTtcblx0XHR2YXIgcHJpb3JpdHkgPSBkZWZlcnJlZFtpXVsyXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSk7IH0pKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gZnVuY3Rpb24oY2h1bmtJZCkgeyByZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwOyB9O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IGZ1bmN0aW9uKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSB7XG5cdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG5cdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cdHZhciBydW50aW1lID0gZGF0YVsyXTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKGZ1bmN0aW9uKGlkKSB7IHJldHVybiBpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwOyB9KSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjaW5ld2l6XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NpbmV3aXpcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2ZvcnRhd2Vzb21lX3JlYWN0LWZvbnRhd2Vzb21lX2luZGV4X2VzX2pzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9jcy1lYzU0NTJcIl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzeFwiKTsgfSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=