"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[29016],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=d(a),u=r,s=k["".concat(o,".").concat(u)]||k[u]||c[u]||l;return a?n.createElement(s,p(p({ref:e},m),{},{components:a})):n.createElement(s,p({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[k]="string"==typeof t?t:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23023:(t,e,a)=>{a.d(e,{J:()=>r});var n=a(67294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kucs["1.10.0"].Dropdown({items:[{label:"orange",value:"Orange"},{label:"apple",value:"Apple"}],value:"Orange"});t.current.appendChild(e)}),[]),n.createElement("div",{className:"sample-container",id:"dropdown"},n.createElement("div",{id:"sample-container__components",ref:t}))}},12998:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(23023);const p={id:"dropdown",title:"Dropdown",sidebar_label:"Dropdown",original_id:"dropdown"},i=void 0,o={unversionedId:"components/desktop/dropdown",id:"version-1.8.0/components/desktop/dropdown",title:"Dropdown",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.8.0/components/desktop/dropdown.md",sourceDirName:"components/desktop",slug:"/components/desktop/dropdown",permalink:"/ja/docs/1.8.0/components/desktop/dropdown",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"dropdown",title:"Dropdown",sidebar_label:"Dropdown",original_id:"dropdown"},sidebar:"version-1.8.0-docs",previous:{title:"Dialog",permalink:"/ja/docs/1.8.0/components/desktop/dialog"},next:{title:"MultiChoice",permalink:"/ja/docs/1.8.0/components/desktop/multichoice"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],k={toc:m},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Dropdown \u306f\u8907\u6570\u9078\u629e\u80a2\u306e\u4e2d\u304b\u3089\u4e00\u3064\u306e\u5024\u3092\u9078\u629e\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.J,{mdxType:"DropdownComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5024"),(0,r.kt)("td",{parentName:"tr",align:"left"},"value \u3068 selectedIndex \u304c\u672a\u6307\u5b9a\u306e\u5834\u5408\u3001\u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044",(0,r.kt)("br",null),"\u91cd\u8907\u3059\u308b value \u3092\u6307\u5b9a\u3057\u3001selectedIndex \u3092\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001Item.value \u3067\u6700\u521d\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u305f value \u306e\u9805\u76ee\u304c\u9078\u629e\u3055\u308c\u3001selectedIndex \u306b\u306f\u305d\u306e\u9078\u629e\u80a2\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u304c\u5165\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"selectedIndex *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5024\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"items \u5185\u306b\u91cd\u8907\u3059\u308b Item.value \u304c\u3042\u308b\u5834\u5408\u3001\u3069\u306e Item.value \u304c\u9078\u629e\u3055\u308c\u308b\u304b\u6307\u5b9a\u3059\u308b\u305f\u3081\u306e\u30d7\u30ed\u30d1\u30c6\u30a3",(0,r.kt)("br",null),"value \u304c\u672a\u6307\u5b9a\u3067\u3001selectedIndex \u306b\u6709\u52b9\u306a\u5024\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001 \u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u306e\u9078\u629e\u80a2\u304c\u9078\u629e\u3055\u308c\u308b",(0,r.kt)("br",null),"value \u306b\u91cd\u8907\u3057\u305f Item.value \u304c\u6307\u5b9a\u3055\u308c\u3001selectedIndex \u306e\u5024\u304c value \u5185\u306e\u91cd\u8907\u3057\u305f Item.value \u3068\u30de\u30c3\u30d4\u30f3\u30b0\u3057\u305f\u5834\u5408\u3001\u305d\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u756a\u53f7\u306e\u9078\u629e\u80a2\u304c\u9078\u629e\u3055\u308c\u308b",(0,r.kt)("br",null),"selectedIndex \u304c\u6570\u5024\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7de8\u96c6\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"items"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\<Item",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u9078\u629e\u80a2\u4e00\u89a7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"items \u304c\u914d\u5217\u4ee5\u5916\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Item.label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5404\u9078\u629e\u80a2\u306e\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Item.label \u304c\u672a\u6307\u5b9a\u306e\u5834\u5408\u3001UI \u4e0a\u306f Item.value \u306e\u5024\u304c\u8868\u793a\u3055\u308c\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Item.value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5404\u9078\u629e\u80a2\u306e\u5024"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Item.value \u306b\u91cd\u8907\u306e\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"*1: Item.value \u306b\u91cd\u8907\u3057\u305f\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b\u3002\u91cd\u8907\u3057\u305f\u5024\u3092\u6307\u5b9a\u3059\u308b\u5834\u5408\u3001value \u3068 selectedIndex \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3063\u3066\u5236\u5fa1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002",(0,r.kt)("br",null),"\n\u4f8b: ",(0,r.kt)("inlineCode",{parentName:"p"},"items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}]")," \u3092\u6307\u5b9a\u3059\u308b"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3092\u6307\u5b9a\u3001selectedIndex \u3092\u672a\u6307\u5b9a\u306e\u5834\u5408:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value = 'fruit': \u6700\u521d\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"value = 'other': \u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e\u3088\u3046\u306b value \u3092\u672a\u6307\u5b9a\u3001selectedIndex \u3092\u6307\u5b9a\u3059\u308b\u5834\u5408:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"selectedIndex = 1: 2\u756a\u76ee\u306e\u5024\u304c\u9078\u629e\u3055\u308c\u308b\u3002"),(0,r.kt)("li",{parentName:"ul"},"selectedIndex = 99: \u4f55\u3082\u9078\u629e\u3055\u308c\u306a\u3044\u3002"))))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("br",null),"event.detail.oldValue : \u5909\u66f4\u524d\u306e value \u306e\u5024",(0,r.kt)("br",null),"event.detail.value : \u5909\u66f4\u5f8c\u306e value \u306e\u5024")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Dropdown(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/ja/docs/1.8.0/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst dropdown = new Kuc.Dropdown({\n  label: 'Fruit',\n  requiredIcon: true,\n  items: [\n    {\n      label: 'orange',\n      value: 'Orange'\n    },\n    {\n      label: 'apple',\n      value: 'Apple'\n    }\n  ],\n  value: 'Orange',\n  selectedIndex: 0,\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(dropdown);\n\ndropdown.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);