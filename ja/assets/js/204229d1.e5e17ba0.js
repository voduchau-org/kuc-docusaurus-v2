"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[41605],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=c(n),f=r,s=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(s,l(l({ref:e},m),{},{components:n})):a.createElement(s,l({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},85260:(t,e,n)=>{n.d(e,{o:()=>r});var a=n(67294);const r=()=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{const e=new Kuc.MobileNotification({text:"Error!"});e.open(),t.current.appendChild(e)}),[]),a.createElement("div",{className:"sample-container",id:"mobile-notification"},a.createElement("div",{id:"sample-container__components",ref:t}))}},35620:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),i=n(85260);const l={id:"mobile-notification",title:"MobileNotification",sidebar_label:"MobileNotification",original_id:"mobile-notification"},o=void 0,p={unversionedId:"components/mobile/mobile-notification",id:"version-1.3.1/components/mobile/mobile-notification",title:"MobileNotification",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.3.1/components/mobile/mobile-notification.md",sourceDirName:"components/mobile",slug:"/components/mobile/mobile-notification",permalink:"/ja/docs/1.3.1/components/mobile/mobile-notification",draft:!1,tags:[],version:"1.3.1",frontMatter:{id:"mobile-notification",title:"MobileNotification",sidebar_label:"MobileNotification",original_id:"mobile-notification"},sidebar:"version-1.3.1-docs",previous:{title:"MobileMultiChoice",permalink:"/ja/docs/1.3.1/components/mobile/mobile-multichoice"},next:{title:"MobileRadioButton",permalink:"/ja/docs/1.3.1/components/mobile/mobile-radio-button"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],d={toc:m},u="wrapper";function f(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"MobileNotification \u306f\u3001\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u306e\u901a\u77e5\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(i.o,{mdxType:"MobileNotificationComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u9589\u3058\u308b\u307e\u3067\u306e\u30df\u30ea\u79d2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5358\u4f4d\u306f\u30df\u30ea\u79d2",(0,r.kt)("br",null),"0\u4ee5\u4e0a\u306e\u6570\u5024\u3092\u6307\u5b9a\u3067\u304d\u308b",(0,r.kt)("br",null),"\u3082\u3057\u4e0d\u6b63\u306a\u5024\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\uff080\u672a\u6e80\u3082\u3057\u304f\u306f\u6570\u5024\u4ee5\u5916\uff09\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u958b\u304b\u308c\u305f\u307e\u307e\u81ea\u52d5\u7684\u306b\u306f\u9589\u3058\u306a\u3044")))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u9589\u3058\u3089\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"MobileNotification(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"open"},"open()"),(0,r.kt)("p",null,"MobileNotification \u3092\u8868\u793a\u3059\u308b"),(0,r.kt)("h5",{id:"parameter-1"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("h4",{id:"close"},"close()"),(0,r.kt)("p",null,"MobileNotification \u3092\u975e\u8868\u793a\u306b\u3059\u308b"),(0,r.kt)("h5",{id:"parameter-2"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return-1"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const mobileNotification = new Kuc.MobileNotification({\n  text:  'Error occurred!',\n  className: 'options-class',\n  duration: 2000\n});\n\nmobileNotification.addEventListener('close', event => {\n  console.log(event);\n});\n\nmobileNotification.open();\nmobileNotification.close();\n")))}f.isMDXComponent=!0}}]);