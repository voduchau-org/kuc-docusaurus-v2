"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[66873],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),v=a,m=d["".concat(i,".").concat(v)]||d[v]||p[v]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},31437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={id:"release-notes-v1.0.3",title:"v1.0.3 Release Notes",sidebar_label:"v1.0.3 Release Notes",original_id:"release-notes-v1.0.3"},s=void 0,l={unversionedId:"releases/release-notes-v1.0.3",id:"version-1.9.0/releases/release-notes-v1.0.3",title:"v1.0.3 Release Notes",description:"Overview",source:"@site/versioned_docs/version-1.9.0/releases/release-notes-v1.0.3.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.0.3",permalink:"/kuc-docusaurus-v2/docs/1.9.0/releases/release-notes-v1.0.3",draft:!1,tags:[],version:"1.9.0",frontMatter:{id:"release-notes-v1.0.3",title:"v1.0.3 Release Notes",sidebar_label:"v1.0.3 Release Notes",original_id:"release-notes-v1.0.3"},sidebar:"version-1.9.0-release-notes",previous:{title:"v1.0.4 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.9.0/releases/release-notes-v1.0.4"},next:{title:"v1.0.2 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.9.0/releases/release-notes-v1.0.2"}},i={},u=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"Features",id:"features",level:3},{value:"Maintenances",id:"maintenances",level:3},{value:"Security Updates",id:"security-updates",level:3},{value:"Document",id:"document",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Here are the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.3"},"kintone UI Component v1.0.3")," Release Notes.",(0,a.kt)("br",null),"\nCode review automation, maintenances, and security updates have been made."),(0,a.kt)("h2",{id:"update-details"},"Update details"),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integrated with Sider Goodcheck on GitHub to automate the code review process.")),(0,a.kt)("h3",{id:"maintenances"},"Maintenances"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Matched the styling of label and error tags for Mobile and Desktop components."),(0,a.kt)("li",{parentName:"ul"},'Changed "my-integrity" tag in CI to "v1.x.x-integrity".')),(0,a.kt)("h3",{id:"security-updates"},"Security Updates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated dependent libraries: webpack, ssri, react-dev-utils, elliptic.")),(0,a.kt)("h3",{id:"document"},"Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the sample code of the search box customization tutorial.")))}p.isMDXComponent=!0}}]);