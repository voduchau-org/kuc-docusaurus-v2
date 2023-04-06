"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[72942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,m=c["".concat(u,".").concat(k)]||c[k]||s[k]||a;return n?l.createElement(m,o(o({ref:t},d),{},{components:n})):l.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={id:"comparison-v0-v1",title:"A commentary on the difference between v0 and v1",sidebar_label:"A commentary on the difference between v0 and v1",original_id:"comparison-v0-v1"},o=void 0,i={unversionedId:"guides/comparison-v0-v1",id:"version-1.4.0/guides/comparison-v0-v1",title:"A commentary on the difference between v0 and v1",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.4.0/guides/comparison-v0-v1.md",sourceDirName:"guides",slug:"/guides/comparison-v0-v1",permalink:"/ja/docs/1.4.0/guides/comparison-v0-v1",draft:!1,tags:[],version:"1.4.0",frontMatter:{id:"comparison-v0-v1",title:"A commentary on the difference between v0 and v1",sidebar_label:"A commentary on the difference between v0 and v1",original_id:"comparison-v0-v1"},sidebar:"version-1.4.0-docs",previous:{title:"version",permalink:"/ja/docs/1.4.0/utilities/version"},next:{title:"Search box customization",permalink:"/ja/docs/1.4.0/guides/search-box-customization"}},u={},p=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",level:2},{value:"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:2},{value:"v0 \u3092\u4f7f\u3063\u305f\u5834\u5408",id:"v0-\u3092\u4f7f\u3063\u305f\u5834\u5408",level:3},{value:"v1 \u3092\u4f7f\u3063\u305f\u5834\u5408",id:"v1-\u3092\u4f7f\u3063\u305f\u5834\u5408",level:3},{value:"v0 \u3068 v1 \u306e\u9055\u3044\u3092\u89e3\u8aac",id:"v0-\u3068-v1-\u306e\u9055\u3044\u3092\u89e3\u8aac",level:2},{value:"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u540d\u524d\u304c\u7c21\u7d20\u5316",id:"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u540d\u524d\u304c\u7c21\u7d20\u5316",level:4},{value:"render() \u30e1\u30bd\u30c3\u30c9\u304c\u4e0d\u8981\u306b",id:"render-\u30e1\u30bd\u30c3\u30c9\u304c\u4e0d\u8981\u306b",level:4},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u5024\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u306b",id:"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u5024\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u306b",level:4},{value:"\u30d1\u30fc\u30c4\u4e26\u3073\u306e\u5229\u4fbf\u6027\u5411\u4e0a",id:"\u30d1\u30fc\u30c4\u4e26\u3073\u306e\u5229\u4fbf\u6027\u5411\u4e0a",level:4},{value:"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u898b\u76f4\u3057",id:"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u898b\u76f4\u3057",level:4},{value:"Alert \u3068 Label \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5316",id:"alert-\u3068-label-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5316",level:4},{value:"Item.label \u306e\u81ea\u52d5\u88dc\u5b8c",id:"itemlabel-\u306e\u81ea\u52d5\u88dc\u5b8c",level:4},{value:"\u304a\u308f\u308a\u306b",id:"\u304a\u308f\u308a\u306b",level:2}],d={toc:p},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"kintone UI Component")," \u306e v1 \u306f\u3001\u63d0\u4f9b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7cbe\u67fb\u3084\u30a2\u30af\u30bb\u30b7\u30d3\u30ea\u30c6\u30a3\u5bfe\u5fdc\u306b\u52a0\u3048\u3001\u958b\u767a\u8005\u304c\u3088\u308a\u4f7f\u3044\u3084\u3059\u3044\u3088\u3046\u306b\u5185\u90e8\u8a2d\u8a08\u306e\u898b\u76f4\u3057\u3092\u884c\u3063\u3066\u3044\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001 kintone \u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3067\u4f7f\u3046\u306b\u3042\u305f\u308a\u3001 v0 \u3068 v1 \u306e\u30b3\u30fc\u30c9\u306e\u66f8\u304d\u65b9\u306e\u9055\u3044\u3068\u3001 v1 \u3067\u3088\u308a\u4f7f\u3044\u3084\u3059\u304f\u306a\u3063\u305f\u30dd\u30a4\u30f3\u30c8\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"},"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,r.kt)("p",null,"\u4f8b\u3068\u3057\u3066\u3001 kintone UI Component \u3092\u4f7f\u3063\u3066\u30ec\u30b3\u30fc\u30c9\u306e\u4e00\u89a7\u753b\u9762\u306b\u691c\u7d22\u30dc\u30bf\u30f3\u3092\u4f5c\u308b\u30b3\u30fc\u30c9\u3067\u3054\u7d39\u4ecb\u3057\u307e\u3059\u3002",(0,r.kt)("br",null),"\n\u3053\u3061\u3089\u304c\u753b\u9762\u306e\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u691c\u7d22\u30dc\u30c3\u30af\u30b9",src:n(84469).Z,width:"2108",height:"644"})),(0,r.kt)("h2",{id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,r.kt)("p",null,"\u65e9\u901f\u3067\u3059\u304c\u3001\u307e\u305a\u306f\u30b3\u30fc\u30c9\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002",(0,r.kt)("br",null),"\n\u3053\u3053\u3067\u306f kintone UI Component \u306e UMD \u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("br",null),"\n\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u65b9\u6cd5\u306a\u3069\u306f\u3001 ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/1.4.0/getting-started/quick-start"},"Quick Start")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("h3",{id:"v0-\u3092\u4f7f\u3063\u305f\u5834\u5408"},"v0 \u3092\u4f7f\u3063\u305f\u5834\u5408"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Process to prevent component duplication bug\nif (document.getElementById('my_index_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\n\n// Show search box\nconst text = new kintoneUIComponent.Text({\n  placeholder: 'Enter keywords'\n});\n\nconst button = new kintoneUIComponent.Button({\n  type: 'submit',\n  text: 'Search'\n});\n\n// Use text and a button side by side\ntext.element.style.float = 'left';\nbutton.element.style.float = 'right';\n\nheader.appendChild(text.render());\nheader.appendChild(button.render());\n\n// Specified id for component duplication bug prevention\ntext.element.id = 'my_index_text';\n")),(0,r.kt)("h3",{id:"v1-\u3092\u4f7f\u3063\u305f\u5834\u5408"},"v1 \u3092\u4f7f\u3063\u305f\u5834\u5408"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Process to prevent component duplication bug\nif (document.getElementById('kuc_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\n\n// Show search box\nconst text = new Kuc.Text({\n  placeholder: 'Enter keywords',\n  id: 'kuc_text'\n});\n\nconst button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\nheader.appendChild(text);\nheader.appendChild(button);\n")),(0,r.kt)("h2",{id:"v0-\u3068-v1-\u306e\u9055\u3044\u3092\u89e3\u8aac"},"v0 \u3068 v1 \u306e\u9055\u3044\u3092\u89e3\u8aac"),(0,r.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001 v0 \u3068 v1 \u3067\u306f\u3069\u306e\u3088\u3046\u306b\u30b3\u30fc\u30c9\u306e\u66f8\u304d\u65b9\u304c\u5909\u308f\u3063\u3066\u304f\u308b\u306e\u3067\u3057\u3087\u3046\u304b\u3002"),(0,r.kt)("p",null,"\u4e3b\u306a\u9055\u3044\u306f\u4ee5\u4e0b\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u540d\u524d\u304c\u7c21\u7d20\u5316"),(0,r.kt)("li",{parentName:"ul"},"render() \u30e1\u30bd\u30c3\u30c9\u304c\u4e0d\u8981\u306b"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u5024\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u306b"),(0,r.kt)("li",{parentName:"ul"},"\u30d1\u30fc\u30c4\u4e26\u3073\u306e\u5229\u4fbf\u6027\u5411\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u898b\u76f4\u3057"),(0,r.kt)("li",{parentName:"ul"},"Alert \u3068 Label \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5316"),(0,r.kt)("li",{parentName:"ul"},"Item.label \u306e\u81ea\u52d5\u88dc\u5b8c")),(0,r.kt)("p",null,"\u3072\u3068\u3064\u305a\u3064\u89e3\u8aac\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u540d\u524d\u304c\u7c21\u7d20\u5316"},"\u30cd\u30fc\u30e0\u30b9\u30da\u30fc\u30b9\u306e\u540d\u524d\u304c\u7c21\u7d20\u5316"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"v1 \u3067\u306f\u3001\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u547c\u3073\u51fa\u3057\u65b9\u304c new kintoneUIComponent \u304b\u3089 ",(0,r.kt)("strong",{parentName:"p"},"new Kuc")," \u3068\u306a\u308a\u3001\u3088\u308a\u7c21\u6f54\u306a\u30b3\u30fc\u30c9\u304c\u66f8\u3051\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const text = new kintoneUIComponent.Text({\n  placeholder: 'Enter keywords'\n});\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const text = new Kuc.Text({\n  placeholder: 'Enter keywords'\n});\n")),(0,r.kt)("p",null,"\u307e\u305f\u3001\u3053\u308c\u306b\u3088\u308a\u540c\u4e00\u30a2\u30d7\u30ea\u306b v0 \u3068 v1 \u306e UMD \u304c\u8aad\u307f\u8fbc\u307e\u308c\u305f\u969b\u306b\u3001\u3069\u3061\u3089\u304b\u304c\u4e0a\u66f8\u304d\u3055\u308c\u3066\u3057\u307e\u3046\u3068\u3044\u3046\u30ea\u30b9\u30af\u304c\u306a\u304f\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"render-\u30e1\u30bd\u30c3\u30c9\u304c\u4e0d\u8981\u306b"},"render() \u30e1\u30bd\u30c3\u30c9\u304c\u4e0d\u8981\u306b"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"v0 \u3067\u306f\u3001\u5185\u90e8\u5b9f\u88c5\u306e\u90fd\u5408\u4e0a\u3001appendChild \u3059\u308b\u969b\u306b render() \u30e1\u30bd\u30c3\u30c9\u3092\u7528\u3044\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e Element \u3092\u8fd4\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002",(0,r.kt)("br",null),"\nv1 \u3067\u306f\u3001\u8a2d\u8a08\u3092\u898b\u76f4\u3057\u305f\u3053\u3068\u3067 render() \u304c\u4e0d\u8981\u3068\u306a\u308a\u3001\u3088\u308a\u30b7\u30f3\u30d7\u30eb\u306a\u66f8\u304d\u65b9\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u63cf\u753b\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"header.appendChild(text.render());\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"header.appendChild(text);\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u5024\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u306b"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u5024\u306e\u66f4\u65b0\u304c\u53ef\u80fd\u306b"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"v0 \u3067\u306f\u3001\u5024\u3092\u66f4\u65b0\u3059\u308b\u5834\u5408\u3001\u30e1\u30bd\u30c3\u30c9\u3092\u5225\u9014\u547c\u3073\u51fa\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002",(0,r.kt)("br",null),"\nv1 \u3067\u306f\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u5229\u7528\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const button = new kintoneUIComponent.Button({\n  type: 'submit',\n  text: 'Search'\n});\n\n// Update the value by calling the method\nbutton.setText('Register');\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\n// Property can be used to update values\nbutton.text = 'Register';\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"\u30d1\u30fc\u30c4\u4e26\u3073\u306e\u5229\u4fbf\u6027\u5411\u4e0a"},"\u30d1\u30fc\u30c4\u4e26\u3073\u306e\u5229\u4fbf\u6027\u5411\u4e0a"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"v0 \u3067\u306f\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30d1\u30fc\u30c4\u304c\u7e26\u306b\u4e26\u3076\u4ed5\u69d8\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u6a2a\u4e26\u3073\u306b\u3059\u308b\u305f\u3081\u306b\u306f CSS \u306a\u3069\u3067\u8abf\u6574\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"v0",src:n(74270).Z,width:"2108",height:"646"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"style \u3092\u8abf\u6574\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Use text and button side by side\ntext.element.style.float = 'left';\nbutton.element.style.float = 'right';\n")),(0,r.kt)("p",null,"v1 \u3067\u306f\u5185\u90e8\u4ed5\u69d8\u3092\u898b\u76f4\u3057\u3001\u307b\u3068\u3093\u3069\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u6a2a\u4e26\u3073\u306b\u306a\u3063\u305f\u3053\u3068\u3067\u3001\u8abf\u6574\u304c\u4e0d\u8981\u306b\u306a\u308a\u307e\u3057\u305f\u3002",(0,r.kt)("br",null),"\n\uff08\u5229\u4fbf\u6027\u3092\u8003\u3048\u3001\u4e00\u90e8\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u304c\u7e26\u4e26\u3073\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\uff09"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u691c\u7d22\u30dc\u30c3\u30af\u30b9",src:n(84469).Z,width:"2108",height:"644"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u898b\u76f4\u3057"},"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u898b\u76f4\u3057"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"v1 \u3067\u306f\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3064\u3044\u3066\u3082\u7cbe\u67fb\u3057\u3001\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u898b\u76f4\u3057\u30fb\u8ffd\u52a0\u3092\u884c\u3044\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u4f8b\u3048\u3070\u3001v1 \u3067\u65b0\u898f\u306b\u8ffd\u52a0\u3055\u308c\u305f ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b id \u3092\u4ed8\u4e0e\u3067\u304d\u307e\u3059\u3002",(0,r.kt)("br",null),"\n\u4ed8\u4e0e\u3057\u305f id \u3092\u4f7f\u3063\u3066\u3001\u8981\u7d20\u3092\u53d6\u5f97\u3059\u308b\u3068\u3044\u3063\u305f\u3053\u3068\u304c\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Process to prevent component duplication bug\nif (document.getElementById('my_index_text') !== null) {\n  return event;\n}\n\nconst text = new kintoneUIComponent.Text({\n  placeholder: 'Enter keywords'\n});\n\n// ID property is missing, ID must be granted separately\ntext.element.id = 'my_index_text';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1 \u306e\u30b3\u30fc\u30c9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Process to prevent component duplication bug (ID name granted by the property is available)\nif (document.getElementById('kuc_text') !== null) {\n  return event;\n}\n\nconst header = kintone.app.getHeaderMenuSpaceElement();\nconst text = new Kuc.Text({\n  placeholder: 'Enter keywords',\n  id: 'kuc_text'\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"alert-\u3068-label-\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5316"},"Alert \u3068 Label \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5316"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"v0 \u3067\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u6642\u3084\u3001\u30e9\u30d9\u30eb\u3092\u8868\u793a\u3055\u305b\u305f\u3044\u6642\u306f\u3001 Alert \u3084 Label \u306a\u3069\u306e\u5225\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u5b9f\u88c5\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"v1 \u3067\u306f\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066  ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u3084 ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," \u304c\u7528\u610f\u3055\u308c\u3001\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u6271\u3048\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\u3002",(0,r.kt)("br",null),"\n\u4f8b\u3068\u3057\u3066\u3001Text \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("p",null,"\u5192\u982d\u3067\u3001 KUC \u3092\u4f7f\u3063\u3066\u691c\u7d22\u30dc\u30c3\u30af\u30b9\u3092\u4f5c\u6210\u3059\u308b\u30b3\u30fc\u30c9\u3092\u3054\u7d39\u4ecb\u3057\u307e\u3057\u305f\u304c\u3001\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3082\u4eca\u306e\u307e\u307e\u3067\u306f\u4f55\u3082\u53cd\u5fdc\u3057\u307e\u305b\u3093\u3002"),(0,r.kt)("p",null,"\u305d\u3053\u3067\u3001\u30dc\u30bf\u30f3\u30af\u30ea\u30c3\u30af\u6642\u306b\u3001\u30c6\u30ad\u30b9\u30c8\u306e\u5165\u529b\u5024\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3066\u5024\u304c\u306a\u304b\u3063\u305f\u3089\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3055\u305b\u308b\u3068\u3044\u3046\u51e6\u7406\u3092\u5165\u308c\u3066\u307f\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u304c\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const button = new Kuc.Button({\n  type: 'submit',\n  text: 'Search',\n  id: 'kuc_button'\n});\n\n/* Add the following code */\n\n// Add the process of click event to the displayed button\nbutton.addEventListener('click', event => {\n  const keyword = text.value;\n  const errorMessage = 'Please enter a value.';\n  // Hide the error message\n  text.error = '';\n\n  // Check if there is a value\n  if (!keyword) {\n    // Show the error message\n    text.error = errorMessage;\n    return;\n  }\n});\n")),(0,r.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30af\u30ea\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u5185\u3067\u3001 text.value \u3067\u5024\u3092\u53d6\u5f97\u3057\u3001\u6b63\u898f\u8868\u73fe\u3092\u5229\u7528\u3057\u3066\u5024\u306e\u30c1\u30a7\u30c3\u30af\u3092\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("br",null),"\n\u30c1\u30a7\u30c3\u30af\u306e\u7d50\u679c\u3001\u5168\u89d2\u4ee5\u5916\u306e\u5024\u3067\u3042\u308c\u3070\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u3066\u3001\u51e6\u7406\u3092\u4e2d\u65ad\u3059\u308b\u3068\u3044\u3046\u6d41\u308c\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u8868\u793a\u306b\u5229\u7528\u3057\u3066\u3044\u308b\u306e\u304c\u3001 Text \u306e ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u521d\u671f\u5316\uff08\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u975e\u8868\u793a\uff09\u3082\u3001\u4eca\u56de\u3067\u3042\u308c\u3070 text.error \u306b\u7a7a\u6587\u5b57\u5217\u3092\u4ee3\u5165\u3059\u308b\u3060\u3051\u306a\u306e\u3067\u3001\u7c21\u6f54\u306b\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search_box_error",src:n(88938).Z,width:"2112",height:"646"})),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"itemlabel-\u306e\u81ea\u52d5\u88dc\u5b8c"},"Item.label \u306e\u81ea\u52d5\u88dc\u5b8c"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u9078\u629e\u80a2\u7cfb\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u304a\u3044\u3066\u3001v0 \u3067\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.label")," \u3068 ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value")," \u3069\u3061\u3089\u3082\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"v1 \u3067\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value")," \u306e\u307f\u304c\u5fc5\u9808\u9805\u76ee\u3068\u306a\u308a\u307e\u3059\u3002\u3082\u3057 ",(0,r.kt)("inlineCode",{parentName:"p"},"Item.label")," \u306e\u6307\u5b9a\u304c\u306a\u3044\u5834\u5408\u306f\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Item.value")," \u306e\u5024\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002",(0,r.kt)("br",null),"\nUI \u3067\u8868\u793a\u3059\u308b\u30e9\u30d9\u30eb\u3068\u5185\u90e8\u7684\u306b\u6301\u3064\u5024\u304c\u4e00\u7dd2\u306e\u5834\u5408\u306e\u66f8\u304d\u65b9\u304c\u30b3\u30f3\u30d1\u30af\u30c8\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u7701\u7565\u3057\u3066\u66f8\u304f\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const checkbox = new Kuc.Checkbox({\n  items: [\n    {\n      value: "orange"\n    }\n  ],\n});\n')),(0,r.kt)("h2",{id:"\u304a\u308f\u308a\u306b"},"\u304a\u308f\u308a\u306b"),(0,r.kt)("p",null,"\u3044\u304b\u304c\u3067\u3057\u305f\u3067\u3057\u3087\u3046\u304b\u3002",(0,r.kt)("br",null),"\n\u9032\u5316\u3057\u305f kintone UI Component \u3092\u4f7f\u3063\u3066\u3001\u3053\u308c\u307e\u3067\u4ee5\u4e0a\u306b\u30b9\u30de\u30fc\u30c8\u306a kintone \u958b\u767a\u3092\u4f53\u9a13\u3057\u3066\u3044\u305f\u3060\u3051\u308c\u3070\u5e78\u3044\u3067\u3059\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u8a18\u4e8b\u306f\u3001 2021 \u5e74 2 \u6708\u6642\u70b9\u306e kintone \u3068 Google Chrome \u3067\u78ba\u8a8d\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002",(0,r.kt)("br",null),"\n\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u4f7f\u7528\u3057\u305f kintone UI Component \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001v0.7.4 \u304a\u3088\u3073 v1.0.0 \u3067\u3059\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"v0 \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u5225\u30b5\u30a4\u30c8\u306b\u306a\u308a\u307e\u3059\u306e\u3067\u3001",(0,r.kt)("a",{parentName:"p",href:"https://kintone-labs.github.io/kintone-ui-component/latest/"},"\u3053\u3061\u3089"),"\u3088\u308a\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")))}s.isMDXComponent=!0},74270:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/v0_search_box-700736f261367d2d463d342d0fab326c.png"},84469:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/v1_search_box-7a02c5c35640aebfda1f873a68e87706.png"},88938:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/v1_search_box_error-75c6a9644ebbbb5ba80c192c2f119b99.png"}}]);