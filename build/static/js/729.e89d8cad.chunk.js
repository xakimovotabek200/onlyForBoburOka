"use strict";(self.webpackChunkorebishopping=self.webpackChunkorebishopping||[]).push([[729],{1462:function(e,r,t){t(2791);var i=t(3329);r.Z=function(e){var r=e.heading;return(0,i.jsx)("div",{className:"text-3xl font-semibold pb-6",children:r})}},363:function(e,r,t){t.d(r,{Z:function(){return d}});t(2791);var i=t(6355),o=t(6856),s=(t(6643),t(3329)),l=function(e){var r=e.text;return(0,s.jsx)("div",{className:"bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer",children:r})},n=t(7689),a=t(9434),c=t(485),d=function(e){var r=(0,a.I0)(),t=function(e){return String(e).toLowerCase().split(" ").join("")}(e.productName),d=(0,n.s0)(),u=e;return(0,s.jsxs)("div",{className:"w-full relative group",children:[(0,s.jsxs)("div",{className:"max-w-80 max-h-80 relative overflow-y-hidden ",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:e.img,alt:e.productName})}),(0,s.jsx)("div",{className:"absolute top-6 left-8",children:e.badge&&(0,s.jsx)(l,{text:"New"})}),(0,s.jsx)("div",{className:"w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700",children:(0,s.jsxs)("ul",{className:"w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r",children:[(0,s.jsxs)("li",{onClick:function(){return r((0,c.Xq)({_id:e.id,name:e.productName,quantity:1,image:e.img,price:e.price}))},className:"text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full",children:["Savatga qo'shish",(0,s.jsx)("span",{children:(0,s.jsx)(i.FeP,{})})]}),(0,s.jsxs)("li",{onClick:function(){d("/product/".concat(t),{state:{item:u}})},className:"text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full",children:["Xammasini korish",(0,s.jsx)("span",{className:"text-lg",children:(0,s.jsx)(o.yvh,{})})]})]})})]}),(0,s.jsxs)("div",{className:"max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between font-titleFont",children:[(0,s.jsx)("h2",{className:"text-lg text-primeColor font-bold",children:e.productName}),(0,s.jsx)("p",{className:"text-[#767676] text-[14px]",children:e.price})]}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-[#767676] text-[14px]",children:e.color})})]})]})}},7729:function(e,r,t){t.r(r);var i=t(9439),o=t(2791),s=t(1462),l=t(363),n=(t(8607),t(3329));r.default=function(){var e=(0,o.useState)([]),r=(0,i.Z)(e,2),t=r[0],a=r[1];return(0,o.useEffect)((function(){fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getCategory").then((function(e){return e.json()})).then((function(e){a(e.data)}))}),[]),(0,n.jsxs)("div",{className:"w-full pb-20",children:[(0,n.jsx)(s.Z,{heading:"Maxsus takliflar"}),Array.isArray(t)?t.map((function(e){return(0,n.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:(0,n.jsx)(l.Z,{img:"http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/"+e.image,productName:e.category_name})},e.id)})):"Tovar mavjud emas"]})}}}]);
//# sourceMappingURL=729.e89d8cad.chunk.js.map