"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[72848],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>b});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(t),m=l,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(b,r(r({ref:n},s),{},{components:t})):a.createElement(b,r({ref:n},s))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[u]="string"==typeof e?e:l,r[1]=d;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=t(87462),l=(t(67294),t(3905));const o={id:"table-readonly-table-customization",title:"Table and ReadOnlyTable customization",sidebar_label:"Table and ReadOnlyTable customization",original_id:"table-readonly-table-customization"},r=void 0,d={unversionedId:"guides/table-readonly-table-customization",id:"version-1.9.0/guides/table-readonly-table-customization",title:"Table and ReadOnlyTable customization",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.9.0/guides/table-readonly-table-customization.md",sourceDirName:"guides",slug:"/guides/table-readonly-table-customization",permalink:"/kuc-docusaurus-v2/ja/docs/1.9.0/guides/table-readonly-table-customization",draft:!1,tags:[],version:"1.9.0",frontMatter:{id:"table-readonly-table-customization",title:"Table and ReadOnlyTable customization",sidebar_label:"Table and ReadOnlyTable customization",original_id:"table-readonly-table-customization"},sidebar:"version-1.9.0-docs",previous:{title:"Attachment customization",permalink:"/kuc-docusaurus-v2/ja/docs/1.9.0/guides/attachment-customization"}},i={},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:2},{value:"Table \u3068 ReadOnlyTable \u306e\u4f7f\u3044\u65b9\u306e\u9055\u3044",id:"table-\u3068-readonlytable-\u306e\u4f7f\u3044\u65b9\u306e\u9055\u3044",level:2},{value:"change \u30a4\u30d9\u30f3\u30c8 \u306e\u7406\u89e3",id:"change-\u30a4\u30d9\u30f3\u30c8-\u306e\u7406\u89e3",level:2},{value:"\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",id:"\u30a2\u30d7\u30ea\u306e\u4f5c\u6210",level:3},{value:"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:3},{value:"\u57fa\u672c\u7684\u306a Table \u306e\u6e96\u5099",id:"\u57fa\u672c\u7684\u306a-table-\u306e\u6e96\u5099",level:3},{value:"UI \u4e0a\u306b\u8868\u793a",id:"ui-\u4e0a\u306b\u8868\u793a",level:3},{value:"event detail \u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"event-detail-\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:3},{value:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u4f8b",id:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u4f8b",level:2},{value:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",id:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",level:3},{value:"ReadOnlyTable",id:"readonlytable",level:4},{value:"Table",id:"table",level:4},{value:"\u4e00\u3064\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u8868\u793a\uff08Table\uff09",id:"\u4e00\u3064\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u8868\u793atable",level:3},{value:"\u4f9d\u5b58\u5217\uff08Table\uff09",id:"\u4f9d\u5b58\u5217table",level:3},{value:"\u5165\u308c\u5b50\u30c6\u30fc\u30d6\u30eb\uff08Table\uff09",id:"\u5165\u308c\u5b50\u30c6\u30fc\u30d6\u30ebtable",level:3}],s={toc:c},u="wrapper";function p(e){let{components:n,...o}=e;return(0,l.kt)(u,(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"\u4eca\u56de\u306f Table \u3068 ReadOnlyTable \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u4f7f\u3044\u65b9\u306e\u9055\u3044\u3001\u6d3b\u7528\u3068\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\n\u4ee5\u4e0b\u306e\u30b7\u30ca\u30ea\u30aa\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9 (",(0,l.kt)("em",{parentName:"li"},"Table, ReadOnlyTable"),")"),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u3064\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u8868\u793a (",(0,l.kt)("em",{parentName:"li"},"Table"),")"),(0,l.kt)("li",{parentName:"ol"},"\u4f9d\u5b58\u5217 (",(0,l.kt)("em",{parentName:"li"},"Table"),")"),(0,l.kt)("li",{parentName:"ol"},"\u5165\u308c\u5b50\u30c6\u30fc\u30d6\u30eb (",(0,l.kt)("em",{parentName:"li"},"Table"),")")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/ja/docs/1.9.0/components/desktop/dropdown"},"Dropdown")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/ja/docs/1.9.0/components/desktop/table"},"Table")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/ja/docs/1.9.0/components/desktop/text"},"Text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/ja/docs/1.9.0/components/desktop/readonly-table"},"ReadOnlyTable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/kuc-docusaurus-v2/ja/docs/1.9.0/components/desktop/radio-button"},"RadioButton"))),(0,l.kt)("h2",{id:"table-\u3068-readonlytable-\u306e\u4f7f\u3044\u65b9\u306e\u9055\u3044"},"Table \u3068 ReadOnlyTable \u306e\u4f7f\u3044\u65b9\u306e\u9055\u3044"),(0,l.kt)("p",null,"\u57fa\u672c\u7684\u306b Table \u3068 ReadOnlyTable \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u540c\u3058\u3088\u3046\u306a\u69cb\u9020\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,"ReadOnlyTable \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3064\u307e\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u64cd\u4f5c\u3067\u304d\u306a\u3044\u30d7\u30ec\u30fc\u30f3\u306a\u30c6\u30ad\u30b9\u30c8\u306e\u307f\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u4e00\u65b9\u3067\u3001Table \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u3001\u30c7\u30fc\u30bf\u3092\u5909\u66f4\u3057\u305f\u308a\u884c\u306e\u8ffd\u52a0/\u524a\u9664\u3092\u3057\u305f\u308a\u3068\u30c6\u30fc\u30d6\u30eb\u306e\u30bb\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u64cd\u4f5c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u6700\u5927\u306e\u9055\u3044\u306f\u3001Table \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"columns")," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c ",(0,l.kt)("inlineCode",{parentName:"p"},"render")," \u30d7\u30ed\u30d1\u30c6\u30a3\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"columns.render"),"\uff09\u3092\u6301\u3063\u3066\u3044\u308b\u3053\u3068\u3067\u3059\u3002\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30e6\u30fc\u30b6\u30fc\u304c\u64cd\u4f5c\u3067\u304d\u308b\u30bb\u30eb\u306b\u8868\u793a\u3059\u308b\u8981\u7d20\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3055\u3089\u306b\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"actionButton")," \u30d7\u30ed\u30d1\u30c6\u30a3\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"table.actionButton"),"\uff09\u3092\u4f7f\u3063\u3066\u884c\u306e\u8ffd\u52a0/\u524a\u9664\u30dc\u30bf\u30f3\u306e\u8868\u793a/\u975e\u8868\u793a\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"change-\u30a4\u30d9\u30f3\u30c8-\u306e\u7406\u89e3"},"change \u30a4\u30d9\u30f3\u30c8 \u306e\u7406\u89e3"),(0,l.kt)("p",null,"Table \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," \u30a4\u30d9\u30f3\u30c8\u306e\u6d41\u308c\u3092\u7406\u89e3\u3059\u308b\u3068\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u304c\u3057\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u30c6\u30fc\u30d6\u30eb\u306e\u30bb\u30eb\u306f\u3001\u30bb\u30eb\u306e\u4e2d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," \u30a4\u30d9\u30f3\u30c8\u3092\u30ea\u30c3\u30b9\u30f3\u3057\u3066\u3001\u65b0\u3057\u3044\u5024\u3092\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b ",(0,l.kt)("inlineCode",{parentName:"p"},"field")," \u306e\u5024\u306b\u767b\u9332\u3057\u307e\u3059\u3002")),(0,l.kt)("h3",{id:"\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"},"\u30a2\u30d7\u30ea\u306e\u4f5c\u6210"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u3080\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30b9\u30da\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\uff08\u8981\u7d20ID\uff1aspace\uff09")),(0,l.kt)("h3",{id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,l.kt)("p",null,"kintone UI Component \u306e UMD \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30d7\u30ea\u306b\u8aad\u307f\u8fbc\u3093\u3060\u4e0a\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u3092\u3057\u305f JavaScript \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\n\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u65b9\u6cd5\u306a\u3069\u306f\u3001 ",(0,l.kt)("a",{parentName:"p",href:"/kuc-docusaurus-v2/ja/docs/1.9.0/getting-started/quick-start"},"Quick Start")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h3",{id:"\u57fa\u672c\u7684\u306a-table-\u306e\u6e96\u5099"},"\u57fa\u672c\u7684\u306a Table \u306e\u6e96\u5099"),(0,l.kt)("p",null,"Text \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067 username \u3092\u8868\u793a\u3059\u308b\u3088\u3046\u306a\u6b21\u306e\u8a2d\u5b9a\u304c\u3042\u308b\u3068\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const renderName = (cellData) => {\n  const text = new Kuc.Text({ value: cellData });\n  return text;\n};\n\nconst columns = [{ title: 'Username', field: 'username', render: renderName }];\nconst data = [{ username: 'user1' }, { username: 'user2' }];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n")),(0,l.kt)("h3",{id:"ui-\u4e0a\u306b\u8868\u793a"},"UI \u4e0a\u306b\u8868\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"render",src:t(68958).Z,width:"574",height:"392"})),(0,l.kt)("p",null,"\u6700\u521d\u306e\u30bb\u30eb\u306e\u5165\u529b\u5024\u3092\u7de8\u96c6\u3057\u305f\u5834\u5408\u3001Text \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f ",(0,l.kt)("inlineCode",{parentName:"p"},"detail.value = 'user1 edited'")," \u3092\u542b\u3080 ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," \u30a4\u30d9\u30f3\u30c8\u3092\u30c8\u30ea\u30ac\u30fc\u3057\u307e\u3059\u3002\n\u305d\u3057\u3066\u30c6\u30fc\u30d6\u30eb\u306f\u5024\u3092\u53d7\u3051\u53d6\u308a\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"username")," field \u306b\u767b\u9332\u3057\u76f4\u3057\u307e\u3059\u3002\n\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"[{ username: 'user1 edited' }, { username: 'user2' }];\n")),(0,l.kt)("h3",{id:"event-detail-\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"event detail \u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,l.kt)("p",null,"\u30c6\u30fc\u30d6\u30eb\u304c\u53d7\u3051\u53d6\u308b\u5024\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3057\u305f\u3044\u5834\u5408\u3001\u30c6\u30fc\u30d6\u30eb\u304c\u305d\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u524d\u306b ",(0,l.kt)("inlineCode",{parentName:"p"},"change")," \u30a4\u30d9\u30f3\u30c8\u5185\u3067\u7de8\u96c6\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u4e0a\u8a18\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u4f7f\u3063\u3066\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"renderName")," \u95a2\u6570\u306b\u4ee5\u4e0b\u306e\u5185\u5bb9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"...\nconst renderName = (cellData) => {\n  const text = new Text({ value: cellData });\n\n  // Modify the value before it bubble to table cell\n  text.addEventListener('change', (event) => {\n    event.detail.value = 'modified value' // add any value you want set to username;\n  });\n  return text;\n};\n...\n")),(0,l.kt)("p",null,"\u6700\u521d\u306e\u30bb\u30eb\u306e\u5165\u529b\u5024\u3092\u7de8\u96c6\u3057\u305f\u5834\u5408\u3001\u30c6\u30fc\u30d6\u30eb\u304c\u53d7\u3051\u53d6\u308b\u5024\u306f\u5fc5\u305a ",(0,l.kt)("inlineCode",{parentName:"p"},"'modified value'")," \u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u4f8b"},"\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u4f8b"),(0,l.kt)("h3",{id:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"},"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"),(0,l.kt)("h4",{id:"readonlytable"},"ReadOnlyTable"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"readonly-table",src:t(47399).Z,width:"692",height:"288"})),(0,l.kt)("p",null,"\u8aad\u307f\u53d6\u308a\u5c02\u7528\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const columns = [\n  {\n      title: 'Name',\n      field: 'name',\n  },\n  {\n      title: 'Gender',\n      field: 'gender',\n  },\n  {\n      title: 'Address',\n      field: 'address',\n  },\n];\n\nconst data = [\n  {\n      name: 'John Brown',\n      gender: 'male',\n      address: 'osaka-japan',\n  },\n  {\n      name: 'Jim Green',\n      gender: 'female',\n      address: 'tokyo-japan',\n  },\n  {\n      name: 'Joe Black',\n      gender: 'male',\n      address: 'hochiminh-vietnam',\n  },\n];\n\nconst readOnlyTable = new Kuc.ReadOnlyTable({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(readOnlyTable);\n"))),(0,l.kt)("h4",{id:"table"},"Table"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"table",src:t(89901).Z,width:"2194",height:"1294"})),(0,l.kt)("p",null,"\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u64cd\u4f5c\u3067\u304d\u308b\u30c6\u30fc\u30d6\u30eb\u3092\u8868\u793a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"columns.render")," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001\u30bb\u30eb\u306b\u8868\u793a\u3055\u308c\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"renderGender")," \u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"renderAddress")," \u95a2\u6570\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// render gender column with dropdown\nconst renderGender = (cellData) => {\n  const radioButton = new Kuc.RadioButton({\n      items: [\n      {\n          label: 'Male',\n          value: 'male',\n      },\n      {\n          label: 'Female',\n          value: 'female',\n      },\n      ],\n      itemLayout: 'vertical',\n      value: cellData,\n  });\n\n  return radioButton;\n};\n\n// render address column with dropdown\nconst renderAddress = (cellData) => {\n  const country = cellData.split('-')[1];\n  const dropdownCountry = new Kuc.Dropdown({\n      items: [\n      {\n          label: 'Viet Nam',\n          value: 'vietnam',\n      },\n      {\n          label: 'Japan',\n          value: 'japan',\n      },\n      ],\n      value: country,\n  });\n\n  return dropdownCountry;\n};\n\nconst columns = [\n  {\n    title: 'Name',\n    field: 'name',\n  },\n  {\n    title: 'Gender',\n    field: 'gender',\n    render: renderGender,\n  },\n  {\n    title: 'Address',\n    field: 'address',\n    render: renderAddress,\n  },\n];\n\nconst data = [\n  {\n      name: 'John Brown',\n      gender: 'male',\n      address: 'osaka-japan',\n  },\n  {\n      name: 'Jim Green',\n      gender: 'female',\n      address: 'tokyo-japan',\n  },\n  {\n      name: 'Joe Black',\n      gender: 'male',\n      address: 'hochiminh-vietnam',\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("h3",{id:"\u4e00\u3064\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u8868\u793atable"},"\u4e00\u3064\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u8868\u793a\uff08Table\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"multi-components",src:t(16589).Z,width:"1074",height:"444"})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"columns.render")," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001\u4e00\u3064\u306e\u30bb\u30eb\u306b\u8907\u6570\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\n\u4ee5\u4e0b\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u306f\u3001\u540c\u3058\u30bb\u30eb\u5185\u306b 2\u3064\u306e Dropdown\uff08city \u3068 country\uff09\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const renderAddress = (cellData, rowData) => {\n  // the format of cellData: 'city-country'\n  const city = cellData.split('-')[0];\n  const country = cellData.split('-')[1];\n\n  const dropdownCity = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Tokyo',\n        value: 'tokyo',\n      },\n      {\n        label: 'Osaka',\n        value: 'osaka',\n      },\n      {\n        label: 'Ho Chi Minh',\n        value: 'hochiminh',\n      },\n    ],\n    value: city,\n  });\n  dropdownCity.addEventListener('change', (event) => {\n    const _country = rowData.address.split('-')[1];\n    event.detail.value = `${event.detail.value}-${_country}`;\n  });\n\n  const dropdownCountry = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Viet Nam',\n        value: 'vietnam',\n      },\n      {\n        label: 'Japan',\n        value: 'japan',\n      },\n    ],\n    value: country,\n  });\n  dropdownCountry.addEventListener('change', (event) => {\n    const _city = rowData.address.split('-')[0];\n    event.detail.value = `${_city}-${event.detail.value}`;\n  });\n\n  const container = document.createElement('div');\n  container.style.display = 'flex';\n  container.appendChild(dropdownCountry);\n  container.appendChild(dropdownCity);\n\n  return container;\n};\n\nconst data = [\n  {\n    name: 'John Brown',\n    gender: 'male',\n    address: 'osaka-japan',\n  },\n  {\n    name: 'Jim Green',\n    gender: 'female',\n    address: 'tokyo-japan',\n  },\n  {\n    name: 'Joe Black',\n    gender: 'male',\n    address: 'hochiminh-vietnam',\n  },\n];\n\nconst columns = [\n  {\n    title: 'Name',\n    field: 'name',\n  },\n  {\n    title: 'Address',\n    field: 'address',\n    render: renderAddress,\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("h3",{id:"\u4f9d\u5b58\u5217table"},"\u4f9d\u5b58\u5217\uff08Table\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dependent-columns",src:t(13706).Z,width:"600",height:"221"})),(0,l.kt)("p",null,"\u4f9d\u5b58\u5217\u3092\u4f5c\u308a\u307e\u3059\u3002",(0,l.kt)("br",null),"\ncountry Dropdown \u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u3089 city Dropdown \u306e\u5024\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// Each country will have corresponding cities\nconst relatedData = {\n  japan: [\n      {label: 'Tokyo', value: 'tokyo'},\n      {label: 'Osaka', value: 'osaka'},\n  ],\n  vietnam: [\n      {label: 'Ha Noi', value: 'hanoi'},\n      {label: 'Ho Chi Minh', value: 'hochiminh'},\n  ],\n};\n\nconst renderCity = (cellData, rowData) => {\n  const dropdownCity = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Tokyo',\n        value: 'tokyo',\n      },\n      {\n        label: 'Ho Chi Minh',\n        value: 'hochiminh',\n      },\n    ],\n    value: cellData,\n  });\n\n  // Logic update city when country column changed\n  lastRenderedCountryComponent.addEventListener('change', (event) => {\n    dropdownCity.items = relatedData[event.detail.value];\n    rowData.city = '';\n  });\n\n  return dropdownCity;\n};\n\nlet lastRenderedCountryComponent;\nconst renderCountry = (cellData) => {\n  const dropdownCountry = new Kuc.Dropdown({\n    items: [\n      {\n        label: 'Viet Nam',\n        value: 'vietnam',\n      },\n      {\n        label: 'Japan',\n        value: 'japan',\n      },\n    ],\n    value: cellData,\n  });\n  lastRenderedCountryComponent = dropdownCountry;\n  return dropdownCountry;\n};\n\nconst columns = [\n  {\n    title: 'Country',\n    field: 'country',\n    render: renderCountry,\n  },\n  {\n    title: 'City',\n    field: 'city',\n    render: renderCity,\n  },\n];\n\nconst data = [\n  {\n    country: 'japan',\n    city: 'tokyo',\n  },\n  {\n    country: 'vietnam',\n    city: 'hochiminh',\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("h3",{id:"\u5165\u308c\u5b50\u30c6\u30fc\u30d6\u30ebtable"},"\u5165\u308c\u5b50\u30c6\u30fc\u30d6\u30eb\uff08Table\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"table-in-table",src:t(89707).Z,width:"1040",height:"562"})),(0,l.kt)("p",null,"\u5165\u308c\u5b50\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u3063\u3066\u5404\u884c\u306b\u3055\u3089\u306b\u8a73\u7d30\u306a\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const renderCity = (cellData) => {\n  const dropdown = new Kuc.Dropdown({\n    items: [\n      {label: 'Tokyo', value: 'tokyo'},\n      {label: 'Ho Chi Minh', value: 'hochiminh'},\n    ],\n    value: cellData,\n  });\n\n  return dropdown;\n};\n\nconst renderCountry = (cellData) => {\n  const renderSubTable = (cellDataSubTable) => {\n    const dropdown = new Kuc.Dropdown({\n      items: [\n        {label: 'Japan', value: 'japan'},\n        {label: 'Viet Nam', value: 'vietnam'},\n      ],\n      value: cellDataSubTable,\n    });\n    return dropdown;\n  };\n\n  const columnsSubTable = [\n    {\n      title: 'Sub Table',\n      field: 'dropdown',\n      render: renderSubTable,\n    },\n  ];\n\n  const dataSubTable = [];\n  for (let i = 0; i < cellData.split(',').length; i++) {\n    dataSubTable.push({dropdown: cellData.split(',')[i]});\n  }\n  const subTable = new Kuc.Table({\n    columns: columnsSubTable,\n    data: dataSubTable,\n  });\n\n  subTable.addEventListener('change', (subTableEvent) => {\n    const _dataSubTable = subTableEvent.detail.data;\n    let countries = '';\n    for (let i = 0; i < _dataSubTable.length; i++) {\n      countries += _dataSubTable[i].dropdown;\n      if (i !== _dataSubTable.length - 1) {\n        countries += ',';\n      }\n    }\n    subTableEvent.detail.value = countries;\n  });\n  return subTable;\n};\n\nconst columns = [\n  {\n    title: 'Country',\n    field: 'country',\n    render: renderCountry,\n  },\n  {\n    title: 'City',\n    field: 'city',\n    render: renderCity,\n  },\n];\n\nconst data = [\n  {\n    city: 'tokyo',\n    country: 'japan',\n  },\n  {\n    city: 'hochiminh',\n    country: 'vietnam',\n  },\n];\n\nconst table = new Kuc.Table({columns, data});\nconst space = kintone.app.record.getSpaceElement('space');\nspace.appendChild(table);\n"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u672c\u8a18\u4e8b\u306f\u3001 2023 \u5e74 2 \u6708\u6642\u70b9\u306e kintone \u3068 Google Chrome \u3067\u78ba\u8a8d\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002",(0,l.kt)("br",null),"\n\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u4f7f\u7528\u3057\u305f kintone UI Component \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001v1.9.0 \u3067\u3059\u3002")))}p.isMDXComponent=!0},13706:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/dependent-columns-ae0983bf1d41dd96f67c896616b92846.gif"},47399:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/readonly-table-bb660b70250584c4e3f645e3ad1b6180.png"},68958:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/table-edit-text-5d6be2ee8745bd0561ae6ced2bb11cdf.gif"},89707:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/table-in-table-74e503f39949f3c326890696213de145.png"},89901:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/table-6cbd798a8d63b829edd4ee0f210ef92c.png"},16589:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/two-component-in-cell-23fd5128cf0a28dfa67a47df47bd31b6.png"}}]);