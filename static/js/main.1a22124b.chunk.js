(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{229:function(t){t.exports=JSON.parse('[{"id":0,"sku":8552515751438644,"title":"Cat Tee Black T-Shirt","description":"14/15 s/n\xba","availableSizes":["X","L","XL","XXL"],"style":"Branco com listras pretas","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":1,"sku":18644119330491310,"title":"Sphynx Tie Dye Grey T-Shirt","description":"14/15 s/n\xba","availableSizes":["X","L","XL","XXL"],"style":"Preta com listras brancas","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":2,"sku":11854078013954528,"title":"Danger Knife Grey","description":"14/15 s/n\xba","availableSizes":["X","L"],"style":"Branco com listras pretas","price":14.9,"installments":7,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":3,"sku":876661122392077,"title":"White DGK Script Tee","description":"2014 s/n\xba","availableSizes":["X","L"],"style":"Preto com listras brancas","price":14.9,"installments":7,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":4,"sku":9197907543445676,"title":"Born On The Streets","description":"14/15 s/n\xba - Jogador","availableSizes":["XL"],"style":"Branco com listras pretas","price":25.9,"installments":12,"currencyId":"USD","currencyFormat":"$","isFreeShipping":false},{"id":5,"sku":10547961582846888,"title":"Tso 3D Short Sleeve T-Shirt A","description":"14/15 + Camiseta 1\xba Mundial","availableSizes":["X","L","XL"],"style":"Preto","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":false},{"id":6,"sku":6090484789343891,"title":"Man Tie Dye Cinza Grey T-Shirt","description":"Goleiro 13/14","availableSizes":["XL","XXL"],"style":"Branco","price":49.9,"installments":0,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":7,"sku":18532669286405344,"title":"Crazy Monkey Black T-Shirt","description":"1977 Infantil","availableSizes":["S"],"style":"Preto com listras brancas","price":22.5,"installments":4,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":8,"sku":5619496040738316,"title":"Tso 3D Black T-Shirt","description":"","availableSizes":["XL"],"style":"Azul escuro","price":18.7,"installments":4,"currencyId":"USD","currencyFormat":"$","isFreeShipping":false},{"id":9,"sku":11600983276356164,"title":"Crazy Monkey Grey","description":"","availableSizes":["L","XL"],"style":"","price":134.9,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":10,"sku":27250082398145996,"title":"On The Streets Black T-Shirt","description":"","availableSizes":["L","XL"],"style":"","price":49,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":11,"sku":39876704341265610,"title":"Wine Skul T-Shirt","description":"","availableSizes":["X","L"],"style":"Wine","price":13.25,"installments":3,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":12,"sku":12064273040195392,"title":"Cat Tee Black T-Shirt","description":"4 MSL","availableSizes":["S","XS"],"style":"Black with custom print","price":10.9,"installments":9,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":13,"sku":51498472915966370,"title":"Dark Thug Blue-Navy T-Shirt","description":"","availableSizes":["M"],"style":"Front print and paisley print","price":29.45,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":14,"sku":10686354557628304,"title":"Sphynx Tie Dye Wine T-Shirt","description":"GPX Poly 1","availableSizes":["X","L","XL"],"style":"Front tie dye print","price":9,"installments":3,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":15,"sku":11033926921508488,"title":"Skuul","description":"Treino 2014","availableSizes":["X","L","XL","XXL"],"style":"Black T-Shirt with front print","price":14,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true},{"id":16,"sku":10412368723880252,"title":"Short Sleeve T-Shirt","description":"","availableSizes":["XS","X","L","ML","XL"],"style":"Grey","price":75,"installments":5,"currencyId":"USD","currencyFormat":"$","isFreeShipping":true}]')},289:function(t,e){},350:function(t,e,a){},367:function(t,e,a){},396:function(t,e,a){},415:function(t,e,a){"use strict";a.r(e);var r=a(7),n=a(0),i=a(89),c=a(51),s=(a(106),a(427)),o=a(132),d=a(62),l=a.n(d),u=(a(350),Object(d.connect)((function(t){return{onSize:t.products.onSize}}))((function(t){var e=t.dispatch,a=t.onSize;return Object(r.jsxs)("div",{className:"boxs",children:[Object(r.jsx)("h1",{children:"Sizes:"}),Object(r.jsx)(i.a,{gutter:[30,20],children:["XS","S","M","ML","L","XL","XXL"].map((function(t,n){return Object(r.jsx)(c.a,{children:Object(r.jsx)(s.a,{checked:a.includes(t),onClick:function(){e({type:"products/changeOnSize",payload:{checked:!a.includes(t),size:t}})},children:t})},t+n)}))}),Object(r.jsx)(o.a,{style:{width:"100%"},onClick:function(){e({type:"products/updateList",payload:{sizes:a}})},children:"\u7b5b\u9009"})]})}))),p=a(429),y=a(423),f=a(421),j=a(422),m=a(430),h=a(424),S=a(431),O=(a(367),a(426));var b=Object(d.connect)((function(t){return{products:t.products.sortData}}))((function(t){var e=t.dispatch,a=t.products;return Object(n.useEffect)((function(){window.localStorage.show_data?e({type:"products/setStorage"}):e({type:"products/fetch",payload:{page:1}})}),[]),console.log(a),Object(r.jsxs)("div",{className:"allWife",children:[Object(r.jsxs)(i.a,{className:"choose",gutter:[10,10],children:[Object(r.jsxs)(c.a,{xs:24,sm:12,children:["\u53d1\u73b0",a.length,"\u4ef6\u5546\u54c1"]}),Object(r.jsxs)(c.a,{xs:24,sm:12,children:["\u6392\u5e8f\xa0\xa0",Object(r.jsx)(p.a,{overlay:Object(r.jsxs)(y.a,{children:[Object(r.jsx)(y.a.Item,{onClick:function(){e({type:"products/recoverDefault"})},children:"\u9ed8\u8ba4\u6392\u5e8f"}),Object(r.jsx)(y.a.Item,{onClick:function(){e({type:"products/changeUp"})},children:"\u4ef7\u683c\u5347\u5e8f"}),Object(r.jsx)(y.a.Item,{onClick:function(){e({type:"products/changeDown"})},children:"\u4ef7\u683c\u964d\u5e8f"})]}),children:Object(r.jsxs)("a",{className:"ant-dropdown-link",onClick:function(t){return t.preventDefault()},children:["\u6392\u5e8f\u9009\u62e9 ",Object(r.jsx)(O.a,{})]})})]})]}),Object(r.jsx)(i.a,{gutter:[20,20],children:a.map((function(t,a){return Object(r.jsx)(c.a,{xs:24,sm:12,md:12,lg:8,xl:6,xxl:6,children:Object(r.jsxs)(f.a,{bordered:!0,hoverable:!0,className:"wife",children:[Object(r.jsx)(j.a,{src:"./img/".concat(t.sku,"_1.jpg"),alt:"\u56fe\u7247\u672a\u52a0\u8f7d",style:{width:"100%"}}),Object(r.jsxs)("div",{className:"price",children:[Object(r.jsx)("div",{className:"show-title",children:t.title}),Object(r.jsx)("hr",{className:"line"}),t.currencyFormat,Object(r.jsxs)("span",{className:"show-price",children:[" ",t.price.toFixed(2)]})]}),Object(r.jsx)(m.a,{content:t.availableSizes.map((function(a,n){return Object(r.jsx)(o.a,{className:"size-title",disabled:0===t.installments,onClick:function(){e({type:"cart/addCart",payload:{product_id:t.id,quantity:t.installments>0?1:0,size:a,product:t}}),h.b.success("\u6dfb\u52a0\u8d2d\u7269\u8f66\u6210\u529f"),0===t.installments&&h.b.warning("\u5546\u54c1\u88ab\u4e70\u5b8c\u5566")},children:a},n)})),title:"\u5c3a\u7801\u9009\u62e9",children:Object(r.jsx)(o.a,{type:"primary",size:"large",style:{width:"100%"},children:"\u6dfb\u52a0"})}),Object(r.jsx)(S.a,{className:"tag",color:"#2db7f5",children:t.isFreeShipping?"isFreeShipping":"noFreeShipping"}),Object(r.jsxs)("span",{className:"kucun",children:["\u5e93\u5b58\uff1a",t.installments]})]})},a+t)}))})]})})),g=a(232),v=a(428),x=a(425),w=a(420),N=a(432),_=Object(N.a)({scriptUrl:"//at.alicdn.com/t/font_2254369_ekk34fcauud.js"}),z=(a(396),Object(d.connect)((function(t){return{data:t.cart.data}}))((function(t){var e=t.data,a=t.dispatch;Object(n.useEffect)((function(){window.localStorage.cart_data&&a({type:"cart/updateCart"})}),[]);var s=Object(n.useState)(0),d=Object(g.a)(s,2),l=d[0],u=d[1],p=e.reduce((function(t,e){return t+e.quantity*e.product.price}),0).toFixed(2),y=e.reduce((function(t,e){return t+e.quantity}),0);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"small_cart",children:[Object(r.jsx)(_,{type:"icon-gouwuche",onClick:function(){u(1)}}),Object(r.jsx)(v.a,{count:y,className:"head-example"})]}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{title:Object(r.jsx)("div",{className:"inside-cart",children:Object(r.jsxs)("div",{className:"content-title",children:[Object(r.jsx)(_,{type:"icon-gouwuche1"}),Object(r.jsx)(v.a,{count:y,className:"badge-inside"}),Object(r.jsx)("span",{className:"cart-title",children:"Cart"})]})}),footer:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"total",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(c.a,{span:12,children:"\u603b\u4ef7"}),Object(r.jsxs)(c.a,{span:12,children:["$",p]})]})}),Object(r.jsx)(o.a,{type:"primary",style:{marginTop:"20px"},block:!0,onClick:function(){a({type:"cart/clearCar",payload:{cart_quantity:e}})},children:"\u6e05\u7a7a\u8d2d\u7269\u8f66"})]}),placement:"right",closable:!0,onClose:function(){u(0)},visible:l,width:"".concat(function(){var t=0,e=document.documentElement.clientWidth;return e>1300?t=30:e<=1300&&e>1e3?t=40:e<=1e3&&e>700?t=60:e<=700&&e>600?t=70:e<=600&&(t=100),t}(),"%"),children:Object(r.jsx)(w.b,{bordered:!0,dataSource:e,itemLayout:"vertical",size:"large",renderItem:function(t,e){return Object(r.jsx)(w.b.Item,{children:Object(r.jsxs)(i.a,{gutter:[10,0],children:[Object(r.jsx)(c.a,{span:8,children:Object(r.jsx)(j.a,{src:"./img/".concat(t.product.sku,"_2.jpg"),alt:"\u88c2\u5f00",className:"imgs"})}),Object(r.jsxs)(c.a,{span:8,children:[Object(r.jsx)("p",{children:t.product.title}),Object(r.jsx)("div",{className:"cart-good-name",children:Object(r.jsxs)("span",{children:[t.size," | ",t.product.style]})}),Object(r.jsxs)("p",{className:"cart-quantity",children:["Quantity:",t.quantity]})]}),Object(r.jsxs)(c.a,{span:8,className:"cart_right",children:[Object(r.jsx)(o.a,{className:"exit",onClick:function(e){a({type:"cart/deleteItem",payload:{delete_id:t.product_id,size:t.size,index:e,quantity:t.quantity}})},children:"\xd7"}),Object(r.jsx)("div",{className:"cart-good-price-box",children:Object(r.jsxs)("p",{className:"cart-good-price",children:[t.product.currencyFormat,t.product.price.toFixed(2)]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(o.a,{type:"primary",disabled:1===t.quantity,onClick:function(){a({type:"cart/decrease",payload:{id:t.product_id,Csize:t.size}})},size:"small",children:"-"}),"\xa0",Object(r.jsx)(o.a,{type:"primary",onClick:function(){a({type:"cart/increase",payload:{id:t.product_id,remainder:t.product.installments>0?1:0,Csize:t.size}})},size:"small",children:"+"})]})]})]})},t.sku)}})})})]})})));var k=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(c.a,{span:6,children:Object(r.jsx)(u,{})}),Object(r.jsx)(c.a,{span:16,children:Object(r.jsx)(b,{})}),Object(r.jsx)(c.a,{span:2,children:Object(r.jsx)(z,{})})]})})},D=a(127),I=a(21),J=a(23),F=a.n(J),L=a(229),X=function(){return new Promise((function(t){t(L)}))},C={namespace:"products",state:{data:[],sortData:[],onSize:["XS","S","M","ML","L","XL","XXL"]},effects:{fetch:F.a.mark((function t(e,a){var r,n,i,c,s;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload.page,n=void 0===r?1:r,i=a.call,c=a.put,t.next=4,i(X,{page:n});case 4:return s=t.sent,t.next=7,c({type:"save",payload:{data:s}});case 7:case"end":return t.stop()}}),t)})),recoverDefault:F.a.mark((function t(e,a){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,r=a.put,t.next=4,r({type:"sortGoodDefault"});case 4:case"end":return t.stop()}}),t)})),changeUp:F.a.mark((function t(e,a){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,a.call,r=a.put,t.next=4,r({type:"sortGoodUp"});case 4:case"end":return t.stop()}}),t)})),changeDown:F.a.mark((function t(e,a){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,a.call,r=a.put,t.next=4,r({type:"sortGoodDown"});case 4:case"end":return t.stop()}}),t)})),setStorage:F.a.mark((function t(e,a){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,r=a.put,t.next=4,r({type:"storageData",payload:{paroduct_data:JSON.parse(window.localStorage.paroduct_data),show_data:JSON.parse(window.localStorage.show_data),paroduct_size:JSON.parse(window.localStorage.paroduct_size)}});case 4:case"end":return t.stop()}}),t)}))},reducers:{save:function(t,e){var a=e.payload,r=t.onSize,n=window.localStorage,i=JSON.stringify(a.data),c=JSON.stringify(a.data),s=JSON.stringify(r);return n.setItem("paroduct_data",i),n.setItem("show_data",c),n.setItem("paroduct_size",s),Object(I.a)(Object(I.a)({},t),{},{data:a.data,sortData:a.data})},loseItem:function(t,e){var a=e.payload,r=t.data.map((function(t){return t.id===a.product_id&&t.installments>0?(--t.installments,t):t})),n=t.sortData.map((function(t){return t.id===a.product_id&&t.installments>0?(--t.installments,t):t})),i=window.localStorage,c=JSON.stringify(r),s=JSON.stringify(n);return i.setItem("paroduct_data",c),i.setItem("show_data",s),Object(I.a)(Object(I.a)({},t),{},{data:r,sortData:n})},addGood:function(t,e){var a=e.payload,r=t.data.map((function(t){return t.id===a.id&&t.installments>0?(--t.installments,t):t})),n=t.sortData.map((function(t){return t.id===a.id&&t.installments>0?(--t.installments,t):t})),i=window.localStorage,c=JSON.stringify(r),s=JSON.stringify(n);return i.setItem("paroduct_data",c),i.setItem("show_data",s),Object(I.a)(Object(I.a)({},t),{},{data:r,sortData:n})},cutGood:function(t,e){var a=e.payload,r=t.data.map((function(t){return t.id===a.id?(t.installments+=1,t):t})),n=t.sortData.map((function(t){return t.id===a.id?(t.installments+=1,t):t})),i=window.localStorage,c=JSON.stringify(r),s=JSON.stringify(n);return i.setItem("paroduct_data",c),i.setItem("show_data",s),Object(I.a)(Object(I.a)({},t),{},{data:r,sortData:n})},sortGoodDefault:function(t,e){for(var a=t.sortData,r=JSON.parse(JSON.stringify(a)),n=0;n<r.length-1;n++)for(var i=n;i<r.length-1;i++)if(r[n].id>r[n+1].id){var c;c=r[n],r[n]=r[n+1],r[n+1]=c}var s=window.localStorage,o=JSON.stringify(r);return s.setItem("show_data",o),Object(I.a)(Object(I.a)({},t),{},{sortData:r})},sortGoodUp:function(t,e){for(var a=t.sortData.map((function(t){return t.price})).sort((function(t,e){return t-e})),r=JSON.parse(JSON.stringify(t.sortData)),n=[],i=0;i<a.length;i++)for(var c=0;c<t.sortData.length;c++){var s;(null===(s=r[c])||void 0===s?void 0:s.price)!==a[i]||(n.push(r[c]),r.splice(c,1))}var o=window.localStorage,d=JSON.stringify(n);return o.setItem("show_data",d),Object(I.a)(Object(I.a)({},t),{},{sortData:n})},sortGoodDown:function(t,e){for(var a=t.sortData.map((function(t){return t.price})).sort((function(t,e){return e-t})),r=JSON.parse(JSON.stringify(t.sortData)),n=[],i=0;i<a.length;i++)for(var c=0;c<t.sortData.length;c++){var s;(null===(s=r[c])||void 0===s?void 0:s.price)!==a[i]||(n.push(r[c]),r.splice(c,1))}var o=window.localStorage,d=JSON.stringify(n);return o.setItem("show_data",d),Object(I.a)(Object(I.a)({},t),{},{sortData:n})},recover:function(t,e){for(var a=e.payload,r=JSON.parse(JSON.stringify(t.data)),n=0;n<a.cart_quantity.length;n++)for(var i=0;i<r.length;i++)r[i].id===a.cart_quantity[n].product_id&&(r[i].installments+=a.cart_quantity[n].quantity);for(var c=JSON.parse(JSON.stringify(t.sortData)),s=0;s<a.cart_quantity.length;s++)for(var o=0;o<c.length;o++)c[o].id===a.cart_quantity[s].product_id&&(c[o].installments+=a.cart_quantity[s].quantity);var d=window.localStorage,l=JSON.stringify(r),u=JSON.stringify(c);return d.setItem("paroduct_data",l),d.setItem("show_data",u),Object(I.a)(Object(I.a)({},t),{},{data:r,sortData:c})},recoverItem:function(t,e){for(var a=e.payload,r=JSON.parse(JSON.stringify(t.data)),n=0;n<r.length;n++)if(r[n].id===a.delete_id){r[n].installments+=a.quantity;break}for(var i=JSON.parse(JSON.stringify(t.sortData)),c=0;c<i.length;c++)if(i[c].id===a.delete_id){i[c].installments+=a.quantity;break}var s=window.localStorage,o=JSON.stringify(r),d=JSON.stringify(i);return s.setItem("paroduct_data",o),s.setItem("show_data",d),Object(I.a)(Object(I.a)({},t),{},{data:r,sortData:i})},changeOnSize:function(t,e){var a=e.payload,r=a.checked,n=a.size,i=t.onSize;i=r?[].concat(Object(D.a)(i),[n]):i.filter((function(t){return t!==n})),console.log(i);var c=window.localStorage,s=JSON.stringify(i);return c.setItem("paroduct_size",s),Object(I.a)(Object(I.a)({},t),{},{onSize:i})},updateList:function(t,e){e.payload.sizes;for(var a=t.data,r=t.onSize,n=JSON.parse(JSON.stringify(a)),i=[],c=0;c<r.length;c++)for(var s=0;s<n.length;s++)n[s].availableSizes.includes(r[c])&&(i.push(n[s]),n.splice(s,1),--s);var o=window.localStorage,d=JSON.stringify(i);return o.setItem("show_data",d),Object(I.a)(Object(I.a)({},t),{},{sortData:i})},storageData:function(t,e){var a=e.payload;return Object(I.a)(Object(I.a)({},t),{},{data:a.paroduct_data,sortData:a.show_data,onSize:a.paroduct_size})}}},T={namespace:"cart",state:{data:[]},reducers:{saveItem:function(t,e){var a=e.payload,r=[],n=t.data.find((function(t){return t.product_id===a.product_id&&t.size===a.size}));n?(n.quantity+=a.quantity,r=t.data.map((function(t){return t.product_id===n.product_id&&t.size===n.size?n:t}))):r=[].concat(Object(D.a)(t.data),[a]);var i=window.localStorage,c=JSON.stringify(r);return i.setItem("cart_data",c),{data:r}},cleanCar:function(t,e){var a=[],r=window.localStorage,n=JSON.stringify(a);return r.setItem("cart_data",n),{data:a}},deleteItem_cart:function(t,e){var a=e.payload,r=JSON.parse(JSON.stringify(t.data));r.splice(a.index,1);var n=window.localStorage,i=JSON.stringify(r);return n.setItem("cart_data",i),{data:r}},addOne:function(t,e){var a=e.payload,r=[],n=t.data.find((function(t){return t.product_id===a.id&&t.size===a.Csize}));n&&(n.quantity+=a.remainder,r=t.data.map((function(t){return t.product_id===n.product_id&&t.size===a.Csize?n:t})));var i=window.localStorage,c=JSON.stringify(r);return i.setItem("cart_data",c),{data:r}},cutOne:function(t,e){var a=e.payload,r=[],n=t.data.find((function(t){return t.product_id===a.id&&t.size===a.Csize}));n&&(n.quantity=n.quantity-1,r=t.data.map((function(t){return t.product_id===n.product_id&&t.size===a.Csize?n:t})));var i=window.localStorage,c=JSON.stringify(r);return i.setItem("cart_data",c),{data:r}},updateCartData:function(t,e){var a=e.payload;return Object(I.a)(Object(I.a)({},t),{},{data:a.cart_data})}},effects:{addCart:F.a.mark((function t(e,a){var r,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,a.call,n=a.put,t.next=4,n({type:"products/loseItem",payload:r});case 4:return t.next=6,n({type:"saveItem",payload:r});case 6:case"end":return t.stop()}}),t)})),increase:F.a.mark((function t(e,a){var r,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,a.call,n=a.put,t.next=4,n({type:"products/addGood",payload:r});case 4:return t.next=6,n({type:"addOne",payload:r});case 6:case"end":return t.stop()}}),t)})),decrease:F.a.mark((function t(e,a){var r,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,a.call,n=a.put,t.next=4,n({type:"products/cutGood",payload:r});case 4:return t.next=6,n({type:"cutOne",payload:r});case 6:case"end":return t.stop()}}),t)})),clearCar:F.a.mark((function t(e,a){var r,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,a.call,n=a.put,t.next=4,n({type:"cleanCar"});case 4:return t.next=6,n({type:"products/recover",payload:r});case 6:case"end":return t.stop()}}),t)})),deleteItem:F.a.mark((function t(e,a){var r,n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,a.call,n=a.put,t.next=4,n({type:"deleteItem_cart",payload:r});case 4:return t.next=6,n({type:"products/recoverItem",payload:r});case 6:case"end":return t.stop()}}),t)})),updateCart:F.a.mark((function t(e,a){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,r=a.put,t.next=4,r({type:"updateCartData",payload:{cart_data:JSON.parse(window.localStorage.cart_data)}});case 4:case"end":return t.stop()}}),t)}))}},q=l()();q.router((function(){return Object(r.jsx)(k,{})})),q.model(C),q.model(T),q.start("#root")}},[[415,1,2]]]);
//# sourceMappingURL=main.1a22124b.chunk.js.map