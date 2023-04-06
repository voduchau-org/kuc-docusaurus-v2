"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[3168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),v=o,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},40225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"release-notes-v1.2.0",title:"v1.2.0 Release Notes",sidebar_label:"v1.2.0 Release Notes",original_id:"release-notes-v1.2.0"},i=void 0,l={unversionedId:"releases/release-notes-v1.2.0",id:"releases/release-notes-v1.2.0",title:"v1.2.0 Release Notes",description:"Overview",source:"@site/docs/releases/release-notes-v1.2.0.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.2.0",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.2.0",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes-v1.2.0",title:"v1.2.0 Release Notes",sidebar_label:"v1.2.0 Release Notes",original_id:"release-notes-v1.2.0"},sidebar:"tutorialSidebar",previous:{title:"v1.1.1 Release Notes",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.1.1"},next:{title:"v1.3.0 Release Notes",permalink:"/kuc-docusaurus-v2/docs/next/releases/release-notes-v1.3.0"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"New Features",id:"new-features",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Security Updates",id:"security-updates",level:3},{value:"Document",id:"document",level:3},{value:"Topics to share!",id:"topics-to-share",level:2},{value:"duration property and close event",id:"duration-property-and-close-event",level:3},{value:"input event",id:"input-event",level:3},{value:"version function",id:"version-function",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Here are the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.2.0"},"kintone UI Component v1.2.0")," Release Notes.",(0,o.kt)("br",null),"\nNew Features, maintenances, document updates, and security updates have been made."),(0,o.kt)("h2",{id:"update-details"},"Update details"),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," property on Notification and MobileNotification."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"close")," event on Notification and MobileNotification."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," event on Text, TextArea, MobileText, and MobileTextArea."),(0,o.kt)("li",{parentName:"ul"},"Added the function to get the info of version.")),(0,o.kt)("h3",{id:"maintenance"},"Maintenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed License Finder to check 3rd party libraries' license to the project."),(0,o.kt)("li",{parentName:"ul"},"Fixed accessibility attribute values on Dropdown and MultiChoice."),(0,o.kt)("li",{parentName:"ul"},"Improved some internal processing.")),(0,o.kt)("h3",{id:"security-updates"},"Security Updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated dependent libraries: webpack.")),(0,o.kt)("h3",{id:"document"},"Document"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notification and MobileNotification: Added description of ",(0,o.kt)("inlineCode",{parentName:"li"},"duration")," property and ",(0,o.kt)("inlineCode",{parentName:"li"},"close")," event."),(0,o.kt)("li",{parentName:"ul"},"Text, TextArea, MobileText, MobileTextArea: Added description of ",(0,o.kt)("inlineCode",{parentName:"li"},"input")," event."),(0,o.kt)("li",{parentName:"ul"},"Added the page of version function.")),(0,o.kt)("h2",{id:"topics-to-share"},"Topics to share!"),(0,o.kt)("h3",{id:"duration-property-and-close-event"},"duration property and close event"),(0,o.kt)("p",null,"We added new property and event on Notification and MobileNotification components!",(0,o.kt)("br",null),"\nYou can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"duration")," property to specify the time until the component closes.",(0,o.kt)("br",null),"\nYou can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event to get the timing when clicking the close button."),(0,o.kt)("h3",{id:"input-event"},"input event"),(0,o.kt)("p",null,"We added ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," event to get the value when inserting characters on Text, TextArea, MobileText, and MobileTextArea components.",(0,o.kt)("br",null),'\nYou can utilize it in case you want to implement "incremental search", and so on.'),(0,o.kt)("h3",{id:"version-function"},"version function"),(0,o.kt)("p",null,"Now you can get the version information of the package using version property of Kuc.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"In UMD, you can use version property of Kuc.",(0,o.kt)("br",null),"\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},"console.log(Kuc.version);\n")),(0,o.kt)("br",null),(0,o.kt)("p",null,'In ESM, you can import "version" from kintone-ui-component.',(0,o.kt)("br",null),"\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JavaScript"},'import { version } from "kintone-ui-component/lib/version";\nconsole.log(version);\n')),(0,o.kt)("p",null,"If you have any feedback or ideas, please feel free to post on GitHub issue!"))}d.isMDXComponent=!0}}]);