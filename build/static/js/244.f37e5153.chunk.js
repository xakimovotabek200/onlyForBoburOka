"use strict";(self.webpackChunkorebishopping=self.webpackChunkorebishopping||[]).push([[244],{1462:function(e,t,r){r(2791);var i=r(3329);t.Z=function(e){var t=e.heading;return(0,i.jsx)("div",{className:"text-3xl font-semibold pb-6",children:t})}},363:function(e,t,r){r.d(t,{Z:function(){return d}});r(2791);var i=r(6355),s=r(6856),n=(r(6643),r(3329)),l=function(e){var t=e.text;return(0,n.jsx)("div",{className:"bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer",children:t})},o=r(7689),a=r(9434),c=r(485),d=function(e){var t=(0,a.I0)(),r=function(e){return String(e).toLowerCase().split(" ").join("")}(e.productName),d=(0,o.s0)(),x=e;return(0,n.jsxs)("div",{className:"w-full relative group",children:[(0,n.jsxs)("div",{className:"max-w-80 max-h-80 relative overflow-y-hidden ",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:e.img,alt:e.productName})}),(0,n.jsx)("div",{className:"absolute top-6 left-8",children:e.badge&&(0,n.jsx)(l,{text:"New"})}),(0,n.jsx)("div",{className:"w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700",children:(0,n.jsxs)("ul",{className:"w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r",children:[(0,n.jsxs)("li",{onClick:function(){return t((0,c.Xq)({_id:e.id,name:e.productName,quantity:1,image:e.img,price:e.price}))},className:"text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full",children:["Savatga qo'shish",(0,n.jsx)("span",{children:(0,n.jsx)(i.FeP,{})})]}),(0,n.jsxs)("li",{onClick:function(){d("/product/".concat(r),{state:{item:x}})},className:"text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full",children:["Xammasini korish",(0,n.jsx)("span",{className:"text-lg",children:(0,n.jsx)(s.yvh,{})})]})]})})]}),(0,n.jsxs)("div",{className:"max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between font-titleFont",children:[(0,n.jsx)("h2",{className:"text-lg text-primeColor font-bold",children:e.productName}),(0,n.jsx)("p",{className:"text-[#767676] text-[14px]",children:e.price})]}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"text-[#767676] text-[14px]",children:e.color})})]})]})}},6227:function(e,t,r){var i=r(9439),s=r(2791),n=r(1462),l=r(363),o=r(3329);t.Z=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),r=t[0],a=t[1];return(0,s.useEffect)((function(){fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct").then((function(e){return e.json()})).then((function(e){a(e.products)}))}),[]),(0,o.jsxs)("div",{className:"w-full pb-20",children:[(0,o.jsx)(n.Z,{heading:"Eng ko'p buyrutma qilingan tavarlar"}),(0,o.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:null===r||void 0===r?void 0:r.map((function(e){return(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{img:"http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description,id:e.id})},e.id)}))})]})}},8757:function(e,t,r){var i=r(9439),s=r(2791),n=r(7689),l=r(3329);t.Z=function(e){var t=e.prevLocation,r=(0,n.TH)(),o=(0,s.useState)(""),a=(0,i.Z)(o,2),c=(a[0],a[1]);return(0,s.useEffect)((function(){c(r.pathname.split("/")[1])}),[r]),(0,l.jsxs)("div",{className:"w-full py-10 xl:py-10 flex flex-col gap-3",children:[(0,l.jsx)("h1",{className:"text-5xl text-primeColor font-titleFont font-bold",children:"Mahsulotlar"}),(0,l.jsxs)("p",{className:"text-sm font-normal text-lightText capitalize flex items-center",children:[(0,l.jsxs)("span",{children:[" ",""===t?"Asosiy":t]}),(0,l.jsx)("span",{className:"px-1"}),(0,l.jsx)("span",{className:"capitalize font-semibold text-primeColor"})]})]})}},3244:function(e,t,r){r.r(t);var i=r(9439),s=r(2791),n=r(6227),l=r(8757),o=r(3329);t.default=function(){var e=(0,s.useState)(""),t=(0,i.Z)(e,1)[0];return(0,o.jsxs)("div",{className:"max-w-container mx-auto",children:[(0,o.jsx)(l.Z,{title:"Offer",prevLocation:t}),(0,o.jsx)("div",{className:"pb-10",children:(0,o.jsx)(n.Z,{})})]})}}}]);
//# sourceMappingURL=244.f37e5153.chunk.js.map