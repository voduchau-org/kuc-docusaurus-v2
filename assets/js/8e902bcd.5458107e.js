"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[91765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,m=u["".concat(s,".").concat(d)]||u[d]||v[d]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61989:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={id:"version",title:"version",sidebar_label:"version",original_id:"version"},a=void 0,l={unversionedId:"utilities/version",id:"version-1.3.2/utilities/version",title:"version",description:"Overview",source:"@site/versioned_docs/version-1.3.2/utilities/version.md",sourceDirName:"utilities",slug:"/utilities/version",permalink:"/docs/1.3.2/utilities/version",draft:!1,tags:[],version:"1.3.2",frontMatter:{id:"version",title:"version",sidebar_label:"version",original_id:"version"},sidebar:"version-1.3.2-docs",previous:{title:"MobileTextArea",permalink:"/docs/1.3.2/components/mobile/mobile-textarea"},next:{title:"A commentary on the difference between v0 and v1",permalink:"/docs/1.3.2/guides/comparison-v0-v1"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Sample Code",id:"sample-code",level:2},{value:"Use the UMD",id:"use-the-umd",level:3},{value:"Use the npm package",id:"use-the-npm-package",level:3}],p={toc:c},u="wrapper";function v(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The version feature allows the user to retrieve the version information of the package."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"You can retrieve the package's version information of the version property value in package.json."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("p",null,"Here is a sample code when accessing the version information:"),(0,i.kt)("h3",{id:"use-the-umd"},"Use the UMD"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javescript"},"console.log(Kuc.version);\n")),(0,i.kt)("h3",{id:"use-the-npm-package"},"Use the npm package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javescript"},'import { version } from "kintone-ui-component/lib/version";\nconsole.log(version);\n')))}v.isMDXComponent=!0}}]);