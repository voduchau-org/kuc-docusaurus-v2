"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[79403],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},d),{},{components:n})):r.createElement(f,o({ref:e},d))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30270:(t,e,n)=>{n.d(e,{c:()=>a});var r=n(67294);const a=()=>{const t=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=new Kuc.Notification({text:"Info!",type:"info",className:"notification"}),n=new Kuc.Notification({text:"Success!",type:"success",className:"notification"});n.style.paddingTop="80px";const r=new Kuc.Notification({text:"Error!",type:"error",className:"notification"});r.style.paddingTop="160px",e.open(),n.open(),r.open(),t.current.appendChild(e),t.current.appendChild(n),t.current.appendChild(r)}),[]),r.createElement("div",{className:"sample-container",id:"notification"},r.createElement("div",{id:"sample-container__components",ref:t}))}},97335:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(30270);const o={id:"notification",title:"Notification",sidebar_label:"Notification",original_id:"notification"},l=void 0,c={unversionedId:"components/desktop/notification",id:"version-1.0.1/components/desktop/notification",title:"Notification",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.0.1/components/desktop/notification.md",sourceDirName:"components/desktop",slug:"/components/desktop/notification",permalink:"/kuc-docusaurus-v2/ja/docs/1.0.1/components/desktop/notification",draft:!1,tags:[],version:"1.0.1",frontMatter:{id:"notification",title:"Notification",sidebar_label:"Notification",original_id:"notification"},sidebar:"version-1.0.1-docs",previous:{title:"MultiChoice",permalink:"/kuc-docusaurus-v2/ja/docs/1.0.1/components/desktop/multichoice"},next:{title:"RadioButton",permalink:"/kuc-docusaurus-v2/ja/docs/1.0.1/components/desktop/radio-button"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],s={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Notification \u306f\u3001\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u306e\u901a\u77e5\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,a.kt)(i.c,{mdxType:"NotificationComponent"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"className"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""'),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""'),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"danger"'),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u80cc\u666f\u8272"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u4ee5\u4e0b\u3092\u6307\u5b9a\u3067\u304d\u308b",(0,a.kt)("br",null),'"danger" : Red(#e74c3c)',(0,a.kt)("br",null),'"info" : Blue(#3498db)',(0,a.kt)("br",null),'"success" : Green(#91c36c)')))),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"Notification(options)",(0,a.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,a.kt)("h4",{id:"parameter"},"Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,a.kt)("h4",{id:"open"},"open()"),(0,a.kt)("p",null,"Notification \u3092\u8868\u793a\u3059\u308b"),(0,a.kt)("h5",{id:"parameter-1"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("h4",{id:"close"},"close()"),(0,a.kt)("p",null,"Notification \u3092\u975e\u8868\u793a\u306b\u3059\u308b"),(0,a.kt)("h5",{id:"parameter-2"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return-1"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const notification = new Kuc.Notification({\n  text:  'Error occurred!',\n  type: 'danger',\n  className: 'options-class'\n});\nnotification.open();\nnotification.close();\n")))}m.isMDXComponent=!0}}]);