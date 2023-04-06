"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[71530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"attachment-customization",title:"Attachment customization",sidebar_label:"Attachment customization",original_id:"attachment-customization"},r=void 0,l={unversionedId:"guides/attachment-customization",id:"version-1.10.0/guides/attachment-customization",title:"Attachment customization",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.10.0/guides/attachment-customization.md",sourceDirName:"guides",slug:"/guides/attachment-customization",permalink:"/ja/docs/guides/attachment-customization",draft:!1,tags:[],version:"1.10.0",frontMatter:{id:"attachment-customization",title:"Attachment customization",sidebar_label:"Attachment customization",original_id:"attachment-customization"},sidebar:"version-1.10.0-docs",previous:{title:"Version conflicts issue and solution",permalink:"/ja/docs/guides/version-conflicts-issue-solution"},next:{title:"Table and ReadOnlyTable customization",permalink:"/ja/docs/guides/table-readonly-table-customization"}},c={},s=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",level:2},{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",level:2},{value:"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\u306e Attachment \u30a8\u30ea\u30a2\u306e\u8868\u793a",id:"\u30ab\u30b9\u30bf\u30e0\u306e-attachment-\u30a8\u30ea\u30a2\u306e\u8868\u793a",level:3},{value:"\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3068 KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3078\u306e\u9069\u7528",id:"\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3068-kuc-attachment-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3078\u306e\u9069\u7528",level:3},{value:"\u30e6\u30fc\u30b6\u30fc\u304c\u6dfb\u4ed8\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u60c5\u5831\u306e\u53d6\u5f97\u3068 type/size \u306e\u691c\u8a3c",id:"\u30e6\u30fc\u30b6\u30fc\u304c\u6dfb\u4ed8\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u60c5\u5831\u306e\u53d6\u5f97\u3068-typesize-\u306e\u691c\u8a3c",level:3},{value:"KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092 kintone \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528",id:"kuc-attachment-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092-kintone-\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,i.kt)("p",null,"\u4eca\u56de\u306f\u3001Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6d3b\u7528\u3068\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306e\u4ed5\u65b9\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u4ee5\u4e0b\u306e\u30b7\u30ca\u30ea\u30aa\u3092\u60f3\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\uff08Blob/ArrayBuffer, \u30b7\u30f3\u30d7\u30eb\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30d1\u30bf\u30fc\u30f3\uff09\u3092\u4f5c\u3063\u3066 KUC\uff08kintone UI Component\uff09\u306e Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u8ffd\u52a0\u3059\u308b"),(0,i.kt)("li",{parentName:"ol"},"\u30e6\u30fc\u30b6\u30fc\u304c\u6dfb\u4ed8\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b"),(0,i.kt)("li",{parentName:"ol"},"\u30d5\u30a1\u30a4\u30eb\u306e type/size \u3092\u691c\u8a3c\u3057\u3066\u4e0d\u6b63\u306a\u5024\u306e\u5834\u5408\u306b\u30a8\u30e9\u30fc\u3092\u8868\u793a\u3059\u308b"),(0,i.kt)("li",{parentName:"ol"},"KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092 kintone \u306e\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b")),(0,i.kt)("h3",{id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ja/docs/components/desktop/attachment"},"Attachment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ja/docs/components/desktop/button"},"Button")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ja/docs/components/desktop/spinner"},"Spinner"))),(0,i.kt)("h2",{id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"},"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u304c\u753b\u9762\u306e\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002\n",(0,i.kt)("img",{alt:"attachment customize",src:n(62707).Z,width:"1901",height:"1111"})),(0,i.kt)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u3080\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u30d5\u30a3\u30fc\u30eb\u30c9\u30b3\u30fc\u30c9\uff1aAttachment\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u30b9\u30da\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u8981\u7d20ID\uff1aspace\uff09")),(0,i.kt)("h2",{id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,i.kt)("p",null,"kintone UI Component \u306e UMD \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30d7\u30ea\u306b\u8aad\u307f\u8fbc\u3093\u3060\u4e0a\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u3092\u3057\u305f JavaScript \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u65b9\u6cd5\u306a\u3069\u306f\u3001 ",(0,i.kt)("a",{parentName:"p",href:"/ja/docs/getting-started/quick-start"},"Quick Start")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h3",{id:"\u30ab\u30b9\u30bf\u30e0\u306e-attachment-\u30a8\u30ea\u30a2\u306e\u8868\u793a"},"\u30ab\u30b9\u30bf\u30e0\u306e Attachment \u30a8\u30ea\u30a2\u306e\u8868\u793a"),(0,i.kt)("p",null,"KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068 2\u3064\u306e Button \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30ab\u30b9\u30bf\u30e0\u30d5\u30a1\u30a4\u30eb\u3092 KUC Attachment \u306b\u8ffd\u52a0\u3059\u308b"),(0,i.kt)("li",{parentName:"ul"},"kintone \u306e\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const KINTONE_ATTACHMENT_FIELD = 'Attachment'; // kintone attachment field ID\nconst SPACE_ID = 'space'; // kintone space ID\nconst Kuc = Kucs['1.x.x'];\nkintone.events.on('app.record.detail.show', async (event) => {\n  if (event.record[`${KINTONE_ATTACHMENT_FIELD}`]) {\n    const attachment = new Kuc.Attachment({\n      files: record[`${KINTONE_ATTACHMENT_FIELD}`].value,\n      label: 'KUC Attachment',\n    });\n    const addCustomFilesButton = new Kuc.Button({\n      text: 'add custom files to KUC Attachment',\n    });\n    const uploadButton = new Kuc.Button({\n      text: 'upload to native kintone Attachment', type: 'submit',\n    });\n    const spinner = new Kuc.Spinner();\n    const spaceElement = kintone.app.record.getSpaceElement(SPACE_ID);\n    const container = document.createElement('div');\n    container.appendChild(attachment);\n    container.appendChild(addCustomFilesButton);\n    container.appendChild(uploadButton);\n    spaceElement.appendChild(container);\n  }\n  return event;\n});\n")),(0,i.kt)("h3",{id:"\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3068-kuc-attachment-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3078\u306e\u9069\u7528"},"\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210\u3068 KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3078\u306e\u9069\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addCustomFilesButton")," \u306b click \u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u6642\u3001\u4ee5\u4e0b\u306e 3\u3064\u306e\u7a2e\u985e\u306e\u30d5\u30a1\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ja/docs/Web/API/File"},"File object")," \u306b\u5909\u63db\u3055\u308c\u305f Blob/ArrayBuffer \u30d5\u30a1\u30a4\u30eb"),(0,i.kt)("li",{parentName:"ul"},"\u30b7\u30f3\u30d7\u30eb\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\uff08",(0,i.kt)("inlineCode",{parentName:"li"},'{name: "xx", size: "xx"}'),"\uff09\n\u305d\u3057\u3066\u3001\u305d\u308c\u3089\u3092 KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,i.kt)("inlineCode",{parentName:"li"},"files")," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const addCustomFilesButton = new Kuc.Button({\n  text: 'add custom files to KUC Attachment',\n});\naddCustomFilesButton.addEventListener('click', () => {\n  attachment.files = attachment.files.concat(initCustomFiles());\n});\nfunction initCustomFiles() {\n  const blob = new Blob(['this type is blob'], {type: 'text'});\n  const buffer = new ArrayBuffer(8);\n  const customFiles = [\n    arrayBufferToFile(buffer, 'array-buffer-file.txt', 'text'),\n    blobToFile(blob, 'blob-file.txt'),\n    {name: 'custom-file.txt', size: '150', type: 'text'},\n  ];\n  return customFiles;\n}\n\nfunction arrayBufferToFile(buffer, filename, type) {\n  const blob = new Blob([buffer], {type: type});\n  return new File([blob], filename, {type: type});\n}\n\nfunction blobToFile(blob, filename) {\n  return new File([blob], filename, {type: blob.type});\n}\n")),(0,i.kt)("h3",{id:"\u30e6\u30fc\u30b6\u30fc\u304c\u6dfb\u4ed8\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u60c5\u5831\u306e\u53d6\u5f97\u3068-typesize-\u306e\u691c\u8a3c"},"\u30e6\u30fc\u30b6\u30fc\u304c\u6dfb\u4ed8\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u60c5\u5831\u306e\u53d6\u5f97\u3068 type/size \u306e\u691c\u8a3c"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"attachment")," \u306b change \u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u3044\u305a\u308c\u304b\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3082\u3057\u304f\u306f\u524a\u9664\u3057\u305f\u5834\u5408\u3001change \u30a4\u30d9\u30f3\u30c8\u306e\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3067\u30d5\u30a1\u30a4\u30eb\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u30d5\u30a1\u30a4\u30eb\u306e type/size\uff08text/50MB\uff09\u3092\u691c\u8a3c\u3057\u3066\u3001\u4e0d\u6b63\u306a\u30d5\u30a1\u30a4\u30eb\u306e\u914d\u5217\u756a\u53f7\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"attachment.addEventListener('change',(event) => {\n  console.log(event.detail); // The changed file info\n  attachment.error = validateAttachmentFiles(event.detail.files);\n});\nfunction validateAttachmentFiles(files) {\n  const acceptType = 'text';\n  const maxSize = 1024 * 1024 * 50; // 50Mb\n  let error = '';\n  let typeErrorCount = 0;\n  let sizeErrorCount = 0;\n  files.forEach((file, index) => {\n    let types = [];\n    if (file.type) {\n      types = file.type.split('/');\n    }\n    // The file type in the native kintone attachment field file is \"contentType\"\n    if (file.contentType) {\n      types = file.contentType.split('/');\n    }\n    if (!types.includes(acceptType)) {\n      typeErrorCount++;\n      console.log(`Invalid type file index is ${index}`);\n    }\n    if (!file.size || parseInt(file.size, 10) > maxSize) {\n      sizeErrorCount++;\n      console.log(`Invalid size file index is ${index}`);\n    }\n  });\n  if (typeErrorCount > 0) {\n    error = `There ${typeErrorCount === 1 ? 'is an invalid type file' : 'are ' + typeErrorCount + ' invalid type files'}!`;\n  }\n  if (sizeErrorCount > 0) {\n    error = `There ${sizeErrorCount === 1 ? 'is an invalid size file' : 'are ' + sizeErrorCount + ' invalid size files'}!`;\n  }\n  return error;\n}\n")),(0,i.kt)("h3",{id:"kuc-attachment-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092-kintone-\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528"},"KUC Attachment \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u3092 kintone \u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u9069\u7528"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"uploadButton")," \u306b click \u30a4\u30d9\u30f3\u30c8\u30ea\u30b9\u30ca\u30fc\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u6642\u3001KUC \u306e Spinner \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\nKintoneRestApiClient \u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"uploadFile")," \u30e1\u30bd\u30c3\u30c9\u3092\u4f7f\u3063\u3066 kintone \u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\nupload \u30e1\u30bd\u30c3\u30c9\u304b\u3089\u8fd4\u3055\u308c\u305f fileKeys \u3092\u4f7f\u3063\u3066 kintone \u306e\u30ec\u30b3\u30fc\u30c9\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u6700\u5f8c\u306b\u3001KUC Spinner \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u9589\u3058\u3066\u30da\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002 ",(0,i.kt)("br",null),"\n\u5168\u3066\u306e API \u30b3\u30fc\u30eb\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," \u3082\u3057\u304f\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://cybozu.dev/ja/kintone/sdk/rest-api-client/kintone-javascript-client/"},"kintone REST API")," \u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const KINTONE_ATTACHMENT_FIELD = 'Attachment'; // kintone attachment field ID\nconst ID = '$id';\nconst uploadButton = new Kuc.Button({\n  text: 'upload to native kintone Attachment', type: 'submit',\n});\nuploadButton.addEventListener('click', async () => {\n  spinner.open();\n  const fileKeys = await uploadFiles(attachment.files);\n  const params = generateRecordParams(fileKeys, record[`${ID}`].value);\n  await updateRecord(params);\n  spinner.close();\n  location.reload();\n});\n\nfunction generateRecordParams(fileKeys, recordId) {\n  const app = kintone.app.getId();\n  const record = {};\n  record[`${KINTONE_ATTACHMENT_FIELD}`] = {value: fileKeys};\n  return {app: app, id: recordId, record: record};\n}\n\nasync function uploadFiles(files) {\n  const fileKeys = [];\n  for (const file of files) {\n    if (!file.fileKey) {\n      const response = await uploadFile({name: file.name, data: file});\n      file.fileKey = response.fileKey;\n    }\n    fileKeys.push({fileKey: file.fileKey});\n  }\n  return fileKeys;\n}\n\nfunction uploadFile(file) {\n  return new Promise((resolve, reject)=>{\n    const formData = new FormData();\n    const blob = new Blob([file], {type: file.type ?? ''});\n    formData.append('__REQUEST_TOKEN__', kintone.getRequestToken());\n    formData.append('file', blob, file.name);\n    const url = 'https://{domain}//k/v1/file.json';\n    const xhr = new XMLHttpRequest();\n    xhr.open('POST', url);\n    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');\n    xhr.onload = () => {\n      if (xhr.status === 200) {\n        // success\n        resolve(JSON.parse(xhr.responseText));\n      } else {\n        // error\n        reject(JSON.parse(xhr.responseText));\n      }\n    };\n    xhr.send(formData);\n  });\n}\n\nfunction updateRecord(params) {\n  return kintone.api(kintone.api.url('/k/v1/record.json', true), 'PUT', params);\n}\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u672c\u8a18\u4e8b\u306f\u3001 2023 \u5e74 2 \u6708\u6642\u70b9\u306e kintone \u3068 Google Chrome \u3067\u78ba\u8a8d\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u4f7f\u7528\u3057\u305f kintone UI Component \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001v1.9.0 \u3067\u3059\u3002")))}m.isMDXComponent=!0},62707:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/attachment_customize-b32f3e6d9a9831d5adf7a82ddabe30ad.gif"}}]);