"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[65845],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(n),c=r,f=s["".concat(p,".").concat(c)]||s[c]||k[c]||l;return n?a.createElement(f,i(i({ref:e},d),{},{components:n})):a.createElement(f,i({ref:e},d))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},95114:(t,e,n)=>{n.d(e,{e:()=>r});var a=n(67294);const r=()=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{const e=new Kucs["1.10.0"].TimePicker({value:"11:30"});t.current.appendChild(e)}),[]),a.createElement("div",{className:"sample-container",id:"time-picker"},a.createElement("div",{id:"sample-container__components",ref:t}))}},68657:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(95114);const i={id:"time-picker",title:"TimePicker",sidebar_label:"TimePicker",original_id:"time-picker"},o=void 0,p={unversionedId:"components/desktop/time-picker",id:"version-1.6.0/components/desktop/time-picker",title:"TimePicker",description:"Overview",source:"@site/versioned_docs/version-1.6.0/components/desktop/time-picker.md",sourceDirName:"components/desktop",slug:"/components/desktop/time-picker",permalink:"/docs/1.6.0/components/desktop/time-picker",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"time-picker",title:"TimePicker",sidebar_label:"TimePicker",original_id:"time-picker"},sidebar:"version-1.6.0-docs",previous:{title:"TextArea",permalink:"/docs/1.6.0/components/desktop/textarea"},next:{title:"MobileButton",permalink:"/docs/1.6.0/components/mobile/mobile-button"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],s={toc:d},k="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The TimePicker component allows the user to display a input area and time selection listbox."),(0,r.kt)(l.e,{mdxType:"TimePickerComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed in error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Error will not be displayed if unspecified or left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label will not be displayed if unspecified or left empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"language"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"auto"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Language setting"),(0,r.kt)("td",{parentName:"tr",align:"left"},'Available options: "auto", "en", "ja", "zh", "zh-TW"',(0,r.kt)("br",null),'If setting "auto", it will be according to the HTML lang setting (If the lang setting is other than "en"/"zh"/"zh-TW"/"ja", the language setting will be "en")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting of the time listbox ending point"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Format is HH:MM",(0,r.kt)("br",null),"In the time listbox, it is displayed up to the time set to ",(0,r.kt)("inlineCode",{parentName:"td"},"max"),", and it is not displayed after that",(0,r.kt)("br",null),"The below time can be used (it will be converted to HH:MM internally):",(0,r.kt)("li",null,"5:30"),(0,r.kt)("li",null,"05:3"),(0,r.kt)("li",null,"5:3"),"If the hour and/or time has only 1 character, 0 will be added to the beginning",(0,r.kt)("br",null),"Will result an error if setting invalid format or value, or ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," time is greater than ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting of the time listbox starting point"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Format is HH:MM",(0,r.kt)("br",null),"In the time listbox, it is displayed from the time set to ",(0,r.kt)("inlineCode",{parentName:"td"},"min"),", and it is not displayed before that",(0,r.kt)("br",null),"The below time can be used (it will be converted to HH:MM internally):",(0,r.kt)("li",null,"5:30"),(0,r.kt)("li",null,"05:3"),(0,r.kt)("li",null,"5:3"),"If the hour and/or time has only 1 character, 0 will be added to the beginning",(0,r.kt)("br",null),"Will result an error if setting invalid format or value, or ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," time is greater than ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Format is HH:MM",(0,r.kt)("br",null),"The below time can be used (it will be converted to HH:MM internally):",(0,r.kt)("li",null,"5:30"),(0,r.kt)("li",null,"05:3"),(0,r.kt)("li",null,"5:3"),"If the hour and/or time has only 1 character, 0 will be added to the beginning",(0,r.kt)("br",null),"Will result an error if setting invalid format or value, or it is out of valid range set by ",(0,r.kt)("inlineCode",{parentName:"td"},"min")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," properties")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hour12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting of the clock display (12-hour clock/24-hour clock) Default is 24-hour clock"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Available options:",(0,r.kt)("br",null),"true: 12-hour clock",(0,r.kt)("br",null),"false: 24-hour clock")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the required icon"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeStep"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Setting of time interval in the time listbox"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unit is minute (positive integer)",(0,r.kt)("br",null),"Round off to the nearest whole number when the decimal point is set",(0,r.kt)("br",null),"Will result an error if it is not a number or greater than the difference between ",(0,r.kt)("inlineCode",{parentName:"td"},"max")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"min"))))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler when the value has been changed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,r.kt)("br",null),(0,r.kt)("br",null),"You can receive the following values in event.detail",(0,r.kt)("br",null),"event.detail.oldValue : Value before the change",(0,r.kt)("br",null),"event.detail.value : Value after the change")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"TimePicker(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst timePicker = new Kuc.TimePicker({\n  label: 'Time',\n  requiredIcon: true,\n  hour12: false,\n  value: '11:30',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false,\n  language: 'en',\n  timeStep: 30,\n  max: '23:59',\n  min: '00:00'\n});\nspace.appendChild(timePicker);\n\ntimePicker.addEventListener('change', event => {\n  console.log(event);\n});\n")))}c.isMDXComponent=!0}}]);