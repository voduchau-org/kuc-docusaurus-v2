"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[4976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62814:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(67294);const r=()=>{const e=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=Kucs["1.10.0"],n=new t.Button({text:"OK",type:"submit"}),a=new t.Button({text:"Cancel",type:"normal"});a.style.marginRight="16px";const r=document.createElement("div");r.style.display="flex",r.appendChild(a),r.appendChild(n);const l=new t.Dialog({title:"Title",content:"<div><p style='margin: 0;'>This is Content</p></div>",footer:r,icon:"info",className:"dialog"});l.open(),e.current.appendChild(l)}),[]),a.createElement("div",{className:"sample-container",id:"dialog"},a.createElement("div",{id:"sample-container__components",ref:e}))}},81347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(62814);const o={id:"dialog",title:"Dialog",sidebar_label:"Dialog",original_id:"dialog"},i=void 0,p={unversionedId:"components/desktop/dialog",id:"version-1.3.1/components/desktop/dialog",title:"Dialog",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.3.1/components/desktop/dialog.md",sourceDirName:"components/desktop",slug:"/components/desktop/dialog",permalink:"/ja/docs/1.3.1/components/desktop/dialog",draft:!1,tags:[],version:"1.3.1",frontMatter:{id:"dialog",title:"Dialog",sidebar_label:"Dialog",original_id:"dialog"},sidebar:"version-1.3.1-docs",previous:{title:"DateTimePicker",permalink:"/ja/docs/1.3.1/components/desktop/datetime-picker"},next:{title:"Dropdown",permalink:"/ja/docs/1.3.1/components/desktop/dropdown"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],c={toc:m},s="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Dialog \u306f\u3001\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(l.a,{mdxType:"DialogComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Header \u306e\u30bf\u30a4\u30c8\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Content \u306e DOM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML \u304c\u8a18\u8f09\u3055\u308c\u305f string \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b HTML \u306b\u5909\u63db\u3057\u3066\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"footer *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Footer \u306e DOM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML \u304c\u8a18\u8f09\u3055\u308c\u305f string \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b HTML \u306b\u5909\u63db\u3057\u3066\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u308b")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"*1: kintone UI Component \u306f\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5024\u3092\u5185\u90e8\u7684\u306b\u30b5\u30cb\u30bf\u30a4\u30ba\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u30fc\u5165\u529b\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3088\u3046\u306a\u5b9f\u88c5\u3067\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u958b\u767a\u8005\u81ea\u8eab\u3067 XSS \u5bfe\u7b56\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u9589\u3058\u3089\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Dialog(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30e1\u30bd\u30c3\u30c9\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"open"},"open()"),(0,r.kt)("p",null,"Dialog \u3092\u8868\u793a\u3059\u308b"),(0,r.kt)("h5",{id:"parameter-1"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("h4",{id:"close"},"close()"),(0,r.kt)("p",null,"Dialog \u3092\u975e\u8868\u793a\u306b\u3059\u308b"),(0,r.kt)("h5",{id:"parameter-2"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return-1"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const dialog = new Kuc.Dialog({\n  title:  'Title',\n  content: '<div>This is Content</div>',\n  footer: 'Footer'\n});\n\ndialog.addEventListener('close', event => {\n  console.log(event);\n});\n\ndialog.open();\ndialog.close();\n")))}u.isMDXComponent=!0}}]);