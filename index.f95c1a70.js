function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function j(t){return a=t,f=setTimeout(T,e),l?g(t):u}function h(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function T(){var t=v();if(h(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,r-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=v(),n=h(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return j(c);if(s)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=b(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(v())},O};const m={input:document.querySelector("#search-box"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};m.input.addEventListener("input",t(e)((function(t){t.preventDefault();e=m.input.value,console.log(e);var e}),300));
//# sourceMappingURL=index.f95c1a70.js.map
