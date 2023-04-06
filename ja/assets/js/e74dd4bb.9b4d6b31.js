"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[9603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(a),u=l,b=k["".concat(p,".").concat(u)]||k[u]||c[u]||r;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13023:(e,t,a)=>{a.d(t,{F:()=>l});var n=a(67294);const l=()=>{const e=(0,n.useRef)();return(0,n.useEffect)((()=>{const t=new Kucs["1.10.0"].MobileCheckbox({className:"cus-mobile-checkbox",value:["Orange"],items:[{label:"orange",value:"Orange"},{label:"apple",value:"Apple"}]});e.current.appendChild(t)}),[]),n.createElement("div",{className:"sample-container",id:"mobile-checkbox"},n.createElement("div",{id:"sample-container__components",className:"mobile",ref:e}))}},68071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(13023);const i={id:"mobile-checkbox",title:"MobileCheckbox",sidebar_label:"MobileCheckbox",original_id:"mobile-checkbox"},o=void 0,p={unversionedId:"components/mobile/mobile-checkbox",id:"version-1.8.0/components/mobile/mobile-checkbox",title:"MobileCheckbox",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.8.0/components/mobile/mobile-checkbox.md",sourceDirName:"components/mobile",slug:"/components/mobile/mobile-checkbox",permalink:"/ja/docs/1.8.0/components/mobile/mobile-checkbox",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"mobile-checkbox",title:"MobileCheckbox",sidebar_label:"MobileCheckbox",original_id:"mobile-checkbox"},sidebar:"version-1.8.0-docs",previous:{title:"MobileButton",permalink:"/ja/docs/1.8.0/components/mobile/mobile-button"},next:{title:"MobileDatePicker",permalink:"/ja/docs/1.8.0/components/mobile/mobile-date-picker"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],k={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"MobileCheckbox \u306f\u3001\u8907\u6570\u9078\u629e\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)(r.F,{mdxType:"MobileCheckboxComponent"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"className"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"error"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderVisible"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u80a2\u3092\u56f2\u3046\u67a0\u7dda\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9078\u629e\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"items"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<Item",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u9078\u629e\u80a2\u4e00\u89a7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"items \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5404\u9078\u629e\u80a2\u306e\u30c6\u30ad\u30b9\u30c8"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.label \u304c\u672a\u6307\u5b9a\u306e\u5834\u5408\u3001UI \u4e0a\u306f Item.value \u306e\u5024\u304c\u8868\u793a\u3055\u308c\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5404\u9078\u629e\u80a2\u306e\u5024"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.value \u306b\u91cd\u8907\u306e\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value *1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<string",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5024"),(0,l.kt)("td",{parentName:"tr",align:"left"},"value \u3068 selectedIndex \u304c\u672a\u6307\u5b9a\u306e\u5834\u5408\u3001\u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044",(0,l.kt)("br",null),"\u91cd\u8907\u3059\u308b value \u3092\u6307\u5b9a\u3057\u3001selectedIndex \u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001Item.value \u3067\u6700\u521d\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f value \u306e\u9805\u76ee\u304c\u9078\u629e\u3055\u308c\u3001selectedIndex \u306b\u306f\u305d\u306e\u9078\u629e\u80a2\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u304c\u5165\u308b",(0,l.kt)("br",null),"value \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectedIndex *1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<Number",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5024\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"items \u5185\u306b\u91cd\u8907\u3059\u308b Item.value \u304c\u3042\u308b\u5834\u5408\u3001\u3069\u306e Item.value \u304c\u9078\u629e\u3055\u308c\u308b\u304b\u6307\u5b9a\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",(0,l.kt)("br",null),"value \u304c\u672a\u6307\u5b9a\u3067\u3001selectedIndex \u306b\u6709\u52b9\u306a\u5024\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 \u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u306e\u9078\u629e\u80a2\u304c\u9078\u629e\u3055\u308c\u308b",(0,l.kt)("br",null),"value \u306b\u91cd\u8907\u3057\u305f Item.value \u304c\u6307\u5b9a\u3055\u308c\u3001selectedIndex \u306e\u5024\u304c value \u5185\u306e\u91cd\u8907\u3057\u305f Item.value \u3068\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u306e\u9078\u629e\u80a2\u304c\u9078\u629e\u3055\u308c\u308b")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"*1: value \u3068 Item.value \u306b\u91cd\u8907\u3057\u305f\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b\u3002\u91cd\u8907\u3057\u305f\u5024\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001value \u3068 selectedIndex \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3063\u3066\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",(0,l.kt)("br",null),"\n\u4f8b: ",(0,l.kt)("inlineCode",{parentName:"p"},"items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}, {label: 'Lemon', value: 'fruit'}]")," \u3092\u6307\u5b9a\u3059\u308b"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3092\u6307\u5b9a\u3001selectedIndex \u3092\u672a\u6307\u5b9a\u306e\u5834\u5408:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'vegetable']",": \u6700\u521d\u3068 3\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"value = ","['meat', 'other']",": \u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3092\u672a\u6307\u5b9a\u3001selectedIndex \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"selectedIndex = ","[0, 1]",": \u6700\u521d\u3068 2\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"selectedIndex = ","[98, 99]",": \u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3068 selectedIndex \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'vegetable']",", selectedIndex = ","[1, 3]",": 2\u756a\u76ee\u3068 3\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'fruit', 'vegetable']",", selectedIndex = ","[1, 3]",": 2\u756a\u76ee\u3068 3\u756a\u76ee\u3068 4\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'fruit']",", selectedIndex = ","[1, 2, 3]",": \u6700\u521d\u3068 2\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002",(0,l.kt)("br",null),"\n\u203b value \u3068 selectedIndex \u304c\u540c\u6642\u306b\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001value \u306e\u5024\u304c\u512a\u5148\u3055\u308c\u308b\u3002\u3088\u3063\u3066\u3001\u4e0a\u8a18\u306e 1\u3064\u76ee\u3068 3\u3064\u76ee\u306e\u4f8b\u306b\u304a\u3044\u3066 selectedIndex \u306e 3 \u306b\u5f53\u305f\u308b item \u306f\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))))),(0,l.kt)("h3",{id:"event"},"Event"),(0,l.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"change"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,l.kt)("br",null),(0,l.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,l.kt)("br",null),"event.detail.oldValue : \u5909\u66f4\u524d\u306e value \u306e\u5024",(0,l.kt)("br",null),"event.detail.value : \u5909\u66f4\u5f8c\u306e value \u306e\u5024")))),(0,l.kt)("h3",{id:"constructor"},"Constructor"),(0,l.kt)("p",null,"MobileCheckbox(options)",(0,l.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,l.kt)("h4",{id:"parameter"},"Parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/ja/docs/1.8.0/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.mobile.app.record.getSpaceElement('space');\n\nconst mobileCheckbox = new Kuc.MobileCheckbox({\n  label: 'Fruit',\n  requiredIcon: true,\n  items: [\n    {\n      label: 'orange',\n      value: 'Orange'\n    },\n    {\n      label: 'apple',\n      value: 'Apple'\n    }\n  ],\n  value: ['Orange'],\n  selectedIndex: [0],\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false,\n  borderVisible: true\n});\nspace.appendChild(mobileCheckbox);\n\nmobileCheckbox.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);