(this.webpackJsonpshoes=this.webpackJsonpshoes||[]).push([[2],{101:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a}));var r="http://localhost:5000",c=12,a=16},110:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(20),i=n.n(s),o=n(6),l=n(3),u=n.n(l),j=n(7),b=n(19),d=n(10),h=n(2),m=n(30),f=n(44);n(103);function O(e){var t=e.item;return Object(r.jsx)("li",{className:"dropdown-item",children:Object(r.jsx)(h.b,{to:"/danh-muc/".concat(t.slug),className:"dropdown-item__link",children:t.name})})}O.defaultProps={item:{}};var p=O;function x(e){var t=e.category;return Object(r.jsxs)("li",{className:"nav-item",children:[Object(r.jsxs)(h.b,{className:"nav-item__link",to:"/danh-muc/".concat(t.slug),children:[Object(r.jsx)("span",{children:t.name}),t.children.length>0&&Object(r.jsx)("i",{className:"bx bx-chevron-down"})]}),t.children.length>0?Object(r.jsx)("ul",{className:"dropdown",children:t.children.map((function(e,t){return Object(r.jsx)(p,{item:e},t)}))}):null]})}x.defaultProps={category:{}};var v=x,g=(n(104),n(28)),_=n(17),N=(n(42),function(e){var t=e.setToggle,n=e.user,c=e.cartLength,a=(JSON.parse(localStorage.getItem("token")),Object(d.b)());return Object(r.jsx)("div",{className:"header-top",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"top",children:[Object(r.jsxs)("div",{className:"top-left",children:[Object(r.jsx)("div",{className:"top-left__button",onClick:function(){return t(!0)},children:Object(r.jsx)("i",{className:"bx bx-menu"})}),Object(r.jsxs)("div",{className:"top-left__phone",children:[Object(r.jsx)("i",{className:"bx bx-phone"}),Object(r.jsx)("span",{children:"+189 284 5679"})]})]}),Object(r.jsxs)("ul",{className:"top-right",children:[!n.token&&Object(r.jsxs)("li",{className:"top-item",children:[Object(r.jsx)("i",{className:"bx bx-user"}),Object(r.jsx)(h.b,{to:"/dang-nhap",children:"\u0110\u0103ng nh\u1eadp"}),Object(r.jsx)("span",{children:" / "}),Object(r.jsx)(h.b,{to:"/dang-ky",children:"\u0110\u0103ng k\xfd"})]}),n.token&&Object(r.jsxs)("li",{className:"top-item",children:[Object(r.jsx)("i",{class:"bx bx-border-all"}),Object(r.jsx)(h.b,{to:"/lich-su-don-hang",children:"\u0110\u01a1n h\xe0ng"})]}),n.token&&Object(r.jsxs)("li",{className:"top-item",children:[Object(r.jsx)("i",{className:"bx bx-user"}),Object(r.jsx)(h.b,{to:"/login",children:n.name}),Object(r.jsx)("span",{children:" / "}),Object(r.jsx)("span",{onClick:function(){return function(){var e=Object(g.b)();a(e).then((function(){localStorage.removeItem("userInfo"),localStorage.removeItem("result"),_.b.success("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng",{position:_.b.POSITION.TOP_RIGHT})})).catch((function(e){_.b.error(e,{position:_.b.POSITION.TOP_RIGHT})}))}()},children:"\u0110\u0103ng xu\u1ea5t"})]}),Object(r.jsxs)(h.b,{to:"/gio-hang",className:"top-item top-item--cart",children:[Object(r.jsx)("i",{className:"bx bx-cart"}),Object(r.jsxs)("p",{children:[" ",c||0," s\u1ea3n ph\u1ea9m "]})]})]})]})})})}),S=function(e){var t=e.setToggle,n=Object(d.b)(),a=Object(d.c)((function(e){return e.user})),s=Object(d.c)((function(e){return e.category})),i=Object(d.c)((function(e){return e.cart.result})),o=Object(c.useState)([]),l=Object(b.a)(o,2),u=l[0],j=l[1],O=Object(c.useState)(""),p=Object(b.a)(O,2),x=p[0],g=p[1],_=Object(c.useState)(!1),S=Object(b.a)(_,2),y=S[0],T=S[1],k=Object(c.useState)(!1),C=Object(b.a)(k,2),E=C[0],I=C[1],P=Object(c.useRef)();return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)(N,{user:a,setToggle:t,cartLength:i}),Object(r.jsx)("div",{className:"header-mid",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsxs)(h.b,{to:"/",className:"nav__logo",children:[Object(r.jsx)("span",{children:"H"}),Object(r.jsx)("span",{children:"a"}),Object(r.jsx)("span",{children:"o"}),Object(r.jsx)("span",{children:"L"}),Object(r.jsx)("span",{children:"u"}),Object(r.jsx)("span",{children:"x"})]}),Object(r.jsxs)("div",{className:"nav-right",children:[Object(r.jsx)("ul",{className:"nav-menu",children:s.map((function(e,t){return Object(r.jsx)(v,{category:e},t)}))}),Object(r.jsxs)("div",{className:"nav-search",children:[Object(r.jsx)("i",{className:"bx bx-search search",onClick:function(){return I(!E)}}),Object(r.jsxs)("div",{className:E?"modal-search active ":"modal-search ",children:[Object(r.jsxs)("div",{className:"search-heading",children:[Object(r.jsx)("h3",{className:"search-heading__title",children:"T\xecm ki\u1ebfm"}),Object(r.jsx)("div",{className:"search-heading__close",onClick:function(){return I(!E)},children:Object(r.jsx)("span",{children:"X"})})]}),Object(r.jsxs)("div",{className:"search-content",children:[Object(r.jsx)("input",{type:"text",placeholder:"T\xecm ki\u1ebfm s\u1ea3n ph\u1ea9m",onChange:function(e){return function(e){var t=e.target.value;P.current&&clearInterval(P.current),g(t),P.current=setTimeout((function(){j([]),T(!0);var e=Object(m.c)(t);n(e).then((function(e){T(!1);var t=e.data.products;t&&j(t)})).catch((function(e){T(!1)}))}),200)}(e)}}),Object(r.jsx)("i",{className:"bx bx-search search-icon"})]}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"search-product",children:Object(r.jsxs)("div",{className:"row",children:[x&&!u.length&&y?Object(r.jsx)("h1",{className:"error",children:"Loading ..."}):null,!x||u.length||y?null:Object(r.jsx)("h1",{className:"error",children:"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o"}),u.length?u.map((function(e,t){return Object(r.jsx)(h.b,{to:"/san-pham/".concat(e.slug),className:" col-xl-3 col-lg-4 col-sm-6 product-search",onClick:function(){return I(!E)},children:Object(r.jsx)(f.a,{product:e})},t)})):null]})})})]})]})]})]})})})]})},y=(n(105),function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"footer__content",children:[Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"H\u1ec6 TH\u1ed0NG C\u1eecA H\xc0NG"}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"\u0110\u1ecba ch\u1ec9: S\u1ed1 16 Ng\xf5 58 Tr\u1ea7n B\xecnh, Mai D\u1ecbch, C\u1ea7u Gi\u1ea5y, HN"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i: 0964572402"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Email: hao2016vt@gmail.com"})})]}),Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"H\u1ed6 TR\u1ee2"}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"H\u01b0\u1edbng d\u1eabn ch\u1ecdn c\u1ee1 gi\xe0y"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch \u0111\u1ed5i tr\u1ea3/ ho\xe0n ti\u1ec1n"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch b\u1ea3o m\u1eadt th\xf4ng tin"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch b\u1ea3o h\xe0nh"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"H\u01b0\u1edbng d\u1eabn mua h\xe0ng"})})]}),Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"LI\xcaN H\u1ec6 V\u1edaI SHOP"}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"H\u01b0\u1edbng d\u1eabn \u0111\u1eb7t h\xe0ng"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Th\xf4ng tin thanh to\xe1n"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Ch\xednh s\xe1ch giao h\xe0ng v\xe0 nh\u1eadn h\xe0ng"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"Li\xean h\u1ec7"})}),Object(r.jsx)("li",{className:"footer-list__item",children:Object(r.jsx)(h.b,{to:"/",children:"S\u01a1 \u0111\u1ed3 website"})})]}),Object(r.jsxs)("ul",{className:"footer-list",children:[Object(r.jsx)("li",{className:"footer-list__item footer-list__item--title",children:"CONTACT US"}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bxs-edit-location"})}),"159/3 Ch\u1ee3 Ph\xf9ng Khoang H\xe0 \u0110\xf4ng H\xe0 N\u1ed9i"]}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bx-envelope-open"})}),"nguyenchihao2001vt@gmail.com"]}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bxs-phone"})}),"0964572402"]}),Object(r.jsxs)("li",{className:"footer-list__item footer-list__item--flex",children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"bx bxs-edit-location"})}),"H\xe0 N\u1ed9i, VN"]})]})]})})})}),T=(n(106),function(e){var t=e.item,n=e.setToggle;return Object(r.jsx)("li",{className:"dropdown-item",children:Object(r.jsx)(h.b,{onClick:function(){return n()},to:"/danh-muc/".concat(t.slug),className:"dropdown-item__link",children:t.name})})});function k(e){var t=e.category,n=e.setToggle,a=Object(c.useState)(!1),s=Object(b.a)(a,2),i=s[0],o=s[1];return Object(r.jsxs)("li",{className:"sub-menu",children:[Object(r.jsxs)("div",{className:"mobile-item",children:[Object(r.jsx)(h.b,{to:"/danh-muc/".concat(t.slug),className:"mobile-item__link",onClick:function(){return n()},children:t.name}),Object(r.jsx)("span",{className:i?"mobile-item__button active":"mobile-item__button",onClick:function(){return o(!i)},children:Object(r.jsx)("i",{className:"bx bx-caret-down"})})]}),t.children.length>0?Object(r.jsx)("ul",{className:i?"dropdown active":"dropdown",children:t.children.map((function(e,t){return Object(r.jsx)(T,{item:e,setToggle:n},t)}))}):null]})}k.defaultProps={category:{}};var C=k;var E=function(e){var t=e.toggle,n=e.setToggle,c=Object(d.c)((function(e){return e.user})),a=Object(d.c)((function(e){return e.category})),s=Object(d.c)((function(e){return e.cart.result})),i=Object(d.b)();return Object(r.jsxs)("div",{className:"menu-mobile",children:[Object(r.jsxs)("div",{className:t?"menu-mobile__content active":"menu-mobile__content",children:[!c.name&&Object(r.jsxs)("div",{className:"mobile-heading",children:[Object(r.jsx)(h.b,{to:"/dang-nhap",onClick:function(){return n()},children:"\u0110\u0103ng nh\u1eadp"}),Object(r.jsx)(h.b,{to:"/dang-ky",onClick:function(){return n()},children:"\u0110\u0103ng k\xfd"})]}),c.name&&Object(r.jsxs)("div",{className:"mobile-user",children:[Object(r.jsxs)("div",{className:"user-info",children:[Object(r.jsx)("img",{src:"./images/user1.png",alt:""}),Object(r.jsxs)("div",{className:"user-info__text",children:[Object(r.jsx)("h3",{children:c.name}),Object(r.jsx)("span",{children:c.email})]})]}),Object(r.jsxs)("ul",{className:"user-list",children:[Object(r.jsxs)(h.b,{to:"/gio-hang",className:"user-list__item",onClick:function(){return n()},children:[Object(r.jsx)("span",{children:"Gi\u1ecf h\xe0ng"}),Object(r.jsxs)("span",{children:["(",s||0,")"]})]}),Object(r.jsx)(h.b,{to:"/lich-su-don-hang",className:"user-list__item",onClick:function(){return n()},children:Object(r.jsx)("span",{children:"L\u1ecbch s\u1eedu \u0111\u01a1n h\xe0ng"})}),Object(r.jsx)(h.b,{to:"/sua-thong-tin",className:"user-list__item",onClick:function(){return n()},children:Object(r.jsx)("span",{children:"S\u1eeda th\xf4ng tin"})}),Object(r.jsx)(h.b,{to:"/",className:"user-list__item",onClick:function(){return n()},children:Object(r.jsx)("span",{onClick:function(){return function(){var e=Object(g.b)();n(),i(e).then((function(){localStorage.removeItem("token"),localStorage.removeItem("refresh-token"),localStorage.removeItem("userInfo"),localStorage.removeItem("result"),_.b.success("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng",{position:_.b.POSITION.TOP_RIGHT})})).catch((function(e){_.b.error("\u0110\u0103ng xu\u1ea5t th\u1ea5t b\u1ea1i",{position:_.b.POSITION.TOP_RIGHT})}))}()},children:"\u0110\u0103ng xu\u1ea5t"})})]})]}),Object(r.jsx)("ul",{className:"mobile-list",children:a.map((function(e,t){return Object(r.jsx)(C,{category:e,setToggle:n},t)}))})]}),Object(r.jsx)("div",{className:t?"menu-mobile__overlay active":"menu-mobile__overlay",onClick:function(){return n()}})]})},I=(n(24),n(11)),P=n(9),w={getAllCategory:function(){var e="".concat(I.a,"/category");return P.a.get(e)}},R="GET_ALL_CATEGORY_SUCCESS",L=n(43),A=function(e){var t=e.children,n=Object(d.b)(),a=Object(c.useState)(!1),s=Object(b.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_ALL_CATEGORY_REQUEST"}),e.prev=1,e.next=4,w.getAllCategory();case 4:return n=e.sent,r=n.data.categories,t({type:R,payload:r}),e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(1),t({type:"GET_ALL_CATEGORY_FAIL"}),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();n(e)}),[n]),Object(c.useEffect)((function(){var e=Object(m.a)();n(e)}),[n]),Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userInfo")),t=JSON.parse(localStorage.getItem("result"));if(e&&e.token&&0!==t&&null!==t){var r=Object(L.b)();n(r)}}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S,{setToggle:o}),Object(r.jsx)(E,{toggle:i,setToggle:o}),Object(r.jsx)(_.a,{}),t,Object(r.jsx)(y,{})]})},U=a.a.lazy((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,402))})),G=a.a.lazy((function(){return Promise.all([n.e(1),n.e(7)]).then(n.bind(null,396))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,394))})),H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,403))})),z=a.a.lazy((function(){return Promise.all([n.e(6),n.e(9)]).then(n.bind(null,399))})),J=a.a.lazy((function(){return n.e(14).then(n.bind(null,404))})),F=a.a.lazy((function(){return n.e(15).then(n.bind(null,405))})),Q=[{component:G,extra:!0,path:"/"},{component:z,extra:!0,path:"/danh-muc/:slug"},{component:D,extra:!0,path:"/dang-nhap",isPrivate:!0},{component:H,extra:!0,path:"/dang-ky",isPrivate:!0},{component:J,extra:!0,path:"/gio-hang",isPrivate:!1},{component:a.a.lazy((function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,400))})),extra:!0,path:"/san-pham/:slug",isPrivate:!1},{component:U,extra:!0,path:"/thanh-toan",isPrivate:!1},{component:a.a.lazy((function(){return Promise.all([n.e(5),n.e(10)]).then(n.bind(null,401))})),extra:!0,path:"/lich-su-don-hang",isPrivate:!1},{component:F,extra:!0,path:"*",isPrivate:!1}],V=n(5),Y=n(60);function B(e){var t=e.component,n=Object(Y.a)(e,["component"]),c=JSON.parse(localStorage.getItem("userInfo"));return Object(r.jsx)(o.b,Object(V.a)(Object(V.a)({},n),{},{render:function(e){return!c||c&&!c.token?Object(r.jsx)(t,Object(V.a)({},e)):Object(r.jsx)(o.a,{to:"/box-shop"})}}))}n(107);var M=function(){return Object(r.jsx)("div",{className:"loading",children:Object(r.jsxs)("div",{class:"sk-cube-grid",children:[Object(r.jsx)("div",{class:"sk-cube sk-cube1"}),Object(r.jsx)("div",{class:"sk-cube sk-cube2"}),Object(r.jsx)("div",{class:"sk-cube sk-cube3"}),Object(r.jsx)("div",{class:"sk-cube sk-cube4"}),Object(r.jsx)("div",{class:"sk-cube sk-cube5"}),Object(r.jsx)("div",{class:"sk-cube sk-cube6"}),Object(r.jsx)("div",{class:"sk-cube sk-cube7"}),Object(r.jsx)("div",{class:"sk-cube sk-cube8"}),Object(r.jsx)("div",{class:"sk-cube sk-cube9"})]})})};n(108);var X=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return window.addEventListener("scroll",(function(){window.scrollY>800?a(!0):a(!1)})),Object(r.jsx)("div",{className:n?"scroll active":"scroll",onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})},children:Object(r.jsx)("i",{className:"bx bxs-chevron-left"})})};var q=function(){return Object(r.jsxs)("div",{className:"App",style:{overflow:"hidden"},children:[Object(r.jsx)(X,{}),Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(M,{}),children:Object(r.jsx)(A,{children:Object(r.jsx)(o.d,{children:Q.map((function(e,t){return e.isPrivate?Object(r.jsx)(B,{component:e.component,exact:!0,path:e.path},t):Object(r.jsx)(o.b,{component:e.component,path:e.path,exact:!0},t)}))})})})]})},K=(n(109),n(23)),W=n(14),Z=JSON.parse(localStorage.getItem("userInfo"))||{name:"",email:"",cart:"",role:null,token:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W.c:var n=t.payload,r=n.role,c=n.name,a=n.email,s=n.cart,i=t.token;return Object(V.a)(Object(V.a)({},e),{},{role:r,email:a,cart:s,name:c,token:i});case W.i:var o=t.payload,l=o.role,u=o.name,j=o.email,b=o.cart,d=t.token;return Object(V.a)(Object(V.a)({},e),{},{role:l,email:j,cart:b,name:u,token:d});case W.f:var h="",m="",f="",O="";return Object(V.a)(Object(V.a)({},e),{},{role:h,email:f,cart:O,name:m,token:""});default:return e}},ee=n(45),te=[],ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:var n=Object(ee.a)(t.payload);return n;default:return e}},re=n(21),ce={productList:[],saleProducts:[],newProducts:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case re.c:var c=r.saleProducts,a=r.newProducts;return Object(V.a)(Object(V.a)({},e),{},{saleProducts:c,newProducts:a});default:return e}},se=n(8),ie={result:localStorage.getItem("result")||null,cartItems:[],totalPrice:null,id:null},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case se.c:var c={cartItems:r.cart,result:r.result,totalPrice:r.totalPrice,id:r.id};return localStorage.setItem("result",JSON.stringify(r.result)),c;case se.i:var a={cartItems:r.cart,result:r.result,totalPrice:r.totalPrice,id:r.id};return localStorage.setItem("result",JSON.stringify(r.result)),a;case se.g:return localStorage.removeItem("result"),Object(V.a)(Object(V.a)({},e),{},{cartItems:[],result:null,totalPrice:null});case se.f:var s={cartItems:r.cartItems,result:r.result,totalPrice:r.totalPrice};return localStorage.setItem("result",JSON.stringify(r.result)),s;case se.l:return Object(V.a)(Object(V.a)({},e),{},{cartItems:r.cartItems,totalPrice:r.totalPrice});default:return e}},le=n(46),ue={orders:[]},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case le.c:return Object(V.a)(Object(V.a)({},e),{},{orders:r});default:return e}},be=Object(K.c)({user:$,category:ne,product:ae,cart:oe,order:je}),de=n(59),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.d,me=Object(K.e)(be,he(Object(K.a)(de.a)));i.a.render(Object(r.jsx)(d.a,{store:me,children:Object(r.jsx)(h.a,{children:Object(r.jsx)(q,{})})}),document.getElementById("root"))},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return j}));var r="LOGIN_SUCCESS",c="LOGIN_FAIL",a="LOGIN_REQUEST",s="REGISTER_SUCCESS",i="REGISTER_FAIL",o="REGISTER_REQUEST",l="LOGOUT_SUCCESS",u="LOGOUT_FAIL",j="LOGOUT_REQUEST"},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o}));var r="GET_ALL_PRODUCT_SUCCESS",c="GET_ALL_PRODUCT_FAIL",a="GET_ALL_PRODUCT_REQUEST",s="GET_PRODUCT_SLUG_SUCCESS",i="GET_PRODUCT_SLUG_FAIL",o="GET_PRODUCT_SLUG_REQUEST"},24:function(e,t,n){"use strict";var r=n(11),c=n(9),a={signup:function(e){var t="".concat(r.a,"/user/signup");return c.a.post(t,e)},login:function(e){var t="".concat(r.a,"/user/login");return c.a.post(t,e)},refreshToken:function(e){var t="".concat(r.a,"/user/refresh-token");return c.a.post(t,{refToken:e})},logout:function(){var e="".concat(r.a,"/user/signout");return c.a.get(e)}};t.a=a},28:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(3),c=n.n(r),a=n(7),s=n(24),i=n(14),o=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,o,l,u,j,b,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:i.h}),t.prev=1,t.next=4,s.a.signup(e);case 4:return r=t.sent,a=r.data.token,o=r.data.result,l=o.email,u=o.name,j=o.role,b=o.cart,d={name:u,email:l,role:j,cart:b,token:a},n({type:i.i,payload:r.data.result,token:a}),a&&localStorage.setItem("userInfo",JSON.stringify(d)),t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(1),n({type:i.g}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,o,l,u,j,b,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:i.b}),t.prev=1,t.next=4,s.a.login(e);case 4:return r=t.sent,a=r.data.token,o=r.data.result,l=o.email,u=o.name,j=o.role,b=o.cart,d={name:u,email:l,role:j,cart:b,token:a},n({type:i.c,payload:r.data.result,token:a}),a&&localStorage.setItem("userInfo",JSON.stringify(d)),t.abrupt("return",r);case 13:return t.prev=13,t.t0=t.catch(1),n({type:i.a}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.e}),e.prev=1,e.next=4,s.a.logout();case 4:return n=e.sent,t({type:i.f}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),t({type:i.d}),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));var r=n(3),c=n.n(r),a=n(7),s=n(31),i=n(21),o=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.b}),e.prev=1,e.next=4,s.a.getAllProduct();case 4:return n=e.sent,t({type:i.c,payload:n.data}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),t({type:i.a}),e.abrupt("return",Promise.reject(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:i.e}),t.prev=1,t.next=4,s.a.getProductSlug(e);case 4:return r=t.sent,n({type:i.f}),t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),n({type:i.d}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.searchProduct(e);case 3:return r=t.sent,t.abrupt("return",r);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},31:function(e,t,n){"use strict";var r=n(11),c=n(9),a={getAllProduct:function(){var e="".concat(r.a,"/products/initial-data");return c.a.get(e)},getProductSlug:function(e){var t="".concat(r.a,"/products/detail/").concat(e);return c.a.get(t)},getProduct:function(e){return c.a.get(e)},searchProduct:function(e){var t="".concat(r.a,"/products?search=").concat(e);return c.a.get(t)}};t.a=a},35:function(e,t,n){"use strict";t.a=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},41:function(e,t,n){"use strict";t.a=function(e){return e=e.toLocaleString("vi",{style:"currency",currency:"VND"})}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(3),c=n.n(r),a=n(7),s=n(11),i=n(9),o={addToCart:function(e){var t="".concat(s.a,"/cart/create");return i.a.post(t,e)},updateCart:function(e,t,n){var r="".concat(s.a,"/cart/update/").concat(n,"?size=").concat(t,"&quantity=").concat(e);return i.a.post(r)},removeCartItem:function(e){console.log(e);var t="".concat(s.a,"/cart/remove/").concat(e);return console.log(t),i.a.delete(t)},getCart:function(){var e="".concat(s.a,"/cart");return i.a.get(e)}},l=n(8),u=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.b}),t.prev=1,t.next=4,o.addToCart(e);case 4:return r=t.sent,n({type:l.c,payload:r.data}),t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),n({type:l.a}),t.abrupt("return",Promise.reject(t.t0.response.data.message));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e,t,n){return function(){var r=Object(a.a)(c.a.mark((function r(a){var s;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:l.k}),r.prev=1,r.next=4,o.updateCart(e,t,n);case 4:return s=r.sent,a({type:l.l,payload:s.data}),r.abrupt("return",s);case 9:return r.prev=9,r.t0=r.catch(1),a({type:l.j}),r.abrupt("return",Promise.reject(r.t0.response.data.message));case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.e}),t.prev=1,t.next=4,o.removeCartItem(e);case 4:return r=t.sent,n({type:l.f,payload:r.data}),t.abrupt("return",r);case 9:t.prev=9,t.t0=t.catch(1),n({type:l.d});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.h}),e.prev=1,e.next=4,o.getCart();case 4:return n=e.sent,t({type:l.i,payload:n.data}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(1),t({type:l.g}),e.abrupt("return",Promise.reject(e.t0.response.data.message));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},44:function(e,t,n){"use strict";var r=n(0),c=(n(1),n(2)),a=(n(101),n(41)),s=n(37),i=n(35);function o(e){var t=e.product;return Object(r.jsxs)("div",{className:"product-item",children:[Object(r.jsxs)("div",{className:"product-item__img",children:[Object(r.jsx)(s.LazyLoadImage,{src:t.productImage[0].img,alt:""}),Object(r.jsx)(s.LazyLoadImage,{src:t.productImage[1].img,alt:""}),t.sale?Object(r.jsxs)("div",{className:"sale",children:["GI\u1ea2M ",t.sale,"%"]}):null,Object(r.jsxs)("ul",{className:"product-button",children:[Object(r.jsx)("li",{className:"product-button__item",children:Object(r.jsx)("i",{className:"bx bx-cart"})}),Object(r.jsx)(c.b,{to:"/san-pham/".concat(t.slug),className:"product-button__item",onClick:function(){return Object(i.a)()},children:Object(r.jsx)("i",{className:"bx bx-search-alt-2"})}),Object(r.jsx)("li",{className:"product-button__item",children:Object(r.jsx)("i",{className:"bx bx-refresh"})}),Object(r.jsx)("li",{className:"product-button__item",children:Object(r.jsx)("i",{className:"bx bx-heart"})})]})]}),Object(r.jsx)(c.b,{to:"/san-pham/".concat(t.slug),className:"product-item__title",onClick:function(){return Object(i.a)()},children:t.title}),Object(r.jsxs)("div",{className:"product-item__rating",children:[Object(r.jsx)("i",{className:"star-gold fas fa-star"}),Object(r.jsx)("i",{className:"star-gold fas fa-star"}),Object(r.jsx)("i",{className:"star-gold fas fa-star"}),Object(r.jsx)("i",{className:" star-gold fas fa-star"}),Object(r.jsx)("i",{className:"fas fa-star"})]}),Object(r.jsx)("p",{className:"product-item__price",children:Object(a.a)(t.price)}),Object(r.jsxs)("ul",{className:"product-item__button",children:[Object(r.jsx)("li",{className:"button__item",children:Object(r.jsx)("i",{className:"bx bx-cart"})}),Object(r.jsx)("li",{className:"button__item",children:Object(r.jsx)("i",{className:"bx bx-refresh"})}),Object(r.jsx)("li",{className:"button__item",children:Object(r.jsx)("i",{className:"bx bx-heart"})})]})]})}o.defaultProps={product:{}},t.a=o},46:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r="GET_ORDERS_SUCCESS",c="GET_ORDERS_FAIL",a="GET_ORDERS_REQUEST"},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"i",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return h}));var r="ADD_TO_CART_SUCCESS",c="ADD_TO_CART_FAIL",a="ADD_TO_CART_REQUEST",s="UPDATE_CART_SUCCESS",i="UPDATE_CART_FAIL",o="UPDATE_CART_REQUEST",l="GET_CART_SUCCESS",u="GET_CART_FAIL",j="GET_CART_REQUEST",b="DELETE_CART_SUCCESS",d="DELETE_CART_FAIL",h="DELETE_CART_REQUEST"},9:function(e,t,n){"use strict";var r=n(3),c=n.n(r),a=n(7),s=n(57),i=n.n(s),o=n(58),l=n.n(o),u=i.a.create({baseURL:"",paramsSerializer:function(e){return l.a.stringify(e)}});u.interceptors.request.use(function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=JSON.parse(localStorage.getItem("userInfo")))&&(t.headers.Authorization="Bearer "+n.token),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),u.interceptors.response.use((function(e){return e}),(function(e){throw e})),t.a=u}},[[110,3,4]]]);
//# sourceMappingURL=main.61e1a089.chunk.js.map