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
___CSS_LOADER_EXPORT___.push([module.id, `.IoWwiOJa3pQTAZUawPer {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px 10px;
  border-radius: 0 5px 0 0;
  margin: 0 !important;
  color: #333;
  font: 14px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
}
`, "",{"version":3,"sources":["webpack://./src/leaflet-velocity.css"],"names":[],"mappings":"AAAA;EACE,0CAA0C;EAC1C,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,WAAW;EACX,6DAA6D;EAC7D,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT","sourcesContent":[".leafletControlVelocity {\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px 10px;\n  border-radius: 0 5px 0 0;\n  margin: 0 !important;\n  color: #333;\n  font: 14px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"leafletControlVelocity": `IoWwiOJa3pQTAZUawPer`
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
        var _a;
        this.particules.splice(0, this.particules.length);
        (_a = this.animationBucket) === null || _a === void 0 ? void 0 : _a.clear();
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
        var _a;
        (_a = this.animationBucket) === null || _a === void 0 ? void 0 : _a.clear();
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3MiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9MLkNhbnZhc0xheWVyLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvTC5Db250cm9sLlZlbG9jaXR5LnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvTC5WZWxvY2l0eUxheWVyLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvYW5pbWF0aW9uQnVja2V0LnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvY2FudmFzQm91bmQudHMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy9jb2xvclNjYWxlLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2xheWVyLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvbGVhZmxldC12ZWxvY2l0eS5jc3M/YmFmNCIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL21hcEJvdW5kLnRzIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvLi9zcmMvcGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy92ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy8uL3NyYy93aW5keS50cyIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaWgtbGVhZmxldC12ZWxvY2l0eS10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2loLWxlYWZsZXQtdmVsb2NpdHktdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9paC1sZWFmbGV0LXZlbG9jaXR5LXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuSW9Xd2lPSmEzcFFUQVpVYXdQZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCAwIDA7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMztcbiAgZm9udDogMTRweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xlYWZsZXQtdmVsb2NpdHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCw2REFBNkQ7RUFDN0Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxlYWZsZXRDb250cm9sVmVsb2NpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCAwIDA7XFxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udDogMTRweC8xLjUgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxlYWZsZXRDb250cm9sVmVsb2NpdHlcIjogYElvV3dpT0phM3BRVEFaVWF3UGVyYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgTGF5ZXIsIFpvb21BbmltRXZlbnQgfSBmcm9tIFwibGVhZmxldFwiO1xuXG5kZWNsYXJlIHZhciBMOiBhbnk7XG5cbi8vIC0tIEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0gZnJvbSBsZWFmbGV0IDEuMC4wIHRvIHdvcmsgb24gMC4wLjdcbmlmICghTC5Eb21VdGlsLnNldFRyYW5zZm9ybSkge1xuXHRMLkRvbVV0aWwuc2V0VHJhbnNmb3JtID0gKGVsOiBhbnksIG9mZnNldDogYW55LCBzY2FsZTogYW55KSA9PiB7XG5cdFx0dmFyIHBvcyA9IG9mZnNldCB8fCBuZXcgTC5Qb2ludCgwLCAwKTtcblxuXHRcdGVsLnN0eWxlW0wuRG9tVXRpbC5UUkFOU0ZPUk1dID1cblx0XHRcdChMLkJyb3dzZXIuaWUzZFxuXHRcdFx0XHQ/IFwidHJhbnNsYXRlKFwiICsgcG9zLnggKyBcInB4LFwiICsgcG9zLnkgKyBcInB4KVwiXG5cdFx0XHRcdDogXCJ0cmFuc2xhdGUzZChcIiArIHBvcy54ICsgXCJweCxcIiArIHBvcy55ICsgXCJweCwwKVwiKSArXG5cdFx0XHQoc2NhbGUgPyBcIiBzY2FsZShcIiArIHNjYWxlICsgXCIpXCIgOiBcIlwiKTtcblx0fTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0xheWVyIHtcblx0cHJvdGVjdGVkIF9tYXA6IEwuTWFwO1xuXHRwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuXHRwcml2YXRlIF9mcmFtZTogbnVtYmVyO1xuXHRwcml2YXRlIF9kZWw6IGFueTtcblxuXHRwdWJsaWMgaW5pdGlhbGl6ZShvcHRpb25zOiBhbnkpIHtcblx0XHR0aGlzLl9tYXAgPSBudWxsO1xuXHRcdHRoaXMuX2NhbnZhcyA9IG51bGw7XG5cdFx0dGhpcy5fZnJhbWUgPSBudWxsO1xuXHRcdHRoaXMuX2RlbCA9IG51bGw7XG5cdFx0TC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0Q2FudmFzKCkge1xuXHRcdHJldHVybiB0aGlzLl9jYW52YXM7XG5cdH1cblxuXHRwdWJsaWMgZGVsZWdhdGUoZGVsOiBhbnkpOiBDYW52YXNMYXllciB7XG5cdFx0dGhpcy5fZGVsID0gZGVsO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHVibGljIG5lZWRSZWRyYXcoKSB7XG5cdFx0aWYgKCF0aGlzLl9mcmFtZSkge1xuXHRcdFx0dGhpcy5fZnJhbWUgPSBMLlV0aWwucmVxdWVzdEFuaW1GcmFtZSh0aGlzLmRyYXdMYXllciwgdGhpcyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHVibGljIGdldEV2ZW50cygpIHtcblx0XHRjb25zdCBldmVudHMgPSB7XG5cdFx0XHRyZXNpemU6IHRoaXMub25MYXllckRpZFJlc2l6ZSxcblx0XHRcdG1vdmVlbmQ6IHRoaXMub25MYXllckRpZE1vdmUsXG5cdFx0XHR6b29tYW5pbTogPGFueT51bmRlZmluZWRcblx0XHR9O1xuXHRcdGlmICh0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZCkge1xuXHRcdFx0ZXZlbnRzLnpvb21hbmltID0gdGhpcy5hbmltYXRlWm9vbTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnRzO1xuXHR9XG5cblx0cHVibGljIG9uQWRkKG1hcDogTC5NYXApIHtcblx0XHR0aGlzLl9tYXAgPSBtYXA7XG5cdFx0dGhpcy5fY2FudmFzID0gTC5Eb21VdGlsLmNyZWF0ZSgnY2FudmFzJywgJ2xlYWZsZXQtbGF5ZXInKTtcblxuXHRcdGNvbnN0IHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xuXHRcdHRoaXMuX2NhbnZhcy53aWR0aCA9IHNpemUueDtcblx0XHR0aGlzLl9jYW52YXMuaGVpZ2h0ID0gc2l6ZS55O1xuXG5cdFx0Y29uc3QgYW5pbWF0ZWQgPSB0aGlzLl9tYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIEwuQnJvd3Nlci5hbnkzZDtcblx0XHRMLkRvbVV0aWwuYWRkQ2xhc3ModGhpcy5fY2FudmFzLCAnbGVhZmxldC16b29tLScgKyAoYW5pbWF0ZWQgPyAnYW5pbWF0ZWQnIDogJ2hpZGUnKSk7XG5cblxuXHRcdG1hcC5nZXRQYW5lcygpLm92ZXJsYXlQYW5lLmFwcGVuZENoaWxkKHRoaXMuX2NhbnZhcyk7XG5cdFx0bWFwLm9uKHRoaXMuZ2V0RXZlbnRzKCkgYXMgYW55LCB0aGlzIGFzIGFueSk7XG5cblx0XHRjb25zdCBkZWwgPSB0aGlzLl9kZWwgfHwgdGhpcztcblx0XHRkZWwub25MYXllckRpZE1vdW50ICYmIGRlbC5vbkxheWVyRGlkTW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblx0XHR0aGlzLm5lZWRSZWRyYXcoKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5vbkxheWVyRGlkTW92ZSgpO1xuXHRcdH0sIDApO1xuXHR9XG5cblx0cHVibGljIG9uUmVtb3ZlKG1hcDogTC5NYXApIHtcblx0XHRjb25zdCBkZWwgPSB0aGlzLl9kZWwgfHwgdGhpcztcblx0XHRkZWwub25MYXllcldpbGxVbm1vdW50ICYmIGRlbC5vbkxheWVyV2lsbFVubW91bnQoKTsgLy8gLS0gY2FsbGJhY2tcblxuXG5cdFx0bWFwLmdldFBhbmVzKCkub3ZlcmxheVBhbmUucmVtb3ZlQ2hpbGQodGhpcy5fY2FudmFzKTtcblxuXHRcdG1hcC5vZmYodGhpcy5nZXRFdmVudHMoKSBhcyBhbnksIHRoaXMgYXMgYW55KTtcblxuXHRcdHRoaXMuX2NhbnZhcyA9IG51bGw7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRUbyhtYXA6IEwuTWFwKSB7XG5cdFx0bWFwLmFkZExheWVyKHRoaXMgYXMgdW5rbm93biBhcyBMYXllcik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwdWJsaWMgZHJhd0xheWVyKCkge1xuXHRcdC8vIC0tIHRvZG8gbWFrZSB0aGUgdmlld0luZm8gcHJvcGVydGllcyBmbGF0IG9iamVjdHMuXG5cdFx0Y29uc3Qgc2l6ZSA9IHRoaXMuX21hcC5nZXRTaXplKCk7XG5cdFx0Y29uc3QgYm91bmRzID0gdGhpcy5fbWFwLmdldEJvdW5kcygpO1xuXHRcdGNvbnN0IHpvb20gPSB0aGlzLl9tYXAuZ2V0Wm9vbSgpO1xuXG5cdFx0Y29uc3QgY2VudGVyID0gdGhpcy5fbWFwLm9wdGlvbnMuY3JzLnByb2plY3QodGhpcy5fbWFwLmdldENlbnRlcigpKTtcblx0XHRjb25zdCBjb3JuZXIgPSB0aGlzLl9tYXAub3B0aW9ucy5jcnMucHJvamVjdCh0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xhdExuZyh0aGlzLl9tYXAuZ2V0U2l6ZSgpKSk7XG5cblx0XHRjb25zdCBkZWwgPSB0aGlzLl9kZWwgfHwgdGhpcztcblx0XHRkZWwub25EcmF3TGF5ZXIgJiYgZGVsLm9uRHJhd0xheWVyKHtcblx0XHRcdGxheWVyOiB0aGlzLFxuXHRcdFx0Y2FudmFzOiB0aGlzLl9jYW52YXMsXG5cdFx0XHRib3VuZHM6IGJvdW5kcyxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHR6b29tOiB6b29tLFxuXHRcdFx0Y2VudGVyOiBjZW50ZXIsXG5cdFx0XHRjb3JuZXI6IGNvcm5lclxuXHRcdH0pO1xuXHRcdHRoaXMuX2ZyYW1lID0gbnVsbDtcblx0fVxuXG5cdC8vIC0tIEwuRG9tVXRpbC5zZXRUcmFuc2Zvcm0gZnJvbSBsZWFmbGV0IDEuMC4wIHRvIHdvcmsgb24gMC4wLjdcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0X3NldFRyYW5zZm9ybShlbDogYW55LCBvZmZzZXQ6IGFueSwgc2NhbGU6IGFueSkge1xuXHRcdHZhciBwb3MgPSBvZmZzZXQgfHwgbmV3IEwuUG9pbnQoMCwgMCk7XG5cblx0XHRlbC5zdHlsZVtMLkRvbVV0aWwuVFJBTlNGT1JNXSA9XG5cdFx0XHQoTC5Ccm93c2VyLmllM2QgP1xuXHRcdFx0XHQndHJhbnNsYXRlKCcgKyBwb3MueCArICdweCwnICsgcG9zLnkgKyAncHgpJyA6XG5cdFx0XHRcdCd0cmFuc2xhdGUzZCgnICsgcG9zLnggKyAncHgsJyArIHBvcy55ICsgJ3B4LDApJykgK1xuXHRcdFx0KHNjYWxlID8gJyBzY2FsZSgnICsgc2NhbGUgKyAnKScgOiAnJyk7XG5cdH1cblxuXHRwcml2YXRlIGFuaW1hdGVab29tKGU6IFpvb21BbmltRXZlbnQpIHtcblx0XHRjb25zdCBzY2FsZSA9IHRoaXMuX21hcC5nZXRab29tU2NhbGUoZS56b29tKTtcblx0XHQvLyAtLSBkaWZmZXJlbnQgY2FsYyBvZiBvZmZzZXQgaW4gbGVhZmxldCAxLjAuMCBhbmQgMC4wLjcgdGhhbmtzIGZvciAxLjAuMC1yYzIgY2FsYyBAamR1Z2dhbjFcblx0XHRjb25zdCBvZmZzZXQgPSBMLkxheWVyID9cblx0XHRcdCg8YW55PnRoaXMuX21hcCkuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9tYXAuZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhXZXN0KCksIGUuem9vbSwgZS5jZW50ZXIpIDpcblx0XHRcdCg8YW55PnRoaXMuX21hcCkuX2dldENlbnRlck9mZnNldChlLmNlbnRlcikuX211bHRpcGx5QnkoLXNjYWxlKS5zdWJ0cmFjdCgoPGFueT50aGlzLl9tYXApLl9nZXRNYXBQYW5lUG9zKCkpO1xuXG5cdFx0TC5Eb21VdGlsLnNldFRyYW5zZm9ybSh0aGlzLl9jYW52YXMsIG9mZnNldCwgc2NhbGUpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkxheWVyRGlkUmVzaXplKHJlc2l6ZUV2ZW50OiBhbnkpIHtcblx0XHR0aGlzLl9jYW52YXMud2lkdGggPSByZXNpemVFdmVudC5uZXdTaXplLng7XG5cdFx0dGhpcy5fY2FudmFzLmhlaWdodCA9IHJlc2l6ZUV2ZW50Lm5ld1NpemUueTtcblx0fVxuXG5cdHByaXZhdGUgb25MYXllckRpZE1vdmUoKSB7XG5cdFx0dmFyIHRvcExlZnQgPSB0aGlzLl9tYXAuY29udGFpbmVyUG9pbnRUb0xheWVyUG9pbnQoWzAsIDBdKTtcblx0XHRMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5fY2FudmFzLCB0b3BMZWZ0KTtcblx0XHR0aGlzLmRyYXdMYXllcigpO1xuXHR9XG59XG4iLCJpbXBvcnQgV2luZHkgZnJvbSAnLi93aW5keSc7XHJcbmRlY2xhcmUgdmFyIEw6IGFueTtcclxuaW1wb3J0IHZlbG9jaXR5Y3NzIGZyb20gJy4vbGVhZmxldC12ZWxvY2l0eS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIERpc3BsYXlPcHRpb25zIHtcclxuICBzcGVlZFVuaXQ6ICdrdCcgfCAnay9oJyB8ICdtcGgnIHwgJ20vcyc7XHJcbiAgaGVpZ2h0VW5pdDogJ2Z0JyB8ICdtJztcclxuICBwb3NpdGlvbjogJ3RvcGxlZnQnIHwgJ3RvcHJpZ2h0JyB8ICdib3R0b21sZWZ0JyB8ICdib3R0b21yaWdodCc7XHJcbiAgc2hvd0NhcmRpbmFsOiBib29sZWFuO1xyXG4gIGFuZ2xlQ29udmVudGlvbjogc3RyaW5nO1xyXG4gIHZlbG9jaXR5VHlwZTogc3RyaW5nO1xyXG4gIGVtcHR5U3RyaW5nOiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uU3RyaW5nOiBzdHJpbmc7XHJcbiAgc3BlZWRTdHJpbmc6IHN0cmluZztcclxuICBoZWlnaHRTdHJpbmc6IHN0cmluZztcclxuICB3YXZlTW9kZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbFZlbG9jaXR5IHtcclxuICBwcml2YXRlIG9wdGlvbnM6IERpc3BsYXlPcHRpb25zO1xyXG4gIHByaXZhdGUgX3dpbmR5OiBXaW5keSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfbWFwOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NvbnRhaW5lcjogYW55ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tbGVmdCcsXHJcbiAgICAgIGVtcHR5U3RyaW5nOiAnVW5hdmFpbGFibGUnLFxyXG4gICAgICB2ZWxvY2l0eVR5cGU6ICcnLFxyXG4gICAgICBhbmdsZUNvbnZlbnRpb246ICdiZWFyaW5nQ0NXJyxcclxuICAgICAgc3BlZWRVbml0OiAnbS9zJyxcclxuICAgICAgZGlyZWN0aW9uU3RyaW5nOiBcIkRpcmVjdGlvblwiLFxyXG4gICAgICBzcGVlZFN0cmluZzogXCJTcGVlZFwiLFxyXG4gICAgICBzaG93Q2FyZGluYWw6IGZhbHNlLFxyXG4gICAgICBoZWlnaHRTdHJpbmc6IFwiSGVpZ2h0XCIsXHJcbiAgICAgIGhlaWdodFVuaXQ6ICdmdCcsXHJcbiAgICAgIHdhdmVNb2RlOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRXaW5keShfd2luZHk6IGFueSkge1xyXG4gICAgaWYgKCF0aGlzLl93aW5keSAmJiBfd2luZHkpIHRoaXMuX3dpbmR5ID0gX3dpbmR5O1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcclxuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgb25BZGQobWFwOiBhbnkpIHtcclxuICAgIHRoaXMuX21hcCA9IG1hcDtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IEwuRG9tVXRpbC5jcmVhdGUoJ2RpdicsIHZlbG9jaXR5Y3NzLmxlYWZsZXRDb250cm9sVmVsb2NpdHkpO1xyXG4gICAgTC5Eb21FdmVudC5kaXNhYmxlQ2xpY2tQcm9wYWdhdGlvbih0aGlzLl9jb250YWluZXIpO1xyXG4gICAgdGhpcy5fbWFwLm9uKCdtb3VzZW1vdmUnLCB0aGlzLmRyYXdXaW5kU3BlZWQsIHRoaXMpO1xyXG4gICAgdGhpcy5fY29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZztcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZShtYXA6IGFueSkge1xyXG4gICAgdGhpcy5fbWFwLm9mZignbW91c2Vtb3ZlJywgdGhpcy5kcmF3V2luZFNwZWVkLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHZlY3RvclRvU3BlZWQodU1zOiBudW1iZXIsIHZNczogbnVtYmVyLCB1bml0OiBzdHJpbmcpIHtcclxuICAgIHZhciB2ZWxvY2l0eUFicyA9IE1hdGguc3FydChNYXRoLnBvdyh1TXMsIDIpICsgTWF0aC5wb3codk1zLCAyKSk7XHJcbiAgICAvLyBEZWZhdWx0IGlzIG0vc1xyXG4gICAgaWYgKHVuaXQgPT09IFwiay9oXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWV0ZXJTZWMya2lsb21ldGVySG91cih2ZWxvY2l0eUFicyk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IFwia3RcIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5tZXRlclNlYzJLbm90cyh2ZWxvY2l0eUFicyk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09IFwibXBoXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubWV0ZXJTZWMybWlsZXNIb3VyKHZlbG9jaXR5QWJzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB2ZWxvY2l0eUFicztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlY3RvclRvRGVncmVlcyh1TXM6IG51bWJlciwgdk1zOiBudW1iZXIsIGFuZ2xlQ29udmVudGlvbjogc3RyaW5nKSB7XHJcbiAgICAvLyBEZWZhdWx0IGFuZ2xlIGNvbnZlbnRpb24gaXMgQ1dcclxuICAgIGlmIChhbmdsZUNvbnZlbnRpb24uZW5kc1dpdGgoJ0NDVycpKSB7XHJcbiAgICAgIC8vIHZNcyBjb21lcyBvdXQgdXBzaWRlLWRvd24uLlxyXG4gICAgICB2TXMgPSB2TXMgPiAwID8gdk1zID0gLXZNcyA6IE1hdGguYWJzKHZNcyk7XHJcbiAgICB9XHJcbiAgICB2YXIgdmVsb2NpdHlBYnMgPSBNYXRoLnNxcnQoTWF0aC5wb3codU1zLCAyKSArIE1hdGgucG93KHZNcywgMikpO1xyXG5cclxuICAgIHZhciB2ZWxvY2l0eURpciA9IE1hdGguYXRhbjIodU1zIC8gdmVsb2NpdHlBYnMsIHZNcyAvIHZlbG9jaXR5QWJzKTtcclxuICAgIHZhciB2ZWxvY2l0eURpclRvRGVncmVlcyA9IHZlbG9jaXR5RGlyICogMTgwIC8gTWF0aC5QSSArIDE4MDtcclxuXHJcbiAgICBpZiAoYW5nbGVDb252ZW50aW9uID09PSAnYmVhcmluZ0NXJyB8fCBhbmdsZUNvbnZlbnRpb24gPT09ICdtZXRlb0NDVycpIHtcclxuICAgICAgdmVsb2NpdHlEaXJUb0RlZ3JlZXMgKz0gMTgwO1xyXG4gICAgICBpZiAodmVsb2NpdHlEaXJUb0RlZ3JlZXMgPj0gMzYwKSB2ZWxvY2l0eURpclRvRGVncmVlcyAtPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZlbG9jaXR5RGlyVG9EZWdyZWVzO1xyXG4gIH1cclxuXHJcbiAgbWV0ZXJTZWMyS25vdHMobWV0ZXJzOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBtZXRlcnMgLyAwLjUxNFxyXG4gIH1cclxuXHJcbiAgbWV0ZXJTZWMya2lsb21ldGVySG91cihtZXRlcnM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG1ldGVycyAqIDMuNlxyXG4gIH1cclxuXHJcbiAgbWV0ZXJTZWMybWlsZXNIb3VyKG1ldGVyczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbWV0ZXJzICogMi4yMzY5NDtcclxuICB9XHJcblxyXG5cclxuICBkZWdyZWVzVG9DYXJkaW5hbERpcmVjdGlvbihkZWc6IG51bWJlcikge1xyXG4gICAgbGV0IGNhcmRpbmFsRGlyZWN0aW9uID0gJydcclxuICAgIGlmIChkZWcgPj0gMCAmJiBkZWcgPCAxMS4yNSB8fCBkZWcgPj0gMzQ4Ljc1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ04nXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChkZWcgPj0gMTEuMjUgJiYgZGVnIDwgMzMuNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTk5XJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDMzLjc1ICYmIGRlZyA8IDU2LjI1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ05XJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDU2LjI1ICYmIGRlZyA8IDc4Ljc1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1dOVydcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSA3OC4yNSAmJiBkZWcgPCAxMDEuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnVydcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMDEuMjUgJiYgZGVnIDwgMTIzLjc1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1dTVydcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAxMjMuNzUgJiYgZGVnIDwgMTQ2LjI1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1NXJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDE0Ni4yNSAmJiBkZWcgPCAxNjguNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnU1NXJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDE2OC43NSAmJiBkZWcgPCAxOTEuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnUydcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAxOTEuMjUgJiYgZGVnIDwgMjEzLjc1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1NTRSdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAyMTMuNzUgJiYgZGVnIDwgMjM2LjI1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ1NFJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDIzNi4yNSAmJiBkZWcgPCAyNTguNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnRVNFJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDI1OC43NSAmJiBkZWcgPCAyODEuMjUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnRSdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAyODEuMjUgJiYgZGVnIDwgMzAzLjc1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ0VORSdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGRlZyA+PSAzMDMuNzUgJiYgZGVnIDwgMzI2LjI1KSB7XHJcbiAgICAgIGNhcmRpbmFsRGlyZWN0aW9uID0gJ05FJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZGVnID49IDMyNi4yNSAmJiBkZWcgPCAzNDguNzUpIHtcclxuICAgICAgY2FyZGluYWxEaXJlY3Rpb24gPSAnTk5FJ1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJkaW5hbERpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGRyYXdXaW5kU3BlZWQoZXY6IGFueSkge1xyXG4gICAgY29uc3QgcG9zID0gdGhpcy5fbWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcoTC5wb2ludChldi5jb250YWluZXJQb2ludC54LCBldi5jb250YWluZXJQb2ludC55KSk7XHJcbiAgICBjb25zdCBncmlkVmFsdWUgPSB0aGlzLl93aW5keS5pbnRlcnBvbGF0ZShwb3MubG5nLCBwb3MubGF0KTtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGdyaWRWYWx1ZSAmJiAhaXNOYU4oZ3JpZFZhbHVlWzBdKSAmJiAhaXNOYU4oZ3JpZFZhbHVlWzFdKSkge1xyXG4gICAgICBjb25zdCBkZWcgPSB0aGlzLnZlY3RvclRvRGVncmVlcyhncmlkVmFsdWVbMF0sIGdyaWRWYWx1ZVsxXSwgdGhpcy5vcHRpb25zLmFuZ2xlQ29udmVudGlvbik7XHJcbiAgICAgIGNvbnN0IGNhcmRpbmFsID0gdGhpcy5vcHRpb25zLnNob3dDYXJkaW5hbCA/IGAgKCR7dGhpcy5kZWdyZWVzVG9DYXJkaW5hbERpcmVjdGlvbihkZWcpfSkgYCA6ICcnO1xyXG5cclxuICAgICAgbGV0IHZhcmlhYmxlT3V0cHV0ID0gXCJcIjtcclxuICAgICAgbGV0IGxhYmVsU3RyaW5nID0gXCJcIjtcclxuICAgICAgbGV0IHVuaXQgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2F2ZU1vZGUpIHtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBncmlkVmFsdWVbMl0gJiYgZ3JpZFZhbHVlWzJdID49IDAgPyBncmlkVmFsdWVbMl0gOiBudWxsO1xyXG4gICAgICAgIHZhcmlhYmxlT3V0cHV0ID0gaGVpZ2h0ID8gaGVpZ2h0LnRvRml4ZWQoMikgOiBcIk5vIGRhdGFcIjtcclxuICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMub3B0aW9ucy5oZWlnaHRTdHJpbmc7XHJcbiAgICAgICAgdW5pdCA9IGhlaWdodCA/IHRoaXMub3B0aW9ucy5oZWlnaHRVbml0IDogXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXJpYWJsZU91dHB1dCA9IHRoaXMudmVjdG9yVG9TcGVlZChncmlkVmFsdWVbMF0sIGdyaWRWYWx1ZVsxXSwgdGhpcy5vcHRpb25zLnNwZWVkVW5pdCkudG9GaXhlZCgyKTtcclxuICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMub3B0aW9ucy5zcGVlZFN0cmluZztcclxuICAgICAgICB1bml0ID0gdGhpcy5vcHRpb25zLnNwZWVkVW5pdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGVtcGxhdGUgPSBgPHN0cm9uZz4ke3RoaXMub3B0aW9ucy52ZWxvY2l0eVR5cGV9ICR7dGhpcy5vcHRpb25zLmRpcmVjdGlvblN0cmluZ306IDwvc3Ryb25nPiAke2RlZy50b0ZpeGVkKDIpfcKwJHtjYXJkaW5hbH0sIFxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPiR7bGFiZWxTdHJpbmd9OiA8L3N0cm9uZz4gJHt2YXJpYWJsZU91dHB1dH0gJHt1bml0fWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5lbXB0eVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIuaW5uZXJIVE1MID0gdGVtcGxhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBXaW5keSwgeyBXaW5keU9wdGlvbnMgfSBmcm9tICcuL3dpbmR5JztcclxuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gJy4vY2FudmFzQm91bmQnXHJcbmltcG9ydCBNYXBCb3VuZCBmcm9tICcuL21hcEJvdW5kJztcclxuaW1wb3J0IExheWVyIGZyb20gXCIuL2xheWVyXCI7XHJcbmltcG9ydCBDYW52YXNMYXllciBmcm9tICcuL0wuQ2FudmFzTGF5ZXInO1xyXG5cclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVsb2NpdHlMYXllciB7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOiBhbnk7XHJcbiAgcHJpdmF0ZSBfbWFwOiBMLk1hcCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfY2FudmFzTGF5ZXI6IChDYW52YXNMYXllciAmIEwuTGF5ZXIpID0gbnVsbDtcclxuICBwcml2YXRlIF93aW5keTogV2luZHkgPSBudWxsO1xyXG4gIHByaXZhdGUgX2NvbnRleHQ6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZGlzcGxheVRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+ID0gbnVsbDtcclxuICBwcml2YXRlIF9tYXBFdmVudHM6IGFueSA9IG51bGxcclxuICBwcml2YXRlIF9tb3VzZUNvbnRyb2w6IGFueSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfcGFuZU5hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICBkaXNwbGF5VmFsdWVzOiB0cnVlLFxyXG4gICAgICBkaXNwbGF5T3B0aW9uczoge1xyXG4gICAgICAgIHZlbG9jaXR5VHlwZTogJ1ZlbG9jaXR5JyxcclxuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbWxlZnQnLFxyXG4gICAgICAgIGVtcHR5U3RyaW5nOiAnTm8gdmVsb2NpdHkgZGF0YScsXHJcbiAgICAgICAgYW5nbGVDb252ZW50aW9uOiAnYmVhcmluZ0NDVycsXHJcbiAgICAgICAgc3BlZWRVbml0OiAnbS9zJyxcclxuICAgICAgICBoZWlnaHRVbml0OiAnZnQnLFxyXG4gICAgICAgIGhlaWdodFN0cmluZzogJ0hlaWdodCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdmVNb2RlOiBmYWxzZSxcclxuICAgICAgbWF4VmVsb2NpdHk6IDEwLCAvLyB1c2VkIHRvIGFsaWduIGNvbG9yIHNjYWxlXHJcbiAgICAgIGNvbG9yU2NhbGU6IG51bGwsXHJcbiAgICAgIG9uQWRkOiBudWxsLFxyXG4gICAgICBvblJlbW92ZTogbnVsbCxcclxuICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgcGFuZU5hbWU6IFwib3ZlcmxheVBhbmVcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKG9wdGlvbnM6IGFueSkge1xyXG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gey4uLnRoaXMub3B0aW9ucywgLi4ub3B0aW9uc307XHJcbiAgICBpZiAob3B0aW9ucy5kaXNwbGF5T3B0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMgPSB7Li4udGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zLCAuLi5vcHRpb25zLmRpc3BsYXlPcHRpb25zfTtcclxuICAgICAgdGhpcy5pbml0TW91c2VIYW5kbGVyKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB7XHJcbiAgICAgIHRoaXMuX3dpbmR5LnNldE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgIGlmIChvcHRpb25zLmRhdGEpIHtcclxuICAgICAgICB0aGlzLl93aW5keS5zZXREYXRhKG9wdGlvbnMuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAoPGFueT50aGlzKS5maXJlKFwibG9hZFwiKTtcclxuICB9XHJcblxyXG4gIG9uQWRkKG1hcDogTC5NYXApIHtcclxuICAgIC8vIGRldGVybWluZSB3aGVyZSB0byBhZGQgdGhlIGxheWVyXHJcbiAgICB0aGlzLl9wYW5lTmFtZSA9IHRoaXMub3B0aW9ucy5wYW5lTmFtZSB8fCBcIm92ZXJsYXlQYW5lXCI7XHJcblxyXG4gICAgLy8gZmFsbCBiYWNrIHRvIG92ZXJsYXlQYW5lIGZvciBsZWFmbGV0IDwgMVxyXG4gICAgbGV0IHBhbmUgPSBtYXAuZ2V0UGFuZXMoKS5vdmVybGF5UGFuZTtcclxuICAgIGlmIChtYXAuZ2V0UGFuZSkge1xyXG4gICAgICAvLyBhdHRlbXB0IHRvIGdldCBwYW5lIGZpcnN0IHRvIHByZXNlcnZlIHBhcmVudCAoY3JlYXRlUGFuZSB2b2lkcyB0aGlzKVxyXG4gICAgICBwYW5lID0gbWFwLmdldFBhbmUodGhpcy5fcGFuZU5hbWUpO1xyXG4gICAgICBpZiAoIXBhbmUpIHtcclxuICAgICAgICBwYW5lID0gbWFwLmNyZWF0ZVBhbmUodGhpcy5fcGFuZU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGUgY2FudmFzLCBhZGQgb3ZlcmxheSBjb250cm9sXHJcbiAgICB0aGlzLl9jYW52YXNMYXllciA9IEwuY2FudmFzTGF5ZXIoKS5kZWxlZ2F0ZSh0aGlzKTtcclxuICAgIHRoaXMuX2NhbnZhc0xheWVyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgdGhpcy5fbWFwID0gbWFwO1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMub25BZGQpXHJcbiAgICAgIHRoaXMub3B0aW9ucy5vbkFkZCgpO1xyXG4gIH1cclxuXHJcbiAgb25SZW1vdmUobWFwOiBhbnkpIHtcclxuICAgIHRoaXMuZGVzdHJveVdpbmQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uUmVtb3ZlKVxyXG4gICAgICB0aGlzLm9wdGlvbnMub25SZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHNldERhdGEoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IGRhdGE7XHJcblxyXG4gICAgaWYgKHRoaXMuX3dpbmR5KSB7XHJcbiAgICAgIHRoaXMuX3dpbmR5LnNldERhdGEoZGF0YSk7XHJcbiAgICAgIHRoaXMuY2xlYXJBbmRSZXN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgKDxhbnk+dGhpcykuZmlyZSgnbG9hZCcpO1xyXG4gIH1cclxuXHJcbiAgb25EcmF3TGF5ZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3dpbmR5KSB7XHJcbiAgICAgIHRoaXMuaW5pdFdpbmR5KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZGlzcGxheVRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLl9kaXNwbGF5VGltZW91dCk7XHJcblxyXG4gICAgdGhpcy5fZGlzcGxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zdGFydFdpbmR5KCk7XHJcbiAgICB9LCAxNTApOyAvLyBzaG93aW5nIHZlbG9jaXR5IGlzIGRlbGF5ZWRcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlRXZlbnRzKGJpbmQ6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICBpZiAodGhpcy5fbWFwRXZlbnRzID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX21hcEV2ZW50cyA9IHtcclxuICAgICAgICAnZHJhZ3N0YXJ0JzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ2RyYWdlbmQnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyQW5kUmVzdGFydCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3pvb21zdGFydCc6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3dpbmR5LnN0b3AoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICd6b29tZW5kJzogKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckFuZFJlc3RhcnQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdyZXNpemUnOiAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyV2luZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBlIGluIHRoaXMuX21hcEV2ZW50cykge1xyXG4gICAgICBpZiAodGhpcy5fbWFwRXZlbnRzLmhhc093blByb3BlcnR5KGUpKSB7XHJcbiAgICAgICAgdGhpcy5fbWFwW2JpbmQgPyAnb24nIDogJ29mZiddKGUsIHRoaXMuX21hcEV2ZW50c1tlXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0V2luZHkoKSB7XHJcbiAgICBjb25zdCBvcHRpb25zOiBXaW5keU9wdGlvbnMgPSB7XHJcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcclxuICAgICAgY2FudmFzOiB0aGlzLl9jYW52YXNMYXllci5nZXRDYW52YXMoKVxyXG4gICAgfVxyXG4gICAgdGhpcy5fd2luZHkgPSBuZXcgV2luZHkob3B0aW9ucyk7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBjb250ZXh0IGdsb2JhbCB2YXIsIHN0YXJ0IGRyYXdpbmdcclxuICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLl9jYW52YXNMYXllci5nZXRDYW52YXMoKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5fY2FudmFzTGF5ZXIuZ2V0Q2FudmFzKCkuY2xhc3NMaXN0LmFkZChcInZlbG9jaXR5LW92ZXJsYXlcIik7XHJcbiAgICB0aGlzLm9uRHJhd0xheWVyKCk7XHJcblxyXG4gICAgdGhpcy50b2dnbGVFdmVudHModHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5pbml0TW91c2VIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbml0TW91c2VIYW5kbGVyKHVuYmluZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAodW5iaW5kKSB7XHJcbiAgICAgIHRoaXMuX21hcC5yZW1vdmVDb250cm9sKHRoaXMuX21vdXNlQ29udHJvbCk7XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fbW91c2VDb250cm9sICYmIHRoaXMub3B0aW9ucy5kaXNwbGF5VmFsdWVzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZGlzcGxheU9wdGlvbnMgfHwge307XHJcbiAgICAgIHRoaXMuX21vdXNlQ29udHJvbCA9IEwuY29udHJvbC52ZWxvY2l0eSh7XHJcbiAgICAgICAgLi4ub3B0aW9ucyxcclxuICAgICAgICB3YXZlTW9kZTogdGhpcy5vcHRpb25zLndhdmVNb2RlLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sLnNldFdpbmR5KHRoaXMuX3dpbmR5KTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sLnNldE9wdGlvbnModGhpcy5vcHRpb25zLmRpc3BsYXlPcHRpb25zKTtcclxuICAgICAgdGhpcy5fbW91c2VDb250cm9sLmFkZFRvKHRoaXMuX21hcCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0V2luZHkoKSB7XHJcbiAgICB2YXIgYm91bmRzID0gdGhpcy5fbWFwLmdldEJvdW5kcygpO1xyXG4gICAgdmFyIHNpemUgPSB0aGlzLl9tYXAuZ2V0U2l6ZSgpO1xyXG5cclxuICAgIC8vIGJvdW5kcywgd2lkdGgsIGhlaWdodCwgZXh0ZW50XHJcbiAgICB0aGlzLl93aW5keS5zdGFydChcclxuICAgICAgbmV3IExheWVyKFxyXG4gICAgICAgIG5ldyBNYXBCb3VuZChcclxuICAgICAgICAgIHRoaXMuX21hcCxcclxuICAgICAgICAgIGJvdW5kcy5nZXROb3J0aEVhc3QoKS5sYXQsXHJcbiAgICAgICAgICBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkubG5nLFxyXG4gICAgICAgICAgYm91bmRzLmdldFNvdXRoV2VzdCgpLmxhdCxcclxuICAgICAgICAgIGJvdW5kcy5nZXRTb3V0aFdlc3QoKS5sbmdcclxuICAgICAgICApLFxyXG4gICAgICAgIG5ldyBDYW52YXNCb3VuZCgwLCAwLCBzaXplLngsIHNpemUueSlcclxuICAgICAgKVxyXG5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyQW5kUmVzdGFydCgpIHtcclxuICAgIGlmICh0aGlzLl9jb250ZXh0KSB0aGlzLl9jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAzMDAwLCAzMDAwKTtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5zdGFydFdpbmR5KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyV2luZCgpIHtcclxuICAgIGlmICh0aGlzLl93aW5keSkgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95V2luZCgpIHtcclxuICAgIGlmICh0aGlzLl9kaXNwbGF5VGltZW91dClcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3BsYXlUaW1lb3V0KTtcclxuICAgIGlmICh0aGlzLl93aW5keSlcclxuICAgICAgdGhpcy5fd2luZHkuc3RvcCgpO1xyXG4gICAgaWYgKHRoaXMuX2NvbnRleHQpXHJcbiAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDMwMDAsIDMwMDApO1xyXG4gICAgaWYgKHRoaXMuX21vdXNlQ29udHJvbClcclxuICAgICAgdGhpcy5fbWFwLnJlbW92ZUNvbnRyb2wodGhpcy5fbW91c2VDb250cm9sKTtcclxuICAgIHRoaXMuX21vdXNlQ29udHJvbCA9IG51bGw7XHJcbiAgICB0aGlzLl93aW5keSA9IG51bGw7XHJcbiAgICB0aGlzLnRvZ2dsZUV2ZW50cyhmYWxzZSk7XHJcbiAgICB0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5fY2FudmFzTGF5ZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XG5pbXBvcnQgUGFydGljdWxlIGZyb20gXCIuL3BhcnRpY2xlXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb25CdWNrZXQge1xuICAgIHByaXZhdGUgY29sb3JTY2FsZTogQ29sb3JTY2FsZTtcbiAgICBwcml2YXRlIGJ1Y2tldHM6IFBhcnRpY3VsZVtdW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbG9yU2NhbGU6IENvbG9yU2NhbGUpIHtcbiAgICAgICAgdGhpcy5jb2xvclNjYWxlID0gY29sb3JTY2FsZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvclNjYWxlLnNpemU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idWNrZXRzLnB1c2goW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYnVja2V0cy5mb3JFYWNoKChwYXJ0aWN1bGVTZXQ6IFBhcnRpY3VsZVtdKSA9PiB7XG4gICAgICAgICAgICBwYXJ0aWN1bGVTZXQuc3BsaWNlKDAsIHBhcnRpY3VsZVNldC5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkKHA6IFBhcnRpY3VsZSwgdjogVmVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gcC53YXZlSGVpZ2h0IHx8IHAuaW50ZW5zaXR5O1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY29sb3JTY2FsZS5nZXRDb2xvckluZGV4KHZhcmlhYmxlKVxuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYnVja2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwLnh0ID0gcC54ICsgdi51O1xuICAgICAgICBwLnl0ID0gcC55ICsgdi52O1xuICAgICAgICB0aGlzLmJ1Y2tldHNbaW5kZXhdLnB1c2gocCk7XG4gICAgfVxuXG4gICAgZHJhdyhjb250ZXh0MkQ6IGFueSkge1xuICAgICAgICB0aGlzLmJ1Y2tldHMuZm9yRWFjaCgoYnVja2V0OiBQYXJ0aWN1bGVbXSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVja2V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0MkQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvclNjYWxlLmNvbG9yQXQoaSk7XG4gICAgICAgICAgICAgICAgYnVja2V0LmZvckVhY2goZnVuY3Rpb24gKHBhcnRpY2xlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyRC5tb3ZlVG8ocGFydGljbGUueCwgcGFydGljbGUueSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQyRC5saW5lVG8ocGFydGljbGUueHQsIHBhcnRpY2xlLnl0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGUueCA9IHBhcnRpY2xlLnh0O1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZS55ID0gcGFydGljbGUueXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGV4dDJELnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRCdWNrZXRzKCk6IFBhcnRpY3VsZVtdW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5idWNrZXRzO1xuICAgICAgfVxuICAgICAgXG59IiwiaW1wb3J0IFBhcnRpY3VsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNCb3VuZCB7XG4gICAgcHVibGljIHhNaW46IG51bWJlcjtcbiAgICBwdWJsaWMgeU1pbjogbnVtYmVyO1xuICAgIHB1YmxpYyB4TWF4OiBudW1iZXI7XG4gICAgcHVibGljIHlNYXg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHhNaW46IG51bWJlciwgeU1pbjogbnVtYmVyLCB4TWF4OiBudW1iZXIsIHlNYXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnhNaW4gPSB4TWluO1xuICAgICAgICB0aGlzLnlNaW4gPSB5TWluO1xuICAgICAgICB0aGlzLnhNYXggPSB4TWF4O1xuICAgICAgICB0aGlzLnlNYXggPSB5TWF4O1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy54TWF4IC0gdGhpcy54TWluO1xuICAgIH1cblxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueU1heCAtIHRoaXMueU1pbjtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21QYXJ0aWN1bGUobWF4QWdlOiBudW1iZXIpOiBQYXJ0aWN1bGUge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLndpZHRoKSArIHRoaXMueE1pbik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaGVpZ2h0KSArIHRoaXMueU1pbik7XG4gICAgICAgIHJldHVybiBuZXcgUGFydGljdWxlKHgsIHksIG1heEFnZSk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXJ0aWN1bGUocDogUGFydGljdWxlKTogUGFydGljdWxlIHtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy53aWR0aCkgKyB0aGlzLnhNaW4pO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmhlaWdodCkgKyB0aGlzLnlNaW4pO1xuICAgICAgICBwLnJlc2V0KHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yU2NhbGUge1xuICAgIHByaXZhdGUgc2NhbGU6IHN0cmluZ1tdID0gW1xuICAgICAgICBcInJnYigzNiwxMDQsIDE4MClcIixcbiAgICAgICAgXCJyZ2IoNjAsMTU3LCAxOTQpXCIsXG4gICAgICAgIFwicmdiKDEyOCwyMDUsMTkzIClcIixcbiAgICAgICAgXCJyZ2IoMTUxLDIxOCwxNjggKVwiLFxuICAgICAgICBcInJnYigxOTgsMjMxLDE4MSlcIixcbiAgICAgICAgXCJyZ2IoMjM4LDI0NywyMTcpXCIsXG4gICAgICAgIFwicmdiKDI1NSwyMzgsMTU5KVwiLFxuICAgICAgICBcInJnYigyNTIsMjE3LDEyNSlcIixcbiAgICAgICAgXCJyZ2IoMjU1LDE4MiwxMDApXCIsXG4gICAgICAgIFwicmdiKDI1MiwxNTAsNzUpXCIsXG4gICAgICAgIFwicmdiKDI1MCwxMTIsNTIpXCIsXG4gICAgICAgIFwicmdiKDI0NSw2NCwzMilcIixcbiAgICAgICAgXCJyZ2IoMjM3LDQ1LDI4KVwiLFxuICAgICAgICBcInJnYigyMjAsMjQsMzIpXCIsXG4gICAgICAgIFwicmdiKDE4MCwwLDM1KVwiXG4gICAgXVxuICAgIHByaXZhdGUgbWluVmFsdWU6IG51bWJlcjtcbiAgICBwcml2YXRlIG1heFZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZTogbnVtYmVyLCBzY2FsZT86IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuc2V0TWluTWF4KG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgICAgIGlmICgoc2NhbGUgaW5zdGFuY2VvZiBBcnJheSkgJiYgc2NhbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNaW5NYXgobWluVmFsdWU6IG51bWJlciwgbWF4VmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1pblZhbHVlID0gbWluVmFsdWU7XG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBtYXhWYWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoO1xuICAgIH1cblxuICAgIGdldENvbG9ySW5kZXgodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmICh2YWx1ZSA8PSB0aGlzLm1pblZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPj0gdGhpcy5tYXhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2NhbGUubGVuZ3RoICogKHZhbHVlIC0gdGhpcy5taW5WYWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLnNjYWxlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjYWxlLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbG9yQXQoaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlW2luZGV4XTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVbdGhpcy5nZXRDb2xvckluZGV4KHZhbHVlKV07XG4gICAgfVxufVxuIiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgcHJpdmF0ZSBkYXRhOiBWZWN0b3JbXTtcbiAgICBwcml2YXRlIM+GMDogbnVtYmVyO1xuICAgIHByaXZhdGUgzrswOiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOlM67OiBudW1iZXI7XG4gICAgcHJpdmF0ZSDOlM+GOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBWZWN0b3JbXSwgz4YwOiBudW1iZXIsIM67MDogbnVtYmVyLCDOlM+GOiBudW1iZXIsIM6Uzrs6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy7PhjAgPSDPhjA7XG4gICAgICAgIHRoaXMuzrswID0gzrswO1xuICAgICAgICB0aGlzLs6UzrsgPSDOlM67O1xuICAgICAgICB0aGlzLs6Uz4YgPSDOlM+GO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZVJhbmdlKCk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKCF0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtaW4gPSB0aGlzLmRhdGFbMF0uaW50ZW5zaXR5O1xuICAgICAgICBsZXQgbWF4ID0gdGhpcy5kYXRhWzBdLmludGVuc2l0eTtcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKHZhbHVlOiBWZWN0b3IpID0+IHtcbiAgICAgICAgICAgIG1pbiA9IE1hdGgubWluKG1pbiwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgICAgIG1heCA9IE1hdGgubWF4KG1heCwgdmFsdWUuaW50ZW5zaXR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbbWluLCBtYXhdO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdmVjdG9yIGF0IGFueSBwb2ludFxuICAgICAqIEBwYXJhbSDOuyBMb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gz4YgTGF0aXR1ZGVcbiAgICAgKi9cbiAgICBnZXQozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IFZlY3RvciB7XG4gICAgICAgIGNvbnN0IGbOuyA9IHRoaXMuZmxvb3JNb2QozrsgLSB0aGlzLs67MCwgMzYwKSAvIHRoaXMuzpTOuzsgIC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxuICAgICAgICBjb25zdCBmz4YgPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7ICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgbGF0aXR1ZGUgaW5kZXggaW4gZGlyZWN0aW9uICs5MCB0byAtOTBcblxuICAgICAgICBjb25zdCBpzrsgPSBNYXRoLmZsb29yKGbOuykgLy8gY29sIG5cbiAgICAgICAgbGV0IGrOuyA9IGnOuyArIDE7ICAgICAgICAvLyBjb2wgbisxXG4gICAgICAgIGlmIChqzrsgPj0gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgas67ID0gdGhpcy7OuzA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgac+GID0gTWF0aC5mbG9vcihmz4YpIC8vIGxpbmUgbVxuICAgICAgICBsZXQgas+GID0gac+GICsgMTsgICAgICAgIC8vIGxpbmUgbSsxXG4gICAgICAgIGlmIChqz4YgPj0gdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGrPhiA9IGnPhjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHbOuyA9IGbOuyAtIGnOuzsgICAvLyBjb2wgdmFyaWF0aW9uIFswLi4xXVxuICAgICAgICBjb25zdCB2z4YgPSBmz4YgLSBpz4Y7ICAgLy8gbGluZSB2YXJpYXRpb24gWzAuLjFdXG5cbiAgICAgICAgaWYgKGnOuyA+PSAwICYmIGnPhiA+PSAwICYmIGnOuyA8IHRoaXMud2lkdGggJiYgac+GIDwgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxldCBnMDAgPSB0aGlzLmRhdGFbac67ICsgac+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICBsZXQgZzEwID0gdGhpcy5kYXRhW2rOuyArIGnPhiAqIHRoaXMud2lkdGhdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZzAxID0gdGhpcy5kYXRhW2nOuyArIGrPhiAqIHRoaXMud2lkdGhdO1xuICAgICAgICAgICAgICAgIGxldCBnMTEgPSB0aGlzLmRhdGFbas67ICsgas+GICogdGhpcy53aWR0aF07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVycG9sYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB2zrssXG4gICAgICAgICAgICAgICAgICAgICAgICB2z4YsXG4gICAgICAgICAgICAgICAgICAgICAgICBnMDAsIC8vbDBjMFxuICAgICAgICAgICAgICAgICAgICAgICAgZzEwLCAvL2wwYzFcbiAgICAgICAgICAgICAgICAgICAgICAgIGcwMSwgLy9sMWMwXG4gICAgICAgICAgICAgICAgICAgICAgICBnMTEgIC8vbDFjbFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKDAsIDAsIDApO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW50ZXJwb2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0geCB2YXJpYXRpb24gYmV0d2VlbiBnMCogYW5kIGcxKlxuICAgICAqIEBwYXJhbSB5IHZhcmlhdGlvbiBiZXR3ZWVuIGcqMCBkYW5zIGcqMVxuICAgICAqIEBwYXJhbSBnMDAgcG9pbnQgYXQgY29sXzAgYW5kIGxpbmVfMFxuICAgICAqIEBwYXJhbSBnMTAgcG9pbnQgYXQgY29sXzEgYW5kIGxpbmVfMFxuICAgICAqIEBwYXJhbSBnMDEgcG9pbnQgYXQgY29sXzAgYW5kIGxpbmVfMVxuICAgICAqIEBwYXJhbSBnMTEgcG9pbnQgYXQgY29sXzEgYW5kIGxpbmVfMVxuICAgICAqIEByZXR1cm4gaW50ZXJwb2xhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIGludGVycG9sYXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIGcwMDogVmVjdG9yLCBnMTA6IFZlY3RvciwgZzAxOiBWZWN0b3IsIGcxMTogVmVjdG9yKTogVmVjdG9yIHtcbiAgICAgICAgdmFyIHJ4ID0gKDEgLSB4KTtcbiAgICAgICAgdmFyIHJ5ID0gKDEgLSB5KTtcbiAgICAgICAgdmFyIGEgPSByeCAqIHJ5LFxuICAgICAgICAgICAgYiA9IHggKiByeSxcbiAgICAgICAgICAgIGMgPSByeCAqIHksXG4gICAgICAgICAgICBkID0geCAqIHk7XG4gICAgICAgIHZhciB1ID0gZzAwLnUgKiBhICsgZzEwLnUgKiBiICsgZzAxLnUgKiBjICsgZzExLnUgKiBkO1xuICAgICAgICB2YXIgdiA9IGcwMC52ICogYSArIGcxMC52ICogYiArIGcwMS52ICogYyArIGcxMS52ICogZDtcbiAgICAgICAgdmFyIHdoID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZzAwLndhdmVIZWlnaHQgJiYgZzEwLndhdmVIZWlnaHQgJiYgZzAxLndhdmVIZWlnaHQgJiYgZzExLndhdmVIZWlnaHQpIHtcbiAgICAgICAgICAgIHdoID0gZzAwLndhdmVIZWlnaHQgKiBhICsgZzEwLndhdmVIZWlnaHQgKiBiICsgZzAxLndhdmVIZWlnaHQgKiBjICsgZzExLndhdmVIZWlnaHQgKiBkO1xuXG4gICAgICAgICAgICBpZiAod2ggPCAwKSB7XG4gICAgICAgICAgICAgICAgd2ggPSAwO1xuICAgICAgICAgICAgICAgIHUgPSAwO1xuICAgICAgICAgICAgICAgIHYgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHUsIHYsIHdoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gbW9kdWxvXG4gICAgICogQHJldHVybnMge251bWJlcn0gcmV0dXJucyByZW1haW5kZXIgb2YgZmxvb3JlZCBkaXZpc2lvbiwgaS5lLiwgZmxvb3IoYSAvIG4pLiBVc2VmdWwgZm9yIGNvbnNpc3RlbnQgbW9kdWxvXG4gICAgICogICAgICAgICAgb2YgbmVnYXRpdmUgbnVtYmVycy4gU2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9kdWxvX29wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBmbG9vck1vZChhOiBudW1iZXIsIG46IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgaWYgeCBpcyBhIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBpcyBub3QgbnVsbCBhbmQgbm90IHVuZGVmaW5lZC5cbiAgICAgKi9cbiAgICBpc1ZhbHVlKHg6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4geCAhPT0gbnVsbCAmJiB4ICE9PSB1bmRlZmluZWQ7XG4gICAgfTtcbn1cbiIsImltcG9ydCBNYXBCb3VuZCBmcm9tIFwiLi9tYXBCb3VuZFwiO1xuaW1wb3J0IENhbnZhc0JvdW5kIGZyb20gXCIuL2NhbnZhc0JvdW5kXCI7XG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuL3ZlY3RvclwiO1xuXG5kZWNsYXJlIHZhciBMOiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxheWVyIHtcblxuICAgIHB1YmxpYyBtYXBCb3VuZDogTWFwQm91bmQ7XG4gICAgcHVibGljIGNhbnZhc0JvdW5kOiBDYW52YXNCb3VuZDtcblxuICAgIGNvbnN0cnVjdG9yKG1hcEJvdW5kOiBNYXBCb3VuZCwgY2FudmFzQm91bmQ6IENhbnZhc0JvdW5kKSB7XG4gICAgICAgIHRoaXMuY2FudmFzQm91bmQgPSBjYW52YXNCb3VuZDtcbiAgICAgICAgdGhpcy5tYXBCb3VuZCA9IG1hcEJvdW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgZ2VvY29vcmRpbmF0ZSBmcm9tIGNhbnZhcyBwb2ludFxuICAgICAqIEBwYXJhbSB4IFxuICAgICAqIEBwYXJhbSB5IFxuICAgICAqIHJldHVybiBbbG5nLCBsYXRdXG4gICAgKiovXG4gICAgY2FudmFzVG9NYXAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IG1hcExvbkRlbHRhID0gdGhpcy5tYXBCb3VuZC5lYXN0IC0gdGhpcy5tYXBCb3VuZC53ZXN0O1xuICAgICAgICBjb25zdCB3b3JsZE1hcFJhZGl1cyA9ICh0aGlzLmNhbnZhc0JvdW5kLndpZHRoIC8gdGhpcy5yYWQyZGVnKG1hcExvbkRlbHRhKSkgKiAzNjAgLyAoMiAqIE1hdGguUEkpO1xuICAgICAgICBjb25zdCBtYXBPZmZzZXRZID0gKHdvcmxkTWFwUmFkaXVzIC8gMiAqIE1hdGgubG9nKCgxICsgTWF0aC5zaW4odGhpcy5tYXBCb3VuZC5zb3V0aCkpIC8gKDEgLSBNYXRoLnNpbih0aGlzLm1hcEJvdW5kLnNvdXRoKSkpKTtcbiAgICAgICAgY29uc3QgZXF1YXRvclkgPSB0aGlzLmNhbnZhc0JvdW5kLmhlaWdodCArIG1hcE9mZnNldFk7XG4gICAgICAgIGNvbnN0IGEgPSAoZXF1YXRvclkgLSB5KSAvIHdvcmxkTWFwUmFkaXVzO1xuXG4gICAgICAgIGNvbnN0IM+GID0gMTgwIC8gTWF0aC5QSSAqICgyICogTWF0aC5hdGFuKE1hdGguZXhwKGEpKSAtIE1hdGguUEkgLyAyKTtcbiAgICAgICAgY29uc3QgzrsgPSB0aGlzLnJhZDJkZWcodGhpcy5tYXBCb3VuZC53ZXN0KSArIHggLyB0aGlzLmNhbnZhc0JvdW5kLndpZHRoICogdGhpcy5yYWQyZGVnKG1hcExvbkRlbHRhKTtcbiAgICAgICAgcmV0dXJuIFvOuywgz4ZdO1xuICAgIH07XG5cbiAgICBtZXJjWSjPhjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubG9nKE1hdGgudGFuKM+GIC8gMiArIE1hdGguUEkgLyA0KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFByb2plY3QgYSBwb2ludCBvbiB0aGUgbWFwXG4gICAgICogQHBhcmFtIM67IExvbmdpdHVkZVxuICAgICAqIEBwYXJhbSDPhiBMYXRpdHVkZVxuICAgICAqIEByZXR1cm4gW3gsIHldXG4gICAgKiovXG4gICAgbWFwVG9DYW52YXMozrs6IG51bWJlciwgz4Y6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgeW1pbiA9IHRoaXMubWVyY1kodGhpcy5tYXBCb3VuZC5zb3V0aCk7XG4gICAgICAgIGNvbnN0IHltYXggPSB0aGlzLm1lcmNZKHRoaXMubWFwQm91bmQubm9ydGgpO1xuICAgICAgICBjb25zdCB4RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC53aWR0aCAvICh0aGlzLm1hcEJvdW5kLmVhc3QgLSB0aGlzLm1hcEJvdW5kLndlc3QpO1xuICAgICAgICBjb25zdCB5RmFjdG9yID0gdGhpcy5jYW52YXNCb3VuZC5oZWlnaHQgLyAoeW1heCAtIHltaW4pO1xuXG4gICAgICAgIGxldCB5ID0gdGhpcy5tZXJjWSh0aGlzLmRlZzJyYWQoz4YpKTtcbiAgICAgICAgY29uc3QgeCA9ICh0aGlzLmRlZzJyYWQozrspIC0gdGhpcy5tYXBCb3VuZC53ZXN0KSAqIHhGYWN0b3I7XG4gICAgICAgIHkgPSAoeW1heCAtIHkpICogeUZhY3RvcjtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9O1xuXG4gICAgcmFkMmRlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiByYWQgKiAxODAgLyBNYXRoLlBJO1xuICAgIH07XG5cbiAgICBkZWcycmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEVYUEVSSU1FTlRBTCBmcm9tXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL29uYWNpL2xlYWZsZXQtdmVsb2NpdHkvY29tbWl0L2JkNDVlYTljMzk5MDIxODUxZWNjOThiOTdkNGIxMjZiNjRhZGNjOGZcbiAgICAgY2FudmFzVG9NYXAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IGxhdGxvbiA9IHRoaXMubWFwQm91bmQubWFwLmNvbnRhaW5lclBvaW50VG9MYXRMbmcoTC5wb2ludCh4LHkpKTtcbiAgICAgICAgcmV0dXJuIFtsYXRsb24ubG5nLCBsYXRsb24ubGF0XTtcbiAgICB9O1xuICAgIFxuICAgIG1hcFRvQ2FudmFzKGxhdDogbnVtYmVyLCBsb246IG51bWJlcik6IG51bWJlcltdIHtcbiAgICAgICAgY29uc3QgeHkgPSB0aGlzLm1hcEJvdW5kLm1hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KEwubGF0TG5nKGxhdCxsb24pKTtcbiAgICAgICAgcmV0dXJuIFt4eS54LCB4eS55XTtcbiAgICB9XG4gICAgKiovXG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gzrsgTG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIM+GIExhdGl0dWRlXG4gICAgICogQHBhcmFtIHggXG4gICAgICogQHBhcmFtIHkgXG4gICAgICogQHJldHVybiBbXVxuICAgICAqL1xuICAgIGRpc3RvcnRpb24ozrs6IG51bWJlciwgz4Y6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgICAgIGNvbnN0IM+EID0gMiAqIE1hdGguUEk7XG4gICAgICAgIC8vICAgIHZhciBIID0gTWF0aC5wb3coMTAsIC01LjIpOyAvLyAwLjAwMDAwNjMwOTU3MzQ0NDgwMTkzXG4gICAgICAgIC8vICAgIHZhciBIID0gMC4wMDAwMzYwOyAgICAgICAgICAvLyAwLjAwMDAzNjDCsM+GIH49IDRtICAoZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY2FtYmVjYy9lYXJ0aC9ibG9iL21hc3Rlci9wdWJsaWMvbGlicy9lYXJ0aC8xLjAuMC9taWNyby5qcyNMMTMpXG4gICAgICAgIC8vQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGFud2lsZC9sZWFmbGV0LXZlbG9jaXR5L2lzc3Vlcy8xNSNpc3N1ZWNvbW1lbnQtMzQ1MjYwNzY4XG4gICAgICAgIGNvbnN0IEggPSA1O1xuICAgICAgICBjb25zdCBozrsgPSDOuyA8IDAgPyBIIDogLUg7XG4gICAgICAgIGNvbnN0IGjPhiA9IM+GIDwgMCA/IEggOiAtSDtcblxuICAgICAgICAvLyBUT0RPOiBmaW5pc2hcbiAgICAgICAgY29uc3QgcM67ID0gdGhpcy5tYXBUb0NhbnZhcyjOuyArIGjOuywgz4YpO1xuICAgICAgICBjb25zdCBwz4YgPSB0aGlzLm1hcFRvQ2FudmFzKM67LCDPhiArIGjPhik7XG5cbiAgICAgICAgLy8gTWVyaWRpYW4gc2NhbGUgZmFjdG9yIChzZWUgU255ZGVyLCBlcXVhdGlvbiA0LTMpLCB3aGVyZSBSID0gMS4gVGhpcyBoYW5kbGVzIGlzc3VlIHdoZXJlIGxlbmd0aCBvZiAxwrogzrtcbiAgICAgICAgLy8gY2hhbmdlcyBkZXBlbmRpbmcgb24gz4YuIFdpdGhvdXQgdGhpcywgdGhlcmUgaXMgYSBwaW5jaGluZyBlZmZlY3QgYXQgdGhlIHBvbGVzLlxuICAgICAgICBjb25zdCBrID0gTWF0aC5jb3Moz4YgLyAzNjAgKiDPhCk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAocM67WzBdIC0geCkgLyBozrsgLyBrLFxuICAgICAgICAgICAgKHDOu1sxXSAtIHkpIC8gaM67IC8gayxcbiAgICAgICAgICAgIChwz4ZbMF0gLSB4KSAvIGjPhixcbiAgICAgICAgICAgIChwz4ZbMV0gLSB5KSAvIGjPhlxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBkaXN0b3J0aW9uIG9mIHRoZSB3aW5kIHZlY3RvciBjYXVzZWQgYnkgdGhlIHNoYXBlIG9mIHRoZSBwcm9qZWN0aW9uIGF0IHBvaW50ICh4LCB5KS4gVGhlIHdpbmRcbiAgICAgKiB2ZWN0b3IgaXMgbW9kaWZpZWQgaW4gcGxhY2UgYW5kIHJldHVybmVkIGJ5IHRoaXMgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIM67IFxuICAgICAqIEBwYXJhbSDPhiBcbiAgICAgKiBAcGFyYW0geCBcbiAgICAgKiBAcGFyYW0geSBcbiAgICAgKiBAcGFyYW0gc2NhbGUgc2NhbGUgZmFjdG9yXG4gICAgICogQHBhcmFtIHdpbmQgW3UsIHZdXG4gICAgICogQHJldHVybiBbXVxuICAgICAqL1xuICAgIGRpc3RvcnQozrs6IG51bWJlciwgz4Y6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHdpbmQ6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgICAgIGNvbnN0IHUgPSB3aW5kLnUgKiBzY2FsZTtcbiAgICAgICAgY29uc3QgdiA9IHdpbmQudiAqIHNjYWxlO1xuICAgICAgICBjb25zdCBkID0gdGhpcy5kaXN0b3J0aW9uKM67LCDPhiwgeCwgeSk7XG5cbiAgICAgICAgLy8gU2NhbGUgZGlzdG9ydGlvbiB2ZWN0b3JzIGJ5IHUgYW5kIHYsIHRoZW4gYWRkLlxuICAgICAgICB3aW5kLnUgPSBkWzBdICogdSArIGRbMl0gKiB2O1xuICAgICAgICB3aW5kLnYgPSBkWzFdICogdSArIGRbM10gKiB2O1xuICAgICAgICByZXR1cm4gd2luZDtcbiAgICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvQHRlYW1zdXBlcmNlbGwvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vbGVhZmxldC12ZWxvY2l0eS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvQHRlYW1zdXBlcmNlbGwvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vbGVhZmxldC12ZWxvY2l0eS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNYXBCb3VuZCB7XG4gICAgcHVibGljIF9tYXA6IEwuTWFwO1xuICAgIHB1YmxpYyBzb3V0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBub3J0aDogbnVtYmVyO1xuICAgIHB1YmxpYyBlYXN0OiBudW1iZXI7XG4gICAgcHVibGljIHdlc3Q6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1hcDogTC5NYXAsIG5vcnRoOiBudW1iZXIsIGVhc3Q6IG51bWJlciwgc291dGg6IG51bWJlciwgd2VzdDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5ub3J0aCA9IG5vcnRoICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgdGhpcy5lYXN0ID0gZWFzdCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuc291dGggPSBzb3V0aCAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMud2VzdCA9IHdlc3QgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH1cblxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDcyMCArIHRoaXMuZWFzdCAtIHRoaXMud2VzdCkgJSAzNjA7XG4gICAgfVxuXG4gICAgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDM2MCArIHRoaXMubm9ydGggLSB0aGlzLnNvdXRoKSAlIDE4MDtcbiAgICB9XG5cbiAgICBnZXQgbWFwKCk6IEwuTWFwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydGljdWxlIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIGFnZTogbnVtYmVyO1xuICAgIHB1YmxpYyBtYXhBZ2U6IG51bWJlcjtcbiAgICBwdWJsaWMgeHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgeXQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaW50ZW5zaXR5OiBudW1iZXI7XG4gICAgcHVibGljIHdhdmVIZWlnaHQ/OiBudW1iZXI7IFxuICBcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgbWF4QWdlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgICAgdGhpcy5hZ2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhBZ2UpO1xuICAgICAgdGhpcy5tYXhBZ2UgPSBtYXhBZ2U7XG4gICAgfVxuICBcbiAgICByZXNldCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgdGhpcy54ID0geDtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLmFnZSA9IDA7XG4gICAgfVxuICBcbiAgICBnZXQgaXNEZWFkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuYWdlID4gdGhpcy5tYXhBZ2U7XG4gICAgfVxuICBcbiAgICBncm93KCkge1xuICAgICAgdGhpcy5hZ2UrKztcbiAgICB9XG4gIH1cbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgICBwdWJsaWMgdTogbnVtYmVyO1xuICAgIHB1YmxpYyB2OiBudW1iZXI7XG4gICAgcHVibGljIHdhdmVIZWlnaHQ/OiBudW1iZXI7IFxuICBcbiAgICBjb25zdHJ1Y3Rvcih1PzogbnVtYmVyLCB2PzogbnVtYmVyLCB3YXZlSGVpZ2h0PzogbnVtYmVyKSB7XG4gICAgICB0aGlzLnUgPSB1IHx8IDA7XG4gICAgICB0aGlzLnYgPSB2IHx8IDA7XG4gICAgICB0aGlzLndhdmVIZWlnaHQgPSB3YXZlSGVpZ2h0O1xuICAgIH1cbiAgXG4gICAgZ2V0IGludGVuc2l0eSgpIHtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy51ICogdGhpcy51ICsgdGhpcy52ICogdGhpcy52KTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xyXG5pbXBvcnQgQ29sb3JTY2FsZSBmcm9tIFwiLi9jb2xvclNjYWxlXCI7XHJcbmltcG9ydCBQYXJ0aWN1bGUgZnJvbSBcIi4vcGFydGljbGVcIjtcclxuaW1wb3J0IEFuaW1hdGlvbkJ1Y2tldCBmcm9tIFwiLi9hbmltYXRpb25CdWNrZXRcIjtcclxuaW1wb3J0IExheWVyIGZyb20gXCIuL2xheWVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmR5T3B0aW9ucyB7XHJcbiAgY2FudmFzOiBhbnk7XHJcbiAgZGF0YTogYW55O1xyXG4gIGNvbG9yU2NhbGU6IHN0cmluZ1tdO1xyXG4gIG1heFZlbG9jaXR5OiBudW1iZXI7XHJcbiAgbWluVmVsb2NpdHk6IG51bWJlcjtcclxuICB2ZWxvY2l0eVNjYWxlOiBudW1iZXI7XHJcbiAgcGFydGljbGVBZ2U6IG51bWJlcjtcclxuICBwYXJ0aWNsZU11bHRpcGxpZXI6IG51bWJlcjtcclxuICBwYXJ0aWNsZWxpbmVXaWR0aDogbnVtYmVyO1xyXG4gIGZyYW1lUmF0ZTogbnVtYmVyO1xyXG4gIG9wYWNpdHk6IG51bWJlcjtcclxuICB3YXZlTW9kZTogYm9vbGVhbjtcclxuICB3YXZlc1BhcnRpY2xlc1NlcGFyYXRpb246IG51bWJlcjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5keSB7XHJcblxyXG4gIHByaXZhdGUgZ3JpZDogYW55O1xyXG4gIHByaXZhdGUgzrswOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSDPhjA6IG51bWJlcjtcclxuICBwcml2YXRlIM6Uzrs6IG51bWJlcjtcclxuICBwcml2YXRlIM6Uz4Y6IG51bWJlcjtcclxuICBwcml2YXRlIG5pOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBuajogbnVtYmVyO1xyXG4gIHByaXZhdGUgY2FudmFzOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgY29sb3JTY2FsZTogQ29sb3JTY2FsZTtcclxuICBwcml2YXRlIHZlbG9jaXR5U2NhbGU6IG51bWJlcjtcclxuICBwcml2YXRlIHBhcnRpY2xlTXVsdGlwbGllciA9IDEgLyAzMDA7XHJcbiAgcHJpdmF0ZSBwYXJ0aWNsZUFnZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgcGFydGljbGVMaW5lV2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIGF1dG9Db2xvclJhbmdlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBvcGFjaXR5OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB3YXZlTW9kZTogYm9vbGVhbjtcclxuICBwcml2YXRlIHdhdmVzUGFydGljbGVzU2VwYXJhdGlvbjogbnVtYmVyOyAvLyBzZXBhcmF0aW9uIG9mIHdhdmUgcGFydGljbGVzXHJcblxyXG4gIHByaXZhdGUgbGF5ZXI6IExheWVyO1xyXG4gIHByaXZhdGUgcGFydGljdWxlczogUGFydGljdWxlW10gPSBbXTtcclxuICBwcml2YXRlIGFuaW1hdGlvbkJ1Y2tldDogQW5pbWF0aW9uQnVja2V0O1xyXG4gIHByaXZhdGUgY29udGV4dDJEOiBhbnk7XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25Mb29wOiBhbnkgPSBudWxsO1xyXG4gIHByaXZhdGUgZnJhbWVUaW1lOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB0aGVuID0gMDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFdpbmR5T3B0aW9ucykge1xyXG4gICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5jYW52YXMgPSBvcHRpb25zLmNhbnZhcztcclxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKG9wdGlvbnMuZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBXaW5keU9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zLm1pblZlbG9jaXR5ID09PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5tYXhWZWxvY2l0eSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXV0b0NvbG9yUmFuZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2xvclNjYWxlID0gbmV3IENvbG9yU2NhbGUob3B0aW9ucy5taW5WZWxvY2l0eSB8fCAwLCBvcHRpb25zLm1heFZlbG9jaXR5IHx8IDEwLCBvcHRpb25zLmNvbG9yU2NhbGUpO1xyXG4gICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gb3B0aW9ucy52ZWxvY2l0eVNjYWxlIHx8IDAuMDE7XHJcbiAgICB0aGlzLnBhcnRpY2xlQWdlID0gb3B0aW9ucy5wYXJ0aWNsZUFnZSB8fCA2NDtcclxuICAgIHRoaXMub3BhY2l0eSA9ICtvcHRpb25zLm9wYWNpdHkgfHwgMC45N1xyXG5cclxuICAgIHRoaXMucGFydGljbGVNdWx0aXBsaWVyID0gb3B0aW9ucy5wYXJ0aWNsZU11bHRpcGxpZXIgfHwgMSAvIDMwMDtcclxuICAgIHRoaXMucGFydGljbGVMaW5lV2lkdGggPSBvcHRpb25zLnBhcnRpY2xlbGluZVdpZHRoIHx8IDE7XHJcbiAgICBjb25zdCBmcmFtZVJhdGUgPSBvcHRpb25zLmZyYW1lUmF0ZSB8fCAxNTtcclxuICAgIHRoaXMuZnJhbWVUaW1lID0gMTAwMCAvIGZyYW1lUmF0ZTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy53YXZlTW9kZSkge1xyXG4gICAgICB0aGlzLndhdmVNb2RlID0gb3B0aW9ucy53YXZlTW9kZTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZUFnZSA9IG9wdGlvbnMucGFydGljbGVBZ2UgIHx8IDIwMDtcclxuICAgICAgdGhpcy5wYXJ0aWNsZU11bHRpcGxpZXIgPSBvcHRpb25zLnBhcnRpY2xlTXVsdGlwbGllciB8fCAxIC8gNzAwMDtcclxuICAgICAgdGhpcy52ZWxvY2l0eVNjYWxlID0gMC4wMDQ1O1xyXG4gICAgICB0aGlzLndhdmVzUGFydGljbGVzU2VwYXJhdGlvbiA9IG9wdGlvbnMud2F2ZXNQYXJ0aWNsZXNTZXBhcmF0aW9uIHx8IDMuNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFydGljdWxlQ291bnQoKSB7XHJcbiAgICBjb25zdCBwYXJ0aWN1bGVSZWR1Y3Rpb24gPSAoKC9hbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGV8aXBhZHxpcGhvbmV8aXBvZHxvcGVyYSBtaW5pfHdlYm9zL2kpLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpID8gKE1hdGgucG93KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxIC8gMykgfHwgMS42KSA6IDE7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoICogdGhpcy5sYXllci5jYW52YXNCb3VuZC5oZWlnaHQgKiB0aGlzLnBhcnRpY2xlTXVsdGlwbGllcikgKiBwYXJ0aWN1bGVSZWR1Y3Rpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkIGRhdGFcclxuICAgKiBAcGFyYW0gZGF0YVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IGFueVtdKSB7XHJcbiAgICBsZXQgdURhdGE6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgdkRhdGE6IGFueSA9IG51bGw7XHJcbiAgICBsZXQgd2F2ZUhlaWdodDogYW55ID0gbnVsbDtcclxuICAgIGNvbnN0IGdyaWQ6IFZlY3RvcltdID0gW107XHJcblxyXG4gICAgZGF0YS5mb3JFYWNoKChyZWNvcmQpID0+IHtcclxuICAgICAgc3dpdGNoIChgJHtyZWNvcmQuaGVhZGVyLnBhcmFtZXRlckNhdGVnb3J5fSwke3JlY29yZC5oZWFkZXIucGFyYW1ldGVyTnVtYmVyfWApIHtcclxuICAgICAgICBjYXNlIFwiMSwyXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsMlwiOlxyXG4gICAgICAgICAgdURhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMSwzXCI6XHJcbiAgICAgICAgY2FzZSBcIjIsM1wiOlxyXG4gICAgICAgICAgdkRhdGEgPSByZWNvcmQ7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgd2F2ZUhlaWdodCA9IHJlY29yZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF1RGF0YSB8fCAhdkRhdGEpIHtcclxuICAgICAgY29uc29sZS53YXJuKFwiRGF0YSBhcmUgbm90IGNvcnJlY3QgZm9ybWF0XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdURhdGEuZGF0YS5mb3JFYWNoKCh1OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qgd2ggPSB3YXZlSGVpZ2h0ICE9PSBudWxsID8gd2F2ZUhlaWdodC5kYXRhW2luZGV4XSA6IHVuZGVmaW5lZDtcclxuICAgICAgZ3JpZC5wdXNoKG5ldyBWZWN0b3IodSwgdkRhdGEuZGF0YVtpbmRleF0sIHdoKSk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZChcclxuICAgICAgZ3JpZCxcclxuICAgICAgdURhdGEuaGVhZGVyLmxhMSxcclxuICAgICAgdURhdGEuaGVhZGVyLmxvMSxcclxuICAgICAgdURhdGEuaGVhZGVyLmR5LFxyXG4gICAgICB1RGF0YS5oZWFkZXIuZHgsXHJcbiAgICAgIHVEYXRhLmhlYWRlci5ueSxcclxuICAgICAgdURhdGEuaGVhZGVyLm54XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuzrswID0gdURhdGEuaGVhZGVyLmxvMTtcclxuICAgIHRoaXMuz4YwID0gdURhdGEuaGVhZGVyLmxhMTtcclxuXHJcbiAgICB0aGlzLs6UzrsgPSB1RGF0YS5oZWFkZXIuZHg7XHJcbiAgICB0aGlzLs6Uz4YgPSB1RGF0YS5oZWFkZXIuZHlcclxuXHJcbiAgICB0aGlzLm5pID0gdURhdGEuaGVhZGVyLm54O1xyXG4gICAgdGhpcy5uaiA9IHVEYXRhLmhlYWRlci5ueTsgLy8gbnVtYmVyIG9mIGdyaWQgcG9pbnRzIFctRSBhbmQgTi1TIChlLmcuLCAxNDQgeCA3MylcclxuXHJcbiAgICB2YXIgcCA9IDA7XHJcbiAgICB2YXIgaXNDb250aW51b3VzID0gTWF0aC5mbG9vcih0aGlzLm5pICogdGhpcy7OlM67KSA+PSAzNjA7XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLm5qOyBqKyspIHtcclxuICAgICAgdmFyIHJvdyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubmk7IGkrKywgcCsrKSB7XHJcbiAgICAgICAgcm93W2ldID0gdGhpcy5ncmlkLmRhdGFbcF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzQ29udGludW91cykge1xyXG4gICAgICAgIC8vIEZvciB3cmFwcGVkIGdyaWRzLCBkdXBsaWNhdGUgZmlyc3QgY29sdW1uIGFzIGxhc3QgY29sdW1uIHRvIHNpbXBsaWZ5IGludGVycG9sYXRpb24gbG9naWNcclxuICAgICAgICByb3cucHVzaChyb3dbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZ3JpZFtqXSA9IHJvdztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hdXRvQ29sb3JSYW5nZSkge1xyXG4gICAgICBjb25zdCBtaW5NYXggPSB0aGlzLmdyaWQudmFsdWVSYW5nZTtcclxuICAgICAgdGhpcy5jb2xvclNjYWxlLnNldE1pbk1heChtaW5NYXhbMF0sIG1pbk1heFsxXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiBHZXQgaW50ZXJwb2xhdGVkIGdyaWQgdmFsdWUgZnJvbSBMb24vTGF0IHBvc2l0aW9uXHJcbiogQHBhcmFtIM67IHtGbG9hdH0gTG9uZ2l0dWRlXHJcbiogQHBhcmFtIM+GIHtGbG9hdH0gTGF0aXR1ZGVcclxuKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4qL1xyXG4gIHB1YmxpYyBpbnRlcnBvbGF0ZSjOuzogbnVtYmVyLCDPhjogbnVtYmVyKTogYW55IHtcclxuICAgIGlmICghdGhpcy5ncmlkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgdmFyIGkgPSB0aGlzLmZsb29yTW9kKM67IC0gdGhpcy7OuzAsIDM2MCkgLyB0aGlzLs6Uzrs7IC8vIGNhbGN1bGF0ZSBsb25naXR1ZGUgaW5kZXggaW4gd3JhcHBlZCByYW5nZSBbMCwgMzYwKVxyXG4gICAgdmFyIGogPSAodGhpcy7PhjAgLSDPhikgLyB0aGlzLs6Uz4Y7IC8vIGNhbGN1bGF0ZSBsYXRpdHVkZSBpbmRleCBpbiBkaXJlY3Rpb24gKzkwIHRvIC05MFxyXG5cclxuICAgIHZhciBmaSA9IE1hdGguZmxvb3IoaSk7XHJcbiAgICB2YXIgY2kgPSBmaSArIDE7XHJcbiAgICB2YXIgZmogPSBNYXRoLmZsb29yKGopO1xyXG4gICAgdmFyIGNqID0gZmogKyAxO1xyXG4gICAgdmFyIHJvdyA9IHRoaXMuZ3JpZFtmal07Ly9Eb250IGtub3cgd2h5IGhlIGRvc2VudCBmb3VuZCBhbnkgcm93IEVSUlJST1JcclxuICAgIGlmIChyb3cpIHtcclxuICAgICAgdmFyIGcwMCA9IHJvd1tmaV07XHJcbiAgICAgIHZhciBnMTAgPSByb3dbY2ldO1xyXG4gICAgICBpZiAodGhpcy5pc1ZhbHVlKGcwMCkgJiYgdGhpcy5pc1ZhbHVlKGcxMCkgJiYgKHJvdyA9IHRoaXMuZ3JpZFtjal0pKSB7XHJcbiAgICAgICAgdmFyIGcwMSA9IHJvd1tmaV07XHJcbiAgICAgICAgdmFyIGcxMSA9IHJvd1tjaV07XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZShnMDEpICYmIHRoaXMuaXNWYWx1ZShnMTEpKSB7XHJcbiAgICAgICAgICAvLyBBbGwgZm91ciBwb2ludHMgZm91bmQsIHNvIGludGVycG9sYXRlIHRoZSB2YWx1ZS5cclxuICAgICAgICAgIHJldHVybiB0aGlzLmJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoaSAtIGZpLCBqIC0gZmosIGcwMCwgZzEwLCBnMDEsIGcxMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhcnQobGF5ZXI6IExheWVyKSB7XHJcbiAgICB0aGlzLmNvbnRleHQyRCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIHRoaXMuY29udGV4dDJELmxpbmVXaWR0aCA9IHRoaXMucGFydGljbGVMaW5lV2lkdGg7XHJcbiAgICBjb25zdCBmYWRlT3BhY2l0eSA9IHRoaXMud2F2ZU1vZGUgPyAwLjc1IDogdGhpcy5vcGFjaXR5O1xyXG4gICAgdGhpcy5jb250ZXh0MkQuZmlsbFN0eWxlID0gYHJnYmEoMCwgMCwgMCwgJHtmYWRlT3BhY2l0eX0pYDtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gdGhpcy53YXZlTW9kZSA/IDAuMiA6IDAuNjtcclxuXHJcbiAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldCA9IG5ldyBBbmltYXRpb25CdWNrZXQodGhpcy5jb2xvclNjYWxlKTtcclxuXHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuc3BsaWNlKDAsIHRoaXMucGFydGljdWxlcy5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY3VsZUNvdW50OyBpKyspIHtcclxuICAgICAgdGhpcy5wYXJ0aWN1bGVzLnB1c2godGhpcy5sYXllci5jYW52YXNCb3VuZC5nZXRSYW5kb21QYXJ0aWN1bGUodGhpcy5wYXJ0aWNsZUFnZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGhlbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHRoaXMuZnJhbWUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgdGhpcy5wYXJ0aWN1bGVzLnNwbGljZSgwLCB0aGlzLnBhcnRpY3VsZXMubGVuZ3RoKTtcclxuICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0Py5jbGVhcigpO1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uTG9vcCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25Mb29wKTtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25Mb29wKTtcclxuICAgICAgdGhpcy5hbmltYXRpb25Mb29wID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmxvb3JNb2QoYTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhIC0gbiAqIE1hdGguZmxvb3IoYSAvIG4pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaXNWYWx1ZSh4OiBhbnkpIHtcclxuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHggIT09IHVuZGVmaW5lZDtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGJpbGluZWFySW50ZXJwb2xhdGVWZWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGcwMDogYW55LCBnMTA6IGFueSwgZzAxOiBhbnksIGcxMTogYW55KSB7XHJcbiAgICB2YXIgcnggPSAoMSAtIHgpO1xyXG4gICAgdmFyIHJ5ID0gKDEgLSB5KTtcclxuICAgIHZhciBhID0gcnggKiByeSwgYiA9IHggKiByeSwgYyA9IHJ4ICogeSwgZCA9IHggKiB5O1xyXG4gICAgdmFyIHUgPSBnMDAudSAqIGEgKyBnMTAudSAqIGIgKyBnMDEudSAqIGMgKyBnMTEudSAqIGQ7XHJcbiAgICB2YXIgdiA9IGcwMC52ICogYSArIGcxMC52ICogYiArIGcwMS52ICogYyArIGcxMS52ICogZDtcclxuICAgIHZhciB3aCA9IGcwMC53YXZlSGVpZ2h0ICogYSArIGcxMC53YXZlSGVpZ2h0ICogYiArIGcwMS53YXZlSGVpZ2h0ICogYyArIGcxMS53YXZlSGVpZ2h0ICogZDtcclxuICAgIGlmICh0aGlzLndhdmVNb2RlKSB7XHJcbiAgICAgIHJldHVybiBbdSwgdiwgd2hdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt1LCB2LCBNYXRoLnNxcnQodSAqIHUgKyB2ICogdildO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFydGljdWxlV2luZChwOiBQYXJ0aWN1bGUpOiBWZWN0b3Ige1xyXG4gICAgY29uc3QgbG5nTGF0ID0gdGhpcy5sYXllci5jYW52YXNUb01hcChwLngsIHAueSk7XHJcbiAgICBjb25zdCB3aW5kID0gdGhpcy5ncmlkLmdldChsbmdMYXRbMF0sIGxuZ0xhdFsxXSk7XHJcbiAgICBwLmludGVuc2l0eSA9IHdpbmQuaW50ZW5zaXR5O1xyXG4gICAgcC53YXZlSGVpZ2h0ID0gd2luZC53YXZlSGVpZ2h0O1xyXG4gICAgY29uc3QgbWFwQXJlYSA9IHRoaXMubGF5ZXIubWFwQm91bmQuaGVpZ2h0ICogdGhpcy5sYXllci5tYXBCb3VuZC53aWR0aDtcclxuICAgIHZhciB2ZWxvY2l0eVNjYWxlID0gdGhpcy52ZWxvY2l0eVNjYWxlICogTWF0aC5wb3cobWFwQXJlYSwgMC40KTtcclxuICAgIHRoaXMubGF5ZXIuZGlzdG9ydChsbmdMYXRbMF0sIGxuZ0xhdFsxXSwgcC54LCBwLnksIHZlbG9jaXR5U2NhbGUsIHdpbmQpO1xyXG4gICAgcmV0dXJuIHdpbmQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHByaXZhdGUgZnJhbWUoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbkxvb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZyYW1lKClcclxuICAgIH0pO1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGRlbHRhID0gbm93IC0gdGhpcy50aGVuO1xyXG4gICAgaWYgKGRlbHRhID4gdGhpcy5mcmFtZVRpbWUpIHtcclxuICAgICAgdGhpcy50aGVuID0gbm93IC0gKGRlbHRhICUgdGhpcy5mcmFtZVRpbWUpO1xyXG4gICAgICB0aGlzLmV2b2x2ZSgpO1xyXG4gICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXZvbHZlKCkge1xyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQ/LmNsZWFyKCk7XHJcbiAgICB0aGlzLnBhcnRpY3VsZXMuZm9yRWFjaCgocDogUGFydGljdWxlKSA9PiB7XHJcbiAgICAgIHAuZ3JvdygpO1xyXG4gICAgICBpZiAocC5pc0RlYWQpIHtcclxuICAgICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnJlc2V0UGFydGljdWxlKHApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHdpbmQgPSB0aGlzLmdldFBhcnRpY3VsZVdpbmQocCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uQnVja2V0LmFkZChwLCB3aW5kKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgaWYgKHRoaXMud2F2ZU1vZGUpIHtcclxuICAgICAgdGhpcy5kcmF3V2F2ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZHJhd1dpbmQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd1dpbmQoKSB7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLWluXCI7XHJcbiAgICB0aGlzLmNvbnRleHQyRC5maWxsUmVjdChcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC54TWluLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLnlNaW4sXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQud2lkdGgsXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQuaGVpZ2h0XHJcbiAgICApO1xyXG4gICAgLy8gRmFkZSBleGlzdGluZyBwYXJ0aWNsZSB0cmFpbHMuXHJcbiAgICB0aGlzLmNvbnRleHQyRC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcclxuICAgIHRoaXMuY29udGV4dDJELmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5ID09PSAwID8gMCA6IHRoaXMub3BhY2l0eSAqIDAuOTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbkJ1Y2tldC5kcmF3KHRoaXMuY29udGV4dDJEKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmVydGljYWxPZmZzZXQob2Zmc2V0OiBudW1iZXIsIG1heE9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiA3ICogTWF0aC5jb3MoKE1hdGguYWJzKG9mZnNldCkgLyBtYXhPZmZzZXQpICogKE1hdGguUEkgLyAyKSk7XHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgZ2VuZXJhdGVPZmZzZXRzKGNvdW50OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgbnVtRGl2aXNpb25zID0gKGNvdW50IC0gMSkgLyAyO1xyXG4gICAgICBsZXQgb2Zmc2V0cyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gLW51bURpdmlzaW9uczsgaSA8PSBudW1EaXZpc2lvbnM7IGkrKykge1xyXG4gICAgICAgIG9mZnNldHMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gb2Zmc2V0cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlV2F2ZVBhcnRpY2xlcyh3YXZlSGVpZ2h0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAwLjUpIHJldHVybiA0O1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAwLjcpIHJldHVybiA1O1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAxKSByZXR1cm4gNjtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMS41KSByZXR1cm4gNztcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgMikgcmV0dXJuIDg7XHJcbiAgICBpZiAod2F2ZUhlaWdodCA8IDIuNSkgcmV0dXJuIDk7XHJcbiAgICBpZiAod2F2ZUhlaWdodCA8IDMpIHJldHVybiAxMDtcclxuICAgIGlmICh3YXZlSGVpZ2h0IDwgNCkgcmV0dXJuIDEwO1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAxMCkgcmV0dXJuIDExO1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAyMCkgcmV0dXJuIDEyO1xyXG4gICAgaWYgKHdhdmVIZWlnaHQgPCAzMCkgcmV0dXJuIDEzO1xyXG4gICAgcmV0dXJuIDE0O1xyXG4gIH1cclxuICBcclxuICBcclxuXHJcbiAgcHJpdmF0ZSBkcmF3V2F2ZXMoKSB7XHJcbiAgICBjb25zdCBnID0gdGhpcy5jb250ZXh0MkQ7XHJcbiAgICBnLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwiZGVzdGluYXRpb24taW5cIjtcclxuICAgIGcuZmlsbFJlY3QoXHJcbiAgICAgIHRoaXMubGF5ZXIuY2FudmFzQm91bmQueE1pbixcclxuICAgICAgdGhpcy5sYXllci5jYW52YXNCb3VuZC55TWluLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLndpZHRoLFxyXG4gICAgICB0aGlzLmxheWVyLmNhbnZhc0JvdW5kLmhlaWdodFxyXG4gICAgKTtcclxuICAgIGcuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJsaWdodGVyXCI7XHJcbiAgICBnLmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gIFxyXG4gICAgdGhpcy5hbmltYXRpb25CdWNrZXQuZ2V0QnVja2V0cygpLmZvckVhY2goKGJ1Y2tldDogUGFydGljdWxlW10sIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZiAoYnVja2V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBnLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGcuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NhbGUuY29sb3JBdChpKTtcclxuICBcclxuICAgICAgICBidWNrZXQuZm9yRWFjaCgocGFydGljbGU6IFBhcnRpY3VsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZHggPSBwYXJ0aWNsZS54dCAtIHBhcnRpY2xlLng7XHJcbiAgICAgICAgICBjb25zdCBkeSA9IHBhcnRpY2xlLnl0IC0gcGFydGljbGUueTtcclxuICAgICAgICAgIGNvbnN0IG1hZyA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCBwZXJwWCA9IG1hZyA/IC1keSAvIG1hZyA6IDA7XHJcbiAgICAgICAgICBjb25zdCBwZXJwWSA9IG1hZyA/IGR4IC8gbWFnIDogMDtcclxuICAgICAgICAgIGNvbnN0IG5vcm1YID0gbWFnID8gZHggLyBtYWcgOiAwO1xyXG4gICAgICAgICAgY29uc3Qgbm9ybVkgPSBtYWcgPyBkeSAvIG1hZyA6IDA7XHJcbiAgXHJcbiAgICAgICAgICBjb25zdCB3YXZlSGVpZ2h0ID0gIHBhcnRpY2xlLndhdmVIZWlnaHQgfHwgMTtcclxuICAgICAgICAgIGNvbnN0IG51bVdhdmVQYXJ0aWNsZXMgPSB0aGlzLmNhbGN1bGF0ZVdhdmVQYXJ0aWNsZXMod2F2ZUhlaWdodCk7XHJcbiAgICAgICAgICBjb25zdCBvZmZzZXRzID0gdGhpcy5nZW5lcmF0ZU9mZnNldHMobnVtV2F2ZVBhcnRpY2xlcyk7XHJcbiAgICAgICAgICBjb25zdCBTRVBBUkFUSU9OID0gdGhpcy53YXZlc1BhcnRpY2xlc1NlcGFyYXRpb247XHJcbiAgICAgICAgICBjb25zdCBtYXhPZmZzZXQgPSAzLjU7XHJcbiAgXHJcbiAgICAgICAgICBvZmZzZXRzLmZvckVhY2goKG9mZnNldCkgPT4ge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHNoaWZ0WCA9IHBlcnBYICogb2Zmc2V0ICogU0VQQVJBVElPTjtcclxuICAgICAgICAgICAgICBjb25zdCBzaGlmdFkgPSBwZXJwWSAqIG9mZnNldCAqIFNFUEFSQVRJT047XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc3Qgdk9mZiA9IHRoaXMudmVydGljYWxPZmZzZXQob2Zmc2V0LCBtYXhPZmZzZXQpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IHBhcnRpY2xlLnggKyBzaGlmdFggKyBub3JtWCAqIHZPZmY7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gcGFydGljbGUueSArIHNoaWZ0WSArIG5vcm1ZICogdk9mZjtcclxuICAgICAgICAgICAgICBjb25zdCBlbmRYID0gcGFydGljbGUueHQgKyBzaGlmdFggKyBub3JtWCAqIHZPZmY7XHJcbiAgICAgICAgICAgICAgY29uc3QgZW5kWSA9IHBhcnRpY2xlLnl0ICsgc2hpZnRZICsgbm9ybVkgKiB2T2ZmO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGcubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgICAgICAgICAgICBnLmxpbmVUbyhlbmRYLCBlbmRZKTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgcGFydGljbGUueCA9IHBhcnRpY2xlLnh0O1xyXG4gICAgICAgICAgcGFydGljbGUueSA9IHBhcnRpY2xlLnl0O1xyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGcuc3Ryb2tlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgQ2FudmFzQm91bmQgZnJvbSBcIi4vY2FudmFzQm91bmRcIjtcclxuaW1wb3J0IE1hcEJvdW5kIGZyb20gXCIuL21hcEJvdW5kXCI7XHJcbmltcG9ydCBXaW5keSBmcm9tIFwiLi93aW5keVwiO1xyXG5pbXBvcnQgQ2FudmFzTGF5ZXIgZnJvbSBcIi4vTC5DYW52YXNMYXllclwiO1xyXG5pbXBvcnQgVmVsb2NpdHlMYXllciBmcm9tIFwiLi9MLlZlbG9jaXR5TGF5ZXJcIjtcclxuaW1wb3J0IENvbnRyb2xWZWxvY2l0eSBmcm9tICcuL0wuQ29udHJvbC5WZWxvY2l0eSc7XHJcblxyXG4oPGFueT53aW5kb3cpLkNhbnZhc0JvdW5kID0gQ2FudmFzQm91bmQ7XHJcbig8YW55PndpbmRvdykuTWFwQm91bmQgPSBNYXBCb3VuZDtcclxuKDxhbnk+d2luZG93KS5XaW5keSA9IFdpbmR5O1xyXG5cclxuZGVjbGFyZSB2YXIgTDogYW55O1xyXG5cclxuTC5DYW52YXNMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgQ2FudmFzTGF5ZXIoKSk7XHJcbkwuY2FudmFzTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIG5ldyBMLkNhbnZhc0xheWVyKCk7XHJcbn07XHJcblxyXG5MLkNvbnRyb2wuVmVsb2NpdHkgPSAoTC5Db250cm9sKS5leHRlbmQobmV3IENvbnRyb2xWZWxvY2l0eSk7XHJcbkwuY29udHJvbC52ZWxvY2l0eSA9IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcclxuXHRyZXR1cm4gbmV3IEwuQ29udHJvbC5WZWxvY2l0eShvcHRpb25zKTtcclxufTtcclxuXHJcbkwuVmVsb2NpdHlMYXllciA9IChMLkxheWVyID8gTC5MYXllciA6IEwuQ2xhc3MpLmV4dGVuZChuZXcgVmVsb2NpdHlMYXllcigpKTtcclxuTC52ZWxvY2l0eUxheWVyID0gZnVuY3Rpb24gKG9wdGlvbnM6IGFueSkge1xyXG5cdHJldHVybiBuZXcgTC5WZWxvY2l0eUxheWVyKG9wdGlvbnMpO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==