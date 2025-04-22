/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/leaflet-velocity.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/leaflet-velocity.css ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".IoWwiOJa3pQTAZUawPer {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px 10px;\n  border-radius: 0 5px 0 0;\n  margin: 0 !important;\n  color: #333;\n  font: 14px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/leaflet-velocity.css"],"names":[],"mappings":"AAAA;EACE,0CAA0C;EAC1C,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,WAAW;EACX,6DAA6D;EAC7D,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT","sourcesContent":[".leafletControlVelocity {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px 10px;\n  border-radius: 0 5px 0 0;\n  margin: 0 !important;\n  color: #333;\n  font: 14px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"leafletControlVelocity": "IoWwiOJa3pQTAZUawPer"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/leaflet-velocity.css":
/*!**********************************!*\
  !*** ./src/leaflet-velocity.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./leaflet-velocity.css */ "./node_modules/@teamsupercell/typings-for-css-modules-loader/src/index.js??ruleSet[1].rules[1].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/leaflet-velocity.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_teamsupercell_typings_for_css_modules_loader_src_index_js_ruleSet_1_rules_1_use_1_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_leaflet_velocity_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/L.CanvasLayer.ts":
/*!******************************!*\
  !*** ./src/L.CanvasLayer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
if (!L.DomUtil.setTransform) {
    L.DomUtil.setTransform = function (el, offset, scale) {
        var pos = offset || new L.Point(0, 0);
        el.style[L.DomUtil.TRANSFORM] =
            (L.Browser.ie3d
                ? "translate(" + pos.x + "px," + pos.y + "px)"
                : "translate3d(" + pos.x + "px," + pos.y + "px,0)") +
                (scale ? " scale(" + scale + ")" : "");
    };
}
var CanvasLayer = /** @class */ (function () {
    function CanvasLayer() {
    }
    CanvasLayer.prototype.initialize = function (options) {
        this._map = null;
        this._canvas = null;
        this._frame = null;
        this._del = null;
        L.Util.setOptions(this, options);
    };
    CanvasLayer.prototype.getCanvas = function () {
        return this._canvas;
    };
    CanvasLayer.prototype.delegate = function (del) {
        this._del = del;
        return this;
    };
    CanvasLayer.prototype.needRedraw = function () {
        if (!this._frame) {
            this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
        }
        return this;
    };
    CanvasLayer.prototype.getEvents = function () {
        var events = {
            resize: this.onLayerDidResize,
            moveend: this.onLayerDidMove,
            zoomanim: undefined
        };
        if (this._map.options.zoomAnimation && L.Browser.any3d) {
            events.zoomanim = this.animateZoom;
        }
        return events;
    };
    CanvasLayer.prototype.onAdd = function (map) {
        var _this = this;
        this._map = map;
        this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
        var size = this._map.getSize();
        this._canvas.width = size.x;
        this._canvas.height = size.y;
        var animated = this._map.options.zoomAnimation && L.Browser.any3d;
        L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));
        map.getPanes().overlayPane.appendChild(this._canvas);
        map.on(this.getEvents(), this);
        var del = this._del || this;
        del.onLayerDidMount && del.onLayerDidMount(); // -- callback
        this.needRedraw();
        setTimeout(function () {
            _this.onLayerDidMove();
        }, 0);
    };
    CanvasLayer.prototype.onRemove = function (map) {
        var del = this._del || this;
        del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback
        map.getPanes().overlayPane.removeChild(this._canvas);
        map.off(this.getEvents(), this);
        this._canvas = null;
    };
    CanvasLayer.prototype.addTo = function (map) {
        map.addLayer(this);
        return this;
    };
    CanvasLayer.prototype.drawLayer = function () {
        // -- todo make the viewInfo properties flat objects.
        var size = this._map.getSize();
        var bounds = this._map.getBounds();
        var zoom = this._map.getZoom();
        var center = this._map.options.crs.project(this._map.getCenter());
        var corner = this._map.options.crs.project(this._map.containerPointToLatLng(this._map.getSize()));
        var del = this._del || this;
        del.onDrawLayer && del.onDrawLayer({
            layer: this,
            canvas: this._canvas,
            bounds: bounds,
            size: size,
            zoom: zoom,
            center: center,
            corner: corner
        });
        this._frame = null;
    };
    // -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
    //------------------------------------------------------------------------------
    CanvasLayer.prototype._setTransform = function (el, offset, scale) {
        var pos = offset || new L.Point(0, 0);
        el.style[L.DomUtil.TRANSFORM] =
            (L.Browser.ie3d ?
                'translate(' + pos.x + 'px,' + pos.y + 'px)' :
                'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
                (scale ? ' scale(' + scale + ')' : '');
    };
    CanvasLayer.prototype.animateZoom = function (e) {
        var scale = this._map.getZoomScale(e.zoom);
        // -- different calc of offset in leaflet 1.0.0 and 0.0.7 thanks for 1.0.0-rc2 calc @jduggan1
        var offset = L.Layer ?
            this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center) :
            this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());
        L.DomUtil.setTransform(this._canvas, offset, scale);
    };
    CanvasLayer.prototype.onLayerDidResize = function (resizeEvent) {
        this._canvas.width = resizeEvent.newSize.x;
        this._canvas.height = resizeEvent.newSize.y;
    };
    CanvasLayer.prototype.onLayerDidMove = function () {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
        this.drawLayer();
    };
    return CanvasLayer;
}());
exports["default"] = CanvasLayer;


/***/ }),

/***/ "./src/L.Control.Velocity.ts":
/*!***********************************!*\
  !*** ./src/L.Control.Velocity.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var leaflet_velocity_css_1 = __webpack_require__(/*! ./leaflet-velocity.css */ "./src/leaflet-velocity.css");
var ControlVelocity = /** @class */ (function () {
    function ControlVelocity() {
        this._windy = null;
        this._map = null;
        this._container = null;
        this.options = {
            position: 'bottomleft',
            emptyString: 'Unavailable',
            velocityType: '',
            angleConvention: 'bearingCCW',
            speedUnit: 'm/s',
            directionString: "Direction",
            speedString: "Speed",
            showCardinal: false,
            heightString: "Height",
            heightUnit: 'ft',
            waveMode: false,
        };
    }
    ControlVelocity.prototype.setWindy = function (_windy) {
        if (!this._windy && _windy)
            this._windy = _windy;
    };
    ControlVelocity.prototype.setOptions = function (options) {
        L.Util.setOptions(this, options);
    };
    ControlVelocity.prototype.onAdd = function (map) {
        this._map = map;
        this._container = L.DomUtil.create('div', leaflet_velocity_css_1.default.leafletControlVelocity);
        L.DomEvent.disableClickPropagation(this._container);
        this._map.on('mousemove', this.drawWindSpeed, this);
        this._container.innerHTML = this.options.emptyString;
        return this._container;
    };
    ControlVelocity.prototype.onRemove = function (map) {
        this._map.off('mousemove', this.drawWindSpeed, this);
    };
    ControlVelocity.prototype.vectorToSpeed = function (uMs, vMs, unit) {
        var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));
        // Default is m/s
        if (unit === "k/h") {
            return this.meterSec2kilometerHour(velocityAbs);
        }
        else if (unit === "kt") {
            return this.meterSec2Knots(velocityAbs);
        }
        else if (unit === "mph") {
            return this.meterSec2milesHour(velocityAbs);
        }
        else {
            return velocityAbs;
        }
    };
    ControlVelocity.prototype.vectorToDegrees = function (uMs, vMs, angleConvention) {
        // Default angle convention is CW
        if (angleConvention.endsWith('CCW')) {
            // vMs comes out upside-down..
            vMs = vMs > 0 ? vMs = -vMs : Math.abs(vMs);
        }
        var velocityAbs = Math.sqrt(Math.pow(uMs, 2) + Math.pow(vMs, 2));
        var velocityDir = Math.atan2(uMs / velocityAbs, vMs / velocityAbs);
        var velocityDirToDegrees = velocityDir * 180 / Math.PI + 180;
        if (angleConvention === 'bearingCW' || angleConvention === 'meteoCCW') {
            velocityDirToDegrees += 180;
            if (velocityDirToDegrees >= 360)
                velocityDirToDegrees -= 360;
        }
        return velocityDirToDegrees;
    };
    ControlVelocity.prototype.meterSec2Knots = function (meters) {
        return meters / 0.514;
    };
    ControlVelocity.prototype.meterSec2kilometerHour = function (meters) {
        return meters * 3.6;
    };
    ControlVelocity.prototype.meterSec2milesHour = function (meters) {
        return meters * 2.23694;
    };
    ControlVelocity.prototype.degreesToCardinalDirection = function (deg) {
        var cardinalDirection = '';
        if (deg >= 0 && deg < 11.25 || deg >= 348.75) {
            cardinalDirection = 'N';
        }
        else if (deg >= 11.25 && deg < 33.75) {
            cardinalDirection = 'NNW';
        }
        else if (deg >= 33.75 && deg < 56.25) {
            cardinalDirection = 'NW';
        }
        else if (deg >= 56.25 && deg < 78.75) {
            cardinalDirection = 'WNW';
        }
        else if (deg >= 78.25 && deg < 101.25) {
            cardinalDirection = 'W';
        }
        else if (deg >= 101.25 && deg < 123.75) {
            cardinalDirection = 'WSW';
        }
        else if (deg >= 123.75 && deg < 146.25) {
            cardinalDirection = 'SW';
        }
        else if (deg >= 146.25 && deg < 168.75) {
            cardinalDirection = 'SSW';
        }
        else if (deg >= 168.75 && deg < 191.25) {
            cardinalDirection = 'S';
        }
        else if (deg >= 191.25 && deg < 213.75) {
            cardinalDirection = 'SSE';
        }
        else if (deg >= 213.75 && deg < 236.25) {
            cardinalDirection = 'SE';
        }
        else if (deg >= 236.25 && deg < 258.75) {
            cardinalDirection = 'ESE';
        }
        else if (deg >= 258.75 && deg < 281.25) {
            cardinalDirection = 'E';
        }
        else if (deg >= 281.25 && deg < 303.75) {
            cardinalDirection = 'ENE';
        }
        else if (deg >= 303.75 && deg < 326.25) {
            cardinalDirection = 'NE';
        }
        else if (deg >= 326.25 && deg < 348.75) {
            cardinalDirection = 'NNE';
        }
        return cardinalDirection;
    };
    ControlVelocity.prototype.drawWindSpeed = function (ev) {
        var pos = this._map.containerPointToLatLng(L.point(ev.containerPoint.x, ev.containerPoint.y));
        var gridValue = this._windy.interpolate(pos.lng, pos.lat);
        var template = "";
        if (gridValue && !isNaN(gridValue[0]) && !isNaN(gridValue[1])) {
            var deg = this.vectorToDegrees(gridValue[0], gridValue[1], this.options.angleConvention);
            var cardinal = this.options.showCardinal ? " (".concat(this.degreesToCardinalDirection(deg), ") ") : '';
            var variableOutput = "";
            var labelString = "";
            var unit = "";
            if (this.options.waveMode) {
                var height = gridValue[2] && gridValue[2] >= 0 ? gridValue[2] : null;
                variableOutput = height ? height.toFixed(2) : "No data";
                labelString = this.options.heightString;
                unit = height ? this.options.heightUnit : "";
            }
            else {
                variableOutput = this.vectorToSpeed(gridValue[0], gridValue[1], this.options.speedUnit).toFixed(2);
                labelString = this.options.speedString;
                unit = this.options.speedUnit;
            }
            template = "<strong>".concat(this.options.velocityType, " ").concat(this.options.directionString, ": </strong> ").concat(deg.toFixed(2), "\u00B0").concat(cardinal, ", \n                  <strong>").concat(labelString, ": </strong> ").concat(variableOutput, " ").concat(unit);
        }
        else {
            template = this.options.emptyString;
        }
        this._container.innerHTML = template;
    };
    return ControlVelocity;
}());
exports["default"] = ControlVelocity;


/***/ }),

/***/ "./src/L.VelocityLayer.ts":
/*!********************************!*\
  !*** ./src/L.VelocityLayer.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var windy_1 = __webpack_require__(/*! ./windy */ "./src/windy.ts");
var canvasBound_1 = __webpack_require__(/*! ./canvasBound */ "./src/canvasBound.ts");
var mapBound_1 = __webpack_require__(/*! ./mapBound */ "./src/mapBound.ts");
var layer_1 = __webpack_require__(/*! ./layer */ "./src/layer.ts");
var VelocityLayer = /** @class */ (function () {
    function VelocityLayer() {
        this._map = null;
        this._canvasLayer = null;
        this._windy = null;
        this._context = null;
        this._displayTimeout = null;
        this._mapEvents = null;
        this._mouseControl = null;
        this._paneName = null;
        this.options = {
            displayValues: true,
            displayOptions: {
                velocityType: 'Velocity',
                position: 'bottomleft',
                emptyString: 'No velocity data',
                angleConvention: 'bearingCCW',
                speedUnit: 'm/s',
                heightUnit: 'ft',
                heightString: 'Height',
            },
            waveMode: false,
            maxVelocity: 10,
            colorScale: null,
            onAdd: null,
            onRemove: null,
            data: null,
            paneName: "overlayPane",
        };
    }
    VelocityLayer.prototype.initialize = function (options) {
        L.Util.setOptions(this, options);
    };
    VelocityLayer.prototype.setOptions = function (options) {
        this.options = __assign(__assign({}, this.options), options);
        if (options.displayOptions) {
            this.options.displayOptions = __assign(__assign({}, this.options.displayOptions), options.displayOptions);
            this.initMouseHandler(true);
        }
        if (options.data) {
            this.options.data = options.data;
        }
        if (this._windy) {
            this._windy.setOptions(options);
            if (options.data) {
                this._windy.setData(options.data);
            }
            this.clearAndRestart();
        }
        this.fire("load");
    };
    VelocityLayer.prototype.onAdd = function (map) {
        // determine where to add the layer
        this._paneName = this.options.paneName || "overlayPane";
        // fall back to overlayPane for leaflet < 1
        var pane = map.getPanes().overlayPane;
        if (map.getPane) {
            // attempt to get pane first to preserve parent (createPane voids this)
            pane = map.getPane(this._paneName);
            if (!pane) {
                pane = map.createPane(this._paneName);
            }
        }
        // create canvas, add overlay control
        this._canvasLayer = L.canvasLayer().delegate(this);
        this._canvasLayer.addTo(map);
        this._map = map;
        if (this.options.onAdd)
            this.options.onAdd();
    };
    VelocityLayer.prototype.onRemove = function (map) {
        this.destroyWind();
        if (this.options.onRemove)
            this.options.onRemove();
    };
    VelocityLayer.prototype.setData = function (data) {
        this.options.data = data;
        if (this._windy) {
            this._windy.setData(data);
            this.clearAndRestart();
        }
        this.fire('load');
    };
    VelocityLayer.prototype.onDrawLayer = function () {
        var _this = this;
        if (!this._windy) {
            this.initWindy();
            return;
        }
        if (!this.options.data) {
            return;
        }
        if (this._displayTimeout)
            clearTimeout(this._displayTimeout);
        this._displayTimeout = setTimeout(function () {
            _this.startWindy();
        }, 150); // showing velocity is delayed
    };
    VelocityLayer.prototype.toggleEvents = function (bind) {
        var _this = this;
        if (bind === void 0) { bind = true; }
        if (this._mapEvents === null) {
            this._mapEvents = {
                'dragstart': function () {
                    _this._windy.stop();
                },
                'dragend': function () {
                    _this.clearAndRestart();
                },
                'zoomstart': function () {
                    _this._windy.stop();
                },
                'zoomend': function () {
                    _this.clearAndRestart();
                },
                'resize': function () {
                    _this.clearWind();
                }
            };
        }
        for (var e in this._mapEvents) {
            if (this._mapEvents.hasOwnProperty(e)) {
                this._map[bind ? 'on' : 'off'](e, this._mapEvents[e]);
            }
        }
    };
    VelocityLayer.prototype.initWindy = function () {
        var options = __assign(__assign({}, this.options), { canvas: this._canvasLayer.getCanvas() });
        this._windy = new windy_1.default(options);
        // prepare context global var, start drawing
        this._context = this._canvasLayer.getCanvas().getContext('2d');
        this._canvasLayer.getCanvas().classList.add("velocity-overlay");
        this.onDrawLayer();
        this.toggleEvents(true);
        this.initMouseHandler();
    };
    VelocityLayer.prototype.initMouseHandler = function (unbind) {
        if (unbind === void 0) { unbind = false; }
        if (unbind) {
            this._map.removeControl(this._mouseControl);
            this._mouseControl = false;
        }
        if (!this._mouseControl && this.options.displayValues) {
            var options = this.options.displayOptions || {};
            this._mouseControl = L.control.velocity(__assign(__assign({}, options), { waveMode: this.options.waveMode }));
            this._mouseControl.setWindy(this._windy);
            this._mouseControl.setOptions(this.options.displayOptions);
            this._mouseControl.addTo(this._map);
        }
    };
    VelocityLayer.prototype.startWindy = function () {
        var bounds = this._map.getBounds();
        var size = this._map.getSize();
        // bounds, width, height, extent
        this._windy.start(new layer_1.default(new mapBound_1.default(this._map, bounds.getNorthEast().lat, bounds.getNorthEast().lng, bounds.getSouthWest().lat, bounds.getSouthWest().lng), new canvasBound_1.default(0, 0, size.x, size.y)));
    };
    VelocityLayer.prototype.clearAndRestart = function () {
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
        if (this._windy)
            this.startWindy();
    };
    VelocityLayer.prototype.clearWind = function () {
        if (this._windy)
            this._windy.stop();
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
    };
    VelocityLayer.prototype.destroyWind = function () {
        if (this._displayTimeout)
            clearTimeout(this._displayTimeout);
        if (this._windy)
            this._windy.stop();
        if (this._context)
            this._context.clearRect(0, 0, 3000, 3000);
        if (this._mouseControl)
            this._map.removeControl(this._mouseControl);
        this._mouseControl = null;
        this._windy = null;
        this.toggleEvents(false);
        this._map.removeLayer(this._canvasLayer);
    };
    return VelocityLayer;
}());
exports["default"] = VelocityLayer;


/***/ }),

/***/ "./src/animationBucket.ts":
/*!********************************!*\
  !*** ./src/animationBucket.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AnimationBucket = /** @class */ (function () {
    function AnimationBucket(colorScale) {
        this.buckets = [];
        this.colorScale = colorScale;
        for (var i = 0; i < colorScale.size; i++) {
            this.buckets.push([]);
        }
    }
    AnimationBucket.prototype.clear = function () {
        this.buckets.forEach(function (particuleSet) {
            particuleSet.splice(0, particuleSet.length);
        });
    };
    AnimationBucket.prototype.add = function (p, v) {
        var variable = p.waveHeight || p.intensity;
        var index = this.colorScale.getColorIndex(variable);
        if (index < 0 || index >= this.buckets.length) {
            console.log(index);
            return;
        }
        p.xt = p.x + v.u;
        p.yt = p.y + v.v;
        this.buckets[index].push(p);
    };
    AnimationBucket.prototype.draw = function (context2D) {
        var _this = this;
        this.buckets.forEach(function (bucket, i) {
            if (bucket.length > 0) {
                context2D.beginPath();
                context2D.strokeStyle = _this.colorScale.colorAt(i);
                bucket.forEach(function (particle) {
                    context2D.moveTo(particle.x, particle.y);
                    context2D.lineTo(particle.xt, particle.yt);
                    particle.x = particle.xt;
                    particle.y = particle.yt;
                });
                context2D.stroke();
            }
        });
    };
    AnimationBucket.prototype.getBuckets = function () {
        return this.buckets;
    };
    return AnimationBucket;
}());
exports["default"] = AnimationBucket;


/***/ }),

/***/ "./src/canvasBound.ts":
/*!****************************!*\
  !*** ./src/canvasBound.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var particle_1 = __webpack_require__(/*! ./particle */ "./src/particle.ts");
var CanvasBound = /** @class */ (function () {
    function CanvasBound(xMin, yMin, xMax, yMax) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }
    Object.defineProperty(CanvasBound.prototype, "width", {
        get: function () {
            return this.xMax - this.xMin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasBound.prototype, "height", {
        get: function () {
            return this.yMax - this.yMin;
        },
        enumerable: false,
        configurable: true
    });
    CanvasBound.prototype.getRandomParticule = function (maxAge) {
        var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
        var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
        return new particle_1.default(x, y, maxAge);
    };
    CanvasBound.prototype.resetParticule = function (p) {
        var x = Math.round(Math.floor(Math.random() * this.width) + this.xMin);
        var y = Math.round(Math.floor(Math.random() * this.height) + this.yMin);
        p.reset(x, y);
        return p;
    };
    return CanvasBound;
}());
exports["default"] = CanvasBound;


/***/ }),

/***/ "./src/colorScale.ts":
/*!***************************!*\
  !*** ./src/colorScale.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ColorScale = /** @class */ (function () {
    function ColorScale(minValue, maxValue, scale) {
        this.scale = [
            "rgb(36,104, 180)",
            "rgb(60,157, 194)",
            "rgb(128,205,193 )",
            "rgb(151,218,168 )",
            "rgb(198,231,181)",
            "rgb(238,247,217)",
            "rgb(255,238,159)",
            "rgb(252,217,125)",
            "rgb(255,182,100)",
            "rgb(252,150,75)",
            "rgb(250,112,52)",
            "rgb(245,64,32)",
            "rgb(237,45,28)",
            "rgb(220,24,32)",
            "rgb(180,0,35)"
        ];
        this.setMinMax(minValue, maxValue);
        if ((scale instanceof Array) && scale.length) {
            this.scale = scale;
        }
    }
    ColorScale.prototype.setMinMax = function (minValue, maxValue) {
        this.minValue = minValue;
        this.maxValue = maxValue;
    };
    Object.defineProperty(ColorScale.prototype, "size", {
        get: function () {
            return this.scale.length;
        },
        enumerable: false,
        configurable: true
    });
    ColorScale.prototype.getColorIndex = function (value) {
        if (value <= this.minValue) {
            return 0;
        }
        if (value >= this.maxValue) {
            return this.scale.length - 1;
        }
        var index = this.scale.length * (value - this.minValue) / (this.maxValue - this.minValue);
        if (index < 0) {
            return 0;
        }
        if (index > this.scale.length - 1) {
            return this.scale.length - 1;
        }
        return Math.floor(index);
    };
    ColorScale.prototype.colorAt = function (index) {
        return this.scale[index];
    };
    ColorScale.prototype.getColor = function (value) {
        return this.scale[this.getColorIndex(value)];
    };
    return ColorScale;
}());
exports["default"] = ColorScale;


/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector_1 = __webpack_require__(/*! ./vector */ "./src/vector.ts");
var Grid = /** @class */ (function () {
    function Grid(data, φ0, λ0, Δφ, Δλ, height, width) {
        this.data = data;
        this.φ0 = φ0;
        this.λ0 = λ0;
        this.Δλ = Δλ;
        this.Δφ = Δφ;
        this.height = height;
        this.width = width;
    }
    Object.defineProperty(Grid.prototype, "valueRange", {
        get: function () {
            if (!this.data.length) {
                return [0, 0];
            }
            var min = this.data[0].intensity;
            var max = this.data[0].intensity;
            this.data.forEach(function (value) {
                min = Math.min(min, value.intensity);
                max = Math.max(max, value.intensity);
            });
            return [min, max];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get vector at any point
     * @param λ Longitude
     * @param φ Latitude
     */
    Grid.prototype.get = function (λ, φ) {
        var fλ = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
        var fφ = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
        var iλ = Math.floor(fλ); // col n
        var jλ = iλ + 1; // col n+1
        if (jλ >= this.width) {
            jλ = this.λ0;
        }
        var iφ = Math.floor(fφ); // line m
        var jφ = iφ + 1; // line m+1
        if (jφ >= this.height) {
            jφ = iφ;
        }
        var vλ = fλ - iλ; // col variation [0..1]
        var vφ = fφ - iφ; // line variation [0..1]
        if (iλ >= 0 && iφ >= 0 && iλ < this.width && iφ < this.height) {
            var g00 = this.data[iλ + iφ * this.width];
            var g10 = this.data[jλ + iφ * this.width];
            if (this.isValue(g00) && this.isValue(g10)) {
                var g01 = this.data[iλ + jφ * this.width];
                var g11 = this.data[jλ + jφ * this.width];
                if (this.isValue(g01) && this.isValue(g11)) {
                    return this.interpolation(vλ, vφ, g00, //l0c0
                    g10, //l0c1
                    g01, //l1c0
                    g11 //l1cl
                    );
                }
            }
        }
        return new vector_1.default(0, 0, 0);
    };
    /**
     * Interpolate value
     * @param x variation between g0* and g1*
     * @param y variation between g*0 dans g*1
     * @param g00 point at col_0 and line_0
     * @param g10 point at col_1 and line_0
     * @param g01 point at col_0 and line_1
     * @param g11 point at col_1 and line_1
     * @return interpolated vector
     */
    Grid.prototype.interpolation = function (x, y, g00, g10, g01, g11) {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        var wh = undefined;
        if (g00.waveHeight && g10.waveHeight && g01.waveHeight && g11.waveHeight) {
            wh = g00.waveHeight * a + g10.waveHeight * b + g01.waveHeight * c + g11.waveHeight * d;
            if (wh < 0) {
                wh = 0;
                u = 0;
                v = 0;
            }
        }
        return new vector_1.default(u, v, wh);
    };
    /**
     * Custom modulo
     * @returns {number} returns remainder of floored division, i.e., floor(a / n). Useful for consistent modulo
     *          of negative numbers. See http://en.wikipedia.org/wiki/Modulo_operation.
     */
    Grid.prototype.floorMod = function (a, n) {
        return a - n * Math.floor(a / n);
    };
    ;
    /**
     * Detect if x is a value
     * @returns {boolean} true if the specified value is not null and not undefined.
     */
    Grid.prototype.isValue = function (x) {
        return x !== null && x !== undefined;
    };
    ;
    return Grid;
}());
exports["default"] = Grid;


/***/ }),

/***/ "./src/layer.ts":
/*!**********************!*\
  !*** ./src/layer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var layer = /** @class */ (function () {
    function layer(mapBound, canvasBound) {
        this.canvasBound = canvasBound;
        this.mapBound = mapBound;
    }
    /**
     * Find geocoordinate from canvas point
     * @param x
     * @param y
     * return [lng, lat]
    **/
    layer.prototype.canvasToMap = function (x, y) {
        var mapLonDelta = this.mapBound.east - this.mapBound.west;
        var worldMapRadius = (this.canvasBound.width / this.rad2deg(mapLonDelta)) * 360 / (2 * Math.PI);
        var mapOffsetY = (worldMapRadius / 2 * Math.log((1 + Math.sin(this.mapBound.south)) / (1 - Math.sin(this.mapBound.south))));
        var equatorY = this.canvasBound.height + mapOffsetY;
        var a = (equatorY - y) / worldMapRadius;
        var φ = 180 / Math.PI * (2 * Math.atan(Math.exp(a)) - Math.PI / 2);
        var λ = this.rad2deg(this.mapBound.west) + x / this.canvasBound.width * this.rad2deg(mapLonDelta);
        return [λ, φ];
    };
    ;
    layer.prototype.mercY = function (φ) {
        return Math.log(Math.tan(φ / 2 + Math.PI / 4));
    };
    ;
    /**
     * Project a point on the map
     * @param λ Longitude
     * @param φ Latitude
     * @return [x, y]
    **/
    layer.prototype.mapToCanvas = function (λ, φ) {
        var ymin = this.mercY(this.mapBound.south);
        var ymax = this.mercY(this.mapBound.north);
        var xFactor = this.canvasBound.width / (this.mapBound.east - this.mapBound.west);
        var yFactor = this.canvasBound.height / (ymax - ymin);
        var y = this.mercY(this.deg2rad(φ));
        var x = (this.deg2rad(λ) - this.mapBound.west) * xFactor;
        y = (ymax - y) * yFactor;
        return [x, y];
    };
    ;
    layer.prototype.rad2deg = function (rad) {
        return rad * 180 / Math.PI;
    };
    ;
    layer.prototype.deg2rad = function (deg) {
        return deg * Math.PI / 180;
    };
    ;
    /**
     * EXPERIMENTAL from
     * https://github.com/onaci/leaflet-velocity/commit/bd45ea9c399021851ecc98b97d4b126b64adcc8f
     canvasToMap(x: number, y: number): number[] {
        const latlon = this.mapBound.map.containerPointToLatLng(L.point(x,y));
        return [latlon.lng, latlon.lat];
    };
    
    mapToCanvas(lat: number, lon: number): number[] {
        const xy = this.mapBound.map.latLngToContainerPoint(L.latLng(lat,lon));
        return [xy.x, xy.y];
    }
    **/
    /**
     *
     * @param λ Longitude
     * @param φ Latitude
     * @param x
     * @param y
     * @return []
     */
    layer.prototype.distortion = function (λ, φ, x, y) {
        var τ = 2 * Math.PI;
        //    var H = Math.pow(10, -5.2); // 0.00000630957344480193
        //    var H = 0.0000360;          // 0.0000360°φ ~= 4m  (from https://github.com/cambecc/earth/blob/master/public/libs/earth/1.0.0/micro.js#L13)
        //@see https://github.com/danwild/leaflet-velocity/issues/15#issuecomment-345260768
        var H = 5;
        var hλ = λ < 0 ? H : -H;
        var hφ = φ < 0 ? H : -H;
        // TODO: finish
        var pλ = this.mapToCanvas(λ + hλ, φ);
        var pφ = this.mapToCanvas(λ, φ + hφ);
        // Meridian scale factor (see Snyder, equation 4-3), where R = 1. This handles issue where length of 1º λ
        // changes depending on φ. Without this, there is a pinching effect at the poles.
        var k = Math.cos(φ / 360 * τ);
        return [
            (pλ[0] - x) / hλ / k,
            (pλ[1] - y) / hλ / k,
            (pφ[0] - x) / hφ,
            (pφ[1] - y) / hφ
        ];
    };
    /**
     * Calculate distortion of the wind vector caused by the shape of the projection at point (x, y). The wind
     * vector is modified in place and returned by this function.
     * @param λ
     * @param φ
     * @param x
     * @param y
     * @param scale scale factor
     * @param wind [u, v]
     * @return []
     */
    layer.prototype.distort = function (λ, φ, x, y, scale, wind) {
        var u = wind.u * scale;
        var v = wind.v * scale;
        var d = this.distortion(λ, φ, x, y);
        // Scale distortion vectors by u and v, then add.
        wind.u = d[0] * u + d[2] * v;
        wind.v = d[1] * u + d[3] * v;
        return wind;
    };
    return layer;
}());
exports["default"] = layer;


/***/ }),

/***/ "./src/mapBound.ts":
/*!*************************!*\
  !*** ./src/mapBound.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MapBound = /** @class */ (function () {
    function MapBound(map, north, east, south, west) {
        this._map = map;
        this.north = north * Math.PI / 180;
        this.east = east * Math.PI / 180;
        this.south = south * Math.PI / 180;
        this.west = west * Math.PI / 180;
    }
    Object.defineProperty(MapBound.prototype, "width", {
        get: function () {
            return (720 + this.east - this.west) % 360;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapBound.prototype, "height", {
        get: function () {
            return (360 + this.north - this.south) % 180;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapBound.prototype, "map", {
        get: function () {
            return this._map;
        },
        enumerable: false,
        configurable: true
    });
    return MapBound;
}());
exports["default"] = MapBound;


/***/ }),

/***/ "./src/particle.ts":
/*!*************************!*\
  !*** ./src/particle.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Particule = /** @class */ (function () {
    function Particule(x, y, maxAge) {
        this.x = x;
        this.y = y;
        this.age = Math.floor(Math.random() * maxAge);
        this.maxAge = maxAge;
    }
    Particule.prototype.reset = function (x, y) {
        this.x = x;
        this.y = y;
        this.age = 0;
    };
    Object.defineProperty(Particule.prototype, "isDead", {
        get: function () {
            return this.age > this.maxAge;
        },
        enumerable: false,
        configurable: true
    });
    Particule.prototype.grow = function () {
        this.age++;
    };
    return Particule;
}());
exports["default"] = Particule;


/***/ }),

/***/ "./src/vector.ts":
/*!***********************!*\
  !*** ./src/vector.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Vector = /** @class */ (function () {
    function Vector(u, v, waveHeight) {
        this.u = u || 0;
        this.v = v || 0;
        this.waveHeight = waveHeight;
    }
    Object.defineProperty(Vector.prototype, "intensity", {
        get: function () {
            return Math.sqrt(this.u * this.u + this.v * this.v);
        },
        enumerable: false,
        configurable: true
    });
    return Vector;
}());
exports["default"] = Vector;


/***/ }),

/***/ "./src/windy.ts":
/*!**********************!*\
  !*** ./src/windy.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var vector_1 = __webpack_require__(/*! ./vector */ "./src/vector.ts");
var grid_1 = __webpack_require__(/*! ./grid */ "./src/grid.ts");
var colorScale_1 = __webpack_require__(/*! ./colorScale */ "./src/colorScale.ts");
var animationBucket_1 = __webpack_require__(/*! ./animationBucket */ "./src/animationBucket.ts");
var Windy = /** @class */ (function () {
    function Windy(options) {
        this.canvas = null;
        this.particleMultiplier = 1 / 300;
        this.autoColorRange = false;
        this.particules = [];
        this.animationLoop = null;
        this.then = 0;
        this.setOptions(options);
        this.canvas = options.canvas;
        if (options.data) {
            this.setData(options.data);
        }
    }
    Windy.prototype.setOptions = function (options) {
        if (options.minVelocity === undefined && options.maxVelocity === undefined) {
            this.autoColorRange = true;
        }
        this.colorScale = new colorScale_1.default(options.minVelocity || 0, options.maxVelocity || 10, options.colorScale);
        this.velocityScale = options.velocityScale || 0.01;
        this.particleAge = options.particleAge || 64;
        this.opacity = +options.opacity || 0.97;
        this.particleMultiplier = options.particleMultiplier || 1 / 300;
        this.particleLineWidth = options.particlelineWidth || 1;
        var frameRate = options.frameRate || 15;
        this.frameTime = 1000 / frameRate;
        if (options.waveMode) {
            this.waveMode = options.waveMode;
            this.particleAge = options.particleAge || 200;
            this.particleMultiplier = options.particleMultiplier || 1 / 7000;
            this.velocityScale = 0.0045;
            this.wavesParticlesSeparation = options.wavesParticlesSeparation || 3.5;
        }
    };
    Object.defineProperty(Windy.prototype, "particuleCount", {
        get: function () {
            var particuleReduction = ((/android|blackberry|iemobile|ipad|iphone|ipod|opera mini|webos/i).test(navigator.userAgent)) ? (Math.pow(window.devicePixelRatio, 1 / 3) || 1.6) : 1;
            return Math.round(this.layer.canvasBound.width * this.layer.canvasBound.height * this.particleMultiplier) * particuleReduction;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Load data
     * @param data
     */
    Windy.prototype.setData = function (data) {
        var uData = null;
        var vData = null;
        var waveHeight = null;
        var grid = [];
        data.forEach(function (record) {
            switch ("".concat(record.header.parameterCategory, ",").concat(record.header.parameterNumber)) {
                case "1,2":
                case "2,2":
                    uData = record;
                    break;
                case "1,3":
                case "2,3":
                    vData = record;
                    break;
                default:
                    waveHeight = record;
            }
        });
        if (!uData || !vData) {
            console.warn("Data are not correct format");
            return;
        }
        uData.data.forEach(function (u, index) {
            var wh = waveHeight !== null ? waveHeight.data[index] : undefined;
            grid.push(new vector_1.default(u, vData.data[index], wh));
        });
        this.grid = new grid_1.default(grid, uData.header.la1, uData.header.lo1, uData.header.dy, uData.header.dx, uData.header.ny, uData.header.nx);
        this.λ0 = uData.header.lo1;
        this.φ0 = uData.header.la1;
        this.Δλ = uData.header.dx;
        this.Δφ = uData.header.dy;
        this.ni = uData.header.nx;
        this.nj = uData.header.ny; // number of grid points W-E and N-S (e.g., 144 x 73)
        var p = 0;
        var isContinuous = Math.floor(this.ni * this.Δλ) >= 360;
        for (var j = 0; j < this.nj; j++) {
            var row = [];
            for (var i = 0; i < this.ni; i++, p++) {
                row[i] = this.grid.data[p];
            }
            if (isContinuous) {
                // For wrapped grids, duplicate first column as last column to simplify interpolation logic
                row.push(row[0]);
            }
            this.grid[j] = row;
        }
        if (this.autoColorRange) {
            var minMax = this.grid.valueRange;
            this.colorScale.setMinMax(minMax[0], minMax[1]);
        }
    };
    /* Get interpolated grid value from Lon/Lat position
  * @param λ {Float} Longitude
  * @param φ {Float} Latitude
  * @returns {Object}
  */
    Windy.prototype.interpolate = function (λ, φ) {
        if (!this.grid) {
            return null;
        }
        var i = this.floorMod(λ - this.λ0, 360) / this.Δλ; // calculate longitude index in wrapped range [0, 360)
        var j = (this.φ0 - φ) / this.Δφ; // calculate latitude index in direction +90 to -90
        var fi = Math.floor(i);
        var ci = fi + 1;
        var fj = Math.floor(j);
        var cj = fj + 1;
        var row = this.grid[fj]; //Dont know why he dosent found any row ERRRROR
        if (row) {
            var g00 = row[fi];
            var g10 = row[ci];
            if (this.isValue(g00) && this.isValue(g10) && (row = this.grid[cj])) {
                var g01 = row[fi];
                var g11 = row[ci];
                if (this.isValue(g01) && this.isValue(g11)) {
                    // All four points found, so interpolate the value.
                    return this.bilinearInterpolateVector(i - fi, j - fj, g00, g10, g01, g11);
                }
            }
        }
        return null;
    };
    ;
    Windy.prototype.start = function (layer) {
        this.context2D = this.canvas.getContext("2d");
        this.context2D.lineWidth = this.particleLineWidth;
        var fadeOpacity = this.waveMode ? 0.75 : this.opacity;
        this.context2D.fillStyle = "rgba(0, 0, 0, ".concat(fadeOpacity, ")");
        this.context2D.globalAlpha = this.waveMode ? 0.2 : 0.6;
        this.layer = layer;
        this.animationBucket = new animationBucket_1.default(this.colorScale);
        this.particules.splice(0, this.particules.length);
        for (var i = 0; i < this.particuleCount; i++) {
            this.particules.push(this.layer.canvasBound.getRandomParticule(this.particleAge));
        }
        this.then = new Date().getTime();
        this.frame();
    };
    Windy.prototype.stop = function () {
        this.particules.splice(0, this.particules.length);
        this.animationBucket.clear();
        if (this.animationLoop) {
            clearTimeout(this.animationLoop);
            cancelAnimationFrame(this.animationLoop);
            this.animationLoop = null;
        }
    };
    Windy.prototype.floorMod = function (a, n) {
        return a - n * Math.floor(a / n);
    };
    ;
    Windy.prototype.isValue = function (x) {
        return x !== null && x !== undefined;
    };
    ;
    Windy.prototype.bilinearInterpolateVector = function (x, y, g00, g10, g01, g11) {
        var rx = (1 - x);
        var ry = (1 - y);
        var a = rx * ry, b = x * ry, c = rx * y, d = x * y;
        var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
        var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
        var wh = g00.waveHeight * a + g10.waveHeight * b + g01.waveHeight * c + g11.waveHeight * d;
        if (this.waveMode) {
            return [u, v, wh];
        }
        return [u, v, Math.sqrt(u * u + v * v)];
    };
    ;
    Windy.prototype.getParticuleWind = function (p) {
        var lngLat = this.layer.canvasToMap(p.x, p.y);
        var wind = this.grid.get(lngLat[0], lngLat[1]);
        p.intensity = wind.intensity;
        p.waveHeight = wind.waveHeight;
        var mapArea = this.layer.mapBound.height * this.layer.mapBound.width;
        var velocityScale = this.velocityScale * Math.pow(mapArea, 0.4);
        this.layer.distort(lngLat[0], lngLat[1], p.x, p.y, velocityScale, wind);
        return wind;
    };
    Windy.prototype.frame = function () {
        var _this = this;
        this.animationLoop = requestAnimationFrame(function () {
            _this.frame();
        });
        var now = new Date().getTime();
        var delta = now - this.then;
        if (delta > this.frameTime) {
            this.then = now - (delta % this.frameTime);
            this.evolve();
            this.draw();
        }
    };
    Windy.prototype.evolve = function () {
        var _this = this;
        this.animationBucket.clear();
        this.particules.forEach(function (p) {
            p.grow();
            if (p.isDead) {
                _this.layer.canvasBound.resetParticule(p);
            }
            var wind = _this.getParticuleWind(p);
            _this.animationBucket.add(p, wind);
        });
    };
    Windy.prototype.draw = function () {
        if (this.waveMode) {
            this.drawWaves();
        }
        else {
            this.drawWind();
        }
    };
    Windy.prototype.drawWind = function () {
        this.context2D.globalCompositeOperation = "destination-in";
        this.context2D.fillRect(this.layer.canvasBound.xMin, this.layer.canvasBound.yMin, this.layer.canvasBound.width, this.layer.canvasBound.height);
        // Fade existing particle trails.
        this.context2D.globalCompositeOperation = "lighter";
        this.context2D.globalAlpha = this.opacity === 0 ? 0 : this.opacity * 0.9;
        this.animationBucket.draw(this.context2D);
    };
    Windy.prototype.verticalOffset = function (offset, maxOffset) {
        return 7 * Math.cos((Math.abs(offset) / maxOffset) * (Math.PI / 2));
    };
    Windy.prototype.generateOffsets = function (count) {
        var numDivisions = (count - 1) / 2;
        var offsets = [];
        for (var i = -numDivisions; i <= numDivisions; i++) {
            offsets.push(i);
        }
        return offsets;
    };
    Windy.prototype.calculateWaveParticles = function (waveHeight) {
        if (waveHeight < 0.5)
            return 4;
        if (waveHeight < 0.7)
            return 5;
        if (waveHeight < 1)
            return 6;
        if (waveHeight < 1.5)
            return 7;
        if (waveHeight < 2)
            return 8;
        if (waveHeight < 2.5)
            return 9;
        if (waveHeight < 3)
            return 10;
        if (waveHeight < 4)
            return 10;
        if (waveHeight < 10)
            return 11;
        if (waveHeight < 20)
            return 12;
        if (waveHeight < 30)
            return 13;
        return 14;
    };
    Windy.prototype.drawWaves = function () {
        var _this = this;
        var g = this.context2D;
        g.globalCompositeOperation = "destination-in";
        g.fillRect(this.layer.canvasBound.xMin, this.layer.canvasBound.yMin, this.layer.canvasBound.width, this.layer.canvasBound.height);
        g.globalCompositeOperation = "lighter";
        g.globalAlpha = this.opacity;
        this.animationBucket.getBuckets().forEach(function (bucket, i) {
            if (bucket.length > 0) {
                g.beginPath();
                g.strokeStyle = _this.colorScale.colorAt(i);
                bucket.forEach(function (particle) {
                    var dx = particle.xt - particle.x;
                    var dy = particle.yt - particle.y;
                    var mag = Math.sqrt(dx * dx + dy * dy);
                    var perpX = mag ? -dy / mag : 0;
                    var perpY = mag ? dx / mag : 0;
                    var normX = mag ? dx / mag : 0;
                    var normY = mag ? dy / mag : 0;
                    var waveHeight = particle.waveHeight || 1;
                    var numWaveParticles = _this.calculateWaveParticles(waveHeight);
                    var offsets = _this.generateOffsets(numWaveParticles);
                    var SEPARATION = _this.wavesParticlesSeparation;
                    var maxOffset = 3.5;
                    offsets.forEach(function (offset) {
                        var shiftX = perpX * offset * SEPARATION;
                        var shiftY = perpY * offset * SEPARATION;
                        var vOff = _this.verticalOffset(offset, maxOffset);
                        var startX = particle.x + shiftX + normX * vOff;
                        var startY = particle.y + shiftY + normY * vOff;
                        var endX = particle.xt + shiftX + normX * vOff;
                        var endY = particle.yt + shiftY + normY * vOff;
                        g.moveTo(startX, startY);
                        g.lineTo(endX, endY);
                    });
                    particle.x = particle.xt;
                    particle.y = particle.yt;
                });
                g.stroke();
            }
        });
    };
    return Windy;
}());
exports["default"] = Windy;


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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var canvasBound_1 = __webpack_require__(/*! ./canvasBound */ "./src/canvasBound.ts");
var mapBound_1 = __webpack_require__(/*! ./mapBound */ "./src/mapBound.ts");
var windy_1 = __webpack_require__(/*! ./windy */ "./src/windy.ts");
var L_CanvasLayer_1 = __webpack_require__(/*! ./L.CanvasLayer */ "./src/L.CanvasLayer.ts");
var L_VelocityLayer_1 = __webpack_require__(/*! ./L.VelocityLayer */ "./src/L.VelocityLayer.ts");
var L_Control_Velocity_1 = __webpack_require__(/*! ./L.Control.Velocity */ "./src/L.Control.Velocity.ts");
window.CanvasBound = canvasBound_1.default;
window.MapBound = mapBound_1.default;
window.Windy = windy_1.default;
L.CanvasLayer = (L.Layer ? L.Layer : L.Class).extend(new L_CanvasLayer_1.default());
L.canvasLayer = function () {
    return new L.CanvasLayer();
};
L.Control.Velocity = (L.Control).extend(new L_Control_Velocity_1.default);
L.control.velocity = function (options) {
    return new L.Control.Velocity(options);
};
L.VelocityLayer = (L.Layer ? L.Layer : L.Class).extend(new L_VelocityLayer_1.default());
L.velocityLayer = function (options) {
    return new L.VelocityLayer(options);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN0RCxJQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7UUFFMUMsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQUEsQ0FBQztJQUVGLHFCQUFLLEdBQUwsVUFBTSxDQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUFBLENBQUM7SUFFRjs7Ozs7T0FLRztJQUNILDJCQUFXLEdBQVgsVUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEs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QUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3MiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3M/YmFmNCIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvTC5DYW52YXNMYXllci50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuQ29udHJvbC5WZWxvY2l0eS50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL0wuVmVsb2NpdHlMYXllci50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2FuaW1hdGlvbkJ1Y2tldC50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2NhbnZhc0JvdW5kLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvY29sb3JTY2FsZS50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2dyaWQudHMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9sYXllci50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL21hcEJvdW5kLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvcGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy92ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy93aW5keS50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLklvV3dpT0phM3BRVEFaVWF3UGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggMCAwO1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogIzMzMztcXG4gIGZvbnQ6IDE0cHgvMS41IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQ0FBMEM7RUFDMUMsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDZEQUE2RDtFQUM3RCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87QUFDVFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGVhZmxldENvbnRyb2xWZWxvY2l0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDAgMDtcXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250OiAxNHB4LzEuNSBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGVhZmxldENvbnRyb2xWZWxvY2l0eVwiOiBcIklvV3dpT0phM3BRVEFaVWF3UGVyXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9AdGVhbXN1cGVyY2VsbC90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9AdGVhbXN1cGVyY2VsbC90eXBpbmdzLWZvci1jc3MtbW9kdWxlcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9sZWFmbGV0LXZlbG9jaXR5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBMYXllciwgWm9vbUFuaW1FdmVudCB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbmRlY2xhcmUgdmFyIEw6IGFueTtcblxuLy8gLS0gTC5Eb21VdGlsLnNldFRyYW5zZm9ybSBmcm9tIGxlYWZsZXQgMS4wLjAgdG8gd29yayBvbiAwLjAuN1xuaWYgKCFMLkRvbVV0aWwuc2V0VHJhbnNmb3JtKSB7XG5cdEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0gPSAoZWw6IGFueSwgb2Zmc2V0OiBhbnksIHNjYWxlOiBhbnkpID0+IHtcblx0XHR2YXIgcG9zID0gb2Zmc2V0IHx8IG5ldyBMLlBvaW50KDAsIDApO1xuXG5cdFx0ZWwuc3R5bGVbTC5Eb21VdGlsLlRSQU5TRk9STV0gPVxuXHRcdFx0KEwuQnJvd3Nlci5pZTNkXG5cdFx0XHRcdD8gXCJ0cmFuc2xhdGUoXCIgKyBwb3MueCArIFwicHgsXCIgKyBwb3MueSArIFwicHgpXCJcblx0XHRcdFx0OiBcInRyYW5zbGF0ZTNkKFwiICsgcG9zLnggKyBcInB4LFwiICsgcG9zLnkgKyBcInB4LDApXCIpICtcblx0XHRcdChzY2FsZSA/IFwiIHNjYWxlKFwiICsgc2NhbGUgKyBcIilcIiA6IFwiXCIpO1xuXHR9O1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzTGF5ZXIge1xuXHRwcm90ZWN0ZWQgX21hcDogTC5NYXA7XG5cdHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG5cdHByaXZhdGUgX2ZyYW1lOiBudW1iZXI7XG5cdHByaXZhdGUgX2RlbDogYW55O1xuXG5cdHB1YmxpYyBpbml0aWFsaXplKG9wdGlvbnM6IGFueSkge1xuXHRcdHRoaXMuX21hcCA9IG51bGw7XG5cdFx0dGhpcy5fY2FudmFzID0gbnVsbDtcblx0XHR0aGlzLl9mcmFtZSA9IG51bGw7XG5cdFx0dGhpcy5fZGVsID0gbnVsbDtcblx0XHRMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyBnZXRDYW52YXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2NhbnZhcztcblx0fVxuXG5cdHB1YmxpYyBkZWxlZ2F0ZShkZWw6IGFueSk6IENhbnZhc0xheWVyIHtcblx0XHR0aGlzLl9kZWwgPSBkZWw7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwdWJsaWMgbmVlZFJlZHJhdygpIHtcblx0XHRpZiAoIXRoaXMuX2ZyYW1lKSB7XG5cdFx0XHR0aGlzLl9mcmFtZSA9IEwuVXRpbC5yZXF1ZXN0QW5pbUZyYW1lKHRoaXMuZHJhd0xheWVyLCB0aGlzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwdWJsaWMgZ2V0RXZlbnRzKCkge1xuXHRcdGNvbnN0IGV2ZW50cyA9IHtcblx0XHRcdHJlc2l6ZTogdGhpcy5vbkxheWVyRGlkUmVzaXplLFxuXHRcdFx0bW92ZWVuZDogdGhpcy5vbkxheWVyRGlkTW92ZSxcblx0XHRcdHpvb21hbmltOiA8YW55PnVuZGVmaW5lZFxuXHRcdH07XG5cdFx0aWYgKHRoaXMuX21hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkKSB7XG5cdFx0XHRldmVudHMuem9vbWFuaW0gPSB0aGlzLmFuaW1hdGVab29tO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudHM7XG5cdH1cblxuXHRwdWJsaWMgb25BZGQobWFwOiBMLk1hcCkge1xuXHRcdHRoaXMuX21hcCA9IG1hcDtcblx0XHR0aGlzLl9jYW52YXMgPSBMLkRvbVV0aWwuY3JlYXRlKCdjYW52YXMnLCAnbGVhZmxldC1sYXllcicpO1xuXG5cdFx0Y29uc3Qgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG5cdFx0dGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZS54O1xuXHRcdHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplLnk7XG5cblx0XHRjb25zdCBhbmltYXRlZCA9IHRoaXMuX21hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgTC5Ccm93c2VyLmFueTNkO1xuXHRcdEwuRG9tVXRpbC5hZGRDbGFzcyh0aGlzLl9jYW52YXMsICdsZWFmbGV0LXpvb20tJyArIChhbmltYXRlZCA/ICdhbmltYXRlZCcgOiAnaGlkZScpKTtcblxuXG5cdFx0bWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcblx0XHRtYXAub24odGhpcy5nZXRFdmVudHMoKSBhcyBhbnksIHRoaXMgYXMgYW55KTtcblxuXHRcdGNvbnN0IGRlbCA9IHRoaXMuX2RlbCB8fCB0aGlzO1xuXHRcdGRlbC5vbkxheWVyRGlkTW91bnQgJiYgZGVsLm9uTGF5ZXJEaWRNb3VudCgpOyAvLyAtLSBjYWxsYmFja1xuXHRcdHRoaXMubmVlZFJlZHJhdygpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLm9uTGF5ZXJEaWRNb3ZlKCk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHRwdWJsaWMgb25SZW1vdmUobWFwOiBMLk1hcCkge1xuXHRcdGNvbnN0IGRlbCA9IHRoaXMuX2RlbCB8fCB0aGlzO1xuXHRcdGRlbC5vbkxheWVyV2lsbFVubW91bnQgJiYgZGVsLm9uTGF5ZXJXaWxsVW5tb3VudCgpOyAvLyAtLSBjYWxsYmFja1xuXG5cblx0XHRtYXAuZ2V0UGFuZXMoKS5vdmVybGF5UGFuZS5yZW1vdmVDaGlsZCh0aGlzLl9jYW52YXMpO1xuXG5cdFx0bWFwLm9mZih0aGlzLmdldEV2ZW50cygpIGFzIGFueSwgdGhpcyBhcyBhbnkpO1xuXG5cdFx0dGhpcy5fY2FudmFzID0gbnVsbDtcblxuXHR9XG5cblx0cHVibGljIGFkZFRvKG1hcDogTC5NYXApIHtcblx0XHRtYXAuYWRkTGF5ZXIodGhpcyBhcyB1bmtub3duIGFzIExheWVyKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHB1YmxpYyBkcmF3TGF5ZXIoKSB7XG5cdFx0Ly8gLS0gdG9kbyBtYWtlIHRoZSB2aWV3SW5mbyBwcm9wZXJ0aWVzIGZsYXQgb2JqZWN0cy5cblx0XHRjb25zdCBzaXplID0gdGhpcy5fbWFwLmdldFNpemUoKTtcblx0XHRjb25zdCBib3VuZHMgPSB0aGlzLl9tYXAuZ2V0Qm91bmRzKCk7XG5cdFx0Y29uc3Qgem9vbSA9IHRoaXMuX21hcC5nZXRab29tKCk7XG5cblx0XHRjb25zdCBjZW50ZXIgPSB0aGlzLl9tYXAub3B0aW9ucy5jcnMucHJvamVjdCh0aGlzLl9tYXAuZ2V0Q2VudGVyKCkpO1xuXHRcdGNvbnN0IGNvcm5lciA9IHRoaXMuX21hcC5vcHRpb25zLmNycy5wcm9qZWN0KHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF0TG5nKHRoaXMuX21hcC5nZXRTaXplKCkpKTtcblxuXHRcdGNvbnN0IGRlbCA9IHRoaXMuX2RlbCB8fCB0aGlzO1xuXHRcdGRlbC5vbkRyYXdMYXllciAmJiBkZWwub25EcmF3TGF5ZXIoe1xuXHRcdFx0bGF5ZXI6IHRoaXMsXG5cdFx0XHRjYW52YXM6IHRoaXMuX2NhbnZhcyxcblx0XHRcdGJvdW5kczogYm91bmRzLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHpvb206IHpvb20sXG5cdFx0XHRjZW50ZXI6IGNlbnRlcixcblx0XHRcdGNvcm5lcjogY29ybmVyXG5cdFx0fSk7XG5cdFx0dGhpcy5fZnJhbWUgPSBudWxsO1xuXHR9XG5cblx0Ly8gLS0gTC5Eb21VdGlsLnNldFRyYW5zZm9ybSBmcm9tIGxlYWZsZXQgMS4wLjAgdG8gd29yayBvbiAwLjAuN1xuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRfc2V0VHJhbnNmb3JtKGVsOiBhbnksIG9mZnNldDogYW55LCBzY2FsZTogYW55KSB7XG5cdFx0dmFyIHBvcyA9IG9mZnNldCB8fCBuZXcgTC5Qb2ludCgwLCAwKTtcblxuXHRcdGVsLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID1cblx0XHRcdChMLkJyb3dzZXIuaWUzZCA/XG5cdFx0XHRcdCd0cmFuc2xhdGUoJyArIHBvcy54ICsgJ3B4LCcgKyBwb3MueSArICdweCknIDpcblx0XHRcdFx0J3RyYW5zbGF0ZTNkKCcgKyBwb3MueCArICdweCwnICsgcG9zLnkgKyAncHgsMCknKSArXG5cdFx0XHQoc2NhbGUgPyAnIHNjYWxlKCcgKyBzY2FsZSArICcpJyA6ICcnKTtcblx0fVxuXG5cdHByaXZhdGUgYW5pbWF0ZVpvb20oZTogWm9vbUFuaW1FdmVudCkge1xuXHRcdGNvbnN0IHNjYWxlID0gdGhpcy5fbWFwLmdldFpvb21TY2FsZShlLnpvb20pO1xuXHRcdC8vIC0tIGRpZmZlcmVudCBjYWxjIG9mIG9mZnNldCBpbiBsZWFmbGV0IDEuMC4wIGFuZCAwLjAuNyB0aGFua3MgZm9yIDEuMC4wLXJjMiBjYWxjIEBqZHVnZ2FuMVxuXHRcdGNvbnN0IG9mZnNldCA9IEwuTGF5ZXIgP1xuXHRcdFx0KDxhbnk+dGhpcy5fbWFwKS5fbGF0TG5nVG9OZXdMYXllclBvaW50KHRoaXMuX21hcC5nZXRCb3VuZHMoKS5nZXROb3J0aFdlc3QoKSwgZS56b29tLCBlLmNlbnRlcikgOlxuXHRcdFx0KDxhbnk+dGhpcy5fbWFwKS5fZ2V0Q2VudGVyT2Zmc2V0KGUuY2VudGVyKS5fbXVsdGlwbHlCeSgtc2NhbGUpLnN1YnRyYWN0KCg8YW55PnRoaXMuX21hcCkuX2dldE1hcFBhbmVQb3MoKSk7XG5cblx0XHRMLkRvbVV0aWwuc2V0VHJhbnNmb3JtKHRoaXMuX2NhbnZhcywgb2Zmc2V0LCBzY2FsZSk7XG5cdH1cblxuXHRwcml2YXRlIG9uTGF5ZXJEaWRSZXNpemUocmVzaXplRXZlbnQ6IGFueSkge1xuXHRcdHRoaXMuX2NhbnZhcy53aWR0aCA9IHJlc2l6ZUV2ZW50Lm5ld1NpemUueDtcblx0XHR0aGlzLl9jYW52YXMuaGVpZ2h0ID0gcmVzaXplRXZlbnQubmV3U2l6ZS55O1xuXHR9XG5cblx0cHJpdmF0ZSBvbkxheWVyRGlkTW92ZSgpIHtcblx0XHR2YXIgdG9wTGVmdCA9IHRoaXMuX21hcC5jb250YWluZXJQb2ludFRvTGF5ZXJQb2ludChbMCwgMF0pO1xuXHRcdEwuRG9tVXRpbC5zZXRQb3NpdGlvbih0aGlzLl9jYW52YXMsIHRvcExlZnQpO1xuXHRcdHRoaXMuZHJhd0xheWVyKCk7XG5cdH1cbn1cbiIsImltcG9ydCBXaW5keSBmcm9tICcuL3dpbmR5JztcclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5pbXBvcnQgdmVsb2NpdHljc3MgZnJvbSAnLi9sZWFmbGV0LXZlbG9jaXR5LmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgRGlzcGxheU9wdGlvbnMge1xyXG4gIHNwZWVkVW5pdDogJ2t0JyB8ICdrL2gnIHwgJ21waCcgfCAnbS9zJztcclxuICBoZWlnaHRVbml0OiAnZnQnIHwgJ20nO1xyXG4gIHBvc2l0aW9uOiAndG9wbGVmdCcgfCAndG9wcmlnaHQnIHwgJ2JvdHRvbWxlZnQnIHwgJ2JvdHRvbXJpZ2h0JztcclxuICBzaG93Q2FyZGluYWw6IGJvb2xlYW47XHJcbiAgYW5nbGVDb252ZW50aW9uOiBzdHJpbmc7XHJcbiAgdmVsb2NpdHlUeXBlOiBzdHJpbmc7XHJcbiAgZW1wdHlTdHJpbmc6IHN0cmluZztcclxuICBkaXJlY3Rpb25TdHJpbmc6IHN0cmluZztcclxuICBzcGVlZFN0cmluZzogc3RyaW5nO1xyXG4gIGhlaWdodFN0cmluZzogc3RyaW5nO1xyXG4gIHdhdmVNb2RlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sVmVsb2NpdHkge1xyXG4gIHByaXZhdGUgb3B0aW9uczogRGlzcGxheU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfd2luZHk6IFdpbmR5ID0gbnVsbDtcclxuICBwcml2YXRlIF9tYXA6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY29udGFpbmVyOiBhbnkgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0JyxcclxuICAgICAgZW1wdHlTdHJpbmc6ICdVbmF2YWlsYWJsZScsXHJcbiAgICAgIHZlbG9jaXR5VHlwZTogJycsXHJcbiAgICAgIGFuZ2xlQ29udmVudGlvbjogJ2JlYXJpbmdDQ1cnLFxyXG4gICAgICBzcGVlZFVuaXQ6ICdtL3MnLFxyXG4gICAgICBkaXJlY3Rpb25TdHJpbmc6IFwiRGlyZWN0aW9uXCIsXHJcbiAgICAgIHNwZWVkU3RyaW5nOiBcIlNwZWVkXCIsXHJcbiAgICAgIHNob3dDYXJkaW5hbDogZmFsc2UsXHJcbiAgICAgIGhlaWdodFN0cmluZzogXCJIZWlnaHRcIixcclxuICAgICAgaGVpZ2h0VW5pdDogJ2Z0JyxcclxuICAgICAgd2F2ZU1vZGU6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFdpbmR5KF93aW5keTogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMuX3dpbmR5ICYmIF93aW5keSkgdGhpcy5fd2luZHkgPSBfd2luZHk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xyXG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBvbkFkZChtYXA6IGFueSkge1xyXG4gICAgdGhpcy5fbWFwID0gbWFwO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gTC5Eb21VdGlsLmNyZWF0ZSgnZGl2JywgdmVsb2NpdHljc3MubGVhZmxldENvbnRyb2xWZWxvY2l0eSk7XHJcbiAgICBMLkRvbUV2ZW50LmRpc2FibGVDbGlja1Byb3BhZ2F0aW9uKHRoaXMuX2NvbnRhaW5lcik7XHJcbiAgICB0aGlzLl9tYXAub24oJ21vdXNlbW92ZScsIHRoaXMuZHJhd1dpbmRTcGVlZCwgdGhpcyk7XHJcbiAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmVtcHR5U3RyaW5nO1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIG9uUmVtb3ZlKG1hcDogYW55KSB7XHJcbiAgICB0aGlzLl9tYXAub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXdXaW5kU3BlZWQsIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgdmVjdG9yVG9TcGVlZCh1TXM6IG51bWJlciwgdk1zOiBudW1iZXIsIHVuaXQ6IHN0cmluZykge1xyXG4gICAgdmFyIHZlbG9jaXR5QWJzID0gTWF0aC5zcXJ0KE1hdGgucG93KHVNcywgMikgKyBNYXRoLnBvdyh2TXMsIDIpKTtcclxuICAgIC8vIERlZmF1bHQgaXMgbS9zXHJcbiAgICBpZiAodW5pdCA9PT0gXCJrL2hcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJraWxvbWV0ZXJIb3VyKHZlbG9jaXR5QWJzKTtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJrdFwiKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1ldGVyU2VjMktub3RzKHZlbG9jaXR5QWJzKTtcclxuICAgIH0gZWxzZSBpZiAodW5pdCA9PT0gXCJtcGhcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJtaWxlc0hvdXIodmVsb2NpdHlBYnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZlbG9jaXR5QWJzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVjdG9yVG9EZWdyZWVzKHVNczogbnVtYmVyLCB2TXM6IG51bWJlciwgYW5nbGVDb252ZW50aW9uOiBzdHJpbmcpIHtcclxuICAgIC8vIERlZmF1bHQgYW5nbGUgY29udmVudGlvbiBpcyBDV1xyXG4gICAgaWYgKGFuZ2xlQ29udmVudGlvbi5lbmRzV2l0aCgnQ0NXJykpIHtcclxuICAgICAgLy8gdk1zIGNvbWVzIG91dCB1cHNpZGUtZG93bi4uXHJcbiAgICAgIHZNcyA9IHZNcyA+IDAgPyB2TXMgPSAtdk1zIDogTWF0aC5hYnModk1zKTtcclxuICAgIH1cclxuICAgIHZhciB2ZWxvY2l0eUFicyA9IE1hdGguc3FydChNYXRoLnBvdyh1TXMsIDIpICsgTWF0aC5wb3codk1zLCAyKSk7XHJcblxyXG4gICAgdmFyIHZlbG9jaXR5RGlyID0gTWF0aC5hdGFuMih1TXMgLyB2ZWxvY2l0eUFicywgdk1zIC8gdmVsb2NpdHlBYnMpO1xyXG4gICAgdmFyIHZlbG9jaXR5RGlyVG9EZWdyZWVzID0gdmVsb2NpdHlEaXIgKiAxODAgLyBNYXRoLlBJICsgMTgwO1xyXG5cclxuICAgIGlmIChhbmdsZUNvbnZlbnRpb24gPT09ICdiZWFyaW5nQ1cnIHx8IGFuZ2xlQ29udmVudGlvbiA9PT0gJ21ldGVvQ0NXJykge1xyXG4gICAgICB2ZWxvY2l0eURpclRvRGVncmVlcyArPSAxODA7XHJcbiAgICAgIGlmICh2ZWxvY2l0eURpclRvRGVncmVlcyA+PSAzNjApIHZlbG9jaXR5RGlyVG9EZWdyZWVzIC09IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmVsb2NpdHlEaXJUb0RlZ3JlZXM7XHJcbiAgfVxyXG5cclxuICBtZXRlclNlYzJLbm90cyhtZXRlcnM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG1ldGVycyAvIDAuNTE0XHJcbiAgfVxyXG5cclxuICBtZXRlclNlYzJraWxvbWV0ZXJIb3VyKG1ldGVyczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbWV0ZXJzICogMy42XHJcbiAgfVxyXG5cclxuICBtZXRlclNlYzJtaWxlc0hvdXIobWV0ZXJzOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBtZXRlcnMgKiAyLjIzNjk0O1xyXG4gIH1cclxuXHJcblxyXG4gIGRlZ3JlZXNUb0NhcmRpbmFsRGlyZWN0aW9uKGRlZzogbnVtYmVyKSB7XHJcbiAgICBsZXQgY2FyZGluYWxEaXJlY3Rpb24gPSAnJ1xyXG4gICAgaWYgKGRlZyA+PSAwICYmIGRlZyA8IDExLjI1IHx8IGRlZyA+PSAzNDguNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTidcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMS4yNSAmJiBkZWcgPCAzMy43NSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOTlcnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMzMuNzUgJiYgZGVnIDwgNTYuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTlcnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gNTYuMjUgJiYgZGVnIDwgNzguNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnV05XJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDc4LjI1ICYmIGRlZyA8IDEwMS4yNSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdXJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDEwMS4yNSAmJiBkZWcgPCAxMjMuNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnV1NXJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDEyMy43NSAmJiBkZWcgPCAxNDYuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU1cnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMTQ2LjI1ICYmIGRlZyA8IDE2OC43NSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTU1cnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMTY4Ljc1ICYmIGRlZyA8IDE5MS4yNSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdTJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDE5MS4yNSAmJiBkZWcgPCAyMTMuNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU1NFJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDIxMy43NSAmJiBkZWcgPCAyMzYuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU0UnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMjM2LjI1ICYmIGRlZyA8IDI1OC43NSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdFU0UnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMjU4Ljc1ICYmIGRlZyA8IDI4MS4yNSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdFJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDI4MS4yNSAmJiBkZWcgPCAzMDMuNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnRU5FJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDMwMy43NSAmJiBkZWcgPCAzMjYuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTkUnXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMzI2LjI1ICYmIGRlZyA8IDM0OC43NSkge1xyXG4gICAgICBjYXJkaW5hbERpcmVjdGlvbiA9ICdOTkUnXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhcmRpbmFsRGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgZHJhd1dpbmRTcGVlZChldjogYW55KSB7XHJcbiAgICBjb25zdCBwb3MgPSB0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyhMLnBvaW50KGV2LmNvbnRhaW5lclBvaW50LngsIGV2LmNvbnRhaW5lclBvaW50LnkpKTtcclxuICAgIGNvbnN0IGdyaWRWYWx1ZSA9IHRoaXMuX3dpbmR5LmludGVycG9sYXRlKHBvcy5sbmcsIHBvcy5sYXQpO1xyXG4gICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcclxuXHJcbiAgICBpZiAoZ3JpZFZhbHVlICYmICFpc05hTihncmlkVmFsdWVbMF0pICYmICFpc05hTihncmlkVmFsdWVbMV0pKSB7XHJcbiAgICAgIGNvbnN0IGRlZyA9IHRoaXMudmVjdG9yVG9EZWdyZWVzKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuYW5nbGVDb252ZW50aW9uKTtcclxuICAgICAgY29uc3QgY2FyZGluYWwgPSB0aGlzLm9wdGlvbnMuc2hvd0NhcmRpbmFsID8gYCAoJHt0aGlzLmRlZ3JlZXNUb0NhcmRpbmFsRGlyZWN0aW9uKGRlZyl9KSBgIDogJyc7XHJcblxyXG4gICAgICBsZXQgdmFyaWFibGVPdXRwdXQgPSBcIlwiO1xyXG4gICAgICBsZXQgbGFiZWxTdHJpbmcgPSBcIlwiO1xyXG4gICAgICBsZXQgdW5pdCA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy53YXZlTW9kZSkge1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGdyaWRWYWx1ZVsyXSAmJiBncmlkVmFsdWVbMl0gPj0gMCA/IGdyaWRWYWx1ZVsyXSA6IG51bGw7XHJcbiAgICAgICAgdmFyaWFibGVPdXRwdXQgPSBoZWlnaHQgPyBoZWlnaHQudG9GaXhlZCgyKSA6IFwiTm8gZGF0YVwiO1xyXG4gICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5vcHRpb25zLmhlaWdodFN0cmluZztcclxuICAgICAgICB1bml0ID0gaGVpZ2h0ID8gdGhpcy5vcHRpb25zLmhlaWdodFVuaXQgOiBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhcmlhYmxlT3V0cHV0ID0gdGhpcy52ZWN0b3JUb1NwZWVkKGdyaWRWYWx1ZVswXSwgZ3JpZFZhbHVlWzFdLCB0aGlzLm9wdGlvbnMuc3BlZWRVbml0KS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5vcHRpb25zLnNwZWVkU3RyaW5nO1xyXG4gICAgICAgIHVuaXQgPSB0aGlzLm9wdGlvbnMuc3BlZWRVbml0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0ZW1wbGF0ZSA9IGA8c3Ryb25nPiR7dGhpcy5vcHRpb25zLnZlbG9jaXR5VHlwZX0gJHt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uU3RyaW5nfTogPC9zdHJvbmc+ICR7ZGVnLnRvRml4ZWQoMil9wrAke2NhcmRpbmFsfSwgXHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+JHtsYWJlbFN0cmluZ306IDwvc3Ryb25nPiAke3ZhcmlhYmxlT3V0cHV0fSAke3VuaXR9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRlbXBsYXRlID0gdGhpcy5vcHRpb25zLmVtcHR5U3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NvbnRhaW5lci5pbm5lckhUTUwgPSB0ZW1wbGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFdpbmR5LCB7IFdpbmR5T3B0aW9ucyB9IGZyb20gJy4vd2luZHknO1xyXG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSAnLi9jYW52YXNCb3VuZCdcclxuaW1wb3J0IE1hcEJvdW5kIGZyb20gJy4vbWFwQm91bmQnO1xyXG5pbXBvcnQgTGF5ZXIgZnJvbSBcIi4vbGF5ZXJcIjtcclxuaW1wb3J0IENhbnZhc0xheWVyIGZyb20gJy4vTC5DYW52YXNMYXllcic7XHJcblxyXG5kZWNsYXJlIHZhciBMOiBhbnk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWxvY2l0eUxheWVyIHtcclxuICBwcml2YXRlIG9wdGlvbnM6IGFueTtcclxuICBwcml2YXRlIF9tYXA6IEwuTWFwID0gbnVsbDtcclxuICBwcml2YXRlIF9jYW52YXNMYXllcjogKENhbnZhc0xheWVyICYgTC5MYXllcikgPSBudWxsO1xyXG4gIHByaXZhdGUgX3dpbmR5OiBXaW5keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY29udGV4dDogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF9kaXNwbGF5VGltZW91dDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gPSBudWxsO1xyXG4gIHByaXZhdGUgX21hcEV2ZW50czogYW55ID0gbnVsbFxyXG4gIHByaXZhdGUgX21vdXNlQ29udHJvbDogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF9wYW5lTmFtZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIGRpc3BsYXlWYWx1ZXM6IHRydWUsXHJcbiAgICAgIGRpc3BsYXlPcHRpb25zOiB7XHJcbiAgICAgICAgdmVsb2NpdHlUeXBlOiAnVmVsb2NpdHknLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tbGVmdCcsXHJcbiAgICAgICAgZW1wdHlTdHJpbmc6ICdObyB2ZWxvY2l0eSBkYXRhJyxcclxuICAgICAgICBhbmdsZUNvbnZlbnRpb246ICdiZWFyaW5nQ0NXJyxcclxuICAgICAgICBzcGVlZFVuaXQ6ICdtL3MnLFxyXG4gICAgICAgIGhlaWdodFVuaXQ6ICdmdCcsXHJcbiAgICAgICAgaGVpZ2h0U3RyaW5nOiAnSGVpZ2h0JyxcclxuICAgICAgfSxcclxuICAgICAgd2F2ZU1vZGU6IGZhbHNlLFxyXG4gICAgICBtYXhWZWxvY2l0eTogMTAsIC8vIHVzZWQgdG8gYWxpZ24gY29sb3Igc2NhbGVcclxuICAgICAgY29sb3JTY2FsZTogbnVsbCxcclxuICAgICAgb25BZGQ6IG51bGwsXHJcbiAgICAgIG9uUmVtb3ZlOiBudWxsLFxyXG4gICAgICBkYXRhOiBudWxsLFxyXG4gICAgICBwYW5lTmFtZTogXCJvdmVybGF5UGFuZVwiLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUob3B0aW9uczogYW55KSB7XHJcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0aW9uczogYW55KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7Li4udGhpcy5vcHRpb25zLCAuLi5vcHRpb25zfTtcclxuICAgIGlmIChvcHRpb25zLmRpc3BsYXlPcHRpb25zKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyA9IHsuLi50aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMsIC4uLm9wdGlvbnMuZGlzcGxheU9wdGlvbnN9O1xyXG4gICAgICB0aGlzLmluaXRNb3VzZUhhbmRsZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZGF0YSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IG9wdGlvbnMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5fd2luZHkuc2V0T3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgaWYgKG9wdGlvbnMuZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3dpbmR5LnNldERhdGEob3B0aW9ucy5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgICg8YW55PnRoaXMpLmZpcmUoXCJsb2FkXCIpO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobWFwOiBMLk1hcCkge1xyXG4gICAgLy8gZGV0ZXJtaW5lIHdoZXJlIHRvIGFkZCB0aGUgbGF5ZXJcclxuICAgIHRoaXMuX3BhbmVOYW1lID0gdGhpcy5vcHRpb25zLnBhbmVOYW1lIHx8IFwib3ZlcmxheVBhbmVcIjtcclxuXHJcbiAgICAvLyBmYWxsIGJhY2sgdG8gb3ZlcmxheVBhbmUgZm9yIGxlYWZsZXQgPCAxXHJcbiAgICBsZXQgcGFuZSA9IG1hcC5nZXRQYW5lcygpLm92ZXJsYXlQYW5lO1xyXG4gICAgaWYgKG1hcC5nZXRQYW5lKSB7XHJcbiAgICAgIC8vIGF0dGVtcHQgdG8gZ2V0IHBhbmUgZmlyc3QgdG8gcHJlc2VydmUgcGFyZW50IChjcmVhdGVQYW5lIHZvaWRzIHRoaXMpXHJcbiAgICAgIHBhbmUgPSBtYXAuZ2V0UGFuZSh0aGlzLl9wYW5lTmFtZSk7XHJcbiAgICAgIGlmICghcGFuZSkge1xyXG4gICAgICAgIHBhbmUgPSBtYXAuY3JlYXRlUGFuZSh0aGlzLl9wYW5lTmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZSBjYW52YXMsIGFkZCBvdmVybGF5IGNvbnRyb2xcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyID0gTC5jYW52YXNMYXllcigpLmRlbGVnYXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIuYWRkVG8obWFwKTtcclxuXHJcbiAgICB0aGlzLl9tYXAgPSBtYXA7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkFkZClcclxuICAgICAgdGhpcy5vcHRpb25zLm9uQWRkKCk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZShtYXA6IGFueSkge1xyXG4gICAgdGhpcy5kZXN0cm95V2luZCgpO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMub25SZW1vdmUpXHJcbiAgICAgIHRoaXMub3B0aW9ucy5vblJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgIHRoaXMub3B0aW9ucy5kYXRhID0gZGF0YTtcclxuXHJcbiAgICBpZiAodGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5fd2luZHkuc2V0RGF0YShkYXRhKTtcclxuICAgICAgdGhpcy5jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAoPGFueT50aGlzKS5maXJlKCdsb2FkJyk7XHJcbiAgfVxyXG5cclxuICBvbkRyYXdMYXllcigpIHtcclxuICAgIGlmICghdGhpcy5fd2luZHkpIHtcclxuICAgICAgdGhpcy5pbml0V2luZHkoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5vcHRpb25zLmRhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9kaXNwbGF5VGltZW91dCkgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3BsYXlUaW1lb3V0KTtcclxuXHJcbiAgICB0aGlzLl9kaXNwbGF5VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXJ0V2luZHkoKTtcclxuICAgIH0sIDE1MCk7IC8vIHNob3dpbmcgdmVsb2NpdHkgaXMgZGVsYXllZFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVFdmVudHMoYmluZDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIGlmICh0aGlzLl9tYXBFdmVudHMgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5fbWFwRXZlbnRzID0ge1xyXG4gICAgICAgICdkcmFnc3RhcnQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnZHJhZ2VuZCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAnem9vbXN0YXJ0JzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3pvb21lbmQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3Jlc2l6ZSc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJXaW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGUgaW4gdGhpcy5fbWFwRXZlbnRzKSB7XHJcbiAgICAgIGlmICh0aGlzLl9tYXBFdmVudHMuaGFzT3duUHJvcGVydHkoZSkpIHtcclxuICAgICAgICB0aGlzLl9tYXBbYmluZCA/ICdvbicgOiAnb2ZmJ10oZSwgdGhpcy5fbWFwRXZlbnRzW2VdKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRXaW5keSgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IFdpbmR5T3B0aW9ucyA9IHtcclxuICAgICAgLi4udGhpcy5vcHRpb25zLFxyXG4gICAgICBjYW52YXM6IHRoaXMuX2NhbnZhc0xheWVyLmdldENhbnZhcygpXHJcbiAgICB9XHJcbiAgICB0aGlzLl93aW5keSA9IG5ldyBXaW5keShvcHRpb25zKTtcclxuXHJcbiAgICAvLyBwcmVwYXJlIGNvbnRleHQgZ2xvYmFsIHZhciwgc3RhcnQgZHJhd2luZ1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhc0xheWVyLmdldENhbnZhcygpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLl9jYW52YXNMYXllci5nZXRDYW52YXMoKS5jbGFzc0xpc3QuYWRkKFwidmVsb2NpdHktb3ZlcmxheVwiKTtcclxuICAgIHRoaXMub25EcmF3TGF5ZXIoKTtcclxuXHJcbiAgICB0aGlzLnRvZ2dsZUV2ZW50cyh0cnVlKTtcclxuXHJcbiAgICB0aGlzLmluaXRNb3VzZUhhbmRsZXIoKTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGluaXRNb3VzZUhhbmRsZXIodW5iaW5kOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICh1bmJpbmQpIHtcclxuICAgICAgdGhpcy5fbWFwLnJlbW92ZUNvbnRyb2wodGhpcy5fbW91c2VDb250cm9sKTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9tb3VzZUNvbnRyb2wgJiYgdGhpcy5vcHRpb25zLmRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5kaXNwbGF5T3B0aW9ucyB8fCB7fTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sID0gTC5jb250cm9sLnZlbG9jaXR5KHtcclxuICAgICAgICAuLi5vcHRpb25zLFxyXG4gICAgICAgIHdhdmVNb2RlOiB0aGlzLm9wdGlvbnMud2F2ZU1vZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wuc2V0V2luZHkodGhpcy5fd2luZHkpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wuc2V0T3B0aW9ucyh0aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMpO1xyXG4gICAgICB0aGlzLl9tb3VzZUNvbnRyb2wuYWRkVG8odGhpcy5fbWFwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRXaW5keSgpIHtcclxuICAgIHZhciBib3VuZHMgPSB0aGlzLl9tYXAuZ2V0Qm91bmRzKCk7XHJcbiAgICB2YXIgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XHJcblxyXG4gICAgLy8gYm91bmRzLCB3aWR0aCwgaGVpZ2h0LCBleHRlbnRcclxuICAgIHRoaXMuX3dpbmR5LnN0YXJ0KFxyXG4gICAgICBuZXcgTGF5ZXIoXHJcbiAgICAgICAgbmV3IE1hcEJvdW5kKFxyXG4gICAgICAgICAgdGhpcy5fbWFwLFxyXG4gICAgICAgICAgYm91bmRzLmdldE5vcnRoRWFzdCgpLmxhdCxcclxuICAgICAgICAgIGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sbmcsXHJcbiAgICAgICAgICBib3VuZHMuZ2V0U291dGhXZXN0KCkubGF0LFxyXG4gICAgICAgICAgYm91bmRzLmdldFNvdXRoV2VzdCgpLmxuZ1xyXG4gICAgICAgICksXHJcbiAgICAgICAgbmV3IENhbnZhc0JvdW5kKDAsIDAsIHNpemUueCwgc2l6ZS55KVxyXG4gICAgICApXHJcblxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJBbmRSZXN0YXJ0KCkge1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB0aGlzLnN0YXJ0V2luZHkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJXaW5kKCkge1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dCkgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lXaW5kKCkge1xyXG4gICAgaWYgKHRoaXMuX2Rpc3BsYXlUaW1lb3V0KVxyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGlzcGxheVRpbWVvdXQpO1xyXG4gICAgaWYgKHRoaXMuX3dpbmR5KVxyXG4gICAgICB0aGlzLl93aW5keS5zdG9wKCk7XHJcbiAgICBpZiAodGhpcy5fY29udGV4dClcclxuICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgMzAwMCwgMzAwMCk7XHJcbiAgICBpZiAodGhpcy5fbW91c2VDb250cm9sKVxyXG4gICAgICB0aGlzLl9tYXAucmVtb3ZlQ29udHJvbCh0aGlzLl9tb3VzZUNvbnRyb2wpO1xyXG4gICAgdGhpcy5fbW91c2VDb250cm9sID0gbnVsbDtcclxuICAgIHRoaXMuX3dpbmR5ID0gbnVsbDtcclxuICAgIHRoaXMudG9nZ2xlRXZlbnRzKGZhbHNlKTtcclxuICAgIHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLl9jYW52YXNMYXllcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb2xvclNjYWxlIGZyb20gXCIuL2NvbG9yU2NhbGVcIjtcbmltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbkJ1Y2tldCB7XG4gICAgcHJpdmF0ZSBjb2xvclNjYWxlOiBDb2xvclNjYWxlO1xuICAgIHByaXZhdGUgYnVja2V0czogUGFydGljdWxlW11bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY29sb3JTY2FsZTogQ29sb3JTY2FsZSkge1xuICAgICAgICB0aGlzLmNvbG9yU2NhbGUgPSBjb2xvclNjYWxlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9yU2NhbGUuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1Y2tldHMucHVzaChbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5idWNrZXRzLmZvckVhY2goKHBhcnRpY3VsZVNldDogUGFydGljdWxlW10pID0+IHtcbiAgICAgICAgICAgIHBhcnRpY3VsZVNldC5zcGxpY2UoMCwgcGFydGljdWxlU2V0Lmxlbmd0aClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhZGQocDogUGFydGljdWxlLCB2OiBWZWN0b3IpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBwLndhdmVIZWlnaHQgfHwgcC5pbnRlbnNpdHk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jb2xvclNjYWxlLmdldENvbG9ySW5kZXgodmFyaWFibGUpXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5idWNrZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHAueHQgPSBwLnggKyB2LnU7XG4gICAgICAgIHAueXQgPSBwLnkgKyB2LnY7XG4gICAgICAgIHRoaXMuYnVja2V0c1tpbmRleF0ucHVzaChwKTtcbiAgICB9XG5cbiAgICBkcmF3KGNvbnRleHQyRDogYW55KSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKChidWNrZXQ6IFBhcnRpY3VsZVtdLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGlmIChidWNrZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQyRC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NhbGUuY29sb3JBdChpKTtcbiAgICAgICAgICAgICAgICBidWNrZXQuZm9yRWFjaChmdW5jdGlvbiAocGFydGljbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELm1vdmVUbyhwYXJ0aWNsZS54LCBwYXJ0aWNsZS55KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDJELmxpbmVUbyhwYXJ0aWNsZS54dCwgcGFydGljbGUueXQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS54ID0gcGFydGljbGUueHQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS55dDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEJ1Y2tldHMoKTogUGFydGljdWxlW11bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1Y2tldHM7XG4gICAgICB9XG4gICAgICBcbn0iLCJpbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0JvdW5kIHtcbiAgICBwdWJsaWMgeE1pbjogbnVtYmVyO1xuICAgIHB1YmxpYyB5TWluOiBudW1iZXI7XG4gICAgcHVibGljIHhNYXg6IG51bWJlcjtcbiAgICBwdWJsaWMgeU1heDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoeE1pbjogbnVtYmVyLCB5TWluOiBudW1iZXIsIHhNYXg6IG51bWJlciwgeU1heDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueE1pbiA9IHhNaW47XG4gICAgICAgIHRoaXMueU1pbiA9IHlNaW47XG4gICAgICAgIHRoaXMueE1heCA9IHhNYXg7XG4gICAgICAgIHRoaXMueU1heCA9IHlNYXg7XG4gICAgfVxuXG4gICAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnhNYXggLSB0aGlzLnhNaW47XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy55TWF4IC0gdGhpcy55TWluO1xuICAgIH1cblxuICAgIGdldFJhbmRvbVBhcnRpY3VsZShtYXhBZ2U6IG51bWJlcik6IFBhcnRpY3VsZSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMud2lkdGgpICsgdGhpcy54TWluKTtcbiAgICAgICAgY29uc3QgeSA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5oZWlnaHQpICsgdGhpcy55TWluKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJ0aWN1bGUoeCwgeSwgbWF4QWdlKTtcbiAgICB9XG5cbiAgICByZXNldFBhcnRpY3VsZShwOiBQYXJ0aWN1bGUpOiBQYXJ0aWN1bGUge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSArIHRoaXMueU1pbik7XG4gICAgICAgIHAucmVzZXQoeCwgeSk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JTY2FsZSB7XG4gICAgcHJpdmF0ZSBzY2FsZTogc3RyaW5nW10gPSBbXG4gICAgICAgIFwicmdiKDM2LDEwNCwgMTgwKVwiLFxuICAgICAgICBcInJnYig2MCwxNTcsIDE5NClcIixcbiAgICAgICAgXCJyZ2IoMTI4LDIwNSwxOTMgKVwiLFxuICAgICAgICBcInJnYigxNTEsMjE4LDE2OCApXCIsXG4gICAgICAgIFwicmdiKDE5OCwyMzEsMTgxKVwiLFxuICAgICAgICBcInJnYigyMzgsMjQ3LDIxNylcIixcbiAgICAgICAgXCJyZ2IoMjU1LDIzOCwxNTkpXCIsXG4gICAgICAgIFwicmdiKDI1MiwyMTcsMTI1KVwiLFxuICAgICAgICBcInJnYigyNTUsMTgyLDEwMClcIixcbiAgICAgICAgXCJyZ2IoMjUyLDE1MCw3NSlcIixcbiAgICAgICAgXCJyZ2IoMjUwLDExMiw1MilcIixcbiAgICAgICAgXCJyZ2IoMjQ1LDY0LDMyKVwiLFxuICAgICAgICBcInJnYigyMzcsNDUsMjgpXCIsXG4gICAgICAgIFwicmdiKDIyMCwyNCwzMilcIixcbiAgICAgICAgXCJyZ2IoMTgwLDAsMzUpXCJcbiAgICBdXG4gICAgcHJpdmF0ZSBtaW5WYWx1ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4VmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1pblZhbHVlOiBudW1iZXIsIG1heFZhbHVlOiBudW1iZXIsIHNjYWxlPzogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5zZXRNaW5NYXgobWluVmFsdWUsIG1heFZhbHVlKTtcbiAgICAgICAgaWYgKChzY2FsZSBpbnN0YW5jZW9mIEFycmF5KSAmJiBzY2FsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE1pbk1heChtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubWluVmFsdWUgPSBtaW5WYWx1ZTtcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1heFZhbHVlO1xuICAgIH1cblxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0Q29sb3JJbmRleCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHZhbHVlIDw9IHRoaXMubWluVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLm1heFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zY2FsZS5sZW5ndGggKiAodmFsdWUgLSB0aGlzLm1pblZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMuc2NhbGUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCk7XG4gICAgfVxuXG4gICAgY29sb3JBdChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVbaW5kZXhdO1xuICAgIH1cblxuICAgIGdldENvbG9yKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVt0aGlzLmdldENvbG9ySW5kZXgodmFsdWUpXTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgICBwcml2YXRlIGRhdGE6IFZlY3RvcltdO1xuICAgIHByaXZhdGUgz4YwOiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOuzA6IG51bWJlcjtcbiAgICBwcml2YXRlIM6Uzrs6IG51bWJlcjtcbiAgICBwcml2YXRlIM6Uz4Y6IG51bWJlcjtcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFZlY3RvcltdLCDPhjA6IG51bWJlciwgzrswOiBudW1iZXIsIM6Uz4Y6IG51bWJlciwgzpTOuzogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLs+GMCA9IM+GMDtcbiAgICAgICAgdGhpcy7OuzAgPSDOuzA7XG4gICAgICAgIHRoaXMuzpTOuyA9IM6Uzrs7XG4gICAgICAgIHRoaXMuzpTPhiA9IM6Uz4Y7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlUmFuZ2UoKTogbnVtYmVyW10ge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1pbiA9IHRoaXMuZGF0YVswXS5pbnRlbnNpdHk7XG4gICAgICAgIGxldCBtYXggPSB0aGlzLmRhdGFbMF0uaW50ZW5zaXR5O1xuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaCgodmFsdWU6IFZlY3RvcikgPT4ge1xuICAgICAgICAgICAgbWluID0gTWF0aC5taW4obWluLCB2YWx1ZS5pbnRlbnNpdHkpO1xuICAgICAgICAgICAgbWF4ID0gTWF0aC5tYXgobWF4LCB2YWx1ZS5pbnRlbnNpdHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFttaW4sIG1heF07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB2ZWN0b3IgYXQgYW55IHBvaW50XG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqL1xuICAgIGdldCjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgZs67ID0gdGhpcy5mbG9vck1vZCjOuyAtIHRoaXMuzrswLCAzNjApIC8gdGhpcy7OlM67OyAgLy8gY2FsY3VsYXRlIGxvbmdpdHVkZSBpbmRleCBpbiB3cmFwcGVkIHJhbmdlIFswLCAzNjApXG4gICAgICAgIGNvbnN0IGbPhiA9ICh0aGlzLs+GMCAtIM+GKSAvIHRoaXMuzpTPhjsgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxuXG4gICAgICAgIGNvbnN0IGnOuyA9IE1hdGguZmxvb3IoZs67KSAvLyBjb2wgblxuICAgICAgICBsZXQgas67ID0gac67ICsgMTsgICAgICAgIC8vIGNvbCBuKzFcbiAgICAgICAgaWYgKGrOuyA+PSB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICBqzrsgPSB0aGlzLs67MDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpz4YgPSBNYXRoLmZsb29yKGbPhikgLy8gbGluZSBtXG4gICAgICAgIGxldCBqz4YgPSBpz4YgKyAxOyAgICAgICAgLy8gbGluZSBtKzFcbiAgICAgICAgaWYgKGrPhiA+PSB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgas+GID0gac+GO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgds67ID0gZs67IC0gac67OyAgIC8vIGNvbCB2YXJpYXRpb24gWzAuLjFdXG4gICAgICAgIGNvbnN0IHbPhiA9IGbPhiAtIGnPhjsgICAvLyBsaW5lIHZhcmlhdGlvbiBbMC4uMV1cblxuICAgICAgICBpZiAoac67ID49IDAgJiYgac+GID49IDAgJiYgac67IDwgdGhpcy53aWR0aCAmJiBpz4YgPCB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgbGV0IGcwMCA9IHRoaXMuZGF0YVtpzrsgKyBpz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgIGxldCBnMTAgPSB0aGlzLmRhdGFbas67ICsgac+GICogdGhpcy53aWR0aF07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsdWUoZzAwKSAmJiB0aGlzLmlzVmFsdWUoZzEwKSkge1xuICAgICAgICAgICAgICAgIGxldCBnMDEgPSB0aGlzLmRhdGFbac67ICsgas+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICAgICAgbGV0IGcxMSA9IHRoaXMuZGF0YVtqzrsgKyBqz4YgKiB0aGlzLndpZHRoXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMSkgJiYgdGhpcy5pc1ZhbHVlKGcxMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJwb2xhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHbOuyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHbPhixcbiAgICAgICAgICAgICAgICAgICAgICAgIGcwMCwgLy9sMGMwXG4gICAgICAgICAgICAgICAgICAgICAgICBnMTAsIC8vbDBjMVxuICAgICAgICAgICAgICAgICAgICAgICAgZzAxLCAvL2wxYzBcbiAgICAgICAgICAgICAgICAgICAgICAgIGcxMSAgLy9sMWNsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoMCwgMCwgMCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlcnBvbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSB4IHZhcmlhdGlvbiBiZXR3ZWVuIGcwKiBhbmQgZzEqXG4gICAgICogQHBhcmFtIHkgdmFyaWF0aW9uIGJldHdlZW4gZyowIGRhbnMgZyoxXG4gICAgICogQHBhcmFtIGcwMCBwb2ludCBhdCBjb2xfMCBhbmQgbGluZV8wXG4gICAgICogQHBhcmFtIGcxMCBwb2ludCBhdCBjb2xfMSBhbmQgbGluZV8wXG4gICAgICogQHBhcmFtIGcwMSBwb2ludCBhdCBjb2xfMCBhbmQgbGluZV8xXG4gICAgICogQHBhcmFtIGcxMSBwb2ludCBhdCBjb2xfMSBhbmQgbGluZV8xXG4gICAgICogQHJldHVybiBpbnRlcnBvbGF0ZWQgdmVjdG9yXG4gICAgICovXG4gICAgaW50ZXJwb2xhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBWZWN0b3IsIGcxMDogVmVjdG9yLCBnMDE6IFZlY3RvciwgZzExOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgICAgICB2YXIgcnggPSAoMSAtIHgpO1xuICAgICAgICB2YXIgcnkgPSAoMSAtIHkpO1xuICAgICAgICB2YXIgYSA9IHJ4ICogcnksXG4gICAgICAgICAgICBiID0geCAqIHJ5LFxuICAgICAgICAgICAgYyA9IHJ4ICogeSxcbiAgICAgICAgICAgIGQgPSB4ICogeTtcbiAgICAgICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XG4gICAgICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xuICAgICAgICB2YXIgd2ggPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChnMDAud2F2ZUhlaWdodCAmJiBnMTAud2F2ZUhlaWdodCAmJiBnMDEud2F2ZUhlaWdodCAmJiBnMTEud2F2ZUhlaWdodCkge1xuICAgICAgICAgICAgd2ggPSBnMDAud2F2ZUhlaWdodCAqIGEgKyBnMTAud2F2ZUhlaWdodCAqIGIgKyBnMDEud2F2ZUhlaWdodCAqIGMgKyBnMTEud2F2ZUhlaWdodCAqIGQ7XG5cbiAgICAgICAgICAgIGlmICh3aCA8IDApIHtcbiAgICAgICAgICAgICAgICB3aCA9IDA7XG4gICAgICAgICAgICAgICAgdSA9IDA7XG4gICAgICAgICAgICAgICAgdiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodSwgdiwgd2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBtb2R1bG9cbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSByZXR1cm5zIHJlbWFpbmRlciBvZiBmbG9vcmVkIGRpdmlzaW9uLCBpLmUuLCBmbG9vcihhIC8gbikuIFVzZWZ1bCBmb3IgY29uc2lzdGVudCBtb2R1bG9cbiAgICAgKiAgICAgICAgICBvZiBuZWdhdGl2ZSBudW1iZXJzLiBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Nb2R1bG9fb3BlcmF0aW9uLlxuICAgICAqL1xuICAgIGZsb29yTW9kKGE6IG51bWJlciwgbjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGEgLSBuICogTWF0aC5mbG9vcihhIC8gbik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBpZiB4IGlzIGEgdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLlxuICAgICAqL1xuICAgIGlzVmFsdWUoeDogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggIT09IHVuZGVmaW5lZDtcbiAgICB9O1xufVxuIiwiaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XG5pbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4vdmVjdG9yXCI7XG5cbmRlY2xhcmUgdmFyIEw6IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbGF5ZXIge1xuXG4gICAgcHVibGljIG1hcEJvdW5kOiBNYXBCb3VuZDtcbiAgICBwdWJsaWMgY2FudmFzQm91bmQ6IENhbnZhc0JvdW5kO1xuXG4gICAgY29uc3RydWN0b3IobWFwQm91bmQ6IE1hcEJvdW5kLCBjYW52YXNCb3VuZDogQ2FudmFzQm91bmQpIHtcbiAgICAgICAgdGhpcy5jYW52YXNCb3VuZCA9IGNhbnZhc0JvdW5kO1xuICAgICAgICB0aGlzLm1hcEJvdW5kID0gbWFwQm91bmQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBnZW9jb29yZGluYXRlIGZyb20gY2FudmFzIHBvaW50XG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogcmV0dXJuIFtsbmcsIGxhdF1cbiAgICAqKi9cbiAgICBjYW52YXNUb01hcCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgbWFwTG9uRGVsdGEgPSB0aGlzLm1hcEJvdW5kLmVhc3QgLSB0aGlzLm1hcEJvdW5kLndlc3Q7XG4gICAgICAgIGNvbnN0IHdvcmxkTWFwUmFkaXVzID0gKHRoaXMuY2FudmFzQm91bmQud2lkdGggLyB0aGlzLnJhZDJkZWcobWFwTG9uRGVsdGEpKSAqIDM2MCAvICgyICogTWF0aC5QSSk7XG4gICAgICAgIGNvbnN0IG1hcE9mZnNldFkgPSAod29ybGRNYXBSYWRpdXMgLyAyICogTWF0aC5sb2coKDEgKyBNYXRoLnNpbih0aGlzLm1hcEJvdW5kLnNvdXRoKSkgLyAoMSAtIE1hdGguc2luKHRoaXMubWFwQm91bmQuc291dGgpKSkpO1xuICAgICAgICBjb25zdCBlcXVhdG9yWSA9IHRoaXMuY2FudmFzQm91bmQuaGVpZ2h0ICsgbWFwT2Zmc2V0WTtcbiAgICAgICAgY29uc3QgYSA9IChlcXVhdG9yWSAtIHkpIC8gd29ybGRNYXBSYWRpdXM7XG5cbiAgICAgICAgY29uc3Qgz4YgPSAxODAgLyBNYXRoLlBJICogKDIgKiBNYXRoLmF0YW4oTWF0aC5leHAoYSkpIC0gTWF0aC5QSSAvIDIpO1xuICAgICAgICBjb25zdCDOuyA9IHRoaXMucmFkMmRlZyh0aGlzLm1hcEJvdW5kLndlc3QpICsgeCAvIHRoaXMuY2FudmFzQm91bmQud2lkdGggKiB0aGlzLnJhZDJkZWcobWFwTG9uRGVsdGEpO1xuICAgICAgICByZXR1cm4gW867LCDPhl07XG4gICAgfTtcblxuICAgIG1lcmNZKM+GOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5sb2coTWF0aC50YW4oz4YgLyAyICsgTWF0aC5QSSAvIDQpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJvamVjdCBhIHBvaW50IG9uIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICogQHJldHVybiBbeCwgeV1cbiAgICAqKi9cbiAgICBtYXBUb0NhbnZhcyjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCB5bWluID0gdGhpcy5tZXJjWSh0aGlzLm1hcEJvdW5kLnNvdXRoKTtcbiAgICAgICAgY29uc3QgeW1heCA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5ub3J0aCk7XG4gICAgICAgIGNvbnN0IHhGYWN0b3IgPSB0aGlzLmNhbnZhc0JvdW5kLndpZHRoIC8gKHRoaXMubWFwQm91bmQuZWFzdCAtIHRoaXMubWFwQm91bmQud2VzdCk7XG4gICAgICAgIGNvbnN0IHlGYWN0b3IgPSB0aGlzLmNhbnZhc0JvdW5kLmhlaWdodCAvICh5bWF4IC0geW1pbik7XG5cbiAgICAgICAgbGV0IHkgPSB0aGlzLm1lcmNZKHRoaXMuZGVnMnJhZCjPhikpO1xuICAgICAgICBjb25zdCB4ID0gKHRoaXMuZGVnMnJhZCjOuykgLSB0aGlzLm1hcEJvdW5kLndlc3QpICogeEZhY3RvcjtcbiAgICAgICAgeSA9ICh5bWF4IC0geSkgKiB5RmFjdG9yO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH07XG5cbiAgICByYWQyZGVnKHJhZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG4gICAgfTtcblxuICAgIGRlZzJyYWQoZGVnOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRVhQRVJJTUVOVEFMIGZyb21cbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vb25hY2kvbGVhZmxldC12ZWxvY2l0eS9jb21taXQvYmQ0NWVhOWMzOTkwMjE4NTFlY2M5OGI5N2Q0YjEyNmI2NGFkY2M4ZlxuICAgICBjYW52YXNUb01hcCh4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgbGF0bG9uID0gdGhpcy5tYXBCb3VuZC5tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyhMLnBvaW50KHgseSkpO1xuICAgICAgICByZXR1cm4gW2xhdGxvbi5sbmcsIGxhdGxvbi5sYXRdO1xuICAgIH07XG4gICAgXG4gICAgbWFwVG9DYW52YXMobGF0OiBudW1iZXIsIGxvbjogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgICAgICBjb25zdCB4eSA9IHRoaXMubWFwQm91bmQubWFwLmxhdExuZ1RvQ29udGFpbmVyUG9pbnQoTC5sYXRMbmcobGF0LGxvbikpO1xuICAgICAgICByZXR1cm4gW3h5LngsIHh5LnldO1xuICAgIH1cbiAgICAqKi9cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcmV0dXJuIFtdXG4gICAgICovXG4gICAgZGlzdG9ydGlvbijOuzogbnVtYmVyLCDPhjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3Qgz4QgPSAyICogTWF0aC5QSTtcbiAgICAgICAgLy8gICAgdmFyIEggPSBNYXRoLnBvdygxMCwgLTUuMik7IC8vIDAuMDAwMDA2MzA5NTczNDQ0ODAxOTNcbiAgICAgICAgLy8gICAgdmFyIEggPSAwLjAwMDAzNjA7ICAgICAgICAgIC8vIDAuMDAwMDM2MMKwz4Ygfj0gNG0gIChmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW1iZWNjL2VhcnRoL2Jsb2IvbWFzdGVyL3B1YmxpYy9saWJzL2VhcnRoLzEuMC4wL21pY3JvLmpzI0wxMylcbiAgICAgICAgLy9Ac2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW53aWxkL2xlYWZsZXQtdmVsb2NpdHkvaXNzdWVzLzE1I2lzc3VlY29tbWVudC0zNDUyNjA3NjhcbiAgICAgICAgY29uc3QgSCA9IDU7XG4gICAgICAgIGNvbnN0IGjOuyA9IM67IDwgMCA/IEggOiAtSDtcbiAgICAgICAgY29uc3QgaM+GID0gz4YgPCAwID8gSCA6IC1IO1xuXG4gICAgICAgIC8vIFRPRE86IGZpbmlzaFxuICAgICAgICBjb25zdCBwzrsgPSB0aGlzLm1hcFRvQ2FudmFzKM67ICsgaM67LCDPhik7XG4gICAgICAgIGNvbnN0IHDPhiA9IHRoaXMubWFwVG9DYW52YXMozrssIM+GICsgaM+GKTtcblxuICAgICAgICAvLyBNZXJpZGlhbiBzY2FsZSBmYWN0b3IgKHNlZSBTbnlkZXIsIGVxdWF0aW9uIDQtMyksIHdoZXJlIFIgPSAxLiBUaGlzIGhhbmRsZXMgaXNzdWUgd2hlcmUgbGVuZ3RoIG9mIDHCuiDOu1xuICAgICAgICAvLyBjaGFuZ2VzIGRlcGVuZGluZyBvbiDPhi4gV2l0aG91dCB0aGlzLCB0aGVyZSBpcyBhIHBpbmNoaW5nIGVmZmVjdCBhdCB0aGUgcG9sZXMuXG4gICAgICAgIGNvbnN0IGsgPSBNYXRoLmNvcyjPhiAvIDM2MCAqIM+EKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIChwzrtbMF0gLSB4KSAvIGjOuyAvIGssXG4gICAgICAgICAgICAocM67WzFdIC0geSkgLyBozrsgLyBrLFxuICAgICAgICAgICAgKHDPhlswXSAtIHgpIC8gaM+GLFxuICAgICAgICAgICAgKHDPhlsxXSAtIHkpIC8gaM+GXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGRpc3RvcnRpb24gb2YgdGhlIHdpbmQgdmVjdG9yIGNhdXNlZCBieSB0aGUgc2hhcGUgb2YgdGhlIHByb2plY3Rpb24gYXQgcG9pbnQgKHgsIHkpLiBUaGUgd2luZFxuICAgICAqIHZlY3RvciBpcyBtb2RpZmllZCBpbiBwbGFjZSBhbmQgcmV0dXJuZWQgYnkgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gzrsgXG4gICAgICogQHBhcmFtIM+GIFxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIEBwYXJhbSBzY2FsZSBzY2FsZSBmYWN0b3JcbiAgICAgKiBAcGFyYW0gd2luZCBbdSwgdl1cbiAgICAgKiBAcmV0dXJuIFtdXG4gICAgICovXG4gICAgZGlzdG9ydCjOuzogbnVtYmVyLCDPhjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgd2luZDogVmVjdG9yKTogVmVjdG9yIHtcbiAgICAgICAgY29uc3QgdSA9IHdpbmQudSAqIHNjYWxlO1xuICAgICAgICBjb25zdCB2ID0gd2luZC52ICogc2NhbGU7XG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLmRpc3RvcnRpb24ozrssIM+GLCB4LCB5KTtcblxuICAgICAgICAvLyBTY2FsZSBkaXN0b3J0aW9uIHZlY3RvcnMgYnkgdSBhbmQgdiwgdGhlbiBhZGQuXG4gICAgICAgIHdpbmQudSA9IGRbMF0gKiB1ICsgZFsyXSAqIHY7XG4gICAgICAgIHdpbmQudiA9IGRbMV0gKiB1ICsgZFszXSAqIHY7XG4gICAgICAgIHJldHVybiB3aW5kO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3VuZCB7XG4gICAgcHVibGljIF9tYXA6IEwuTWFwO1xuICAgIHB1YmxpYyBzb3V0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBub3J0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBlYXN0OiBudW1iZXI7XG4gICAgcHVibGljIHdlc3Q6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1hcDogTC5NYXAsIG5vcnRoOiBudW1iZXIsIGVhc3Q6IG51bWJlciwgc291dGg6IG51bWJlciwgd2VzdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5ub3J0aCA9IG5vcnRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5lYXN0ID0gZWFzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuc291dGggPSBzb3V0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMud2VzdCA9IHdlc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDcyMCArIHRoaXMuZWFzdCAtIHRoaXMud2VzdCkgJSAzNjA7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDM2MCArIHRoaXMubm9ydGggLSB0aGlzLnNvdXRoKSAlIDE4MDtcbiAgICB9XG5cbiAgICBnZXQgbWFwKCk6IEwuTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljdWxlIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIGFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtYXhBZ2U6IG51bWJlcjtcbiAgICBwdWJsaWMgeHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgeXQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaW50ZW5zaXR5OiBudW1iZXI7XG4gICAgcHVibGljIHdhdmVIZWlnaHQ/OiBudW1iZXI7IFxuICBcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbWF4QWdlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgICAgdGhpcy5hZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhBZ2UpO1xuICAgICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuICBcbiAgICByZXNldCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgdGhpcy54ID0geDtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLmFnZSA9IDA7XG4gICAgfVxuICBcbiAgICBnZXQgaXNEZWFkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuYWdlID4gdGhpcy5tYXhBZ2U7XG4gICAgfVxuICBcbiAgICBncm93KCkge1xuICAgICAgdGhpcy5hZ2UrKztcbiAgICB9XG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgICBwdWJsaWMgdTogbnVtYmVyO1xuICAgIHB1YmxpYyB2OiBudW1iZXI7XG4gICAgcHVibGljIHdhdmVIZWlnaHQ/OiBudW1iZXI7IFxuICBcbiAgICBjb25zdHJ1Y3Rvcih1PzogbnVtYmVyLCB2PzogbnVtYmVyLCB3YXZlSGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgICB0aGlzLnUgPSB1IHx8IDA7XG4gICAgICB0aGlzLnYgPSB2IHx8IDA7XG4gICAgICB0aGlzLndhdmVIZWlnaHQgPSB3YXZlSGVpZ2h0O1xuICAgIH1cbiAgXG4gICAgZ2V0IGludGVuc2l0eSgpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy51ICogdGhpcy51ICsgdGhpcy52ICogdGhpcy52KTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xyXG5pbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XHJcbmltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkJ1Y2tldCBmcm9tIFwiLi9hbmltYXRpb25CdWNrZXRcIjtcclxuaW1wb3J0IExheWVyIGZyb20gXCIuL2xheWVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmR5T3B0aW9ucyB7XHJcbiAgY2FudmFzOiBhbnk7XHJcbiAgZGF0YTogYW55O1xyXG4gIGNvbG9yU2NhbGU6IHN0cmluZ1tdO1xyXG4gIG1heFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgbWluVmVsb2NpdHk6IG51bWJlcjtcclxuICB2ZWxvY2l0eVNjYWxlOiBudW1iZXI7XHJcbiAgcGFydGljbGVBZ2U6IG51bWJlcjtcclxuICBwYXJ0aWNsZU11bHRpcGxpZXI6IG51bWJlcjtcclxuICBwYXJ0aWNsZWxpbmVXaWR0aDogbnVtYmVyO1xyXG4gIGZyYW1lUmF0ZTogbnVtYmVyO1xyXG4gIG9wYWNpdHk6IG51bWJlcjtcclxuICB3YXZlTW9kZTogYm9vbGVhbjtcclxuICB3YXZlc1BhcnRpY2xlc1NlcGFyYXRpb246IG51bWJlcjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5keSB7XHJcblxyXG4gIHByaXZhdGUgZ3JpZDogYW55O1xyXG4gIHByaXZhdGUgzrswOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDPhjA6IG51bWJlcjtcclxuICBwcml2YXRlIM6Uzrs6IG51bWJlcjtcclxuICBwcml2YXRlIM6Uz4Y6IG51bWJlcjtcclxuICBwcml2YXRlIG5pOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBuajogbnVtYmVyO1xyXG4gIHByaXZhdGUgY2FudmFzOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgY29sb3JTY2FsZTogQ29sb3JTY2FsZTtcclxuICBwcml2YXRlIHZlbG9jaXR5U2NhbGU6IG51bWJlcjtcclxuICBwcml2YXRlIHBhcnRpY2xlTXVsdGlwbGllciA9IDEgLyAzMDA7XHJcbiAgcHJpdmF0ZSBwYXJ0aWNsZUFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljbGVMaW5lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGF1dG9Db2xvclJhbmdlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBvcGFjaXR5OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3YXZlTW9kZTogYm9vbGVhbjtcclxuICBwcml2YXRlIHdhdmVzUGFydGljbGVzU2VwYXJhdGlvbjogbnVtYmVyOyAvLyBzZXBhcmF0aW9uIG9mIHdhdmUgcGFydGljbGVzXHJcblxyXG4gIHByaXZhdGUgbGF5ZXI6IExheWVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlczogUGFydGljdWxlW10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkJ1Y2tldDogQW5pbWF0aW9uQnVja2V0O1xyXG4gIHByaXZhdGUgY29udGV4dDJEOiBhbnk7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25Mb29wOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgZnJhbWVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVuID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFdpbmR5T3B0aW9ucykge1xyXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcclxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBXaW5keU9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zLm1pblZlbG9jaXR5ID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5tYXhWZWxvY2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUob3B0aW9ucy5taW5WZWxvY2l0eSB8fCAwLCBvcHRpb25zLm1heFZlbG9jaXR5IHx8IDEwLCBvcHRpb25zLmNvbG9yU2NhbGUpO1xyXG4gICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gb3B0aW9ucy52ZWxvY2l0eVNjYWxlIHx8IDAuMDE7XHJcbiAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcclxuICAgIHRoaXMub3BhY2l0eSA9ICtvcHRpb25zLm9wYWNpdHkgfHwgMC45N1xyXG5cclxuICAgIHRoaXMucGFydGljbGVNdWx0aXBsaWVyID0gb3B0aW9ucy5wYXJ0aWNsZU11bHRpcGxpZXIgfHwgMSAvIDMwMDtcclxuICAgIHRoaXMucGFydGljbGVMaW5lV2lkdGggPSBvcHRpb25zLnBhcnRpY2xlbGluZVdpZHRoIHx8IDE7XHJcbiAgICBjb25zdCBmcmFtZVJhdGUgPSBvcHRpb25zLmZyYW1lUmF0ZSB8fCAxNTtcclxuICAgIHRoaXMuZnJhbWVUaW1lID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy53YXZlTW9kZSkge1xyXG4gICAgICB0aGlzLndhdmVNb2RlID0gb3B0aW9ucy53YXZlTW9kZTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZUFnZSA9IG9wdGlvbnMucGFydGljbGVBZ2UgIHx8IDIwMDtcclxuICAgICAgdGhpcy5wYXJ0aWNsZU11bHRpcGxpZXIgPSBvcHRpb25zLnBhcnRpY2xlTXVsdGlwbGllciB8fCAxIC8gNzAwMDtcclxuICAgICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gMC4wMDQ1O1xyXG4gICAgICB0aGlzLndhdmVzUGFydGljbGVzU2VwYXJhdGlvbiA9IG9wdGlvbnMud2F2ZXNQYXJ0aWNsZXNTZXBhcmF0aW9uIHx8IDMuNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFydGljdWxlQ291bnQoKSB7XHJcbiAgICBjb25zdCBwYXJ0aWN1bGVSZWR1Y3Rpb24gPSAoKC9hbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGV8aXBhZHxpcGhvbmV8aXBvZHxvcGVyYSBtaW5pfHdlYm9zL2kpLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gKE1hdGgucG93KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxIC8gMykgfHwgMS42KSA6IDE7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoICogdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHQgKiB0aGlzLnBhcnRpY2xlTXVsdGlwbGllcikgKiBwYXJ0aWN1bGVSZWR1Y3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGRhdGFcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IGFueVtdKSB7XHJcbiAgICBsZXQgdURhdGE6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgdkRhdGE6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgd2F2ZUhlaWdodDogYW55ID0gbnVsbDtcclxuICAgIGNvbnN0IGdyaWQ6IFZlY3RvcltdID0gW107XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgICAgc3dpdGNoIChgJHtyZWNvcmQuaGVhZGVyLnBhcmFtZXRlckNhdGVnb3J5fSwke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyTnVtYmVyfWApIHtcclxuICAgICAgICBjYXNlIFwiMSwyXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsMlwiOlxyXG4gICAgICAgICAgdURhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMSwzXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsM1wiOlxyXG4gICAgICAgICAgdkRhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgd2F2ZUhlaWdodCA9IHJlY29yZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1RGF0YSB8fCAhdkRhdGEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiRGF0YSBhcmUgbm90IGNvcnJlY3QgZm9ybWF0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdURhdGEuZGF0YS5mb3JFYWNoKCh1OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qgd2ggPSB3YXZlSGVpZ2h0ICE9PSBudWxsID8gd2F2ZUhlaWdodC5kYXRhW2luZGV4XSA6IHVuZGVmaW5lZDtcclxuICAgICAgZ3JpZC5wdXNoKG5ldyBWZWN0b3IodSwgdkRhdGEuZGF0YVtpbmRleF0sIHdoKSk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZChcclxuICAgICAgZ3JpZCxcclxuICAgICAgdURhdGEuaGVhZGVyLmxhMSxcclxuICAgICAgdURhdGEuaGVhZGVyLmxvMSxcclxuICAgICAgdURhdGEuaGVhZGVyLmR5LFxyXG4gICAgICB1RGF0YS5oZWFkZXIuZHgsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5ueSxcclxuICAgICAgdURhdGEuaGVhZGVyLm54XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuzrswID0gdURhdGEuaGVhZGVyLmxvMTtcclxuICAgIHRoaXMuz4YwID0gdURhdGEuaGVhZGVyLmxhMTtcclxuXHJcbiAgICB0aGlzLs6UzrsgPSB1RGF0YS5oZWFkZXIuZHg7XHJcbiAgICB0aGlzLs6Uz4YgPSB1RGF0YS5oZWFkZXIuZHlcclxuXHJcbiAgICB0aGlzLm5pID0gdURhdGEuaGVhZGVyLm54O1xyXG4gICAgdGhpcy5uaiA9IHVEYXRhLmhlYWRlci5ueTsgLy8gbnVtYmVyIG9mIGdyaWQgcG9pbnRzIFctRSBhbmQgTi1TIChlLmcuLCAxNDQgeCA3MylcclxuXHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICB2YXIgaXNDb250aW51b3VzID0gTWF0aC5mbG9vcih0aGlzLm5pICogdGhpcy7OlM67KSA+PSAzNjA7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLm5qOyBqKyspIHtcclxuICAgICAgdmFyIHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmk7IGkrKywgcCsrKSB7XHJcbiAgICAgICAgcm93W2ldID0gdGhpcy5ncmlkLmRhdGFbcF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzQ29udGludW91cykge1xyXG4gICAgICAgIC8vIEZvciB3cmFwcGVkIGdyaWRzLCBkdXBsaWNhdGUgZmlyc3QgY29sdW1uIGFzIGxhc3QgY29sdW1uIHRvIHNpbXBsaWZ5IGludGVycG9sYXRpb24gbG9naWNcclxuICAgICAgICByb3cucHVzaChyb3dbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ3JpZFtqXSA9IHJvdztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ29sb3JSYW5nZSkge1xyXG4gICAgICBjb25zdCBtaW5NYXggPSB0aGlzLmdyaWQudmFsdWVSYW5nZTtcclxuICAgICAgdGhpcy5jb2xvclNjYWxlLnNldE1pbk1heChtaW5NYXhbMF0sIG1pbk1heFsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBHZXQgaW50ZXJwb2xhdGVkIGdyaWQgdmFsdWUgZnJvbSBMb24vTGF0IHBvc2l0aW9uXHJcbiogQHBhcmFtIM67IHtGbG9hdH0gTG9uZ2l0dWRlXHJcbiogQHBhcmFtIM+GIHtGbG9hdH0gTGF0aXR1ZGVcclxuKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4qL1xyXG4gIHB1YmxpYyBpbnRlcnBvbGF0ZSjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogYW55IHtcclxuICAgIGlmICghdGhpcy5ncmlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7IC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxyXG4gICAgdmFyIGogPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7IC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxyXG5cclxuICAgIHZhciBmaSA9IE1hdGguZmxvb3IoaSk7XHJcbiAgICB2YXIgY2kgPSBmaSArIDE7XHJcbiAgICB2YXIgZmogPSBNYXRoLmZsb29yKGopO1xyXG4gICAgdmFyIGNqID0gZmogKyAxO1xyXG4gICAgdmFyIHJvdyA9IHRoaXMuZ3JpZFtmal07Ly9Eb250IGtub3cgd2h5IGhlIGRvc2VudCBmb3VuZCBhbnkgcm93IEVSUlJST1JcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdmFyIGcwMCA9IHJvd1tmaV07XHJcbiAgICAgIHZhciBnMTAgPSByb3dbY2ldO1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkgJiYgKHJvdyA9IHRoaXMuZ3JpZFtjal0pKSB7XHJcbiAgICAgICAgdmFyIGcwMSA9IHJvd1tmaV07XHJcbiAgICAgICAgdmFyIGcxMSA9IHJvd1tjaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XHJcbiAgICAgICAgICAvLyBBbGwgZm91ciBwb2ludHMgZm91bmQsIHNvIGludGVycG9sYXRlIHRoZSB2YWx1ZS5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoaSAtIGZpLCBqIC0gZmosIGcwMCwgZzEwLCBnMDEsIGcxMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhcnQobGF5ZXI6IExheWVyKSB7XHJcbiAgICB0aGlzLmNvbnRleHQyRCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHRoaXMuY29udGV4dDJELmxpbmVXaWR0aCA9IHRoaXMucGFydGljbGVMaW5lV2lkdGg7XHJcbiAgICBjb25zdCBmYWRlT3BhY2l0eSA9IHRoaXMud2F2ZU1vZGUgPyAwLjc1IDogdGhpcy5vcGFjaXR5O1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHtmYWRlT3BhY2l0eX0pYDtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gdGhpcy53YXZlTW9kZSA/IDAuMiA6IDAuNjtcclxuXHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldCA9IG5ldyBBbmltYXRpb25CdWNrZXQodGhpcy5jb2xvclNjYWxlKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuc3BsaWNlKDAsIHRoaXMucGFydGljdWxlcy5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY3VsZUNvdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5wYXJ0aWN1bGVzLnB1c2godGhpcy5sYXllci5jYW52YXNCb3VuZC5nZXRSYW5kb21QYXJ0aWN1bGUodGhpcy5wYXJ0aWNsZUFnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGhlbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHRoaXMuZnJhbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmNsZWFyKCk7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb25Mb29wKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkxvb3ApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmbG9vck1vZChhOiBudW1iZXIsIG46IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGEgLSBuICogTWF0aC5mbG9vcihhIC8gbik7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbHVlKHg6IGFueSkge1xyXG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgeCAhPT0gdW5kZWZpbmVkO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYmlsaW5lYXJJbnRlcnBvbGF0ZVZlY3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgZzAwOiBhbnksIGcxMDogYW55LCBnMDE6IGFueSwgZzExOiBhbnkpIHtcclxuICAgIHZhciByeCA9ICgxIC0geCk7XHJcbiAgICB2YXIgcnkgPSAoMSAtIHkpO1xyXG4gICAgdmFyIGEgPSByeCAqIHJ5LCBiID0geCAqIHJ5LCBjID0gcnggKiB5LCBkID0geCAqIHk7XHJcbiAgICB2YXIgdSA9IGcwMC51ICogYSArIGcxMC51ICogYiArIGcwMS51ICogYyArIGcxMS51ICogZDtcclxuICAgIHZhciB2ID0gZzAwLnYgKiBhICsgZzEwLnYgKiBiICsgZzAxLnYgKiBjICsgZzExLnYgKiBkO1xyXG4gICAgdmFyIHdoID0gZzAwLndhdmVIZWlnaHQgKiBhICsgZzEwLndhdmVIZWlnaHQgKiBiICsgZzAxLndhdmVIZWlnaHQgKiBjICsgZzExLndhdmVIZWlnaHQgKiBkO1xyXG4gICAgaWYgKHRoaXMud2F2ZU1vZGUpIHtcclxuICAgICAgcmV0dXJuIFt1LCB2LCB3aF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3UsIHYsIE1hdGguc3FydCh1ICogdSArIHYgKiB2KV07XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRQYXJ0aWN1bGVXaW5kKHA6IFBhcnRpY3VsZSk6IFZlY3RvciB7XHJcbiAgICBjb25zdCBsbmdMYXQgPSB0aGlzLmxheWVyLmNhbnZhc1RvTWFwKHAueCwgcC55KTtcclxuICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdyaWQuZ2V0KGxuZ0xhdFswXSwgbG5nTGF0WzFdKTtcclxuICAgIHAuaW50ZW5zaXR5ID0gd2luZC5pbnRlbnNpdHk7XHJcbiAgICBwLndhdmVIZWlnaHQgPSB3aW5kLndhdmVIZWlnaHQ7XHJcbiAgICBjb25zdCBtYXBBcmVhID0gdGhpcy5sYXllci5tYXBCb3VuZC5oZWlnaHQgKiB0aGlzLmxheWVyLm1hcEJvdW5kLndpZHRoO1xyXG4gICAgdmFyIHZlbG9jaXR5U2NhbGUgPSB0aGlzLnZlbG9jaXR5U2NhbGUgKiBNYXRoLnBvdyhtYXBBcmVhLCAwLjQpO1xyXG4gICAgdGhpcy5sYXllci5kaXN0b3J0KGxuZ0xhdFswXSwgbG5nTGF0WzFdLCBwLngsIHAueSwgdmVsb2NpdHlTY2FsZSwgd2luZCk7XHJcbiAgICByZXR1cm4gd2luZDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBmcmFtZSgpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9uTG9vcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZnJhbWUoKVxyXG4gICAgfSk7XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZGVsdGEgPSBub3cgLSB0aGlzLnRoZW47XHJcbiAgICBpZiAoZGVsdGEgPiB0aGlzLmZyYW1lVGltZSkge1xyXG4gICAgICB0aGlzLnRoZW4gPSBub3cgLSAoZGVsdGEgJSB0aGlzLmZyYW1lVGltZSk7XHJcbiAgICAgIHRoaXMuZXZvbHZlKCk7XHJcbiAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBldm9sdmUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5jbGVhcigpO1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLmZvckVhY2goKHA6IFBhcnRpY3VsZSkgPT4ge1xyXG4gICAgICBwLmdyb3coKTtcclxuICAgICAgaWYgKHAuaXNEZWFkKSB7XHJcbiAgICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5yZXNldFBhcnRpY3VsZShwKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3aW5kID0gdGhpcy5nZXRQYXJ0aWN1bGVXaW5kKHApO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5hZGQocCwgd2luZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhdygpIHtcclxuICAgIGlmICh0aGlzLndhdmVNb2RlKSB7XHJcbiAgICAgIHRoaXMuZHJhd1dhdmVzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRyYXdXaW5kKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdXaW5kKCkge1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJkZXN0aW5hdGlvbi1pblwiO1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZmlsbFJlY3QoXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueE1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC55TWluLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmhlaWdodFxyXG4gICAgKTtcclxuICAgIC8vIEZhZGUgZXhpc3RpbmcgcGFydGljbGUgdHJhaWxzLlxyXG4gICAgdGhpcy5jb250ZXh0MkQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJsaWdodGVyXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eSA9PT0gMCA/IDAgOiB0aGlzLm9wYWNpdHkgKiAwLjk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZHJhdyh0aGlzLmNvbnRleHQyRCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZlcnRpY2FsT2Zmc2V0KG9mZnNldDogbnVtYmVyLCBtYXhPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gNyAqIE1hdGguY29zKChNYXRoLmFicyhvZmZzZXQpIC8gbWF4T2Zmc2V0KSAqIChNYXRoLlBJIC8gMikpO1xyXG4gIH1cclxuICBcclxuICBwcml2YXRlIGdlbmVyYXRlT2Zmc2V0cyhjb3VudDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgbGV0IG51bURpdmlzaW9ucyA9IChjb3VudCAtIDEpIC8gMjtcclxuICAgICAgbGV0IG9mZnNldHMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IC1udW1EaXZpc2lvbnM7IGkgPD0gbnVtRGl2aXNpb25zOyBpKyspIHtcclxuICAgICAgICBvZmZzZXRzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG9mZnNldHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVdhdmVQYXJ0aWNsZXMod2F2ZUhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMC41KSByZXR1cm4gNDtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMC43KSByZXR1cm4gNTtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMSkgcmV0dXJuIDY7XHJcbiAgICBpZiAod2F2ZUhlaWdodCA8IDEuNSkgcmV0dXJuIDc7XHJcbiAgICBpZiAod2F2ZUhlaWdodCA8IDIpIHJldHVybiA4O1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAyLjUpIHJldHVybiA5O1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAzKSByZXR1cm4gMTA7XHJcbiAgICBpZiAod2F2ZUhlaWdodCA8IDQpIHJldHVybiAxMDtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMTApIHJldHVybiAxMTtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMjApIHJldHVybiAxMjtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMzApIHJldHVybiAxMztcclxuICAgIHJldHVybiAxNDtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gIHByaXZhdGUgZHJhd1dhdmVzKCkge1xyXG4gICAgY29uc3QgZyA9IHRoaXMuY29udGV4dDJEO1xyXG4gICAgZy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWluXCI7XHJcbiAgICBnLmZpbGxSZWN0KFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnhNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueU1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC53aWR0aCxcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHRcclxuICAgICk7XHJcbiAgICBnLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xyXG4gICAgZy5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICBcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmdldEJ1Y2tldHMoKS5mb3JFYWNoKChidWNrZXQ6IFBhcnRpY3VsZVtdLCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgaWYgKGJ1Y2tldC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZy5iZWdpblBhdGgoKTtcclxuICAgICAgICBnLnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjYWxlLmNvbG9yQXQoaSk7XHJcbiAgXHJcbiAgICAgICAgYnVja2V0LmZvckVhY2goKHBhcnRpY2xlOiBQYXJ0aWN1bGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGR4ID0gcGFydGljbGUueHQgLSBwYXJ0aWNsZS54O1xyXG4gICAgICAgICAgY29uc3QgZHkgPSBwYXJ0aWNsZS55dCAtIHBhcnRpY2xlLnk7XHJcbiAgICAgICAgICBjb25zdCBtYWcgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gIFxyXG4gICAgICAgICAgY29uc3QgcGVycFggPSBtYWcgPyAtZHkgLyBtYWcgOiAwO1xyXG4gICAgICAgICAgY29uc3QgcGVycFkgPSBtYWcgPyBkeCAvIG1hZyA6IDA7XHJcbiAgICAgICAgICBjb25zdCBub3JtWCA9IG1hZyA/IGR4IC8gbWFnIDogMDtcclxuICAgICAgICAgIGNvbnN0IG5vcm1ZID0gbWFnID8gZHkgLyBtYWcgOiAwO1xyXG4gIFxyXG4gICAgICAgICAgY29uc3Qgd2F2ZUhlaWdodCA9ICBwYXJ0aWNsZS53YXZlSGVpZ2h0IHx8IDE7XHJcbiAgICAgICAgICBjb25zdCBudW1XYXZlUGFydGljbGVzID0gdGhpcy5jYWxjdWxhdGVXYXZlUGFydGljbGVzKHdhdmVIZWlnaHQpO1xyXG4gICAgICAgICAgY29uc3Qgb2Zmc2V0cyA9IHRoaXMuZ2VuZXJhdGVPZmZzZXRzKG51bVdhdmVQYXJ0aWNsZXMpO1xyXG4gICAgICAgICAgY29uc3QgU0VQQVJBVElPTiA9IHRoaXMud2F2ZXNQYXJ0aWNsZXNTZXBhcmF0aW9uO1xyXG4gICAgICAgICAgY29uc3QgbWF4T2Zmc2V0ID0gMy41O1xyXG4gIFxyXG4gICAgICAgICAgb2Zmc2V0cy5mb3JFYWNoKChvZmZzZXQpID0+IHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFggPSBwZXJwWCAqIG9mZnNldCAqIFNFUEFSQVRJT047XHJcbiAgICAgICAgICAgICAgY29uc3Qgc2hpZnRZID0gcGVycFkgKiBvZmZzZXQgKiBTRVBBUkFUSU9OO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHZPZmYgPSB0aGlzLnZlcnRpY2FsT2Zmc2V0KG9mZnNldCwgbWF4T2Zmc2V0KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCBzdGFydFggPSBwYXJ0aWNsZS54ICsgc2hpZnRYICsgbm9ybVggKiB2T2ZmO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHBhcnRpY2xlLnkgKyBzaGlmdFkgKyBub3JtWSAqIHZPZmY7XHJcbiAgICAgICAgICAgICAgY29uc3QgZW5kWCA9IHBhcnRpY2xlLnh0ICsgc2hpZnRYICsgbm9ybVggKiB2T2ZmO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVuZFkgPSBwYXJ0aWNsZS55dCArIHNoaWZ0WSArIG5vcm1ZICogdk9mZjtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBnLm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XHJcbiAgICAgICAgICAgICAgZy5saW5lVG8oZW5kWCwgZW5kWSk7XHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgIHBhcnRpY2xlLnggPSBwYXJ0aWNsZS54dDtcclxuICAgICAgICAgIHBhcnRpY2xlLnkgPSBwYXJ0aWNsZS55dDtcclxuICAgICAgICB9KTtcclxuICBcclxuICAgICAgICBnLnN0cm9rZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xyXG5pbXBvcnQgV2luZHkgZnJvbSBcIi4vd2luZHlcIjtcclxuaW1wb3J0IENhbnZhc0xheWVyIGZyb20gXCIuL0wuQ2FudmFzTGF5ZXJcIjtcclxuaW1wb3J0IFZlbG9jaXR5TGF5ZXIgZnJvbSBcIi4vTC5WZWxvY2l0eUxheWVyXCI7XHJcbmltcG9ydCBDb250cm9sVmVsb2NpdHkgZnJvbSAnLi9MLkNvbnRyb2wuVmVsb2NpdHknO1xyXG5cclxuKDxhbnk+d2luZG93KS5DYW52YXNCb3VuZCA9IENhbnZhc0JvdW5kO1xyXG4oPGFueT53aW5kb3cpLk1hcEJvdW5kID0gTWFwQm91bmQ7XHJcbig8YW55PndpbmRvdykuV2luZHkgPSBXaW5keTtcclxuXHJcbmRlY2xhcmUgdmFyIEw6IGFueTtcclxuXHJcbkwuQ2FudmFzTGF5ZXIgPSAoTC5MYXllciA/IEwuTGF5ZXIgOiBMLkNsYXNzKS5leHRlbmQobmV3IENhbnZhc0xheWVyKCkpO1xyXG5MLmNhbnZhc0xheWVyID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBuZXcgTC5DYW52YXNMYXllcigpO1xyXG59O1xyXG5cclxuTC5Db250cm9sLlZlbG9jaXR5ID0gKEwuQ29udHJvbCkuZXh0ZW5kKG5ldyBDb250cm9sVmVsb2NpdHkpO1xyXG5MLmNvbnRyb2wudmVsb2NpdHkgPSBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XHJcblx0cmV0dXJuIG5ldyBMLkNvbnRyb2wuVmVsb2NpdHkob3B0aW9ucyk7XHJcbn07XHJcblxyXG5MLlZlbG9jaXR5TGF5ZXIgPSAoTC5MYXllciA/IEwuTGF5ZXIgOiBMLkNsYXNzKS5leHRlbmQobmV3IFZlbG9jaXR5TGF5ZXIoKSk7XHJcbkwudmVsb2NpdHlMYXllciA9IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuXHRyZXR1cm4gbmV3IEwuVmVsb2NpdHlMYXllcihvcHRpb25zKTtcclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=