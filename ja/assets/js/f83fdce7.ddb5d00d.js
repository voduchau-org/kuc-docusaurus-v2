"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[61437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"custom-css",title:"Custom CSS",sidebar_label:"Custom CSS",original_id:"custom-css"},o=void 0,c={unversionedId:"getting-started/custom-css",id:"version-1.8.0/getting-started/custom-css",title:"Custom CSS",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.8.0/getting-started/custom-css.md",sourceDirName:"getting-started",slug:"/getting-started/custom-css",permalink:"/ja/docs/1.8.0/getting-started/custom-css",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"custom-css",title:"Custom CSS",sidebar_label:"Custom CSS",original_id:"custom-css"},sidebar:"version-1.8.0-docs",previous:{title:"Quick Start",permalink:"/ja/docs/1.8.0/getting-started/quick-start"},next:{title:"Usage with TypeScript",permalink:"/ja/docs/1.8.0/getting-started/usage-with-typescript"}},i={},l=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"CSS \u7d99\u627f",id:"css-\u7d99\u627f",level:3},{value:"CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3",id:"css-\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3",level:3},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9",id:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"kintone UI Component\uff08KUC\uff09")," \u3067\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"#css-%E7%B6%99%E6%89%BF"},"CSS \u7d99\u627f"),"\u3068 ",(0,a.kt)("a",{parentName:"p",href:"#css-%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3"},"CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3"),"\u306e\u6982\u5ff5\u3092\u5229\u7528\u3057\u3066\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u306a\u8981\u7d20\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002CSS \u30bb\u30ec\u30af\u30bf\u30fc\u3092\u9069\u7528\u3057\u3066 CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30c4\u30ea\u30fc\u30d9\u30fc\u30b9\u304a\u3088\u3073\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3054\u3068\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u7c21\u5358\u306b\u9069\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"css-\u7d99\u627f"},"CSS \u7d99\u627f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/CSS/inheritance"},"CSS \u7d99\u627f"),"\u306b\u3088\u308a\u3001\u89aa\u8981\u7d20\u306f\u7279\u5b9a\u306e CSS \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5b50\u8981\u7d20\u306b\u7d99\u627f\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"css-\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3"},"CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3"),(0,a.kt)("p",null,"\u5168\u3066\u306e ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties"},"CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"--custom-property-name"),"\uff09\u306f\u3001\u89aa\u304b\u3089\u5024\u3092\u7d99\u627f\u3057\u307e\u3059\u3002\u3053\u308c\u3092\u5229\u7528\u3057\u3066\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5916\u90e8\u304b\u3089\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"KUC \u306f\u8981\u7d20\u3054\u3068\u306b\u3044\u304f\u3064\u304b\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u516c\u958b\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u305d\u308c\u306b\u57fa\u3065\u3044\u3066\u8981\u7d20\u306e CSS \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u7c21\u5358\u306b\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u3044\u65b9"},"\u4f7f\u3044\u65b9"),(0,a.kt)("p",null,"CSS \u30bb\u30ec\u30af\u30bf\u30fc\u3092\u4f7f\u3063\u3066 ",(0,a.kt)("inlineCode",{parentName:"p"},"--my-background")," \u306b\u5024\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<style>\n  my-element {\n    --my-background: #d9092f;\n  }\n  .sample-class {\n    --my-background: #a8a632;\n  }\n  #sample-id {\n    --my-background: #1ac9b8;\n  }\n</style>\n<my-element></my-element>\n<my-element class="sample-class"></my-element>\n<my-element id="sample-id"></my-element>\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,a.kt)("strong",{parentName:"p"},"Custom CSS")," \u6b04\u306b\u3066 CSS \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)("h2",{id:"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"},"\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9"),(0,a.kt)("p",null,"Text \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e CSS \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<style>\n  kuc-text {\n    --kuc-text-input-width: 200px;\n    --kuc-text-input-height: 200px;\n  }\n  .sample-class {\n    --kuc-text-input-font-size: 16px;\n  }\n  #sample-id {\n    --kuc-text-input-color: #f25b0a;\n  }\n</style>\n<kuc-text></kuc-text>\n<kuc-text class="sample-class"></kuc-text>\n<kuc-text id="sample-id"></kuc-text>\n')))}m.isMDXComponent=!0}}]);