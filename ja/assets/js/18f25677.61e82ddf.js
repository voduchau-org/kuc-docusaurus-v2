"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[81709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,m=p["".concat(c,".").concat(d)]||p[d]||v[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const o={id:"version",title:"version",sidebar_label:"version",original_id:"version"},a=void 0,l={unversionedId:"utilities/version",id:"version-1.3.1/utilities/version",title:"version",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.3.1/utilities/version.md",sourceDirName:"utilities",slug:"/utilities/version",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.1/utilities/version",draft:!1,tags:[],version:"1.3.1",frontMatter:{id:"version",title:"version",sidebar_label:"version",original_id:"version"},sidebar:"version-1.3.1-docs",previous:{title:"MobileTextArea",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.1/components/mobile/mobile-textarea"},next:{title:"A commentary on the difference between v0 and v1",permalink:"/kuc-docusaurus-v2/ja/docs/1.3.1/guides/comparison-v0-v1"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"UMD \u3092\u5229\u7528\u3059\u308b",id:"umd-\u3092\u5229\u7528\u3059\u308b",level:3},{value:"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",level:3}],u={toc:s},p="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"version \u6a5f\u80fd\u306f\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"package.json \u306e version \u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("p",null,"\u30d0\u30fc\u30b8\u30e7\u30f3\u60c5\u5831\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u969b\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,i.kt)("h3",{id:"umd-\u3092\u5229\u7528\u3059\u308b"},"UMD \u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javescript"},"console.log(Kuc.version);\n")),(0,i.kt)("h3",{id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"},"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javescript"},'import { version } from "kintone-ui-component/lib/version";\nconsole.log(version);\n')))}v.isMDXComponent=!0}}]);