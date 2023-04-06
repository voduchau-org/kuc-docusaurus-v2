"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[15086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||l;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23023:(e,t,n)=>{n.d(t,{J:()=>r});var a=n(67294);const r=()=>{const e=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=new Kucs["1.10.0"].Dropdown({items:[{label:"orange",value:"Orange"},{label:"apple",value:"Apple"}],value:"Orange"});e.current.appendChild(t)}),[]),a.createElement("div",{className:"sample-container",id:"dropdown"},a.createElement("div",{id:"sample-container__components",ref:e}))}},40222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(23023);const i={id:"dropdown",title:"Dropdown",sidebar_label:"Dropdown",original_id:"dropdown"},o=void 0,d={unversionedId:"components/desktop/dropdown",id:"version-1.3.0/components/desktop/dropdown",title:"Dropdown",description:"Overview",source:"@site/versioned_docs/version-1.3.0/components/desktop/dropdown.md",sourceDirName:"components/desktop",slug:"/components/desktop/dropdown",permalink:"/kuc-docusaurus-v2/docs/1.3.0/components/desktop/dropdown",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"dropdown",title:"Dropdown",sidebar_label:"Dropdown",original_id:"dropdown"},sidebar:"version-1.3.0-docs",previous:{title:"Dialog",permalink:"/kuc-docusaurus-v2/docs/1.3.0/components/desktop/dialog"},next:{title:"MultiChoice",permalink:"/kuc-docusaurus-v2/docs/1.3.0/components/desktop/multichoice"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Dropdown component allows the user to select one out of several options."),(0,r.kt)(l.J,{mdxType:"DropdownComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed in error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error will not be displayed if unspecified or empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label is not displayed if unspecified or empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selected value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No option will be selected if the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"selectedIndex")," are unspecified",(0,r.kt)("br",null),"If setting duplicated value and not setting ",(0,r.kt)("inlineCode",{parentName:"td"},"selectedIndex"),", the first mapped value item in ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value")," will be selected and ",(0,r.kt)("inlineCode",{parentName:"td"},"selectedIndex")," will be the index number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"selectedIndex *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Index of selected item"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It supports specifying which duplicated ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value")," will be selected if there is duplicated ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value")," in ",(0,r.kt)("inlineCode",{parentName:"td"},"items"),(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is not set and ",(0,r.kt)("inlineCode",{parentName:"td"},"selectedIndex")," is valid, item that has the index number will be selected",(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is set with duplicated ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"selectedIndex")," value maps with duplicated ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value")," specified in ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),", the item that has the index number will be selected",(0,r.kt)("br",null),"Will result an error if the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"selectedIndex")," is not a number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the required icon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"items"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\<Item",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of options to display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the value of items is not an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Item.label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text label for each option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.label")," is unspecified, the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value")," is displayed on the UI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Item.value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Value of each option"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Can set duplicated value in ",(0,r.kt)("inlineCode",{parentName:"td"},"Item.value"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," *1: You can set duplicated value in ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value"),". In case setting duplicated value, you can handle selected item using ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedIndex")," property.",(0,r.kt)("br",null),"\nExample: When setting ",(0,r.kt)("inlineCode",{parentName:"p"},"items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}]")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If setting ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and not setting ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"value = 'fruit': The first item will be selected."),(0,r.kt)("li",{parentName:"ul"},"value = 'other': No item will be selected."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If not setting ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and setting ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"selectedIndex = 1: The second item will be selected."),(0,r.kt)("li",{parentName:"ul"},"selectedIndex = 99: No item will be selected."))))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler when the value has been changed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,r.kt)("br",null),(0,r.kt)("br",null),"You can receive the following values in event.detail",(0,r.kt)("br",null),"event.detail.oldValue : Value before the change",(0,r.kt)("br",null),"event.detail.value : Value after changing")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Dropdown(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const space = kintone.app.record.getSpaceElement('space');\nconst dropdown = new Kuc.Dropdown({\n  label: 'Fruit',\n  requiredIcon: true,\n  items: [\n    {\n      label: 'orange',\n      value: 'Orange'\n    },\n    {\n      label: 'apple',\n      value: 'Apple'\n    }\n  ],\n  value: 'Orange',\n  selectedIndex: 0,\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false\n});\nspace.appendChild(dropdown);\n\ndropdown.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);