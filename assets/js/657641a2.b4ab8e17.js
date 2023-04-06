"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[78215],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,f=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return n?a.createElement(f,o(o({ref:e},m),{},{components:n})):a.createElement(f,o({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46977:(t,e,n)=>{n.d(e,{V:()=>r});var a=n(67294);const r=()=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{const e=new Kucs["1.10.0"].ReadOnlyTable({rowsPerPage:3,pagination:!0,columns:[{title:"Number",field:"index"},{title:"City",field:"name"},{title:"Country",field:"country"},{title:"Population",field:"population"},{title:"Coordinates (lat, lng)",field:"coordinates"}],data:[{index:"1",name:"HoChiMinh",country:"Vietnam",population:"8,371,000",coordinates:"10.762622, 106.660172"},{index:"2",name:"Tokyo",country:"Japan",population:"14,000,000",coordinates:"35.689487, 139.691711"},{index:"3",name:"New York",country:"USA",population:"8,400,000",coordinates:"40.712776, -74.005974"},{index:"4",name:"Edmonton",country:"Canada",population:"981,000",coordinates:"53.544388, -113.490929"},{index:"5",name:"Sydney",country:"Australia",population:"6,000,000",coordinates:"-33.868820, 151.209290"},{index:"6",name:"Paris",country:"France",population:"2,165,423",coordinates:"48.856613, 2.352222"}]});t.current.appendChild(e)}),[]),a.createElement("div",{className:"sample-container",id:"readonly-table"},a.createElement("div",{id:"sample-container__components",ref:t}))}},10464:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(46977);const o={id:"readonly-table",title:"ReadOnlyTable",sidebar_label:"ReadOnlyTable",original_id:"readonly-table"},i=void 0,p={unversionedId:"components/desktop/readonly-table",id:"version-1.8.0/components/desktop/readonly-table",title:"ReadOnlyTable",description:"Overview",source:"@site/versioned_docs/version-1.8.0/components/desktop/readonly-table.md",sourceDirName:"components/desktop",slug:"/components/desktop/readonly-table",permalink:"/kuc-docusaurus-v2/docs/1.8.0/components/desktop/readonly-table",draft:!1,tags:[],version:"1.8.0",frontMatter:{id:"readonly-table",title:"ReadOnlyTable",sidebar_label:"ReadOnlyTable",original_id:"readonly-table"},sidebar:"version-1.8.0-docs",previous:{title:"RadioButton",permalink:"/kuc-docusaurus-v2/docs/1.8.0/components/desktop/radio-button"},next:{title:"Spinner",permalink:"/kuc-docusaurus-v2/docs/1.8.0/components/desktop/spinner"}},d={},m=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Column",id:"column",level:4},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],s={toc:m},c="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ReadOnlyTable component allows the user to display a read-only mode table."),(0,r.kt)(l.V,{mdxType:"ReadOnlyTableComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label for the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Label is not displayed if unspecified or empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rowsPerPage"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of table rows per page"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Round off to the nearest whole number when the decimal point is set",(0,r.kt)("br",null),"Will result an error if the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"rowsPerPage")," is not a positive integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pagination"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the pagination"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If setting ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),", pagination is hidden and all rows are displayed",(0,r.kt)("br",null),"If setting ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", pagination is displayed and only the number of rows set in ",(0,r.kt)("inlineCode",{parentName:"td"},"rowsPerPage")," are displayed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"columns"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\<",(0,r.kt)("a",{parentName:"td",href:"#column"},"Column"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Column data of the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"columns")," is not an array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array\\<object",">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Row data of the component"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," is not an array")))),(0,r.kt)("h4",{id:"column"},"Column"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"field"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key of the column"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It represents the key of the ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," object",(0,r.kt)("br",null),"The value associated with that key will be rendered in the column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Header name of the column"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the column"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"ReadOnlyTable(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst readOnlyTable = new ReadOnlyTable({\n  label: 'ReadOnlyTable',\n  columns: [\n    {\n      title: 'Number',\n      field: 'index',\n    },\n    {\n      title: 'City',\n      field: 'name',\n    },\n    {\n      title: 'Country',\n      field: 'country',\n    },\n    {\n      title: 'Population',\n      field: 'population',\n    },\n    {\n      title: 'Coordinates',\n      field: 'coordinates',\n    }\n  ],\n  data: [\n    {\n      index: '1',\n      name: 'HoChiMinh',\n      country: 'Vietnam',\n      population: '8,371,000',\n      coordinates: '10.762622, 106.660172',\n    },\n    {\n      index: '2',\n      name: 'Tokyo',\n      country: 'Japan',\n      population: '14,000,000',\n      coordinates: '35.689487, 139.691711',\n    },\n    {\n      index: '3',\n      name: 'New York',\n      country: 'USA',\n      population: '8,400,000',\n      coordinates: '40.712776, -74.005974',\n    }\n  ],\n  className: 'sample-class',\n  id: 'sample-id',\n  visible: true,\n  pagination: true,\n  rowsPerPage: 3,\n});\nspace.appendChild(readOnlyTable);\n")))}u.isMDXComponent=!0}}]);