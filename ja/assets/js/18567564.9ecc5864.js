"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[30318],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(c,".").concat(d)]||p[d]||v[d]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10347:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),i=(t(67294),t(3905));const o={id:"version",title:"version",sidebar_label:"version",original_id:"version"},a=void 0,l={unversionedId:"utilities/version",id:"version-1.4.0/utilities/version",title:"version",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.4.0/utilities/version.md",sourceDirName:"utilities",slug:"/utilities/version",permalink:"/kuc-docusaurus-v2/ja/docs/1.4.0/utilities/version",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"version",title:"version",sidebar_label:"version",original_id:"version"},sidebar:"version-1.4.0-docs",previous:{title:"MobileTimePicker",permalink:"/kuc-docusaurus-v2/ja/docs/1.4.0/components/mobile/mobile-time-picker"},next:{title:"A commentary on the difference between v0 and v1",permalink:"/kuc-docusaurus-v2/ja/docs/1.4.0/guides/comparison-v0-v1"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"UMD \u3092\u5229\u7528\u3059\u308b",id:"umd-\u3092\u5229\u7528\u3059\u308b",level:3},{value:"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",level:3}],u={toc:s},p="wrapper";function v(e){let{components:r,...t}=e;return(0,i.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"version \u6a5f\u80fd\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"package.json \u306e version \u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("p",null,"\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"umd-\u3092\u5229\u7528\u3059\u308b"},"UMD \u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javescript"},"console.log(Kuc.version);\n")),(0,i.kt)("h3",{id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"},"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javescript"},'import { version } from "kintone-ui-component/lib/version";\nconsole.log(version);\n')))}v.isMDXComponent=!0}}]);