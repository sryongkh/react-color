"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[306],{7306:function(e,r,n){n.r(r),r.default={components:{18:function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r,t=function(r,n){if(!n&&r&&r.__esModule)return r;if(null===r||"object"!==e(r)&&"function"!==typeof r)return{default:r};var t=a(n);if(t&&t.has(r))return t.get(r);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if("default"!==i&&Object.prototype.hasOwnProperty.call(r,i)){var u=l?Object.getOwnPropertyDescriptor(r,i):null;u&&(u.get||u.set)?Object.defineProperty(o,i,u):o[i]=r[i]}o.default=r,t&&t.set(r,o);return o}(n(1473)),o=(r=n(5594))&&r.__esModule?r:{default:r};function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:r})(e)}function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}return function(){var e=l((0,t.useState)("#59c09a"),2),r=e[0],n=e[1];return t.default.createElement(t.default.Fragment,null,t.default.createElement(o.default,{color:r,onChange:function(e){n(e.hexa)}}),t.default.createElement("div",{style:{background:r,marginTop:30,padding:10}},r))}}()},data:{18:{name:18,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nvar _react = _interopRequireWildcard(require("react"));\n\nvar _reactColorColorful = _interopRequireDefault(require("@uiw/react-color-colorful"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\n\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction Demo() {\n  var _useState = (0, _react.useState)("#59c09a"),\n      _useState2 = _slicedToArray(_useState, 2),\n      hex = _useState2[0],\n      setHex = _useState2[1];\n\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactColorColorful["default"], {\n    color: hex,\n    onChange: function onChange(color) {\n      setHex(color.hexa);\n    }\n  }), /*#__PURE__*/_react["default"].createElement("div", {\n    style: {\n      background: hex,\n      marginTop: 30,\n      padding: 10\n    }\n  }, hex));\n}\n\nreturn Demo;',language:"jsx",value:"import React, { useState } from 'react';\nimport Colorful from '@uiw/react-color-colorful';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#59c09a\");\n  return (\n    <>\n      <Colorful\n        color={hex}\n        onChange={(color) => {\n          setHex(color.hexa);\n        }}\n      />\n      <div style={{ background: hex, marginTop: 30, padding: 10 }}>\n        {hex}\n      </div>\n    </>\n  );\n}\nexport default Demo;"}},source:"React Color Colorful\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-colorful)](https://bundlephobia.com/package/@uiw/react-color-colorful) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-colorful.svg)](https://www.npmjs.com/package/@uiw/react-color-colorful) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-colorful/file/README.md)\n\nColorful Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n[![react-color-colorful](https://user-images.githubusercontent.com/1680273/125949419-cdcac5cb-f5a9-47af-956f-4056630503c9.png)](https://uiwjs.github.io/react-color/#/colorful)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-colorful\n```\n\n## Usage\n\n```jsx mdx:preview\nimport React, { useState } from 'react';\nimport Colorful from '@uiw/react-color-colorful';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#59c09a\");\n  return (\n    <>\n      <Colorful\n        color={hex}\n        onChange={(color) => {\n          setHex(color.hexa);\n        }}\n      />\n      <div style={{ background: hex, marginTop: 30, padding: 10 }}>\n        {hex}\n      </div>\n    </>\n  );\n}\nexport default Demo;\n```\n\n## Props\n\n```ts\nimport React from 'react';\nimport { HsvaColor, ColorResult } from '@uiw/color-convert';\nexport interface ColorfulProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  onChange?: (color: ColorResult) => void;\n  color?: string | HsvaColor;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}}]);
//# sourceMappingURL=306.ff48fe04.chunk.js.map