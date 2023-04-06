"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[62914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),v=o,m=c["".concat(l,".").concat(v)]||c[v]||d[v]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},30805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"release-notes-v1.0.4",title:"v1.0.4 Release Notes",sidebar_label:"v1.0.4 Release Notes",original_id:"release-notes-v1.0.4"},s=void 0,i={unversionedId:"releases/release-notes-v1.0.4",id:"version-1.6.0/releases/release-notes-v1.0.4",title:"v1.0.4 Release Notes",description:"Overview",source:"@site/versioned_docs/version-1.6.0/releases/release-notes-v1.0.4.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.0.4",permalink:"/docs/1.6.0/releases/release-notes-v1.0.4",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"release-notes-v1.0.4",title:"v1.0.4 Release Notes",sidebar_label:"v1.0.4 Release Notes",original_id:"release-notes-v1.0.4"},sidebar:"version-1.6.0-release-notes",previous:{title:"v1.0.5 Release Notes",permalink:"/docs/1.6.0/releases/release-notes-v1.0.5"},next:{title:"v1.0.3 Release Notes",permalink:"/docs/1.6.0/releases/release-notes-v1.0.3"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Security Updates",id:"security-updates",level:3},{value:"Document",id:"document",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Here are the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.4"},"kintone UI Component v1.0.4")," Release Notes.",(0,o.kt)("br",null),"\nEnglish document support, bug fix, maintenances, and security updates have been made."),(0,o.kt)("h2",{id:"update-details"},"Update details"),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The issue "Dropdown display collapses on group field" ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/kintone-labs/kintone-ui-component/issues/512"},"#512"),". @juridon",(0,o.kt)("br",null),"\nFixed the desktop components to be displayed correctly in the group field."),(0,o.kt)("li",{parentName:"ul"},'Added "background-color: #ffffff;" for TextArea component.')),(0,o.kt)("h3",{id:"maintenance"},"Maintenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved source code coverage and quality of the Unit Tests.")),(0,o.kt)("h3",{id:"security-updates"},"Security Updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated dependent libraries: webpack, ws, browserslist, postcss, hosted-git-info, xmlhttprequest-ssl, y18n.")),(0,o.kt)("h3",{id:"document"},"Document"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supported English document."),(0,o.kt)("li",{parentName:"ul"},"Updated the Quick Start webpack instructions."),(0,o.kt)("li",{parentName:"ul"},"Wrote the status about the React version provided in v0: we haven't supported it in v1 now."),(0,o.kt)("li",{parentName:"ul"},"Unsupported the Internet Explorer 11. (The Internet Explorer 11 will be retired on June 15, 2022.)",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"li",href:"https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/"},"https://blogs.windows.com/windowsexperience/2021/05/19/the-future-of-internet-explorer-on-windows-10-is-in-microsoft-edge/"))))}d.isMDXComponent=!0}}]);