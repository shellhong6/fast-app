(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5)
__webpack_require__(9)
var $app_template$ = __webpack_require__(25)
var $app_style$ = __webpack_require__(26)
var $app_script$ = __webpack_require__(27)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(6)
var $app_style$ = __webpack_require__(7)
var $app_script$ = __webpack_require__(8)

$app_define$('@app-component/carousel', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "swiper",
      "attr": {},
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "http://a.hiphotos.baidu.com/image/h%3D300/sign=4a51c9cd7e8b4710d12ffbccf3ccc3b2/b64543a98226cffceee78e5eb5014a90f703ea09.jpg",
            "alt": ""
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/1.jpg",
            "alt": ""
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/2.jpg",
            "alt": ""
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/3.jpg",
            "alt": ""
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/4.jpg",
            "alt": ""
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/5.jpg",
            "alt": ""
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  "image": {
    "width": "100%",
    "height": "100%"
  },
  "swiper": {
    "width": "100%",
    "height": "30%"
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      text: '欢迎打开详情页'
    };
  },
  onMenuPress: function onMenuPress() {
    console.info('showMenu');
    this.$app.$def.showMenu();
  },
  onShow: function onShow() {
    console.info('\u89E6\u53D1\uFF1AonShow');
    console.info('\u6267\u884C\uFF1A\u83B7\u53D6\u9875\u9762\u663E\u793A\u72B6\u6001\u5C5E\u6027\uFF1A' + this.$visible);
  },
  onHide: function onHide() {
    console.info('\u89E6\u53D1\uFF1AonHide');
    console.info('\u6267\u884C\uFF1A\u83B7\u53D6\u9875\u9762\u663E\u793A\u72B6\u6001\u5C5E\u6027\uFF1A' + this.$visible);
  },
  onDestroy: function onDestroy() {
    console.info('\u89E6\u53D1\uFF1AonDestroy');
    console.info('\u6267\u884C\uFF1A\u9875\u9762\u8981\u88AB\u9500\u6BC1\uFF0C\u9500\u6BC1\u72B6\u6001\uFF1A' + this.$valid);
  }
};}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10)
__webpack_require__(14)
__webpack_require__(18)
var $app_template$ = __webpack_require__(22)
var $app_style$ = __webpack_require__(23)
var $app_script$ = __webpack_require__(24)

$app_define$('@app-component/header', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(11)
var $app_style$ = __webpack_require__(12)
var $app_script$ = __webpack_require__(13)

$app_define$('@app-component/search-field', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "search-field-container"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "id": "tempInput",
        "type": "button",
        "name": "",
        "value": "button"
      },
      "id": "tempInput",
      "style": {
        "opacity": 0,
        "position": "fixed",
        "top": "-100px",
        "left": "-100px",
        "width": "0px",
        "height": "0px"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "input-field-bg"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/search-header/search.png",
            "alt": ""
          },
          "classList": [
            "search-icon"
          ]
        },
        {
          "type": "input",
          "attr": {
            "id": "searchInput",
            "type": "text",
            "name": "",
            "value": function () {return this.searchInputVal},
            "placeholder": function () {return this.placeholder}
          },
          "id": "searchInput",
          "events": {
            "change": "handlechange",
            "focus": "handleFocus",
            "blur": "handleBlur"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/search-header/clear.png",
            "alt": ""
          },
          "classList": function () {return ['search-clear', this.searchClearCls]},
          "events": {
            "click": "handleClear"
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  ".search-field-container": {
    "width": "100%",
    "flexDirection": "row"
  },
  ".input-field-bg": {
    "backgroundColor": "#f2f2f2",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#f2f2f2",
    "borderRightColor": "#f2f2f2",
    "borderBottomColor": "#f2f2f2",
    "borderLeftColor": "#f2f2f2",
    "borderRadius": "100px",
    "height": "100%",
    "width": "100%",
    "alignItems": "center"
  },
  ".input-field-bg input": {
    "flexShrink": 1,
    "flexGrow": 1,
    "fontSize": "40px",
    "height": "55px",
    "lineHeight": "55px",
    "color": "#616161",
    "placeholderColor": "#888888",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "input-field-bg"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "input"
        }
      ]
    }
  },
  ".search-icon": {
    "width": "55px",
    "height": "55px",
    "marginLeft": "23px",
    "marginRight": "12px"
  },
  ".search-clear": {
    "width": "70px",
    "height": "70px",
    "marginLeft": "4px",
    "marginRight": "14px",
    "opacity": 0
  },
  ".search-clear-searching": {
    "opacity": 1
  }
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      placeholder: '假如明天下雨',
      searchInputVal: '',
      searchClearCls: ''
    };
  },
  onInit: function onInit() {
    this.$on('setSearchInputValue', this.setSearchInputValue.bind(this));
    this.$on('setSearchInputBlur', this.setSearchInputBlur.bind(this));
  },
  handleFocus: function handleFocus(e) {
    this.$dispatch('setHeaderToSearching');
  },
  handleBlur: function handleBlur() {
    this.$dispatch('setHeaderToNotSearching');
    this.searchClearCls = '';
  },
  handlechange: function handlechange(e) {
    this.searchInputVal = e.value;
    console.log('this.searchInputVal--', this.searchInputVal);
    if (!this.searchInputVal) {
      this.searchClearCls = '';
    } else {
      this.searchClearCls = 'search-clear-searching';
    }
  },
  handleClear: function handleClear() {
    this.$emit('setSearchInputValue', { value: '' });
  },
  setSearchInputValue: function setSearchInputValue(e) {
    this.$emitElement('change', { value: e.detail.value }, 'searchInput');
    e && e.stop();
  },
  setSearchInputBlur: function setSearchInputBlur(e) {
    this.$element('tempInput').focus({
      focus: true
    });
  }
};}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(15)
var $app_style$ = __webpack_require__(16)
var $app_script$ = __webpack_require__(17)

$app_define$('@app-component/search-tip-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": function () {return ['searchTip-view-container', this.toSearchTipCls]},
  "children": [
    {
      "type": "list",
      "attr": {},
      "children": [
        {
          "type": "block",
          "attr": {},
          "shown": function () {return this.hotWord&&this.hotWord.length},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "hot"
              },
              "classList": [
                "searchTip-view-block"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "热门搜索"
                  },
                  "classList": [
                    "searchTip-view-header"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "searchTip-view-hot-words"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.word}
                      },
                      "repeat": {
                        "exp": function () {return this.hotWord},
                        "value": "word"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "block",
          "attr": {},
          "shown": function () {return this.historyWord&&this.historyWord.length},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "history"
              },
              "classList": [
                "searchTip-view-block"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "搜索历史"
                  },
                  "classList": [
                    "searchTip-view-header"
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "searchTip-view-history-words"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "searchTip-view-history-line"
                      ],
                      "repeat": {
                        "exp": function () {return this.historyWord},
                        "value": "word"
                      },
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Common/search-header/history.webp",
                            "alt": ""
                          },
                          "classList": [
                            "history-icon"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.word}
                          }
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": "/Common/search-header/history-remove.webp",
                            "alt": ""
                          },
                          "classList": [
                            "history-remove-icon"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {
  ".searchTip-view-container": {
    "display": "none",
    "flexDirection": "column",
    "flexGrow": 1,
    "width": "100%",
    "height": "100%",
    "paddingTop": "142px",
    "position": "fixed"
  },
  ".associativing": {
    "display": "flex"
  },
  "list": {
    "backgroundColor": "#ffffff",
    "height": "100%"
  },
  ".searchTip-view-block": {
    "flexDirection": "column",
    "flexShrink": 0,
    "paddingLeft": "47px",
    "paddingRight": "47px"
  },
  ".searchTip-view-header": {
    "height": "46px",
    "fontSize": "44px",
    "color": "#989898",
    "marginLeft": "24px",
    "marginTop": "39px"
  },
  ".searchTip-view-hot-words": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "marginTop": "27px"
  },
  ".searchTip-view-hot-words text": {
    "paddingTop": "13px",
    "paddingRight": "30px",
    "paddingBottom": "13px",
    "paddingLeft": "30px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#ebebeb",
    "borderRightColor": "#ebebeb",
    "borderBottomColor": "#ebebeb",
    "borderLeftColor": "#ebebeb",
    "borderRadius": "3px",
    "fontSize": "40px",
    "color": "#646464",
    "flexShrink": 0,
    "marginBottom": "42px",
    "marginRight": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "searchTip-view-hot-words"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".searchTip-view-history-words": {
    "flexDirection": "column",
    "marginTop": "27px"
  },
  ".searchTip-view-history-line": {
    "alignItems": "center",
    "borderTopColor": "#e5e5e5",
    "borderRightColor": "#e5e5e5",
    "borderBottomColor": "#e5e5e5",
    "borderLeftColor": "#e5e5e5",
    "borderStyle": "solid",
    "borderTopWidth": "1px",
    "flexShrink": 0,
    "height": "146px",
    "paddingLeft": "24px",
    "paddingRight": "24px"
  },
  ".searchTip-view-history-line text": {
    "color": "#000000",
    "fontSize": "40px",
    "flexGrow": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "searchTip-view-history-line"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".history-icon": {
    "width": "47px",
    "height": "47px",
    "marginRight": "18px"
  },
  ".history-remove-icon": {
    "width": "41px",
    "height": "41px"
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.fetch');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hotWordUrl = 'https://ebook.meizu.com/api/v1/public/search/hotword';

exports.default = {
  data: function data() {
    return {
      toSearchTipCls: '',
      hotWord: [],
      historyWord: ['小说', '军事', '倾国倾城', '学校', '玄幻修仙', '名人名言']
    };
  },
  onInit: function onInit() {
    this.$on('toSearchTip', this.toSearchTip.bind(this));
    this.$on('toNotSearchTip', this.toNotSearchTip.bind(this));
  },
  getValFromRes: function getValFromRes(res, key) {
    if (res.code != 200) {
      return null;
    }
    var temp = JSON.parse(res.data);
    if (temp && temp.value) {
      return temp.value[key];
    }
    return null;
  },
  baseFetch: function baseFetch(opt) {
    var _this = this;

    _system4.default.fetch({
      url: hotWordUrl,
      data: {
        channel: 4
      },
      success: function success(res) {
        var words = _this.getValFromRes(res, opt.resKey);
        if (res) {
          opt.success && opt.success(words);
        } else {
          _system2.default.showToast({
            message: '数据请求异常'
          });
        }
      },
      fail: function fail() {
        _system2.default.showToast({
          message: '数据请求异常'
        });
      }
    });
  },
  toSearchTip: function toSearchTip() {
    var _this2 = this;

    if (!this.hotWord || !this.hotWord.length) {
      this.baseFetch({
        url: hotWordUrl,
        resKey: 'words',
        data: {
          channel: 4
        },
        success: function success(res) {
          _this2.hotWord = res;
        }
      });
    }
    this.toSearchTipCls = 'associativing';
    _system2.default.showToast({
      message: 'toSearchTip'
    });
  },
  toNotSearchTip: function toNotSearchTip() {
    this.toSearchTipCls = '';
    _system2.default.showToast({
      message: 'toNotSearchTip'
    });
  }
};}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(19)
var $app_style$ = __webpack_require__(20)
var $app_script$ = __webpack_require__(21)

$app_define$('@app-component/associative-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "associative-view-container"
  ],
  "children": [
    {
      "type": "list",
      "attr": {}
    }
  ]
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.fetch');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hotWordUrl = 'https://ebook.meizu.com/api/v1/public/search/hotword';

exports.default = {
  data: function data() {
    return {
      toAssociativeCls: ''
    };
  },
  onInit: function onInit() {}
};}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "associative-view",
      "attr": {
        "id": "associativeView"
      },
      "id": "associativeView"
    },
    {
      "type": "search-tip-view",
      "attr": {
        "id": "searchTipView"
      },
      "id": "searchTipView"
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header-container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['back-btn', this.backBtnCls]},
          "events": {
            "click": "handleBack"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/search-header/lt.png",
                "alt": ""
              },
              "classList": function () {return [this.backImgCls]}
            }
          ]
        },
        {
          "type": "search-field",
          "attr": {
            "id": "searchField"
          },
          "id": "searchField"
        },
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['btn-field', this.btnFieldCls]},
          "children": [
            {
              "type": "div",
              "attr": {
                "id": "shopping-car"
              },
              "id": "shopping-car",
              "classList": function () {return ['shopping-car', this.shoppingCarCls]},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/search-header/shopping-car.webp",
                    "alt": ""
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": function () {return ['user-info', this.userInfoCls]},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/search-header/user-info.webp",
                    "alt": ""
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": function () {return ['search-btn', this.searchBtnCls]},
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "搜索"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "100%",
    "height": "72px",
    "alignItems": "center"
  },
  ".header-container": {
    "position": "fixed",
    "paddingTop": "27px",
    "paddingBottom": "27px",
    "height": "142px",
    "flexShrink": 0,
    "width": "100%",
    "backgroundColor": "#ffffff"
  },
  ".back-btn": {
    "flexShrink": 0,
    "width": "70px",
    "alignItems": "center"
  },
  ".back-btn image": {
    "marginLeft": "50px",
    "width": "30px",
    "display": "none",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "back-btn"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".back-btn-searching": {
    "width": "122px"
  },
  ".back-btn-searching .back-img-searching": {
    "display": "flex",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "back-btn-searching"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "back-img-searching"
        }
      ]
    }
  },
  ".btn-field": {
    "animationName": "btnFieldToNormal",
    "animationDuration": "200ms",
    "width": "290px",
    "paddingLeft": "23px",
    "flexShrink": 0
  },
  ".btn-field-searching": {
    "animationName": "btnFieldToSearching",
    "animationDuration": "200ms",
    "width": "189px",
    "paddingLeft": "32px",
    "paddingRight": "32px"
  },
  ".shopping-car": {
    "display": "flex",
    "alignItems": "center",
    "width": "124px",
    "marginRight": "14px",
    "flexShrink": 0,
    "paddingLeft": "26px",
    "paddingRight": "26px"
  },
  ".shopping-car-searching": {
    "display": "none"
  },
  ".user-info": {
    "display": "flex",
    "alignItems": "center",
    "width": "88px",
    "flexShrink": 0,
    "marginRight": "65px",
    "paddingLeft": "8px",
    "paddingRight": "8px"
  },
  ".user-info-searching": {
    "display": "none"
  },
  ".search-btn": {
    "display": "none",
    "height": "100%",
    "width": "125px",
    "flexShrink": 0
  },
  ".search-btn text": {
    "width": "100%",
    "textAlign": "center",
    "fontSize": "46px",
    "color": "#07bcc2",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "search-btn"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".search-btn-searching": {
    "display": "flex"
  },
  "@KEYFRAMES": {
    "btnFieldToSearching": [
      {
        "width": "290px",
        "time": 0
      },
      {
        "width": "189px",
        "time": 100
      }
    ],
    "btnFieldToNormal": [
      {
        "width": "189px",
        "time": 0
      },
      {
        "width": "290px",
        "time": 100
      }
    ]
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  onInit: function onInit() {
    this.$on('setHeaderToSearching', this.setHeaderToSearching.bind(this));
    this.$on('setHeaderToNotSearching', this.setHeaderToNotSearching.bind(this));
    console.log('document.body.offsetHeight--', document.body.offsetHeight);
  },
  setHeaderToSearching: function setHeaderToSearching(e) {
    this.setHeaderStatus(true);
    this.$broadcast('toSearchTip');
    e && e.stop();
  },
  setHeaderToNotSearching: function setHeaderToNotSearching(e) {
    this.setHeaderStatus(false);
    this.$broadcast('toNotSearchTip');
    e && e.stop();
  },
  handleBack: function handleBack() {
    this.$broadcast('setSearchInputValue', { value: '' });
    this.$broadcast('setSearchInputBlur');
  },
  setHeaderStatus: function setHeaderStatus(isSearching) {
    if (!isSearching) {
      this.backBtnCls = '';
      this.backImgCls = '';
      this.btnFieldCls = '';
      this.shoppingCarCls = '';
      this.userInfoCls = '';
      this.searchBtnCls = '';
    } else {
      this.backBtnCls = 'back-btn-searching';
      this.backImgCls = 'back-img-searching';
      this.btnFieldCls = 'btn-field-searching';
      this.shoppingCarCls = 'shopping-car-searching';
      this.userInfoCls = 'user-info-searching';
      this.searchBtnCls = 'search-btn-searching';
    }
  },
  data: function data() {
    return {
      backBtnCls: '',
      backImgCls: '',
      btnFieldCls: '',
      shoppingCarCls: '',
      userInfoCls: '',
      searchBtnCls: ''
    };
  }
};}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "header",
      "attr": {}
    },
    {
      "type": "carousel",
      "attr": {}
    }
  ]
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".btn": {
    "width": "550px",
    "height": "86px",
    "marginTop": "75px",
    "borderRadius": "43px",
    "backgroundColor": "#09ba07",
    "fontSize": "30px",
    "color": "#ffffff"
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  private: {
    title: '示例页面'
  },
  routeDetail: function routeDetail() {
    router.push({
      uri: '/DemoDetail'
    });
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map