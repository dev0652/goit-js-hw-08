!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(w,t),d?g(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=p();if(h(e))return x(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?b(n,u-(e-c)):n}(e))}function x(e){return f=void 0,m&&r?g(e):(r=i=void 0,a)}function O(){var e=p(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(w,t),g(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=S(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?a:x(p())},O}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var j={form:document.querySelector(".feedback-form"),input:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]'),button:document.querySelector('button[type="submit"]')};function h(){""===j.input.value||""===j.textarea.value?j.button.disabled=!0:j.button.disabled=!1}var w=localStorage.getItem("feedback-form-state"),x=JSON.parse(w);w&&(j.input.value=x.email,j.textarea.value=x.message,h());var O=x||{};j.form.addEventListener("input",e(t)((function(e){var t=e.target.name,n=e.target.value;O[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(O)),h()}),500)),j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("User submitted the following data:",x),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),O={}}))}();
//# sourceMappingURL=03-feedback.e0ac3f19.js.map