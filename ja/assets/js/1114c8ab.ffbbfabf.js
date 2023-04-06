"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[92465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>v});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},a=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,a=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(v,s(s({ref:t},a),{},{components:n})):o.createElement(v,s({ref:t},a))}));function v(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:l,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(87462),l=(n(67294),n(3905));const i={id:"version-conflicts-issue-solution",title:"Version conflicts issue and solution",sidebar_label:"Version conflicts issue and solution",original_id:"version-conflicts-issue-solution"},s=void 0,r={unversionedId:"guides/version-conflicts-issue-solution",id:"version-1.7.0/guides/version-conflicts-issue-solution",title:"Version conflicts issue and solution",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.7.0/guides/version-conflicts-issue-solution.md",sourceDirName:"guides",slug:"/guides/version-conflicts-issue-solution",permalink:"/kuc-docusaurus-v2/ja/docs/1.7.0/guides/version-conflicts-issue-solution",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"version-conflicts-issue-solution",title:"Version conflicts issue and solution",sidebar_label:"Version conflicts issue and solution",original_id:"version-conflicts-issue-solution"},sidebar:"version-1.7.0-docs",previous:{title:"Format setting plug-in",permalink:"/kuc-docusaurus-v2/ja/docs/1.7.0/guides/format-setting-plugin"}},u={},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u554f\u984c",id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u554f\u984c",level:2},{value:"\u89e3\u6c7a\u7b56",id:"\u89e3\u6c7a\u7b56",level:2},{value:"\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",id:"\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8",level:2},{value:"UMD \u3092\u5229\u7528\u3059\u308b",id:"umd-\u3092\u5229\u7528\u3059\u308b",level:3},{value:"CDN \u3092\u5229\u7528\u3059\u308b",id:"cdn-\u3092\u5229\u7528\u3059\u308b",level:3},{value:"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",level:3},{value:"\u30b1\u30fc\u30b9\u30b9\u30bf\u30c7\u30a3",id:"\u30b1\u30fc\u30b9\u30b9\u30bf\u30c7\u30a3",level:2},{value:"v1.3.2 \u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051",id:"v132-\u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051",level:3},{value:"\u8907\u6570\u306e KUC \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3080\u5834\u5408\uff08UMD, ESM\uff09",id:"\u8907\u6570\u306e-kuc-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3080\u5834\u5408umd-esm",level:4},{value:"v1.4.0 \u4ee5\u964d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051",id:"v140-\u4ee5\u964d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051",level:3},{value:"\u6700\u5f8c\u306b",id:"\u6700\u5f8c\u306b",level:2}],a={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,l.kt)(p,(0,o.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,l.kt)("p",null,"v1.3.2 \u4ee5\u524d\u306e\u30ea\u30ea\u30fc\u30b9\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u304a\u3044\u3066 kintone UI Component\uff08KUC\uff09\u306b\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u554f\u984c\u304c\u3042\u308a\u307e\u3057\u305f\u3002",(0,l.kt)("br",null),"\n\u3053\u306e\u8a18\u4e8b\u3067\u306f\u305d\u306e\u554f\u984c\u70b9\u3068\u89e3\u6c7a\u7b56\u3001\u307e\u305f\u3069\u306e\u3088\u3046\u306b KUC \u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092 v1.4.0 \u4ee5\u964d\u306e\u6700\u65b0\u7248\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u89e3\u6c7a\u7b56\u3092\u9069\u7528\u3059\u308b\u306e\u304b\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u554f\u984c"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u554f\u984c"),(0,l.kt)("p",null,"\u30a2\u30d7\u30ea\u306b\u5bfe\u3057\u3066\u8907\u6570\u306e\u540c\u4e00\u30d0\u30fc\u30b8\u30e7\u30f3\u3082\u3057\u304f\u306f\u5225\u30d0\u30fc\u30b8\u30e7\u30f3\u306e KUC \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3093\u3060\u969b\u306b\u3001\u30a8\u30e9\u30fc\u304c\u51fa\u529b\u3055\u308c\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u6b63\u3057\u304f\u8868\u793a\u3055\u308c\u306a\u3044\u3068\u3044\u3046\u554f\u984c\u3067\u3059\u3002\u3053\u306e\u4e8b\u8c61\u306f\u3001UMD \u3068 ESM \u3069\u3061\u3089\u306e\u5229\u7528\u65b9\u6cd5\u3067\u3082\u767a\u751f\u3057\u3066\u3044\u307e\u3057\u305f\u3002",(0,l.kt)("br",null),"\nKUC \u3067\u306f ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/Web_Components"},"Web Components")," \u3092\u5229\u7528\u3057\u3066\u304a\u308a\u3001",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_custom_elements"},"custom HTML \u30bf\u30b0"),"\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u751f\u6210\u3057\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u969b\u306b\u4f7f\u3063\u3066\u3044\u308b ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ja/docs/Web/API/CustomElementRegistry"},"CustomElementRegistry")," \u304c\u30b0\u30ed\u30fc\u30d0\u30eb\u306a window \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3042\u308a\u3001Web Components \u3067\u306f\u65e2\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b custom HTML \u30bf\u30b0 \u3092\u518d\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u3002",(0,l.kt)("br",null),"\nKUC \u30d1\u30c3\u30b1\u30fc\u30b8\u304c custom HTML \u30bf\u30b0 \u3092\u767b\u9332\u3059\u308b\u969b\u3001\u5f8c\u304b\u3089\u8aad\u307f\u8fbc\u307e\u308c\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u3082\u540c\u3058\u30bf\u30b0\u3092\u5b9a\u7fa9\u3057\u3088\u3046\u3068\u3059\u308b\u306e\u3067\u3001\u6b63\u5e38\u306b\u52d5\u4f5c\u3057\u306a\u304f\u306a\u308b\u3068\u3044\u3046\u554f\u984c\u304c\u8d77\u304d\u3066\u3044\u307e\u3057\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8907\u6570\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u540c\u3058 custom HTML \u30bf\u30b0\u3092\u5b9a\u7fa9",src:n(40501).Z,width:"821",height:"311"})),(0,l.kt)("h2",{id:"\u89e3\u6c7a\u7b56"},"\u89e3\u6c7a\u7b56"),(0,l.kt)("p",null,"\u65e2\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b custom HTML \u30bf\u30b0\u3092\u518d\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u306e\u3067\u3001v1.4.0 \u304b\u3089\u306f custom HTML \u30bf\u30b0\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3092\u542b\u3081\u308b\u5bfe\u5fdc\u3092\u5165\u308c\u307e\u3057\u305f\u3002\u3053\u306e\u5909\u66f4\u306f\u3001CSS \u30b9\u30bf\u30a4\u30eb\u306e\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u3092\u89e3\u6d88\u3059\u308b\u305f\u3081\u306b\u30af\u30e9\u30b9\u540d\u306b\u3082\u9069\u7528\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Custom HTML tag \u306e\u4f8b",src:n(12413).Z,width:"1324",height:"230"})),(0,l.kt)("center",null,"\u30bf\u30b0\u3068\u30af\u30e9\u30b9\u540d\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3092\u542b\u3081\u308b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"CSS \u306e\u4f8b",src:n(43857).Z,width:"994",height:"528"})),(0,l.kt)("center",null,"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e CSS \u306b\u3082\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u304c\u542b\u307e\u308c\u308b"),(0,l.kt)("p",null,"\u52a0\u3048\u3066\u3001custom HTML \u30bf\u30b0\u3092\u5b9a\u7fa9\u3059\u308b\u524d\u306b\u65e2\u306b\u540c\u3058\u3082\u306e\u304c\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3082\u5224\u5b9a\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002"),(0,l.kt)("h2",{id:"\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"},"\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8"),(0,l.kt)("p",null,"\u5404\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u7528\u306e KUC \u3092\u6700\u65b0\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3057\u3066\u5229\u7528\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"umd-\u3092\u5229\u7528\u3059\u308b"},"UMD \u3092\u5229\u7528\u3059\u308b"),(0,l.kt)("p",null,"v1.4.0 \u4ee5\u964d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u547c\u3073\u51fa\u3059\u969b\u306b Kuc \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4ee3\u308f\u308a\u306b Kucs",'["1.x.x"]'," \u3092\u4f7f\u3063\u3066\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\uff08ex. ",(0,l.kt)("inlineCode",{parentName:"p"},'new Kucs["1.4.0"].Button()'),"\uff09",(0,l.kt)("br",null),"\n\u307e\u305f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30bf\u30b0\u3068\u30af\u30e9\u30b9\u540d\u306b\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,l.kt)("a",{parentName:"p",href:"#%E8%A7%A3%E6%B1%BA%E7%AD%96"},"\u89e3\u6c7a\u7b56"),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066 Kuc \u3092\u4f7f\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u30012\u3064\u4ee5\u4e0a\u306e kuc.min.js \u3092 kintone \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3084\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u8aad\u307f\u8fbc\u3080\u5834\u5408\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u304c\u8d77\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u969b\u3001Kuc \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u6700\u5f8c\u306b\u8aad\u307f\u8fbc\u307e\u308c\u305f kuc.min.js \u3092\u53c2\u7167\u3057\u307e\u3059\u3002",(0,l.kt)("br",null),"\n\u30b7\u30b9\u30c6\u30e0\u4e0a\u306b kuc.min.js \u304c 1\u3064\u3057\u304b\u306a\u3044\u3001\u3082\u3057\u304f\u306f\u6700\u5f8c\u306b\u8aad\u307f\u8fbc\u307e\u308c\u305f kuc.min.js \u306e\u5229\u7528\u3067\u554f\u984c\u306a\u3044\u5834\u5408\u306f\u3001Kuc \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5229\u7528\u3044\u305f\u3060\u3044\u3066\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"const Kuc = Kucs['1.x.x'];")," \u306e\u884c\u3092\u524a\u9664\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,l.kt)("p",null,"v1.3.2 \u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u3001Kuc \u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u30022\u3064\u4ee5\u4e0a\u306e kuc.min.js \u3092 kintone \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3084\u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u554f\u984c\u304c\u8d77\u304d\u308b\u306e\u3067\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst button = new Kuc.Button({text: 'Button', type: 'submit'});\ndocument.body.appendChild(button);\n")),(0,l.kt)("h3",{id:"cdn-\u3092\u5229\u7528\u3059\u308b"},"CDN \u3092\u5229\u7528\u3059\u308b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#umd-%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B"},"UMD \u3092\u5229\u7528\u3059\u308b"),"\u30bb\u30af\u30b7\u30e7\u30f3\u306e\u8aac\u660e\u3068\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002CDN \u306e\u6319\u52d5\u306f kuc.min.js \u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3068\u540c\u3058\u3067\u3059\u3002"),(0,l.kt)("h3",{id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"},"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"),(0,l.kt)("p",null,"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u306f\u5229\u7528\u65b9\u6cd5\u306b\u5909\u66f4\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30bf\u30b0\u3068\u30af\u30e9\u30b9\u540d\u306b\u306f\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u304c\u542b\u307e\u308c\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,l.kt)("a",{parentName:"p",href:"#%E8%A7%A3%E6%B1%BA%E7%AD%96"},"\u89e3\u6c7a\u7b56"),"\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("h2",{id:"\u30b1\u30fc\u30b9\u30b9\u30bf\u30c7\u30a3"},"\u30b1\u30fc\u30b9\u30b9\u30bf\u30c7\u30a3"),(0,l.kt)("h3",{id:"v132-\u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051"},"v1.3.2 \u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051"),(0,l.kt)("p",null,"v1.3.2 \u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u30a8\u30e9\u30fc\u3092\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("h4",{id:"\u8907\u6570\u306e-kuc-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3080\u5834\u5408umd-esm"},"\u8907\u6570\u306e KUC \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u8aad\u307f\u8fbc\u3080\u5834\u5408\uff08UMD, ESM\uff09"),(0,l.kt)("p",null,"\u4f8b\u3048\u3070\u3001v1.2.0 \u306e kuc.min.js \u3092 kintone \u306b\u8aad\u307f\u8fbc\u3093\u3060\u5f8c\u306b v1.3.0 \u306e kuc.min.js \u3092\u30a2\u30d7\u30ea\u306b\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002\nKUC \u306e Button \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u547c\u3073\u51fa\u305d\u3046\u3068\u3059\u308b\u3068\u3001Illegal constructor \u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8907\u6570\u306e kuc.min.js \u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u3068 Illegal constructor \u30a8\u30e9\u30fc\u304c\u767a\u751f",src:n(3765).Z,width:"644",height:"721"})),(0,l.kt)("h3",{id:"v140-\u4ee5\u964d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051"},"v1.4.0 \u4ee5\u964d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5229\u7528\u8005\u5411\u3051"),(0,l.kt)("p",null,"v1.4.0 \u4ee5\u964d\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u8907\u6570\u306e KUC \u30d1\u30c3\u30b1\u30fc\u30b8\uff08ESM\uff09\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3082\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u30a8\u30e9\u30fc\u306f\u8d77\u304d\u307e\u305b\u3093\u3002"),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001\u8907\u6570\u306e kuc.min.js \u30d5\u30a1\u30a4\u30eb\uff08UMD\uff09\u3092\u8aad\u307f\u8fbc\u3093\u3060\u4e0a\u3067\u63a8\u5968\u3059\u308b Kucs \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u4ee3\u308f\u308a\u306b Kuc \u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u30b3\u30f3\u30d5\u30ea\u30af\u30c8\u306e\u30a8\u30e9\u30fc\u306f\u8d77\u304d\u306a\u3044\u3067\u3059\u304c\u3001\u6700\u5f8c\u306b\u8aad\u307f\u8fbc\u307e\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u5229\u7528\u3055\u308c\u308b\u70b9\u306b\u3054\u6ce8\u610f\u304f\u3060\u3055\u3044\u3002"),(0,l.kt)("p",null,"\u307e\u305f\u3001v1.4.0 \u524d\u5f8c\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u540c\u6642\u306b\u4f7f\u3046\u969b\u306f\u8aad\u307f\u8fbc\u307f\u9806\u306b\u3088\u3063\u3066\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u308b\u305f\u3081\u6ce8\u610f\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6700\u5f8c\u306b v1.4.0 \u4ee5\u964d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u8aad\u307f\u8fbc\u3080\u30b1\u30fc\u30b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"v1.4.0 > v1.3.2 > v1.4.x\uff1awindow.Kuc.version \u306f 1.4.x \u3068\u306a\u308a\u30a8\u30e9\u30fc\u306f\u8d77\u304d\u306a\u3044"),(0,l.kt)("li",{parentName:"ul"},"v1.4.0 > v1.4.x > v1.4.0\uff1awindow.Kuc.version \u306f 1.4.0 \u3068\u306a\u308a\u30a8\u30e9\u30fc\u306f\u8d77\u304d\u306a\u3044")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6700\u5f8c\u306b v1.3.2 \u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u8aad\u307f\u8fbc\u3080\u30b1\u30fc\u30b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"v1.4.0 > v1.3.2 > v1.3.0\uff1awindow.Kuc.version \u306f 1.3.0 \u3068\u306a\u308a Illegal constructor \u30a8\u30e9\u30fc\u304c\u8d77\u304d\u308b"),(0,l.kt)("li",{parentName:"ul"},"v1.3.2 > v1.4.0 > v1.3.2\uff1awindow.Kuc.version \u306f 1.3.2 \u3068\u306a\u308a Illegal constructor \u30a8\u30e9\u30fc\u304c\u8d77\u304d\u308b")),(0,l.kt)("p",null,"\u3064\u307e\u308a\u3001Kuc \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u5229\u7528\u3059\u308b\u5834\u5408\u3001\u6700\u5f8c\u306b\u8aad\u307f\u8fbc\u307e\u308c\u305f kuc.min.js \u304c v1.3.2 \u4ee5\u524d\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u5834\u5408\u306f\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u6700\u5f8c\u306b"},"\u6700\u5f8c\u306b"),(0,l.kt)("p",null,"\u3054\u4e0d\u660e\u70b9\u306a\u3069\u3054\u3056\u3044\u307e\u3057\u305f\u3089\u3001",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/issues/new/choose"},"GitHub issue")," \u306b\u3066\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0},3765:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/UMD_multi_files-95aad2070d8d56b66d1bc5e500e4e7f7.jpeg"},43857:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/version-conflict-css-0b6cfa9d79e35c2b71ea1586a76dfdfb.png"},40501:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/version-conflict-diagram-e7c7c7012c3f800aa4938c6d308f492b.jpeg"},12413:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/version-conflict-html-tag-064d278ce2da99e079df9f69b3506b43.png"}}]);