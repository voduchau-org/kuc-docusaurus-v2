"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[23098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"release-notes",title:"v1.0.5 Release Notes",sidebar_label:"v1.0.5 Release Notes",original_id:"release-notes"},i=void 0,l={unversionedId:"releases/release-notes",id:"version-1.0.5/releases/release-notes",title:"v1.0.5 Release Notes",description:"Overview",source:"@site/versioned_docs/version-1.0.5/releases/release-notes.md",sourceDirName:"releases",slug:"/releases/release-notes",permalink:"/kuc-docusaurus-v2/docs/1.0.5/releases/release-notes",draft:!1,tags:[],version:"1.0.5",frontMatter:{id:"release-notes",title:"v1.0.5 Release Notes",sidebar_label:"v1.0.5 Release Notes",original_id:"release-notes"},sidebar:"version-1.0.5-release-notes",next:{title:"v1.0.4 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.0.5/releases/release-notes-v1.0.4"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Document",id:"document",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Here are the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.5"},"kintone UI Component v1.0.5")," Release Notes.",(0,a.kt)("br",null),"\nBug fixes, maintenances, and new article have been made."),(0,a.kt)("h2",{id:"update-details"},"Update details"),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the keyboard behavior of Dropdown and MultiChoice components when pressing the ",(0,a.kt)("inlineCode",{parentName:"li"},"arrow up")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"arrow down")," key to move between items."),(0,a.kt)("li",{parentName:"ul"},"Fixed the Dropdown menu close behavior when clicking outside of the component on Safari browser.")),(0,a.kt)("h3",{id:"maintenance"},"Maintenance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," markups to the group class of Checkbox and RadioButton components."),(0,a.kt)("li",{parentName:"ul"},"Unified HTML structure of the mobile components' error class."),(0,a.kt)("li",{parentName:"ul"},"Improved the unit tests source code.")),(0,a.kt)("h3",{id:"document"},"Document"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("inlineCode",{parentName:"li"},"Mobile timecard customization")," article.")))}p.isMDXComponent=!0}}]);