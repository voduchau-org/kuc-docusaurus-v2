"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[63656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),k=l,u=s["".concat(d,".").concat(k)]||s[k]||c[k]||r;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},13023:(e,t,a)=>{a.d(t,{F:()=>l});var n=a(67294);const l=()=>{const e=(0,n.useRef)();return(0,n.useEffect)((()=>{const t=new Kucs["1.10.0"].MobileCheckbox({className:"cus-mobile-checkbox",value:["Orange"],items:[{label:"orange",value:"Orange"},{label:"apple",value:"Apple"}]});e.current.appendChild(t)}),[]),n.createElement("div",{className:"sample-container",id:"mobile-checkbox"},n.createElement("div",{id:"sample-container__components",className:"mobile",ref:e}))}},55680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(13023);const i={id:"mobile-checkbox",title:"MobileCheckbox",sidebar_label:"MobileCheckbox",original_id:"mobile-checkbox"},o=void 0,d={unversionedId:"components/mobile/mobile-checkbox",id:"version-1.5.0/components/mobile/mobile-checkbox",title:"MobileCheckbox",description:"Overview",source:"@site/versioned_docs/version-1.5.0/components/mobile/mobile-checkbox.md",sourceDirName:"components/mobile",slug:"/components/mobile/mobile-checkbox",permalink:"/kuc-docusaurus-v2/docs/1.5.0/components/mobile/mobile-checkbox",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"mobile-checkbox",title:"MobileCheckbox",sidebar_label:"MobileCheckbox",original_id:"mobile-checkbox"},sidebar:"version-1.5.0-docs",previous:{title:"MobileButton",permalink:"/kuc-docusaurus-v2/docs/1.5.0/components/mobile/mobile-button"},next:{title:"MobileDatePicker",permalink:"/kuc-docusaurus-v2/docs/1.5.0/components/mobile/mobile-date-picker"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],s={toc:m},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The MobileCheckbox component displays a checkbox element for multiple selections."),(0,l.kt)(r.F,{mdxType:"MobileCheckboxComponent"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"className"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"error"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed in error"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error will not be displayed if unspecified or left empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},'""'),(0,l.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Label will not be displayed if unspecified or left empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"borderVisible"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the border"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component from selecting"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the required icon"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"items"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<Item",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of options to display"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"items")," is not an array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Text label for each option"),(0,l.kt)("td",{parentName:"tr",align:"left"},"If ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.label")," is unspecified, the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," is displayed on the UI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Item.value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"null"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Value of each option"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Can set duplicated value in ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value *1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<string",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Selected value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"No option will be selected if the ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," are unspecified",(0,l.kt)("br",null),"If setting duplicated value and not setting ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex"),", the first mapped value item in ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," will be selected and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," will be the index number",(0,l.kt)("br",null),"Will result an error if the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"items")," is not an array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"selectedIndex *1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Array\\<Number",">"),(0,l.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of index of selected item"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It supports specifying which duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," will be selected if there is duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," in ",(0,l.kt)("inlineCode",{parentName:"td"},"items"),(0,l.kt)("br",null),"If ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," is not set and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," is valid, item that has the index number will be selected",(0,l.kt)("br",null),"If ",(0,l.kt)("inlineCode",{parentName:"td"},"value")," is set with duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," value maps with duplicated ",(0,l.kt)("inlineCode",{parentName:"td"},"Item.value")," specified in ",(0,l.kt)("inlineCode",{parentName:"td"},"value"),", item that has the index number will be selected",(0,l.kt)("br",null),"Will result an error if the value of ",(0,l.kt)("inlineCode",{parentName:"td"},"selectedIndex")," is not an array")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"*1: You can set duplicated value in ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Item.value"),". In case setting duplicated value, you can handle selected item using ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," property.",(0,l.kt)("br",null),"\nExample: When setting ",(0,l.kt)("inlineCode",{parentName:"p"},"items = [{label: 'Orange', value: 'fruit'}, {label: 'Apple', value: 'fruit'}, {label: 'Carrot', value: 'vegetable'}, {label: 'Lemon', value: 'fruit'}]")),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If setting ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and not setting ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'vegetable']",": The first and third items will be selected."),(0,l.kt)("li",{parentName:"ul"},"value = ","['meat', 'other']",": No item will be selected."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If not setting ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and setting ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"selectedIndex = ","[0, 1]",": The first and second items will be selected."),(0,l.kt)("li",{parentName:"ul"},"selectedIndex = ","[98, 99]",": No item will be selected."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If setting ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"selectedIndex")," as follows:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'vegetable']",", selectedIndex = ","[1, 3]",": The second and third items will be selected."),(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'fruit', 'vegetable']",", selectedIndex = ","[1, 3]",": The second, third, and fourth items will be selected."),(0,l.kt)("li",{parentName:"ul"},"value = ","['fruit', 'fruit']",", selectedIndex = ","[1, 2, 3]",": The first and second items will be selected.",(0,l.kt)("br",null),"\n\u203b If both ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"selectedIndex")," are set at the same time, the priority of ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," will be higher. Therefore, in the first and third examples above, the item corresponding to 3 of selectedIndex will not be selected."))))),(0,l.kt)("h3",{id:"event"},"Event"),(0,l.kt)("p",null,"Here is a list of events that can be specified:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"change"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Event handler when the value has been changed"),(0,l.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,l.kt)("br",null),(0,l.kt)("br",null),"You can receive the following values in event.detail",(0,l.kt)("br",null),"event.detail.oldValue : Value before the change",(0,l.kt)("br",null),"event.detail.value : Value after the change")))),(0,l.kt)("h3",{id:"constructor"},"Constructor"),(0,l.kt)("p",null,"MobileCheckbox(options)",(0,l.kt)("br",null),"\nHere is a list of available constructors:"),(0,l.kt)("h4",{id:"parameter"},"Parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"options"),(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Please check the ",(0,l.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,l.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.mobile.app.record.getSpaceElement('space');\n\nconst mobileCheckbox = new Kuc.MobileCheckbox({\n  label: 'Fruit',\n  requiredIcon: true,\n  items: [\n    {\n      label: 'orange',\n      value: 'Orange'\n    },\n    {\n      label: 'apple',\n      value: 'Apple'\n    }\n  ],\n  value: ['Orange'],\n  selectedIndex: [0],\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false,\n  borderVisible: true\n});\nspace.appendChild(mobileCheckbox);\n\nmobileCheckbox.addEventListener('change', event => {\n  console.log(event);\n});\n")))}k.isMDXComponent=!0}}]);