parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Z6FK":[function(require,module,exports) {
(()=>{const t=document.querySelector("[data-menu-button]"),e=document.querySelector("[data-menu]"),n=document.querySelector("[data-wind]");t.addEventListener("click",()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.classList.toggle("is-open"),t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),n.classList.toggle("wind-open")});const o=document.querySelector("[data-card-button]"),a=document.querySelector("[data-card]");o.addEventListener("click",()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.classList.toggle("is-open"),o.setAttribute("aria-expanded",!t),a.classList.toggle("is-open")})})(),$(document).ready(function(){$("#menu-container").on("click","a",function(t){document.getElementById("menu-container").classList.toggle("is-open"),document.getElementById("header-btn-cont").classList.toggle("wind-open"),t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("body,html").animate({scrollTop:n},300)})}),$(document).ready(function(){$("#header").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top;$("body,html").animate({scrollTop:n},300)})});
},{}]},{},["Z6FK"], null)
//# sourceMappingURL=/Fixiki_/menu.9326b76b.js.map