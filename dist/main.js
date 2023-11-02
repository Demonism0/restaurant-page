(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var o=n(81),c=n.n(o),a=n(645),r=n.n(a),d=n(667),i=n.n(d),s=new URL(n(88),n.b),l=r()(c()),p=i()(s);l.push([t.id,`body {\n    margin: 0;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n}\n.header {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    padding: 20px;\n    background-color: rgb(29, 29, 29);\n}\n.header > button {\n    height: 50px;\n    width: 150px;\n    font-size: 30px;\n    background-color: rgb(0, 0, 0);\n    color: rgb(209, 227, 211);\n    border: 2px solid white;\n    border-radius: 7px;\n}\n.middle {\n    background: url(${p});\n    background-size: 100% auto;\n    display: grid;\n    grid-template-columns: 1fr minmax(250px, 3fr) 1fr;\n    padding: 20px;\n}\n.container {\n    grid-column: 2 / 3;\n    background-color: rgb(29, 29, 29);\n    padding: 20px 0;\n    color: white;\n    border-radius: 30px;\n    display: grid;\n    grid-template-columns: 1fr minmax(200px, 2fr) 1fr;\n    gap: 20px;\n}\n#title {\n    grid-column: 2 / 3;\n    font-size: 70px;\n    text-shadow: 2px 2px black;\n    justify-self: center;\n    margin: 10px;\n}\n.card {\n    grid-column: 2 / 3;\n    padding-top: 10px;\n    border: 10px solid gray;\n    border-radius: 20px;\n}\n.tag {\n    font-size: 30px;\n    margin-left: 20px;\n    font-weight: bold;\n}\n.text {\n    font-size: 1rem;\n    margin-left: 10px;\n    margin-right: 10px;\n}\np {\n    margin: 0.5rem\n}\np > span {\n    font-weight: bold;\n}\n.footer {\n    background-color: rgb(29, 29, 29);\n    padding: 10px 0;\n    text-align: center;\n    color: white;\n}\n.footer > a {\n    color: white;\n}\n.footer > a:visited {\n    color: white;\n}`,""]);const u=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,c,a){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(r[i]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),c&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=c):l[4]="".concat(c)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},r=[],d=0;d<t.length;d++){var i=t[d],s=o.base?i[0]+o.base:i[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=c(m,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function c(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,c){var a=o(t=t||[],c=c||{});return function(t){t=t||[];for(var r=0;r<a.length;r++){var d=n(a[r]);e[d].references--}for(var i=o(t,c),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=i}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,c&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},88:(t,e,n)=>{t.exports=n.p+"83753a5c47f41518c89f.jpg"}},e={};function n(o){var c=e[o];if(void 0!==c)return c.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!t;)t=o[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),c=n.n(o),a=n(569),r=n.n(a),d=n(565),i=n.n(d),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=r().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=l(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var C=n(88);function f(t){const e=document.createElement("div");e.setAttribute("id","title"),e.textContent="Eats.",t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","card");const o=document.createElement("div");o.setAttribute("class","tag"),o.textContent="About";const c=document.createElement("div");c.setAttribute("class","text");const a=document.createElement("p");a.innerHTML="Here at <span>Eats.</span>, we pride ourselves on our wide variety of food.";const r=document.createElement("p");r.textContent="Take your tastebuds on a journey, and come down for a feast like you've never experienced!",c.appendChild(a),c.appendChild(r),n.appendChild(o),n.appendChild(c),t.appendChild(n);const d=document.createElement("div");d.setAttribute("class","card");const i=document.createElement("div");i.setAttribute("class","tag"),i.textContent="Hours";const s=document.createElement("div");s.setAttribute("class","text");const l=document.createElement("p");l.textContent="Monday: 8AM - 9PM";const p=document.createElement("p");p.textContent="Tuesday: Closed";const u=document.createElement("p");u.textContent="Wednesday: 8AM - 9PM";const m=document.createElement("p");m.textContent="Thursday: 8AM - 9PM";const h=document.createElement("p");h.textContent="Friday: 8AM - 11PM";const C=document.createElement("p");C.textContent="Saturday: 8AM - 11PM";const f=document.createElement("p");f.textContent="Sunday: 8AM - 9PM",s.appendChild(l),s.appendChild(p),s.appendChild(u),s.appendChild(m),s.appendChild(h),s.appendChild(C),s.appendChild(f),d.appendChild(i),d.appendChild(s),t.appendChild(d);const v=document.createElement("div");v.setAttribute("class","card");const b=document.createElement("div");b.setAttribute("class","tag"),b.textContent="Location";const x=document.createElement("div");x.setAttribute("class","text");const g=document.createElement("p");g.textContent="1 Westbrook Lane, Baltimore",x.appendChild(g),v.appendChild(b),v.appendChild(x),t.appendChild(v)}!function(){const t=document.querySelector("#content"),e=document.createElement("div");e.setAttribute("class","header");const n=document.createElement("div");n.setAttribute("class","middle");const o=document.createElement("div");o.setAttribute("class","footer"),t.appendChild(e),t.appendChild(n),t.appendChild(o);const c=document.createElement("button");c.textContent="Home";const a=document.createElement("button");a.textContent="Menu";const r=document.createElement("button");r.textContent="Contact";const d=document.createElement("div");f(d),c.addEventListener("click",(()=>{d.textContent="",f(d)})),a.addEventListener("click",(()=>{d.textContent="",function(t){const e=document.createElement("div");e.setAttribute("id","title"),e.textContent="Menu",t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","card");const o=document.createElement("div");o.setAttribute("class","tag"),o.textContent="Starters";const c=document.createElement("div");c.setAttribute("class","text");const a=document.createElement("p");a.textContent="Keep your tastebuds busy while waiting for your main course.",c.appendChild(a),n.appendChild(o),n.appendChild(c),t.appendChild(n);const r=document.createElement("div");r.setAttribute("class","card");const d=document.createElement("div");d.setAttribute("class","tag"),d.textContent="Mains";const i=document.createElement("div");i.setAttribute("class","text");const s=document.createElement("p");s.textContent="What do you feel like having today?",i.appendChild(s),r.appendChild(d),r.appendChild(i),t.appendChild(r);const l=document.createElement("div");l.setAttribute("class","card");const p=document.createElement("div");p.setAttribute("class","tag"),p.textContent="Sides";const u=document.createElement("div");u.setAttribute("class","text");const m=document.createElement("p");m.textContent="Compliment your main course with a delicious side!",u.appendChild(m),l.appendChild(p),l.appendChild(u),t.appendChild(l);const h=document.createElement("div");h.setAttribute("class","card");const C=document.createElement("div");C.setAttribute("class","tag"),C.textContent="Beverages";const f=document.createElement("div");f.setAttribute("class","text");const v=document.createElement("p");v.textContent="Quench your thirst",f.appendChild(v),h.appendChild(C),h.appendChild(f),t.appendChild(h);const b=document.createElement("div");b.setAttribute("class","card");const x=document.createElement("div");x.setAttribute("class","tag"),x.textContent="Desserts";const g=document.createElement("div");g.setAttribute("class","text");const E=document.createElement("p");E.textContent="Craving for something sweet?",g.appendChild(E),b.appendChild(x),b.appendChild(g),t.appendChild(b)}(d)})),r.addEventListener("click",(()=>{d.textContent="",function(t){const e=document.createElement("div");e.setAttribute("id","title"),e.textContent="Contact Us",t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","card");const o=document.createElement("div");o.setAttribute("class","tag"),o.textContent="Phone";const c=document.createElement("div");c.setAttribute("class","text");const a=document.createElement("p");a.textContent="+65 8123 4567",c.appendChild(a),n.appendChild(o),n.appendChild(c),t.appendChild(n);const r=document.createElement("div");r.setAttribute("class","card");const d=document.createElement("div");d.setAttribute("class","tag"),d.textContent="Email";const i=document.createElement("div");i.setAttribute("class","text");const s=document.createElement("p");s.textContent="contactus@eats.com",i.appendChild(s),r.appendChild(d),r.appendChild(i),t.appendChild(r);const l=document.createElement("div");l.setAttribute("class","card");const p=document.createElement("div");p.setAttribute("class","tag"),p.textContent="Facebook";const u=document.createElement("div");u.setAttribute("class","text");const m=document.createElement("p");m.textContent="facebook.com/eatsdining",u.appendChild(m),l.appendChild(p),l.appendChild(u),t.appendChild(l);const h=document.createElement("div");h.setAttribute("class","card");const C=document.createElement("div");C.setAttribute("class","tag"),C.textContent="Twitter";const f=document.createElement("div");f.setAttribute("class","text");const v=document.createElement("p");v.textContent="@EatsDining",f.appendChild(v),h.appendChild(C),h.appendChild(f),t.appendChild(h);const b=document.createElement("div");b.setAttribute("class","card");const x=document.createElement("div");x.setAttribute("class","tag"),x.textContent="Note";const g=document.createElement("div");g.setAttribute("class","text");const E=document.createElement("p");E.textContent="None of the contact information provided are real.",g.appendChild(E),b.appendChild(x),b.appendChild(g),t.appendChild(b)}(d)})),e.appendChild(c),e.appendChild(a),e.appendChild(r),(new Image).src=C,d.setAttribute("class","container"),n.appendChild(d),o.innerHTML='Website created by <a href="https://github.com/Demonism0/">Demonism0</a>'}()})()})();