"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[84580],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=n,f=u["".concat(p,".").concat(k)]||u[k]||c[k]||r;return a?l.createElement(f,i(i({ref:t},d),{},{components:a})):l.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85943:(e,t,a)=>{a.d(t,{m:()=>n});var l=a(67294);const n=()=>{const e=(0,l.useRef)();return(0,l.useEffect)((()=>{const t=new Kucs["1.10.0"].MobileMultiChoice({value:["Orange"],items:[{label:"orange",value:"Orange"},{label:"apple",value:"Apple"}]});e.current.appendChild(t)}),[]),l.createElement("div",{className:"sample-container",id:"mobile-multichoice"},l.createElement("div",{id:"sample-container__components",className:"mobile",ref:e}))}},11790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var l=a(87462),n=(a(67294),a(3905)),r=a(85943);const i={id:"mobile-multichoice",title:"MobileMultiChoice",sidebar_label:"MobileMultiChoice",original_id:"mobile-multichoice"},o=void 0,p={unversionedId:"components/mobile/mobile-multichoice",id:"version-1.3.2/components/mobile/mobile-multichoice",title:"MobileMultiChoice",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.3.2/components/mobile/mobile-multichoice.md",sourceDirName:"components/mobile",slug:"/components/mobile/mobile-multichoice",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.2/components/mobile/mobile-multichoice",draft:!1,tags:[],version:"1.3.2",frontMatter:{id:"mobile-multichoice",title:"MobileMultiChoice",sidebar_label:"MobileMultiChoice",original_id:"mobile-multichoice"},sidebar:"version-1.3.2-docs",previous:{title:"MobileDropdown",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.2/components/mobile/mobile-dropdown"},next:{title:"MobileNotification",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.2/components/mobile/mobile-notification"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],u={toc:d},c="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"MobileMultiChoice \u306f\u3001\u8907\u6570\u9078\u629e\u80a2\u306e\u4e2d\u304b\u3089\u8907\u6570\u306e\u5024\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)(r.m,{mdxType:"MobilMultichoiceComponent"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("h3",{id:"property"},"Property"),(0,n.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"className"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},'""'),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7de8\u96c6\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"items"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array\\<Item",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u9078\u629e\u80a2\u4e00\u89a7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"items \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Item.label"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5404\u9078\u629e\u80a2\u306e\u30c6\u30ad\u30b9\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Item.label \u304c\u672a\u6307\u5b9a\u306e\u5834\u5408\u3001UI \u4e0a\u306f Item.value \u306e\u5024\u304c\u8868\u793a\u3055\u308c\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Item.value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"null"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5404\u9078\u629e\u80a2\u306e\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Item.value \u306b\u91cd\u8907\u306e\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value *1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array\\<string",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5024"),(0,n.kt)("td",{parentName:"tr",align:"left"},"value \u3068 selectedIndex \u304c\u672a\u6307\u5b9a\u306e\u5834\u5408\u3001\u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044",(0,n.kt)("br",null),"\u91cd\u8907\u3059\u308b value \u3092\u6307\u5b9a\u3057\u3001selectedIndex \u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001Item.value \u3067\u6700\u521d\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f value \u306e\u9805\u76ee\u304c\u9078\u629e\u3055\u308c\u3001selectedIndex \u306b\u306f\u305d\u306e\u9078\u629e\u80a2\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u304c\u5165\u308b",(0,n.kt)("br",null),"value \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"selectedIndex *1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Array\\<Number",">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5024\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"items \u5185\u306b\u91cd\u8907\u3059\u308b Item.value \u304c\u3042\u308b\u5834\u5408\u3001\u3069\u306e Item.value \u304c\u9078\u629e\u3055\u308c\u308b\u304b\u6307\u5b9a\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",(0,n.kt)("br",null),"value \u304c\u672a\u6307\u5b9a\u3067\u3001selectedIndex \u306b\u6709\u52b9\u306a\u5024\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 \u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u306e\u9078\u629e\u80a2\u304c\u9078\u629e\u3055\u308c\u308b",(0,n.kt)("br",null),"value \u306b\u91cd\u8907\u3057\u305f Item.value \u304c\u6307\u5b9a\u3055\u308c\u3001selectedIndex \u306e\u5024\u304c value \u5185\u306e\u91cd\u8907\u3057\u305f Item.value \u3068\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u306e\u9078\u629e\u80a2\u304c\u9078\u629e\u3055\u308c\u308b")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"*1: value \u3068 Item.value \u306b\u91cd\u8907\u3057\u305f\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b\u3002\u91cd\u8907\u3057\u305f\u5024\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001value \u3068 selectedIndex \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3063\u3066\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",(0,n.kt)("br",null),"\n\u4f8b: ",(0,n.kt)("inlineCode",{parentName:"p"},"items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}, {label: 'Lemon', value: 'fruit'}]")," \u3092\u6307\u5b9a\u3059\u308b"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3092\u6307\u5b9a\u3001selectedIndex \u3092\u672a\u6307\u5b9a\u306e\u5834\u5408:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"value = ","['fruit', 'vegetable']",": \u6700\u521d\u3068 3\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"value = ","['meat', 'other']",": \u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3092\u672a\u6307\u5b9a\u3001selectedIndex \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"selectedIndex = ","[0, 1]",": \u6700\u521d\u3068 2\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"selectedIndex = ","[98, 99]",": \u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3068 selectedIndex \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"value = ","['fruit', 'vegetable']",", selectedIndex = ","[1, 3]",": 2\u756a\u76ee\u3068 3\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"value = ","['fruit', 'fruit', 'vegetable']",", selectedIndex = ","[1, 3]",": 2\u756a\u76ee\u3068 3\u756a\u76ee\u3068 4\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"value = ","['fruit', 'fruit']",", selectedIndex = ","[1, 2, 3]",": \u6700\u521d\u3068 2\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002",(0,n.kt)("br",null),"\n\u203b value \u3068 selectedIndex \u304c\u540c\u6642\u306b\u6307\u5b9a\u3055\u308c\u305f\u5834\u5408\u3001value \u306e\u5024\u304c\u512a\u5148\u3055\u308c\u308b\u3002\u3088\u3063\u3066\u3001\u4e0a\u8a18\u306e 1\u3064\u76ee\u3068 3\u3064\u76ee\u306e\u4f8b\u306b\u304a\u3044\u3066 selectedIndex \u306e 3 \u306b\u5f53\u305f\u308b item \u306f\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))))),(0,n.kt)("h3",{id:"event"},"Event"),(0,n.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"change"),(0,n.kt)("td",{parentName:"tr",align:"left"},"function"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,n.kt)("br",null),(0,n.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,n.kt)("br",null),"event.detail.oldValue : \u5909\u66f4\u524d\u306e value \u306e\u5024",(0,n.kt)("br",null),"event.detail.value : \u5909\u66f4\u5f8c\u306e value \u306e\u5024")))),(0,n.kt)("h3",{id:"constructor"},"Constructor"),(0,n.kt)("p",null,"MobileMultiChoice(options)",(0,n.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,n.kt)("h4",{id:"parameter"},"Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"options"),(0,n.kt)("td",{parentName:"tr",align:"left"},"object"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"sample-code"},"Sample Code"),(0,n.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const space = kintone.mobile.app.record.getSpaceElement('space');\nconst mobileMultiChoice = new Kuc.MobileMultiChoice({\n  label: 'Fruit',\n  requiredIcon: true,\n  items: [\n    {\n      label: 'orange',\n      value: 'Orange'\n    },\n    {\n      label: 'apple',\n      value: 'Apple'\n    }\n  ],\n  value: ['Orange'],\n  selectedIndex: [0],\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(mobileMultiChoice);\n\nmobileMultiChoice.addEventListener('change', event => {\n  console.log(event);\n});\n")))}k.isMDXComponent=!0}}]);