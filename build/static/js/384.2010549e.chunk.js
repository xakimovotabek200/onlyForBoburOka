"use strict";(self.webpackChunkorebishopping=self.webpackChunkorebishopping||[]).push([[384],{7384:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var o=n(2791),r=n(4165),a=n(5861),i=n(9439);function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(){}var l={getItem:c,setItem:c,removeItem:c};function s(e){var t="".concat(e,"Storage");return function(e){if("object"!==("undefined"===typeof self?"undefined":u(self))||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch(o){return!1}return!0}(t)?self[t]:l}var m=function(e){var t=s(e);return{getItem:function(e){return new Promise((function(n,o){n(t.getItem(e))}))},setItem:function(e,n){return new Promise((function(o,r){o(t.setItem(e,n))}))},removeItem:function(e){return new Promise((function(n,o){n(t.removeItem(e))}))}}}("local"),f=n(4942),p=n(1413),d=n(9434),h=n(3329);var b=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],u=t[1],c=(0,o.useState)([]),l=(0,i.Z)(c,2),s=(l[0],l[1],(0,o.useState)([])),b=(0,i.Z)(s,2),x=(b[0],b[1]),y=(0,d.v9)((function(e){return e.orebiReducer.products})),v=function(e){var t=(0,o.useState)(e),n=(0,i.Z)(t,2),r=n[0],a=n[1];return[r,function(e){a((0,p.Z)((0,p.Z)({},r),{},(0,f.Z)({},e.target.name,e.target.value)))}]}({name:"",phone:"",location:"",product:String(y.map((function(e){return" ".concat(e.name," - ").concat(e.quantity)})))}),g=(0,i.Z)(v,2),w=g[0],j=g[1];(0,o.useEffect)((function(){n&&u(n)}),[]),(0,o.useEffect)((function(){}),[]),(0,o.useEffect)((function(){for(var e=0,t=0;t<y.length;t++)e+=y[t].quantity;x(e)}),[]);var S=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={Accept:"*/*","Content-Type":"application/json"},n=JSON.stringify(w),e.next=4,fetch("https://komiljonovdev.uz/Bobur/legendApi/api/addApplication",{method:"POST",body:n,headers:t}).then((function(){alert("Sizning arizangiz muoffaqqiyatli jo'natildi adminlar tominidan ko'rib chiqiladi"),m.removeItem("persist:root"),window.location.reload()})).catch((function(){console.log("Error")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault()},className:"my-3",children:[(0,h.jsx)("input",{className:"w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor",type:"text",placeholder:"Ismingiz",onChange:j,name:"name",value:w.name,required:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{className:"w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor",type:"text",placeholder:"Manzil",onChange:j,name:"location",value:w.location,required:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{className:"w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor",type:"phone",placeholder:"Telefon raqam",onChange:j,name:"phone",value:w.phone,required:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("input",{className:"w-full py-1 my-3 border-b-2 px-2 text-base  font-medium placeholder:font-normal placeholder:text-xl outline-none focus-within:border-primeColor",type:"text",placeholder:"Mahsulot",name:"product",onChange:j,value:y.map((function(e){return"".concat(e.name," - ").concat(e.quantity," - ").concat(e.price)})),required:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("button",{onClick:S,className:"w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300 my-3",type:"submit",children:"Arizani jonatish"})]})},x=function(){return(0,h.jsx)("div",{className:"max-w-container mx-auto px-4",children:(0,h.jsx)(b,{})})}}}]);
//# sourceMappingURL=384.2010549e.chunk.js.map