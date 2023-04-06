"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[53968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),v=a,m=d["".concat(s,".").concat(v)]||d[v]||p[v]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=v;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},2660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"release-notes-v1.0.5",title:"v1.0.5 Release Notes",sidebar_label:"v1.0.5 Release Notes",original_id:"release-notes-v1.0.5"},l=void 0,i={unversionedId:"releases/release-notes-v1.0.5",id:"version-1.6.0/releases/release-notes-v1.0.5",title:"v1.0.5 Release Notes",description:"Overview",source:"@site/versioned_docs/version-1.6.0/releases/release-notes-v1.0.5.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.0.5",permalink:"/kuc-docusaurus-v2/docs/1.6.0/releases/release-notes-v1.0.5",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"release-notes-v1.0.5",title:"v1.0.5 Release Notes",sidebar_label:"v1.0.5 Release Notes",original_id:"release-notes-v1.0.5"},sidebar:"version-1.6.0-release-notes",previous:{title:"v1.1.0 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.6.0/releases/release-notes-v1.1.0"},next:{title:"v1.0.4 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.6.0/releases/release-notes-v1.0.4"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Document",id:"document",level:3}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Here are the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.5"},"kintone UI Component v1.0.5")," Release Notes.",(0,a.kt)("br",null),"\nBug fixes, maintenances, and new article have been made."),(0,a.kt)("h2",{id:"update-details"},"Update details"),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the keyboard behavior of Dropdown and MultiChoice components when pressing the ",(0,a.kt)("inlineCode",{parentName:"li"},"arrow up")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"arrow down")," key to move between items."),(0,a.kt)("li",{parentName:"ul"},"Fixed the Dropdown menu close behavior when clicking outside of the component on Safari browser.")),(0,a.kt)("h3",{id:"maintenance"},"Maintenance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," markups to the group class of Checkbox and RadioButton components."),(0,a.kt)("li",{parentName:"ul"},"Unified HTML structure of the mobile components' error class."),(0,a.kt)("li",{parentName:"ul"},"Improved the unit tests source code.")),(0,a.kt)("h3",{id:"document"},"Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Mobile timecard customization")," article.")))}p.isMDXComponent=!0}}]);